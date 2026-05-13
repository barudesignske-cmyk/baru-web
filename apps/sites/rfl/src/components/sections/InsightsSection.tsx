import { BlogPreviewSection } from "@/components/home/HomeSections";

export function InsightsSection({
  content,
}: {
  content: { eyebrow: string; title: string; body: string; items: any[] };
}) {
  return <BlogPreviewSection blog={content} />;
}
