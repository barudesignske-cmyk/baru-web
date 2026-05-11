"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroSlide = { src: string; alt: string };

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  slides: readonly HeroSlide[];
  ctas: readonly { label: string; href: string; variant: "primary" | "secondary" }[];
};

export function HeroSection({ eyebrow, title, description, slides, ctas }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[560px] overflow-hidden bg-[#0f4f7d]">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1800}
          height={950}
          className={`absolute inset-0 h-[560px] w-full object-cover opacity-35 transition-opacity duration-700 ${
            index === activeSlide ? "opacity-35" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f4f7d]/95 via-[#0f4f7d]/75 to-[#0f4f7d]/45" />

      <div className="absolute inset-x-0 top-1/2 mx-auto w-full max-w-[1400px] -translate-y-1/2 px-4">
        <div className="max-w-3xl text-white">
          <p className="mb-3 inline-block rounded-full border border-[#e46d6a]/45 bg-[#e46d6a]/25 px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={
                  cta.variant === "primary"
                    ? "rfl-button rounded-lg bg-[var(--bw-accent)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#e25828]"
                    : "rfl-button rounded-lg border border-white/70 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#0f4f7d]"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-white/15 px-3 py-2 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0f4f7d]"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-white/15 px-3 py-2 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0f4f7d]"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
