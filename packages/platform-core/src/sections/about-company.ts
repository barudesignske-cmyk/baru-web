import { z } from "zod";
import { bwImageSchema } from "../fields/common";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const ABOUT_COMPANY_SECTION_TYPE = "about_company";

export const aboutCompanySchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  address: z.string().min(1),
  image: bwImageSchema,
});

export type AboutCompanyData = z.infer<typeof aboutCompanySchema>;

export const aboutCompanyDefaultData: AboutCompanyData = {
  eyebrow: "About RFL",
  title: "Specialist steel fabrication with practical delivery focus",
  body: "Reliable Fabricators Limited is a full-service steel fabrication company supporting electrical, healthcare, storage and custom industrial requirements.",
  address: "Address: Road C, Off Enterprise Road, Industrial Area, Nairobi",
  image: {
    src: "/rfl-assets/build-2Tn0bcpM.jpg",
    alt: "RFL fabrication output",
  },
};

export const aboutCompanyFields: BwFieldDefinition[] = [
  { name: "eyebrow", label: "Section label", type: "text", required: true },
  { name: "title", label: "Title", type: "text", required: true },
  { name: "body", label: "Body", type: "textarea", required: true },
  { name: "address", label: "Address", type: "text", required: true },
  { name: "image", label: "Supporting image", type: "image", required: true },
];

export const aboutCompanySectionDefinition: BwSectionDefinition<typeof aboutCompanySchema> = {
  type: ABOUT_COMPANY_SECTION_TYPE,
  label: "About Company",
  description: "Company introduction with supporting image and location.",
  schema: aboutCompanySchema,
  defaultData: aboutCompanyDefaultData,
  fields: aboutCompanyFields,
};
