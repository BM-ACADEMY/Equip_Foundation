// Task 8.1 — build-time static pre-rendering.
//
// Runs after `vite build` (see package.json's "build" script). For each of
// the site's public routes it renders the SAME route tree used in the
// browser (src/routes.jsx, via React Router's static SSR API) to an HTML
// string, injects it plus that route's <title>/meta description/Open Graph/
// Twitter/canonical tags (content/seo.js) into a copy of the already-built
// dist/index.html, and writes it to dist/<route>/index.html — so every
// route is real, crawlable HTML, not just one generic shell + client JS.
//
// Also writes dist/sitemap.xml, dist/robots.txt and dist/404.html from the
// same canonical route list (navConfig.js's allPaths), so there is one
// source of truth for "what are the site's public routes" everywhere.
//
// No new dependency: react-dom/server and react-router-dom's static-router
// SSR API are already part of the existing toolchain.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom'
import { createServer } from 'vite'

const ROOT = path.dirname(fileURLToPath(new URL('.', import.meta.url)))
const DIST = path.join(ROOT, 'dist')

// Load the app's own route tree and content through Vite (so JSX, the
// content/*.js files, and everything they import resolve exactly as they
// do in the real app) without starting an actual HTTP server.
const vite = await createServer({
  root: ROOT,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
})
const { routes } = await vite.ssrLoadModule('/src/routes.jsx')
const { allPaths } = await vite.ssrLoadModule('/src/content/navConfig.js')
const { seo } = await vite.ssrLoadModule('/src/content/seo.js')
const { siteOrigin } = await vite.ssrLoadModule('/src/content/siteConfig.js')
await vite.close()

if (!existsSync(DIST)) {
  throw new Error('dist/ not found — run `vite build` before prerender.mjs')
}

const template = readFileSync(path.join(DIST, 'index.html'), 'utf8')
const handler = createStaticHandler(routes)

// Renders one route's HTML via the exact route tree the browser uses.
async function renderRoute(routePath) {
  const request = new Request(new URL(routePath, 'http://prerender.local'))
  const context = await handler.query(request)
  if (context instanceof Response) {
    throw new Error(`Unexpected redirect/response rendering ${routePath}`)
  }
  const router = createStaticRouter(handler.dataRoutes, context)
  return renderToString(
    React.createElement(StaticRouterProvider, { router, context }),
  )
}

// Escapes a string for safe insertion into an HTML attribute value.
const attr = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

function pageHtml(routePath, bodyHtml) {
  const meta = seo[routePath]
  if (!meta) throw new Error(`No content/seo.js entry for ${routePath}`)
  const url = new URL(routePath, siteOrigin + '/').toString()

  // Prettier wraps long attributes onto their own line (`<meta\n  name=…`),
  // so these match across whitespace/attribute order within one tag rather
  // than assuming `<meta name="x"` is one contiguous literal substring.
  let html = template
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${attr(meta.title)}</title>`,
  )
  html = html.replace(
    /<meta[^>]*?\bname="description"[^>]*\/>/,
    `<meta name="description" content="${attr(meta.description)}" />`,
  )
  html = html.replace(
    /<link[^>]*?\brel="canonical"[^>]*\/>/,
    `<link rel="canonical" href="${attr(url)}" />`,
  )
  html = html.replace(
    /<meta[^>]*?\bproperty="og:title"[^>]*\/>/,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
  )
  html = html.replace(
    /<meta[^>]*?\bproperty="og:description"[^>]*\/>/,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
  )
  html = html.replace(
    /<meta[^>]*?\bproperty="og:url"[^>]*\/>/,
    `<meta property="og:url" content="${attr(url)}" />`,
  )
  html = html.replace(
    /<meta[^>]*?\bname="twitter:title"[^>]*\/>/,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
  )
  html = html.replace(
    /<meta[^>]*?\bname="twitter:description"[^>]*\/>/,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
  )
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${bodyHtml}</div>`,
  )
  return html
}

function writeRoute(routePath, html) {
  const outDir =
    routePath === '/'
      ? DIST
      : path.join(DIST, ...routePath.split('/').filter(Boolean))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, 'index.html'), html)
}

for (const routePath of allPaths) {
  const bodyHtml = await renderRoute(routePath)
  writeRoute(routePath, pageHtml(routePath, bodyHtml))
}

// 404.html: a real not-found page for static hosts that serve it for any
// unmatched path (Netlify, GitHub Pages, S3, etc.). Not one of the public
// routes, not listed in the sitemap.
{
  const bodyHtml = await renderRoute('/__prerender-404-probe__')
  const html = template
    .replace(
      /<title>[\s\S]*?<\/title>/,
      '<title>Page not found — Equip Foundation</title>',
    )
    .replace(
      /<meta[^>]*?\bname="description"[^>]*\/>/,
      '<meta name="description" content="The page you are looking for does not exist." />',
    )
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`)
  writeFileSync(path.join(DIST, '404.html'), html)
}

// sitemap.xml — exactly the canonical route list, absolute production URLs,
// no /404, no duplicates, no invented lastmod dates.
{
  const urls = allPaths
    .map(
      (p) =>
        `  <url>\n    <loc>${attr(new URL(p, siteOrigin + '/').toString())}</loc>\n  </url>`,
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  writeFileSync(path.join(DIST, 'sitemap.xml'), xml)
}

// robots.txt
{
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`
  writeFileSync(path.join(DIST, 'robots.txt'), robots)
}

console.log(
  `Pre-rendered ${allPaths.length} routes + 404.html, sitemap.xml, robots.txt`,
)
console.log(`Site origin used: ${siteOrigin}`)
