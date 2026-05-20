"use client";

import { useEffect, useState } from "react";
import { ParticleField } from "@/components/ui/ParticleField";

export function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-[120px] pb-20 text-center overflow-hidden bg-black">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 10%, rgba(255,255,255,0.04), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.03), transparent 60%)",
        }}
      />

      <ParticleField count={160} />

      <p className="relative z-10 text-xs tracking-[0.1em] uppercase text-muted-dark mb-6 font-medium">
        CGI &nbsp;·&nbsp; VFX &nbsp;·&nbsp; Motion Design
      </p>

      <h1 className="relative z-10 hero-gradient-text text-[clamp(56px,11vw,160px)] font-semibold tracking-[-0.055em] leading-[0.95] mb-6">
        Independent studio<br />
        <span className="font-serif-italic tracking-[-0.02em]">for fashion & lifestyle.</span>
      </h1>

      <p className="relative z-10 text-[clamp(18px,2vw,22px)] text-muted-dark font-normal max-w-[640px] leading-[1.4] mb-12">
        We craft visual language for ambitious brands. From concept to final frame: CGI, VFX, motion design and AI-native production.
      </p>

      <div
        onClick={() => setOpen(true)}
        className="group relative z-10 w-[min(92vw,1080px)] aspect-video rounded-[20px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-hairline-dark bg-black cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01]"
      >
        <iframe
          src="https://player.vimeo.com/video/1193917877?background=1&autoplay=1&loop=1&muted=1&autopause=0&badge=0&title=0&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full pointer-events-none"
          title="Studio 37 Showreel"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />

        <div className="absolute top-6 left-7 text-xs tracking-[0.1em] uppercase text-white/80 font-medium pointer-events-none z-10">
          Showreel &nbsp;·&nbsp; 2024 – 2026
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-110 z-10">
          <svg width="22" height="24" viewBox="0 0 22 24" className="fill-black ml-1">
            <path d="M0 0 L22 12 L0 24 Z" />
          </svg>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors z-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 3L13 13M13 3L3 13" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1200px] aspect-video rounded-[16px] overflow-hidden bg-black shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
          >
            <iframe
              src="https://player.vimeo.com/video/1193917877?autoplay=1&autopause=0&badge=0&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title="Studio 37 Showreel"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/60 text-xs tracking-[0.1em] uppercase font-medium pointer-events-none">
            Showreel · Studio 37 · Press ESC or click outside to close
          </div>
        </div>
      )}
    </section>
  );
}