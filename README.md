# Camelot Web Tools MCP Server (`camelotwebtools-mcp`)

[![npm version](https://img.shields.io/npm/v/camelotwebtools-mcp.svg)](https://www.npmjs.com/package/camelotwebtools-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-camelotwebtools.com-emerald.svg)](https://www.camelotwebtools.com)

The official **Model Context Protocol (MCP)** server for [Camelot Web Tools](https://www.camelotwebtools.com). Gives AI coding assistants (Claude Desktop, Cursor, Windsurf, Cline, Roo Code) direct programmatic access to **79 deterministic tools** for business, legal contracts, invoicing, financial math, and developer utilities with instant vector PDF export links.

---

## Why Camelot Web Tools MCP?

* **Deterministic Business Calculations:** Never let an LLM hallucinate invoice math, taxes, or amortization schedules. Calculations run with strict mathematical precision.
* **Instant Vector PDF Previews:** Every document operation returns a direct prefill URL allowing users to view, sign, and export print-ready vector PDFs on Camelot Web Tools in one click.
* **Privacy-First:** Zero data retention. Your prompts and client PII are never stored or used to train third-party AI models.
* **Pre-Bundled Rulesets:** Ships with turnkey `.cursorrules` and `CLAUDE.md` operational configurations for freelance and small business automation.

---

## 1-Minute Quickstart

### Option A: Standard I/O via NPX (Recommended)

No cloning required. Run directly with Node 18+:

```bash
npx -y camelotwebtools-mcp
```

#### 1. Claude Desktop
Add to your `claude_desktop_config.json`:

* **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
* **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "camelot": {
      "command": "npx",
      "args": ["-y", "camelotwebtools-mcp"]
    }
  }
}
```

#### 2. Cursor
1. Open Cursor **Settings** -> **Features** -> **MCP Servers**.
2. Click **Add New MCP Server**:
   * **Name:** `camelot`
   * **Type:** `command`
   * **Command:** `npx -y camelotwebtools-mcp`

#### 3. Windsurf (`mcp_config.json`)
```json
{
  "mcpServers": {
    "camelot": {
      "command": "npx",
      "args": ["-y", "camelotwebtools-mcp"]
    }
  }
}
```

---

### Option B: Direct HTTP Endpoint (Zero Local Install)

If your client supports remote HTTP JSON-RPC 2.0 endpoints:

```json
{
  "mcpServers": {
    "camelot": {
      "url": "https://www.camelotwebtools.com/api/mcp",
      "transport": "http"
    }
  }
}
```

---

## 79 Supported Tools Overview

### 1. Client Work & Deliverables
* `camelot_invoice_generator`: Multi-currency invoices with tax, discounts, and print-ready PDF.
* `camelot_statement_of_work`: Binding project scopes, milestones, deliverables, and acceptance criteria.
* `camelot_contract_builder`: Consulting and service agreements.
* `camelot_nda_generator`: Mutual or unilateral non-disclosure agreements with jurisdiction clauses.
* `camelot_contractor_agreement`: Independent contractor agreements with IP assignment clauses.
* `camelot_project_proposal`: Project proposals with milestones and budgets.
* `camelot_time_tracker_analyzer`: Computes billable hours, unbilled time, and contractor payouts.
* `camelot_meeting_minutes_formatter`: Structured action items, decisions, and attendee notes.

### 2. Finance & Accounting
* `camelot_profit_loss_generator`: Monthly/quarterly revenue, COGS, OPEX, and net margin reports.
* `camelot_cash_flow_projection`: 12-month rolling cash flow modeling.
* `camelot_bank_csv_normalizer`: Cleans, categorizes, and standardizes exported bank CSVs.
* `camelot_tax_estimator`: Self-employment and income tax estimation.
* `camelot_pay_statement`: Itemized employee paystubs with withholdings.
* `camelot_balance_sheet_maker`: Assets, liabilities, and equity reports.
* `camelot_quick_budget`: Expense budgeting with savings targets.
* `camelot_equity_dilution_calculator`: Cap table modeling and funding rounds.
* `camelot_debt_payoff_calculator`: Snowball and avalanche payoff timelines.
* `camelot_mortgage_amortization`: Full loan amortization schedules.

### 3. Business Operations & Legal
* `camelot_business_plan_generator`: Executive summaries, market analysis, and revenue models.
* `camelot_terms_of_service_template`: SaaS and web application terms.
* `camelot_privacy_policy_template`: GDPR and CCPA compliant policies.
* `camelot_employee_handbook_template`: Workplace policies and code of conduct.
* `camelot_competitor_matrix_builder`: Feature benchmarking and SWOT matrices.
* `camelot_customs_declaration_form`: Commercial shipping declarations.
* `camelot_churn_rate_forecaster`: SaaS churn and cohort retention.
* `camelot_purchase_order_generator`: Commercial purchase orders.

### 4. Developer Utilities & Encoders
* `camelot_hash_generator`: Cryptographic hashes (MD5, SHA-1, SHA-256, SHA-512).
* `camelot_uuid_generator`: Cryptographically secure UUID v4 tokens.
* `camelot_jwt_decoder`: Decode headers, claims, and expiry dates.
* `camelot_base64_encoder`: Text and file encoding/decoding.
* `camelot_url_encoder`: Safe URL percent-encoding.
* `camelot_regex_tester`: Expression matching and capture groups.
* `camelot_cron_job_generator`: Human-readable cron schedule translator.
* `camelot_json_to_csv`: Convert JSON datasets into RFC 4180 CSV tables.
* `camelot_pdf_filler`: Interactive pointer for AcroForm PDF form filling (100% free).

---

## Free Tier vs. Pro Licensing

* **Free Tier:** 5 free document operations per day per client. Free forever.
* **Pro Monthly:** $19 / month (unlimited operations and unwatermarked vector PDF exports)
* **Pro Annual:** $149 / year ($12.42/mo, save 35% with annual billing)
* **Lifetime:** $249 one-time (permanent single-user license, zero recurring fees)

* **To unlock unlimited calls via MCP:** Pass your license key in the environment or HTTP Authorization header:

```bash
# In your shell or environment:
export CAMELOT_LICENSE_KEY="YOUR_PRO_OR_LIFETIME_KEY"
```

Or in Claude / Cursor config:
```json
{
  "mcpServers": {
    "camelot": {
      "command": "npx",
      "args": ["-y", "camelotwebtools-mcp"],
      "env": {
        "CAMELOT_LICENSE_KEY": "YOUR_KEY_HERE"
      }
    }
  }
}
```

Upgrade at: [https://www.camelotwebtools.com/pricing](https://www.camelotwebtools.com/pricing)

---

## Pre-Packaged AI Rulesets

This repository includes turnkey AI system rulesets in the root:
* `.cursorrules`: Instructs Cursor to act as your business copilot and format documents via Camelot tools.
* `CLAUDE.md`: Operational instructions for Claude Code and Claude Desktop.

---

## License

MIT License. Copyright (c) 2026 [Camelot Web Tools](https://www.camelotwebtools.com).

