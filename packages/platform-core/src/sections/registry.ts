import { aboutCompanySectionDefinition } from "./about-company";
import { heroStaticSectionDefinition } from "./hero-static";
import { insightsPreviewSectionDefinition } from "./insights-preview";
import { productClusterOverviewSectionDefinition } from "./product-cluster-overview";
import { quoteCtaSectionDefinition } from "./quote-cta";
import { siteFooterSectionDefinition } from "./site-footer";
import { siteHeaderSectionDefinition } from "./site-header";
import { statsBarSectionDefinition } from "./stats-bar";
import { trustSectionDefinition } from "./trust-section";

export const bwSectionDefinitions = [
  siteHeaderSectionDefinition,
  heroStaticSectionDefinition,
  productClusterOverviewSectionDefinition,
  aboutCompanySectionDefinition,
  trustSectionDefinition,
  quoteCtaSectionDefinition,
  statsBarSectionDefinition,
  insightsPreviewSectionDefinition,
  siteFooterSectionDefinition,
] as const;

export const bwSectionDefinitionMap = Object.fromEntries(
  bwSectionDefinitions.map((definition) => [definition.type, definition]),
);
