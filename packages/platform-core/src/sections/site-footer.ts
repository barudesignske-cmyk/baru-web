import { z } from "zod";
import { bwImageSchema } from "../fields/common";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const SITE_FOOTER_SECTION_TYPE = "site_footer";

export const siteFooterSchema = z.object({
  backToTopLabel: z.string().min(1),
  columns: z.array(
    z.object({
      title: z.string().min(1),
      items: z.array(z.string().min(1)),
    }),
  ).min(1),
  logo: bwImageSchema,
  copyright: z.string().min(1),
});

export type SiteFooterData = z.infer<typeof siteFooterSchema>;

export const siteFooterDefaultData: SiteFooterData = {
  backToTopLabel: "Back to top",
  columns: [{ title: "Get to Know Us", items: ["About RFL Kenya"] }],
  logo: {
    src: "/rfl-assets/Reliable-fabricators-Limited-2023-4-new-Cjf2VJPY.png",
    alt: "Reliable Fabricators Ltd logo",
  },
  copyright: "© 2014-2026, Reliable Fabricators Ltd. or its affiliates",
};

export const siteFooterFields: BwFieldDefinition[] = [
  { name: "backToTopLabel", label: "Back to top text", type: "text", required: true },
  {
    name: "columns",
    label: "Footer columns",
    type: "repeater",
    fields: [
      { name: "title", label: "Column title", type: "text", required: true },
      {
        name: "items",
        label: "Column items",
        type: "repeater",
        fields: [{ name: "value", label: "Item", type: "text", required: true }],
      },
    ],
  },
  { name: "logo", label: "Footer logo", type: "image", required: true },
  { name: "copyright", label: "Copyright text", type: "text", required: true },
];

export const siteFooterSectionDefinition: BwSectionDefinition<typeof siteFooterSchema> = {
  type: SITE_FOOTER_SECTION_TYPE,
  label: "Site Footer",
  description: "Footer navigation, contacts and legal line.",
  schema: siteFooterSchema,
  defaultData: siteFooterDefaultData,
  fields: siteFooterFields,
};
