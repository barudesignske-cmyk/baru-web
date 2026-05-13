import { RflSectionRenderer } from "@/components/sections/RflSectionRenderer";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import {
  footerContent,
  headerContent,
  homepageSections,
} from "@/content/homepage";

export default function HomePage() {
  return (
    <div id="top" className="bg-[#f7f8fa] text-slate-900">
      <SiteHeader content={headerContent} />

      <main id="home">
        {homepageSections
          .filter((section) => section.isVisible)
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((section) => (
            <RflSectionRenderer key={section.id} section={section} />
          ))}
      </main>

      <SiteFooter content={footerContent} />
    </div>
  );
}
