import { z } from "zod";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const STATS_BAR_SECTION_TYPE = "stats_bar";

export const statsBarSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  score: z.string().min(1),
  scoreLabel: z.string().min(1),
  items: z.array(
    z.object({
      name: z.string().min(1),
      role: z.string().min(1),
      review: z.string().min(1),
    }),
  ).min(1),
});

export type StatsBarData = z.infer<typeof statsBarSchema>;

export const statsBarDefaultData: StatsBarData = {
  eyebrow: "Reviews",
  title: "What clients say about us",
  score: "4.8",
  scoreLabel: "Customer satisfaction score",
  items: [
    {
      name: "Procurement Team",
      role: "County Infrastructure",
      review: "RFL consistently delivers fabricated units to spec and communicates clearly.",
    },
  ],
};

export const statsBarFields: BwFieldDefinition[] = [
  { name: "eyebrow", label: "Section label", type: "text", required: true },
  { name: "title", label: "Title", type: "text", required: true },
  { name: "score", label: "Score", type: "text", required: true },
  { name: "scoreLabel", label: "Score helper text", type: "text", required: true },
  {
    name: "items",
    label: "Review items",
    type: "repeater",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "role", label: "Role", type: "text", required: true },
      { name: "review", label: "Review text", type: "textarea", required: true },
    ],
  },
];

export const statsBarSectionDefinition: BwSectionDefinition<typeof statsBarSchema> = {
  type: STATS_BAR_SECTION_TYPE,
  label: "Stats Bar",
  description: "Review and trust metrics panel.",
  schema: statsBarSchema,
  defaultData: statsBarDefaultData,
  fields: statsBarFields,
};
