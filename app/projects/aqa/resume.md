Autonomous Quality Agent (AQA)
📋 Visão Geral
O Autonomous Quality Agent é uma plataforma de engenharia de qualidade que atua como um agente inteligente. Ela transforma requisitos em testes executáveis automaticamente usando IA, combinando cognição (LLM) com execução de alta performance.

🏗️ Arquitetura
O projeto segue uma arquitetura de dois componentes desacoplados comunicando-se via protocolo UTDL (Universal Test Definition Language):

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        Autonomous Quality Agent                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌──────────────┐         UTDL (JSON)         ┌──────────────────┐    │
│   │              │  ──────────────────────────▶│                  │    │
│   │  🧠 Brain    │                             │  🦀 Runner       │    │
│   │  (Python)    │                             │  (Rust)          │    │
│   │              │◀──────────────────────────  │                  │    │
│   └──────────────┘       Results (JSON)        └──────────────────┘    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

🧠 The Brain (Python 3.11+)
Responsabilidade: Cognição, Planejamento e Validação

Lê requisitos de documentação técnica (Swagger/OpenAPI, texto livre)
Gera planos de teste em JSON via LLM (OpenAI GPT)
Valida planos contra schema UTDL
Gerencia cache, histórico e versionamento
🦀 The Runner (Rust + Tokio)
Responsabilidade: Execução Determinística e Alta Performance

Consome planos UTDL e executa requisições HTTP
Paralelismo massivo via DAG (Directed Acyclic Graph)
Extração de dados e interpolação de variáveis
Telemetria OpenTelemetry integrada
📁 Estrutura de Pastas

```
autonomous-quality-agent/
├── brain/                      # 🧠 Componente Python
│   ├── src/
│   │   ├── cli/               # CLI com Click + Rich
│   │   │   ├── registry.py    # @register_command decorator pattern
│   │   │   └── commands/      # 10 comandos modulares
│   │   ├── generator/         # Geração de planos via LLM
│   │   │   ├── llm.py         # Orquestração
│   │   │   ├── prompts.py     # Templates de prompt
│   │   │   └── providers.py   # Strategy pattern
│   │   ├── validator/         # Validação UTDL (Pydantic)
│   │   │   ├── models.py      # Modelos Pydantic
│   │   │   └── utdl_validator.py
│   │   ├── llm/               # Providers LLM
│   │   │   ├── base.py        # ABC BaseLLMProvider
│   │   │   ├── provider_mock.py
│   │   │   └── provider_real.py
│   │   ├── ingestion/         # Parsing de documentação
│   │   │   ├── swagger.py     # Parser OpenAPI 3.x
│   │   │   ├── security.py    # Detecção de auth schemes
│   │   │   └── negative_cases.py
│   │   ├── storage/           # Backends de persistência
│   │   │   ├── json_backend.py
│   │   │   ├── sqlite.py
│   │   │   └── s3.py
│   │   ├── adapter/           # Normalização UTDL
│   │   │   └── format_adapter.py
│   │   ├── telemetry/         # Métricas e tracing
│   │   └── cache.py           # Cache com TTL
│   └── tests/                 # 423 testes
│       ├── test_*.py          # Unit tests
│       ├── test_integration*.py
│       ├── test_e2e_*.py      # End-to-end
│       └── test_audit_*.py    # Security audit
│
├── runner/                     # 🦀 Componente Rust
│   ├── src/
│   │   ├── main.rs
│   │   ├── executors/         # HTTP, Wait, GraphQL
│   │   ├── extractors/        # JSONPath extraction
│   │   ├── planner/           # DAG execution planner
│   │   ├── validation/        # Schema validation
│   │   ├── context/           # Variable interpolation
│   │   ├── retry/             # Retry policies
│   │   ├── limits/            # Rate limiting
│   │   └── telemetry/         # OTEL integration
│   └── Cargo.toml
│
├── schemas/                    # JSON Schemas
│   ├── utdl.schema.json       # Schema canônico UTDL
│   ├── context.schema.json
│   └── runner_report.schema.json
│
├── docs/                       # Documentação
│   ├── user-guide.md          # Guia do usuário
│   ├── developer-guide.md     # Guia de contribuição
│   ├── architecture.md        # Decisões técnicas
│   ├── interface.md           # Spec UI (~3000 linhas)
│   └── plugin_development.md  # Extensibilidade
│
└── output/                     # Workspace de execução
```

