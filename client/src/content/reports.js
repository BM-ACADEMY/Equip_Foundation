// Annual reports, 2011-12 to 2025-26.
// To publish a report: drop the PDF into public/reports/ using the expected
// file name below, then set `file` to that path (e.g. '/reports/2011-12.pdf').
// While `file` is null the page shows "Coming soon" instead of a broken link.

const reportFile = (year) => `/reports/annual-report-${year}.pdf`

const years = [
  ['2011-12', '2011-2012'],
  ['2012-13', '2012-2013'],
  ['2013-14', '2013-2014'],
  ['2014-15', '2014-2015'],
  ['2015-16', '2015-2016'],
  ['2016-17', '2016-2017'],
  ['2017-18', '2017-2018'],
  ['2018-19', '2018-2019'],
  ['2019-20', '2019-2020'],
  ['2020-21', '2020-2021'],
  ['2021-22', '2021-2022'],
  ['2022-23', '2022-2023'],
  ['2023-24', '2023-2024'],
  ['2024-25', '2024-2025'],
  ['2025-26', '2025-2026'],
]

// Newest first. `file` stays null until the PDF is supplied.
export const reports = years
  .map(([id, label]) => ({
    id,
    label,
    expectedFile: reportFile(id),
    file: null,
  }))
  .reverse()
