// Our Work copy: 8 programme pages rendered by one template (ProgramPage).
// **double asterisks** mark the bold phrases from the client document.

import { siteConfig } from './siteConfig'

export const workOverview = {
  title: 'Our Work',
}

export const workPages = [
  {
    slug: 'education',
    title: 'Education',
    images: ['1.JPG', '2.jpg', '3.JPG', '4.JPG', '5.JPG'].map(img => `/images/Education/${img}`),
    intro: [
      'Education is one of the most powerful pathways to individual dignity, social mobility and community transformation. Yet, for many children in vulnerable and underserved communities, poverty, limited learning support, inadequate access to educational resources, digital exclusion, family circumstances and social barriers can prevent them from reaching their full potential. Quality education is therefore not simply about academic achievement; it is about enabling children to develop confidence, critical thinking, life skills and the ability to make informed choices about their future.',
      'Equip Foundation works to make education **accessible, meaningful and empowering**, particularly for children and young people who face barriers to learning and progression. Our educational interventions complement formal schooling by providing additional learning support, strengthening foundational knowledge, nurturing life skills and helping young people prepare for further education, employment and entrepreneurship. We engage not only with children but also with parents and the wider community, recognising that sustained educational outcomes require a supportive environment at home and within the community. Through our efforts, we seek to help every learner discover their potential, pursue their aspirations and become an active contributor to the development of their community.',
    ],
    chips: [
      'Tuition centres',
      'Educational material support',
      'Special coaching for slow learners',
      'Parent awareness programmes',
      'Dropout prevention',
      'Summer bridge courses',
      'Digital education',
      'Life-skills education',
      'Career guidance',
      'Vocational orientation',
      'Employability skills development',
      'Competitive-examination support',
      'Entrepreneurship education',
    ],
  },
  {
    slug: 'livelihood',
    title: 'Livelihood',
    images: ['1.JPG', '2.JPG', '3.jpg', '4.jpg', '5.JPG'].map(img => `/images/Livelihood/${img}`),
    intro: [
      'Sustainable livelihoods are fundamental to human dignity, economic independence and resilient communities. For many vulnerable and underserved households, limited access to skills, productive assets, finance, markets and decent employment opportunities can perpetuate cycles of poverty and insecurity. Livelihood development therefore requires more than income generation; it calls for strengthening people’s capabilities, improving access to opportunities and enabling individuals and communities to make informed economic choices. When people have secure and sustainable means of earning a living, families are better able to meet their basic needs, withstand economic and environmental shocks, invest in the future and participate more actively in community development.',
      'Equip Foundation adopts an **asset-based, inclusive and market-oriented approach to livelihood development**, building upon the skills, knowledge, resources and opportunities already present within communities. We support individuals and community groups to enhance their skills, develop sustainable enterprises, access financial services, connect with markets and explore dignified employment opportunities.',
    ],
    chips: [
      'Sustainable Livelihoods',
      'Skills & Employment',
      'Women’s Economic Empowerment',
      'Enterprise & Market Development',
      'Climate-Resilient Livelihoods',
    ],
  },
  {
    slug: 'human-rights',
    title: 'Human Rights',
    images: ['1.JPG', '2.JPG', '3.JPG', '4.jpg', '5.jpg'].map(img => `/images/Human Rights/${img}`),
    intro: [
      'Equip Foundation believes that **human rights, dignity, equality, justice and freedom are fundamental to sustainable community development**. We promote a rights-based approach that enables individuals and communities to understand their rights, claim their entitlements and participate in decisions that affect their lives. We work with communities, civil society organisations, institutions and other stakeholders to strengthen **human rights awareness, legal literacy and community-based protection mechanisms**.',
      "**Child rights and protection are a key priority of Equip Foundation.** We work towards creating safe, inclusive and child-friendly families, schools and communities by promoting children's rights to **survival, development, education, protection and participation**. Our interventions focus on the prevention of **early and child marriage, child sexual abuse and exploitation, child labour, trafficking, violence, neglect and other forms of abuse**.",
      'Equip Foundation also promotes the rights and empowerment of **women, women workers and other marginalised communities**. Particular attention is given to women workers in various industries, including awareness of labour rights, decent working conditions, fair wages, working hours, leave, social security, occupational health and safety, workplace dignity, prevention of discrimination and sexual harassment, and access to grievance-redressal mechanisms. Our work also encompasses the rights of persons with disabilities, migrant and informal workers, disadvantaged families and other vulnerable groups.',
    ],
    chips: [
      'Rights education',
      'legal empowerment',
      'referral and institutional linkages',
      'Advocacy',
      'Gender justice',
      'inclusion',
      'economic and social empowerment',
    ],
  },
  {
    slug: 'humanitarian-aid',
    title: 'Humanitarian Aid',
    images: ['1.jpg', '2.jpg', '3.JPG', '4.bmp', '5.JPG'].map(img => `/images/Humanitarian assistance/${img}`),
    intro: [
      'Equip Foundation is committed to supporting **individuals, families and communities affected by disasters, emergencies and humanitarian crises**. Our humanitarian approach focuses on timely, inclusive and needs-based assistance, while ensuring that the dignity, safety and rights of affected people are protected. We recognise that disasters can have disproportionate impacts on children, women, older persons, persons with disabilities, low-income households and other vulnerable groups, and therefore integrate protection, inclusion and community participation into humanitarian response and recovery.',
      'Our interventions have included rapid needs assessment, emergency relief and essential supplies, support to affected families, community mobilisation, coordination with local stakeholders, restoration of livelihoods and basic services, and strengthening community preparedness and resilience. Our team also contributed to community-level humanitarian support in response to the unprecedented health and socio-economic crisis. Equip Foundation seeks to strengthen the complete disaster management cycle.',
    ],
    chips: [
      'essential relief',
      'community-based disaster risk reduction',
      'emergency preparedness',
      'contingency planning',
      'awareness on health and safety measures',
      'livelihood recovery',
      'climate-resilient livelihoods',
    ],
  },
  {
    slug: 'sustainable-development-climate',
    title: 'Sustainable Development & Climate',
    images: ['1.JPG', '2.JPG', '3.jpg', '4.JPG', '5.jpg'].map(img => `/images/Sustainable Dev & Climate/${img}`),
    intro: [
      'Equip Foundation promotes **sustainable and climate-resilient communities** by working with people to protect natural resources, strengthen local capacities and develop locally owned solutions to environmental and climate challenges. We also promote practical environmental actions such ecological restoration, carbon sequestration and greener, healthier communities.',
      'We support communities in establishing and maintaining **community nurseries**, raising locally appropriate seedlings and organising plantation drives in community spaces, schools, institutions and other suitable locations. Communities are encouraged to prepare **seed balls and undertake seasonal planting during the rainy season**, while palm trees and other locally suitable species are promoted according to the ecological conditions of the area. We also encourage waste reduction, recycling, resource efficiency and appropriate renewable-energy solutions.',
      'A key strength of Equip Foundation is its emphasis on **community-led climate action through the Asset-Based Community Development (ABCD) approach** by identifying and mobilising the existing assets, skills, knowledge, relationships, institutions, natural resources and local leadership within the community. We seek to move communities from being passive recipients of environmental programmes to active owners and leaders of climate action. By combining community assets and traditional knowledge with appropriate technical support and partnerships, we aim to build greener, self-reliant and climate-resilient communities, while strengthening biodiversity, protecting natural resources, improving water and soil security, restoring local ecosystems and creating sustainable and climate-resilient livelihoods for present and future generations.',
    ],
    chips: [
      'Climate awareness',
      'Water security',
      'Sustainable agriculture',
      'Natural resource management',
      'Biodiversity conservation',
      'Waste management',
      'Renewable energy and climate-resilient livelihoods',
      'Climate-smart and sustainable agriculture',
      'Soil and land conservation',
      'Responsible natural resource management',
    ],
  },
  {
    slug: 'empowerment',
    title: 'Empowerment',
    images: ['1.jpg', '2.JPG', '3.JPG', '4.JPG', '5.jpg'].map(img => `/images/Empowerment/${img}`),
    intro: [
      'Equip Foundation works to **empower women, children and vulnerable communities by equipping them to equip themselves** with the knowledge, confidence, skills, resources and opportunities needed to shape their own lives and communities. A key component of our work is **legal empowerment and access to justice**. Equip Foundation promotes legal education and rights awareness among communities, particularly women and children, covering relevant laws, entitlements, protection mechanisms and available avenues for justice.',
      'We support the development of **community-based paralegal systems** by identifying and building the capacities of community members who can provide basic legal information, assist with documentation, facilitate referrals and connect people with appropriate legal-aid and government institutions. Where required, we facilitate linkages with qualified legal professionals and relevant institutions for appropriate legal support, enabling communities to increasingly understand, claim and protect their own rights.',
      'Women are supported to understand their rights, strengthen their voice and participation, access government schemes and services, and improve their financial independence and economic decision-making through financial literacy, savings, livelihood opportunities and enterprise development. For children, we promote child rights education, awareness of protection mechanisms, safe participation, life skills and knowledge of their rights, enabling children to express their views, seek help and participate meaningfully in matters concerning them. In keeping with our philosophy of **“Equip them to Equip Themselves,”** we aim to nurture self-reliant, informed, confident and empowered individuals and communities who can sustain positive change and create better opportunities for themselves, their families and future.',
    ],
    chips: [
      'Legal education',
      'Rights awareness',
      'Community leadership',
      'Financial empowerment',
      'Livelihood opportunities',
      'Access to appropriate support services.',
    ],
  },
  {
    slug: 'research',
    title: 'Research',
    images: ['1.jpg', '2.png', '3.JPG', '4.jpg', '5.JPG'].map(img => `/images/Research/${img}`),
    intro: [
      'Equip Foundation undertakes **community-centred, evidence-based research** to understand local realities, identify needs and opportunities, strengthen development interventions and generate knowledge for informed decision-making. Our research focuses on livelihoods, education, child rights, gender and inclusion, climate change and disaster resilience, with an emphasis on understanding the strengths, assets, vulnerabilities and aspirations of communities.',
      'Equip Foundation gives particular attention to research related to children, women and socially excluded and vulnerable groups. An important area of our work is disaster-related research and assessment, including the use and contextual adaptation of the **Post-Disaster Needs Assessment (PDNA)** methodology. PDNA provides a structured approach for assessing the effects and impacts of a disaster and identifying recovery and reconstruction needs across sectors. By combining research evidence with community knowledge and the **Asset-Based Community Development (ABCD)** approach, Equip Foundation seeks to generate actionable evidence that can guide programme design, resource allocation, policy development, recovery planning and long-term community resilience.',
      'Our action research approach enables communities and practitioners to participate in identifying problems, testing solutions, learning from experience and applying findings to improve practice.',
    ],
    chips: [
      'Studies & Needs assessment',
      'Action research',
      'Policy research',
      'Monitoring and Evaluation',
      'Impact assessments',
      'Research on child rights',
      'Gender and inclusion research',
      'Livelihood research',
      'Climate and disaster-resilience research',
    ],
  },
  {
    slug: 'training-capacity-building',
    title: 'Training & Capacity Building',
    images: ['1.jpg', '2.JPG', '3.png', '4.jpg', '5.jpg'].map(img => `/images/Training & Capacity BUilding/${img}`),
    intro: [
      'Equip Foundation strengthens the **knowledge, skills, leadership and institutional capacities of individuals, communities and organisations** so that they are better equipped to manage their own development and respond effectively to emerging challenges. Our capacity-building approach is participatory, practical and context-specific, with a focus on community leadership and development, disaster management, project planning and management, livelihoods, rights, inclusion, climate resilience and organisational strengthening. We design training programmes based on identified needs and capacity gaps, enabling participants to translate learning into practical action.',
      "We provide community leadership and development training for grassroots leaders, community volunteers, women's groups, youth and local institutions. These programmes strengthen leadership, communication, participatory decision-making, community mobilisation, problem-solving and community-based planning. We also support livelihood and vocational skills, entrepreneurship and enterprise development, employability, financial literacy, digital skills and workplace competencies, enabling individuals particularly women and youth to improve their economic opportunities and financial independence. Equip Foundation places strong emphasis on rights, protection, inclusion and resilience.",
      'We also strengthen the capacities of civil society organisations, development practitioners and community-based institutions through organisational development, institutional strengthening, project planning and management, monitoring, evaluation and learning (MEL), fundraising, proposal development and resource mobilisation.',
    ],
    chips: [
      'Rights and entitlements',
      'Equality & social inclusion',
      'Legal Awareness',
      'Government schemes',
      'emergency response',
      'climate-change adaptation',
      'environmental awareness',
      'natural-resource management',
      'Training of Trainers (ToT)',
      'exposure visits',
      'peer learning and knowledge-sharing',
    ],
  },
]