🛠️ Stack Tecnológica
Backend - Brain (Python)
Tecnologia Uso
Python 3.11+ Runtime principal
Click Framework CLI
Rich UI de terminal (tabelas, progress, syntax highlight)
Pydantic Validação e serialização
OpenAI SDK Integração com GPT-4/GPT-4o
PyYAML Parsing de OpenAPI
JSONPath-ng Extração de dados JSON
Pyright/Pylance Type checking estático
pytest Framework de testes

Backend - Runner (Rust)
Tecnologia Uso
Rust (stable) Linguagem compilada
Tokio Runtime async
Reqwest Cliente HTTP
Serde Serialização JSON
jsonpath-rust JSONPath extraction
tracing Logging estruturado
OpenTelemetry Telemetria distribuída
DevOps & Tooling
Tecnologia Uso
Make Task runner
GitHub Actions CI/CD
JSON Schema Validação de contratos
Git Versionamento
🔑 Features Principais

1. Geração de Testes via IA

```
aqa generate --swagger https://api.example.com/openapi.json
```

Ingere OpenAPI/Swagger specs
Detecta automaticamente esquemas de autenticação (API Key, Bearer, OAuth2)
Gera casos negativos (400, 401, 404, 500)
Cria fluxos de autenticação completos

2. Execução Paralela com DAG
   Steps com dependências executam em ordem
   Steps independentes executam em paralelo
   Suporta 20+ branches simultâneos
   Retry policies configuráveis

3. Extração e Interpolação

```
{
  "extract": [{"source": "body", "path": "$.token", "target": "auth_token"}],
  "headers": {"Authorization": "Bearer {{auth_token}}"}
}
```

4. Validação Rigorosa
   Schema UTDL canônico
   Detecção de dependências circulares
   Validação de JSONPath
   Verificação de tipos de assertion
5. Múltiplos Storage Backends
   JSON (default)
   SQLite (produção)
   S3 (cloud)
6. CLI Completa (10 comandos)
   Comando Status Descrição
   init ✅ Stable Inicializa workspace
   generate ✅ Stable Gera planos via LLM
   validate ✅ Stable Valida planos UTDL
   run ✅ Stable Executa testes
   plan-list ✅ Stable Lista planos salvos
   config ✅ Stable Gerencia configuração
   storage 🔶 Beta Backend de storage
   cache 🔶 Beta Gerenciamento de cache
   trace 🔬 Experimental Tracing e telemetria

📊 Métricas do Projeto
Métrica Valor
Testes Python 423
Testes Rust 95
Total de Testes 518
Cobertura de Cenários Unit, Integration, E2E, Extreme, Security Audit
Linhas de Documentação ~5000+
Comandos CLI 10
🎯 Padrões de Design Utilizados
Strategy Pattern - LLM Providers (Mock/Real)
Factory Pattern - Storage Backends
Registry Pattern - CLI Commands (@register_command)
Adapter Pattern - Format normalization (UTDL)
DAG Execution - Parallel step execution
ABC (Abstract Base Class) - Contratos de providers
🔒 Segurança
Sanitização de Prompts: Credenciais não vazam para LLM
Placeholders: {{env:API_KEY}} em vez de valores reais
Audit Tests: 13 testes específicos de segurança
Sem Hardcoded Secrets: Verificação via regex patterns
📚 Documentação Técnica
O projeto inclui documentação enterprise-ready:

interface.md (~3000 linhas): Especificação completa para UI futura
23 endpoints REST
7 eventos WebSocket
Mapa de estados globais
Checklist de implementação por fases
🚀 Exemplo de Uso

```
# 1. Inicializa workspace
aqa init

# 2. Gera plano de testes a partir de Swagger
aqa generate --swagger https://petstore.swagger.io/v2/swagger.json

# 3. Valida o plano gerado
aqa validate .aqa/plans/petstore.json

# 4. Executa os testes
aqa run .aqa/plans/petstore.json

# 5. Output JSON para CI/CD
aqa --json run plan.json > results.json
```

📦 Licenciamento
Versões < 1.0.0: MIT License
Versões >= 1.0.0: Elastic License 2.0 (ELv2)
Repositório: github.com/lipeamarok/autonomous-quality-agent
