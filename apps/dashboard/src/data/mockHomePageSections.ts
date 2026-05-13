import {
  ABOUT_COMPANY_SECTION_TYPE,
  type BwSectionInstance,
  HERO_STATIC_SECTION_TYPE,
  PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
  QUOTE_CTA_SECTION_TYPE,
  STATS_BAR_SECTION_TYPE,
  TRUST_SECTION_TYPE,
  aboutCompanyDefaultData,
  heroStaticDefaultData,
  productClusterOverviewDefaultData,
  quoteCtaDefaultData,
  statsBarDefaultData,
  trustSectionDefaultData,
} from "@baru-web/platform-core";

export type MockHomePageSection = BwSectionInstance;

export const mockHomePageSections: MockHomePageSection[] = [
  {
    id: "home-hero",
    type: HERO_STATIC_SECTION_TYPE,
    sortOrder: 10,
    isVisible: true,
    data: heroStaticDefaultData,
  },
  {
    id: "home-product-clusters",
    type: PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
    sortOrder: 20,
    isVisible: true,
    data: productClusterOverviewDefaultData,
  },
  {
    id: "home-about-company",
    type: ABOUT_COMPANY_SECTION_TYPE,
    sortOrder: 30,
    isVisible: true,
    data: aboutCompanyDefaultData,
  },
  {
    id: "home-trust",
    type: TRUST_SECTION_TYPE,
    sortOrder: 40,
    isVisible: true,
    data: trustSectionDefaultData,
  },
  {
    id: "home-quote-cta",
    type: QUOTE_CTA_SECTION_TYPE,
    sortOrder: 50,
    isVisible: true,
    data: quoteCtaDefaultData,
  },
  {
    id: "home-stats",
    type: STATS_BAR_SECTION_TYPE,
    sortOrder: 60,
    isVisible: true,
    data: statsBarDefaultData,
  },
];
