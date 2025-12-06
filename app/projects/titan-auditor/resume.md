Resumo detalhado para página de portfólio — Titan Financial Auditor

Overview

Project: Titan Financial Auditor
Short purpose: Automated pipeline that extracts financial statements (CVM/SEC/PDF), normalizes data, runs deterministic financial analytics, and produces an LLM-backed audit report with an interactive Streamlit dashboard.
Objective

Goal: Provide a repeatable, auditable, sector-aware financial analysis engine that:
Normalizes official filings (Brazilian CVM + US SEC) and PDFs,
Applies deterministic math checks (Altman Z, DuPont, Piotroski, banking rules),
Flags forensic anomalies, and
Generates human-readable audit narratives (bull/bear) via LLMs.
High-level Architecture

Orchestration (UI layer): app.py (Streamlit) — user interactions, quick market lookups, upload flow, and render dashboard.
Routing & Ingest: router.py — detects asset type and source (CVM/SEC/On-chain), downloads/parses XBRL or selects PDF path, applies sector detection (e.g., banking tickers).
Extraction: extractor.py — TitanExtractor + FinancialStatement (Pydantic model). Converts raw XBRL/PDF/text to normalized numeric fields.
Math Engine: calculator.py — deterministic calculations (Z-Score, DuPont decomposition, Piotroski F-Score, banking-specific indicators including Basel proxy, PDD coverage).
Auditor (LLM): auditor.py — composes prompt, calls LLM, parses JSON, robust fallback handling for malformed output, assembles FinalAuditReport.
Market Data: market_data.py — lightweight wrapper over yfinance for price, market cap, PE, DY (with normalization).
UI Components: folder ui/ — design system (cards, badges, headers).
Utilities: small helpers for formatting, PDF text extraction (pypdf), dotenv/secrets handling.
Data Sources

CVM Dados Abertos (XBRL/CSV) — primary for Brazilian filings.
SEC XBRL — primary for US filings (when available).
PDFs (earnings releases) — parsed via pypdf then cleaned and optionally re-parsed by LLM extractor.
Market data: yfinance (interim; includes quirks — normalized).
On-chain data (CoinGecko) for crypto assets (lightweight).
Key Design Decisions

Sector-aware rules: banking vs insurance vs corporate; banks use CVM account 2.08 fallback for equity, nullify current_assets/current_liabilities to avoid corporate liquidity flags.
PDD coverage: extract PDD balances and loan portfolio to produce PDD/Carteira proxy (coverage %) when Basel/RWA stats absent.
ROE Annualization: detect YTD periods (by month in period string) and annualize ROE for display and LLM feeding.
LLM integration: use LLMs to produce narrative audits only — deterministic engine handles numeric calculations; robust JSON extraction + regex fallback to avoid pipeline breaks.
Market data disclaimer: keep Yahoo as quick source with disclaimer; plan to replace with official proventos sources later.
Core Files & Responsibilities

app.py — Streamlit app: sidebar controls, market & audit modes, render with render_titan_dashboard().
router.py — fetches documents/data, determines AssetType, handles CVM/SEC specifics and banking detection (BANKING_TICKERS).
extractor.py — TitanExtractor, FinancialStatement (Pydantic) with fields: assets, liabilities, equity, pdd_balance, loan_portfolio, non_performing_loans, sector, period, currency, company_name.
calculator.py — TitanMathEngine.analyze() returns math_report with altman_z_score, dupont_analysis, piotroski_score, forensic_flags.
auditor.py — TitanAuditor.audit_company() returns FinalAuditReport with verdict, headline, executive_summary, bull_case, bear_case, math_explanation, and management_trust_score.
market_data.py — MarketDataService.get_ticker_info() and get_price_history().
prompts.py — LLM prompt templates including sector-specific extraction and audit templates.
ui/ — visual helpers: metric_card, verdict_hero, section_header, alert_box, argument_card, page_header.
Pipeline / Data Flow

