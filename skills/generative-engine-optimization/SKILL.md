---
name: generative-engine-optimization
description: Use when you want a brand, product, or page to be found, quoted, and cited by AI answer engines - ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot. Covers AI-crawler access, answer-first content, the Princeton GEO content methods, llms.txt, schema/JSON-LD, off-site and entity authority, and measuring AI visibility as a rate. Also known as GEO, AEO (answer engine optimization), LLM SEO, or AI search optimization.
license: MIT
metadata:
  author: Chronos
  area: inbound-discoverability
---

# Generative Engine Optimization (GEO / AEO)

## Overview

Classic SEO fights for a **rank** on a results page. GEO fights to be the
**source an AI answer engine quotes** when it generates a reply. Different
game, different wins: you are optimizing to be *retrieved, quoted, and trusted*
inside a synthesized answer, not to be link #3.

Two facts drive everything else:

1. **Answers are non-deterministic.** Ask ChatGPT the same question twice and
   the cited sources shift. So AI visibility is a **rate measured across many
   runs** (mention rate, citation rate, share of voice) - never a single rank.
2. **If a bot can't fetch and parse your page, nothing else matters.** Access
   is the gate. Content craft is downstream of it.

## The honest hierarchy (do these in order)

Practitioners disagree about which levers actually move citations. The order
below is where the evidence-skeptics and the content-optimizers *agree* - work
top-down and you never waste effort:

1. **Access** - let the right crawlers fetch rendered text. (Highest confidence.)
2. **Off-site & entity authority** - be present on the pages engines already cite.
3. **Answer-first, quotable content** - the Princeton methods below.
4. **Structure & schema** - clarity for machines (helps parsing; citation lift contested).
5. **llms.txt** - cheap, harmless, great for dev-docs; do **not** promise citations from it.

## Layer A - Technical access (the prerequisite)

- **Know the crawler tiers** and don't confuse them:
  - *Search / answer bots* (these affect citations): `OAI-SearchBot`,
    `PerplexityBot`, `Claude-SearchBot`/`Claude-User`, `Googlebot` (feeds AI
    Overviews), `Google-Extended` governs Gemini *training*, **not** AI Overviews.
  - *Training bots* (a policy choice, not a citation lever): `GPTBot`,
    `ClaudeBot`, `CCBot`, `Google-Extended`.
  - Note: `anthropic-ai` and `Claude-Web` are **retired** - don't target them.
- **Don't block the search/answer bots in `robots.txt`.** Blocking them removes
  you from citations; allowing training bots is a separate, optional decision.
- **Server-render or statically generate** anything that matters. Most AI
  crawlers do **not** execute JavaScript - if a fact only appears after JS or
  behind a tab/accordion, assume it's invisible.
- **Check the CDN/WAF, not just robots.** Cloudflare and similar block many AI
  bots by default on newer zones - a 403 at the edge beats a clean robots.txt.
- Remove stray `noindex` / `nosnippet` / `max-snippet:0` / `data-nosnippet` on
  public pages. Keep canonical URLs clean and a `sitemap.xml` with accurate
  `lastmod` (engines ignore `changefreq`/`priority`).

## Layer B - Answer-first, quotable content (Princeton GEO methods)

Princeton's GEO study (KDD 2024) tested content tweaks against a generative
engine and measured visibility lift. The ones that worked, strongest first:

| Method | Reported lift | Do |
|---|---|---|
| **Cite authoritative sources inline** | ~+28-41% (up to +115% for lower-ranked pages) | Link primary sources, studies, docs next to each claim |
| **Quantitative statistics** | ~+33-40% | Use concrete numbers, dates, measured results |
| **Expert quotations (attributed)** | ~+30-41% | Quote named people with titles |
| Authoritative tone / fluency / clarity / correct technical terms | smaller gains | Write plainly, define terms, sound like the expert |
| **Keyword stuffing** | **neutral-to-negative** | **Don't.** It does not help AI citation. |

Plus the structural moves every camp endorses:

- **Answer-first.** Lead each section with the direct answer in 1-3 sentences,
  then expand. A large share of citations come from the top ~30% of a page.
