import { z } from "zod";
import { bwImageSchema, bwLinkSchema, bwNavItemSchema } from "../fields/common";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const SITE_HEADER_SECTION_TYPE = "site_header";

export const siteHeaderSchema = z.object({
  logo: bwImageSchema,
  navItems: z.array(bwNavItemSchema),
  topLinks: z.array(z.string().min(1)),
  quoteCta: bwLinkSchema,
});

export type SiteHeaderData = z.infer<typeof siteHeaderSchema>;

export const siteHeaderDefaultData: SiteHeaderData = {
  logo: {
    src: "/rfl-assets/Reliable-fabricators-Limited-2023-4-new-Cjf2VJPY.png",
    alt: "Reliable Fabricators Ltd",
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why RFL", href: "#why-rfl" },
    { label: "Reviews", href: "#reviews" },
    { label: "Blog", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ],
  topLinks: ["Today's Deals", "Customer Service", "Registry", "Gift Cards", "Sell"],
  quoteCta: { label: "Request A Quote", href: "#contact" },
};

export const siteHeaderFields: BwFieldDefinition[] = [
  {
    name: "logo",
    label: "Logo",
    type: "image",
    required: true,
    helperText: "Primary brand logo shown in the top header.",
  },
  {
    name: "navItems",
    label: "Navigation items",
    type: "repeater",
    fields: [
      { name: "label", label: "Label", type: "text", required: true },
      { name: "href", label: "Link", type: "text", required: true },
    ],
  },
  {
    name: "topLinks",
    label: "Top utility links",
    type: "repeater",
    fields: [{ name: "value", label: "Link label", type: "text", required: true }],
  },
  {
    name: "quoteCta",
    label: "Quote button",
    type: "button",
    required: true,
    helperText: "Main call-to-action button on the right side.",
  },
];

export const siteHeaderSectionDefinition: BwSectionDefinition<typeof siteHeaderSchema> = {
  type: SITE_HEADER_SECTION_TYPE,
  label: "Site Header",
  description: "Top navigation and quote call-to-action.",
  schema: siteHeaderSchema,
  defaultData: siteHeaderDefaultData,
  fields: siteHeaderFields,
};
