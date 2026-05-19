"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Craft", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-hairline-dark backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${scrolled ? "bg-black/70" : "bg-black/40"}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-12">
        <a href="#" className="text-[15px] font-medium tracking-tight text-white">Mike Maro</a>
        <ul className="flex gap-5 sm:gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs font-normal text-white/80 hover:text-white transition-opacity">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}