"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaGithub,
  FaArrowLeft,
  FaGlobeAmericas,
  FaFolderOpen,
  FaFolder,
  FaFileCode,
  FaPlay,
  FaPause,
  FaExpand,
  FaVolumeUp,
  FaVolumeMute,
  FaDownload,
} from "react-icons/fa";
import {
  SiFastapi,
  SiRust,
  SiOpenai,
  SiPydantic,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

// --- Configuration & Data ---

const PROJECT_STRUCTURE_DATA = [
  {
    name: "autonomous-quality-agent",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "brain",
        type: "folder",
        isOpen: true,
        children: [
          {
            name: "src",
            type: "folder",
            isOpen: true,
            children: [
              {
                name: "cli",
                type: "folder",
                children: [
                  { name: "registry.py", type: "file", comment: "@register_command" },
                  { name: "commands/", type: "folder", comment: "10 comandos" },
                ],
              },
              {
                name: "generator",
                type: "folder",
                children: [
                  { name: "llm.py", type: "file", comment: "Orquestração" },
                  { name: "prompts.py", type: "file", comment: "Templates" },
                  { name: "providers.py", type: "file", comment: "Strategy Pattern" },
                ],
              },
              {
                name: "validator",
                type: "folder",
                children: [
                  { name: "models.py", type: "file", comment: "Pydantic Models" },
                  {
                    name: "utdl_validator.py",
                    type: "file",
                    comment: "Schema Validation",
                  },
                ],
              },
              {
                name: "llm",
                type: "folder",
                children: [
                  { name: "base.py", type: "file", comment: "ABC Provider" },
                  { name: "provider_mock.py", type: "file" },
                  { name: "provider_real.py", type: "file" },
                ],
              },
              {
                name: "ingestion",
                type: "folder",
                children: [
                  { name: "swagger.py", type: "file", comment: "OpenAPI Parser" },
                  { name: "security.py", type: "file", comment: "Auth Detection" },
                  { name: "negative_cases.py", type: "file" },
                ],
              },
              {
                name: "storage",
                type: "folder",
                children: [
                  { name: "json_backend.py", type: "file" },
                  { name: "sqlite.py", type: "file" },
                  { name: "s3.py", type: "file" },
                ],
              },
              { name: "cache.py", type: "file", comment: "TTL Cache" },
              { name: "telemetry/", type: "folder" },
            ],
          },
          {
            name: "tests",
            type: "folder",
            children: [
              { name: "test_*.py", type: "file", comment: "423 unit tests" },
              { name: "test_integration*.py", type: "file" },
              { name: "test_e2e_*.py", type: "file" },
              { name: "test_audit_*.py", type: "file", comment: "Security" },
            ],
          },
        ],
      },
      {
        name: "runner",
        type: "folder",
        isOpen: true,
        children: [
          {
            name: "src",
            type: "folder",
            isOpen: true,
            children: [
              { name: "main.rs", type: "file" },
              { name: "executors/", type: "folder", comment: "HTTP, GraphQL" },
              { name: "extractors/", type: "folder", comment: "JSONPath" },
              { name: "planner/", type: "folder", comment: "DAG Execution" },
              { name: "validation/", type: "folder" },
              { name: "context/", type: "folder", comment: "Interpolation" },
              { name: "retry/", type: "folder" },
              { name: "telemetry/", type: "folder", comment: "OTEL" },
            ],
          },
          { name: "Cargo.toml", type: "file" },
        ],
      },
      {
        name: "schemas",
        type: "folder",
        children: [
          { name: "utdl.schema.json", type: "file", comment: "UTDL Canônico" },
          { name: "context.schema.json", type: "file" },
          { name: "runner_report.schema.json", type: "file" },
        ],
      },
      {
        name: "docs",
        type: "folder",
        children: [
          { name: "user-guide.md", type: "file" },
          { name: "developer-guide.md", type: "file" },
          { name: "architecture.md", type: "file" },
          { name: "interface.md", type: "file", comment: "~3000 linhas" },
        ],
      },
    ],
  },
];

