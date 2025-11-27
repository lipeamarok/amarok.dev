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

    // Resumo Profissional
    summary:
      "Engenheiro de Software com +4 anos de experiência prática em desenvolvimento" +
      " Full-Stack, Automação e IA. Histórico único combinando 10 anos de setor financeiro" +
      " com engenharia de software aplicada. Especialista em Python, Rust e Julia, com foco" +
      " em sistemas de alta performance, arquitetura de microsserviços e soluções Web3." +
      " Projetou e implementou ferramentas de automação interna adotadas por equipes financeiras" +
      " para eliminar fluxos manuais. Vencedor de Hackathon Global" +
      " (Superteam Solana), criador de arquiteturas distribuídas escaláveis e especialista em sistemas de IA multi-agente.",

    // Skills
    skills: {
      languages: [
        "Python",
        "Rust",
        "Julia",
        "TypeScript",
        "JavaScript",
        "SQL",
        "COBOL (legacy)",
      ],
      backend: [
        "FastAPI",
        "Node.js",
        "Microservices",
        "Async Programming",
        "REST APIs",
      ],
      frontend: ["Next.js", "React", "TailwindCSS", "Vite"],
      data_engineering: [
        "PostgreSQL", // Adicionado conforme sugestão
        "Pandas/NumPy",
        "SQLAlchemy",
        "Alembic (migrations)",
        "Redis",
        "Web Scraping",
      ],
      ai_agents: [
        "OpenAI API / Grok API",
        "Multi-Agent Orchestration",
        "RAG (retrieval-augmented generation)", // Ajustado capitalização
        "LLM Integration",
        "Vector Embeddings",
        "machine learning",
      ],
      web3_security: [
        "Solana RPC",
        "Smart Contracts",
        "Wallet Forensics",
        "Slither",
        "Blockchain Data Analysis",
      ],
      devops_infrastructure: ["Docker", "CI/CD", "AWS", "Linux/Bash", "Git"],
      quality_testing: [
        "Pytest",
        "Robot Framework",
        "API Testing",
        "Postman/Insomnia",
        "Swagger/OpenAPI",
      ],
    },

    // Projetos
    projects: [
      {
        name: "Ghost Wallet Hunter",
        award: "(4º Lugar - Superteam Solana Hackathon)",
        awardLink: "https://earn.superteam.fun/listing/ai-dapp-development",
        description:
          "Sistema de inteligência forense para rastreio de wallets na Solana. Utilizado por analistas para detectar padrões de lavagem de dinheiro não visíveis em exploradores comuns. Inclui interface React para visualização de trilhas de investigação.",
        tech: "Julia, Solana RPC, React, AI Agents",
      },
      {
        name: "AISYAD",
        description:
          "Plataforma de automação inteligente para Meta Ads com diagnóstico por IA e integração OAuth2.",
        tech: "FastAPI, Python, PostgreSQL, Next.js, OpenAI API",
      },
      {
        name: "BugXHunter",
        description:
          "Sistema autônomo de caça a bugs com loops de aprendizado inteligente para Bug Bounties.",
        tech: "Julia, Rust, Tauri, Docker, AI/ML",
      },
    ],

    // Experiência PT
    experience: [
      {
        title: "Software Engineer & AI Researcher",
        company: "Self-Employed",
        period: "Jan 2021 - Presente",
        description:
          "Desenvolvimento e arquitetura end-to-end de soluções cloud-native e ferramentas de segurança:",
        achievements: [
          " Engenharia de Produto: Arquiteto principal do AISYAD. Desenvolveu toda a arquitetura frontend em Next.js integrada a microsserviços backend em FastAPI, deployados na AWS com pipelines CI/CD;",
          " Web3 Innovation: Arquiteto do Ghost Wallet Hunter, motor forense premiado que orquestra 7 agentes autônomos em Julia/Rust, atingindo detecção de fraudes em tempo real (latência <100ms por evento de detecção);",
          " Performance: Implementou sistemas de Bug Hunting automatizado com contêineres Docker e loops de aprendizado contínuo;",
          " Consultoria: Desenvolvimento de scripts de automação e ETL para clientes do setor financeiro.",
        ],
      },
      {
        title: "Fundador & Analista Cripto",
        company: "Descentralizando",
        period: "Jul 2024 - Presente",
        description:
          "Blog sobre finanças, investimentos, Web3, blockchain e DeFi:",
        achievements: [
          " Artigos técnicos e análises macroeconômicas;",
          " Desenvolvimento de estratégias baseadas em dados on-chain e análise técnica de Smart Contracts e DeFi.",
        ],
      },
      {
        title: "Especialista de Investimentos | Automation & Data Lead",
        company: "Bradesco",
        period: "Ago 2022 - Mar 2025",
        description:
          "Gestão de carteira Alta Renda combinada com liderança técnica em automação:",
        achievements: [
          " Liderança em automações técnicas que ampliaram a capacidade analítica e reduziram carga operacional das equipes;", // Nova linha de impacto
          " Automação de Dados: Desenvolvimento de scripts em Python (Pandas) para processamento em lote de carteiras, reduzindo o tempo de análise manual em 40%;",
          " Dashboards e BI: Criação de dashboards interativos para visualização de alocação de ativos e monitoramento de KPIs;",
          " Acompanhamento macroeconômico e execução de estratégias alinhadas a objetivos de longo prazo.",
        ],
      },
      {
        title: "Analista de Operações e Processos",
        company: "Cooperforte",
        period: "Jul 2016 - Ago 2022",
        description:
          "Início como estagiário com crescimento interno. Foco em integridade operacional e eficiência de processos:",
        achievements: [
          " Validação de Regras de Negócio: Responsável pela integridade operacional e testes lógicos de fluxos de aprovação de crédito;",
          " Migração e Saneamento: Atuação na estruturação de dados para relatórios gerenciais e auditoria utilizando SQL e lógica avançada;",
          " Otimização de rotinas administrativas através da padronização de processos e suporte técnico a produtos financeiros.",
        ],
      },
    ],

    // Educação PT
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
        degree: "Estudo Independente & Pesquisa em Engenharia",
        institution:
          "Foco em sistemas distribuídos, performance em Rust/Julia e Orquestração Multi-Agente",
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

    certifications: [
      "CEA — ANBIMA (Especialista em Investimentos)",
      "CPA-20 — ANBIMA",
    ],

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
    // English Section
    contact: {
      name: "Filipe Amorim Arouck de Souza",
      title: "Software Engineer | Python, Rust & AI Specialist",
      email: "lipearouck@gmail.com",
      linkedin: "linkedin.com/in/filipe-arouck",
      github: "github.com/lipeamarok",
      portfolio: "lipeamarok.dev",
    },

    summary:
      "Software Engineer with +4 years of practical experience in Full-Stack development," +
      " Automation, and AI. Unique background combining 10 years in the financial sector" +
      " with applied software engineering. Specialist in Python, Rust, and Julia, focusing" +
      " on high-performance systems, microservices architecture, and Web3 solutions." +
      " Engineered internal automation tools adopted by financial teams to eliminate" +
      " manual workflows. Global Hackathon Winner" +
      " (Superteam Solana), creator of scalable distributed architectures, and specialist in multi-agent AI systems.",

    skills: {
      languages: [
        "Python",
        "Rust",
        "Julia",
        "TypeScript",
        "JavaScript",
        "SQL",
        "COBOL (legacy)",
      ],
      backend: [
        "FastAPI",
        "Node.js",
        "Microservices",
        "Async Programming",
        "REST APIs",
      ],
      frontend: ["Next.js", "React", "TailwindCSS", "Vite"],
      data_engineering: [
        "PostgreSQL", // Adicionado
        "Pandas/NumPy",
        "SQLAlchemy",
        "Alembic (migrations)",
        "Redis",
        "Web Scraping",
      ],
      ai_agents: [
        "OpenAI API / Grok API",
        "Multi-Agent Orchestration",
        "RAG (retrieval-augmented generation)", // Ajustado
        "LLM Integration",
        "Vector Embeddings",
        "machine learning",
      ],
      web3_security: [
        "Solana RPC",
        "Smart Contracts",
        "Wallet Forensics",
        "Slither",
        "Blockchain Data Analysis",
      ],
      devops_infrastructure: ["Docker", "CI/CD", "AWS", "Linux/Bash", "Git"],
      quality_testing: [
        "Pytest",
        "Robot Framework",
        "API Testing",
        "Postman/Insomnia",
        "Swagger/OpenAPI",
      ],
    },

    projects: [
      {
        name: "Ghost Wallet Hunter",
        award: "(4th Place - Superteam Solana Hackathon)",
        awardLink: "https://earn.superteam.fun/listing/ai-dapp-development",
        description:
          "Forensic intelligence system for Solana wallet tracking. Built the React-based interface for visualizing agent outputs and wallet investigation trails. Utilizes multi-agent architecture to identify suspicious patterns beyond standard explorers.",
        tech: "Julia, Solana RPC, React, AI Agents",
      },
      {
        name: "AISYAD",
        description:
          "Intelligent automation platform for Meta Ads with AI diagnostics and OAuth2 integration.",
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
        description:
          "End-to-end architecture and development of cloud-native solutions and Web3 security tools:",
        achievements: [
          " Product Engineering: Lead Architect of AISYAD. Developed frontend architecture in Next.js integrated with backend microservices, deployed on AWS using CI/CD pipelines;",
          " Web3 Innovation: Architect of Ghost Wallet Hunter, an award-winning forensic engine orchestrating 7 autonomous agents in Julia/Rust, achieving real-time (sub-100ms latency per fraud-detection event) on Solana Mainnet;",
          " Performance Engineering: Implementation of automated Bug Hunting systems using Docker containers and continuous learning loops;",
          " Consulting: Delivered automation scripts and ETL solutions for clients in the financial sector.",
        ],
      },
      {
        title: "Founder & Crypto Analyst",
        company: "Descentralizando",
        period: "Jul 2024 - Present",
        description:
          "Blog about finance, investments, Web3, blockchain, and DeFi:",
        achievements: [
          " Produced educational content on DeFi, on-chain analytics and macroeconomics;",
          " Development of strategies based on on-chain data and technical analysis of Smart Contracts and DeFi.",
        ],
      },
      {
        title: "Investment Specialist | Automation & Data Lead",
        company: "Bradesco",
        period: "Aug 2022 - Mar 2025",
        description:
          "High-net-worth client portfolio management combined with technical leadership in automation:",
        achievements: [
          " Led automation initiatives across investment teams, improving analytical throughput and reducing operational overhead;", // Nova linha de impacto
          " Data Automation: Developed Python (Pandas) scripts for batch processing of investment portfolios, reducing manual analysis time by 40%;",
          " Dashboards and BI: Built BI dashboards for asset allocation, performance tracking, and KPI monitoring;",
          " Strategy Execution: Executed strategies aligned with suitability and long-term objectives.",
        ],
      },
      {
        title: "Operations and Process Analyst",
        company: "Cooperforte",
        period: "Jul 2016 - Aug 2022",
        description:
          "Started as intern and grew internally. Focused on operational integrity and process efficiency:",
        achievements: [
          " Business Rule Validation: Ensured operational integrity and conducted logical testing of credit approval flows;",
          " Migration and Sanitation: Structured data for management reports and audit using SQL and advanced logic;",
          " Process Optimization: Optimized administrative routines through standardization and provided technical support for financial products.",
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
        degree: "Independent Study & Engineering Research",
        institution:
          "Focus on distributed systems, Rust/Julia performance engineering, and Multi-Agent Orchestration",
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

    certifications: [
      "CEA — ANBIMA (Investment Specialist)",
      "CPA-20 — ANBIMA",
    ],

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
