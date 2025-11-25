juliaos/core/src/
├─ JuliaOS.jl # Package entry
├─ main.jl # Startup script / entrypoint
├─ agents/
│ ├─ Agents.jl # Agent registry/loader
│ ├─ AgentCore.jl # Base agent behaviour
│ ├─ Agent_Management.jl # Lifecycle & orchestration
│ ├─ AgentMetrics.jl
│ ├─ AgentMonitor.jl
│ ├─ DetectiveAgents.jl # Detective agent abstractions
│ ├─ PoirotAgent.jl # Example agent implementation
│ ├─ MarpleAgent.jl
│ ├─ MarloweeAgent.jl
│ ├─ DupinAgent.jl
│ ├─ SpadeAgent.jl
│ ├─ RavenAgent.jl
│ ├─ ShadowAgent.jl
│ ├─ PlanAndExecute.jl # High-level agent planner
│ ├─ Persistence.jl # DB persistence helpers
│ └─ LLMIntegration.jl # Optional LLM helpers
|
├─ strategies/
│ ├─ Strategies.jl # Strategy registry
│ ├─ core/ # Core strategy implementations
│ ├─ ghost_wallet_hunter/ # project-specific strategies
│ └─ telegram/ # integration/automation strategies
|
├─ tools/
│ ├─ Tools.jl # Tools registry
│ ├─ core/ # low-level tool implementations
│ └─ ghost_wallet_hunter/ # project-specific tools and utilities
|
├─ framework/
│ └─ JuliaOSFramework.jl # Framework utilities and lifecycle
|
├─ analysis/
│ ├─ Analysis.jl
│ ├─ RiskEngine.jl # Core scoring / rules engine
│ ├─ FlowAttribution.jl
│ ├─ TxGraphBuilder.jl
│ ├─ TaintPropagation.jl
│ ├─ Explainability.jl
│ └─ (entity clustering, metrics, parsers...)
|
├─ api/
│ ├─ API.jl
│ ├─ MainServer.jl
│ ├─ Routes.jl
│ ├─ InvestigationHandlers.jl
│ ├─ AnalysisHandlers.jl
│ └─ FrontendHandlers.jl # Handlers used by the JS frontend
|
├─ providers/
│ └─ ProviderPool.jl # Provider abstraction and pooling
|
├─ resources/
│ ├─ Resources.jl # Resource adapters (OpenAI, Grok)
│ ├─ OpenAI.jl
│ └─ types/ # resource-specific types
|
├─ risk/
│ └─ RiskManager.jl # configuration and management
|
├─ monitoring/
│ └─ (monitoring helpers)
|
├─ db/
│ └─ (migrations / agents_state.json)
|
├─ utils/ # misc helpers
├─ storage/ # persistence/backing stores
├─ swarm/ # orchestration for distributed workers
├─ trading/ # trading-related adapters
├─ tokens/ # token metadata utilities
└─ (other folders omitted for presentation)

