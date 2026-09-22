import {
  Card,
  CTABand,
  CopyButton,
  PageHero,
  RichText,
  Section,
} from '../../components/ui'
import { involvePages } from '../../content/involve'
import { isPlaceholder, siteConfig } from '../../content/siteConfig'
import { getInvolveCta } from '../../utils/involveCta'

const donatePage = involvePages.find((page) => page.slug === 'donate')

// Donate (/get-involved/donate): the client's donation copy, the Bank Details
// card (data-driven from siteConfig.bank, one Copy button per available
// field), and the "Send us your payment reference" CTA that opens Contact
// with the Donate enquiry type pre-selected. No payment gateway.
export default function Donate() {
  const { title, body, bankTitle, bankFields, bankPendingLabel } = donatePage
  const cta = getInvolveCta(donatePage)

  return (
    <>
      <PageHero title={title} />

      <Section>
        <Card padding="none" className="p-6 md:p-8">
          <RichText text={body} />
        </Card>
      </Section>

      <Section tone="muted" size="narrow">
        <Card padding="lg">
          <h2 className="text-h3 font-semibold">{bankTitle}</h2>
          <dl className="mt-4 divide-y divide-line">
            {bankFields.map(({ key, label }) => {
              const value = siteConfig.bank[key]
              const available = !isPlaceholder(value)
              return (
                <div
                  key={key}
                  className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <dt className="text-small font-semibold tracking-wide text-ink-muted uppercase">
                      {label}
                    </dt>
                    <dd
                      className={
                        available
                          ? 'mt-1 truncate font-heading text-lead'
                          : 'mt-1 text-lead text-ink-muted italic'
                      }
                    >
                      {available ? value : bankPendingLabel}
                    </dd>
                  </div>
                  {available && (
                    <CopyButton
                      value={value}
                      fieldLabel={label}
                      className="shrink-0"
                    />
                  )}
                </div>
              )
            })}
          </dl>
        </Card>
      </Section>

      <CTABand actions={cta.actions} />
    </>
  )
}
