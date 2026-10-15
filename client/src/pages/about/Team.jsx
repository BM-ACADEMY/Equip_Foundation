import { PageHero, Section, TeamCard } from '../../components/ui'
import { team } from '../../content/team'

export default function Team() {
  return (
    <>
      <PageHero title={team.title} />

      {/* Board of Trustees */}
      <Section title={team.boardTitle}>
        <div className="space-y-8 sm:space-y-12">
          {/* Row 1: 3 Office Bearers (Pratheep, Jaya, Asmath) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {team.officeBearers.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>

          {/* Row 2: 4 Trustees (Rebecca, Sylviya, Sophia, Phinehas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.trustees.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </Section>

      {/* Our Advisors (Dr. Rocky, Dr. Manikandan, Sylviya, Justus) */}
      {team.advisors.length > 0 && (
        <Section tone="muted" title={team.advisorsTitle}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.advisors.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </Section>
      )}

      {/* Ambassadors */}
      {team.ambassadors?.length > 0 && (
        <Section title={team.ambassadorsTitle || 'Ambassadors'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.ambassadors.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
