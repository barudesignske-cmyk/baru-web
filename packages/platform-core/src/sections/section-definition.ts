import type { z } from "zod";
import type { BwFieldDefinition } from "../fields/field-definition";

export type BwSectionDefinition<TSchema extends z.ZodTypeAny> = {
  type: string;
  label: string;
  description?: string;
  schema: TSchema;
  defaultData: z.infer<TSchema>;
  fields: BwFieldDefinition[];
};

export type BwSectionInstance<TData = unknown> = {
  id: string;
  type: string;
  sortOrder: number;
  isVisible: boolean;
  data: TData;
};
