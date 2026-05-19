"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}