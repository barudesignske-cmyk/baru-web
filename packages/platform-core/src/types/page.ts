export type PageStatus = "draft" | "published" | "archived";

export type Page = {
  id: string;
  siteId: string;
  title: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  status: PageStatus;
};
