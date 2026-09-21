// Picks the related pages for a page: a fixed number (3 by default) of OTHER
// pages from the same list, as { title, to } ready for a link card.
//  - A page may list preferred slugs in `page.related`; valid ones come first.
//  - The rest are filled from the pages that follow it in the list, wrapping
//    round to the start. The result is always the same for the same page.
//  - The page itself is never included, and every link points at a page in
//    `pages`, so no link can be broken.
// `basePath` is the section's path, e.g. "/work".
export function getRelatedPages(page, pages, basePath, count = 3) {
  const index = pages.findIndex((item) => item.slug === page.slug)
  if (index === -1) return []

  const others = pages.filter((item) => item.slug !== page.slug)
  const preferred = (page.related ?? [])
    .map((slug) => others.find((item) => item.slug === slug))
    .filter(Boolean)
  const rotation = [...pages.slice(index + 1), ...pages.slice(0, index)]

  return [...new Set([...preferred, ...rotation])]
    .slice(0, count)
    .map(({ title, slug }) => ({ title, to: `${basePath}/${slug}` }))
}
