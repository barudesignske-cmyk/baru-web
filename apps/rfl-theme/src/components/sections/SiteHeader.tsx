import { HeaderSection as BaseHeaderSection } from "@/components/home/HeaderSection";

export function SiteHeader({
  content,
}: {
  content: {
    logo: { src: string; alt: string };
    navItems: readonly { label: string; href: string }[];
    topLinks: readonly string[];
    quoteCta: { label: string; href: string };
  };
}) {
  return (
    <BaseHeaderSection
      logo={content.logo}
      navItems={content.navItems}
      topLinks={content.topLinks}
      quoteCta={content.quoteCta}
    />
  );
}
