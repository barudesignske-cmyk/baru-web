export type SectionStatus = "visible" | "hidden";

export type Section = {
  id: string;
  siteId: string;
  pageId: string;
  type: string;
  variant?: string;
  sortOrder: number;
  status: SectionStatus;
  data: Record<string, unknown>;
};
