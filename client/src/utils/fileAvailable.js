// Asks the server whether a file really exists. Static hosts and the dev
// server answer a missing file with 404, or with the site's index.html (200,
// text/html), so both count as "not there". A network error or an unusual
// status is treated as "unknown" and reported as available, so a hiccup never
// hides a real download.
export async function fileIsAvailable(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    if (response.status === 404 || response.status === 410) return false
    const type = response.headers.get('content-type') ?? ''
    return !(response.ok && type.includes('text/html'))
  } catch {
    return true
  }
}
