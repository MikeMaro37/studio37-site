"use client";

import { ParticleField } from "@/components/ui/ParticleField";

export function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white pt-[200px] pb-[120px] px-6 text-center overflow-hidden">
      <ParticleField count={80} />
      <div className="relative">
        <div className="text-xs tracking-[0.15em] uppercase text-muted-dark font-medium mb-8">
          Let&apos;s make something.
        </div>
        <h2 className="text-[clamp(48px,8vw,120px)] font-semibold tracking-[-0.0237em] leading-none mb-12">
          Start a<br />
          <span className="font-serif-italic">conversation.</span>
        </h2>
        <a href="mailto:hello@mikemaro.com" className="inline-flex items-center gap-3 text-[22px] font-normal text-white no-underline border-b border-hairline-dark pb-2.5 hover:border-white transition-colors group">
          hello@mikemaro.com
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 7H21M15 1L21 7L15 13" />
          </svg>
        </a>
      </div>
    </section>
  );
}