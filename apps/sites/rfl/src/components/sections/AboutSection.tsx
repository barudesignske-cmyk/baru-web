import { AboutSection as BaseAboutSection } from "@/components/home/HomeSections";

export function AboutSection({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    image: { src: string; alt: string };
  };
}) {
  return <BaseAboutSection about={content} />;
}
