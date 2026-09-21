import { Link } from 'react-router-dom'
import Card from './Card'
import { cx } from './cx'

// Title-only link card for a programme / focus area. Used on the Home page and
// reusable for the Our Work overview. The whole card is one link; it has the
// standard card hover lift and focus ring.
export default function ProgrammeCard({ title, to, className }) {
  return (
    <Card
      as={Link}
      to={to}
      hoverable
      padding="lg"
      className={cx('flex h-full flex-col justify-between gap-4', className)}
    >
      <h3 className="text-h3 font-semibold">{title}</h3>
      <span
        aria-hidden="true"
        className="block h-1 w-10 rounded-full bg-brand-600"
      />
    </Card>
  )
}
