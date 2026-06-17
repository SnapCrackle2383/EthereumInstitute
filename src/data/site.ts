// All site copy lives here so it can be edited in one place.
// Announcement / placeholder cut: evergreen, mission-led, no hard figures,
// no named third parties, no logos. Strictly within the pq.ethereum.org token system.
// House style: no em dashes.

export const site = {
  name: 'Ethereum Institute',
  wordmark: 'ETHEREUM INSTITUTE',
  domain: 'ethinstitute.org',
  email: 'hello@ethinstitute.org',
  established: '2026',
  title: 'Ethereum Institute: Independent research and education',
  description:
    'An independent research and education body for the institutions building on Ethereum. We study the onchain economy and publish what we learn as a public good.',
} as const;

export const nav = [
  { label: 'ABOUT', href: '#overview' },
  { label: 'RESEARCH', href: '#research-focus' },
  { label: 'LIBRARY', href: '#library' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACT', href: '#contact' },
] as const;

export const hero = {
  eyebrow: 'ETHEREUM INSTITUTE · INDEPENDENT RESEARCH',
  headline: 'Institutional Ethereum, studied in the open.',
  lede: 'A research and education body for the institutions building on Ethereum. We study how the onchain economy is being assembled (the assets, the settlement, the safeguards) and publish what we learn as a public good, plainly and without a side to sell.',
  links: [
    { label: 'Read the research', href: '#research-focus', arrow: '→' },
    { label: 'Browse the library', href: '#library', arrow: '→' },
    { label: 'Explore the FAQ', href: '#faq', arrow: '→' },
    { label: 'Get in touch', href: '#contact', arrow: '↗' },
  ],
  dateline: 'ESTABLISHED 2026 · RESEARCH FORTHCOMING · FOR INSTITUTIONAL READERS',
} as const;

export const overview = {
  eyebrow: 'OVERVIEW',
  headline: 'Why an institute, and why now',
  body: [
    'Ethereum has run without interruption for years, settling value through a long sequence of network upgrades with no coordinated downtime. That record is no longer a curiosity for institutions; it is the reason serious capital is moving onchain. Tokenized treasuries, regulated stablecoins, and exchange-traded products are being issued and settled on a network that nobody owns and nobody can pause.',
    'The Ethereum Institute exists to help institutional readers understand that shift on its own terms. We are not a vendor, a foundation, or a chain. We are a small research body that reads the primary sources, talks to the people building, and writes it down clearly. Our work is open, our methods are stated, and our conclusions are ours to defend.',
  ],
  links: [
    { label: 'View research focus areas', href: '#research-focus', arrow: '→' },
    { label: 'Read our disclaimer', href: '#disclaimer', arrow: '→' },
  ],
} as const;

export const focus = {
  eyebrow: 'RESEARCH FOCUS',
  headline: 'Four areas under study',
  intro:
    'Institutional adoption is not one question but several, each unfolding at its own pace. We organize our work around the four areas where the most consequential decisions are being made.',
  areas: [
    {
      code: 'F·01',
      title: 'Real-World Assets & Stablecoins',
      body: 'Offchain value (treasuries, credit, commodities, money itself) is being issued as onchain tokens. We track who is tokenizing, on what terms, and how settlement and redemption actually work.',
      track: 'WE TRACK: ISSUANCE · REDEMPTION · RESERVES',
    },
    {
      code: 'F·02',
      title: 'Decentralized Finance',
      body: 'Open, contract-based markets let institutions lend, borrow, and trade without an intermediary holding the book. We study the mechanics, the risks, and the line between composability and exposure.',
      track: 'WE TRACK: MARKET STRUCTURE · RISK · YIELD',
    },
    {
      code: 'F·03',
      title: 'Privacy & Compliance',
      body: 'A public ledger and confidential operations are not opposites. We examine the privacy techniques and compliance patterns that let regulated entities transact onchain without disclosing everything to everyone.',
      track: 'WE TRACK: PRIVACY · CONTROLS · DISCLOSURE',
    },
    {
      code: 'F·04',
      title: 'The Layer-2 Ecosystem',
      body: 'Most institutional activity will not sit on mainnet alone. We map the rollups and their trust assumptions, so readers can tell where settlement finality actually lives.',
      track: 'WE TRACK: ROLLUPS · BRIDGES · FINALITY',
    },
  ],
} as const;

export const properties = {
  eyebrow: 'THE PROPERTIES',
  headline: 'Six properties institutions underwrite',
  intro:
    'When an institution chooses a settlement layer, it is choosing a set of properties it cannot easily change later. The case for Ethereum is cumulative. No single property is decisive; together they describe infrastructure that is hard to replicate and harder to switch off.',
  columns: ['PROPERTY', 'WHAT IT MEANS', 'WHY IT HOLDS'],
  rows: [
    {
      code: 'P1',
      name: 'Resilience',
      meaning: 'Continuous operation under real-world load, across many upgrades, with no coordinated downtime.',
      note: 'CONTINUOUS LIVENESS',
    },
    {
      code: 'P2',
      name: 'Credible Neutrality',
      meaning: 'No owner, no central coordinator, no pause button. The rules apply equally, or not at all.',
      note: 'NO SINGLE POINT OF CONTROL',
    },
    {
      code: 'P3',
      name: 'Decentralization',
      meaning: 'Economic security distributed across the world makes the network costly to attack and hard to capture.',
      note: 'GLOBALLY DISTRIBUTED SECURITY',
    },
    {
      code: 'P4',
      name: 'Deep Liquidity',
      meaning: 'Markets are continuous and globally accessible, not dependent on a single venue or set of hours.',
      note: 'ALWAYS-ON MARKETS',
    },
    {
      code: 'P5',
      name: 'Flexibility',
      meaning: 'Open source, with freedom of stack and vendor. No lock-in to a single provider.',
      note: 'OPEN SOURCE · NO LOCK-IN',
    },
    {
      code: 'P6',
      name: 'Tokenization',
      meaning: 'A leading venue for issuing onchain real-world assets and dollar-denominated value.',
      note: 'ISSUANCE AT THE BASE LAYER',
    },
  ],
  footnote: 'A CUMULATIVE CASE. NO SINGLE PROPERTY IS DECISIVE; TOGETHER THEY ARE HARD TO REPLICATE.',
} as const;

export const library = {
  eyebrow: 'LIBRARY',
  headline: 'The reading room',
  intro:
    'The evidence for everything above, gathered in one place. Where the work is ours, it is open and free to read; where we lean on someone else’s, we link to it directly. Our own papers are in preparation, listed here so you know what is coming.',
  groups: [
    {
      label: 'INSTITUTE PAPERS',
      items: [
        { title: 'The Institutional Liquidity Layer: A Primer', meta: 'FORTHCOMING · 2026' },
        { title: 'Tokenized Treasuries: Issuance, Custody, and Redemption', meta: 'FORTHCOMING · 2026' },
        { title: 'Stablecoins as Settlement: A Reference Architecture', meta: 'FORTHCOMING · 2026' },
        { title: 'Reading a Rollup: A Field Guide to L2 Trust Assumptions', meta: 'FORTHCOMING · 2026' },
      ],
    },
    {
      label: 'PRIMARY SOURCES',
      items: [
        { title: 'Ethereum Foundation: Institutional Resources', meta: 'institutions.ethereum.org', href: 'https://institutions.ethereum.org/' },
        { title: 'Ethereum Protocol Roadmap', meta: 'ethereum.org/roadmap', href: 'https://ethereum.org/roadmap/' },
        { title: 'Ethereum Research Forum', meta: 'ethresear.ch', href: 'https://ethresear.ch/' },
        { title: 'Ethereum.org', meta: 'ethereum.org', href: 'https://ethereum.org/' },
      ],
    },
  ],
} as const;

export const faq = {
  eyebrow: 'FREQUENTLY ASKED QUESTIONS',
  headline: 'Frequently asked questions',
  disclaimer:
    'These answers reflect the Institute’s current research and assessment as of early 2026, written for readers evaluating Ethereum at an institutional level. They are educational, not investment, legal, or regulatory advice. We are an independent research body, not a part of the Ethereum protocol, the Ethereum Foundation, or any organization referenced on this page. Where the honest answer is “it depends,” we say so.',
  groups: [
    {
      label: 'UNDERSTANDING THE LANDSCAPE',
      items: [
        {
          q: 'What does “the institutional liquidity layer” actually mean, and is credible neutrality a feature or a constraint?',
          a: 'It is shorthand for a simple claim: that Ethereum is becoming the base layer where institutional value is issued, traded, and settled onchain. The phrase describes a direction of travel, not a finished state. The property underneath it, credible neutrality, is both a feature and a constraint, and the two are inseparable. The network will not bend its rules for a large participant, which is exactly why a large participant can rely on it.',
        },
        {
          q: 'Is Ethereum a company, and who is in charge of it?',
          a: 'No. Ethereum is a public network with no owner, no chief executive, and no central operator. Changes are proposed, debated, and adopted through open processes among independent client teams, researchers, and the wider community. That absence of a controlling party is precisely the property institutions describe as credible neutrality.',
        },
        {
          q: 'How is this Institute funded, and whose interests does it serve?',
          a: 'We are funded to produce open research, and we disclose our sources of support. We serve the reader, not an issuer. When we hold a position, we argue for it in the open and invite correction. We have no token, no fund, and nothing to sell.',
        },
      ],
    },
    {
      label: 'ASSETS & SETTLEMENT',
      items: [
        {
          q: 'What is a tokenized real-world asset, in plain terms?',
          a: 'It is a claim on an offchain asset, such as a treasury bill, a fund share, or a unit of credit, recorded and transferable as a token onchain. The token does not replace the legal asset; it represents ownership of it, and lets that ownership move, settle, and compose with other onchain systems at the speed of the network.',
        },
        {
          q: 'Where does settlement actually become final?',
          a: 'Not always where you think. Activity on a Layer-2 network is final on that network quickly, but inherits Ethereum’s strongest guarantees only once settled to mainnet. Understanding where finality lives, and the trust assumptions in between, is one of the most important and least understood parts of the picture. We devote a focus area to it.',
        },
      ],
    },
    {
      label: 'PRIVACY, COMPLIANCE & RISK',
      items: [
        {
          q: 'Isn’t a public blockchain incompatible with confidentiality and compliance?',
          a: 'Not necessarily. A public ledger makes transactions verifiable, but a growing set of privacy techniques lets institutions transact without disclosing every detail to the entire world. The harder work is fitting those techniques to real compliance obligations (reporting, controls, and lawful disclosure), and that fit is an active area of both research and regulation.',
        },
        {
          q: 'What are the principal risks an institution should weigh?',
          a: 'The honest list is long: smart-contract risk, custody and key management, the backing and redeemability of stablecoins, the trust assumptions of any Layer-2 in use, and an unsettled regulatory environment that differs by jurisdiction. We do not minimize these. Our role is to make them legible so they can be assessed, not to wave them away.',
        },
      ],
    },
    {
      label: 'USING THIS WORK',
      items: [
        {
          q: 'Is anything on this site investment or legal advice?',
          a: 'No. Everything we publish is educational research intended to inform your own analysis. It is not investment, legal, accounting, or regulatory advice, and it is not a recommendation to buy, sell, or hold any asset. Decisions, and the professional advice behind them, remain yours.',
        },
        {
          q: 'How can my institution work with the Institute, or correct something?',
          a: 'Write to us. We welcome briefings, requests for research, and corrections in equal measure. A flagged error is a contribution. Contact details are in the footer below.',
        },
      ],
    },
  ],
} as const;

export const contact = {
  eyebrow: 'WORK WITH US',
  headline: 'Bring us your hardest question.',
  body: 'We work with treasurers, allocators, and risk teams evaluating Ethereum for production use. Tell us what you are weighing (a tokenization program, settlement on Ethereum, a board briefing) and we will route you to the people building it, or write the analysis ourselves.',
  note: 'WE READ EVERY MESSAGE.',
} as const;

export const disclaimer = {
  eyebrow: 'DISCLAIMER',
  headline: 'What this is, and what it is not',
  body: 'The Ethereum Institute is an independent research and education body. We are not affiliated with, endorsed by, or speaking for the Ethereum Foundation, any protocol team, or any company referenced on this site. Nothing here is investment, legal, tax, or regulatory advice, and nothing here is an offer or solicitation to buy or sell any asset. Onchain systems carry real and evolving risks; readers should seek their own professional advice. Our work reflects our research and judgment as of early 2026, and it will change as the evidence does.',
} as const;

export const footer = {
  columns: [
    {
      label: 'THE INSTITUTE',
      links: [
        { label: 'About', href: '#overview' },
        { label: 'Mission', href: '#overview' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      label: 'RESEARCH',
      links: [
        { label: 'Focus Areas', href: '#research-focus' },
        { label: 'The Case for Ethereum', href: '#properties' },
        { label: 'Library', href: '#library' },
      ],
    },
    {
      label: 'PRIMARY SOURCES',
      links: [
        { label: 'institutions.ethereum.org', href: 'https://institutions.ethereum.org/', external: true },
        { label: 'ethereum.org/roadmap', href: 'https://ethereum.org/roadmap/', external: true },
        { label: 'ethresear.ch', href: 'https://ethresear.ch/', external: true },
        { label: 'ethereum.org', href: 'https://ethereum.org/', external: true },
      ],
    },
  ],
  baseline: [
    'ETHINSTITUTE.ORG · INDEPENDENT RESEARCH & EDUCATION · ESTABLISHED 2026',
    'OPEN RESEARCH, PUBLISHED AS A PUBLIC GOOD. NOT INVESTMENT OR LEGAL ADVICE.',
    'CONTACT: HELLO@ETHINSTITUTE.ORG',
  ],
} as const;
