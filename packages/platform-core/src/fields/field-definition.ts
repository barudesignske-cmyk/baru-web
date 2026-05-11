export type BwFieldType =
  | "text"
  | "textarea"
  | "rich_text"
  | "image"
  | "button"
  | "link"
  | "boolean"
  | "select"
  | "repeater"
  | "number";

export type BwFieldOption = {
  label: string;
  value: string;
};

export type BwFieldDefinition = {
  name: string;
  label: string;
  type: BwFieldType;
  required?: boolean;
  helperText?: string;
  placeholder?: string;
  options?: BwFieldOption[];
  fields?: BwFieldDefinition[];
};
