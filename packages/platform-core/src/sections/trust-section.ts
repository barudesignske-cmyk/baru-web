import { z } from "zod";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const TRUST_SECTION_TYPE = "trust_section";

export const trustSectionSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  trustPoints: z.array(z.string().min(1)).min(1),
});

export type TrustSectionData = z.infer<typeof trustSectionSchema>;

export const trustSectionDefaultData: TrustSectionData = {
  eyebrow: "Why Choose Us",
  title: "We are specialists and we love what we do",
  body: "From concept to final fabrication, our staff has the expertise and commitment required to carry out demanding projects across sectors.",
  trustPoints: ["End-to-end fabrication from design to final finishing"],
};

export const trustSectionFields: BwFieldDefinition[] = [
  { name: "eyebrow", label: "Section label", type: "text", required: true },
  { name: "title", label: "Title", type: "text", required: true },
  { name: "body", label: "Body", type: "textarea", required: true },
  {
    name: "trustPoints",
    label: "Trust points",
    type: "repeater",
    fields: [{ name: "value", label: "Point", type: "text", required: true }],
  },
];

export const trustSectionDefinition: BwSectionDefinition<typeof trustSectionSchema> = {
  type: TRUST_SECTION_TYPE,
  label: "Trust Section",
  description: "Credibility/assurance content with key trust bullets.",
  schema: trustSectionSchema,
  defaultData: trustSectionDefaultData,
  fields: trustSectionFields,
};
