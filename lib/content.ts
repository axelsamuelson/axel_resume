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
  linkedin: "https://www.linkedin.com/in/axel-samuelson-b54b6018/",
};

export const headline = ["Building profitable DTC brands,", "from acquisition to P&L."];

export const about =
  "Growth leader with 10+ years building and scaling growth for premium DTC e-commerce across paid media, SEO, CRO, CRM and analytics. I steer growth on absolute contribution and full-price demand, work closely with finance on budget allocation and P&L, and build my own data and AI tooling to shorten the path from insight to action.";

export const now =
  "Leading growth for C'est Normal and CDLP via Orange Juice Ecommerce Agency, and building PACT, a wine marketplace I founded in 2025.";

// Heading for the headline results row on the site and the CV.
export const highlightsTitle = "Impact as a growth leader";

export const highlights = [
  { value: "+84%", label: "growth in absolute contribution", context: "C'est Normal · first 4.5 months, YoY" },
  { value: "+27%", label: "absolute contribution on half the media spend", context: "CDLP · first 12 months, YoY" },
  { value: "+16%", label: "full-price sales above the all-time high", context: "CDLP · rolling 12 months" },
];

export type Metric = { value: string; label: string; context?: string };

export type Block = {
  company?: string;
  logo?: string;
  heading?: string;
  meta?: string;
  intro?: string;
  metrics?: Metric[];
  metricsNote?: string;
  results?: string[];
  how?: string[];
};

export type Role = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  tags: string;
  logo?: string; // e.g. "/logos/cdlp.svg"
  logoText?: string; // shown in the logo tile when there is no logo file
  logoFull?: boolean; // logo is a full square app icon: fill the tile edge to edge
  links?: { label: string; href: string }[];
  summary: string;
  metrics?: Metric[];
  metricsNote?: string;
  results?: string[];
  how?: string[];
  cases?: Block[];
};

export const experience: Role[] = [
  {
    id: "orange-juice",
    logo: "/logos/orange-juice.png",
    title: "Growth Lead (Consultant)",
    company: "Orange Juice Ecommerce Agency",
    location: "Stockholm",
    period: "Nov 2025 – Present",
    tags: "Consulting · Growth · DTC",
    summary:
      "Integrated growth partner for premium Scandinavian DTC brands, combining media buying, financial advisory and full-funnel growth management. I lead growth for a portfolio of clients and steer on new-customer revenue and contribution, not ROAS. Key clients include C'est Normal, CDLP and STIGA Sports.",
    cases: [
      {
        company: "C'est Normal",
        logo: "/logos/cestnormal.png",
        heading: "Client case: C'est Normal",
        meta: "Jul 2026 – Present",
        intro:
          "Swedish DTC menswear (jeans, shorts, sneakers). Profitable but Nordic-dependent (39% of net sales in SE + NO), discount-heavy, almost fully reliant on Meta and with new-customer intake in decline when I took over. I own paid media, growth strategy, measurement, profitability and creative strategy.",
        metricsNote: "First 4.5 months vs. same period last year",
        metrics: [
          { value: "+84%", label: "absolute contribution (CM3)", context: "on +61% net sales, CM3 margin +2.8 pp" },
          { value: "+94%", label: "full-price revenue", context: "discounted share of sales −8 pp" },
          { value: "+54%", label: "new customers", context: "declining trend reversed; media doubled, paid back in contribution" },
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
    logo: "/logos/cdlp.svg",
    title: "Head of Growth",
    company: "CDLP",
    location: "Stockholm",
    period: "Dec 2024 – Present",
    tags: "In-house, then via Orange Juice from Nov 2025",
    summary:
      "Premium Swedish underwear and essentials brand selling in 80+ countries (US 35%, UK 14%, SE 12%, DE 7%). Full-price new-customer growth had stalled since 2022, so I reset the growth model around full-price demand and profitability. Weekly reporting to the CEO and the CFO, with aMER as north star.",
    metricsNote: "First 12 months vs. prior year, full-price record as of Nov 2026",
    metrics: [
      { value: "+16%", label: "full-price sales above all-time high", context: "rolling 12 months, 2021 record broken Feb 2026" },
      { value: "+27%", label: "absolute contribution (CM3)", context: "CM3 margin +10 pp, net sales flat (−2%)" },
      { value: "−42%", label: "nCAC", context: "aMER +72% on 48% lower media spend" },
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
    logo: "/logos/sneakersnstuff.svg",
    title: "Growth Marketer",
    company: "Sneakersnstuff",
    location: "Stockholm",
    period: "Dec 2022 – Dec 2024",
    tags: "E-commerce · Retail",
    summary:
      "Drove market expansion and revenue growth in the e-commerce team, across both the core business and SNS's own label.",
    results: [
      "Built go-to-market strategies for new product verticals that grew both revenue and profitability.",
      "Identified assortment gaps and built the commercial expansion strategy for SNS's own label.",
      "Led the e-commerce platform migration, owning data integrity and site architecture for SEO, analytics and scalable content.",
    ],
  },
  {
    id: "groupm",
    logo: "/logos/groupm.webp",
    logoFull: true,
    title: "Owned Media Consultant (SEO & CRO)",
    company: "GroupM",
    location: "Stockholm",
    period: "Jun 2021 – Dec 2022",
    tags: "SEO · CRO · Consulting",
    summary:
      "Strategic lead on owned media for clients including OKQ8, UNICEF and Husqvarna, turning web, search and business data into SEO, CRO and site-architecture strategy.",
    results: [
      "Directed large-scale website migrations, improving information architecture, internal linking and content hierarchy.",
      "Delivered conversion analyses that pinpointed friction and drove targeted CRO improvements.",
      "Repositioned owned media as a primary growth channel across several accounts.",
    ],
  },
  {
    id: "apprl",
    logo: "/logos/klarna.svg",
    title: "Growth Manager",
    company: "APPRL / Klarna Creator Platform",
    location: "Stockholm",
    period: "Jun 2019 – Aug 2020",
    tags: "B2B · SaaS",
    summary:
      "Owned inbound growth and positioning for APPRL (later the Klarna Creator Platform), targeting e-commerce brands and content creators across content, SEO, paid acquisition and Salesforce Pardot automation.",
    results: [
      "Assembled and led a cross-functional growth team spanning sales, product, marketing, data and development.",
      "Built a content-led education layer that raised lead quality and removed friction from the sales process.",
      "Improved top-of-funnel volume and sales conversion, and reduced early-stage churn.",
    ],
  },
];

export const ventures: Role[] = [
  {
    id: "pact",
    logo: "/logos/pact.png",
    title: "Founder",
    company: "PACT",
    location: "Stockholm",
    period: "2025 – Present",
    tags: "Marketplace · Wine · AI",
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
    logoText: "KA",
    title: "Founder",
    company: "Karl Axel Watches",
    location: "Stockholm",
    period: "2015 – 2017",
    tags: "DTC · E-commerce",
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
