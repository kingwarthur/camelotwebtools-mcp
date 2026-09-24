# Camelot Web Tools MCP Server (`camelotwebtools-mcp`)

[![npm version](https://img.shields.io/npm/v/camelotwebtools-mcp.svg)](https://www.npmjs.com/package/camelotwebtools-mcp)
[![smithery badge](https://smithery.ai/badge/wdarthur1990/camelotwebtools)](https://smithery.ai/servers/wdarthur1990/camelotwebtools)
[![Listed on mcpservers.org](https://mcpservers.org/badge.svg)](https://mcpservers.org/servers/kingwarthur/camelotwebtools-mcp)
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

### Client Work (7 tools)
* camelot_project_proposal: Project Proposal Builder - Create structured project proposals with timeline, deliverables, budget, and clean unwatermarked export.
* camelot_statement_of_work: Statement of Work (SOW) - Draft detailed SOWs with milestones, deliverables, payment terms, and clean unwatermarked export.
* camelot_contract_builder: Contract Builder - Generate editable draft worksheets for consulting and services agreements with zero watermarks.
* camelot_nda_generator: Non-Disclosure Agreement Template - Create customizable mutual or unilateral NDA draft worksheets.
* camelot_contractor_agreement: Contractor Agreement Template - Draft independent contractor agreements with IP, scope, and compensation terms.
* camelot_time_tracker_analyzer: Time Track Analyzer - Log billable client hours, calculate totals by project, and analyze billable ratios.
* camelot_meeting_minutes_formatter: Meeting Minutes Formatter - Format client meeting notes into structured minutes with action items and decisions.

### Finance & Billing (23 tools)
* camelot_invoice_generator: Invoice Generator Pro - Create customizable vector PDF invoices with multi-currency labels, editable line items, tax and discount fields, and local unwatermarked PDF export.
* camelot_bank_csv_normalizer: Bank Transaction CSV Normalizer - Paste transaction rows copied from a spreadsheet and normalize them into a consistent five-column CSV file.
* camelot_pay_statement: Pay Statement Builder - Generate detailed pay statement breakdowns with gross pay, deductions, and withholdings.
* camelot_tax_estimator: Tax Estimator Worksheet - Estimate Federal and Self-Employment tax liability ranges with standard deduction and benchmark brackets.
* camelot_cash_flow_projection: Cash Flow Projection - Model monthly revenue, operating expenses, and cash runway projections.
* camelot_profit_loss_generator: Profit & Loss Generator - Build income statements with categorized revenue and operating expenses.
* camelot_balance_sheet_maker: Balance Sheet Maker - Organize assets, liabilities, and equity to generate structured balance sheet summaries.
* camelot_equity_dilution_calculator: Equity Dilution Calculator - Calculate founder dilution, option pool expansions, and investment rounds.
* camelot_cap_table_manager: Cap Table Manager - Manage shareholder ownership percentages, share classes, and vesting schedules.
* camelot_debt_payoff_calculator: Debt Payoff Calculator - Compare avalanche and snowball debt payoff strategies with interest savings.
* camelot_mortgage_amortization: Mortgage Amortization - Calculate monthly mortgage payments, amortization schedules, and principal breakdown.
* camelot_retirement_scenario_planner: Retirement Scenario Planner - Project retirement savings growth with compound interest and contribution schedules.
* camelot_crypto_tax_calculator: Crypto Tax Calculator - Track crypto capital gains and losses using FIFO and LIFO cost basis methods.
* camelot_pricing_tier_calculator: Pricing Tier Calculator - Model SaaS pricing tiers, feature gating, and revenue potential.
* camelot_ltv_cac_calculator: LTV to CAC Calculator - Analyze customer lifetime value against acquisition cost and payback periods.
* camelot_expense_log_analyzer: Expense Log & Analyzer - Categorize business expenses, identify tax-deductible items, and export expense reports.
* camelot_receipt_itemizer: Receipt Itemizer - Tabulate receipt line items, compute tax breakdowns, and export structured expense records.
* camelot_purchase_order_generator: Purchase Order Generator - Create professional purchase orders with vendor details, line items, and delivery terms.
* camelot_quick_budget: Quick Budget - Create a practical budget with income, spending, and savings categories stored in this browser.
* camelot_investment_tracker: Investment Tracker - Record holdings, cost basis, and manually entered prices to review allocation and gain or loss.
* camelot_emergency_fund_planner: Emergency Fund Planner - Estimate a cash reserve target from the monthly expenses and runway you choose.
* camelot_net_worth_tracker: Net Worth Tracker - Track manually entered assets and liabilities with records stored in this browser.
* camelot_subscription_manager: Subscription Manager - Track recurring business software costs, renewal dates, trials, and active subscriptions.

### Business Operations (24 tools)
* camelot_business_plan_generator: Business Plan Generator - Build lean business plans with executive summaries, market strategies, and financial projections.
* camelot_hr_offer_letter_generator: HR Offer Letter Generator - Create customized employment offer letter draft worksheets with salary and benefits terms.
* camelot_terms_of_service_template: Terms of Service Template - Draft website and SaaS terms of service worksheets covering user conduct and liability.
* camelot_privacy_policy_template: Privacy Policy Template - Generate privacy policy draft worksheets covering data collection, cookies, and user rights.
* camelot_employee_handbook_template: Employee Handbook Template - Build customized employee handbook draft worksheets covering workplace policies and standards.
* camelot_competitor_matrix_builder: Competitor Matrix Builder - Map competitors across features, pricing, strengths, and market positioning.
* camelot_market_sizing_calculator: Market Sizing Calculator - Estimate TAM, SAM, and SOM market sizes using top-down and bottom-up models.
* camelot_shipment_vendor_log: Shipment & Vendor Log - Track vendor shipments, delivery timelines, lead times, and inventory receipts.
* camelot_shipping_label_mockup: Shipping Label Mockup - Generate printable shipping label layouts with barcode placeholders and addresses.
* camelot_customs_declaration_form: Customs Declaration Worksheet - Draft international shipping customs declaration worksheets with HS codes and item valuations.
* camelot_churn_rate_forecaster: Churn Rate Forecaster - Forecast customer churn, net revenue retention, and revenue impacts.
* camelot_reorder_point_calculator: Reorder Point Calculator - Calculate optimal inventory reorder points and safety stock levels.
* camelot_ad_copy_template_builder: Ad Copy Template Builder - Structure PPC and social media ad copy variations with headlines and CTAs.
* camelot_social_media_planner: Social Media Planner - Plan and schedule multi-channel social media content calendars with draft posts.
* camelot_email_campaign_writer: Email Campaign Template Writer - Draft structured email marketing sequences with subject lines and body copy.
* camelot_cold_outreach_emailer: Cold Outreach Emailer - Craft personalized cold sales outreach email templates and follow-up sequences.
* camelot_press_release_generator: Press Release Generator - Format standard press release announcements with boilerplate and media contact info.
* camelot_brand_asset_manager: Brand Asset Manager - Organize brand hex colors, typography scales, logo assets, and usage rules.
* camelot_brand_name_generator: Brand Name Generator - Generate brand name ideas based on keywords, industry, and naming styles.
* camelot_personal_crm: Personal Networking CRM - Track professional relationships, contact history, follow-up reminders, and notes.
* camelot_resume_builder: Resume Builder - Create and export a structured, unwatermarked professional resume from the details you enter.
* camelot_cover_letter_writer: Cover Letter Writer - Draft a tailored cover letter from your experience and the role details you provide.
* camelot_interview_prep: Interview Prep - Organize role-specific interview questions, talking points, and practice notes.
* camelot_salary_negotiation_planner: Salary Negotiation Planner - Prepare compensation targets, supporting evidence, and negotiation talking points.

### Developer Utilities (25 tools)
* camelot_preset_data_faker: Preset Data Faker - Generate realistic mock data sets for testing and development with various schema presets.
* camelot_agile_roadmap_planner: Agile Roadmap Planner - Plan sprints, epics, and release roadmaps with milestone tracking.
* camelot_user_story_generator: User Story Generator - Generate structured agile user stories with acceptance criteria and story points.
* camelot_bug_report_template: Bug Report Template - Format clear, reproducible bug reports with steps, environment details, and logs.
* camelot_api_documentation_generator: API Documentation Generator - Document REST API endpoints with request/response schemas, parameters, and examples.
* camelot_database_schema_designer: Database Schema Designer - Design relational database tables, columns, constraints, and relationships.
* camelot_seo_meta_tag_generator: SEO Meta Tag Generator - Generate OpenGraph, Twitter Card, and standard HTML SEO meta tags.
* camelot_code_formatter: Code Formatter - Format and beautify JavaScript, TypeScript, JSON, HTML, and CSS snippets.
* camelot_regex_tester: Regex Tester - Test regular expressions in real-time with match highlights and group captures.
* camelot_json_to_csv: JSON to CSV Converter - Convert JSON arrays to CSV format and vice versa with configurable delimiters.
* camelot_cron_job_generator: Cron Job Generator - Build and explain standard cron schedule expressions with human-readable descriptions.
* camelot_uuid_generator: UUID V4 Generator - Generate cryptographically random UUID v4 strings in bulk.
* camelot_jwt_decoder: JWT Decoder - Decode and inspect JSON Web Tokens locally without sending secret tokens to external servers.
* camelot_base64_encoder: Base64 Encoder - Encode and decode text strings and binary data to/from Base64 format locally.
* camelot_hash_generator: Hash Generator - Generate SHA-256, SHA-512, MD5, and SHA-1 cryptographic hashes locally.
* camelot_url_encoder: URL Encoder - Encode and decode URL parameters and query strings safely.
* camelot_css_gradient_generator: CSS Gradient Generator - Design linear and radial CSS gradients with live preview and CSS code export.
* camelot_image_compressor: Image Compressor - Compress PNG, JPEG, and WebP images client-side in your browser.
* camelot_pdf_merger: PDF Merger - Combine multiple PDF documents into one unwatermarked file in your browser with zero server uploads.
* camelot_secure_password_generator: Secure Pass Gen - Generate strong, cryptographically secure passwords and passphrases locally.
* camelot_timezone_converter: Time Zone Converter - Convert times across multiple international time zones with daylight savings support.
* camelot_local_file_editor: Local File Editor - Open, edit, and save text, markdown, and code files directly on your local device.
* camelot_cloud_sync_gist: Cloud Sync (GitHub Gist) - Backup and synchronize your local application settings and data via private GitHub Gists.
* camelot_timezone_scheduler: Time Zone Overlap Scheduler - Find optimal meeting windows across distributed international teams.
* camelot_pdf_filler: Free PDF Form Filler - Upload any PDF, fill interactive form fields, add text and signatures on any page, and export a clean vector PDF with zero watermarks. 100% free with no limits.


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

