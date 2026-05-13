export type HeroSlide = {
  src: string;
  alt: string;
};

export type Testimonial = {
  name: string;
  role: string;
  review: string;
};

export type BlogPreviewItem = {
  meta: string;
  title: string;
  excerpt: string;
};

export const rflHomepageContent = {
  header: {
    logo: {
      src: "/rfl-assets/Reliable-fabricators-Limited-2023-4-new-Cjf2VJPY.png",
      alt: "Reliable Fabricators Ltd",
    },
    navItems: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Why RFL", href: "#why-rfl" },
      { label: "Reviews", href: "#reviews" },
      { label: "Blog", href: "#insights" },
      { label: "Contact", href: "#contact" },
    ],
    topLinks: ["Today's Deals", "Customer Service", "Registry", "Gift Cards", "Sell"],
    quoteCta: { label: "Request A Quote", href: "#contact" },
  },
  hero: {
    eyebrow: "Steel & Metal Products Manufacturer",
    title: "Reliable Fabrication and Custom Steel Solutions for Kenya",
    description:
      "Reliable Fabricators Limited manufactures meterboards, hospital beds, lockers, LED lighting, cable trays, enclosures and custom steel products from Nairobi's Industrial Area.",
    slides: [
      { src: "/rfl-assets/steel-DIqp7IFF.jpg", alt: "Steel fabrication" },
      { src: "/rfl-assets/build-2Tn0bcpM.jpg", alt: "RFL steel products" },
      { src: "/rfl-assets/kenya-CtITcDfG.jpg", alt: "Kenya industrial fabrication" },
    ] as HeroSlide[],
    ctas: [
      { label: "Request A Quote", href: "#contact", variant: "primary" },
      { label: "Learn More", href: "#about", variant: "secondary" },
    ],
  },
  highlights: [
    {
      title: "Built for Projects",
      body: "Fabrication support for contractors, institutions and industrial teams handling medium and large-scale rollouts.",
    },
    {
      title: "Quality Driven",
      body: "Process discipline, practical engineering and fit-for-purpose material choices across all fabrication categories.",
    },
    {
      title: "Made in Kenya",
      body: "Local production from Road C, Off Enterprise Road, Industrial Area, Nairobi with responsive support.",
    },
  ],
  about: {
    eyebrow: "About RFL",
    title: "Specialist steel fabrication with practical delivery focus",
    body:
      "Reliable Fabricators Limited is a full-service steel fabrication company supporting electrical, healthcare, storage and custom industrial requirements. We combine technical experience with local manufacturing capability to deliver dependable outcomes.",
    address: "Address: Road C, Off Enterprise Road, Industrial Area, Nairobi",
    image: {
      src: "/rfl-assets/build-2Tn0bcpM.jpg",
      alt: "RFL fabrication output",
    },
  },
  whyChoose: {
    eyebrow: "Why Choose Us",
    title: "We are specialists and we love what we do",
    body:
      "From concept to final fabrication, our staff has the expertise and commitment required to carry out demanding projects across sectors.",
    trustPoints: [
      "End-to-end fabrication from design to final finishing",
      "Skilled local team with industrial project experience",
      "Reliable lead times for custom and bulk orders",
      "Quality-first process with practical engineering support",
    ],
  },
  qualityCta: {
    eyebrow: "Quality Steel Fabrications",
    title: "Built to perform in real project conditions",
    body:
      "We are committed to a full range of premium steel fabrication solutions and professional customer support.",
    cta: { label: "Request A Quote", href: "#contact" },
    image: {
      src: "/rfl-assets/kenya-CtITcDfG.jpg",
      alt: "Kenya fabrication project",
    },
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What clients say about us",
    score: "4.8",
    scoreLabel: "Customer satisfaction score",
    items: [
      {
        name: "Procurement Team",
        role: "County Infrastructure",
        review:
          "RFL consistently delivers fabricated units to spec and communicates clearly through every milestone.",
      },
      {
        name: "Project Engineer",
        role: "Electrical Contractor",
        review:
          "The team handled our custom enclosure request professionally and delivered within our construction schedule.",
      },
      {
        name: "Operations Manager",
        role: "Private Hospital",
        review:
          "We received dependable fabrication quality and responsive support from quotation to delivery.",
      },
    ] as Testimonial[],
  },
  blogPreview: {
    eyebrow: "Blog",
    title: "Insights from our workshop",
    body:
      "Explore practical advice, product updates, and project ideas from our steel fabrication team.",
    items: [
      {
        meta: "Workshop Notes",
        title: "Choosing steel finishes for long-term outdoor durability",
        excerpt:
          "A practical guide to selecting coatings and fabrication details for Kenya's environmental conditions.",
      },
      {
        meta: "Project Update",
        title: "How to plan bulk fabrication orders with predictable lead times",
        excerpt:
          "A checklist to align design approvals, material readiness and installation schedules.",
      },
      {
        meta: "Industry Insight",
        title: "Safety and compliance considerations in steel fabrication",
        excerpt:
          "Common documentation and quality checks that support procurement confidence.",
      },
    ] as BlogPreviewItem[],
  },
  footer: {
    backToTopLabel: "Back to top",
    columns: [
      {
        title: "Get to Know Us",
        items: ["About RFL Kenya", "Our Products", "Custom Fabrication", "Projects & Gallery"],
      },
      {
        title: "Product Categories",
        items: ["Cable Trays & Ladders", "Electrical Enclosures", "Storage & Lockers", "Metal Fabrication"],
      },
      {
        title: "Customer Service",
        items: ["Request a Quote", "Contact Us", "FAQs", "Product Support"],
      },
      {
        title: "Contact",
        items: ["+254 735 842203", "+254 112 842203", "relfabltd@gmail.com", "reliablefabricatorsltd@gmail.com"],
      },
    ],
    logo: {
      src: "/rfl-assets/Reliable-fabricators-Limited-2023-4-new-Cjf2VJPY.png",
      alt: "Reliable Fabricators Ltd logo",
    },
    copyright: "© 2014-2026, Reliable Fabricators Ltd. or its affiliates",
  },
} as const;
