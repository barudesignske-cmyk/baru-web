import { HighlightsSection } from "@/components/home/HomeSections";

export function ProductClusterSection({
  content,
}: {
  content: { items: readonly { title: string; body: string }[] };
}) {
  return <HighlightsSection items={content.items} />;
}
