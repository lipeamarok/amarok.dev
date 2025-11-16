"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Home() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-200 relative overflow-hidden">
      {/* Título AMAROK + .DEV */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative inline-block font-semibold tracking-tight"
        >
          <span className="block text-center text-4xl sm:text-6xl leading-none select-none bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            A M A R O K
          </span>
          {/* .DEV deslocado (descentralizado) */}
          <span
            aria-label="dot dev"
            className="dev-floating pointer-events-none select-none absolute left-full ml-2 sm:ml-1.8 bottom-2 translate-y-[18%] sm:translate-y-[22%]"
          >
            {prefersReduced ? (
              <span className="text-[#5B9FE3]/70 text-[0.65rem] sm:text-[1.05rem] font-normal tracking-[0.32em] sm:tracking-[0.90em]">
                .DEV
              </span>
            ) : (
              <span className="dev-sweep-h text-[0.65rem] sm:text-[1.05rem] font-normal tracking-[0.32em] sm:tracking-[0.90em]">
                .DEV
              </span>
            )}
          </span>
        </motion.h1>
      </div>

      {/* Subtexto com transição de carreira */}
      <div className="relative z-10 mt-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl"
        >
          <span className="relative inline-block text-gray-400/60">
            Investment Adviser
            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-gray-400/40 origin-left scale-x-0 animate-strikethrough"></span>
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7 }}
          className="mt-2 text-xl md:text-2xl text-gray-200 font-medium"
        >
          Building freedom with code
        </motion.p>
      </div>

      {/* Botões de navegação */}
      <div className="relative z-10 mt-12 flex flex-col items-center gap-3">
        <Link
          href="/about"
          className="px-6 py-3 rounded-xl bg-[#5B9FE3]/15 border border-[#5B9FE3]/25 text-[#5B9FE3] font-medium backdrop-blur-md transition-all duration-300 hover:bg-[#5B9FE3]/25 hover:border-[#5B9FE3]/35 hover:scale-[1.03]"
        >
          Don't trust. Verify. →
        </Link>
        <Link
          href="/projects"
          className="px-4 py-1.5 rounded-lg border border-white/10 text-gray-400 text-xs font-medium backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:text-gray-200 hover:bg-white/5"
        >
          Projects
        </Link>
      </div>

      <style jsx>{`
        /* Ajustes responsivos finos para manter .DEV agradavelmente deslocado */
        @media (max-width: 420px) {
          .dev-floating {
            font-size: 0.78rem;
            letter-spacing: 0.2em;
          }
        }
        /* Sweep horizontal de luz para .DEV */
        .dev-sweep-h {
          position: relative;
          display: inline-block;
          --sweep-color: rgb(139, 92, 246);
          background: linear-gradient(
            90deg,
            rgba(139, 92, 246, 0) 0%,
            rgba(139, 92, 246, 0.55) 25%,
            rgba(139, 92, 246, 0.85) 50%,
            rgba(139, 92, 246, 0.55) 75%,
            rgba(139, 92, 246, 0) 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 1px rgba(139, 92, 246, 0.55));
          animation: devSweepH 7s cubic-bezier(0.6, 0.15, 0.3, 0.95) infinite;
          opacity: 0;
        }
        @keyframes devSweepH {
          0% {
            background-position: -40% 0;
            opacity: 0;
          }
          8% {
            opacity: 0.85;
          }
          25% {
            background-position: 15% 0;
            opacity: 1;
          }
          50% {
            background-position: 60% 0;
            opacity: 1;
          }
          65% {
            background-position: 110% 0;
            opacity: 0.9;
          }
          75% {
            opacity: 0.55;
          }
          85% {
            opacity: 0.25;
          }
          100% {
            background-position: 160% 0;
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .dev-sweep-h {
            animation: none;
            opacity: 1;
            background: none;
            color: var(--sweep-color);
            filter: none;
          }
        }
      `}</style>
    </main>
  );
}
