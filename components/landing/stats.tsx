"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site-config";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo for a satisfying settle.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix?: string;
  label: string;
  active: boolean;
}) {
  const current = useCountUp(value, active);
  const display = Math.round(current).toLocaleString("en-US");

  return (
    <div className="relative text-center">
      <div className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span className="text-gradient-gold">{display}</span>
        {suffix ? <span className="text-gradient-gold">{suffix}</span> : null}
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-subtext">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-8">
      <div className="container-x">
        <div
          ref={ref}
          className="glass relative overflow-hidden rounded-3xl px-6 py-10 shadow-card sm:px-12 sm:py-12"
        >
          {/* Subtle accent line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-celeste/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div key={stat.label} className="relative">
                {i > 0 && (
                  <span className="absolute -left-5 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/10 sm:block" />
                )}
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  active={active}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
