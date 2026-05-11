import {
  ABOUT_COMPANY_SECTION_TYPE,
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

export type MockHomePageSection = {
  id: string;
  type: string;
  label: string;
  sortOrder: number;
  isVisible: boolean;
  data: unknown;
};

export const mockHomePageSections: MockHomePageSection[] = [
  {
    id: "home-hero",
    type: HERO_STATIC_SECTION_TYPE,
    label: "Hero",
    sortOrder: 10,
    isVisible: true,
    data: heroStaticDefaultData,
  },
  {
    id: "home-product-clusters",
    type: PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
    label: "Product Clusters",
    sortOrder: 20,
    isVisible: true,
    data: productClusterOverviewDefaultData,
  },
  {
    id: "home-stats",
    type: STATS_BAR_SECTION_TYPE,
    label: "Stats",
    sortOrder: 30,
    isVisible: true,
    data: statsBarDefaultData,
  },
  {
    id: "home-about",
    type: ABOUT_COMPANY_SECTION_TYPE,
    label: "About",
    sortOrder: 40,
    isVisible: true,
    data: aboutCompanyDefaultData,
  },
  {
    id: "home-trust",
    type: TRUST_SECTION_TYPE,
    label: "Trust",
    sortOrder: 50,
    isVisible: true,
    data: trustSectionDefaultData,
  },
  {
    id: "home-cta",
    type: QUOTE_CTA_SECTION_TYPE,
    label: "CTA",
    sortOrder: 60,
    isVisible: true,
    data: quoteCtaDefaultData,
  },
];