User selects ticker / uploads PDF or app auto-fetches via titan_router.
Router returns document/text or structured XBRL.
If XBRL structured: use run_audit_pipeline_from_xbrl() → skip LLM extraction; else extract text from PDF / raw text.
TitanExtractor.extract_from_text() normalizes numbers into FinancialStatement.
TitanMathEngine.analyze(financials) computes metrics and forensic flags.
TitanAuditor.audit_company(financials, math_report, raw_text) calls LLM with prompts + deterministic context → returns narrative + structured JSON.
render_titan_dashboard() displays metrics, bull/bear, raw JSON, and export options.
Algorithms & Metric Highlights

Altman Z-Score adapted for available inputs.
DuPont decomposition: net margin × asset turnover × financial leverage → ROE.
Piotroski F-Score (9 point checklist).
Banking heuristics:
Equity extraction prefers CVM 2.08 for banks.
Basel proxy via capital_ratio when available; fallback to capital/assets.
PDD/Carteira coverage as provision coverage metric; thresholds (4–6% healthy).
Annualized ROE from YTD numbers.
Forensic flags: checks for inconsistent growth, negative cash flow, sudden margin swings, and malformed XBRL mappings.
LLM Usage

Providers configurable in app.py via LLM_PROVIDERS (OpenAI, Grok).
LLM roles:
Extractor assistant (text → structured numbers) only when XBRL unavailable.
Auditor assistant (narrative, bull/bear, risk explanations).
Safety: LLM output parsed as JSON; fallback routines attempt regex and sanitization before failing gracefully.
UI / UX Features

Streamlit dashboard with progressive disclosure: summary cards → arguments → raw data → audit debugging.
Export: copy-as-markdown (code block) + download .md.
Document source links (CVM/SEC) shown when metadata includes document_url.
Market cards with DY/PE from Yahoo, with explicit disclaimer.
Banking-specific cards (Basileia, PDD/Carteira, annualized ROE, leverage).
How to Run (dev)

Create & activate venv, install deps:
Configure secrets: either .env with OPENAI_API_KEY / XAI_API_KEY or Streamlit Cloud secrets.toml.
Current State (as of latest commits)

Banking extraction fixes implemented (use of 2.08, PDD extraction).
Robust JSON recovery for LLM outputs added.
Market data normalization for dividend yield implemented.
UI improvements: source links, export, and disclaimers.
Tests: ad-hoc debug scripts used for validation (e.g., ITUB4, PETR4).
Repo branch: main with recent commits like feat: add banking sector detection... and feat: improve UX....
Recommended Next Steps (portfolio & technical)

Portfolio page structure (single-page sections): Quick pitch → Tech stack → Architecture diagram (1 image) → Core modules (file list + 1–2 line responsibilities) → Demo screenshots (dashboard + export) → How to run → Key results / notes (bank fixes, edge-cases handled) → Roadmap.
Technical improvements to highlight: replace yfinance proventos with B3/Status Invest, add unit tests for router/calculator, add clipboard copy component (Streamlit JS), add caching layer for filings.
Metrics to show on portfolio: number of tickers tested, examples fixed (ITUB4 etc.), accuracy improvements (qualitative), and screenshots.
Suggested Copy for Portfolio Page Sections

Hero (1-liner): "Automated financial auditor — extracts filings, runs forensic analytics, and generates LLM-backed audit reports."
Tech Stack (compact): "Python, Streamlit, Pydantic, XBRL parsing, pypdf, yfinance, OpenAI/Grok, Pandas/Numpy, Git."
Architecture (1-paragraph): succinct description of pipeline (router → extractor → calculator → auditor → UI).
Code / Live Demo: Link to GitHub repo + how to run locally + note about LLM keys.
Highlights: "Banking-specific CVM fixes (PL mapping), PDD coverage proxy, robust LLM parsing."

Aqui está a árvore do projeto gerada a partir do workspace atual:

titan-auditor/
.env
.git/
.gitignore
.streamlit/
.vscode/
app.py
prompts.py
README.md
README.pt-BR.md
requirements.txt
LICENSE
ui.py
venv/
pycache/
core/
auditor.py
calculator.py
extractor.py
market_data.py
market_map.py
router.py
pycache/
examples/
nvidia_q3_25.pdf
nubank_q3_25.pdf
americanas_q3_25.pdf
