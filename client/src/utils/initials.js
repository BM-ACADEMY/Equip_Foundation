// Titles that are dropped before taking initials ("Dr.", "Mrs.", ...).
const TITLES = /^(dr|mr|mrs|ms|miss|prof|rev|er|sri|shri|smt)\.?$/i

// Initials for an avatar: the first letters of the first two words of the
// name, ignoring a leading title. "Dr. R. Pratheep Kumar" → "RP",
// "Mrs. Sofia Rajakumari" → "SR", "Mrs. Jaya" → "J".
export function getInitials(name = '') {
  const words = name.trim().split(/\s+/).filter(Boolean)
  while (words.length > 1 && TITLES.test(words[0])) words.shift()
  return words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}
