// Contact Us copy. Email, phone, address and social URLs come from siteConfig.js.

export const contact = {
  title: 'Contact Us',
  // Field labels used in the client document under "Contact Details".
  labels: { email: 'Email', phone: 'Phone', pin: 'Pin' },
  // The four Contact Us menu items are anchored sections of one page.
  sections: {
    office: {
      id: 'office',
      title: 'Our Office',
      text: 'Our office serves as a point of contact for community members, partners, volunteers, institutions and other stakeholders. Visitors are welcome to connect with our team to learn more about our programmes, initiatives and opportunities for collaboration.',
    },
    details: {
      id: 'details',
      title: 'Contact Details',
      text: 'For programme-related enquiries, partnerships, volunteering, donations, training, research and other organisational matters, please contact us using the details provided above. Our team will respond to your enquiry as soon as possible.',
    },
    social: {
      id: 'social',
      title: 'Social Media',
      text: 'Stay connected with Equip Foundation through our social media platforms to receive updates about our programmes, community initiatives, events, campaigns, opportunities and stories of change.',
      closing:
        'Follow, share and engage with us to help spread awareness about community-led development and the importance of **“Equipping people and communities to Equip Themselves.”**',
    },
    enquiry: {
      id: 'enquiry',
      title: 'Enquiry / Contact Form',
      text: 'We welcome your questions, suggestions, partnership proposals and expressions of interest. Please complete the contact form with your name, contact details and the purpose of your enquiry. This will help us understand your request and connect you with the appropriate person or team.',
    },
  },
  form: {
    fields: {
      name: 'Name',
      organisation: 'Organisation / Institution',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject / Enquiry Type',
      message: 'Message',
      engagementType: 'How would you like to engage with Equip Foundation?',
    },
    submitLabel: 'Send Enquiry',
  },
}

// Options for "How would you like to engage with Equip Foundation?".
// `value` is what the form and the email endpoint use (?type=<value>).
export const engagementOptions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'donate', label: 'Donate / Regular Giving' },
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'training', label: 'Training' },
  { value: 'research', label: 'Research / Consultancy' },
  { value: 'campaign', label: 'Campaign / Events' },
  { value: 'careers', label: 'Careers / Work With Us' },
  { value: 'other', label: 'Other' },
]
