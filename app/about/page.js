"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FiCode,
  FiLayers,
  FiCpu,
  FiServer,
  FiHexagon,
  FiLink2,
  FiTool,
  FiGrid,
  FiFeather,
  FiFolder,
  FiGithub,
  FiMail,
  FiLinkedin,
  FiChevronUp,
  FiChevronDown,
  FiArrowLeft,
  FiBook,
  FiTerminal,
  FiHeart,
  FiBriefcase,
  FiAward,
  FiSend,
  FiDownload,
} from "react-icons/fi";
import { translations } from "../locales/about";
import { generateCV } from "../utils/generatecv";

export default function AboutPage() {
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [lang, setLang] = useState("pt");
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjectsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setPageVisible(true);
  }, []);

  const sections = [
    "hero",
    "story",
    "skills",
    "projects",
    "values",
    "experience",
    "education",
    "contact",
  ];

  const scrollToSection = (direction) => {
    const currentScroll = window.scrollY;
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (direction === "down") {
      const nextSection = sectionElements.find(
        (el) => el.offsetTop > currentScroll + 100
      );
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      const prevSection = sectionElements
        .reverse()
        .find((el) => el.offsetTop < currentScroll - 100);
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e10] via-[#151517] to-[#1d1d1f] text-gray-200 py-12 px-6">
      <div
        className={`transition-opacity duration-700 ${pageVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Botão Voltar */}
        <div className="max-w-5xl mx-auto mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#5B9FE3]/40 transition-all text-gray-400 hover:text-white"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.backButton}</span>
          </a>
        </div>

        {/* CONTAINER */}
        <div className="max-w-5xl mx-auto space-y-20">
          {/* ========== HERO SECTION ========== */}
          <section id="hero" className="relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* Foto - Expandida verticalmente com filtro P&B */}
              <div className="flex-shrink-0 mx-auto lg:mx-0 lg:self-center group">
                <div className="relative w-64 h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                  <Image
                    src="/profile2.JPG"
                    alt="Filipe Amarok"
                    fill
                    className="object-cover grayscale hover:grayscale-0 hover:contrast-110 transition-all duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    Filipe Arouck
                  </h1>

                  <div className="flex items-center gap-2">
                    {/* Language Toggle */}
                    <button
                      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                      aria-label="Toggle language"
                    >
                      <span
                        className={`text-xs font-medium transition-colors ${
                          lang === "pt" ? "text-[#5B9FE3]" : "text-gray-500"
                        }`}
                      >
                        PT
                      </span>
                      <span className="text-gray-600">/</span>
                      <span
                        className={`text-xs font-medium transition-colors ${
                          lang === "en" ? "text-[#5B9FE3]" : "text-gray-500"
                        }`}
                      >
                        EN
                      </span>
                    </button>

                    {/* Export CV Button */}
                    <button
                      onClick={() => generateCV(lang)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 hover:bg-[#5B9FE3]/20 hover:border-[#5B9FE3]/50 transition-all group"
                      aria-label="Download CV"
                    >
                      <FiDownload className="w-3.5 h-3.5 text-[#5B9FE3]" />
                      <span className="text-xs font-medium text-[#5B9FE3]">CV</span>
                    </button>
                  </div>
                </div>

                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  {t.heroDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1.5 rounded-full bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 text-[#5B9FE3] text-sm font-medium">
                    {t.heroTags.ai}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 text-[#5B9FE3] text-sm font-medium">
                    {t.heroTags.web3}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 text-[#5B9FE3] text-sm font-medium">
                    {t.heroTags.hpc}
                  </span>
                </div>

                {/* Menu de navegação rápida */}
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-medium">
                    {t.jumpToSection}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "skills", label: t.navigation.skills, icon: FiTerminal },
                      { id: "projects", label: t.navigation.projects, icon: FiFolder },
                      { id: "values", label: t.navigation.values, icon: FiHeart },
                      {
                        id: "experience",
                        label: t.navigation.experience,
                        icon: FiBriefcase,
                      },
                      { id: "education", label: t.navigation.education, icon: FiAward },
                      { id: "contact", label: t.navigation.contact, icon: FiSend },
                    ].map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            document
                              .getElementById(section.id)
                              ?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#5B9FE3]/10 hover:border-[#5B9FE3]/30 transition-all text-sm text-gray-300 hover:text-white group"
                        >
                          <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#5B9FE3] transition-colors flex-shrink-0" />
                          <span className="truncate">{section.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== STORY SECTION ========== */}
          <section id="story" className="space-y-10">
            <h2 className="text-3xl font-bold text-white">{t.storyTitle}</h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p1}
              <span className="text-white font-semibold">{t.story.p1Highlight}</span>
              {t.story.p1End}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p2}</p>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p3}</p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p4}
              <span className="text-white font-semibold">{t.story.p4Highlight}</span>
              {t.story.p4End}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p5}
              <span className="text-white font-semibold">{t.story.p5Highlight}</span>
              {t.story.p5End}
            </p>

            <blockquote className="text-gray-200 text-xl font-semibold text-center">
              {t.story.quote1}
            </blockquote>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p6}</p>

            <blockquote className="text-gray-200 text-xl italic border-l-4 border-purple-500 pl-4">
              {t.story.quote2}
            </blockquote>

            <blockquote className="text-gray-200 text-xl italic border-l-4 border-purple-500 pl-4">
              {t.story.quote3}
            </blockquote>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p7}
              <span className="font-semibold text-white">{t.story.p7Highlight}</span>
              {t.story.p7Mid}
              <span className="font-semibold text-white">{t.story.p7End}</span>
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p8}
              <span className="font-semibold text-white">{t.story.p8Highlight}</span>
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p9}</p>

            <p className="text-gray-200 text-xl font-semibold text-center">
              {t.story.quote4}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p9Mid}
              <span className="font-semibold text-white">{t.story.p9Highlight}</span>
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p10}
              <span className="font-semibold">{t.story.p10Highlight}</span>
              {t.story.p10End}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p11}</p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p12}
              <span className="text-white font-semibold">{t.story.p12Highlight}</span>
              {t.story.p12End}
              <span className="font-semibold text-white">{t.story.p12Award}</span>
              {t.story.p12Final}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p13}
              <span className="font-semibold text-white">{t.story.p13Highlight}</span>
              {t.story.p13End}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p14}</p>

            <p className="text-gray-300 leading-relaxed text-lg">
              {t.story.p15}
              <span className="text-white font-semibold">{t.story.p15Highlight}</span>
              {t.story.p15End}
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p16}</p>

            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p17}</p>
            <p className="text-gray-200 text-lg italic border-l-4 border-purple-500 pl-4">
              {t.story.cycle}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">{t.story.p18}</p>

            <div
              className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/40 p-8 bg-white/5"
            >
              <p className="text-gray-300 leading-relaxed text-lg font-bold text-center mb-4">
                {t.story.todayTitle}
              </p>
              <p className="text-gray-300 leading-relaxed text-lg text-center mb-6">
                {t.story.todayIntro}
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg text-align-left max-w-2xl mx-auto space-y-2">
                {t.story.todayItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* ========== SKILLS SECTION ========== */}
          <section id="skills" className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{t.skillsTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Languages & Core",
                  icon: <FiCode className="text-[#5B9FE3]" />,
                  items: ["Julia (High-Performance Computing)", "Python (Advanced & AsyncIO)", "Rust (Systems Programming)", "TypeScript / JavaScript", "SQL (Advanced Queries & Optimization)"],
                },
                {
                  title: "AI & Multi-Agent Engineering",
                  icon: <FiCpu className="text-[#5B9FE3]" />,
                  items: [
                    "OpenAI / LLM APIs",
                    "Multi-Agent Orchestration",
                    "RAG (Retrieval-Augmented Generation)",
                    "Vector Embeddings",
                    "Machine Learning",
                    "Turing.jl / Flux.jl",
                  ],
                },
                {
                  title: "Backend & Data Engineering",
                  icon: <FiServer className="text-[#5B9FE3]" />,
                  items: [
                    "FastAPI",
                    "SQLAlchemy / Alembic",
                    "Pandas / NumPy",
                    "Web Scraping (Selenium/Soup)",
                    "Task Queues (APScheduler/Celery)",
                    "Redis",
                  ],
                },
                {
                  title: "Frontend & Desktop",
                  icon: <FiLayers className="text-[#5B9FE3]" />,
                  items: [
                    "Next.js",
                    "React ecosystem",
                    "Vite",
                    "Zustand (State Management)",
                    "TailwindCSS",
                    "Tauri (Rust-based Apps)",
                  ],
                },
                {
                  title: "Web3 & Blockchain Forensics",
                  icon: <FiHexagon className="text-[#5B9FE3]" />,
                  items: [
                    "Solana RPC Nodes",
                    "Wallet Forensics & Tracing",
                    "EVM Security Tools (Slither/Foundry)",
                    "Smart Contracts Integration",
                    "Bug Bounty Automation",
                    "SAST / DAST",
                    "Slither",
                    "Semgrep",
                  ],
                },
                {
                  title: "DevOps, QA & Architecture",
                  icon: <FiLink2 className="text-[#5B9FE3]" />,
                  items: [
                    "Docker & Containerization",
                    "CI/CD Pipelines (GitHub Actions)",
                    "OAuth2",
                    "TDD / Testing (Pytest)",
                    "Postman",
                    "Linux / Bash Automation",
                    "PostgreSQL / NeonDB (Serverless)",
                    "Microservices & Modular Monoliths",
                    "JWT + Refresh Tokens",
                  ],
                },


              ].map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[#5B9FE3]/40 transition-all duration-300 backdrop-blur-sm min-h-[180px] flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-xl">{section.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-[#5B9FE3]/20 hover:border-[#5B9FE3]/30 hover:text-gray-100 transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========== PROJECTS SECTION ========== */}
          <section id="projects" className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{t.projectsTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  slug: "ghost-wallet-hunter",
                  titleImage: "/projects/ghost-wallet-hunter/logo-ghost-hunter_3.png",
                  titleImageWidth: 250,
                  titleImageHeight: 55,
                  videoDemo: "/projects/ghost-wallet-hunter/demo-GHW.mp4",
                  description:
                    "Forensic intelligence system for Solana wallets powered by seven specialized detective agents. Built in Julia for real-time detection of exploits, fraud patterns and coordinated network behavior.",
                  stack:
                    "Julia · Oxygen.jl · Solana RPC · React · Vite · Tailwind · Three.js",
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
                  stack:
                    "Julia · Rust · Tauri · React · Docker · AI/ML · SQLite/Postgres",
                },
              ].map((project, i) => (
                <Link
                  key={i}
                  href={`/projects/${project.slug}`}
                  className={`block rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-[480px] overflow-hidden hover:scale-[1.03] hover:shadow-[0_20px_60px_-15px_rgba(91,159,227,0.4)] hover:border-[#5B9FE3]/40 hover:bg-white/8 ${
                    projectsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${i * 150}ms`,
                    transitionDuration: "600ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Video Demo ou Placeholder */}
                  <div className="h-36 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-[#5B9FE3]/30">
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
                    <Image
                      src={project.titleImage}
                      alt="Project Title"
                      width={project.titleImageWidth || 300}
                      height={project.titleImageHeight || 90}
                      className="object-contain"
                    />
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-white/10">
                    {project.stack}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ========== VALUES SECTION ========== */}
          <section id="values" className="relative mt-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-4">{t.valuesTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">

              {/* Top Principles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Principle 1 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5B9FE3]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-[#5B9FE3]/10 flex items-center justify-center mb-6 group-hover:bg-[#5B9FE3]/20 transition-colors">
                    <FiFeather className="w-6 h-6 text-[#5B9FE3]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {t.values.principle1}
                  </h3>
                </div>

                {/* Principle 2 */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5B9FE3]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-[#5B9FE3]/10 flex items-center justify-center mb-6 group-hover:bg-[#5B9FE3]/20 transition-colors">
                    <FiHexagon className="w-6 h-6 text-[#5B9FE3]" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t.values.principle2}{" "}
                    <span className="text-white font-medium">
                      {t.values.principle2Words[0]}
                    </span>
                    ,{" "}
                    <span className="text-white font-medium">
                      {t.values.principle2Words[1]}
                    </span>{" "}
                    e{" "}
                    <span className="text-white font-medium">
                      {t.values.principle2Words[2]}
                    </span>{" "}
                    {t.values.principle2End}
                  </p>
                </div>
              </div>

              {/* Manifesto Intro */}
              <div className="text-center mt-4 -mb-6 relative z-10">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {t.values.principle2Footer}
                </p>
              </div>

              {/* Manifesto */}
              <div className="relative py-4">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5B9FE3]/5 to-transparent blur-xl"></div>
                <div className="relative bg-[#0e0e10]/50 border-y border-white/10 backdrop-blur-sm py-8 text-center">
                  <blockquote className="max-w-3xl mx-auto px-6">
                    <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                      {t.values.manifesto1}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B9FE3] to-[#4A8ED2]">
                        {t.values.manifesto2}
                      </span>
                      <br className="hidden md:block" />
                      {" "}{t.values.manifesto3}
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Objectives & Conclusion Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Objectives (Purpose) */}
                <div className="lg:col-span-7 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5B9FE3]/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                    <FiTool className="text-[#5B9FE3]" />
                    {t.values.objectiveTitle}
                  </h3>

                  <div className="space-y-6">
                    {[
                      { h: t.values.purpose1Highlight, t: t.values.purpose1 },
                      { h: t.values.purpose2Highlight, t: t.values.purpose2 },
                      { h: t.values.purpose3Highlight, t: t.values.purpose3 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5B9FE3] mt-2.5 flex-shrink-0" />
                        <p className="text-lg text-gray-300 leading-relaxed">
                          <span className="text-white font-medium block mb-1">{item.h}</span>
                          {item.t}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-[#5B9FE3]/10 to-transparent border border-[#5B9FE3]/20 flex flex-col justify-center">
                  <div className="space-y-6">
                    <p className="text-xl text-white font-medium leading-relaxed">
                      {t.values.conclusion1}
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {t.values.conclusion2}
                    </p>
                    <div className="h-px w-12 bg-[#5B9FE3]/50 my-4"></div>
                    <p className="text-xl text-[#5B9FE3] font-bold leading-relaxed">
                      {t.values.conclusion3Highlight}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5B9FE3]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          </section>

          {/* ========== PROFESSIONAL EXPERIENCE SECTION ========== */}
          <section id="experience" className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{t.experienceTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {/* Full-Stack Developer */}
              <div className="relative pl-8 border-l-2 border-[#5B9FE3]/30 hover:border-[#5B9FE3]/60 transition-all duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5B9FE3] ring-4 ring-[#5B9FE3]/20"></div>

                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {t.experience.dev.title}
                    </h3>
                    <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                      {t.experience.dev.period}
                    </span>
                  </div>
                  <p className="text-[#5B9FE3] font-medium mb-4">
                    {t.experience.dev.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t.experience.dev.description}
                  </p>

                  <ul className="space-y-2 text-gray-300 mb-4">
                    {t.experience.dev.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#5B9FE3] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-400 text-sm mb-2">
                    {t.experience.dev.projectsLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 rounded-lg text-[#5B9FE3] text-sm">
                      AISYAD
                    </span>
                    <span className="px-3 py-1 bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 rounded-lg text-[#5B9FE3] text-sm">
                      Ghost Wallet Hunter
                    </span>
                    <span className="px-3 py-1 bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 rounded-lg text-[#5B9FE3] text-sm">
                      BugXHunter
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder & Author */}
              <div className="relative pl-8 border-l-2 border-[#5B9FE3]/30 hover:border-[#5B9FE3]/60 transition-all duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5B9FE3] ring-4 ring-[#5B9FE3]/20"></div>

                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {t.experience.founder.title}
                    </h3>
                    <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                      {t.experience.founder.period}
                    </span>
                  </div>
                  <p className="text-[#5B9FE3] font-medium mb-4">
                    {t.experience.founder.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t.experience.founder.description}
                  </p>

                  <ul className="space-y-2 text-gray-300">
                    {t.experience.founder.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#5B9FE3] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Investment Specialist */}
              <div className="relative pl-8 border-l-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/60 ring-4 ring-white/10"></div>

                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {t.experience.adviser.title}
                    </h3>
                    <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                      {t.experience.adviser.period}
                    </span>
                  </div>
                  <p className="text-gray-400 font-medium mb-4">
                    {t.experience.adviser.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t.experience.adviser.description}
                  </p>

                  <ul className="space-y-2 text-gray-300">
                    {t.experience.adviser.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Administrative & Customer Operations */}
              <div className="relative pl-8 border-l-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/60 ring-4 ring-white/10"></div>

                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {t.experience.admin.title}
                    </h3>
                    <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                      {t.experience.admin.period}
                    </span>
                  </div>
                  <p className="text-gray-400 font-medium mb-4">
                    {t.experience.admin.company}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t.experience.admin.description}
                  </p>

                  <ul className="space-y-2 text-gray-300 mb-4">
                    {t.experience.admin.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-400 italic text-sm">
                    {t.experience.admin.footer}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ========== ACADEMIC BACKGROUND SECTION ========== */}
          <section id="education" className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{t.educationTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {/* MBA */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#5B9FE3]/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {t.education.mba}
                    </h3>
                    <p className="text-[#5B9FE3]">PUCRS</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    2020 / 2022
                  </span>
                </div>
              </div>

              {/* Bacharelado */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#5B9FE3]/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {t.education.bachelor}
                    </h3>
                    <p className="text-[#5B9FE3]">Grupo Projeção</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    2015 / 2018
                  </span>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-[#5B9FE3]/10 via-[#5B9FE3]/5 to-transparent border border-[#5B9FE3]/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {t.education.certifications}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5B9FE3]"></div>
                    <p className="text-gray-300">{t.education.cea}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5B9FE3]"></div>
                    <p className="text-gray-300">{t.education.cpa}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== CTA SECTION ========== */}
          <section id="contact" className="text-center pt-10">
            <p className="text-gray-400">{t.contactCta}</p>

            <a
              href="https://github.com/lipeamarok"
              target="_blank"
              className="mt-4 inline-block px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 transition text-gray-200"
            >
              {t.contactButton}
            </a>

            {/* Ícones de contato */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <a
                href="mailto:lipearouck@gmail.com"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-gray-400 hover:text-gray-200"
                title="Email"
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
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/filipe-arouck"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-gray-400 hover:text-gray-200"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </section>
        </div>

        {/* Botões de navegação flutuantes */}
        <div
          className={`fixed right-6 bottom-6 flex flex-col gap-2 transition-opacity duration-300 ${
            showScrollButtons ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => scrollToSection("up")}
            className="p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5B9FE3]/40 transition-all text-gray-400 hover:text-white shadow-lg"
            aria-label="Scroll to previous section"
          >
            <FiChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection("down")}
            className="p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#5B9FE3]/40 transition-all text-gray-400 hover:text-white shadow-lg"
            aria-label="Scroll to next section"
          >
            <FiChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
