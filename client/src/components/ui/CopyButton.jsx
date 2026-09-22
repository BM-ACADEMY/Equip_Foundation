import { useEffect, useRef, useState } from 'react'
import Button from './Button'

const RESET_AFTER = 2000

// Copies `value` to the clipboard on click, with a temporary state that
// reverts on its own. `fieldLabel` names what is being copied (e.g. "IFSC"),
// so the accessible name stays specific ("Copy IFSC" / "Copied IFSC") even
// though the visible label is just "Copy" / "Copied". Uses the native
// Clipboard API; a failure (unsupported browser, no permission, non-secure
// context) shows briefly rather than throwing.
export default function CopyButton({ value, fieldLabel, className }) {
  const [state, setState] = useState('idle') // 'idle' | 'copied' | 'error'
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState('copied')
    } catch {
      setState('error')
    }
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setState('idle'), RESET_AFTER)
  }

  const text =
    state === 'copied' ? 'Copied' : state === 'error' ? "Couldn't copy" : 'Copy'

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      aria-label={`${text} ${fieldLabel}`}
      className={className}
    >
      {text}
    </Button>
  )
}
