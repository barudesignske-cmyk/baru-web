import Image from "next/image";

type NavItem = { label: string; href: string };

type HeaderSectionProps = {
  logo: { src: string; alt: string };
  navItems: readonly NavItem[];
  topLinks: readonly string[];
  quoteCta: { label: string; href: string };
};

export function HeaderSection({ logo, navItems, topLinks, quoteCta }: HeaderSectionProps) {
  return (
    <header className="sticky top-0 z-30">
      <div className="border-b border-slate-200 bg-white text-[var(--bw-primary)] shadow-sm">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-[240px] items-center justify-center overflow-hidden rounded-md bg-white">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={48}
                className="h-full w-full object-contain px-3 py-2"
                priority
              />
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm whitespace-nowrap md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="font-semibold hover:text-[var(--bw-accent)]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={quoteCta.href}
            className="rfl-button rounded-md bg-[var(--bw-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e25828]"
          >
            {quoteCta.label}
          </a>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-[var(--bw-light)] text-[var(--bw-muted-text)]">
        <div className="mx-auto flex w-full max-w-[1400px] gap-5 overflow-x-auto px-4 py-2 text-xs whitespace-nowrap">
          {topLinks.map((item) => (
            <span key={item} className="text-[var(--bw-muted-text)]/90">
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
