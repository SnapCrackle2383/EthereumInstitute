// All site copy lives here so it can be edited in one place.
// Positioning: the Ethereum Institute is a coordination platform for INSTITUTIONAL
// ADOPTION on Ethereum (not a research body). Standalone brand: no Ethereum
// Foundation affiliation is claimed or denied. Announcement / in-formation cut:
// evergreen, no hard figures, no named third parties, no membership-tier detail.
// House style: no em dashes.

export const site = {
  name: 'Ethereum Institute',
  wordmark: 'ETHEREUM INSTITUTE',
  domain: 'ethinstitute.org',
  email: 'hello@ethinstitute.org',
  established: '2026',
  title: 'Ethereum Institute: Coordinating institutional adoption on Ethereum',
  description:
    'A coordination platform for institutional adoption on Ethereum, tying market access, knowledge, open standards, and implementation into one place.',
} as const;

export const nav = [
  { label: 'ABOUT', href: '#overview' },
  { label: 'PILLARS', href: '#pillars' },
  { label: 'VERTICALS', href: '#verticals' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACT', href: '#contact' },
] as const;

export const hero = {
  eyebrow: 'ETHEREUM INSTITUTE · INSTITUTIONAL ADOPTION',
  headline: 'Ethereum’s institutional adoption layer.',
  lede: 'The Ethereum Institute is a coordination platform for Ethereum’s next phase of ecosystem growth. It ties market access, knowledge, coordination, and implementation into one place, turning protocol credibility into structured adoption pathways for institutions.',
  links: [
    { label: 'See what we do', href: '#pillars', arrow: '→' },
    { label: 'Priority verticals', href: '#verticals', arrow: '→' },
    { label: 'Explore the FAQ', href: '#faq', arrow: '→' },
    { label: 'Get in touch', href: '#contact', arrow: '↗' },
  ],
  dateline: 'ESTABLISHED 2026 · IN FORMATION · FOR INSTITUTIONAL READERS',
} as const;

export const overview = {
  eyebrow: 'OVERVIEW',
  headline: 'Coordinated adoption, not one firm at a time',
  body: [
    'Ethereum has earned its credibility at the protocol layer. The harder problem now is coordination: helping institutions, infrastructure providers, fintechs, service firms, and builders move in the same direction, on shared standards, instead of solving the same adoption problems firm by firm.',
    'The Ethereum Institute is built for that. It is a single platform that turns scattered institutional interest into standards, frameworks, and live deployments. The aim is to lower the friction of entering, building on, and trusting Ethereum as foundational infrastructure for digital finance.',
  ],
  links: [
    { label: 'See what we do', href: '#pillars', arrow: '→' },
    { label: 'Get involved', href: '#contact', arrow: '→' },
  ],
} as const;

export const pillars = {
  eyebrow: 'WHAT WE DO',
  headline: 'Four pillars, one platform',
  intro:
    'The Institute ties four layers into one coordination platform. Membership is the wrapper, working groups are the engine, and standards, content, and events carry the work to the wider market.',
  areas: [
    {
      code: '01',
      title: 'Market Access',
      body: 'Connects institutions, infrastructure, fintechs, service firms, and builders into one network, so demand, supply, and the firms in between can find each other.',
      track: 'ONE NETWORK · CROSS-SECTOR',
    },
    {
      code: '02',
      title: 'Knowledge Production',
      body: 'Research, briefings, case studies, and market maps that make Ethereum legible to institutions and reusable across the ecosystem.',
      track: 'RESEARCH · BRIEFINGS · MARKET MAPS',
    },
    {
      code: '03',
      title: 'Coordination',
      body: 'Working groups and open frameworks that turn shared problems into shared standards, where adoption needs alignment across the ecosystem.',
      track: 'WORKING GROUPS · OPEN STANDARDS',
    },
    {
      code: '04',
      title: 'Implementation',
      body: 'Playbooks, reference architectures, and partner pathways that move members from early interest to production deployment on Ethereum.',
      track: 'PLAYBOOKS · PILOTS · DEPLOYMENT',
    },
  ],
} as const;

export const verticals = {
  eyebrow: 'PRIORITY VERTICALS',
  headline: 'Where the work focuses',
  intro:
    'Six clusters where coordination failures are most expensive, and where Ethereum’s neutrality makes the Institute a better convener than any single firm.',
  columns: ['VERTICAL', 'WHAT IT COVERS', 'FOCUS'],
  rows: [
    {
      code: '01',
      name: 'Digital Assets & Tokenization',
      meaning: 'Funds, bonds, private assets, issuance rails, and lifecycle servicing.',
      note: 'ISSUANCE & SERVICING',
    },
    {
      code: '02',
      name: 'Payments & Stablecoins',
      meaning: 'Settlement, treasury, merchant and payments infrastructure, and cross-border flows.',
      note: 'SETTLEMENT & FLOWS',
    },
    {
      code: '03',
      name: 'Institutional DeFi',
      meaning: 'Access models, risk controls, permissioning, reporting, and liquidity frameworks.',
      note: 'ACCESS & RISK',
    },
    {
      code: '04',
      name: 'Core Infrastructure',
      meaning: 'Custody, wallets, staking, Layer 2s, RaaS, data, and oracles.',
      note: 'CUSTODY & RAILS',
    },
    {
      code: '05',
      name: 'Market Structure',
      meaning: 'Execution, transparency, reporting, benchmarks, and liquidity models.',
      note: 'EXECUTION & DATA',
    },
    {
      code: '06',
      name: 'Policy & Controls',
      meaning: 'Compliance, attestations, privacy, legal structure, and regulator engagement.',
      note: 'COMPLIANCE & POLICY',
    },
  ],
  footnote: 'SIX CLUSTERS WHERE A NEUTRAL CONVENER CAN DO WHAT NO SINGLE FIRM CAN.',
} as const;

export const faq = {
  eyebrow: 'FREQUENTLY ASKED QUESTIONS',
  headline: 'Frequently asked questions',
  disclaimer:
    'The Ethereum Institute is in formation. This page is an early outline of its direction and will evolve as the work begins. Nothing here is investment, legal, or regulatory advice.',
  groups: [
    {
      label: 'ABOUT THE INSTITUTE',
      items: [
        {
          q: 'What is the Ethereum Institute?',
          a: 'A coordination platform for institutional adoption on Ethereum. It ties market access, knowledge, coordination, and implementation into one place, turning Ethereum’s protocol credibility into structured adoption pathways for institutions.',
        },
        {
          q: 'Is this a research organization?',
          a: 'No. Knowledge production is one of four things we do, alongside market access, coordination, and implementation. Research and briefings exist to support adoption, not as an end in themselves. The point is to help institutions move from interest to deployment.',
        },
        {
          q: 'Who is it for?',
          a: 'Institutions, infrastructure providers, fintechs, service firms, and builders. The aim is to bring demand, supply, infrastructure, and control functions into one network, because no single actor can coordinate institutional adoption alone.',
        },
      ],
    },
    {
      label: 'HOW IT WORKS',
      items: [
        {
          q: 'How does the Institute create value?',
          a: 'Through working groups and open frameworks that turn shared problems into shared standards, knowledge that makes Ethereum legible to institutions, events that build momentum, and implementation pathways that move members from interest to live deployment.',
        },
        {
          q: 'What does participation involve?',
          a: 'Members join working groups, access research and events, and help shape open standards. Participation is structured around contribution rather than sponsorship size. The specifics are being finalized.',
        },
      ],
    },
    {
      label: 'GETTING INVOLVED',
      items: [
        {
          q: 'How do I get involved?',
          a: 'Write to us. We are convening early participants now, and we welcome institutions exploring Ethereum for production use as well as those who want to help shape the agenda.',
        },
        {
          q: 'Is anything here final?',
          a: 'No. The Institute is being scoped now, and this is an early statement of intent. Structure, workstreams, and specifics will sharpen as the first members come on board.',
        },
      ],
    },
  ],
} as const;

export const contact = {
  eyebrow: 'GET INVOLVED',
  headline: 'Help shape Ethereum’s adoption layer.',
  body: 'We are convening institutions, infrastructure providers, fintechs, service firms, and builders around shared standards and practical adoption. If your organization is exploring Ethereum for production use, or wants to help set the agenda, we would like to hear from you.',
  note: 'WE READ EVERY MESSAGE.',
} as const;

export const footer = {
  columns: [
    {
      label: 'THE INSTITUTE',
      links: [
        { label: 'About', href: '#overview' },
        { label: 'What We Do', href: '#pillars' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      label: 'FOCUS',
      links: [
        { label: 'The Pillars', href: '#pillars' },
        { label: 'Priority Verticals', href: '#verticals' },
      ],
    },
    {
      label: 'ECOSYSTEM',
      links: [
        { label: 'institutions.ethereum.org', href: 'https://institutions.ethereum.org/', external: true },
        { label: 'ethereum.org/roadmap', href: 'https://ethereum.org/roadmap/', external: true },
        { label: 'ethresear.ch', href: 'https://ethresear.ch/', external: true },
        { label: 'ethereum.org', href: 'https://ethereum.org/', external: true },
      ],
    },
  ],
  baseline: [
    'ETHINSTITUTE.ORG · INSTITUTIONAL ADOPTION ON ETHEREUM · ESTABLISHED 2026',
    'IN FORMATION. NOTHING HERE IS INVESTMENT OR LEGAL ADVICE.',
    'CONTACT: HELLO@ETHINSTITUTE.ORG',
  ],
} as const;
