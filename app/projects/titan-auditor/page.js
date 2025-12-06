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
  FaLock,
} from "react-icons/fa";
import { SiStreamlit, SiOpenai, SiPandas, SiPydantic } from "react-icons/si";

// --- Configuration & Data ---

const PROJECT_STRUCTURE_DATA = [
  {
    name: "titan-auditor",
    type: "folder",
    isOpen: true,
    children: [
      {
        name: "core",
        type: "folder",
        isOpen: true,
        children: [
          { name: "auditor.py", type: "file", comment: "LLM Audit Engine" },
          { name: "calculator.py", type: "file", comment: "Math Engine" },
          { name: "extractor.py", type: "file", comment: "Financial Parser" },
          { name: "market_data.py", type: "file", comment: "yFinance Wrapper" },
          { name: "market_map.py", type: "file" },
          { name: "router.py", type: "file", comment: "CVM/SEC Router" },
        ],
      },
      {
        name: "ui",
        type: "folder",
        isOpen: false,
        children: [
          { name: "cards.py", type: "file", comment: "Metric Cards" },
          { name: "badges.py", type: "file" },
          { name: "headers.py", type: "file" },
          { name: "verdict_hero.py", type: "file" },
          { name: "argument_card.py", type: "file", comment: "Bull/Bear" },
        ],
      },
      {
        name: "examples",
        type: "folder",
        children: [
          { name: "nvidia_q3_25.pdf", type: "file" },
          { name: "nubank_q3_25.pdf", type: "file" },
          { name: "americanas_q3_25.pdf", type: "file" },
        ],
      },
      { name: "app.py", type: "file", comment: "Streamlit Entry" },
      { name: "prompts.py", type: "file", comment: "LLM Templates" },
      { name: "requirements.txt", type: "file" },
      { name: "README.md", type: "file" },
    ],
  },
];

