// All site copy lives here. Edit this file to update the site and the /cv page.

export const site = {
  url: "https://axelsamuelson.com",
  name: "Axel Samuelson",
  role: "Head of Growth · Premium DTC & E-commerce",
  title: "Axel Samuelson – Head of Growth, DTC & E-commerce",
  description:
    "Stockholm-based growth leader with 10+ years in paid media, SEO, CRO, CRM and analytics for premium DTC brands such as CDLP, C'est Normal and Sneakersnstuff. Founder of PACT.",
  email: "ave.samuelson@gmail.com",
  phone: "+46 73 511 67 94",
  phoneHref: "tel:+46735116794",
  location: "Stockholm, Sweden",
  // Add your LinkedIn URL here, e.g. "https://www.linkedin.com/in/your-handle/".
  // The link is shown everywhere as soon as this is filled in.
  linkedin: "",
};

export const headline = ["Building profitable DTC brands,", "from acquisition to P&L."];

export const about =
  "Growth leader with 10+ years building and scaling growth for premium DTC e-commerce across paid media, SEO, CRO, CRM and analytics. I steer growth on contribution margin and full-price demand, work closely with finance on budget allocation and P&L, and build my own data and AI tooling to shorten the path from insight to action.";

export const now =
  "Leading growth for C'est Normal and CDLP via Orange Juice Ecommerce Agency, and building PACT, a wine marketplace I founded in 2025.";

export const highlights = [
  { value: "+84%", label: "contribution margin YoY", context: "C'est Normal, first 4.5 months" },
  { value: "+27%", label: "contribution margin on 48% lower media spend", context: "CDLP, first 12 months" },
  { value: "+16%", label: "full-price sales above the brand's all-time high", context: "CDLP, rolling 12 months" },
];

export type Block = { heading?: string; meta?: string; intro?: string; results?: string[]; how?: string[] };

export type Role = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  tags: string;
  image?: string;
  links?: { label: string; href: string }[];
  summary: string;
  results?: string[];
  resultsLabel?: string;
  how?: string[];
  cases?: Block[];
};

