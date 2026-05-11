import { HeroSection as BaseHeroSection } from "@/components/home/HeroSection";

export function HeroSection({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    body: string;
    slides: readonly { src: string; alt: string }[];
    primaryButton: { label: string; href: string; variant: "primary" | "secondary" };
    secondaryButton: { label: string; href: string; variant: "primary" | "secondary" };
  };
}) {
  return (
    <BaseHeroSection
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.body}
      slides={content.slides}
      ctas={[content.primaryButton, content.secondaryButton]}
    />
  );
}
