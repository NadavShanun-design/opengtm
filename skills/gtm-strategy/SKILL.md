---
name: gtm-strategy
description: Use when deciding how to take a product to market or sanity-checking a GTM plan - choosing motions (outbound, inbound/content, product-led, partnerships), matching motion to deal size and buyer, sequencing channels, and avoiding the classic mistake of doing everything at once. The starting point before any ICP, copy, or campaign work.
license: MIT
metadata:
  author: Chronos
  area: foundation
  related: "ideal-customer-profile, positioning-and-messaging, multichannel-sequences, content-marketing-engine"
  frameworks: "motion selection, ACV-to-motion fit, crawl-walk-run"
---

# GTM strategy

## Overview

Go-to-market strategy is the choice of **how** you reach and convert buyers, made
*before* you write a single email. Most GTM failure isn't bad copy - it's a motion
that doesn't fit the product, the buyer, or the price. Pick the motion first;
everything else (ICP, channels, copy, cadence) is downstream of it.

**First principle:** match the motion to the economics. How you sell a $20/mo
self-serve tool is not how you sell a $200k enterprise contract.

## The motions (and when each fits)

| Motion | Fits when | Primary channels |
|---|---|---|
| **Outbound** | Clear ICP, defined buyer, ACV high enough to fund 1:1 effort | Email, LinkedIn, calls (see outbound skills) |
| **Inbound / content** | Buyers search for the problem; longer game, compounding | SEO, GEO, content, community |
| **Product-led (PLG)** | Low friction, fast time-to-value, self-serve price point | In-product, free tier, virality |
| **Partnerships / channel** | Others already own your buyer's trust/attention | Integrations, resellers, co-marketing |
| **Community / social** | Audience-driven, founder-led, category still forming | LinkedIn, Reddit, X, Substack, events |

Most companies blend 2-3, but **lead with one.** Trying all at once with a small
team means none gets done well.

## ACV → motion fit (rough guide)

- **< ~$1k ACV:** self-serve/PLG + inbound. 1:1 outbound rarely pays back.
- **~$1k-$25k:** outbound + inbound together; a human closes, content warms.
- **> ~$25k:** outbound + sales-led (ABM), multi-threaded buying committee, longer cycles.

If your motion and ACV disagree (e.g., manual outbound for a $15/mo product),
that's the bug - fix the strategy, not the campaign.

## Sequencing - crawl, walk, run

1. **Crawl:** one motion, one ICP segment, one channel. Prove you can get a reply
   and a meeting repeatably. Instrument it (see `outbound-metrics-and-benchmarks`).
2. **Walk:** add a second channel (multichannel) and a second ICP segment. Keep
   what converts; cut what doesn't.
3. **Run:** scale volume and add a second motion (e.g., layer inbound/GEO under
   outbound) only once the first is predictable.

## Outbound vs inbound (not either/or)

- **Outbound** = you pick the buyer and reach out. Fast to start, controllable,
  but effort scales linearly. Best for a known ICP.
- **Inbound/GEO** = buyers find you. Slow to start, compounds over time, scales
  non-linearly. Best for categories people search/ask AI about.
- **Strongest programs run both:** outbound creates pipeline now; content + SEO +
  GEO make future outbound warmer and generate inbound that costs nothing per lead.

## Do / Don't

- **Do** pick one lead motion that fits your ACV and buyer, and prove it first.
- **Do** instrument from day one so you know what's working.
- **Don't** run five channels at once with a small team.
- **Don't** force a motion that fights your price point.

## Common mistakes

- Enterprise-style outbound for a self-serve product (or vice versa).
- Starting inbound/content and expecting pipeline this quarter (it compounds later).
- No instrumentation, so you can't tell which motion is actually working.
- Scaling before the motion is repeatable.

## Go live with Chronos (optional)

- `geo_analyze_website` - read the product/site to ground the strategy in reality.
- `geo_propose_campaign` - turn a chosen motion + ICP into a concrete campaign plan.
- `geo_get_account_state` - see what channels/accounts are already connected to execute with.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `ideal-customer-profile`, `positioning-and-messaging`, `content-marketing-engine`.