export const experience: Role[] = [
  {
    id: "orange-juice",
    title: "Growth Lead (Consultant)",
    company: "Orange Juice Ecommerce Agency",
    location: "Stockholm",
    period: "Nov 2025 – Present",
    tags: "Consulting · Growth · DTC",
    image: "/images/orange-juice.webp",
    summary:
      "Orange Juice is an integrated growth partner for premium Scandinavian DTC brands, combining media buying, financial advisory and full-funnel growth management. I lead growth end to end for a portfolio of clients and steer on new-customer revenue and contribution margin, not ROAS. Key clients: C'est Normal and CDLP (see below).",
    cases: [
      {
        heading: "Client case: C'est Normal",
        meta: "Jul 2026 – Present",
        intro:
          "Swedish DTC menswear brand (jeans, shorts, sneakers). I took over growth when the brand was profitable but Nordic-dependent (39% of net sales in SE + NO), discount-heavy and almost fully reliant on Meta. I own paid media, growth strategy, measurement, profitability steering and creative strategy.",
        results: [
          "Grew contribution margin (CM3) by +84% on +61% net sales, lifting CM3 margin by 2.8 pp.",
          "Grew full-price revenue by +94% while cutting the discounted share of net sales by ~8 pp. Outside sale periods the share fell ~7 pp, so growth was not bought with markdowns.",
          "Doubled monthly media investment and turned it into +54% new customers. Acquisition got more expensive at scale, but the extra spend paid back in absolute contribution margin.",
        ],
        how: [
          "Restructured the Meta account by folding US and DE into the global campaign, which delivered the year's strongest US performance. Markets are isolated only when they can sustain learning-phase volume on their own.",
          "Fixed a measurement blind spot: showed that Meta's country breakdown reflects ad-delivery location, not shipping address, and validated a 10-country exclusion list against aMER by shipping and billing country.",
          "Re-based max-CAC targets on market-specific AOV instead of blended AOV.",
          "Defined category roles (sneakers for acquisition, jeans for retention), a discount philosophy for the Swedish market, and the value-proposition and creative-brief framework for The Jeans and The Shorts.",
          "Designed a phased Google Ads roadmap (feed and Merchant Center fixes, then PMax, value-based bidding and scale) and migrated the product feed to Woolytech.",
        ],
      },
    ],
  },
  {
    id: "cdlp",
    title: "Head of Growth",
    company: "CDLP",
    location: "Stockholm",
    period: "Dec 2024 – Present",
    tags: "In-house, then via Orange Juice from Nov 2025",
    image: "/images/cdlp.webp",
    summary:
      "CDLP is a premium Swedish underwear and essentials brand selling in 80+ countries (US 35%, UK 14%, SE 12%, DE 7%). Full-price new-customer growth had stalled since 2022. I reset the growth model around full-price demand and profitability by changing how media is bought, which categories and markets get investment, and how performance is reported. I report weekly to the Head of Ecommerce and the CFO, with aMER as north-star metric.",
    results: [
      "Full-price sales at an all-time high: rolling 12-month full-price revenue is now 16% above the previous record from 2021, which was broken in February 2026.",
      "Grew contribution margin (CM3) by +27% and CM3 margin by 10 pp in my first 12 months, while cutting media spend by 48% with net sales nearly flat (−2%).",
      "Cut nCAC by 42% and raised aMER by 72% over the same period.",
    ],
    how: [
      "Convinced the founders to move focus from markdown campaigns to scaling what sold at full price. Full-price share of net sales rose 2.9 pp, average discount depth nearly halved, and discounts are now used selectively, e.g. through a Klaviyo VIP segment ahead of seasonal sales.",
      "Re-prioritised categories and markets for new-customer acquisition, investing more where full-price demand was strongest.",
      "When creative output could not sustain Meta's volume requirements, cut total spend sharply and moved budget to Google (+37%) and affiliate (+45%) instead of scaling inefficiency. Meta's share of spend fell from 87% to 68%.",
      "Rebuilt the global Meta account into a hybrid structure: Advantage+ Shopping for scale and broad acquisition, CBO campaigns for testing, seasonal pushes and retargeting, with exclusions so the two never compete for the same audience.",
      "Uncovered a measurement flaw in global accounts: spill into low-cost markets made up 26% of reach but only 2% of spend, making raw creative metrics misleading. Built a geo-mix-adjusted CPMr model that changed which ads get scaled.",
      "Introduced a 35-dimension naming convention across 120+ ads, enabling creative analysis by funnel stage, format and concept.",
      "Built the creative strategy: three customer personas, the IEOP brief framework (Interrupt, Explain, Overcome, Push) and an AI copy system with nine product-specific skills that produces on-brand copy and briefs at scale.",
    ],
  },
  {
    id: "sneakersnstuff",
    title: "Growth Marketer",
    company: "Sneakersnstuff",
    location: "Stockholm",
    period: "Dec 2022 – Dec 2024",
    tags: "E-commerce · Retail",
    image: "/images/sns.webp",
    summary:
      "Drove market expansion and revenue growth in the e-commerce team, across both the core business and SNS's own label.",
    results: [
      "Built go-to-market strategies for new product verticals that grew both revenue and profitability.",
      "Identified assortment gaps and built the commercial expansion strategy for SNS's own label.",
      "Led the e-commerce platform migration, owning data integrity and site architecture for SEO, analytics and scalable content.",
      "Set up cross-functional processes that aligned marketing, product and infrastructure.",
    ],
  },
  {
    id: "groupm",
    title: "Owned Media Consultant (SEO & CRO)",
    company: "GroupM",
    location: "Stockholm",
    period: "Jun 2021 – Dec 2022",
    tags: "SEO · CRO · Consulting",
    image: "/images/groupm.webp",
    summary:
      "Strategic lead on owned media for clients including OKQ8, UNICEF and Husqvarna, turning web, search and business data into SEO, CRO and site-architecture strategy.",
    results: [
      "Directed large-scale website migrations, improving information architecture, internal linking and content hierarchy.",
      "Ran structured performance audits and prioritised initiatives with ICE scoring.",
      "Delivered conversion analyses that pinpointed friction and drove targeted CRO improvements.",
      "Repositioned owned media as a primary growth channel across several accounts.",
    ],
  },
  {
    id: "apprl",
    title: "Growth Manager",
    company: "APPRL / Klarna Creator Platform",
    location: "Stockholm",
    period: "Jun 2019 – Aug 2020",
    tags: "B2B · SaaS",
    image: "/images/apprl.webp",
    summary:
      "Owned inbound growth and positioning for APPRL (later the Klarna Creator Platform), targeting e-commerce brands and content creators across content, SEO, paid acquisition and Salesforce Pardot automation.",
    results: [
      "Assembled and led a cross-functional growth team spanning sales, product, marketing, data and development.",
      "Built a content-led education layer that raised lead quality and removed friction from the sales process.",
      "Integrated online and offline data into a full-journey marketing strategy that sharpened the value proposition.",
      "Improved top-of-funnel volume and sales conversion, and reduced early-stage churn.",
    ],
  },
];

