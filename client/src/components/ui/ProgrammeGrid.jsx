import ProgrammeCard from './ProgrammeCard'
import { cx } from './cx'

// Responsive list of ProgrammeCards: 1 column on phones, 2 on tablets, 4 on
// desktop. items: [{ title, to }].
export default function ProgrammeGrid({ items = [], className }) {
  return (
    <ul
      className={cx(
        'grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4',
        className,
      )}
    >
      {items.map(({ title, to }) => (
        <li key={to}>
          <ProgrammeCard title={title} to={to} />
        </li>
      ))}
    </ul>
  )
}
