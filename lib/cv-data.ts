export const about =
  "Growth leader with 11 years building and scaling digital marketing functions across paid media, SEO, CRO, automation, and analytics. My focus is premium DTC e-commerce, where I design growth models that balance new customer acquisition with long-term profitability. Beyond marketing, I've built hands-on experience across the commercial core of a business - working closely with finance on budget allocation, contribution margin, and P&L ownership, and collaborating with procurement and logistics teams to ensure growth strategy connects with operational reality. Over the years I've pushed deeper into data and product, developing a more technical toolkit to reduce the gap between insight and action. I lead cross-functional teams with a clear focus on business outcomes, and I thrive in environments where strategy, execution, and accountability sit close together."

export type Experience = {
  id: string
  linkLabel: string
  title: string
  period: string
  summary: string
  bullets: string[]
  tags: string[]
  imageSrc: string
  gradientFrom: string
  gradientTo: string
}

export const experiences: Experience[] = [
  {
    id: "exp-orange-juice",
    linkLabel: "Orange Juice",
    title: "Growth Manager Consultant - Orange Juice Ecommerce Agency, Stockholm",
    period: "Nov 2025 – Present",
    summary:
      "Orange Juice is a Stockholm-based growth agency working with premium Scandinavian DTC brands as an integrated growth partner - combining media buying, financial advisory, and full-funnel growth management to drive profitable, scalable outcomes. As a consultant, I lead end-to-end growth management for a portfolio of premium DTC clients across fashion and beauty, with a focus on new customer acquisition, contribution margin, and long-term LTV rather than surface-level performance metrics. CDLP is among the key clients, where I continue to lead the growth function as an extension of the internal team.",
    bullets: [
      "Serve as an embedded growth partner, aligning paid media, creative strategy, retention, and financial planning into a unified growth model",
      "Apply a profit-first approach to media buying, optimizing toward new customer revenue and contribution margin rather than ROAS alone",
      "Develop market expansion strategies and channel mix for clients scaling across multiple markets",
      "Combine financial modeling with performance data to support budget allocation and commercial decision-making",
    ],
    tags: ["Work", "Growth", "DTC"],
    imageSrc: "/images/ohjayagency.png",
    gradientFrom: "#0f172a",
    gradientTo: "#10b981",
  },
  {
    id: "exp-pact",
    linkLabel: "PACT",
    title: "Founder - PACT, Stockholm",
    period: "2025 – Present",
    summary:
      "Founded PACT, a technology-enabled wine platform built to modernize how independent wine is discovered, sourced, and bought. PACT operates as a marketplace connecting producers, trade buyers, and consumers through a demand-driven model designed to reduce friction in sourcing, discovery, and logistics. Responsible for overall business strategy, commercial development, producer partnerships, platform vision, fundraising, and go-to-market execution.",
    bullets: [
      "Built the company's commercial model, platform concept, and strategic positioning from the ground up",
      "Established direct producer relationships and structured a sourcing model designed to reduce inventory risk and improve supply efficiency",
      "Developed a three-sided marketplace model connecting producers, trade accounts, and end customers",
      "Led sales and partnership development with restaurants, wine bars, and other relevant trade channels",
      "Defined the product roadmap for a platform leveraging structured wine data, pricing intelligence, and AI-powered extraction of wine lists",
      "Combined commercial execution with hands-on product development to solve structural inefficiencies in how wine is bought and sold",
      "Secured initial backing from two angel investors with backgrounds in technology and food to support the company's early growth",
    ],
    tags: ["Entrepreneurship", "Founder", "Marketplace"],
    imageSrc: "/images/pact.jpg",
    gradientFrom: "#1c0a0a",
    gradientTo: "#991b1b",
  },
  {
    id: "exp-cdlp",
    linkLabel: "CDLP",
    title: "Head of Growth - CDLP, Stockholm",
    period: "Dec 2024 – Nov 2025",
    summary:
      "Responsible for CDLP's overall growth strategy, spanning paid media, lifecycle marketing, analytics, and international market expansion. Own both revenue and profit targets, with a reporting framework built around CAC, contribution margin, and category-level performance across Dema, Qlik, and Shopify Analytics. From November 2025, the growth function continued through Orange Juice Ecommerce Agency, where CDLP is a key client.",
    bullets: [
      "Scaled core product categories 80% YoY through targeted segmentation, channel optimization, and cross-sell strategies",
      "Increased New Customer ROAS from below 1 to above 3, while reducing CAC by 50%",
      "Developed behavioral segmentation models distinguishing full-price from discount-driven buyers to sharpen targeting and protect margins",
      "Reallocated budget from a performance-heavy split (70/30) toward a brand-led model to counter declining organic reach and build long-term equity",
      "Unified product, brand, and storytelling into a coherent cross-channel content strategy",
      "Transitioned reporting from isolated performance metrics to a profit- and retention-aligned growth framework",
    ],
    tags: ["Work", "Growth", "DTC"],
    imageSrc: "/images/cdlp.webp",
    gradientFrom: "#0f172a",
    gradientTo: "#6d28d9",
  },
  {
    id: "exp-sneakersnstuff",
    linkLabel: "Sneakersnstuff",
    title: "Growth Marketer - Sneakersnstuff, Stockholm",
    period: "Dec 2022 – Dec 2024",
    summary:
      "Drove market expansion and revenue growth within the e-commerce team, with responsibility across both the core business and SNS's own label. Combined market intelligence, commercial strategy, and cross-functional collaboration to identify and activate growth opportunities.",
    bullets: [
      "Developed go-to-market strategies that increased revenue and profitability across new product verticals",
      "Identified assortment gaps and built commercial expansion strategies for SNS's own label",
      "Led the e-commerce platform migration, owning data integrity and site architecture to support SEO, analytics, and scalable content",
      "Strengthened alignment between marketing, product, and infrastructure through structured cross-functional processes",
    ],
    tags: ["Work", "E‑commerce", "Retail"],
    imageSrc: "/images/sns.webp",
    gradientFrom: "#111827",
    gradientTo: "#2563eb",
  },
  {
    id: "exp-groupm",
    linkLabel: "GroupM",
    title: "Owned Media Consultant - GroupM, Stockholm",
    period: "Jun 2021 – Dec 2022",
    summary:
      "Served as strategic lead across owned media engagements for clients including OKQ8, UNICEF, and Husqvarna. Translated web, search, and business performance data into actionable SEO, CRO, and site architecture strategies.",
    bullets: [
      "Directed large-scale website migration projects, improving information architecture, internal linking, and content hierarchy",
      "Conducted structured performance audits and prioritized initiatives using ICE scoring frameworks",
      "Delivered conversion-focused analyses identifying friction points and proposing targeted CRO improvements",
      "Repositioned owned media as a primary growth channel across multiple accounts",
    ],
    tags: ["Work", "SEO", "Consulting"],
    imageSrc: "/images/groupm.jpg",
    gradientFrom: "#0b132b",
    gradientTo: "#5bc0be",
  },
  {
    id: "exp-apprl",
    linkLabel: "APPRL / Klarna",
    title: "Growth Manager - APPRL / Klarna Creator Platform, Stockholm",
    period: "Jun 2019 – Aug 2020",
    summary:
      "Owned inbound growth strategy and market positioning for APPRL, targeting e-commerce brands and content creators. Led execution across content marketing, SEO, paid acquisition, and Salesforce Pardot automation.",
    bullets: [
      "Built a content-led education layer that improved lead quality and reduced friction in the sales process",
      "Developed a full-journey marketing strategy integrating online and offline data to better reflect customer behavior and sharpen the value proposition",
      "Assembled and led a cross-functional growth team spanning sales, product, marketing, data, and development",
      "Delivered measurable improvements across top-of-funnel volume, sales conversion rates, and early-stage churn",
    ],
    tags: ["Work", "B2B", "SaaS"],
    imageSrc: "/images/apprl.webp",
    gradientFrom: "#0f172a",
    gradientTo: "#10b981",
  },
  {
    id: "exp-tdwt-specialist",
    linkLabel: "TDWT - Specialist",
    title: "Growth Specialist - The Domain Was Taken, Stockholm",
    period: "Jan – Apr 2019",
    summary:
      "Delivered growth strategy and execution for B2B and B2C clients. Each engagement began with a structured audit across traffic, conversion, and customer value, followed by ICE-scored prioritization and close collaboration with client teams. Key projects included CRM and marketing automation for an online bank, performance marketing for a learning platform, and App Store Optimization for a mobile invoicing app.",
    bullets: [],
    tags: ["Work", "Agency", "Growth"],
    imageSrc: "/images/tdwt.webp",
    gradientFrom: "#1f2937",
    gradientTo: "#8b5cf6",
  },
  {
    id: "exp-tdwt-trainee",
    linkLabel: "TDWT - Trainee",
    title: "Growth Trainee - The Domain Was Taken, Stockholm",
    period: "Jan – Apr 2019 (Internship)",
    summary:
      "Conducted full-funnel audits and customer data analysis across multiple client projects. Produced prioritized growth recommendations using ICE scoring, working across both strategic advisory and hands-on implementation.",
    bullets: [],
    tags: ["Work", "Agency", "Growth"],
    imageSrc: "/images/tdwt.webp",
    gradientFrom: "#312e81",
    gradientTo: "#a78bfa",
  },
  {
    id: "exp-whispr",
    linkLabel: "Whispr Group",
    title: "Operations & Intelligence Intern - Whispr Group, Stockholm",
    period: "Jan – Jun 2018",
    summary:
      "Analyzed social media and e-commerce performance for clients across markets, identifying trends, conversion bottlenecks, and improvement opportunities. Delivered structured reports with actionable recommendations. Offered a continued consultant engagement at the close of the internship.",
    bullets: [],
    tags: ["Work", "Analytics", "Social"],
    imageSrc: "/images/project-5.webp",
    gradientFrom: "#0f172a",
    gradientTo: "#0ea5e9",
  },
  {
    id: "exp-bas",
    linkLabel: "BAS Advokatbyrå",
    title: "CMS Developer & SEO Consultant - BAS Advokatbyrå, Stockholm",
    period: "Oct 2016 – Jun 2018 (Freelance)",
    summary:
      "Rebuilt the firm's website in WordPress with a focus on technical SEO foundations, usability, and brand alignment. Established performance tracking through Google Analytics and Search Console, and delivered ongoing reporting to firm partners.",
    bullets: [],
    tags: ["Work", "SEO", "Freelance"],
    imageSrc: "/images/project-4.webp",
    gradientFrom: "#1c1917",
    gradientTo: "#78716c",
  },
  {
    id: "exp-karl-axel",
    linkLabel: "Karl Axel Watches",
    title: "Founder - Karl Axel Watches, Stockholm",
    period: "2015 – 2017",
    summary:
      "Founded and operated a DTC watch brand offering minimalist mechanical timepieces with a Scandinavian design profile. Owned the full business end to end - product development, supplier relations, e-commerce setup, performance marketing, content production, and fulfillment.",
    bullets: [],
    tags: ["Entrepreneurship", "Founder", "DTC"],
    imageSrc: "/images/ka.png",
    gradientFrom: "#0b132b",
    gradientTo: "#10b981",
  },
  {
    id: "exp-karolinska",
    linkLabel: "Karolinska",
    title: "Platform Migrations Consultant - Karolinska Universitetssjukhuset, Stockholm",
    period: "Aug – Dec 2016",
    summary:
      "Contributed to a large-scale HR and payroll system migration covering approximately 8,000 employees. Responsible for restructuring the employee register and cost center data in Heroma, reporting directly to the Head of Payroll throughout the project.",
    bullets: [],
    tags: ["Work", "Operations", "Data"],
    imageSrc: "/images/project-6.webp",
    gradientFrom: "#134e4a",
    gradientTo: "#2dd4bf",
  },
  {
    id: "exp-triwa",
    linkLabel: "TRIWA",
    title: "Social Media Manager - TRIWA, Stockholm",
    period: "Aug – Dec 2014",
    summary:
      "Brought in to sharpen TRIWA's social media presence and establish a more consistent brand expression across platforms. Developed tone of voice, visual direction, and daily content in collaboration with the creative team to support international growth.",
    bullets: [],
    tags: ["Work", "Social", "Brand"],
    imageSrc: "/images/triwa.webp",
    gradientFrom: "#1e1b4b",
    gradientTo: "#c084fc",
  },
  {
    id: "exp-audi",
    linkLabel: "Audi",
    title: "Sales Assistant - Audi, Stockholm",
    period: "Jan – Jun 2013",
    summary:
      "Supported the sales team at Audi's Stockholm showroom, guiding customers through the product range and representing the brand at events and marketing activations.",
    bullets: [],
    tags: ["Work", "Retail", "Sales"],
    imageSrc: "/images/project-1.webp",
    gradientFrom: "#18181b",
    gradientTo: "#71717a",
  },
  {
    id: "exp-ihm",
    linkLabel: "IHM",
    title: "Digital Marketing & Sales Analytics - IHM Business School, Stockholm",
    period: "2017 – 2019",
    summary:
      "Practical program covering SEO, SEM, paid social, marketing automation, and CRO - with consistent emphasis on connecting strategy to measurable business outcomes. Applied learning through real client projects using Google Analytics, Google Ads, Screaming Frog, and marketing automation platforms.",
    bullets: [],
    tags: ["Education", "Marketing"],
    imageSrc: "/images/project-2.webp",
    gradientFrom: "#0c4a6e",
    gradientTo: "#38bdf8",
  },
  {
    id: "exp-gangsatra",
    linkLabel: "Gångsätra",
    title: "Social Sciences, International Economics - Gångsätra, Lidingö",
    period: "2010 – 2013",
    summary: "",
    bullets: [],
    tags: ["Education"],
    imageSrc: "/images/project-3.webp",
    gradientFrom: "#14532d",
    gradientTo: "#4ade80",
  },
]

