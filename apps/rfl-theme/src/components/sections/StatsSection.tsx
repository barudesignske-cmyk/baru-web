import { ReviewsSection } from "@/components/home/HomeSections";

export function StatsSection({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    score: string;
    scoreLabel: string;
    items: { name: string; role: string; review: string }[];
  };
}) {
  return <ReviewsSection reviews={content} />;
}
