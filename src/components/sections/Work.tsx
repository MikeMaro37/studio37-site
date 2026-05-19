"use client";

import { useState, useEffect } from "react";

type WorkItem = {
  id: string;
  vimeoId: string;
  eyebrow: string;
  title: string;
  tagline: string;
};

const items: WorkItem[] = [
  {
    id: "yandex",
    vimeoId: "1186632330",
    eyebrow: "Tech · 2024",
    title: "Yandex",
    tagline: "Brand identity in motion.",
  },
  {
    id: "flowwow",
    vimeoId: "1186633203",
    eyebrow: "E-commerce · 2023",
    title: "Flowwow",
    tagline: "Florals, frame by frame.",
  },
  {
    id: "vk-tech",
    vimeoId: "1186632996",
    eyebrow: "Tech · 2024",
    title: "VK Tech",
    tagline: "The architecture of code.",
  },
  {
    id: "reading-mom",
    vimeoId: "1186633470",
    eyebrow: "Social · 2024",
    title: "Reading Mom",
    tagline: "A national reading initiative.",
  },
  {
    id: "greenvich",
    vimeoId: "1186633791",
    eyebrow: "Retail · 2025",
    title: "Greenvich",
    tagline: "Atmosphere as identity.",
  },
  {
    id: "fonbet",
    vimeoId: "1186634307",
    eyebrow: "Sports · 2024",
    title: "FonBet",
    tagline: "Energy of the game.",
  },
];

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = items.find((i) => i.id === openId);

  useEffect(() => {
    if (openId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="work" className="bg-bg-light text-fg-light py-[140px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal flex justify-between items-end mb-16 flex-wrap gap-4">
          <h2 className="text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.035em] leading-none">
            Selected Work.
          </h2>
          <div className="text-xs tracking-[0.1em] uppercase text-muted-light font-medium">
            2023 – 2025
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              onClick={() => setOpenId(item.id)}
              className="reveal group relative aspect-video rounded-[20px] overflow-hidden bg-black ring-1 ring-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
            >
              <iframe
                src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&badge=0&title=0&byline=0&portrait=0`}
                allow="autoplay; fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full pointer-events-none"
                title={item.title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-7 z-10 text-white pointer-events-none">
                <div className="text-[11px] tracking-[0.1em] uppercase font-medium opacity-85 mb-2">
                  {item.eyebrow}
                </div>
                <div className="text-[24px] md:text-[28px] font-medium tracking-[-0.02em] leading-[1.05] mb-1">
                  {item.title}
                </div>
                <div className="text-[14px] text-white/70 font-normal leading-[1.4]">
                  {item.tagline}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openItem && (
        <div
          onClick={() => setOpenId(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenId(null);
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
              src={`https://player.vimeo.com/video/${openItem.vimeoId}?autoplay=1&autopause=0&badge=0&title=0&byline=0&portrait=0`}
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title={openItem.title}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/60 text-xs tracking-[0.1em] uppercase font-medium pointer-events-none">
            {openItem.title} · {openItem.eyebrow} · Press ESC or click outside to close
          </div>
        </div>
      )}
    </section>
  );
}