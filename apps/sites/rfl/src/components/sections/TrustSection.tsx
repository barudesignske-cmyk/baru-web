import { WhyChooseSection } from "@/components/home/HomeSections";

export function TrustSection({
  content,
}: {
  content: { eyebrow: string; title: string; body: string; trustPoints: readonly string[] };
}) {
  return <WhyChooseSection section={content} />;
}
