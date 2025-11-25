"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaArrowLeft, FaGlobeAmericas, FaFolderOpen, FaFolder, FaFileCode, FaLock, FaUnlock
} from "react-icons/fa";
import { SiJulia, SiReact, SiTailwindcss, SiSolana, SiDocker, SiThreedotjs } from "react-icons/si";

// --- Configuration & Data ---

const PROJECT_STRUCTURE_DATA = [
  {
    "name": "juliaos",
    "type": "folder",
    "isOpen": true,
    "children": [
      {
        "name": "core",
        "type": "folder",
        "isOpen": true,
        "children": [
          {
            "name": "src",
            "type": "folder",
            "isOpen": true,
            "children": [
              {
                "name": "agents",
                "type": "folder",
                "children": [
                  { "name": "Agents.jl", "type": "file", "comment": "Registry" },
                  { "name": "DetectiveAgents.jl", "type": "file", "comment": "Abstractions" },
                  { "name": "PoirotAgent.jl", "type": "file", "comment": "Tx Analysis" },
                  { "name": "MarpleAgent.jl", "type": "file", "comment": "Pattern Detection" },
                  { "name": "SpadeAgent.jl", "type": "file", "comment": "Risk Assessment" },
                  { "name": "PlanAndExecute.jl", "type": "file", "comment": "Planner" }
                ]
              },
              {
                "name": "analysis",
                "type": "folder",
                "children": [
                  { "name": "RiskEngine.jl", "type": "file", "comment": "Scoring Engine" },
                  { "name": "TxGraphBuilder.jl", "type": "file" },
                  { "name": "FlowAttribution.jl", "type": "file" }
                ]
              },
              {
                "name": "api",
                "type": "folder",
                "children": [
                  { "name": "MainServer.jl", "type": "file", "comment": "Oxygen.jl" },
                  { "name": "InvestigationHandlers.jl", "type": "file" }
                ]
              },
              {
                "name": "strategies",
                "type": "folder",
                "children": [
                  { "name": "Strategies.jl", "type": "file" },
                  { "name": "ghost_wallet_hunter", "type": "folder", "children": [] }
                ]
              },
              { "name": "JuliaOS.jl", "type": "file", "comment": "Package Entry" },
              { "name": "main.jl", "type": "file", "comment": "Startup" }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "frontend",
    "type": "folder",
    "isOpen": true,
    "children": [
      {
        "name": "src",
        "type": "folder",
        "isOpen": true,
        "children": [
          {
            "name": "components",
            "type": "folder",
            "children": [
              { "name": "NetworkGraph.tsx", "type": "file", "comment": "Three.js Viz" },
              { "name": "WalletInput.tsx", "type": "file" },
              { "name": "InvestigationResults.tsx", "type": "file" }
            ]
          },
          {
            "name": "hooks",
            "type": "folder",
            "children": [
              { "name": "useInvestigation.ts", "type": "file" },
              { "name": "useSolanaData.ts", "type": "file" }
            ]
          },
          {
            "name": "stores",
            "type": "folder",
            "children": [
              { "name": "investigationStore.ts", "type": "file", "comment": "Zustand" }
            ]
          }
        ]
      }
    ]
  }
];

const PROJECT_DATA = {
  id: "ghost-wallet-hunter",
  links: {
    repo: "https://github.com/lipeamarok/ghost-wallet-hunter",
    demo: null
  },
  media: {
    mainVideo: "/projects/ghost-wallet-hunter/demo-GHW.mp4"
  },
  pt: {
    title: "Ghost Wallet Hunter",
    subtitle: "Análise Forense em Solana com Multi-Agentes",
    description: "Sistema de detecção de fraudes e lavagem de dinheiro na blockchain Solana utilizando 7 agentes detectives em Julia.",
    summary: "Vencedor do desafio AI DApp Development, o Ghost Wallet Hunter é um sistema de análise forense que desenvolvi utilizando computação de alta performance em Julia para rastrear atividades suspeitas na blockchain Solana. O sistema emprega 7 agentes autônomos especializados para identificar padrões de draining, exploits de liquidez e redes coordenadas de lavagem de dinheiro em tempo real.",
    sections: [
      {
        title: "JuliaOS: A Origem",
        content: [
          "Este projeto nasceu como uma resposta ao desafio de desenvolvimento do **JuliaOS**, um novo framework focado em inteligência de enxame (swarm intelligence) e computação descentralizada de alta performance.",
          "O JuliaOS não é apenas uma stack, é um ecossistema evolutivo que conecta agentes, protocolos e pessoas. Sua arquitetura modular e radicalmente aberta permitiu que eu construísse o **Ghost Wallet Hunter** com uma eficiência de execução 100x superior ao Python, essencial para a análise forense em tempo real na Solana."
        ]
      },
      {
        title: "Os 7 Agentes Detectives",
        content: [
          "O coração do sistema é uma arquitetura multi-agente onde cada 'Detetive' possui uma responsabilidade única, implementada como uma thread isolada em Julia:",
          "**Poirot (Análise Transacional):** Especialista em parsing de transações brutas (RPC), normalizando dados de instruções complexas da Solana.",
          "**Marple (Detecção de Padrões):** Motor de reconhecimento de padrões que varre o histórico em busca de assinaturas de exploits conhecidos (Rug Pulls, Honeypots).",
          "**Spade (Avaliação de Risco):** Calcula o 'Risk Score' da carteira baseando-se em modelos estatísticos e heurísticas de fraude.",
          "**Marlowe (Investigação Profunda):** Realiza 'Deep Tracing', seguindo o fluxo do dinheiro através de mixers e bridges.",
          "**Dupin (Dedução Analítica):** O agente analítico que cruza dados on-chain com blacklists externas e inteligência de ameaças.",
          "**Shadow (Análise de Rede):** Constrói o grafo de relacionamentos (Graph Theory), identificando clusters de carteiras coordenadas (Sybil attacks).",
          "**Raven (Síntese de Relatório):** O sintetizador que agrega os outputs assíncronos de todos os agentes em um relatório JSON unificado para o frontend."
        ]
      },
      {
        title: "High-Performance Computing com Julia",
        content: [
          "Para lidar com o volume massivo de dados da Solana, construí o backend em {julia}. A linguagem oferece performance comparável a C/C++ com a facilidade do Python, essencial para processar grafos complexos de transações em milissegundos.",
          "Utilizei {oxygen} como servidor de API leve e rápido, integrado diretamente com pools de RPCs da Solana para ingestão de dados sem latência."
        ]
      },
      {
        title: "Detecção de Padrões & Forense",
        content: [
          "Implementei algoritmos avançados para detectar comportamentos anômalos, como **Draining Patterns** (esvaziamento rápido de carteiras) e **LP Exploitation** (interações suspeitas com pools de liquidez).",
          "A análise de grafos permite identificar clusters de carteiras operando em conjunto, revelando redes de 'smurfing' e lavagem de dinheiro que seriam invisíveis a análises individuais."
        ]
      },
      {
        title: "Visualização & Frontend",
        content: [
          "A interface construída em {react} oferece ferramentas visuais poderosas para os investigadores. Utilizei {threejs} para renderizar grafos de transações em 3D, permitindo uma navegação intuitiva pelo fluxo do dinheiro.",
          "O estado da aplicação é gerenciado via {zustand}, garantindo uma experiência fluida mesmo ao manipular grandes conjuntos de dados de investigação."
        ]
      }
    ]
  },
  en: {
    title: "Ghost Wallet Hunter",
    subtitle: "Solana Forensics with Multi-Agent AI",
    description: "Fraud detection and anti-money laundering system on Solana blockchain using 7 detective agents in Julia.",
    summary: "Winner of the AI DApp Development challenge, Ghost Wallet Hunter is a forensic analysis system I developed using high-performance computing in Julia to track suspicious activities on the Solana blockchain. The system employs 7 specialized autonomous agents to identify draining patterns, liquidity exploits, and coordinated money laundering networks in real-time.",
    sections: [
      {
        title: "JuliaOS: The Origin",
        content: [
          "This project was born as a response to the development challenge of **JuliaOS**, a new framework focused on swarm intelligence and high-performance decentralized computing.",
          "JuliaOS is not just a stack, it's an evolving ecosystem connecting agents, protocols, and people. Its modular and radically open architecture allowed me to build **Ghost Wallet Hunter** with execution efficiency 100x faster than Python, essential for real-time forensic analysis on Solana."
        ]
      },
      {
        title: "The 7 Detective Agents",
        content: [
          "The heart of the system is a multi-agent architecture where each 'Detective' has a unique responsibility, implemented as an isolated thread in Julia:",
          "**Poirot (Transaction Analysis):** Specialist in raw transaction parsing (RPC), normalizing data from complex Solana instructions.",
          "**Marple (Pattern Detection):** Pattern recognition engine that scans history for signatures of known exploits (Rug Pulls, Honeypots).",
          "**Spade (Risk Assessment):** Calculates the wallet's 'Risk Score' based on statistical models and fraud heuristics.",
          "**Marlowe (Deep Investigation):** Performs 'Deep Tracing', following the money flow through mixers and bridges.",
          "**Dupin (Analytical Deduction):** The analytical agent that crosses on-chain data with external blacklists and threat intelligence.",
          "**Shadow (Network Analysis):** Builds the relationship graph (Graph Theory), identifying coordinated wallet clusters (Sybil attacks).",
          "**Raven (Report Synthesis):** The synthesizer that aggregates asynchronous outputs from all agents into a unified JSON report for the frontend."
        ]
      },
      {
        title: "High-Performance Computing with Julia",
        content: [
          "To handle the massive volume of Solana data, I built the backend in {julia}. The language offers performance comparable to C/C++ with the ease of Python, essential for processing complex transaction graphs in milliseconds.",
          "I used {oxygen} as a lightweight and fast API server, integrated directly with Solana RPC pools for zero-latency data ingestion."
        ]
      },
      {
        title: "Pattern Detection & Forensics",
        content: [
          "I implemented advanced algorithms to detect anomalous behaviors, such as **Draining Patterns** (rapid wallet emptying) and **LP Exploitation** (suspicious interactions with liquidity pools).",
          "Graph analysis allows identifying clusters of wallets operating together, revealing 'smurfing' and money laundering networks that would be invisible to individual analyses."
        ]
      },
      {
        title: "Visualization & Frontend",
        content: [
          "The interface built in {react} offers powerful visual tools for investigators. I used {threejs} to render transaction graphs in 3D, allowing intuitive navigation through the money flow.",
          "Application state is managed via {zustand}, ensuring a fluid experience even when manipulating large investigation datasets."
        ]
      }
    ]
  }
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
            julia: "Julia",
            oxygen: "Oxygen.jl",
            react: "React",
            threejs: "Three.js",
            zustand: "Zustand",
            solana: "Solana"
          };
          return <TechTooltip key={index} term={labels[key] || key} />;
        }

        const subParts = part.split(/(\*\*.*?\*\*)/g);
        return (
          <span key={index}>
            {subParts.map((subPart, subIndex) => {
              if (subPart.startsWith("**") && subPart.endsWith("**")) {
                return <strong key={subIndex} className="text-white font-bold">{subPart.slice(2, -2)}</strong>;
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
  const [isOpen, setIsOpen] = useState(item.isOpen !== undefined ? item.isOpen : depth < 1);
  const isFolder = item.type === 'folder';

  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed select-none">
      <div
        className={`flex items-center gap-2 py-1 hover:bg-white/5 rounded px-2 cursor-pointer transition-colors ${depth > 0 ? 'ml-4' : ''}`}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        <span className="text-gray-500 min-w-[16px]">
          {isFolder ? (isOpen ? <FaFolderOpen className="text-[#5B9FE3]" /> : <FaFolder />) : <FaFileCode />}
        </span>
        <span className={`${isFolder ? 'text-gray-200 font-bold' : 'text-gray-400'}`}>
          {item.name}
        </span>
        {item.comment && (
          <span className="text-gray-600 italic ml-2 text-[10px] md:text-xs hidden sm:inline"># {item.comment}</span>
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

function GhostWalletHunterPage() {
  const router = useRouter();
  const [lang, setLang] = useState('pt');
  const content = PROJECT_DATA[lang];

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

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
            {lang === 'pt' ? 'Voltar' : 'Back'}
          </button>

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-xs font-medium text-gray-300"
          >
            <FaGlobeAmericas className="text-[#5B9FE3]" />
            <span className={lang === 'pt' ? 'text-white' : 'text-gray-500'}>PT</span>
            <span className="text-gray-600">|</span>
            <span className={lang === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
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
                { icon: SiJulia, label: "Julia 1.11", color: "text-[#9558B2]" },
                { icon: SiSolana, label: "Solana", color: "text-[#9945FF]" },
                { icon: SiReact, label: "React", color: "text-[#61DAFB]" },
                { icon: SiThreedotjs, label: "Three.js", color: "text-white" },
                { icon: SiDocker, label: "Docker", color: "text-[#2496ED]" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <tech.icon className={`text-lg ${tech.color}`} />
                  <span className="text-sm font-medium text-gray-300">{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Demo Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#151517] max-w-4xl mx-auto"
          >
            <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1c] border-b border-white/5 flex items-center px-4 gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="pt-8">
              <video
                src={PROJECT_DATA.media.mainVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
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
                {lang === 'pt' ? 'Sobre o Projeto' : 'About the Project'}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {content.summary}
              </p>
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

            {/* Project Structure Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {lang === 'pt' ? 'Estrutura do Projeto' : 'Project Structure'}
              </h3>
              <FileTree />
              <p className="text-xs text-gray-500 mt-3 italic">
                {lang === 'pt'
                  ? '* Estrutura real do backend (repositório público)'
                  : '* Actual backend structure (public repository)'}
              </p>
            </motion.div>

            {/* Info Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 sticky top-24">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                {lang === 'pt' ? 'Ficha Técnica' : 'Technical Sheet'}
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Role</div>
                  <div className="font-medium text-white text-lg">Fullstack Engineer</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Architecture</div>
                  <div className="font-medium text-white text-lg">Multi-Agent System</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Key Techs</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Julia', 'Oxygen.jl', 'Solana', 'React', 'Three.js', 'Zustand'].map(tag => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-md bg-white/10 text-gray-200 border border-white/5 font-mono">
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
                    <span className="font-bold">Public Repository</span>
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

export default GhostWalletHunterPage;