const PROJECT_DATA = {
  id: "titan-auditor",
  links: {
    repo: null,
    demo: null,
  },
  media: {
    mainVideo: "/projects/titan-auditor/titan-demo.mp4",
  },
  pt: {
    title: "Titan Financial Auditor",
    subtitle: "Pipeline de Análise Forense Financeira com IA",
    description:
      "Pipeline automatizado que extrai demonstrações financeiras (CVM/SEC/PDF), normaliza dados, executa análises determinísticas e produz relatórios de auditoria com LLM.",
    summary:
      "O Titan é um motor de análise financeira auditável e sector-aware. Normaliza filings oficiais (CVM Brasil + SEC EUA) e PDFs, aplica verificações matemáticas determinísticas (Altman Z, DuPont, Piotroski, regras bancárias), sinaliza anomalias forenses e gera narrativas de auditoria humanas (bull/bear) via LLMs. Dashboard interativo em Streamlit.",
    sections: [
      {
        title: "Arquitetura do Pipeline",
        content: [
          "O sistema segue uma arquitetura de pipeline orquestrada pelo {streamlit}. O fluxo completo: **Router** (detecta tipo de ativo e fonte) → **Extractor** (normaliza dados) → **Calculator** (métricas determinísticas) → **Auditor** (narrativa LLM).",
          "**Orchestration Layer (app.py):** Interface Streamlit para interações, market lookups rápidos, upload de PDFs e renderização do dashboard.",
          "**Routing & Ingest (router.py):** Detecta tipo de ativo e fonte (CVM/SEC/On-chain), baixa/parsea XBRL ou seleciona caminho PDF, aplica detecção de setor (ex: tickers bancários).",
        ],
      },
      {
        title: "Extração & Normalização",
        content: [
          "O **TitanExtractor** converte XBRL/PDF/texto bruto em campos numéricos normalizados via modelo {pydantic} FinancialStatement.",
          "Campos incluem: assets, liabilities, equity, pdd_balance, loan_portfolio, non_performing_loans, sector, period, currency, company_name.",
          "Setor bancário recebe tratamento especial: usa conta CVM 2.08 para patrimônio, anula current_assets/current_liabilities para evitar flags de liquidez corporativa.",
        ],
      },
      {
        title: "Motor Matemático Determinístico",
        content: [
          "O **TitanMathEngine** calcula métricas financeiras com precisão determinística. Nenhum cálculo depende de LLM:",
          "**Altman Z-Score:** Adaptado para inputs disponíveis, detecta risco de falência.",
          "**DuPont Decomposition:** net margin × asset turnover × financial leverage → ROE.",
          "**Piotroski F-Score:** Checklist de 9 pontos para qualidade fundamentalista.",
          "**Banking Heuristics:** Proxy Basileia via capital_ratio, cobertura PDD/Carteira (thresholds 4-6% healthy), ROE anualizado de números YTD.",
        ],
      },
      {
        title: "Detecção Forense de Anomalias",
        content: [
          "Forensic flags verificam inconsistências que podem indicar manipulação contábil:",
          "Crescimento inconsistente entre métricas relacionadas, fluxo de caixa negativo persistente, swings súbitos de margem.",
          "Detecção de mapeamentos XBRL malformados que podem esconder problemas nos balanços.",
        ],
      },
      {
        title: "Auditoria LLM & Narrativa",
        content: [
          "O **TitanAuditor** compõe prompts especializados, chama {openai} e parsea JSON com fallback robusto para outputs malformados.",
          "Retorna **FinalAuditReport** com: verdict, headline, executive_summary, bull_case, bear_case, math_explanation e management_trust_score.",
          "LLMs são usados APENAS para narrativa — todos os cálculos numéricos são determinísticos no Math Engine.",
        ],
      },
      {
        title: "Dashboard & UX",
        content: [
          "Dashboard Streamlit com progressive disclosure: summary cards → argumentos bull/bear → dados brutos → debugging de auditoria.",
          "Export: copy-as-markdown + download .md. Links para documentos fonte (CVM/SEC) quando disponíveis.",
          "Cards específicos para bancos: Basileia, PDD/Carteira, ROE anualizado, alavancagem.",
        ],
      },
    ],
  },
  en: {
    title: "Titan Financial Auditor",
    subtitle: "AI-Powered Financial Forensics Pipeline",
    description:
      "Automated pipeline that extracts financial statements (CVM/SEC/PDF), normalizes data, runs deterministic analytics, and produces LLM-backed audit reports.",
    summary:
      "Titan is an auditable, sector-aware financial analysis engine. It normalizes official filings (Brazilian CVM + US SEC) and PDFs, applies deterministic math checks (Altman Z, DuPont, Piotroski, banking rules), flags forensic anomalies, and generates human-readable audit narratives (bull/bear) via LLMs. Interactive Streamlit dashboard.",
    sections: [
      {
        title: "Pipeline Architecture",
        content: [
          "The system follows a pipeline architecture orchestrated by {streamlit}. Full flow: **Router** (detects asset type and source) → **Extractor** (normalizes data) → **Calculator** (deterministic metrics) → **Auditor** (LLM narrative).",
          "**Orchestration Layer (app.py):** Streamlit interface for user interactions, quick market lookups, PDF uploads and dashboard rendering.",
          "**Routing & Ingest (router.py):** Detects asset type and source (CVM/SEC/On-chain), downloads/parses XBRL or selects PDF path, applies sector detection (e.g., banking tickers).",
        ],
      },
      {
        title: "Extraction & Normalization",
        content: [
          "The **TitanExtractor** converts raw XBRL/PDF/text into normalized numeric fields via {pydantic} FinancialStatement model.",
          "Fields include: assets, liabilities, equity, pdd_balance, loan_portfolio, non_performing_loans, sector, period, currency, company_name.",
          "Banking sector receives special treatment: uses CVM account 2.08 for equity, nullifies current_assets/current_liabilities to avoid corporate liquidity flags.",
        ],
      },
      {
        title: "Deterministic Math Engine",
        content: [
          "The **TitanMathEngine** computes financial metrics with deterministic precision. No calculations depend on LLM:",
          "**Altman Z-Score:** Adapted for available inputs, detects bankruptcy risk.",
          "**DuPont Decomposition:** net margin × asset turnover × financial leverage → ROE.",
          "**Piotroski F-Score:** 9-point checklist for fundamental quality.",
          "**Banking Heuristics:** Basel proxy via capital_ratio, PDD/Portfolio coverage (4-6% healthy thresholds), annualized ROE from YTD numbers.",
        ],
      },
      {
        title: "Forensic Anomaly Detection",
        content: [
          "Forensic flags check for inconsistencies that may indicate accounting manipulation:",
          "Inconsistent growth between related metrics, persistent negative cash flow, sudden margin swings.",
          "Detection of malformed XBRL mappings that may hide balance sheet problems.",
        ],
      },
      {
        title: "LLM Audit & Narrative",
        content: [
          "The **TitanAuditor** composes specialized prompts, calls {openai} and parses JSON with robust fallback for malformed outputs.",
          "Returns **FinalAuditReport** with: verdict, headline, executive_summary, bull_case, bear_case, math_explanation and management_trust_score.",
          "LLMs are used ONLY for narrative — all numerical calculations are deterministic in the Math Engine.",
        ],
      },
      {
        title: "Dashboard & UX",
        content: [
          "Streamlit dashboard with progressive disclosure: summary cards → bull/bear arguments → raw data → audit debugging.",
          "Export: copy-as-markdown + download .md. Source document links (CVM/SEC) when available.",
          "Banking-specific cards: Basel, PDD/Portfolio, annualized ROE, leverage.",
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
            streamlit: "Streamlit",
            pydantic: "Pydantic",
            openai: "OpenAI/Grok",
            pandas: "Pandas",
            python: "Python",
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
    link.download = "titan-demo.mp4";
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

// Pipeline Diagram
const PipelineDiagram = () => (
  <div className="p-6 rounded-xl bg-[#0e0e10] border border-white/10 font-mono text-xs">
    <div className="text-center text-gray-500 mb-4">Titan Financial Auditor Pipeline</div>
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="p-3 rounded-lg bg-gradient-to-br from-[#306998]/20 to-[#FFD43B]/10 border border-[#306998]/30 text-center min-w-[100px]">
          <div className="text-[#FFD43B] font-bold mb-1 text-[10px]">📥 Router</div>
          <div className="text-gray-400 text-[10px]">CVM/SEC/PDF</div>
        </div>

        <div className="text-[#5B9FE3]">→</div>

        <div className="p-3 rounded-lg bg-gradient-to-br from-[#306998]/20 to-[#FFD43B]/10 border border-[#306998]/30 text-center min-w-[100px]">
          <div className="text-[#FFD43B] font-bold mb-1 text-[10px]">📊 Extractor</div>
          <div className="text-gray-400 text-[10px]">Normalize</div>
        </div>

        <div className="text-[#5B9FE3]">→</div>

        <div className="p-3 rounded-lg bg-gradient-to-br from-[#306998]/20 to-[#FFD43B]/10 border border-[#306998]/30 text-center min-w-[100px]">
          <div className="text-[#FFD43B] font-bold mb-1 text-[10px]">🔢 Calculator</div>
          <div className="text-gray-400 text-[10px]">Deterministic</div>
        </div>

        <div className="text-[#5B9FE3]">→</div>

        <div className="p-3 rounded-lg bg-gradient-to-br from-[#10A37F]/20 to-[#10A37F]/5 border border-[#10A37F]/30 text-center min-w-[100px]">
          <div className="text-[#10A37F] font-bold mb-1 text-[10px]">🤖 Auditor</div>
          <div className="text-gray-400 text-[10px]">LLM Narrative</div>
        </div>
      </div>

      <div className="text-[#5B9FE3]">↓</div>

      <div className="p-3 rounded-lg bg-gradient-to-br from-[#FF4B4B]/20 to-[#FF4B4B]/5 border border-[#FF4B4B]/30 text-center">
        <div className="text-[#FF4B4B] font-bold mb-1 text-[10px]">
          📈 Streamlit Dashboard
        </div>
        <div className="text-gray-400 text-[10px]">Interactive UI + Export</div>
      </div>
    </div>
  </div>
);

// Metrics Card
const MetricsCard = ({ lang }) => {
  const metrics = [
    { label: lang === "pt" ? "Fontes de Dados" : "Data Sources", value: "3" },
    { label: "Altman Z", value: "✓" },
    { label: "DuPont", value: "✓" },
    { label: "Piotroski", value: "✓" },
    { label: lang === "pt" ? "Regras Bancárias" : "Banking Rules", value: "5+" },
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

function TitanPage() {
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
                { icon: SiStreamlit, label: "Streamlit", color: "text-[#FF4B4B]" },
                { icon: SiPydantic, label: "Pydantic", color: "text-[#E92063]" },
                { icon: SiOpenai, label: "OpenAI/Grok", color: "text-[#10A37F]" },
                { icon: SiPandas, label: "Pandas", color: "text-[#150458]" },
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

          {/* Demo Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <VideoPlayer
              src={PROJECT_DATA.media.mainVideo}
              title="Titan Financial Auditor - Demo"
            />
          </motion.div>
        </div>

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
            {/* Pipeline Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {lang === "pt" ? "Arquitetura" : "Architecture"}
              </h3>
              <PipelineDiagram />
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {lang === "pt" ? "Métricas & Algoritmos" : "Metrics & Algorithms"}
              </h3>
              <MetricsCard lang={lang} />
            </motion.div>

            {/* Project Structure Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
                  <div className="font-medium text-white text-lg">Fullstack Engineer</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    Architecture
                  </div>
                  <div className="font-medium text-white text-lg">
                    Pipeline + LLM Audit
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    Key Techs
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Python",
                      "Streamlit",
                      "Pydantic",
                      "OpenAI",
                      "yfinance",
                      "pypdf",
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
                  <div className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/5 text-gray-400 border border-white/10">
                    <FaLock className="text-lg" />
                    <span className="font-bold">
                      {lang === "pt" ? "Repositório Privado" : "Private Repository"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TitanPage;