const PROJECT_DATA = {
  id: "aqa",
  links: {
    repo: "https://github.com/lipeamarok/autonomous-quality-agent",
    demo: null,
  },
  media: {
    mainVideo: "/projects/aqa/aqa-trailer.mp4",
    resumeVideo: "/projects/aqa/aqa-resume.mp4",
  },
  pt: {
    title: "Autonomous Quality Agent",
    subtitle: "Plataforma de Testes de API com IA + Rust Engine",
    description:
      "Plataforma SaaS + CLI que gera, valida e executa planos de teste de API automaticamente usando IA.",
    summary:
      "O AQA é uma plataforma de engenharia de qualidade que atua como um agente inteligente. Transforma requisitos em testes executáveis automaticamente usando IA (LLM), combinando cognição em Python com execução de alta performance em Rust. O sistema segue uma arquitetura de dois componentes desacoplados: o Brain (Python) para planejamento e o Runner (Rust) para execução paralela massiva.",
    sections: [
      {
        title: "Arquitetura Brain + Runner",
        content: [
          "O projeto segue uma arquitetura inovadora de dois componentes comunicando-se via protocolo **UTDL (Universal Test Definition Language)**:",
          "**🧠 The Brain (Python 3.11+):** Responsável por cognição, planejamento e validação. Lê requisitos de documentação técnica (Swagger/OpenAPI), gera planos de teste via LLM e valida contra schema UTDL.",
          "**🦀 The Runner (Rust + Tokio):** Motor de execução determinística e alta performance. Consome planos UTDL, executa requisições HTTP com paralelismo massivo via DAG (Directed Acyclic Graph).",
        ],
      },
      {
        title: "Geração de Testes via IA",
        content: [
          "O sistema ingere especificações **OpenAPI/Swagger** e automaticamente detecta esquemas de autenticação (API Key, Bearer, OAuth2).",
          "Gera casos de teste negativos automaticamente (400, 401, 404, 500) e cria fluxos de autenticação completos. Tudo isso através de prompts otimizados para GPT-4.",
          "A validação rigorosa inclui detecção de dependências circulares, validação de JSONPath e verificação de tipos de assertion.",
        ],
      },
      {
        title: "Execução Paralela com DAG",
        content: [
          "O {runner} implementa um motor de execução baseado em **Directed Acyclic Graph (DAG)**. Steps com dependências executam em ordem, enquanto steps independentes executam em paralelo.",
          "Suporta **20+ branches simultâneos** com retry policies configuráveis. A extração de dados via JSONPath permite interpolação de variáveis entre steps.",
          "Integração nativa com **OpenTelemetry** para tracing distribuído e observabilidade completa.",
        ],
      },
      {
        title: "CLI Profissional (10 Comandos)",
        content: [
          "A CLI construída com {click} + {rich} oferece 10 comandos modulares seguindo o **Registry Pattern**:",
          "**init** - Inicializa workspace | **generate** - Gera planos via LLM | **validate** - Valida planos UTDL | **run** - Executa testes",
          "**plan-list** - Lista planos | **config** - Gerencia configuração | **storage** - Backend de storage | **cache** - Gerenciamento de cache | **trace** - Tracing e telemetria",
        ],
      },
      {
        title: "Stack & Padrões de Design",
        content: [
          "O projeto utiliza padrões de design enterprise: **Strategy Pattern** para LLM Providers, **Factory Pattern** para Storage Backends, **Registry Pattern** para comandos CLI, **Adapter Pattern** para normalização UTDL.",
          "**518 testes** cobrem cenários de Unit, Integration, E2E, Extreme e Security Audit. 13 testes específicos de segurança garantem que credenciais nunca vazem para o LLM.",
        ],
      },
    ],
  },
  en: {
    title: "Autonomous Quality Agent",
    subtitle: "AI-Powered API Testing Platform + Rust Engine",
    description:
      "SaaS + CLI platform that automatically generates, validates and executes API test plans using AI.",
    summary:
      "AQA is a quality engineering platform that acts as an intelligent agent. It automatically transforms requirements into executable tests using AI (LLM), combining Python cognition with high-performance Rust execution. The system follows a two-component decoupled architecture: the Brain (Python) for planning and the Runner (Rust) for massive parallel execution.",
    sections: [
      {
        title: "Brain + Runner Architecture",
        content: [
          "The project follows an innovative two-component architecture communicating via **UTDL (Universal Test Definition Language)** protocol:",
          "**🧠 The Brain (Python 3.11+):** Responsible for cognition, planning and validation. Reads requirements from technical documentation (Swagger/OpenAPI), generates test plans via LLM and validates against UTDL schema.",
          "**🦀 The Runner (Rust + Tokio):** Deterministic and high-performance execution engine. Consumes UTDL plans, executes HTTP requests with massive parallelism via DAG (Directed Acyclic Graph).",
        ],
      },
      {
        title: "AI-Powered Test Generation",
        content: [
          "The system ingests **OpenAPI/Swagger** specifications and automatically detects authentication schemes (API Key, Bearer, OAuth2).",
          "Automatically generates negative test cases (400, 401, 404, 500) and creates complete authentication flows. All through optimized prompts for GPT-4.",
          "Rigorous validation includes circular dependency detection, JSONPath validation and assertion type verification.",
        ],
      },
      {
        title: "DAG-Based Parallel Execution",
        content: [
          "The {runner} implements a **Directed Acyclic Graph (DAG)** based execution engine. Steps with dependencies execute in order, while independent steps execute in parallel.",
          "Supports **20+ simultaneous branches** with configurable retry policies. JSONPath data extraction enables variable interpolation between steps.",
          "Native integration with **OpenTelemetry** for distributed tracing and complete observability.",
        ],
      },
      {
        title: "Professional CLI (10 Commands)",
        content: [
          "The CLI built with {click} + {rich} offers 10 modular commands following the **Registry Pattern**:",
          "**init** - Initialize workspace | **generate** - Generate plans via LLM | **validate** - Validate UTDL plans | **run** - Execute tests",
          "**plan-list** - List plans | **config** - Manage configuration | **storage** - Storage backend | **cache** - Cache management | **trace** - Tracing and telemetry",
        ],
      },
      {
        title: "Stack & Design Patterns",
        content: [
          "The project uses enterprise design patterns: **Strategy Pattern** for LLM Providers, **Factory Pattern** for Storage Backends, **Registry Pattern** for CLI commands, **Adapter Pattern** for UTDL normalization.",
          "**518 tests** cover Unit, Integration, E2E, Extreme and Security Audit scenarios. 13 specific security tests ensure credentials never leak to the LLM.",
        ],
      },
    ],
  },
};

