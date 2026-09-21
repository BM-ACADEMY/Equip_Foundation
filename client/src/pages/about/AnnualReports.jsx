import { useEffect, useState } from 'react'
import { Badge, Button, Card, PageHero, Section } from '../../components/ui'
import { aboutPages } from '../../content/about'
import { reportLabels, reports } from '../../content/reports'
import { fileIsAvailable } from '../../utils/fileAvailable'

// Annual Reports (/about/annual-reports): one row per financial year, newest
// first (the order in content/reports.js). A year with a PDF shows a Download
// button; a year without one, or whose PDF is not actually on the server,
// shows "Coming soon". To publish a report: put the PDF in public/reports/ and
// set that year's `file` in content/reports.js. Nothing here changes.
export default function AnnualReports() {
  // Ids of reports whose `file` is set but could not be found on the server.
  const [missing, setMissing] = useState(() => new Set())

  useEffect(() => {
    let cancelled = false
    for (const { id, file } of reports) {
      if (!file) continue
      fileIsAvailable(file).then((available) => {
        if (!available && !cancelled) {
          setMissing((current) => new Set(current).add(id))
        }
      })
    }
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <PageHero title={aboutPages.annualReports.title} />

      <Section size="narrow">
        <ul className="space-y-3">
          {reports.map(({ id, label, file }) => (
            <li key={id}>
              <Card
                padding="none"
                className="flex items-center justify-between gap-4 p-4 md:p-5"
              >
                <span className="font-heading text-h3 font-semibold">
                  {label}
                </span>
                {file && !missing.has(id) ? (
                  <Button href={file} download>
                    {reportLabels.download}
                    <span className="sr-only">
                      {' '}
                      {label} {reportLabels.reportName}
                    </span>
                  </Button>
                ) : (
                  <Badge variant="neutral">{reportLabels.comingSoon}</Badge>
                )}
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
