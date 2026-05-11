import { z } from "zod";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const INSIGHTS_PREVIEW_SECTION_TYPE = "insights_preview";

export const insightsPreviewSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  items: z.array(
    z.object({
      meta: z.string().min(1),
      title: z.string().min(1),
      excerpt: z.string().min(1),
    }),
  ).min(1),
});

export type InsightsPreviewData = z.infer<typeof insightsPreviewSchema>;

export const insightsPreviewDefaultData: InsightsPreviewData = {
  eyebrow: "Blog",
  title: "Insights from our workshop",
  body: "Explore practical advice, product updates, and project ideas from our steel fabrication team.",
  items: [
    {
      meta: "Workshop Notes",
      title: "Choosing steel finishes for long-term outdoor durability",
      excerpt: "A practical guide to selecting coatings and fabrication details for Kenya's environmental conditions.",
    },
  ],
};

export const insightsPreviewFields: BwFieldDefinition[] = [
  { name: "eyebrow", label: "Section label", type: "text", required: true },
  { name: "title", label: "Title", type: "text", required: true },
  { name: "body", label: "Body", type: "textarea", required: true },
  {
    name: "items",
    label: "Article cards",
    type: "repeater",
    fields: [
      { name: "meta", label: "Meta label", type: "text", required: true },
      { name: "title", label: "Title", type: "text", required: true },
      { name: "excerpt", label: "Excerpt", type: "textarea", required: true },
    ],
  },
];

export const insightsPreviewSectionDefinition: BwSectionDefinition<typeof insightsPreviewSchema> = {
  type: INSIGHTS_PREVIEW_SECTION_TYPE,
  label: "Insights Preview",
  description: "Static article cards preview section.",
  schema: insightsPreviewSchema,
  defaultData: insightsPreviewDefaultData,
  fields: insightsPreviewFields,
};