Ghost Whallet Hunter (premiado no desafio AI DApp Development promovido por earn.superteam) Descrição: Sistema de análise forense de carteiras Solana que utiliza 7 agentes detectives especializados implementados em Julia para detectar atividades suspeitas, exploits, fraudes e lavagem de dinheiro na blockchain Solana através de análise de padrões transacionais e comportamentais. Diferencial: Usa computação de alta performance (Julia) para análise em tempo real com detecção inteligente de padrões (draining, LP exploitation, redes coordenadas) sem depender de blacklists estáticas. 🛠️ STACK TECNOLÓGICA COMPLETA BACKEND (High-Performance Computing) Tecnologia Versão Uso Julia 1.11.6 Linguagem principal - computação científica de alta performance Oxygen.jl 1.7.2 Framework HTTP/API server (similar ao Express/FastAPI) HTTP.jl - Cliente HTTP para comunicação com RPCs Solana JSON3.jl - Parsing e serialização JSON ultra-rápida WebSockets.jl - Comunicação real-time (planejado) DataStructures.jl 0.18.22 Estruturas de dados otimizadas Clustering.jl 0.15 Análise de agrupamento de wallets Statistics Built-in Análise estatística de padrões Dates/TimeZones Built-in Manipulação temporal para análise de séries BLOCKCHAIN INTEGRATION Componente Tecnologia Descrição Solana RPC QuikNode/Helius/Alchemy Endpoints mainnet para dados on-chain ProviderPool Custom Julia Sistema de fallback entre múltiplos RPCs Transaction Parser Julia Parser customizado de transações Solana Blacklist Checker HTTP + External APIs Integração com listas públicas de fraudes FRONTEND (Modern Web) Tecnologia Versão Uso React 18.2.0 UI framework principal Vite 5.0.8 Build tool ultra-rápido React Router 6.8.1 Roteamento SPA TailwindCSS 3.4.0 Styling utility-first Framer Motion 10.18.0 Animações fluidas Axios 1.6.2 Cliente HTTP React Query 3.39.3 Gerenciamento de estado assíncrono Zustand 4.4.7 State management leve Recharts 2.9.3 Visualização de dados (gráficos) Three.js 0.150.1 Visualização 3D de grafos React Flow 11.11.4 Grafos de relacionamento de wallets React Hot Toast 2.4.1 Notificações UX Heroicons 2.0.18 Ícones SVG DEVOPS & TOOLING Ferramenta Uso Git Controle de versão PowerShell Scripts de automação Windows ESLint Linting JavaScript/React Prettier Formatação de código Terser Minificação JavaScript EXTERNAL SERVICES (APIs) Serviço Provider Uso Solana RPC QuikNode RPC primário mainnet Fallback RPC Helius, Alchemy Endpoints de backup AI Analysis OpenAI GPT-4, Grok Análise de padrões com LLM (opcional) Blacklist APIs SolScan, Helius Verificação de endereços maliciosos ARQUITETURA DO SISTEMA
┌─────────────────────────────────────────────────────────┐
│ FRONTEND (React) │
│ ┌─────────────────────────────────────────────────┐ │
│ │ UI Components (Tailwind + Framer Motion) │ │
│ │ └─ WalletInput, Results, NetworkGraph │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ State Management (React Query + Zustand) │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ API Client (Axios) │ │
│ └──────────────────┬──────────────────────────────┘ │
└─────────────────────┼──────────────────────────────────┘
│ HTTP/WebSocket
▼
┌─────────────────────────────────────────────────────────┐
│ JULIA BACKEND (Port 10000) │
│ ┌─────────────────────────────────────────────────┐ │
│ │ HTTP API (Oxygen.jl) │ │
│ │ └─ /api/v1/investigate │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Detective Agents Orchestrator │ │
│ │ ┌───────────────────────────────────────────┐ │ │
│ │ │ 7 Specialized Agents: │ │ │
│ │ │ • Poirot (Transaction Analysis) │ │ │
│ │ │ • Marple (Pattern Detection) │ │ │
│ │ │ • Spade (Risk Assessment) │ │ │
│ │ │ • Marlowe (Deep Investigation) │ │ │
│ │ │ • Dupin (Analytical Deduction) │ │ │
│ │ │ • Shadow (Network Analysis) │ │ │
│ │ │ • Raven (Report Synthesis) │ │ │
│ │ └───────────────────────────────────────────┘ │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Blockchain Services │ │
│ │ └─ SolanaService (RPC Pool + Cache) │ │
│ ├─────────────────────────────────────────────────┤ │
│ │ Analysis Modules │ │
│ │ • Draining Pattern Detection │ │
│ │ • LP Exploitation Detection │ │
│ │ • Coordinated Network Detection │ │
│ │ • Graph Analysis (clustering) │ │
│ └──────────────────┬──────────────────────────────┘ │
└─────────────────────┼──────────────────────────────────┘
│
▼
┌───────────────────────┐
│ SOLANA BLOCKCHAIN │
│ (QuikNode/Helius) │
└───────────────────────┘
🧠 TÉCNICAS DE DETECÇÃO IMPLEMENTADAS Técnica Descrição Status Draining Pattern Detecta 50+ txs/hora (esvaziamento rápido) ✅ Implementado LP Exploitation Identifica interações com pools DeFi (Raydium, Orca) ✅ Implementado Coordinated Network Detecta 250+ counterparties (spray attacks) ✅ Implementado Graph Clustering Agrupa wallets por comportamento similar ✅ Implementado Statistical Anomalies Análise de desvios padrão em volumes ✅ Implementado Blacklist Cross-check Consulta APIs públicas de fraudes ✅ Implementado 📊 MÉTRICAS DE PERFORMANCE Tempo de análise: ~8-10 segundos (single agent) Transações analisadas: 100-120 por investigação Precisão: Risk score 0.90 para exploiters confirmados Arquitetura: 100% dados reais (zero mocks) 🎓 APRENDIZADOS PARA PORTFÓLIO 1. Julia para High-Performance Computing Uso de Julia como alternativa a Python para análise de dados Performance ~10-100x mais rápida que Python em loops numéricos Integração Julia ↔ Web APIs modernas 2. Blockchain Forensics Análise de padrões transacionais on-chain Detecção de exploits DeFi sem depender de oráculos Graph analysis de redes de wallets 3. Multi-Agent Systems Orquestração de 7 agentes especializados Parallel execution com Julia Threads Consensus algorithm para agregação de resultados 4. Modern Web Stack React + Vite para SPA performático State management com React Query + Zustand Visualizações 3D com Three.js/React Flow 5. API Design RESTful API design com Julia Handling de timeouts e retries Normalização de dados entre backend/frontend 🔗 Keywords para portfólio: Julia, Blockchain Forensics, Solana, React, High-Performance Computing, Multi-Agent Systems, Pattern Detection, DeFi Security, WebGL, Graph Analysis, REST API, Micro-frontends
