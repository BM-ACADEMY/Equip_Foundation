// Our Work copy: 8 programme pages rendered by one template (ProgramPage).
// **double asterisks** mark the bold phrases from the client document.
//
// Page shape (every field except slug/title is optional):
//   intro     paragraphs   the "why this matters" text
//   approach  paragraphs   "what Equip Foundation does"
//   chips     strings      key focus items shown as chips
//   cards     {title,text} pillar cards
//   sections  {title, body[], highlight?, timeline?}  sub-sections

import { siteConfig } from './siteConfig'

export const workOverview = {
  title: 'Our Work',
}

export const workPages = [
  {
    slug: 'education',
    title: 'Education',
    intro: [
      'Education is one of the most powerful pathways to individual dignity, social mobility and community transformation. Yet, for many children in vulnerable and underserved communities, poverty, limited learning support, inadequate access to educational resources, digital exclusion, family circumstances and social barriers can prevent them from reaching their full potential. Quality education is therefore not simply about academic achievement; it is about enabling children to develop confidence, critical thinking, life skills and the ability to make informed choices about their future. When children are educated, equipped and encouraged to remain in school, the benefits extend beyond the individual to families and communities, contributing to greater equality, improved livelihoods, responsible citizenship and sustainable development.',
    ],
    approach: [
      'Equip Foundation works to make education **accessible, meaningful and empowering**, particularly for children and young people who face barriers to learning and progression. Our educational interventions complement formal schooling by providing additional learning support, strengthening foundational knowledge, nurturing life skills and helping young people prepare for further education, employment and entrepreneurship. We engage not only with children but also with parents and the wider community, recognising that sustained educational outcomes require a supportive environment at home and within the community. Our initiatives include **tuition centres, educational material support, special coaching for slow learners, parent awareness programmes, dropout prevention, summer bridge courses, digital education, life-skills education, career guidance, vocational orientation, employability skills development, competitive-examination support and entrepreneurship education**. Through these efforts, we seek to help every learner discover their potential, pursue their aspirations and become an active contributor to the development of their community.',
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
    intro: [
      'Sustainable livelihoods are fundamental to human dignity, economic independence and resilient communities. For many vulnerable and underserved households, limited access to skills, productive assets, finance, markets and decent employment opportunities can perpetuate cycles of poverty and insecurity. Livelihood development therefore requires more than income generation; it calls for strengthening people’s capabilities, improving access to opportunities and enabling individuals and communities to make informed economic choices. When people have secure and sustainable means of earning a living, families are better able to meet their basic needs, withstand economic and environmental shocks, invest in the future and participate more actively in community development.',
    ],
    approach: [
      'Equip Foundation adopts an **asset-based, inclusive and market-oriented approach to livelihood development**, building upon the skills, knowledge, resources and opportunities already present within communities. We support individuals and community groups to enhance their skills, develop sustainable enterprises, access financial services, connect with markets and explore dignified employment opportunities.',
    ],
    cards: [
      {
        title: 'Sustainable Livelihoods',
        text: 'Strengthening agriculture, fisheries, livestock and other locally appropriate livelihood systems.',
      },
      {
        title: 'Skills & Employment',
        text: 'Providing vocational skills, digital skills, career guidance, job placement and entrepreneurship support.',
      },
      {
        title: 'Women’s Economic Empowerment',
        text: 'Strengthening SHGs, women-led enterprises, financial inclusion and market access.',
      },
      {
        title: 'Enterprise & Market Development',
        text: 'Supporting micro-enterprises, producer groups, value addition, branding and market linkages.',
      },
      {
        title: 'Climate-Resilient Livelihoods',
        text: 'Promoting green enterprises, sustainable natural-resource management and livelihood diversification to reduce vulnerability to climate and economic shocks.',
      },
    ],
  },
  {
    slug: 'human-rights',
    title: 'Human Rights',
    sections: [
      {
        title: 'Rights-based approach',
        body: [
          'Equip Foundation believes that **human rights, dignity, equality, justice and freedom are fundamental to sustainable community development**. We promote a rights-based approach that enables individuals and communities to understand their rights, claim their entitlements and participate in decisions that affect their lives. Our human rights work focuses particularly on children, women, workers and other vulnerable and marginalised groups, while promoting equality, non-discrimination, social justice and access to justice.',
          'Equip Foundation works with communities, civil society organisations, institutions and other stakeholders to strengthen **human rights awareness, legal literacy and community-based protection mechanisms**. Our interventions include awareness and capacity-building programmes, community mobilisation, leadership development, rights education, legal empowerment, referral and institutional linkages, and advocacy on issues affecting vulnerable people. We seek to strengthen the capacity of communities to identify rights violations, prevent exploitation, access available services and entitlements, and engage with appropriate institutions for protection and justice.',
        ],
      },
      {
        title: 'Child rights & protection',
        highlight: true,
        body: [
          "**Child rights and protection are a key priority of Equip Foundation.** We work towards creating safe, inclusive and child-friendly families, schools and communities by promoting children's rights to **survival, development, education, protection and participation**. Our interventions focus on the prevention of **early and child marriage, child sexual abuse and exploitation, child labour, trafficking, violence, neglect and other forms of abuse**. We promote school enrolment, retention and prevention of school dropouts, particularly among vulnerable children, along with awareness on child protection laws, safe and unsafe behaviour, online safety and children's right to be heard. We also seek to strengthen parents, teachers, community leaders and frontline workers to recognise risks, respond appropriately and build community-based systems that protect children and promote their well-being, education and future opportunities.",
        ],
      },
      {
        title: 'Women, women workers and marginalised communities',
        body: [
          'Equip Foundation also promotes the rights and empowerment of **women, women workers and other marginalised communities**. Particular attention is given to women workers in the **textile and garment industries**, including awareness of labour rights, decent working conditions, fair wages, working hours, leave, social security, occupational health and safety, workplace dignity, prevention of discrimination and sexual harassment, and access to grievance-redressal mechanisms. Our work also encompasses the rights of persons with disabilities, migrant and informal workers, disadvantaged families and other vulnerable groups, with an emphasis on **gender justice, inclusion, economic and social empowerment, legal awareness and access to justice**. Through these efforts, Equip Foundation seeks to build communities where every person—especially every child, woman and vulnerable individual—can live with **dignity, safety, equality and opportunity**.',
        ],
      },
    ],
  },
  {
    slug: 'humanitarian-aid',
    title: 'Humanitarian Aid',
    sections: [
      {
        title: 'Our humanitarian approach',
        body: [
          'Equip Foundation is committed to supporting **individuals, families and communities affected by disasters, emergencies and humanitarian crises**. Our humanitarian approach focuses on timely, inclusive and needs-based assistance, while ensuring that the dignity, safety and rights of affected people are protected. We recognise that disasters can have disproportionate impacts on children, women, older persons, persons with disabilities, low-income households and other vulnerable groups, and therefore integrate protection, inclusion and community participation into humanitarian response and recovery.',
        ],
      },
      {
        title: 'Disaster response, 2011–2021',
        body: [
          'Over the years, Equip Foundation and its team have been involved in **emergency response, relief, recovery and disaster risk reduction initiatives** in Tamil Nadu, responding to major disasters including the **2011 Thane Cyclone, 2012 Cyclone Nilam, 2015 floods, 2016 Cyclone Vardah, 2016–17 drought, 2018 Cyclone Gaja, and the 2021 extreme rainfall and flooding**. These interventions have included rapid needs assessment, emergency relief and essential supplies, support to affected families, community mobilisation, coordination with local stakeholders, restoration of livelihoods and basic services, and strengthening community preparedness and resilience. The experience gained through these emergencies has strengthened our understanding of community-led disaster response and the importance of linking immediate humanitarian assistance with longer-term recovery and resilience.',
        ],
        timeline: siteConfig.impact.disasters,
      },
      {
        title: 'COVID-19 response',
        body: [
          'During the **COVID-19 pandemic**, Equip Foundation and its team contributed to community-level humanitarian support in response to the unprecedented health and socio-economic crisis. The response focused on reaching vulnerable households and communities with **essential relief, food and basic necessities, awareness on health and safety measures, support to frontline and community actors, and assistance to people affected by loss of income and livelihood disruptions**. Particular attention was given to vulnerable families, women, children, migrant and informal workers and others facing heightened socio-economic risks during the pandemic.',
        ],
      },
      {
        title: 'Disaster management cycle',
        body: [
          'Equip Foundation seeks to strengthen the complete **disaster management cycle**. Our work includes community-based disaster risk reduction, emergency preparedness and contingency planning, early warning and early action, evacuation and shelter preparedness, first aid and emergency awareness, livelihood recovery, climate-resilient livelihoods and capacity building of community volunteers and local institutions. By combining humanitarian assistance with community participation, local knowledge and long-term development approaches, we aim to help communities **prepare for emergencies, respond effectively, recover with dignity and build greater resilience to future disasters and climate-related risks**.',
        ],
      },
    ],
  },
  {
    slug: 'sustainable-development-climate',
    title: 'Sustainable Development & Climate',
    sections: [
      {
        title: 'Overview',
        body: [
          'Equip Foundation promotes **sustainable and climate-resilient communities** by working with people to protect natural resources, strengthen local capacities and develop locally owned solutions to environmental and climate challenges. Our work encompasses **climate awareness, disaster resilience, water security, sustainable agriculture, natural resource management, biodiversity conservation, waste management, renewable energy and climate-resilient livelihoods**. We also promote practical environmental actions such as **tree plantations, palm tree planting, community nurseries, seed-ball preparation and planting during rainy seasons**, contributing to ecological restoration, carbon sequestration and greener, healthier communities.',
        ],
      },
      {
        title: 'Interventions',
        body: [
          'Our interventions focus on **water conservation and security, rainwater harvesting, climate-smart and sustainable agriculture, soil and land conservation, biodiversity protection, ecosystem restoration and responsible natural resource management**. We support communities in establishing and maintaining **community nurseries**, raising locally appropriate seedlings and organising plantation drives in community spaces, schools, institutions and other suitable locations. Communities are encouraged to prepare **seed balls and undertake seasonal planting during the rainy season**, while palm trees and other locally suitable species are promoted according to the ecological conditions of the area. We also encourage waste reduction, recycling, resource efficiency and appropriate renewable-energy solutions.',
        ],
      },
      {
        title: 'Community-led climate action (ABCD)',
        body: [
          'A key strength of Equip Foundation is its emphasis on **community-led climate action through the Asset-Based Community Development (ABCD) approach**. Rather than viewing communities primarily through their needs and vulnerabilities, ABCD starts by identifying and mobilising the **existing assets, skills, knowledge, relationships, institutions, natural resources and local leadership** within the community. Local knowledge, community participation, available land and water resources, traditional practices, local plant species and the collective efforts of farmers, women, youth and community groups are recognised as valuable assets for environmental action. Equip Foundation facilitates communities to bring these assets together to establish nurseries, undertake plantations, restore ecosystems and develop locally appropriate responses to climate challenges.',
        ],
      },
      {
        title: 'From passive recipients to active owners',
        body: [
          'Through this approach, Equip Foundation seeks to move communities from being **passive recipients of environmental programmes to active owners and leaders of climate action**. Community groups, farmers, women, youth, schools and local institutions are encouraged to participate in planning, nursery development, seed-ball preparation, tree and palm planting, maintenance and monitoring. By combining community assets and traditional knowledge with appropriate technical support and partnerships, we aim to build **greener, self-reliant and climate-resilient communities**, while strengthening biodiversity, protecting natural resources, improving water and soil security, restoring local ecosystems and creating **sustainable and climate-resilient livelihoods for present and future generations**.',
        ],
      },
    ],
  },
  {
    slug: 'empowerment',
    title: 'Empowerment',
    sections: [
      {
        title: 'Overview',
        body: [
          'Equip Foundation works to **empower women, children and vulnerable communities by equipping them to equip themselves** with the knowledge, confidence, skills, resources and opportunities needed to shape their own lives and communities. We believe that sustainable empowerment is not about creating dependency, but about enabling people to recognise their own strengths, understand their rights, access opportunities, make informed decisions and take collective action. Our approach combines **legal education, rights awareness, community leadership, financial empowerment, livelihood opportunities and access to appropriate support services**.',
        ],
      },
      {
        title: 'Legal empowerment & paralegals',
        body: [
          'A key component of our work is **legal empowerment and access to justice**. Equip Foundation promotes legal education and rights awareness among communities, particularly women and children, covering relevant laws, entitlements, protection mechanisms and available avenues for justice. We support the development of **community-based paralegal systems** by identifying and building the capacities of community members who can provide basic legal information, assist with documentation, facilitate referrals and connect people with appropriate legal-aid and government institutions. Where required, we facilitate linkages with qualified legal professionals and relevant institutions for appropriate legal support, enabling communities to increasingly **understand, claim and protect their own rights**.',
        ],
      },
      {
        title: 'Women and children',
        body: [
          '**Women and children receive particular attention in our empowerment initiatives.** Women are supported to understand their rights, strengthen their voice and participation, access government schemes and services, and improve their **financial independence and economic decision-making** through financial literacy, savings, livelihood opportunities and enterprise development. For children, we promote **child rights education, awareness of protection mechanisms, safe participation, life skills and knowledge of their rights**, enabling children to express their views, seek help and participate meaningfully in matters concerning them. Parents, teachers and community members are also engaged to create supportive and protective environments in which children can grow, learn and exercise their rights.',
        ],
      },
      {
        title: 'Active agents of their own development',
        body: [
          'Through **awareness, capacity building, leadership development, legal literacy, financial literacy and community mobilisation**, Equip Foundation seeks to strengthen the ability of individuals and communities to become active agents of their own development. We encourage women, children and vulnerable groups to identify and build upon their own strengths, assets and opportunities, develop confidence and leadership, access available resources and collectively address barriers to equality and justice. In keeping with our philosophy of **“Equip them to Equip Themselves,”** we aim to nurture **self-reliant, informed, confident and empowered individuals and communities** who can sustain positive change and create better opportunities for themselves, their families and future generations.',
        ],
      },
    ],
  },
  {
    slug: 'research',
    title: 'Research',
    sections: [
      {
        title: 'Overview',
        body: [
          'Equip Foundation undertakes **community-centred, evidence-based research** to understand local realities, identify needs and opportunities, strengthen development interventions and generate knowledge for informed decision-making. Our research focuses on **livelihoods, education, child rights, gender and inclusion, climate change and disaster resilience**, with an emphasis on understanding the strengths, assets, vulnerabilities and aspirations of communities. We believe research should not remain only as documentation, but should contribute to practical solutions, improved programmes, community empowerment and sustainable development.',
        ],
      },
      {
        title: 'Research services',
        body: [
          'Our research services include **baseline studies, feasibility studies, needs assessments, action research, policy research, monitoring and evaluation, impact assessments and community research**. Baseline studies help establish the existing socio-economic and development conditions against which progress can be measured, while feasibility studies assess the viability, risks, resources and potential impact of proposed interventions. Through monitoring and evaluation and impact assessment, we examine programme relevance, effectiveness, efficiency, outcomes and sustainability, generating evidence to strengthen future interventions. Our action research approach enables communities and practitioners to participate in identifying problems, testing solutions, learning from experience and applying findings to improve practice.',
        ],
      },
      {
        title: 'Child, gender, livelihood and climate research',
        body: [
          "Equip Foundation gives particular attention to research related to **children, women and socially excluded and vulnerable groups**. Research on child rights examines children's access to education, protection, participation, health and development, as well as risks such as child labour, child marriage, abuse and exploitation. Gender and inclusion research explores barriers faced by women and marginalised groups and opportunities for greater participation and empowerment. Livelihood research examines household economies, employment, skills, enterprise opportunities, natural-resource-based livelihoods and climate-related livelihood risks, while climate and disaster-resilience research examines community vulnerabilities, capacities, risks, preparedness, response, recovery and resilience.",
        ],
      },
      {
        title: 'Post-Disaster Needs Assessment (PDNA)',
        body: [
          'An important area of our work is **disaster-related research and assessment**, including the use and contextual adaptation of the **Post-Disaster Needs Assessment (PDNA)** methodology. PDNA provides a structured approach for assessing the effects and impacts of a disaster and identifying recovery and reconstruction needs across sectors. Equip Foundation can undertake rapid and detailed assessments covering **housing, livelihoods, agriculture, infrastructure, education, health, water and sanitation, protection, social sectors, environment and local economies**, while documenting the needs and priorities of affected communities. By combining research evidence with community knowledge and the **Asset-Based Community Development (ABCD)** approach, Equip Foundation seeks to generate actionable evidence that can guide **programme design, resource allocation, policy development, recovery planning and long-term community resilience**.',
        ],
      },
    ],
  },
  {
    slug: 'training-capacity-building',
    title: 'Training & Capacity Building',
    sections: [
      {
        title: 'Overview',
        body: [
          'Equip Foundation strengthens the **knowledge, skills, leadership and institutional capacities of individuals, communities and organisations** so that they are better equipped to manage their own development and respond effectively to emerging challenges. Our capacity-building approach is participatory, practical and context-specific, with a focus on **community leadership and development, disaster management, project planning and management, livelihoods, rights, inclusion, climate resilience and organisational strengthening**. We design training programmes based on identified needs and capacity gaps, enabling participants to translate learning into practical action.',
        ],
      },
      {
        title: 'Community leadership and development',
        body: [
          "We provide **community leadership and development training** for grassroots leaders, community volunteers, women's groups, youth and local institutions. These programmes strengthen leadership, communication, participatory decision-making, community mobilisation, problem-solving and community-based planning. We also support **livelihood and vocational skills, entrepreneurship and enterprise development, employability, financial literacy, digital skills and workplace competencies**, enabling individuals—particularly women and youth—to improve their economic opportunities and financial independence.",
        ],
      },
      {
        title: 'Rights, protection, inclusion and resilience',
        body: [
          "Equip Foundation places strong emphasis on **rights, protection, inclusion and resilience**. Training programmes cover **child rights and child protection, women's rights and empowerment, gender equality, social inclusion, human rights and legal awareness**, as well as government schemes, rights and entitlements. We also provide **disaster preparedness and risk-reduction, emergency response, climate-change adaptation, environmental awareness, sustainable agriculture and natural-resource management training**, helping communities and local institutions strengthen their preparedness and resilience to disasters and climate-related risks.",
        ],
      },
      {
        title: 'Civil society organisation capacity',
        body: [
          'We also strengthen the capacities of **civil society organisations, development practitioners and community-based institutions** through organisational development, institutional strengthening, project planning and management, monitoring, evaluation and learning (MEL), fundraising, proposal development and resource mobilisation. **Training of Trainers (ToT), exposure visits, peer learning and knowledge-sharing programmes** are used to create a multiplier effect and strengthen local training capacity. Through **“Equip them to Equip Themselves,”** our ultimate objective is to build capable individuals, confident community leaders and stronger institutions that can sustain development initiatives, mobilise local resources and lead positive change within their communities.',
        ],
      },
    ],
  },
]
