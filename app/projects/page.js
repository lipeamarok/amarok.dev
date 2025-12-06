"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1); // 0.3 = slow, 1 = normal, 2.5 = fast
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const animationRef = useRef(null);

  // Scroll infinito via requestAnimationFrame
  const animate = useCallback(() => {
    if (!trackRef.current) return;

    if (!isPaused) {
      const baseSpeed = 0.5; // pixels per frame
      positionRef.current -= baseSpeed * speedMultiplier;

      // Reset quando chegar na metade (loop seamless)
      const trackWidth = trackRef.current.scrollWidth / 2;
      if (Math.abs(positionRef.current) >= trackWidth) {
        positionRef.current = 0;
      }

      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, speedMultiplier]);

  useEffect(() => {
    setIsVisible(true);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const projects = [
    {
      slug: "ghost-wallet-hunter",
      titleImage: "/projects/ghost-wallet-hunter/logo-ghost-hunter_3.png",
      titleImageWidth: 250,
      titleImageHeight: 55,
      videoDemo: "/projects/ghost-wallet-hunter/demo-GHW.mp4",
      description:
        "Forensic intelligence system for Solana wallets powered by seven specialized detective agents. Built in Julia for real-time detection of exploits, fraud patterns and coordinated network behavior.",
      stack: "Julia · Oxygen.jl · Solana RPC · React · Vite · Tailwind · Three.js",
    },
    {
      slug: "aisyad",
      titleImage: "/projects/aisyad/logo-3.png",
      titleImageWidth: 450,
      titleImageHeight: 75,
      videoDemo: "/projects/aisyad/demo-AISYAD.mp4",
      description:
        "SaaS platform for automating Meta Ads campaigns. Create, optimize and manage ads with AI-driven diagnostics, real-time insights and full OAuth2 integration with Facebook Ads.",
      stack:
        "FastAPI · Python · PostgreSQL · JWT · OAuth2 · Next.js · TypeScript · Zustand · Tailwind",
    },
    {
      slug: "bugxhunter",
      titleImage: "/projects/bugxhunter/logo_bug.png",
      titleImageWidth: 220,
      titleImageHeight: 30,
      videoDemo: "/projects/bugxhunter/demo-BugXHunter.mp4",
      description:
        "Autonomous bug hunting system with simulated environments, intelligent orchestration and continuous learning. Powered by Julia for high-performance analysis and Rust/Tauri for secure system operations.",
      stack: "Julia · Rust · Tauri · React · Docker · AI/ML · SQLite/Postgres",
    },

    {
      slug: "titan-auditor",
      titleImage: "/projects/titan-auditor/titan-logo4.png",
      titleImageWidth: 240,
      titleImageHeight: 60,
      videoDemo: "/projects/titan-auditor/titan-demo.mp4",
      description:
        "Automated financial auditor: extracts CVM/SEC/PDF data, normalizes statements, computes metrics (Z‑Score, DuPont, annualized ROE, PDD) and generates LLM-backed reports via a Streamlit dashboard.",
      stack: "Python · Streamlit · Pandas · NumPy · Git · CVM/SEC parsing · LLMs",
    },

    {
      slug: "aqa",
      titleImage: "/projects/aqa/aqa-logo-complete.png",
      titleImageWidth: 360,
      titleImageHeight: 80,
      videoDemo: "/projects/aqa/aqa-trailer.mp4",
      description:
        "AI platform that automatically generates, validates, and executes API tests. Create smart test plans with LLMs and run them at high speed with a powerful Rust-based execution engine.",
      stack:
        "Python · FastAPI · Pydantic · Rust · Click · Next.js · TypeScript · Zustand · Tailwind · WebSockets · OpenAI",
    },

    {
      slug: "amarok-dev",
      titleImage: "/projects/amarok-dev/logo-lipeamarok2.png",
      titleImageWidth: 180,
      titleImageHeight: 60,
      videoDemo: "/projects/amarok-dev/trailer.mp4",
      description:
        "Yes, you're navigating right now 😄. Personal developer portfolio showcasing full-stack projects, technical background, and experimentations with AI-driven architectures, Web3 tooling and high-performance computing.",
      stack: "Next.js · React · TypeScript · TailwindCSS · Vercel · GitHub",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-[#0e0e10] via-[#151517] to-[#1d1d1f] text-gray-200 pt-12 overflow-hidden">
      <div className="w-full">
        {/* Título da página */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-4">
          Featured Projects
        </h1>

        {/* Navigation Arrows */}
        <div className="flex justify-between px-12 md:px-24 lg:px-40 mb-4">
          <button
            onMouseEnter={() => setSpeedMultiplier(-2)}
            onMouseLeave={() => setSpeedMultiplier(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300"
            aria-label="Reverse"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onMouseEnter={() => setSpeedMultiplier(3)}
            onMouseLeave={() => setSpeedMultiplier(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300"
            aria-label="Faster"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className={`flex gap-8 py-4 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ width: "fit-content" }}
        >
          {/* Render projects twice for seamless loop */}
          {[...projects, ...projects].map((project, i) => (
            <Link
              key={i}
              href={`/projects/${project.slug}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`block rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10
                           shadow-xl transition-all duration-300 cursor-pointer group
                           flex flex-col h-[480px] w-[320px] flex-shrink-0 overflow-hidden
                           hover:scale-[1.03]
                           hover:shadow-[0_20px_60px_-15px_rgba(91,159,227,0.4)]
                           hover:border-[#5B9FE3]/40
                           hover:bg-white/8`}
            >
              {/* Video Demo ou Placeholder */}
              <div className="h-40 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-[#5B9FE3]/30">
                {project.videoDemo ? (
                  <video
                    src={project.videoDemo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#8e6bff30] to-[#b79aff20] flex items-center justify-center text-gray-400 transition-all duration-300 text-center px-4 group-hover:from-[#5B9FE3]/20 group-hover:to-[#5B9FE3]/10 group-hover:text-gray-300">
                    <span className="text-sm">Demo em breve</span>
                  </div>
                )}
              </div>

              {/* Título + Logo */}
              <div className="mt-6 flex items-center justify-center gap-4 relative h-14 flex-shrink-0">
                {project.titleImage ? (
                  <>
                    <Image
                      src={project.titleImage}
                      alt="Project Title"
                      width={project.titleImageWidth || 300}
                      height={project.titleImageHeight || 90}
                      className="object-contain"
                    />
                    {project.animatedLogo && (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-[120px] h-[120px] object-contain absolute -left-24 opacity-70"
                      >
                        <source src={project.animatedLogo} type="video/mp4" />
                      </video>
                    )}
                  </>
                ) : (
                  <>
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt={`${project.title} Logo`}
                        width={170}
                        height={170}
                        className="object-contain absolute -left-20 animate-pulse-opacity"
                      />
                    )}

                    <h2 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition tracking-tight">
                      {project.title}
                    </h2>
                  </>
                )}
              </div>

              {/* Descrição */}
              <p className="mt-3 text-gray-400 text-xs leading-relaxed text-center flex-grow">
                {project.description}
              </p>

              {/* Stack */}
              <p className="mt-4 text-[11px] text-gray-500 text-center tracking-wide flex-shrink-0">
                Stack: <span className="text-gray-300">{project.stack}</span>
              </p>
            </Link>
          ))}
        </div>

        {/* LINK "who is amarok?" */}
        <div className="mt-6 text-center">
          <a
            href="/about"
            className="text-gray-400 hover:text-purple-300 transition-all duration-200 text-sm tracking-wide underline underline-offset-4 decoration-purple-400/30 hover:decoration-purple-400"
          >
            who is amarok?
          </a>
        </div>
      </div>
    </main>
  );
}
