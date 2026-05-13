export const bwThemeMeta = {
  id: "rfl-theme",
  name: "Reliable Fabricators Limited Theme",
  description: "Industrial corporate theme for Reliable Fabricators Limited",
} as const;

export const bwFonts = {
  body: "Merriweather, Georgia, serif",
  heading: "Poppins, system-ui, sans-serif",
  ui: "Poppins, system-ui, sans-serif",
} as const;

export const bwColors = {
  primary: "#1e3a5f",
  primaryDark: "#0f4f7d",
  secondary: "#e46d6a",
  accent: "#ff6b35",
  dark: "#232f3e",
  text: "#1f2937",
  mutedText: "#6b7280",
  light: "#ffffff",
  offWhite: "#f7f8fa",
  surface: "#ffffff",
  surfaceSoft: "#eaf9fd",
  border: "#e2e8f0",
  sky: "#1bbde8",
  skySoft: "#84def4",
  navySoft: "#243852",
} as const;

export const bwHomeSections = {
  header: "site_header",
  hero: "hero",
  productClusters: "product_cluster_overview",
  stats: "stats_and_reviews",
  about: "about_company",
  trust: "trust_section",
  cta: "quote_cta",
  footer: "site_footer",
} as const;

export const bwButtonVariants = {
  primary: "primary",
  secondary: "secondary",
  outline: "outline",
  ghost: "ghost",
} as const;

export const bwLayout = {
  maxWidth: "1400px",
  sectionPaddingY: "5rem",
  sectionPaddingYMobile: "3rem",
  radiusLarge: "1.5rem",
  radiusMedium: "1rem",
} as const;

export const bwTheme = {
  meta: bwThemeMeta,
  fonts: bwFonts,
  colors: bwColors,
  sections: bwHomeSections,
  buttons: bwButtonVariants,
  layout: bwLayout,
} as const;

// Backward-compatible aliases for existing imports while transitioning to `bw*`.
export const rflThemeMeta = bwThemeMeta;
export const rflFonts = bwFonts;
export const rflColors = bwColors;
export const rflHomeSections = bwHomeSections;
export const rflButtonVariants = bwButtonVariants;
export const rflLayout = bwLayout;
export const rflTheme = bwTheme;
