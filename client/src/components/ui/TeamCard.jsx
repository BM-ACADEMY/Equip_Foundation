import { useCallback, useState } from 'react'
import { getInitials } from '../../utils/initials'
import Card from './Card'
import { cx } from './cx'

// Round avatar of a fixed size. The initials are always drawn; a photo (if
// there is one) fades in on top once it has loaded. If the photo is missing or
// fails to load it is removed, so there is never a broken-image icon and the
// size never changes.
function Avatar({ name, photo }) {
  const [status, setStatus] = useState('loading') // 'loading' | 'loaded' | 'failed'
  // The photo may already be complete before React attaches onLoad (cache).
  const imageRef = useCallback((node) => {
    if (node?.complete) setStatus(node.naturalWidth > 0 ? 'loaded' : 'failed')
  }, [])

  return (
    <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-brand-100 text-brand-700">
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-heading text-h1 font-semibold"
      >
        {getInitials(name)}
      </span>
      {photo && status !== 'failed' && (
        <img
          ref={imageRef}
          src={photo}
          alt={name}
          width={112}
          height={112}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('failed')}
          className={cx(
            'absolute inset-0 size-full object-cover transition-opacity duration-300',
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}
    </div>
  )
}

// A person: photo (or initials avatar), name and, when given, role.
// `photo` is a path under public/images/, or null for the initials avatar.
export default function TeamCard({ name, role, photo, className }) {
  return (
    <Card
      padding="none"
      className={cx(
        'flex h-full flex-col items-center p-6 text-center',
        className,
      )}
    >
      <Avatar name={name} photo={photo} />
      <h3 className="mt-4 text-h3 font-semibold text-balance">{name}</h3>
      {role && <p className="mt-1 text-ink-muted">{role}</p>}
    </Card>
  )
}
