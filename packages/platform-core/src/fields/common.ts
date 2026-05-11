import { z } from "zod";

export const bwButtonSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z.enum(["primary", "secondary", "outline", "ghost"]).default("primary"),
});

export type BwButton = z.infer<typeof bwButtonSchema>;

export const bwLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export type BwLink = z.infer<typeof bwLinkSchema>;

export const bwImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

export type BwImage = z.infer<typeof bwImageSchema>;

export const bwNavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export type BwNavItem = z.infer<typeof bwNavItemSchema>;

export const bwStatItemSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  description: z.string().optional(),
});

export type BwStatItem = z.infer<typeof bwStatItemSchema>;

export const bwSimpleCardSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export type BwSimpleCard = z.infer<typeof bwSimpleCardSchema>;
