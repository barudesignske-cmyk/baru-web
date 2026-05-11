import {
  ABOUT_COMPANY_SECTION_TYPE,
  HERO_STATIC_SECTION_TYPE,
  INSIGHTS_PREVIEW_SECTION_TYPE,
  PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
  QUOTE_CTA_SECTION_TYPE,
  SITE_FOOTER_SECTION_TYPE,
  SITE_HEADER_SECTION_TYPE,
  STATS_BAR_SECTION_TYPE,
  TRUST_SECTION_TYPE,
  type BwSectionInstance,
} from "@baru-web/platform-core";
import { rflHomepageContent } from "@/content/rflHomepageContent";

export const headerContent = {
  sectionId: SITE_HEADER_SECTION_TYPE,
  ...rflHomepageContent.header,
} as const;

export const heroContent = {
  sectionId: HERO_STATIC_SECTION_TYPE,
  eyebrow: rflHomepageContent.hero.eyebrow,
  title: rflHomepageContent.hero.title,
  body: rflHomepageContent.hero.description,
  slides: rflHomepageContent.hero.slides,
  primaryButton: rflHomepageContent.hero.ctas[0],
  secondaryButton: rflHomepageContent.hero.ctas[1],
} as const;

export const productClusterContent = {
  sectionId: PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
  items: rflHomepageContent.highlights,
} as const;

export const aboutContent = {
  sectionId: ABOUT_COMPANY_SECTION_TYPE,
  ...rflHomepageContent.about,
} as const;

export const trustContent = {
  sectionId: TRUST_SECTION_TYPE,
  ...rflHomepageContent.whyChoose,
} as const;

export const ctaContent = {
  sectionId: QUOTE_CTA_SECTION_TYPE,
  ...rflHomepageContent.qualityCta,
} as const;

export const statsContent = {
  sectionId: STATS_BAR_SECTION_TYPE,
  score: rflHomepageContent.reviews.score,
  scoreLabel: rflHomepageContent.reviews.scoreLabel,
  items: rflHomepageContent.reviews.items,
  eyebrow: rflHomepageContent.reviews.eyebrow,
  title: rflHomepageContent.reviews.title,
} as const;

export const insightsContent = {
  sectionId: INSIGHTS_PREVIEW_SECTION_TYPE,
  ...rflHomepageContent.blogPreview,
} as const;

export const footerContent = {
  sectionId: SITE_FOOTER_SECTION_TYPE,
  ...rflHomepageContent.footer,
} as const;

export const homepageSections: BwSectionInstance[] = [
  {
    id: "home-hero",
    type: HERO_STATIC_SECTION_TYPE,
    sortOrder: 10,
    isVisible: true,
    data: heroContent,
  },
  {
    id: "home-product-clusters",
    type: PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
    sortOrder: 20,
    isVisible: true,
    data: productClusterContent,
  },
  {
    id: "home-about-company",
    type: ABOUT_COMPANY_SECTION_TYPE,
    sortOrder: 30,
    isVisible: true,
    data: aboutContent,
  },
  {
    id: "home-trust",
    type: TRUST_SECTION_TYPE,
    sortOrder: 40,
    isVisible: true,
    data: trustContent,
  },
  {
    id: "home-quote-cta",
    type: QUOTE_CTA_SECTION_TYPE,
    sortOrder: 50,
    isVisible: true,
    data: ctaContent,
  },
  {
    id: "home-stats",
    type: STATS_BAR_SECTION_TYPE,
    sortOrder: 60,
    isVisible: true,
    data: statsContent,
  },
  {
    id: "home-insights",
    type: INSIGHTS_PREVIEW_SECTION_TYPE,
    sortOrder: 70,
    isVisible: true,
    data: insightsContent,
  },
];
