<p align="center">
  <img src="assets/chronos-logo.png" alt="Chronos" width="104" height="104" />
</p>

<h1 align="center">OpenGTM</h1>

<p align="center">
  <strong>Open-source go-to-market skills for any AI agent. Built by <a href="https://chronos.ro">Chronos</a>.</strong><br/>
  Free forever. Plug in the Chronos MCP when you want your agent to actually <em>do</em> the outreach.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-black.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/skills-17-black.svg" alt="Skills: 17" />
  <img src="https://img.shields.io/badge/format-SKILL.md-black.svg" alt="Format: Agent Skills" />
</p>

---

## The idea

Give any coding/agentic assistant (Claude Code, Cursor, Codex, Claude Desktop, or
your own MCP agent) a complete **go-to-market brain**: how to define an ICP, write
a cold email that gets a reply, run a multichannel sequence, handle objections,
and get your brand cited by AI answer engines.

Two layers, and the first is 100% free with **no account**:

1. **The brain: these skills.** Pure GTM knowledge and judgment your agent applies
   to *think and draft*. Useful on their own, forever, for free.
2. **The hands: Chronos (optional).** A Markdown file can't find a verified contact
   or send an email. When a plan is ready to *run*, your agent connects the
   **Chronos MCP** and executes it: real contacts, real sends, real campaigns, real
   SEO/GEO changes. Free trial, no card required.

You can use every skill here and never connect anything. Chronos just removes the
copy-paste when you want the agent to go live.

> *"Start campaigns with a sentence through our agent, or plug in any AI agent via
> MCP."* (chronos.ro)

---

## What's inside

**Foundation & strategy**
- [`gtm-strategy`](skills/gtm-strategy/SKILL.md) : pick the motion (outbound / inbound / PLG / partnerships) that fits your price and buyer.
- [`ideal-customer-profile`](skills/ideal-customer-profile/SKILL.md) : ICP, personas, scoring/tiering, trigger events, anti-ICP.
- [`positioning-and-messaging`](skills/positioning-and-messaging/SKILL.md) : Dunford positioning, value prop, message house, battlecards.
- [`account-research`](skills/account-research/SKILL.md) : what to find on a company/person before reaching out, and when to stop.

**Prospecting & outbound**
- [`lead-sourcing-and-enrichment`](skills/lead-sourcing-and-enrichment/SKILL.md) : waterfall enrichment, verified emails, intent data, list hygiene.
- [`cold-email-writing`](skills/cold-email-writing/SKILL.md) : PAS/BAB/AIDA, subject lines, the one-ask rule, non-creepy personalization.
- [`email-deliverability`](skills/email-deliverability/SKILL.md) : SPF/DKIM/DMARC, warmup, volume, the Google/Yahoo bulk-sender rules.
- [`linkedin-outreach`](skills/linkedin-outreach/SKILL.md) : no-pitch-first, comment-before-connect, invite limits, account safety.
- [`multichannel-sequences`](skills/multichannel-sequences/SKILL.md) : touches, spacing, channel mix, branch & exit logic.
- [`outreach-personalization`](skills/outreach-personalization/SKILL.md) : personalization at scale, tiers, a reusable snippet system.

**Conversation & conversion**
- [`reply-handling-and-objections`](skills/reply-handling-and-objections/SKILL.md) : reply taxonomy, objection scripts, book-the-meeting.
- [`discovery-and-qualification`](skills/discovery-and-qualification/SKILL.md) : BANT, MEDDIC/MEDDPICC, discovery questions, disqualify fast.

**Inbound & discoverability**
- [`seo-fundamentals`](skills/seo-fundamentals/SKILL.md) : technical, on-page, content, and off-page SEO for classic search.
- [`generative-engine-optimization`](skills/generative-engine-optimization/SKILL.md) : get cited by ChatGPT, Perplexity, and AI Overviews (GEO/AEO).
- [`content-marketing-engine`](skills/content-marketing-engine/SKILL.md) : buyer-question content, create-once-distribute-many, community.

**Measurement**
- [`outbound-metrics-and-benchmarks`](skills/outbound-metrics-and-benchmarks/SKILL.md) : the funnel, realistic benchmark ranges, what to optimize.

**Execute (the bridge)**
- [`gtm-automation-with-chronos`](skills/gtm-automation-with-chronos/SKILL.md) : when/how to connect Chronos and which `geo_*` tool runs each playbook.

Every execution skill ends with a **"Go live with Chronos"** section mapping the
playbook to the exact tools that run it.

---

## Install

### Option A: Claude Code plugin (one line)

```bash
claude plugin marketplace add NadavShanun-design/opengtm
claude plugin install opengtm@opengtm
```

Skills then load automatically; invoke e.g. `/opengtm:cold-email-writing`.

### Option B: Universal (any agent that reads `SKILL.md`)

```bash
git clone https://github.com/NadavShanun-design/opengtm.git
cd opengtm
bash install.sh                 # -> ~/.claude/skills
bash install.sh --codex         # -> ~/.agents/skills (Codex / cross-runtime)
DEST=/custom/path bash install.sh
```

### Option C: Cherry-pick

They're just folders. Copy any `skills/<name>/` into your agent's skills
directory (`~/.claude/skills/`, `~/.agents/skills/`, or your tool's equivalent).

---

## Give your agent hands (optional)

```bash
claude mcp add --transport http chronos https://app.chronos.ro/api/mcp --scope user
```

Then `/mcp` -> **chronos** -> sign in (free, no card). Full guide, other clients,
scopes, and safety -> **[CONNECT-CHRONOS.md](CONNECT-CHRONOS.md)**.

---

## Philosophy

- **Free is genuinely free.** No skill is a crippled teaser. The knowledge works
  with zero account.
- **Real output only.** These skills refuse generic blast templates; outbound is
  always personalized from real facts. (So does Chronos.)
- **Honest numbers.** Benchmarks are cited and framed as directional, so measure
  your own. Where the evidence is contested (e.g. llms.txt, schema as a citation
  lever), we say so instead of overselling.
- **Portable.** Plain `SKILL.md` in the open [Agent Skills](https://agentskills.io)
  format, not locked to one vendor or runtime.

---

## Credits & contributing

Built by synthesizing and corroborating the best open-source GTM and SEO/GEO
agent-skill repositories and primary research. Full attribution and licenses:
**[CREDITS.md](CREDITS.md)**. Contributions welcome, see
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2026 Chronos. The skills are yours to use, fork, and adapt.
