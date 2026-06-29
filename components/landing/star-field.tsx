"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  hue: "gold" | "blue" | "white";
}

interface Shooting {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
}

const COLORS = {
  gold: "240, 192, 96",
  blue: "139, 178, 244",
  white: "255, 255, 255",
};

/**
 * Animated celestial background: a drifting, twinkling star field with the
 * occasional shooting star and faint constellation lines that knit together
 * near the cursor. Pure canvas, no dependencies. Honors reduced-motion.
 */
export function StarField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let shooting: Shooting | null = null;
    let raf = 0;
    let nextShootingAt = performance.now() + rand(2600, 6000);

    const pointer = { x: -9999, y: -9999, active: false };

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function buildStars() {
      // Density scales with viewport area, capped for performance.
      const count = Math.min(220, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, () => {
        const roll = Math.random();
        const hue: Star["hue"] = roll > 0.9 ? "gold" : roll > 0.78 ? "blue" : "white";
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: rand(0.4, 1.7),
          baseAlpha: rand(0.18, 0.9),
          twinkleSpeed: rand(0.6, 2.2),
          twinklePhase: rand(0, Math.PI * 2),
          vx: rand(-0.05, 0.05),
          vy: rand(0.02, 0.14),
          hue,
        };
      });
    }

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    }

    function spawnShooting() {
      const fromLeft = Math.random() > 0.5;
      shooting = {
        x: fromLeft ? rand(0, width * 0.4) : rand(width * 0.6, width),
        y: rand(0, height * 0.4),
        len: rand(120, 240),
        speed: rand(7, 12),
        angle: fromLeft ? rand(0.32, 0.5) : Math.PI - rand(0.32, 0.5),
        life: 0,
        maxLife: rand(50, 80),
      };
    }

    function drawStatic() {
      // Single frame for reduced-motion users — twinkle/drift disabled.
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${COLORS[s.hue]}, ${s.baseAlpha})`;
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function frame(now: number) {
      ctx!.clearRect(0, 0, width, height);

      // Stars: drift + twinkle.
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.y > height + 4) s.y = -4;
        if (s.x > width + 4) s.x = -4;
        else if (s.x < -4) s.x = width + 4;

        const twinkle =
          s.baseAlpha * (0.55 + 0.45 * Math.sin(now * 0.001 * s.twinkleSpeed + s.twinklePhase));

        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${COLORS[s.hue]}, ${Math.max(0, twinkle)})`;
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();

        // Soft glow on the brighter stars.
        if (s.r > 1.2) {
          ctx!.beginPath();
          ctx!.fillStyle = `rgba(${COLORS[s.hue]}, ${Math.max(0, twinkle) * 0.12})`;
          ctx!.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // Constellation lines near the pointer.
      if (pointer.active) {
        const radius = 150;
        for (const s of stars) {
          const dx = s.x - pointer.x;
          const dy = s.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            const alpha = (1 - dist / radius) * 0.5;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(139, 178, 244, ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.moveTo(pointer.x, pointer.y);
            ctx!.lineTo(s.x, s.y);
            ctx!.stroke();
          }
        }
      }

      // Shooting star.
      if (!shooting && now >= nextShootingAt) {
        spawnShooting();
        nextShootingAt = now + rand(4000, 9000);
      }
      if (shooting) {
        const s = shooting;
        s.life += 1;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;
        const fade = 1 - s.life / s.maxLife;

        const grad = ctx!.createLinearGradient(s.x, s.y, tx, ty);
        grad.addColorStop(0, `rgba(255, 245, 220, ${0.9 * fade})`);
        grad.addColorStop(0.3, `rgba(240, 192, 96, ${0.5 * fade})`);
        grad.addColorStop(1, "rgba(240, 192, 96, 0)");
        ctx!.beginPath();
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 2;
        ctx!.lineCap = "round";
        ctx!.moveTo(s.x, s.y);
        ctx!.lineTo(tx, ty);
        ctx!.stroke();

        if (s.life >= s.maxLife || s.x < -50 || s.x > width + 50 || s.y > height + 50) {
          shooting = null;
        }
      }

      raf = requestAnimationFrame(frame);
    }

    resize();

    if (reduceMotion) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => resize();
    const onMove = (e: PointerEvent) => {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    window.addEventListener("resize", onResize);
    if (!reduceMotion) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
