"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  driftX: number;
  driftY: number;
};

type Props = {
  count?: number;
  color?: string;
};

export function ParticleField({ count = 237, color = "rgba(255,255,255," }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find the section parent for event listeners
    const section = container.closest("section") || container.parentElement;
    if (!section) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      particlesRef.current = Array.from({ length: count }).map(() => {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.5 + 0.6,
          vx: 0,
          vy: 0,
          driftX: (Math.random() - 0.5) * 0.2,
          driftY: (Math.random() - 0.5) * 0.2,
        };
      });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const rect = container.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current.x = t.clientX - rect.left;
      mouseRef.current.y = t.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const onTouchEnd = () => {
      mouseRef.current.active = false;
    };

    section.addEventListener("mousemove", onMouseMove as EventListener);
    section.addEventListener("mouseleave", onMouseLeave as EventListener);
    section.addEventListener("touchmove", onTouchMove as EventListener, { passive: true } as AddEventListenerOptions);
    section.addEventListener("touchend", onTouchEnd as EventListener);

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(container);

    const REPEL_RADIUS = 370;
    const REPEL_FORCE = 3.7;
    const RETURN_FORCE = 0.0037;
    const FRICTION = 0.73;

    const draw = () => {
      if (!visibleRef.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const m = mouseRef.current;

      for (const p of particlesRef.current) {
        p.baseX += p.driftX;
        p.baseY += p.driftY;
        if (p.baseX < 0 || p.baseX > rect.width) p.driftX *= -1;
        if (p.baseY < 0 || p.baseY > rect.height) p.driftY *= -1;

        if (m.active) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_RADIUS && dist > 0) {
            const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx += (p.baseX - p.x) * RETURN_FORCE;
        p.vy += (p.baseY - p.y) * RETURN_FORCE;

        p.vx *= FRICTION;
        p.vy *= FRICTION;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${p.opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      section.removeEventListener("mousemove", onMouseMove as EventListener);
      section.removeEventListener("mouseleave", onMouseLeave as EventListener);
      section.removeEventListener("touchmove", onTouchMove as EventListener);
      section.removeEventListener("touchend", onTouchEnd as EventListener);
    };
  }, [count, color]);

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}