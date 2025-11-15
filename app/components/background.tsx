// src/components/background.tsx
"use client";

import { useEffect, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";

type BackgroundProps = {
  /** 0.6 – 1.4 */
  intensity?: number;
  className?: string;
  enableGrain?: boolean;
  enableBeams?: boolean;
};

export function Background({
  intensity = 1,
  className = "",
  enableGrain = false,
  enableBeams = false,
}: BackgroundProps) {
  const k = useMemo(() => Math.min(1.4, Math.max(0.6, intensity)), [intensity]);
  const prefersReduced = useReducedMotion();
  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 12 });
  const sy = useSpring(my, { stiffness: 40, damping: 12 });

  useEffect(() => {
    if (prefersReduced || !canHover) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        mx.set((e.clientX / window.innerWidth - 0.5) * 2);
        my.set((e.clientY / window.innerHeight - 0.5) * 2);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [prefersReduced, canHover, mx, my]);

  function useParallaxLayer(
    coefX: number,
    coefY: number
  ): { x: MotionValue<number>; y: MotionValue<number> } {
    const x = useTransform(sx, (v: number) => v * coefX * 20 * k);
    const y = useTransform(sy, (v: number) => v * coefY * 16 * k);
    return { x, y };
  }

  function anim<T extends Record<string, unknown>>(values: T): T {
    return prefersReduced ? ({} as T) : values;
  }

  const layer1 = useParallaxLayer(1.0, 0.5);
  const layer2 = useParallaxLayer(-0.7, -0.9);
  const layer3 = useParallaxLayer(0.2, 0.4);
  const beamsLayer = useParallaxLayer(-0.3, 0.6);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* Granulação sutil */}
      {enableGrain && (
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1.1px)] [background-size:14px_14px]" />
      )}

      {/* Vignette para legibilidade */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_52%,rgba(0,0,0,0.05))] dark:bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_55%,rgba(0,0,0,0.33))]" />

      {/* Luz 1 — ciano */}
      <motion.div
        style={layer1}
        className="absolute -top-24 -left-24 h-[55vmin] w-[55vmin] rounded-full blur-3xl mix-blend-screen
                   bg-[radial-gradient(closest-side,rgba(56,189,248,0.30),rgba(56,189,248,0.00))]
                   dark:bg-[radial-gradient(closest-side,rgba(56,189,248,0.28),rgba(56,189,248,0.00))]"
        animate={anim({ scale: [1, 1.05, 1] })}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz 2 — violeta */}
      <motion.div
        style={layer2}
        className="absolute -bottom-28 -right-20 h-[65vmin] w-[65vmin] rounded-full blur-[64px] mix-blend-screen
                   bg-[radial-gradient(closest-side,rgba(168,85,247,0.28),rgba(168,85,247,0.00))]
                   dark:bg-[radial-gradient(closest-side,rgba(168,85,247,0.22),rgba(168,85,247,0.00))]"
        animate={anim({ scale: [1.03, 0.98, 1.03] })}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Luz 3 — esmeralda (centro) */}
      <motion.div
        style={layer3}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[48vmin] w-[48vmin] rounded-full blur-[72px] mix-blend-screen
                   bg-[radial-gradient(closest-side,rgba(16,185,129,0.22),rgba(16,185,129,0.00))]
                   dark:bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),rgba(16,185,129,0.00))]"
        animate={anim({ scale: [0.98, 1.06, 0.98], rotate: [0, 8, -6, 0] })}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faixa volumétrica (opcional por flag) */}
      {enableBeams && (
        <motion.div
          style={beamsLayer}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[110vmax] w-[110vmax]
                     [mask-image:radial-gradient(closest-side,rgba(255,255,255,0.9),transparent_70%)]
                     mix-blend-screen opacity-70"
          animate={anim({ rotate: [0, 20, -15, 0] })}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="h-full w-full blur-[60px]
            bg-[conic-gradient(from_0deg,rgba(56,189,248,0.10),rgba(16,185,129,0.10),rgba(168,85,247,0.10),rgba(56,189,248,0.10))]"
          />
        </motion.div>
      )}

      {/* Grid técnico discreto */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]
        bg-[linear-gradient(to_right,rgba(200,200,200,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,200,200,0.14)_1px,transparent_1px)]
        [background-size:30px_30px]"
      />
    </div>
  );
}
