import {
  ABOUT_COMPANY_SECTION_TYPE,
  HERO_STATIC_SECTION_TYPE,
  INSIGHTS_PREVIEW_SECTION_TYPE,
  PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
  QUOTE_CTA_SECTION_TYPE,
  STATS_BAR_SECTION_TYPE,
  TRUST_SECTION_TYPE,
  type BwSectionInstance,
} from "@baru-web/platform-core";
import { AboutSection } from "./AboutSection";
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";
import { InsightsSection } from "./InsightsSection";
import { ProductClusterSection } from "./ProductClusterSection";
import { StatsSection } from "./StatsSection";
import { TrustSection } from "./TrustSection";

type RflSectionRendererProps = {
  section: BwSectionInstance;
};

export function RflSectionRenderer({ section }: RflSectionRendererProps) {
  if (!section.isVisible) return null;

  switch (section.type) {
    case HERO_STATIC_SECTION_TYPE:
      return <HeroSection content={section.data as any} />;
    case PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE:
      return <ProductClusterSection content={section.data as any} />;
    case ABOUT_COMPANY_SECTION_TYPE:
      return <AboutSection content={section.data as any} />;
    case TRUST_SECTION_TYPE:
      return <TrustSection content={section.data as any} />;
    case QUOTE_CTA_SECTION_TYPE:
      return <CtaSection content={section.data as any} />;
    case STATS_BAR_SECTION_TYPE:
      return <StatsSection content={section.data as any} />;
    case INSIGHTS_PREVIEW_SECTION_TYPE:
      return <InsightsSection content={section.data as any} />;
    default:
      return null;
  }
}
