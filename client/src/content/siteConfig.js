// Single place for organisation-wide facts and every placeholder value.
// Values in [square brackets] are still waiting for the client. Replace them
// here and every page updates. Use isPlaceholder() to hide unfilled values.

export const isPlaceholder = (value) =>
  typeof value !== 'string' || /^\[.*\]$/.test(value.trim())

export const siteConfig = {
  name: 'Equip Foundation',
  // The client document uses three wordings. The first is used until the client
  // confirms one. Alternatives are kept here so nothing is lost.
  motto: 'Equipping them to equip themselves',
  mottoAlternatives: [
    'Equip them to Equip Themselves',
    'Equipping people and communities to Equip Themselves',
  ],
  vision: 'People and communities equipped to shape their own future.',

  // Client-supplied brand images (public/images/logo/). Each has a WebP
  // version (Task 8.2) that the <picture> element in Header.jsx prefers,
  // falling back to the original for browsers without WebP support.
  // The header artwork is decorative, so it has no alt text.
  assets: {
    logo: {
      src: '/images/logo/Logo.png',
      webp: '/images/logo/Logo.webp',
      width: 400,
      height: 113,
    },
    headerImage: {
      src: '/images/logo/selfmadesilai.jpeg',
      webp: '/images/logo/selfmadesilai.webp',
      width: 400,
      height: 350,
    },
  },
  // Base URL is needed for canonical links / sitemap. Confirm with the client.
  siteUrl: '[Website Domain]',

  address: {
    organisation: 'Equip Foundation',
    line1: '100/1, South street, Keelaiyur,',
    line2: 'Tirukoilur, Kallakurichi District, Tamil Nadu, India.',
    pin: '605757',
    // Short form used under "Contact Details" in the client document.
    short:
      'Equip Foundation, Tirukoilur, Kallakurichi District, Tamil Nadu, India.',
    // Home hero tagline location.
    place: 'Tirukoilur, Tamil Nadu',
  },

  contact: {
    email: '[Official Email Address]',
    phone: '[Contact Number]',
  },

  socials: [
    { id: 'facebook', label: 'Facebook', url: '[Facebook Page]' },
    { id: 'instagram', label: 'Instagram', url: '[Instagram Profile]' },
    { id: 'linkedin', label: 'LinkedIn', url: '[LinkedIn Page]' },
    { id: 'youtube', label: 'YouTube', url: '[YouTube Channel]' },
  ],

  // Bank details are blank in the client document (labels only).
  bank: {
    accountName: '[Name of the Account]',
    bank: '[Bank]',
    branch: '[Branch]',
    ifsc: '[IFSC]',
    accountNumber: '[Account Number]',
  },

  registration: {
    type: 'Trust',
    year: 2011,
    base: 'Tirukoilur, Tamil Nadu',
    section80G: '[80G Registration Number]',
    section12A: '[12A Registration Number]',
    fcra: '[FCRA Registration Number]',
    pan: '[PAN]',
  },

  // Numbers for the Home impact strip.
  impact: {
    established: 2005,
    registered: 2011,
    // Disasters Equip Foundation has responded to in Tamil Nadu.
    disasters: [
      { year: '2011', name: 'Thane Cyclone' },
      { year: '2012', name: 'Cyclone Nilam' },
      { year: '2015', name: 'Floods' },
      { year: '2016', name: 'Cyclone Vardah' },
      { year: '2016–17', name: 'Drought' },
      { year: '2018', name: 'Cyclone Gaja' },
      { year: '2021', name: 'Extreme rainfall and flooding' },
    ],
    covidResponse: true,
  },
}

// The production origin used for canonical links, Open Graph og:url, and the
// sitemap (Task 8.1) — the one place these read from, so there are not four
// different hardcoded domains. `siteConfig.siteUrl` above is still a
// placeholder pending the client's real domain, so until it is confirmed
// this falls back to a reserved example domain (RFC 2606 `.example`) rather
// than guessing a real-looking one.
export const siteOrigin = isPlaceholder(siteConfig.siteUrl)
  ? 'https://www.equipfoundation.example'
  : siteConfig.siteUrl.replace(/\/+$/, '')
