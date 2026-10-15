import { useCallback, useState } from 'react'
import { getInitials } from '../../utils/initials'
import { cx } from './cx'

// Large photo team card with name and role at the bottom (not round avatar).
export default function TeamCard({ name, role, photo, className }) {
  const [status, setStatus] = useState('loading') // 'loading' | 'loaded' | 'failed'

  const imageRef = useCallback((node) => {
    if (node?.complete) setStatus(node.naturalWidth > 0 ? 'loaded' : 'failed')
  }, [])

  return (
    <div
      className={cx(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover',
        className,
      )}
    >
      {/* Large photo area */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-50">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-heading text-4xl font-semibold text-brand-700 select-none"
        >
          {getInitials(name)}
        </span>
        {photo && status !== 'failed' && (
          <img
            ref={imageRef}
            src={photo}
            alt={name}
            loading="lazy"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('failed')}
            className={cx(
              'absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-105',
              status === 'loaded' ? 'opacity-100' : 'opacity-0',
            )}
          />
        )}
      </div>

      {/* Name and role at the bottom */}
      <div className="flex flex-1 flex-col justify-center p-5 text-center bg-surface">
        <h3 className="font-heading text-h3 font-semibold text-ink text-balance">
          {name}
        </h3>
        {role && (
          <p className="mt-1.5 text-body font-medium text-brand-700">
            {role}
          </p>
        )}
      </div>
    </div>
  )
}
