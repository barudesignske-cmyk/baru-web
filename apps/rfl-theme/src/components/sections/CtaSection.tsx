import { QualityCtaSection } from "@/components/home/HomeSections";

export function CtaSection({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    body: string;
    cta: { label: string; href: string };
    image: { src: string; alt: string };
  };
}) {
  return <QualityCtaSection section={content} />;
}