- **Self-contained quotable blocks** - a sentence or stat that stands alone when
  lifted out of context (that's exactly what gets quoted).
- **FAQ sections, "X vs Y", "alternatives to X", and definition pages** - these
  match how people prompt. Be **honest and two-sided**: say who it's for and who
  it isn't. Engines (and readers) reward it.
- **Freshness**: keep visible `datePublished`/`dateModified` current - but
  **never fake-bump a date**; it's a people-first-content violation.
- **E-E-A-T**: real named authors with credentials, dated reviews, primary
  sources. Mandatory for YMYL (health, finance, legal).

## Layer C - Structure & schema

- Exactly one `<h1>`, clean H1→H2→H3, semantic HTML (`<main>`, `<article>`),
  250+ words of real text, descriptive alt text that states the conclusion.
- JSON-LD (`Organization`, `WebSite`, `Article`, `FAQPage`, `Product`,
  `BreadcrumbList`, `Person`). **Honest caveat:** schema reliably helps entity
  clarity and rich/shopping results; its direct *citation* lift is **contested**.
  Rule: markup must match visible text, and Product/shopping data is the one
  place schema is undisputed. Don't bet the project on schema alone.

## Layer D - llms.txt

Generate `/.well-known/llms.txt` (and `llms-full.txt`): a curated map of your
most important pages in Markdown. It is **cheap, harmless, and genuinely useful
for developer docs that coding agents/IDEs read.** It is **not** a proven
citation lever - no major consumer answer engine documents reading it, and
server logs show AI crawlers rarely fetch it. Ship it; never prioritize it over
Layer A, and never promise citations from it.

## Layer E - Off-site & entity authority

Engines cite the sources *they already trust*. Win those pages:

- The big citation sources skew to **Wikipedia** (reported ~48% of top ChatGPT
  citations), **Reddit** (reported ~47% for Perplexity), review sites,
  listicles, YouTube, Hacker News, Stack Overflow, Quora, Product Hunt.
- For each prompt you're losing, find which third-party page the engine cites
  and earn a place there with genuinely useful contribution.
- **Earned only.** No seeded Reddit posts, paid mention farms, parasite pages,
  or self-authored "best X" listicles ranking yourself #1 - spam policies catch
  these and they destroy trust. If asked to do this, decline and explain.
- Keep one consistent brand description across every profile (`sameAs`), and
  publish original data others will want to cite.

## Layer F - Measure it as a rate

- Build a **prompt set** from real buyer demand, mostly **unbranded** questions.
- Run each prompt **many times per engine**; report **mention rate / citation
  rate / share of voice vs a locked competitor set** - not one "rank."
- Inspect the **fan-out sub-queries** the engine actually runs, and which source
  it cited (often not you - that's your off-site target).
- **Baseline before, re-measure after** on the same prompts. Before crediting a
  change, check whether a model update landed in the window.
- Be skeptical of composite "GEO/AI-readiness scores" (invented weights, rarely
  validated against real citations). Useful as a checklist, not as truth.

## Common mistakes

- Optimizing content (Layer B) while a `robots.txt` rule or Cloudflare blocks the
  bot (Layer A). Always fix access first.
- Treating GEO like SEO and reporting a single rank for a non-deterministic system.
- Faking freshness dates, stuffing keywords, or seeding fake Reddit/review posts.
- Promising citation lift from llms.txt or schema. Ship them; don't oversell them.
- Measuring only branded prompts (you'll always "win" and learn nothing).

## Go live with Chronos (optional)

Everything above works with no account. To let your agent actually *run* a GEO
program on your own site:

- `geo_analyze_website` - crawl and assess a site for AI-visibility gaps.
- `geo_get_seo_geo_ideas` - pull prioritized, daily SEO/GEO improvement ideas
  for a connected repo.
- `geo_implement_seo_idea` - implement one as a **reviewable pull request**
  (never merges, never pushes to your default branch - you approve).
- `geo_research` - gather the sourced facts/stats that make content quotable.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `seo-fundamentals`, `content-marketing-engine`, `account-research`.

## Sources

Primary research and curated indexes this skill distills (all public):

- Princeton "GEO: Generative Engine Optimization" (KDD 2024) - the content-method lifts.
- C-SEO Bench (NeurIPS 2025) - the counter-evidence that many GEO rewrites are
  weak on current models; why Layer A/E beat Layer B/D.
- Curated resource index: `amplifying-ai/awesome-generative-engine-optimization`.
- Crawler/measurement discipline: `elmohq/elmo` (evidence-skeptical AEO skill).
- Method/schema references: `Auriti-Labs/geo-optimizer-skill`,
  `onvoyage-ai/gtm-engineer-skills`, `rubenmarcus/aeo.js`.

Numbers above are **as reported by these sources**; treat them as directional,
not guarantees - and measure your own lift (Layer F).
