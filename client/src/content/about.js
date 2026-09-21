// About Us copy. **double asterisks** mark the bold phrases from the client
// document. Render them with a small helper (Task 1.2 / page tasks).

export const history = {
  title: 'Our History',
  timeline: [
    {
      year: '2005',
      text: 'A group of committed and passionate professionals come together with a shared concern for the needs of deprived and vulnerable communities.',
    },
    {
      year: '2011',
      text: 'Formally established as a non-profit, non-governmental organisation and registered as a Trust, with its base in Tirukoilur, Tamil Nadu.',
    },
    {
      year: 'Today',
      text: 'Builds on a journey of more than two decades with a continued commitment to human dignity, social justice, empowerment and sustainable development.',
    },
  ],
  paragraphs: [
    'Equip Foundation traces its beginnings to **2005**, when a group of committed and passionate professionals came together with a shared concern for the needs of deprived and vulnerable communities. The idea emerged from a desire to create a collective platform through which their professional knowledge, experience and commitment could be channelled towards meaningful social development. The founding group believed that sustainable change should go beyond providing immediate assistance and should instead equip individuals and communities with the knowledge, skills, opportunities and confidence to become more self-reliant.',
    'The organisation was formally established as a **non-profit, non-governmental organisation** and registered as a **Trust in 2011**, with its base in Tirukoilur, Tamil Nadu. From its early days, Equip Foundation sought to work closely with communities and respond to their locally identified needs. Its initial interventions focused on supporting disadvantaged communities and strengthening their capacity to address social and economic challenges. The organisation’s guiding philosophy has been reflected in its motto, **“Equipping them to equip themselves,”** emphasising empowerment, participation and community ownership.',
    'Since its establishment, Equip Foundation has gradually expanded both geographically and in the range of development interventions it undertakes. What began as an initiative rooted in local community needs has developed into a broader platform for work in areas including **education, livelihoods, human rights, humanitarian action, community empowerment, sustainable development, climate resilience, research, and training and capacity building**. Its approach has continued to emphasise working with communities, institutions and partners to identify challenges, strengthen capacities and create pathways towards sustainable development.',
    'Today, Equip Foundation builds on its journey of more than two decades with a continued commitment to **human dignity, social justice, empowerment and sustainable development**. Drawing on the experience gained through grassroots engagement and development initiatives, the Foundation seeks to work with communities and like-minded organisations to address emerging social, economic, humanitarian and environmental challenges. Its journey from a small network of professionals in 2005 to an established development organisation reflects a continuing commitment to its founding principle: **to equip people and communities to become active agents of their own development.**',
  ],
}

export const missionVisionValues = {
  title: 'Mission, Vision & Values',
  vision: {
    title: 'Our Vision',
    text: 'People and communities equipped to shape their own future.',
  },
  mission: {
    title: 'Our Mission',
    text: '“To empower vulnerable communities by creating opportunities, fostering inclusion and resilience, and driving collective action for lasting change.”',
  },
  valuesTitle: 'Our Values',
  values: [
    {
      title: 'Dignity & Respect',
      text: 'We respect the dignity, rights, and uniqueness of every person and community.',
    },
    {
      title: 'Empowerment',
      text: 'We enable people to build their skills, confidence, opportunities, and self-reliance.',
    },
    {
      title: 'Inclusion & Equality',
      text: 'We promote equal opportunities and ensure that everyone has a voice and a place to participate.',
    },
    {
      title: 'Integrity & Accountability',
      text: 'We act with honesty, transparency, responsibility, and accountability in everything we do.',
    },
    {
      title: 'Sustainability & Resilience',
      text: 'We promote solutions that strengthen communities and create lasting social, economic, and environmental impact.',
    },
  ],
}

export const approach = {
  title: 'Our Approach',
  paragraphs: [
    'At **Equip Foundation**, we believe that every individual and community has strengths, skills, knowledge, relationships, and resources that can become the foundation for positive change. Our approach focuses on **equipping people and communities** with the knowledge, skills, opportunities, and support they need to identify their own priorities, make informed decisions, and take action. We work with communities as partners, respecting their dignity, experience, and local knowledge rather than treating them simply as beneficiaries.',
    'We follow an **Asset-Based Community Development (ABCD)** approach that builds on what communities already have and can do. We identify and strengthen local assets such as people, skills, institutions, natural resources, community networks, and local leadership. By bringing these strengths together and encouraging collective action, we help communities develop locally owned solutions, strengthen participation, and build confidence and self-reliance.',
    'Our work is guided by the principles of **sustainable and inclusive development**. We seek solutions that create lasting social, economic, and environmental benefits while strengthening the resilience of communities. Through education, capacity building, sustainable livelihoods, rights-based action, partnerships, and knowledge sharing, we connect local action with wider development opportunities. Our aim is not only to address immediate needs, but to **equip communities to create and sustain positive change for themselves and future generations**.',
  ],
  quote:
    'Equip communities to create and sustain positive change for themselves and future generations.',
}

// Page titles for the About section (menu labels live in navConfig.js).
export const aboutPages = {
  history: { slug: 'history', title: history.title },
  missionVisionValues: {
    slug: 'mission-vision-values',
    title: missionVisionValues.title,
  },
  approach: { slug: 'approach', title: approach.title },
  team: { slug: 'team', title: 'Our Team' },
  annualReports: { slug: 'annual-reports', title: 'Annual Reports' },
}
