---
name: account-research
description: Use before reaching out to a specific company or person — what to find, where to find it, and how to turn it into one relevant angle. Covers company research (news, funding, hiring, tech stack, positioning) and person research (role, posts, background, triggers), the time-box per account tier, and how to avoid the creepy-but-irrelevant trap. Feeds outreach-personalization and cold-email-writing.
license: MIT
metadata:
  author: Chronos
  area: foundation
  related: "outreach-personalization, ideal-customer-profile, cold-email-writing, linkedin-outreach"
  frameworks: "company+person research, trigger-first, time-boxing"
---

# Account research

## Overview

Research is the raw material of relevance. The goal isn't a dossier — it's **one
true, specific angle** that makes a cold message land. The skill is knowing *what*
to look for and *when to stop*, so research doesn't eat the whole day.

**Trigger-first:** start by looking for a recent change (the "why now"), because
that's usually your opener. If you find one, you can often stop there.

## Company research — the checklist

- **What they do / positioning** — read it in *their* words on their own site.
- **Recent news** — funding, launches, M&A, expansion, awards, press.
- **Hiring** — open roles signal priorities and pain (10 SRE roles = scaling pain).
- **Tech stack** — tools they use (from job posts, BuiltWith-style data, their blog).
- **Size & segment** — headcount, revenue band, geography (ties to `ideal-customer-profile`).
- **Public pain** — reviews, support forums, outages, compliance deadlines.

## Person research — the checklist

- **Role & tenure** — are they the buyer, user, or gatekeeper? New in seat = open to change.
- **Recent activity** — LinkedIn posts/comments, talks, podcasts (their own words = best).
- **Background** — past companies, shared history, mutual connections.
- **What they signal caring about** — themes they post or engage on.

## Time-box by tier

Match effort to account value (see `ideal-customer-profile`):

- **A-tier:** 5–15 min — find a trigger + their own words + a tailored angle.
- **B-tier:** ~1 min — one solid research line (recent post, role, company news).
- **C-tier:** 0 min of 1:1 — use role/industry/stack relevance instead.

Over-researching a C-account is as wrong as under-researching a whale.

## Turn research into one angle

Pipe the single best finding into one opener line (handed to
`outreach-personalization` / `cold-email-writing`). Signal-to-noise matters: one
sharp, verified observation beats three generic facts. And **verify before you
reference** — a wrong detail is worse than no personalization.

## The creepy line

Relevant-to-their-work = good ("you're hiring SREs → scaling pain"). Personal-but-
irrelevant = creepy ("saw your kid's soccer post"). Stay on the work side.

## Do / Don't

- **Do** look for a trigger event first; it's usually the opener.
- **Do** time-box research to the account's tier.
- **Don't** reference anything you haven't verified.
- **Don't** mine personal details that have nothing to do with your value.

## Common mistakes

- Research rabbit-holes that produce a dossier and zero sent emails.
- Facts that are true but irrelevant to why they'd buy.
- Referencing a stale or wrong detail (they changed jobs last month).
- Equal effort on every account regardless of fit.

## Go live with Chronos (optional)

- `geo_research` — pull structured company/person facts and recent signals.
- `geo_analyze_website` — read a target's site for positioning and pain.
- `geo_linkedin_get_prospect_profile` / `geo_linkedin_list_prospect_posts` — their role and their own recent words.
- `geo_enrich_contact` — fill firmographic/technographic fields for scoring.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `outreach-personalization`, `ideal-customer-profile`, `cold-email-writing`.