export const ventures: Role[] = [
  {
    id: "pact",
    title: "Founder",
    company: "PACT",
    location: "Stockholm",
    period: "2025 – Present",
    tags: "Marketplace · Wine · AI",
    image: "/images/pact.webp",
    links: [
      { label: "pactwines.com", href: "https://pactwines.com/" },
      { label: "dirtywine.se", href: "https://www.dirtywine.se/" },
    ],
    summary:
      "PACT is a technology-enabled wine marketplace that modernises how independent wine is discovered, sourced and bought. It connects producers, trade buyers and consumers through a demand-driven model that cuts friction in sourcing, discovery and logistics. I own strategy, commercial development, producer partnerships, product, fundraising and go-to-market.",
    results: [
      "Raised initial funding from two angel investors with backgrounds in technology and food.",
      "Designed the three-sided marketplace model and a sourcing model that reduces inventory risk.",
      "Built direct producer relationships and led sales to restaurants, wine bars and other trade accounts.",
      "Building the platform hands-on: structured wine data, pricing intelligence and AI-powered extraction of wine lists.",
    ],
  },
  {
    id: "karl-axel",
    title: "Founder",
    company: "Karl Axel Watches",
    location: "Stockholm",
    period: "2015 – 2017",
    tags: "DTC · E-commerce",
    image: "/images/karl-axel.webp",
    summary:
      "Founded and ran a DTC brand of minimalist mechanical watches with a Scandinavian design profile. Owned the business end to end: product development, suppliers, e-commerce, performance marketing, content and fulfilment.",
  },
];

export const earlier = [
  {
    title: "Growth Trainee → Growth Specialist",
    company: "The Domain Was Taken",
    period: "Jan – Apr 2019",
    text: "Full-funnel audits and ICE-prioritised growth work for B2B and B2C clients: CRM automation for an online bank, performance marketing for a learning platform and App Store Optimization for an invoicing app.",
  },
  {
    title: "Operations & Intelligence Intern",
    company: "Whispr Group",
    period: "Jan – Jun 2018",
    text: "Analysed social and e-commerce performance for clients across markets. Offered a continued consultant role at the end of the internship.",
  },
  {
    title: "CMS Developer & SEO Consultant (freelance)",
    company: "BAS Advokatbyrå",
    period: "Oct 2016 – Jun 2018",
    text: "Rebuilt the firm's WordPress site on technical SEO foundations and set up Google Analytics and Search Console reporting for the partners.",
  },
  {
    title: "Platform Migrations Consultant",
    company: "Karolinska University Hospital",
    period: "Aug – Dec 2016",
    text: "HR and payroll system migration covering ~8,000 employees. Restructured the employee register and cost-centre data in Heroma, reporting to the Head of Payroll.",
  },
  {
    title: "Social Media Manager",
    company: "TRIWA",
    period: "Aug – Dec 2014",
    text: "Developed tone of voice, visual direction and daily content to support the brand's international growth.",
  },
  {
    title: "Sales Assistant",
    company: "Audi",
    period: "Jan – Jun 2013",
    text: "Supported the sales team at the Stockholm showroom and represented the brand at events.",
  },
];

export const education = [
  {
    title: "Digital Marketing & Sales Analytics",
    school: "IHM Business School, Stockholm",
    period: "2017 – 2019",
    text: "SEO, SEM, paid social, marketing automation and CRO, applied through real client projects.",
  },
  {
    title: "Social Sciences, International Economics",
    school: "Gångsätra, Lidingö",
    period: "2010 – 2013",
  },
];

export const skills = [
  { group: "Paid media", items: "Meta Ads (Advantage+, CBO), Google Ads (PMax, Shopping), affiliate (CJ), influencer marketing" },
  { group: "Profitability & analytics", items: "CM3 steering, nCAC, aMER, Dema, Qlik, Power BI, Shopify Analytics, GA4, GTM, CRO" },
  { group: "CRM & automation", items: "Klaviyo, ActiveCampaign, HubSpot, Bloomreach, Salesforce Pardot" },
  { group: "SEO & ASO", items: "Technical SEO, site migrations, content strategy, ASO (Sensor Tower)" },
  { group: "AI & product", items: "LLM pipelines (Claude API), AI copy & brief systems, Next.js, Supabase, Vercel" },
  { group: "Tech & tools", items: "Python, SQL, JavaScript, HTML/CSS, Shopify, Figma, Contentful, WordPress, Excel" },
];

export const certifications = [
  "Growth Marketing Minidegree – CXL",
  "Data Analyst Minidegree – CXL",
  "Google Tag Manager Advanced Applications – Optizent Academy",
];

export const languages = "Swedish (native) · English (fluent)";

// Short versions used on the printable /cv page.
export const cvShort: Record<string, string[]> = {
  "orange-juice": [
    "C'est Normal (client, Jul 2026 –): +84% CM3, +61% net sales and +94% full-price revenue YoY in 4.5 months, with discount share down ~8 pp. Doubled media investment profitably (+54% new customers).",
    "Rebuilt Meta account structure and measurement (delivery vs. shipping geo), set market-specific CAC targets and a phased Google Ads roadmap.",
  ],
  cdlp: [
    "All-time-high full-price sales: rolling 12 months +16% above the 2021 record.",
    "First year: +27% CM3 (+10 pp margin) on 48% lower media spend with net sales flat; nCAC −42%, aMER +72%.",
    "Shifted focus from markdowns to full-price winners; rebuilt Meta into an Advantage+/CBO hybrid with a geo-mix-adjusted CPMr model; built an AI copy system with nine product skills.",
  ],
};
