import { FooterSection } from "@/components/home/HomeSections";

export function SiteFooter({
  content,
}: {
  content: {
    backToTopLabel: string;
    columns: readonly { title: string; items: readonly string[] }[];
    logo: { src: string; alt: string };
    copyright: string;
  };
}) {
  return <FooterSection footer={content} />;
}
