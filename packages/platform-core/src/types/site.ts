export type SiteStatus = "draft" | "active" | "archived";

export type Site = {
  id: string;
  name: string;
  domain?: string;
  themeId: string;
  status: SiteStatus;
};
