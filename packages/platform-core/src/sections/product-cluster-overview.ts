import { z } from "zod";
import { bwSimpleCardSchema } from "../fields/common";
import type { BwFieldDefinition } from "../fields/field-definition";
import type { BwSectionDefinition } from "./section-definition";

export const PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE = "product_cluster_overview";

export const productClusterOverviewSchema = z.object({
  items: z.array(bwSimpleCardSchema).min(1),
});

export type ProductClusterOverviewData = z.infer<typeof productClusterOverviewSchema>;

export const productClusterOverviewDefaultData: ProductClusterOverviewData = {
  items: [
    {
      title: "Built for Projects",
      body: "Fabrication support for contractors, institutions and industrial teams handling medium and large-scale rollouts.",
    },
  ],
};

export const productClusterOverviewFields: BwFieldDefinition[] = [
  {
    name: "items",
    label: "Highlight cards",
    type: "repeater",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "body", label: "Description", type: "textarea", required: true },
    ],
  },
];

export const productClusterOverviewSectionDefinition: BwSectionDefinition<typeof productClusterOverviewSchema> = {
  type: PRODUCT_CLUSTER_OVERVIEW_SECTION_TYPE,
  label: "Product Cluster Overview",
  description: "Highlight cards introducing key product/fabrication areas.",
  schema: productClusterOverviewSchema,
  defaultData: productClusterOverviewDefaultData,
  fields: productClusterOverviewFields,
};