/** Sidebar & cards: employment (Work), excludes Entrepreneurship-only entries. */
export const workExperiences = experiences.filter((e) => e.tags.includes("Work"))

/** Sidebar & cards: PACT, Karl Axel Watches, etc. */
export const entrepreneurshipExperiences = experiences.filter((e) =>
  e.tags.includes("Entrepreneurship")
)

/** Sidebar: schools (tags include "Education"). */
export const educationExperiences = experiences.filter((e) => e.tags.includes("Education"))

/** Main column order: Experience → Entrepreneurship → Education. */
export const portfolioExperiences: Experience[] = [
  ...workExperiences,
  ...entrepreneurshipExperiences,
  ...educationExperiences,
]

export const skillsSection = {
  title: "SKILLS",
  blocks: [
    {
      label: "Paid Media & Performance",
      text: "Meta Ads, Google Ads, Influencer Marketing",
    },
    {
      label: "Analytics & Data",
      text: "Dema, Qlik, Power BI, Google Analytics, Google Tag Manager, CRO, Tracking Implementation",
    },
    {
      label: "SEO & ASO",
      text: "Technical SEO, App Store Optimization (Sensor Tower), Content Strategy",
    },
    {
      label: "CRM & Automation",
      text: "Klaviyo, ActiveCampaign, HubSpot, Bloomreach, Salesforce Pardot",
    },
    {
      label: "Tech",
      text: "Python, SQL, JavaScript, HTML, CSS",
    },
    {
      label: "Tools",
      text: "Figma, Contentful, WordPress, Excel, Adobe Photoshop",
    },
  ],
}

export const certificationsSection = {
  title: "CERTIFICATIONS",
  items: [
    "Growth Marketing Minidegree - CXL",
    "Data Analyst Minidegree - CXL",
    "Google Tag Manager Advanced Applications - Optizent Academy",
  ],
}

export const languagesSection = {
  title: "LANGUAGES",
  text: "Swedish (native) · English (fluent)",
}

export const contactDetails = {
  email: "ave.samuelson@gmail.com",
  /** Display format */
  phone: "+46 73 511 67 94",
  /** For tel: links (E.164, no spaces) */
  phoneHref: "+46735116794",
  location: "Stockholm, Sweden",
} as const
