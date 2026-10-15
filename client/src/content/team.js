// Team page data.
// `photo` is a path under public/images/ (e.g. '/images/team/name.jpg').
// Leave it null to show the initials avatar.

const officeBearers = [
  {
    name: 'Dr. R. Pratheep Kumar',
    role: 'Chairman',
    photo: '/images/team/Mr.R.Pratheep Kumar, Chairman.jpg',
  },
  {
    name: 'Mrs. M. Jaya',
    role: 'Secretary',
    photo: '/images/team/Mrs.M.Jaya, Secretary.jpeg',
  },
  {
    name: 'Mrs. M. Asmath',
    role: 'Treasurer',
    photo: '/images/team/Mrs.M.Asmath, Treasurer.jpeg',
  },
]

const trustees = [
  {
    name: 'Dr. B. Rebecca Jayavadhanam',
    role: 'Trustee',
    photo: '/images/team/Dr.B.Rebecca Jayavadhanam, Trustee.jpeg',
  },
  {
    name: 'Dr. S. Silviya Betsy',
    role: 'Trustee',
    photo: '/images/team/Dr.S.Silviya Betsy, Trustee.jpeg',
  },
  {
    name: 'Mrs. S. Sophia Rajakumari',
    role: 'Trustee',
    photo: '/images/team/Mrs.S.Sophia Rajakumari, Trustee.jpeg',
  },
  {
    name: 'Mr. P. Phinehas Sherun Rajkumar',
    role: 'Trustee',
    photo: '/images/team/Mr.P.Phinehas Sherun Rajkumar, Trustee.JPG',
  },
]

export const team = {
  title: 'Our Team',
  boardTitle: 'Board of Trustees',
  officeBearers,
  trustees,
  allTrustees: [...officeBearers, ...trustees],
  advisorsTitle: 'Our Advisors',
  advisors: [
    {
      name: 'Dr. Rocky',
      role: 'MEAL & Development',
      photo: '/images/team/Dr.Innacy Saint Rock.jpeg',
    },
    {
      name: 'Dr. Manikandan',
      role: 'Differently Abled',
      photo: '/images/team/Dr.Manikandan.jpeg',
    },
    {
      name: 'Mrs. V. Sylviya Grace',
      role: 'Education',
      photo: '/images/team/Mrs.V.Sylviya Grace.jpeg',
    },
    {
      name: 'Mr. Justus',
      role: 'Sports & Recreation',
      photo: '/images/team/Mr.Justus.jpeg',
    },
  ],
  ambassadorsTitle: 'Ambassadors',
  ambassadors: [
    {
      name: 'Mr. R. Prabakaran',
      role: 'Ambassador - USA',
      photo: '/images/team/Mr.R.Prabakaran, Ambassador -USA.jpg',
    },
  ],
}
