import { z } from "zod";
import { bwImageSchema, bwLinkSchema } from "../fields/common";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const QUOTE_CTA_SECTION_TYPE = "quote_cta";

export const quoteCtaSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  cta: bwLinkSchema,
  image: bwImageSchema,
});

export type QuoteCtaData = z.infer<typeof quoteCtaSchema>;

export const quoteCtaDefaultData: QuoteCtaData = {
  eyebrow: "Quality Steel Fabrications",
  title: "Built to perform in real project conditions",
  body: "We are committed to a full range of premium steel fabrication solutions and professional customer support.",
  cta: { label: "Request A Quote", href: "#contact" },
  image: { src: "/rfl-assets/kenya-CtITcDfG.jpg", alt: "Kenya fabrication project" },
};

export const quoteCtaFields: BwFieldDefinition[] = [
  { name: "eyebrow", label: "Section label", type: "text", required: true },
  { name: "title", label: "Title", type: "text", required: true },
  { name: "body", label: "Body", type: "textarea", required: true },
  { name: "cta", label: "Primary CTA", type: "button", required: true },
  { name: "image", label: "CTA image", type: "image", required: true },
];

export const quoteCtaSectionDefinition: BwSectionDefinition<typeof quoteCtaSchema> = {
  type: QUOTE_CTA_SECTION_TYPE,
  label: "Quote CTA",
  description: "Primary conversion section with support image.",
  schema: quoteCtaSchema,
  defaultData: quoteCtaDefaultData,
  fields: quoteCtaFields,
};
