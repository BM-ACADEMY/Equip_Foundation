// Get Involved copy. **double asterisks** mark the bold phrases from the client
// document.
//
// `cta.type` is the enquiry type passed to the contact form as /contact?type=…
// (values match engagementOptions in contact.js).

export const involveOverview = {
  title: 'Get Involved',
  intro:
    'Equip Foundation believes that **lasting change happens when people come together, share their strengths and take collective action**. There are many ways for individuals, communities, institutions and organisations to become part of our journey. Whether through campaigning, giving, volunteering, partnerships, fundraising or working with us, your contribution can help strengthen communities and create opportunities for children, women and vulnerable families.',
  // Closing paragraph that follows the Careers copy in the client document.
  closing:
    'Equip Foundation welcomes individuals, community members, organisations, institutions, volunteers, donors and development partners to connect with us. Whether you would like to learn more about our programmes, explore a partnership, volunteer with us, support our work or seek information, we would be happy to hear from you.',
}

export const involvePages = [
  {
    slug: 'campaign-with-us',
    title: 'Campaign With Us',
    body: [
      'Equip Foundation believes that meaningful and lasting change is possible when communities and concerned citizens come together. You can **campaign with us** to raise awareness and encourage collective action on issues such as child rights and protection, education, livelihoods, gender equality, human rights, climate change, disaster resilience and social inclusion. By sharing information, organising awareness activities and engaging your networks, you can help bring important community issues into wider public attention.',
      'Our campaigns are designed to encourage **positive, informed and community-led action**. Individuals, schools, youth groups, community organisations, professionals and institutions can participate by supporting awareness campaigns, public events, digital campaigns and local initiatives. Together, we can amplify community voices, promote responsible citizenship and contribute to building safer, more inclusive and resilient communities.',
    ],
    cta: { label: 'Join a campaign', type: 'campaign' },
  },
  {
    slug: 'regular-giving',
    title: 'Give / Regular Giving',
    body: [
      "Regular giving enables Equip Foundation to plan and sustain long-term programmes that address the underlying challenges faced by vulnerable communities. A regular contribution, however small, can support activities in **education, child protection, livelihoods, women's empowerment, human rights, disaster preparedness and climate resilience**. Consistent support allows us to work with communities over time rather than limiting our efforts to short-term interventions.",
      'Through regular giving, you become a sustained partner in the journey of community development. Your contribution can help provide educational support to children, strengthen community institutions, develop livelihoods, build local leadership and support families during times of crisis. **Your regular commitment can help communities build their own capacities and equip themselves for a more secure and sustainable future.**',
    ],
    cta: { label: 'Start regular giving', type: 'donate' },
  },
  {
    slug: 'donate',
    title: 'Donate',
    body: [
      "Your donation can help Equip Foundation respond to identified community needs and support programmes that create lasting change. Contributions can support **education, child rights and protection, livelihood development, women's empowerment, legal empowerment, humanitarian assistance, environmental protection and disaster resilience**. We seek to ensure that resources are used responsibly and directed towards activities that provide meaningful benefits to communities.",
      'Every contribution represents an opportunity to stand alongside communities and support their aspirations. Whether it is a one-time contribution or support for a specific programme, your generosity can help create opportunities for children, women and vulnerable families while strengthening community capacity. **Together, we can turn resources into opportunities, knowledge, resilience and sustainable community-led change.**',
    ],
    bankTitle: 'Bank Details',
    // Row labels for the bank card; values come from siteConfig.bank.
    bankFields: [
      { key: 'accountName', label: 'Name of the Account' },
      { key: 'bank', label: 'Bank' },
      { key: 'branch', label: 'Branch' },
      { key: 'ifsc', label: 'IFSC' },
      // Client still needs to supply the account number.
      { key: 'accountNumber', label: 'Account Number' },
    ],
    // Shown instead of a value + Copy button for any bank field the client
    // has not supplied yet (checked with siteConfig.isPlaceholder).
    bankPendingLabel: 'To be added',
    cta: { label: 'Send us your payment reference', type: 'donate' },
  },
  {
    slug: 'volunteer',
    title: 'Volunteer',
    body: [
      "Volunteers are an important part of Equip Foundation's community engagement and development work. We welcome individuals who are willing to contribute their **time, knowledge, professional skills, creativity and energy** to community initiatives. Volunteers can support education programmes, awareness campaigns, child rights and protection activities, environmental initiatives, disaster preparedness, livelihood programmes, research, communications and community events.",
      'Volunteering is also an opportunity to **learn from communities and contribute to meaningful social change**. Students, professionals, educators, development practitioners, researchers and community members can participate according to their interests and areas of expertise. Equip Foundation seeks to create meaningful volunteering opportunities where people can share their strengths while helping communities identify and build upon their own assets and capacities.',
    ],
    cta: { label: 'Volunteer with us', type: 'volunteer' },
  },
  {
    slug: 'ambassador',
    title: 'Become an Ambassador',
    body: [
      'Equip Foundation Ambassadors are individuals who believe in **community empowerment and the principle of “Equip them to Equip Themselves”** and are willing to champion this vision within their own networks. Ambassadors can help create awareness about our programmes, connect us with communities and institutions, encourage participation and promote support for issues such as education, child rights, livelihoods, human rights, climate resilience and social inclusion.',
      'We welcome passionate individuals from different backgrounds—including **professionals, educators, youth, social workers, community leaders and development practitioners**—who can become voices for positive community action. As an Ambassador, you can use your networks, knowledge and influence to inspire others to engage with community development and help build partnerships and opportunities that strengthen local capacities.',
    ],
    cta: { label: 'Become an ambassador', type: 'other' },
  },
  {
    slug: 'partnership',
    title: 'Partnerships',
    body: [
      'Equip Foundation believes that sustainable community development requires **collaboration and collective action**. We welcome partnerships with government institutions, NGOs, community-based organisations, academic institutions, corporate organisations, foundations, development agencies, professional bodies and other like-minded institutions. Partnerships can support programme implementation, research, training, resource mobilisation, technical assistance, innovation and knowledge sharing.',
      'We seek to build partnerships based on **shared values, complementary strengths and mutual accountability**. Whether through collaborative projects, CSR initiatives, technical partnerships, research collaborations, capacity building or community programmes, we aim to bring together different expertise and resources to create greater impact. By working together, partners can help communities access new opportunities, strengthen local institutions and develop sustainable solutions to local challenges.',
    ],
    cta: { label: 'Partner with us', type: 'partnership' },
  },
  {
    slug: 'events-fundraising',
    title: 'Events & Fundraising',
    body: [
      'Events and fundraising activities provide opportunities for individuals, institutions and communities to come together in support of meaningful social and environmental causes. Equip Foundation welcomes support for **awareness events, community campaigns, educational activities, environmental initiatives, humanitarian responses, child-focused programmes and fundraising events**. These activities can help mobilise resources while bringing greater public attention to important community issues.',
      'Individuals, schools, colleges, companies, community groups and other organisations can organise or support fundraising activities in partnership with Equip Foundation. We encourage **creative, transparent and responsible fundraising** that reflects the needs and priorities of communities. Every event can become an opportunity not only to raise resources, but also to build awareness, encourage participation and inspire collective action for sustainable community development.',
    ],
    cta: { label: 'Organise an event', type: 'campaign' },
  },
  {
    slug: 'careers',
    title: 'Careers / Work With Us',
    body: [
      'Equip Foundation welcomes people who are passionate about **community development, social justice, human rights, education, livelihoods, humanitarian action, climate resilience and sustainable development**. We seek individuals who can contribute their knowledge, professional expertise, creativity and commitment to working alongside communities. Opportunities may include programme management, community mobilisation, research, training and capacity building, monitoring and evaluation, communications, administration and other areas of organisational work.',
      'Working with Equip Foundation offers an opportunity to contribute to **community-led development while learning from the knowledge, strengths and experiences of local communities**. We value professionalism, integrity, inclusion, respect, teamwork, accountability and a commitment to enabling people to become more self-reliant. If you share our vision of **“Equipping people and communities to Equip Themselves,”** we invite you to explore opportunities to work with us and contribute to creating lasting change.',
    ],
    cta: { label: 'Explore opportunities', type: 'careers' },
  },
]
