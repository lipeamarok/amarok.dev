import { desc } from "framer-motion/client";

export const cvData = {
  pt: {
    // Informações de Contato
    contact: {
      name: "Filipe Amorim Arouck de Souza",
      title: "Software Engineer | Python, Rust & AI Specialist",
      email: "lipearouck@gmail.com",
      linkedin: "linkedin.com/in/filipe-arouck",
      github: "github.com/lipeamarok",
      portfolio: "lipeamarok.dev",
    },

    // Resumo Profissional (substituindo a Story)
    summary:
      "Engenheiro de Software com +5 anos de experiência prática em desenvolvimento," +
      " Full-Stack, Automação e IA. Histórico único combinando 10 anos de setor financeiro," +
      " com engenharia de software aplicada. Especialista em Python, Rust e Julia, com foco" +
      " em sistemas de alta performance, arquitetura de microsserviços e soluções Web3." +
      " Liderou iniciativas de Shadow IT em grandes instituições bancárias," +
      " automatizando processos críticos com scripts de dados. Vencedor de Hackathon Global " +
      "(Superteam Solana) e criador de arquiteturas SaaS escaláveis.",

    // Skills (agrupadas para CV)
    skills: {
      languages: [
        "Python",
        "Rust",
        "Julia",
        "TypeScript",
        "JavaScript",
        "SQL",
        "COBOL (Legacy)"
      ],
      backend: [
        "FastAPI",
        "Node.js",
        "Microservices",
        "Async Programming",
        "REST APIs"
      ],
      frontend: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Vite"
      ],
      data_engineering: [
        "Pandas/NumPy",
        "SQLAlchemy",
        "Alembic (migrations)",
        "Redis",
        "Web Scraping"
      ],
      ai_agents: [
        "OpenAI/Grok API",
        "Multi-Agent Orchestration",
        "RAG (Retrieval-Augmented Generation)",
        "LLM Integration",
        "Vector Embeddings",
        "Machine Learning"
      ],
      web3_security: [
        "Solana RPC",
        "Smart Contracts",
        "Wallet Forensics",
        "Slither",
        "Blockchain Data Analysis"
      ],
      devops_infrastructure: [
        "Docker",
        "CI/CD",
        "AWS",
        "Linux/Bash",
        "Git"
      ],
      quality_testing: [
        "Pytest",
        "Robot Framework",
        "API Testing",
        "Postman/Insomnia",
        "Swagger/OpenAPI"
      ]
    },

    // Projetos (resumidos)
    projects: [
      {
        name: "Ghost Wallet Hunter",
        award: "(4º Lugar - Superteam Solana Hackathon)",
        awardLink: "https://earn.superteam.fun/listing/ai-dapp-development",
        description:
          "Sistema de inteligência forense para rastreio de wallets na Solana. Utiliza arquitetura multi-agente para detectar padrões de lavagem de dinheiro e fraudes que exploradores de blocos comuns não identificam.",
        tech: "Julia, Solana RPC, React, AI Agents",
      },
      {
        name: "AISYAD",
        description:
          "SaaS de automação inteligente para Meta Ads com diagnóstico por IA e integração OAuth2.",
        tech: "FastAPI, Python, PostgreSQL, Next.js, OpenAI API",
      },
      {
        name: "BugXHunter",
        description:
          "Sistema autônomo de caça a bugs com loops de aprendizado inteligente para Bug Bounties.",
        tech: "Julia, Rust, Tauri, Docker, AI/ML",
      },
    ],

    // Experiência (do about.js,  mas formatada para CV)
    experience: [
      {
        title: "Software Engineer & AI Researcher",
        company: "Self-Employed",
        period: "Jan 2021 - presente",
        description: "Desenvolvimento e arquitetura end-to-end de soluções SaaS e ferramentas de segurança:",
        achievements: [
          " Engenharia de Produto: Arquiteto principal do AISYAD, plataforma SaaS de automação de marketing com microsserviços " +
          "em FastAPI e Next.js, integrando OAuth2 e filas assíncronas;",
          " Web3 Innovation: Arquiteto do Ghost Wallet Hunter, motor forense premiado que orquestra 7 agentes autônomos em Julia/Rust, atingindo detecção de fraudes em real-time na Mainnet da Solana;",
          " Performance: Implementou sistemas de Bug Hunting automatizado com contêineres Docker " +
          "e loops de aprendizado contínuo;",
          " Consultoria: Desenvolvimento de scripts de automação e ETL para clientes do setor financeiro.",
        ],
      },
      {
        title: "Fundador & Analista Cripto",
        company: "Descentralizando",
        period: "Jul 2024 - Presente",
        description: "Blog sobre finanças, investimentos, Web3, blockchain e DeFi:",
        achievements: [
          " Artigos técnicos e análises macroeconômicas;",
          " Desenvolvimento de estratégias baseadas em dados on-chain e análise técnica de Smart Contracts e DeFi."
        ],
      },
      {
        title: "Especialista de Investimentos & Data Automation",
        company: "Bradesco",
        period: "Ago 2022 - Mar 2025",
        description: "Gestão de carteira Alta Renda com viés quantitativo e analítico",
        achievements: [
          " Automação de Dados: Desenvolvimento de scripts em Python (Pandas) para processamento em lote de carteiras de investimento, reduzindo o tempo de análise manual;",
          " Acompanhamento macroeconômico: Avaliação de fundos, previdência, mercado internacional e renda variável;",
          " Dashboards e BI: Criação de ferramentas internas para visualização de alocação de ativos e monitoramento de KPIs;",
          " Condução de estratégias alinhadas a suitability e objetivos de longo prazo.",
        ],
      },
      {
        title: "Analista de Operações e Processos",
        company: "Cooperforte",
        period: "Jul 2016 - Ago 2022",
        description: "Início como estagiário com crescimento interno. Experiência que consolidou visão sistêmica, disciplina operacional e maturidade na relação com clientes e processos:",
        achievements: [
          " Validação de Regras de Negócio: Responsável pela integridade operacional e testes lógicos de fluxos de aprovação de crédito;",
          " Migração e Saneamento: Atuação na estruturação de dados para relatórios gerenciais e auditoria utilizando SQL e lógica avançada;",
          " Otimização de rotinas administrativas através da padronização de processos e suporte técnico a produtos financeiros.",

        ],
      },
    ],

    // Educação
    education: [
      {
        degree: "MBA — Finanças, Investimentos e Banking",
        institution: "PUCRS",
        period: "2020 - 2022",
      },
      {
        degree: "Bacharelado em Administração",
        institution: "Grupo Projeção",
        period: "2015 - 2018",
      },
    ],

    technicalEducation: [
      {
        degree: "Engenharia de Software",
        institution: "Foco intensivo em arquitetura distribuída",
        period: "2021 – Presente",
      },
      {
        degree: "Teste de Software e QA",
        institution: "Metodologias de validação e qualidade",
        period: "2013",
      },
      {
        degree: "Lógica de Programação e COBOL",
        institution: "Fundamentos de Engenharia de Software",
        period: "2012",
      },
    ],

    // Certificações
    certifications: ["CEA — ANBIMA (Especialista em Investimentos)", "CPA-20 — ANBIMA"],

    // Labels de seção
    labels: {
      contact: "Contato",
      summary: "Resumo Profissional",
      skills: "Habilidades Técnicas",
      projects: "Projetos em Destaque",
      experience: "Experiência Profissional",
      education: "Formação Acadêmica",
      technicalEducation: "Desenvolvimento & Cursos",
      certifications: "Certificações",
    },
  },

  en: {
    // Mesma estrutura, traduzida
    contact: {
      name: "Filipe Amorim Arouck de Souza",
      title: "Software Engineer | Python, Rust & AI Specialist",
      email: "lipearouck@gmail.com",
      linkedin: "linkedin.com/in/filipe-arouck",
      github: "github.com/lipeamarok",
      portfolio: "lipeamarok.dev",
    },

    summary:
      "Software Engineer with 5+ years of practical experience in Full-Stack development," +
      " Automation, and AI. Unique background combining 10 years in the financial sector" +
      " with applied software engineering. Specialist in Python, Rust, and Julia, focusing" +
      " on high-performance systems, microservices architecture, and Web3 solutions." +
      " Led Shadow IT initiatives at major banking institutions," +
      " automating critical processes with data scripts. Global Hackathon Winner" +
      " (Superteam Solana) and creator of scalable SaaS architectures.",

    skills: {
      languages: [
        "Python",
        "Rust",
        "Julia",
        "TypeScript",
        "JavaScript",
        "SQL",
        "COBOL (Legacy)"
      ],
      backend: [
        "FastAPI",
        "Node.js",
        "Microservices",
        "Async Programming",
        "REST APIs"
      ],
      frontend: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Vite"
      ],
      data_engineering: [
        "Pandas/NumPy",
        "SQLAlchemy",
        "Alembic (migrations)",
        "Redis",
        "Web Scraping"
      ],
      ai_agents: [
        "OpenAI/Grok API",
        "Multi-Agent Orchestration",
        "RAG (Retrieval-Augmented Generation)",
        "LLM Integration",
        "Vector Embeddings",
        "Machine Learning"
      ],
      web3_security: [
        "Solana RPC",
        "Smart Contracts",
        "Wallet Forensics",
        "Slither",
        "Blockchain Data Analysis"
      ],
      devops_infrastructure: [
        "Docker",
        "CI/CD",
        "AWS",
        "Linux/Bash",
        "Git"
      ],
      quality_testing: [
        "Pytest",
        "Robot Framework",
        "API Testing",
        "Postman/Insomnia",
        "Swagger/OpenAPI"
      ]
    },

    projects: [
      {
        name: "Ghost Wallet Hunter",
        award: "(4th Place - Superteam Solana Hackathon)",
        awardLink: "https://earn.superteam.fun/listing/ai-dapp-development",
        description:
          "Forensic intelligence system for Solana wallet tracking. Utilizes multi-agent architecture to detect money laundering patterns and frauds that common block explorers do not identify.",
        tech: "Julia, Solana RPC, React, AI Agents",
      },
      {
        name: "AISYAD",
        description:
          "Intelligent automation SaaS for Meta Ads with AI diagnostics and OAuth2 integration.",
        tech: "FastAPI, Python, PostgreSQL, Next.js, OpenAI API",
      },
      {
        name: "BugXHunter",
        description:
          "Autonomous bug hunting system with intelligent learning loops for Bug Bounties.",
        tech: "Julia, Rust, Tauri, Docker, AI/ML",
      },
    ],

    experience: [
      {
        title: "Software Engineer & AI Researcher",
        company: "Self-Employed",
        period: "Jan 2021 - Present",
        description: "End-to-end architecture and development of SaaS solutions and Web3 security tools:",
        achievements: [
          " Product Engineering: Lead Architect of AISYAD, a marketing automation SaaS platform with microservices architecture in FastAPI and Next.js, integrating OAuth2 and asynchronous queues;",
          " Web3 Innovation: Architect of Ghost Wallet Hunter, an award-winning forensic engine orchestrating 7 autonomous agents in Julia/Rust, achieving real-time fraud detection on the Solana Mainnet;",
          " Performance Engineering: Implementation of automated Bug Hunting systems using Docker containers and continuous learning loops;",
          " Consulting: Development of automation scripts and ETL for financial sector clients.",
        ],
      },
      {
        title: "Founder & Crypto Analyst",
        company: "Descentralizando",
        period: "Jul 2024 - Present",
        description: "Blog about finance, investments, Web3, blockchain, and DeFi:",
        achievements: [
          " Technical articles and macroeconomic analyses;",
          " Development of strategies based on on-chain data and technical analysis of Smart Contracts and DeFi."
        ],
      },
      {
        title: "Investment Specialist & Data Automation",
        company: "Bradesco",
        period: "Aug 2022 - Mar 2025",
        description: "High-net-worth client portfolio management with quantitative and analytical bias:",
        achievements: [
          " Data Automation: Development of Python (Pandas) scripts for batch processing of investment portfolios, reducing manual analysis time;",
          " Macroeconomic Monitoring: Evaluation of funds, pensions, international markets, and variable income;",
          " Dashboards and BI: Creation of internal tools for asset allocation visualization and KPI monitoring;",
          " Execution of strategies aligned with suitability and long-term objectives.",
        ],
      },
      {
        title: "Operations and Process Analyst",
        company: "Cooperforte",
        period: "Jul 2016 - Aug 2022",
        description: "Started as intern and grew internally. Experience that consolidated systemic vision, operational discipline, and maturity in client and process relationships:",
        achievements: [
          " Business Rule Validation: Responsible for operational integrity and logical testing of credit approval flows;",
          " Migration and Sanitation: Acting in data structuring for management reports and audit using SQL and advanced logic;",
          " Optimization of administrative routines through process standardization and technical support for financial products.",
        ],
      },
    ],
    education: [
      {
        degree: "MBA — Finance, Investments, and Banking",
        institution: "PUCRS",
        period: "2020 - 2022",
      },
      {
        degree: "Bachelor's in Business Administration",
        institution: "Grupo Projeção",
        period: "2015 - 2018",
      },
    ],

    technicalEducation: [
      {
        degree: "Software Engineering",
        institution: "Intensive focus on distributed architecture",
        period: "2021 – Present",
      },
      {
        degree: "Software Testing and QA",
        institution: "Validation and quality methodologies",
        period: "2013",
      },
      {
        degree: "Programming Logic and COBOL",
        institution: "Software Engineering Fundamentals",
        period: "2012",
      },
    ],

    certifications: ["CEA — ANBIMA (Investment Specialist)", "CPA-20 — ANBIMA"],

    labels: {
      contact: "Contact",
      summary: "Professional Summary",
      skills: "Technical Skills",
      projects: "Featured Projects",
      experience: "Professional Experience",
      education: "Education",
      technicalEducation: "Development & Technical Courses",
      certifications: "Certifications",
    },
  },
};