// --- Components ---

const TechTooltip = ({ term }) => {
  return (
    <span className="font-bold text-[#5B9FE3] border-b border-[#5B9FE3]/30 cursor-help">
      {term}
    </span>
  );
};

const RichText = ({ content }) => {
  const parts = content.split(/(\{.*?\})/g);

  return (
    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
      {parts.map((part, index) => {
        if (part.startsWith("{") && part.endsWith("}")) {
          const key = part.slice(1, -1);
          const labels = {
            runner: "Rust Runner",
            click: "Click",
            rich: "Rich",
            python: "Python",
            rust: "Rust",
            pydantic: "Pydantic",
            fastapi: "FastAPI",
          };
          return <TechTooltip key={index} term={labels[key] || key} />;
        }

        const subParts = part.split(/(\*\*.*?\*\*)/g);
        return (
          <span key={index}>
            {subParts.map((subPart, subIndex) => {
              if (subPart.startsWith("**") && subPart.endsWith("**")) {
                return (
                  <strong key={subIndex} className="text-white font-bold">
                    {subPart.slice(2, -2)}
                  </strong>
                );
              }
              return subPart;
            })}
          </span>
        );
      })}
    </p>
  );
};

const FileTreeNode = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(
    item.isOpen !== undefined ? item.isOpen : depth < 1
  );
  const isFolder = item.type === "folder";

  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed select-none">
      <div
        className={`flex items-center gap-2 py-1 hover:bg-white/5 rounded px-2 cursor-pointer transition-colors ${depth > 0 ? "ml-4" : ""}`}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        <span className="text-gray-500 min-w-[16px]">
          {isFolder ? (
            isOpen ? (
              <FaFolderOpen className="text-[#5B9FE3]" />
            ) : (
              <FaFolder />
            )
          ) : (
            <FaFileCode />
          )}
        </span>
        <span className={`${isFolder ? "text-gray-200 font-bold" : "text-gray-400"}`}>
          {item.name}
        </span>
        {item.comment && (
          <span className="text-gray-600 italic ml-2 text-[10px] md:text-xs hidden sm:inline">
            # {item.comment}
          </span>
        )}
      </div>
      <AnimatePresence>
        {isFolder && isOpen && item.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-l border-white/10 ml-3 pl-1 overflow-hidden"
          >
            {item.children.map((child, i) => (
              <FileTreeNode key={i} item={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FileTree = () => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0e0e10] shadow-inner">
    <div className="bg-[#1a1a1c] px-4 py-3 border-b border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaFolderOpen className="text-gray-500 text-sm" />
        <span className="text-xs font-mono text-gray-400">project-structure</span>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>
    </div>
    <div className="p-4 overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar">
      {PROJECT_STRUCTURE_DATA.map((item, i) => (
        <FileTreeNode key={i} item={item} />
      ))}
    </div>
  </div>
);

// Video Player with Full Controls
const VideoPlayer = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current.volume = volume;
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = "aqa-presentation.mp4";
    link.click();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#151517]">
      {/* Title Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/80 to-transparent flex items-center px-4 z-20">
        <span className="text-sm font-medium text-white/80">{title}</span>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto cursor-pointer"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Play Overlay (when paused) */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
          onClick={togglePlay}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all">
            <FaPlay className="text-white text-2xl ml-1" />
          </div>
        </div>
      )}

      {/* Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 z-20">
        {/* Progress Bar */}
        <div
          className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3 group"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-[#5B9FE3] rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
            >
              {isPlaying ? (
                <FaPause className="text-white" />
              ) : (
                <FaPlay className="text-white ml-0.5" />
              )}
            </button>

            <div className="flex items-center gap-2 group">
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                {isMuted ? (
                  <FaVolumeMute className="text-white text-sm" />
                ) : (
                  <FaVolumeUp className="text-white text-sm" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              />
            </div>

            <span className="text-xs text-white/70 font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              title="Download"
            >
              <FaDownload className="text-white text-sm" />
            </button>

            <button
              onClick={handleFullscreen}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              title="Fullscreen"
            >
              <FaExpand className="text-white text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Metrics Card
const MetricsCard = ({ lang }) => {
  const metrics = [
    { label: lang === "pt" ? "Testes Python" : "Python Tests", value: "423" },
    { label: lang === "pt" ? "Testes Rust" : "Rust Tests", value: "95" },
    { label: "Total", value: "518" },
    { label: lang === "pt" ? "Comandos CLI" : "CLI Commands", value: "10" },
    { label: lang === "pt" ? "Linhas de Doc" : "Doc Lines", value: "5000+" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="p-4 rounded-xl bg-white/5 border border-white/5 text-center"
        >
          <div className="text-2xl font-bold text-[#5B9FE3]">{metric.value}</div>
          <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

// Architecture Diagram
const ArchitectureDiagram = () => (
  <div className="p-6 rounded-xl bg-[#0e0e10] border border-white/10 font-mono text-xs">
    <div className="text-center text-gray-500 mb-4">
      Autonomous Quality Agent Architecture
    </div>
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-8">
        <div className="p-4 rounded-lg bg-gradient-to-br from-[#306998]/20 to-[#FFD43B]/10 border border-[#306998]/30 text-center">
          <div className="text-[#FFD43B] font-bold mb-1">🧠 Brain</div>
          <div className="text-gray-400">Python 3.11+</div>
          <div className="text-[10px] text-gray-500 mt-2">Cognition & Planning</div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="text-gray-500">UTDL (JSON)</div>
          <div className="text-[#5B9FE3]">──────────▶</div>
          <div className="text-[#5B9FE3]">◀──────────</div>
          <div className="text-gray-500">Results</div>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-[#CE422B]/20 to-[#CE422B]/5 border border-[#CE422B]/30 text-center">
          <div className="text-[#CE422B] font-bold mb-1">🦀 Runner</div>
          <div className="text-gray-400">Rust + Tokio</div>
          <div className="text-[10px] text-gray-500 mt-2">Execution Engine</div>
        </div>
      </div>
    </div>
  </div>
);

function AQAPage() {
  const router = useRouter();
  const [lang, setLang] = useState("en");
  const content = PROJECT_DATA[lang];

  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  return (
    <main className="min-h-screen bg-[#0e0e10] text-gray-200 selection:bg-[#5B9FE3]/30">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <FaArrowLeft />
            {lang === "pt" ? "Voltar" : "Back"}
          </button>

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-xs font-medium text-gray-300"
          >
            <FaGlobeAmericas className="text-[#5B9FE3]" />
            <span className={lang === "pt" ? "text-white" : "text-gray-500"}>PT</span>
            <span className="text-gray-600">|</span>
            <span className={lang === "en" ? "text-white" : "text-gray-500"}>EN</span>
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light">
              {content.subtitle}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { icon: FaPython, label: "Python 3.11+", color: "text-[#FFD43B]" },
                { icon: SiRust, label: "Rust + Tokio", color: "text-[#CE422B]" },
                { icon: SiFastapi, label: "FastAPI", color: "text-[#009688]" },
                { icon: SiPydantic, label: "Pydantic", color: "text-[#E92063]" },
                { icon: SiOpenai, label: "OpenAI", color: "text-white" },
              ].map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                >
                  <tech.icon className={`text-lg ${tech.color}`} />
                  <span className="text-sm font-medium text-gray-300">{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video Player with Full Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <VideoPlayer
              src={PROJECT_DATA.media.resumeVideo}
              title={lang === "pt" ? "Apresentação do Projeto" : "Project Presentation"}
            />
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <ArchitectureDiagram />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-20">
            {/* Project Summary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#5B9FE3]"></span>
                {lang === "pt" ? "Sobre o Projeto" : "About the Project"}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">{content.summary}</p>
            </motion.section>

            {content.sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#5B9FE3]"></span>
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((paragraph, pIdx) => (
                    <RichText key={pIdx} content={paragraph} />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Right Column: Structure & Details */}
          <div className="lg:col-span-5 space-y-10">
            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {lang === "pt" ? "Métricas do Projeto" : "Project Metrics"}
              </h3>
              <MetricsCard lang={lang} />
            </motion.div>

            {/* Project Structure Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {lang === "pt" ? "Estrutura do Projeto" : "Project Structure"}
              </h3>
              <FileTree />
            </motion.div>

            {/* Info Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 sticky top-24">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                {lang === "pt" ? "Ficha Técnica" : "Technical Sheet"}
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    Role
                  </div>
                  <div className="font-medium text-white text-lg">
                    Fullstack Engineer & Architect
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    Architecture
                  </div>
                  <div className="font-medium text-white text-lg">
                    Brain (Python) + Runner (Rust)
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    Key Techs
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Python",
                      "Rust",
                      "FastAPI",
                      "Pydantic",
                      "Tokio",
                      "Click",
                      "OpenAI",
                      "OTEL",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-md bg-white/10 text-gray-200 border border-white/5 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <a
                    href={PROJECT_DATA.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#5B9FE3] hover:bg-[#4A8ED2] text-white transition-all shadow-lg hover:shadow-[#5B9FE3]/20"
                  >
                    <FaGithub className="text-xl" />
                    <span className="font-bold">
                      {lang === "pt" ? "Repositório Público" : "Public Repository"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AQAPage;
