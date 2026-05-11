import Image from "next/image";
import type { BlogPreviewItem, Testimonial } from "@/content/rflHomepageContent";

export function HighlightsSection({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-[#e46d6a]/25 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[var(--bw-navy)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutSection({
  about,
}: {
  about: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    image: { src: string; alt: string };
  };
}) {
  return (
    <section id="about" className="bg-white py-12">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold tracking-[0.24em] text-[var(--bw-accent)] uppercase">{about.eyebrow}</p>
          <h2 className="text-3xl font-bold text-[var(--bw-navy)] md:text-4xl">{about.title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">{about.body}</p>
          <p className="mt-4 text-sm text-slate-600">{about.address}</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#e46d6a]/30 bg-slate-100 shadow-lg">
          <Image src={about.image.src} alt={about.image.alt} width={1200} height={900} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection({
  section,
}: {
  section: { eyebrow: string; title: string; body: string; trustPoints: readonly string[] };
}) {
  return (
    <section id="why-rfl" className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="overflow-hidden rounded-3xl border border-[#e46d6a]/30 bg-gradient-to-r from-[#eaf9fd] via-white to-[#f7f8fa]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 md:p-12">
              <p className="mb-4 text-sm font-bold tracking-[0.28em] text-[var(--bw-accent)] uppercase">{section.eyebrow}</p>
              <h2 className="text-3xl font-bold leading-tight text-[var(--bw-navy)] md:text-5xl">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-slate-700">{section.body}</p>
            </div>
            <div className="bg-gradient-to-br from-[#1bbde8] to-[#84def4] p-8 text-[#0f4f7d] md:p-10">
              <div className="grid gap-4">
                {section.trustPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-[#e46d6a]/30 bg-white/80 p-4 text-sm font-semibold leading-7 shadow-sm">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QualityCtaSection({
  section,
}: {
  section: {
    eyebrow: string;
    title: string;
    body: string;
    cta: { label: string; href: string };
    image: { src: string; alt: string };
  };
}) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="overflow-hidden rounded-3xl border border-[#e46d6a]/30 bg-gradient-to-r from-[#1bbde8] via-[#7ddcf3] to-transparent">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <p className="mb-4 text-sm font-bold tracking-[0.28em] text-[var(--bw-navy)] uppercase">{section.eyebrow}</p>
              <h2 className="text-3xl font-bold leading-tight text-[var(--bw-navy)] md:text-5xl">{section.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--bw-navy)]/90">{section.body}</p>
              <div className="mt-8">
                <a href={section.cta.href} className="rfl-button inline-block rounded-lg border border-[#e46d6a]/45 bg-white px-6 py-3 text-sm font-semibold text-[var(--bw-navy)] shadow-md transition hover:bg-[#e46d6a] hover:text-white">
                  {section.cta.label}
                </a>
              </div>
            </div>
            <div className="relative min-h-[340px] p-6 md:p-8">
              <div className="absolute inset-6 overflow-hidden rounded-[2rem] border border-[#e46d6a]/35 bg-white/35 shadow-lg backdrop-blur-sm">
                <Image src={section.image.src} alt={section.image.alt} width={1200} height={900} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection({
  reviews,
}: {
  reviews: { eyebrow: string; title: string; score: string; scoreLabel: string; items: Testimonial[] };
}) {
  return (
    <section id="reviews" className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="rounded-3xl border border-[#e46d6a]/25 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.28em] text-[var(--bw-navy)] uppercase">{reviews.eyebrow}</p>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{reviews.title}</h2>
            </div>
            <div className="rounded-2xl border border-[#e46d6a]/25 bg-[#eaf9fd] px-5 py-4">
              <p className="text-3xl font-bold text-slate-900">{reviews.score}</p>
              <p className="text-sm text-slate-600">{reviews.scoreLabel}</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.items.map((item) => (
              <article key={item.name} className="rounded-2xl border border-[#e46d6a]/20 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.review}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreviewSection({
  blog,
}: {
  blog: { eyebrow: string; title: string; body: string; items: BlogPreviewItem[] };
}) {
  return (
    <section id="insights" className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="overflow-hidden rounded-3xl border border-[#e46d6a]/25 bg-gradient-to-br from-[#eaf9fd] to-white p-8 md:p-12">
          <p className="mb-4 text-sm font-bold tracking-[0.28em] text-[var(--bw-blue)] uppercase">{blog.eyebrow}</p>
          <h2 className="text-3xl font-bold text-[var(--bw-navy)] md:text-5xl">{blog.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">{blog.body}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {blog.items.map((item) => (
              <article key={item.title} className="flex h-full flex-col rounded-2xl border border-[#e46d6a]/20 bg-white p-5 shadow-sm">
                <p className="mb-2 text-xs tracking-[0.2em] text-slate-500 uppercase">{item.meta}</p>
                <h3 className="text-xl font-bold text-[var(--bw-navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.excerpt}</p>
                <a href="#" className="mt-4 text-sm font-medium text-[var(--bw-blue)] hover:text-[var(--bw-navy)]">
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSection({
  footer,
}: {
  footer: {
    backToTopLabel: string;
    columns: readonly { title: string; items: readonly string[] }[];
    logo: { src: string; alt: string };
    copyright: string;
  };
}) {
  return (
    <footer id="contact" className="mt-12 bg-[#232F3E] text-white">
      <div className="bg-[#37475A] transition-colors hover:bg-[#485769]">
        <div className="mx-auto max-w-[1400px] px-4 py-4 text-center">
          <a href="#top" className="text-sm font-medium">{footer.backToTopLabel}</a>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 py-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-base font-bold">{column.title}</h3>
              <ul className="space-y-2.5 text-sm text-white/80">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex h-14 w-[196px] items-center justify-center overflow-hidden rounded-lg bg-white">
              <Image src={footer.logo.src} alt={footer.logo.alt} width={196} height={56} className="h-full w-full object-contain px-3 py-2" />
            </div>
            <p className="text-xs text-white/70">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
