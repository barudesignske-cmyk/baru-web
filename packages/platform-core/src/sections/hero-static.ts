import { z } from "zod";
import { bwButtonSchema, bwImageSchema } from "../fields/common";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const HERO_STATIC_SECTION_TYPE = "hero_static";

export const heroStaticSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  body: z.string().min(1),
  slides: z.array(bwImageSchema).min(1),
  primaryButton: bwButtonSchema,
  secondaryButton: bwButtonSchema.optional(),
});

export type HeroStaticData = z.infer<typeof heroStaticSchema>;

export const heroStaticDefaultData: HeroStaticData = {
  eyebrow: "Steel & Metal Products Manufacturer",
  title: "Reliable Fabrication and Custom Steel Solutions for Kenya",
  body: "Reliable Fabricators Limited manufactures meterboards, hospital beds, lockers, LED lighting, cable trays, enclosures and custom steel products from Nairobi's Industrial Area.",
  slides: [{ src: "/rfl-assets/steel-DIqp7IFF.jpg", alt: "Steel fabrication" }],
  primaryButton: { label: "Request A Quote", href: "#contact", variant: "primary" },
  secondaryButton: { label: "Learn More", href: "#about", variant: "secondary" },
};

export const heroStaticFields: BwFieldDefinition[] = [
  {
    name: "eyebrow",
    label: "Small heading",
    type: "text",
    helperText: "Short text shown above the hero title.",
  },
  { name: "title", label: "Main title", type: "text", required: true },
  { name: "body", label: "Intro text", type: "textarea", required: true },
  {
    name: "slides",
    label: "Hero slides",
    type: "repeater",
    fields: [
      { name: "src", label: "Image path", type: "text", required: true },
      { name: "alt", label: "Alt text", type: "text", required: true },
    ],
  },
  { name: "primaryButton", label: "Primary button", type: "button", required: true },
  { name: "secondaryButton", label: "Secondary button", type: "button" },
];

export const heroStaticSectionDefinition: BwSectionDefinition<typeof heroStaticSchema> = {
  type: HERO_STATIC_SECTION_TYPE,
  label: "Hero",
  description: "Main hero section with slider imagery and CTA buttons.",
  schema: heroStaticSchema,
  defaultData: heroStaticDefaultData,
  fields: heroStaticFields,
};
