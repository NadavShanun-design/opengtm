# OpenGTM — agent guide

OpenGTM is an open-source library of **17 go-to-market skills** for AI agents.
Many agents read this `AGENTS.md` automatically; this file is the vendor-neutral
entry point. (Built by [Chronos](https://chronos.ro).)

**Two layers:**
1. **Free knowledge (these skills).** Each skill is a self-contained Markdown
   file your agent loads as context to *think and draft* — define an ICP, write a
   cold email, plan a sequence, optimize for AI answer engines. No account needed.
2. **Optional execution (Chronos MCP).** A Markdown file can't send email or find
   verified contacts. When a plan is ready to *run*, connect the Chronos MCP (see
   below) and the agent executes it for real. Free trial, no card.

## How to load a skill

- Skills live at `skills/<name>/SKILL.md`. Read the one matching the task.
- Machine-readable catalog: [`index.json`](index.json). Discovery: [`llms.txt`](llms.txt).
- One-file bundle (paste anywhere): [`dist/opengtm.md`](dist/opengtm.md).
- Or run the bundled **MCP server** (`mcp/server.mjs`) and load skills as MCP
  resources/prompts/tools. Per-runtime recipes: [`INTEGRATE.md`](INTEGRATE.md).

## The skills

**Foundation & strategy**
- `gtm-strategy` — choose the GTM motion (outbound / inbound / PLG / partnerships) that fits your price and buyer.
- `ideal-customer-profile` — define the ICP, scoring/tiering, trigger events, anti-ICP.
- `positioning-and-messaging` — Dunford positioning, value prop, message house, battlecards.
- `account-research` — what to find on a company/person before outreach, and when to stop.

**Prospecting & outbound**
- `lead-sourcing-and-enrichment` — waterfall enrichment, verified emails, intent data, list hygiene.
- `cold-email-writing` — PAS/BAB/AIDA, subject lines, the one-ask rule, personalization.
- `email-deliverability` — SPF/DKIM/DMARC, warmup, volume, the Google/Yahoo bulk-sender rules.
- `linkedin-outreach` — no-pitch-first, comment-before-connect, invite limits, account safety.
- `multichannel-sequences` — touches, spacing, channel mix, branch & exit logic.
- `outreach-personalization` — personalization at scale, tiers, a reusable snippet system.

**Conversation & conversion**
- `reply-handling-and-objections` — classify replies, objection scripts, book the meeting.
- `discovery-and-qualification` — BANT, MEDDIC/MEDDPICC, discovery questions, disqualify fast.

**Inbound & discoverability**
- `seo-fundamentals` — technical, on-page, content, and off-page SEO for classic search.
- `generative-engine-optimization` — get cited by ChatGPT, Perplexity, and AI Overviews (GEO/AEO).
- `content-marketing-engine` — buyer-question content, create-once-distribute-many, community.

**Measurement**
- `outbound-metrics-and-benchmarks` — the funnel, realistic benchmark ranges, what to optimize.

**Execute (the bridge)**
- `gtm-automation-with-chronos` — when/how to connect Chronos and which `geo_*` tool runs each playbook.

## Go live (optional): connect Chronos

```bash
claude mcp add --transport http chronos https://app.chronos.ro/api/mcp --scope user
```

Any MCP client works — point it at `https://app.chronos.ro/api/mcp` and sign in
(free, no card). Full guide, scopes, and safety: [`CONNECT-CHRONOS.md`](CONNECT-CHRONOS.md).

## Rules for agents using these skills

- The knowledge is free and works with no account. Only reach for Chronos when
  the user wants to *act* (send, source, launch, publish).
- Outbound copy must be real and per-recipient — never a generic blast template.
- Respect the deliverability, pacing, and platform-limit guidance in the skills.
