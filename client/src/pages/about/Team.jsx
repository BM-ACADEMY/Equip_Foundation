import { PageHero, Section, TeamCard } from '../../components/ui'
import { team } from '../../content/team'

// Balanced grid: 1 column on phones, 2 on tablets, 4 on desktop, with an
// incomplete last row centred (7 people → 4 + 3).
function TeamGrid({ people }) {
  return (
    <ul className="flex flex-wrap justify-center gap-6">
      {people.map((person) => (
        <li
          key={person.name}
          className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
        >
          <TeamCard {...person} />
        </li>
      ))}
    </ul>
  )
}

// Our Team (/about/team): the Board of Trustees. The Advisors section stays
// hidden until real names are added to content/team.js. All data comes from
// content/team.js.
export default function Team() {
  return (
    <>
      <PageHero title={team.title} />

      <Section title={team.boardTitle}>
        <TeamGrid people={team.trustees} />
      </Section>

      {team.advisors.length > 0 && (
        <Section tone="muted" title={team.advisorsTitle}>
          <TeamGrid people={team.advisors} />
        </Section>
      )}
    </>
  )
}
