# Credits & sources

This repository is **original, synthesized content** — the `SKILL.md` files were
written for this project, not copied from other repos. The work was **informed
and corroborated** by surveying the best open-source GTM and SEO/GEO agent-skill
repositories and by primary research. This page credits all of them and records
their licenses.

Where a source's license is permissive (MIT / Apache-2.0 / CC0) we drew freely on
its *ideas and taxonomy*; where a repo had **no LICENSE file**, we took only
high-level conceptual inspiration and copied no text or code. If you own one of
these and want attribution changed, open an issue.

---

## Go-to-market agent-skill repositories surveyed

| Repository | License | What we learned from it |
|---|---|---|
| [LeadMagic/gtm-skills](https://github.com/LeadMagic/gtm-skills) | MIT | Cleanest category taxonomy and the richest frontmatter model (`related`, `frameworks`); the strategy/copy/deliverability/tools **split** we adopted. |
| [gtmagents/gtm-agents](https://github.com/gtmagents/gtm-agents) | Apache-2.0 | Breadth of the GTM surface and plugin packaging (sales/marketing/CS/RevOps + vertical kits). |
| [ericosiu/ai-marketing-skills](https://github.com/ericosiu/ai-marketing-skills) | MIT | Execution depth — ICP→sequence→infra flow and quality-scoring loops. |
| [onewave-ai/claude-skills](https://github.com/onewave-ai/claude-skills) | MIT | Standalone sales skills (personalization-at-scale, deal-closer, ICP deep-scan). |
| [OpenClaudia/openclaudia-skills](https://github.com/OpenClaudia/openclaudia-skills) | MIT | The **"optional keys, graceful degradation"** free-vs-paid model that inspired our free-knowledge + optional-Chronos design. |
| [impecablemee/gtm-mcp](https://github.com/impecablemee/gtm-mcp) | MIT *(declared in `pyproject.toml`; no LICENSE file — treated as inspiration only)* | The MCP "connect-to-send" reference: keep reasoning in the model, portable-markdown fallback. |
| [gtm-skills/gtm (Prospeda)](https://github.com/gtm-skills/gtm) | MIT core | Open-core structure and the scout/rep/closer agent-team framing. |
| [zubair-trabzada/ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude) | MIT | Slash-command marketing-skill ergonomics. |

## SEO / GEO agent-skill repositories surveyed

| Repository | License | What we learned from it |
|---|---|---|
| [onvoyage-ai/gtm-engineer-skills](https://github.com/onvoyage-ai/gtm-engineer-skills) | MIT | The audit→improve AEO/GEO split and framework-specific fix patterns. |
| [Auriti-Labs/geo-optimizer-skill](https://github.com/Auriti-Labs/geo-optimizer-skill) | MIT | The clearest write-up of the Princeton GEO methods and the crawler-tier distinctions. |
| [amplifying-ai/awesome-generative-engine-optimization](https://github.com/amplifying-ai/awesome-generative-engine-optimization) | CC0-1.0 *(README badge; no LICENSE file)* | Curated index of GEO research, platforms, and citation-pattern data. |
| [elmohq/elmo](https://github.com/elmohq/elmo) | MIT | The evidence-skeptical, **measurement-first** AEO view — visibility is a *rate*, and the "do not over-promise llms.txt/schema" discipline. |
| [cxcscmu/AutoGEO](https://github.com/cxcscmu/AutoGEO) | MIT | The insight that engine content-preferences are engine- and domain-specific. |
| [aaron-he-zhu/seo-geo-claude-skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills) | Apache-2.0 | A research→build→optimize→monitor taxonomy reference. |
| [mverab/eGEOagents](https://github.com/mverab/eGEOagents) | MIT | Multi-agent GEO orchestration with a claim-grounding validation layer. |
| [rubenmarcus/aeo.js](https://github.com/rubenmarcus/aeo.js) | MIT *(declared in README; no LICENSE file — treated as inspiration only)* | Concrete llms.txt / schema / markdown-twin generation patterns. |

---

## Research & data sources

Facts, frameworks, and benchmark ranges in these skills are attributed inline and
treated as **directional**. Primary and notable sources:

- **GEO:** Aggarwal, Murahari et al., *"GEO: Generative Engine Optimization"* (KDD 2024, [arXiv:2311.09735](https://arxiv.org/abs/2311.09735)); C-SEO Bench (NeurIPS 2025).
- **Deliverability (authoritative):** [Google email sender guidelines](https://support.google.com/mail/answer/81126); [Yahoo sender best practices](https://senders.yahooinc.com/best-practices/); [dmarc.org](https://dmarc.org/overview/).
- **Positioning:** April Dunford, *Obviously Awesome* ([aprildunford.com](https://www.aprildunford.com/post/a-quickstart-guide-to-positioning)); Strategyzer Value Proposition Canvas.
- **ICP / buying group:** HubSpot, ZoomInfo, Gartner (6–10-person buying group); Cognism trigger events.
- **Enrichment:** Clay (waterfall enrichment); Hunter (email-verification taxonomy); Bombora / 6sense (intent).
- **Benchmarks (directional):** Instantly, Hunter, lemlist (citing Litmus), sales.co, Cleverly, Woodpecker, Expandi, HeyReach, Belkins, Cognism, Pin.
- **SEO/GEO data:** Ahrefs, AirOps, Pew Research (AI-Overview click behavior), llmstxt.org.

Numbers were retrieved during research for this project; they reflect 2024–2026
reporting and should be re-validated against your own data.

---

## A note on scope

These are **knowledge skills**. The one thing they deliberately don't include is a
way to act — no scraping scripts, no send code, no data vendor keys. That's by
design: execution belongs to a connected, authenticated, rate-limited platform
([Chronos](https://chronos.ro)) that sends from *your* accounts with *your*
permission — see [CONNECT-CHRONOS.md](CONNECT-CHRONOS.md).
