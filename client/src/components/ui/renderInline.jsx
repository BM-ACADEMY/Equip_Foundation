// Turns **bold** markers (used in src/content/*.js) into <strong> elements.
const BOLD = /\*\*(.+?)\*\*/g

export function renderInline(text) {
  const parts = []
  let last = 0
  for (const match of text.matchAll(BOLD)) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      <strong key={match.index} className="font-semibold text-ink">
        {match[1]}
      </strong>,
    )
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}
