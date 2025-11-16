"use client";

import Image from "next/image";
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
} from "react-icons/fi";

export default function AboutPage() {
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    "hero",
    "story",
    "skills",
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
      {/* Botão Voltar */}
      <div className="max-w-5xl mx-auto mb-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#5B9FE3]/40 transition-all text-gray-400 hover:text-white"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span className="text-sm">Voltar</span>
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
                  className="object-cover grayscale hover:grayscale-[50%] transition-all duration-500"
                  priority
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                Filipe Amarok
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Ex-banking professional turned AI & Web3 developer — building intelligent
                systems that combine autonomy, cryptography, performance and real-world
                impact.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 rounded-full bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 text-[#5B9FE3] text-sm font-medium">
                  AI Engineering
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 text-[#5B9FE3] text-sm font-medium">
                  Web3 & Blockchain
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#5B9FE3]/10 border border-[#5B9FE3]/30 text-[#5B9FE3] text-sm font-medium">
                  High-Performance Computing
                </span>
              </div>

              {/* Menu de navegação rápida */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-medium">
                  Jump to Section
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "story", label: "My Journey", icon: FiBook },
                    { id: "skills", label: "Skills & Stack", icon: FiTerminal },
                    { id: "values", label: "Values", icon: FiHeart },
                    { id: "experience", label: "Experience", icon: FiBriefcase },
                    { id: "education", label: "Education", icon: FiAward },
                    { id: "contact", label: "Contact", icon: FiSend },
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
          <h2 className="text-3xl font-bold text-white">Minha Jornada Tech</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Meu nome é Filipe Amorim Arouck (ou só @LipeAmarok) e, por quase uma década,
            vivi intensamente o mercado financeiro. Sou formado em Administração e
            pós-graduado em Finanças, Investimentos e Banking. Passei por áreas
            administrativas, atendimento e, finalmente, alcancei a posição de
            <span className="text-white font-semibold">
              {" "}
              Especialista de Investimentos{" "}
            </span>
            em um dos maiores bancos da América Latina.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            E apesar de amar investimentos, uma coisa me consumia diariamente: a pressão
            comercial, as metas agressivas e, principalmente, a obrigação de vender
            produtos em que eu não acreditava para pessoas que não precisavam deles.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Decidi sair. Eu precisava respirar.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Foi nesse processo que encontrei algo que mudaria tudo:
            <span className="text-white font-semibold"> o universo cripto. </span>
            Pela primeira vez, vi tecnologia, investimento e liberdade individual
            coexistirem. Mergulhei profundamente em blockchain, Web3 e DeFi. Dali nasceu
            uma paixão real.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Comecei então a criar conteúdo educativo sobre cripto, investimentos e
            finanças o que me levou a desbloquear habilidades de edição de vídeo,
            elaboração de roteiros, criação de designs… e, naturalmente, a aprender sobre
            <span className="text-white font-semibold"> tráfego pago</span>. E foi aí que
            algo ficou muito claro:
          </p>

          <blockquote className="text-gray-200 text-xl font-semibold text-center">
            O pequeno empreendedor não vai conseguir. Meta Ads é complexo demais!
          </blockquote>

          <p className="text-gray-300 leading-relaxed text-lg">
            A pessoa que tem um consultório, um restaurante, um pequeno e-commerce… não
            tem tempo, paciência ou conhecimento para lidar com a complexidade da
            plataforma. E contratar uma agência nem sempre é viável. Foi então que pensei:
          </p>

          <blockquote className="text-gray-200 text-xl italic border-l-4 border-purple-500 pl-4">
            E se uma IA pudesse ser o especialista em marketing digital que o autônomo
            precisa?
          </blockquote>

          <blockquote className="text-gray-200 text-xl italic border-l-4 border-purple-500 pl-4">
            E se ela entendesse o contexto, o negócio, o público, a região… e simplesmente
            fizesse o trabalho pesado de lançar, acompanhar e dar insights sobre
            campanhas?
          </blockquote>

          <p className="text-gray-300 leading-relaxed text-lg">
            Dessas perguntas nasceu o{" "}
            <span className="font-semibold text-white">AISYad</span>, meu primeiro grande
            projeto. Um software SaaS de automação inteligente para Meta Ads. Mas havia um
            problema:
            <span className="font-semibold text-white">eu não sabia programar.</span>
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            E eu não queria uma solução superficial feita por IA no estilo Lovable, nem
            terceirizar o desenvolvimento. Se eu realmente queria criar algo
            transformador, eu precisava aprender de verdade. E mesmo tendo estudado
            programação (Cobol) e testes de software no passado, eu não lembrava mais de
            nada... teria que começar{" "}
            <span className="font-semibold text-white">do zero.</span>
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Aprendi tudo na unha: APIs, banco de dados, autenticação, arquitetura,
            infraestrutura. Meses de estudo, erros e construção me levaram a um ponto de
            virada:
          </p>

          <p className="text-gray-200 text-xl font-semibold text-center">
            Eu percebi que posso construir qualquer coisa que eu imaginar. Passei a me
            sentir imparável.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Animado por esse novo mundo, e querendo testar minhas habilidades, decidi
            participar de bounties e hackathons. Encontrei um desafio que parecia feito
            para mim: <span className="font-semibold">AI DApp Development</span> by
            JuliaOS / Superteam Solana.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            O problema? Descobri o desafio faltando menos de 15 dias para o prazo final.
            Mas participar era inevitável.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            E foi assim que nasceu o
            <span className="text-white font-semibold"> Ghost Wallet Hunter </span>, um
            motor forense que orquestra agentes de IA para investigar wallets Solana,
            detectar padrões suspeitos e identificar fraudes. O projeto me rendeu o{" "}
            <span className="font-semibold text-white">4º lugar</span>.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Nesse processo descobri
            <span className="font-semibold text-white"> Julia</span>. Uma linguagem de
            altíssima performance, usada por NASA e Tesla, que combina a velocidade de C,
            a matemática de MATLAB e a fluidez de Python.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            A motivação de ter sido premiado, mesmo entregando o projeto incompleto, me
            empurrou ainda mais para o mundo de computação de alta performance. Percebi
            que poderia usar Julia para algo maior.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Assim nasceu meu projeto mais ousado:
            <span className="text-white font-semibold"> BugXHunter </span>. Um sistema
            autônomo de caça a bugs baseado em loops inteligentes de execução e
            aprendizado, combinando Julia, Rust/Tauri, React e ambientes Docker simulados.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            É um projeto privado, para uso pessoal, com foco direto em Bug Bountys, que
            são programas de recompensas oferecidos por empresas (especialmente do meio
            cripto) para quem encontra vulnerabilidades reais em seus sistemas.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">Um software capaz de:</p>
          <p className="text-gray-200 text-lg italic border-l-4 border-purple-500 pl-4">
            Preparar → Entender → Planejar → Executar → Apender → Triar → Reportar → Loop
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            um ciclo de aprendizado constante, repetindo sprints de ataque com IA real
            (não apenas prompts), simulando ambientes e evoluindo a cada execução.
          </p>

          <div
            grid
            className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/40"
          >
            <p className="text-gray-300 leading-relaxed text-lg font-bold text-center">
              H O J E
            </p>
            <p className="text-gray-300 leading-relaxed text-lg text-center">
              Sou um profissional que carrega:
            </p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg text-align-left max-w-2xl mx-auto">
              <li>10 anos de experiência prática no mercado financeiro</li>
              <li>Visão de negócio</li>
              <li>Maturidade de mercado</li>
              <li>Gosto por aprendizado contínuo e exploração de novas ferramentas</li>
              <li>Habilidades sólidas em AI Engineering e Web3 Development</li>
              <li>Paixão por construir soluções tecnológicas que empoderam indivíduos</li>
            </ul>
          </div>
        </section>

        {/* ========== SKILLS SECTION ========== */}

        <section id="skills" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Habilidades & Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Languages & Core",
                icon: <FiCode className="text-[#5B9FE3]" />,
                items: ["Julia", "Python", "Rust", "TypeScript", "JavaScript"],
              },
              {
                title: "AI & Multi-Agent Systems",
                icon: <FiCpu className="text-[#5B9FE3]" />,
                items: [
                  "OpenAI API",
                  "Multi-Agent Orchestration",
                  "LLM Integrations",
                  "AI-Driven Diagnostics",
                  "Machine Learning",
                  "Turing.jl",
                  "Flux.jl",
                ],
              },
              {
                title: "Backend Stack",
                icon: <FiServer className="text-[#5B9FE3]" />,
                items: [
                  "FastAPI",
                  "SQLAlchemy",
                  "Alembic",
                  "APScheduler",
                  "Uvicorn",
                  "Jinja2",
                ],
              },
              {
                title: "Frontend & Desktop",
                icon: <FiLayers className="text-[#5B9FE3]" />,
                items: ["Next.js 14", "React", "Vite", "Zustand", "TailwindCSS", "Tauri"],
              },
              {
                title: "DevOps & Infrastructure",
                icon: <FiServer className="text-[#5B9FE3]" />,
                items: [
                  "Docker",
                  "Render",
                  "Vercel",
                  "NeonDB",
                  "PostgreSQL",
                  "SQLite",
                  "Git",
                  "GitHub Actions",
                  "CI/CD",
                  "Swagger/OpenAPI",
                ],
              },
              {
                title: "Web3 & Security",
                icon: <FiHexagon className="text-[#5B9FE3]" />,
                items: [
                  "Solana RPC",
                  "Wallet Forensics",
                  "EVM Security",
                  "Smart Contracts",
                  "Bug Bounty Automation",
                  "SAST / DAST",
                  "Slither",
                  "Semgrep",
                ],
              },
              {
                title: "Integrations & APIs",
                icon: <FiLink2 className="text-[#5B9FE3]" />,
                items: [
                  "Meta Ads API",
                  "Facebook Marketing API",
                  "OAuth2",
                  "OpenAI API",
                  "Twilio API",
                  "JWT",
                ],
              },
              {
                title: "Tools & Libraries",
                icon: <FiTool className="text-[#5B9FE3]" />,
                items: [
                  "Axios",
                  "Pydantic",
                  "Passlib",
                  "bcrypt",
                  "python-jose",
                  "React Toastify",
                  "date-fns",
                  "react-icons",
                  "Postman",
                  "Pytest",
                ],
              },
              {
                title: "Architecture & Engineering",
                icon: <FiGrid className="text-[#5B9FE3]" />,
                items: [
                  "Modular Architecture",
                  "High-Performance Computing",
                  "Multi-Agent Systems",
                  "Microservices",
                  "SSR/CSR Optimization",
                  "Job Scheduling",
                  "JWT + Refresh Tokens",
                  "Docker Orchestration",
                  "Pipeline Automation",
                ],
              },
              {
                title: "Product & Content",
                icon: <FiFeather className="text-[#5B9FE3]" />,
                items: [
                  "UX Writing",
                  "Product Design",
                  "Educational Content",
                  "Video Editing",
                  "Market Analysis",
                  "User Journey Mapping",
                  "Growth Strategy",
                  "Business Vision",
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

        {/* ========== VALUES SECTION ========== */}
        <section id="values" className="relative mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Valores & Filosofia</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
          </div>

          {/* Grid de princípios */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Princípio 1 - Liberdade */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5B9FE3]/60 via-[#5B9FE3]/30 to-transparent rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#5B9FE3] transition-colors duration-300">
                  Acredito em liberdade individual como fundamento, não como privilégio.
                </h3>
              </div>
            </div>

            {/* Princípio 2 - Descentralização */}
            <div className="group relative pl-4">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5B9FE3]/60 via-[#5B9FE3]/30 to-transparent rounded-full"></div>
              <div className="pl-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Vejo descentralização não apenas como um conceito técnico, mas como uma
                  forma de devolver{" "}
                  <span className="text-white font-medium">autonomia</span>,{" "}
                  <span className="text-white font-medium">transparência</span> e{" "}
                  <span className="text-white font-medium">poder de escolha</span> para
                  pessoas reais.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  É por isso que tudo o que construo nasce com um princípio simples:
                </p>
              </div>
            </div>

            {/* Manifesto Central */}
            <div className="relative my-16">
              <div className="bg-gradient-to-br from-[#5B9FE3]/10 via-[#5B9FE3]/5 to-transparent border border-[#5B9FE3]/30 rounded-2xl p-10 backdrop-blur-sm">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#5B9FE3]/60 rounded-tl-lg"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#5B9FE3]/60 rounded-br-lg"></div>

                <blockquote className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Tecnologia deve <span className="text-[#5B9FE3]">libertar</span>,
                    <br />
                    não aprisionar.
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Princípio 3 - Propósito */}
            <div className="group relative pl-4">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5B9FE3]/60 via-[#5B9FE3]/30 to-transparent rounded-full"></div>
              <div className="pl-8 space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Meu objetivo não é criar projetos bonitos no papel, nem soluções
                  descartáveis.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Quero desenvolver{" "}
                  <span className="text-white font-medium">
                    ferramentas que resolvem problemas reais
                  </span>
                  , que reduzem fricção, que ampliam possibilidades e que devolvem ao
                  usuário algo que o sistema tradicional tirou dele:{" "}
                  <span className="text-[#5B9FE3] font-semibold">controle</span>.
                </p>
              </div>
            </div>

            {/* Conclusão */}
            <div className="group relative pl-4">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#5B9FE3]/60 via-[#5B9FE3]/30 to-transparent rounded-full"></div>
              <div className="pl-8 space-y-4">
                <p className="text-lg text-white font-medium leading-relaxed">
                  Aprendi a construir software porque acredito que boa tecnologia muda
                  vidas.
                </p>
                <p className="text-lg text-white font-medium leading-relaxed">
                  E construo com intenção porque acredito que{" "}
                  <span className="text-[#5B9FE3] font-semibold">
                    propósito importa tanto quanto código
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Elemento decorativo de fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5B9FE3]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        </section>

        {/* ========== PROFESSIONAL EXPERIENCE SECTION ========== */}
        <section id="experience" className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Experiência Profissional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Full-Stack Developer */}
            <div className="relative pl-8 border-l-2 border-[#5B9FE3]/30 hover:border-[#5B9FE3]/60 transition-all duration-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5B9FE3] ring-4 ring-[#5B9FE3]/20"></div>

              <div className="pb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-white">
                    Full-Stack Developer
                  </h3>
                  <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                    mar 2025 — presente
                  </span>
                </div>
                <p className="text-[#5B9FE3] font-medium mb-4">Self-Employed</p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Desenvolvimento de soluções completas, com foco em:
                </p>

                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B9FE3] mt-1.5">•</span>
                    <span>Aplicações SaaS com IA aplicada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B9FE3] mt-1.5">•</span>
                    <span>
                      Integrações complexas via API (Meta Ads, OpenAI, Solana RPC)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B9FE3] mt-1.5">•</span>
                    <span>Sistemas de alta performance usando Julia, Rust e Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B9FE3] mt-1.5">•</span>
                    <span>Automações, multi-agents e pipelines inteligentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5B9FE3] mt-1.5">•</span>
                    <span>Arquitetura modular, clean code e boas práticas</span>
                  </li>
                </ul>

                <p className="text-gray-400 text-sm mb-2">
                  Atuação em projetos próprios:
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
                  <h3 className="text-2xl font-semibold text-white">Founder & Author</h3>
                  <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                    jul 2024 — presente
                  </span>
                </div>
                <p className="text-[#5B9FE3] font-medium mb-4">Descentralizando</p>

                <p className="text-gray-300 leading-relaxed">
                  Blog sobre finanças, investimentos, Web3, blockchain e DeFi. Produção de
                  conteúdo educativo, artigos técnicos e análises macroeconômicas com foco
                  em liberdade individual, descentralização e educação financeira.
                </p>
              </div>
            </div>

            {/* Investment Specialist */}
            <div className="relative pl-8 border-l-2 border-white/20 hover:border-white/30 transition-all duration-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/60 ring-4 ring-white/10"></div>

              <div className="pb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-white">
                    Investment Adviser
                  </h3>
                  <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                    ago 2022 — mar 2025
                  </span>
                </div>
                <p className="text-gray-400 font-medium mb-4">Bradesco</p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Responsável por carteira de clientes alta renda, atuando em:
                </p>

                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>Análise de perfil e estruturação de portfólios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>
                      Avaliação de fundos, previdência, mercado internacional e renda
                      variável
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>
                      Condução de estratégias alinhadas a suitability e objetivos de longo
                      prazo
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>Atendimento consultivo de alto padrão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>
                      Acompanhamento macroeconômico e recomendações personalizadas
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Administrative & Customer Operations */}
            <div className="relative pl-8 border-l-2 border-white/20 hover:border-white/30 transition-all duration-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white/60 ring-4 ring-white/10"></div>

              <div className="pb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-white">
                    Administrative & Customer Operations
                  </h3>
                  <span className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                    jul 2016 — ago 2022
                  </span>
                </div>
                <p className="text-gray-400 font-medium mb-4">Cooperforte</p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Início como estagiário e crescimento interno passando por:
                </p>

                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>Setor administrativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>Documentação e compliance operacional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>Patrimônio e controle interno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>Atendimento a cooperados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1.5">•</span>
                    <span>Suporte a produtos financeiros</span>
                  </li>
                </ul>

                <p className="text-gray-400 italic text-sm">
                  Experiência que consolidou visão sistêmica, disciplina operacional e
                  maturidade na relação com clientes e processos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ACADEMIC BACKGROUND SECTION ========== */}
        <section id="education" className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Background Acadêmico</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#5B9FE3] to-transparent mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* MBA */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#5B9FE3]/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    MBA — Finanças, Investimentos e Banking
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
                    Bacharelado em Administração
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
              <h3 className="text-lg font-semibold text-white mb-4">Certificações</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5B9FE3]"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-white">CEA</span> — ANBIMA
                    (Especialista em Investimentos)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5B9FE3]"></div>
                  <p className="text-gray-300">
                    <span className="font-medium text-white">CPA-20</span> — ANBIMA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section id="contact" className="text-center pt-10">
          <p className="text-gray-400">Quer construir algo significativo juntos?</p>

          <a
            href="https://github.com/lipeamarok"
            target="_blank"
            className="mt-4 inline-block px-6 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 transition text-gray-200"
          >
            Visite meu GitHub →
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
    </main>
  );
}
