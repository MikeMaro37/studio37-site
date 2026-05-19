"use client";

import { useEffect, useState } from "react";

export function FeaturedCase() {
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
    <section className="bg-black text-white py-[100px] px-6 min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="reveal">
          <div className="text-xs tracking-[0.15em] uppercase text-muted-dark font-medium mb-5">
            Campaign &nbsp;·&nbsp; Avito Fashion &nbsp;·&nbsp; 2026
          </div>
          <h3 className="text-[clamp(40px,7vw,96px)] font-semibold tracking-[-0.045em] leading-none mb-6">
            AVITO FASHION.
          </h3>
          <p className="text-[clamp(18px,1.8vw,22px)] text-muted-dark max-w-[640px] leading-[1.45] mb-14 font-normal">
            A celebrity-led fashion campaign for one of the largest marketplaces in Europe. Single-camera production fused with CG and tight post for a two-week turnaround.
          </p>
        </div>

        <div
          onClick={() => setOpen(true)}
          className="reveal group relative w-full aspect-video rounded-[24px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-hairline-dark bg-black cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01]"
        >
          <iframe
            src="https://player.vimeo.com/video/1186628246?background=1&autoplay=1&loop=1&muted=1&autopause=0&badge=0&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full pointer-events-none"
            title="Avito Fashion"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-110 z-10">
            <svg width="22" height="24" viewBox="0 0 22 24" className="fill-black ml-1">
              <path d="M0 0 L22 12 L0 24 Z" />
            </svg>
          </div>
        </div>

        <div className="reveal mt-16 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-12 gap-y-10 pt-10 border-t border-hairline-dark">
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Role</div>
            <div className="text-[15px] font-normal leading-[1.4]">
              <strong className="font-medium">Art Director</strong><br />
              CG Supervisor<br />
              Production Supervisor
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Production</div>
            <div className="text-[15px] font-normal leading-[1.4]">Concept, on-set supervision, look dev, post. 2-week turnaround.</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Team</div>
            <div className="text-[15px] font-normal leading-[1.4]">14 specialists:<br />Director, Producer, DP, Gaffer, AC, PA, look dev, 3D generalist + extended crew</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Tools</div>
            <div className="text-[15px] font-normal leading-[1.4]">Blender · Nuke · After Effects · DaVinci Resolve · Audition · Figma</div>
          </div>
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
              src="https://player.vimeo.com/video/1186628246?autoplay=1&autopause=0&badge=0&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title="Avito Fashion"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/60 text-xs tracking-[0.1em] uppercase font-medium pointer-events-none">
            Avito Fashion · Campaign · 2025 · Press ESC or click outside to close
          </div>
        </div>
      )}
    </section>
  );
}