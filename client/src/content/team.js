// Team page data. To add a trustee, add an object below.
// `photo` is a path under public/images/ (e.g. '/images/team/name.jpg').
// Leave it null to show the initials avatar.

export const team = {
  title: 'Our Team',
  boardTitle: 'Board of Trustees',
  trustees: [
    { name: 'Dr. R. Pratheep Kumar', role: 'Chairperson', photo: null },
    { name: 'Mrs. Jaya', role: 'Secretary', photo: null },
    { name: 'Mrs. Sofia Rajakumari', role: 'Treasurer', photo: null },
    { name: 'Mr. R. Prabakaran', role: 'Trustee', photo: null },
    { name: 'Dr. B. Rebecca Jayavadhanam', role: 'Trustee', photo: null },
    { name: 'Mrs. Asmath', role: 'Trustee', photo: null },
    { name: 'Mr. P. Phinehas Sherun Rajkumar', role: 'Trustee', photo: null },
  ],
  advisorsTitle: 'Advisors',
  // The client document only lists "1, 2, 3". Keep empty so the section stays
  // hidden until real names arrive.
  advisors: [],
}
