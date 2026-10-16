---
name: outbound-metrics-and-benchmarks
description: Use when measuring an outbound program, setting goals, or judging whether a campaign is healthy — the funnel metrics (reply, positive-reply, meetings, opportunities), realistic benchmark ranges, LinkedIn acceptance and reply rates, deliverability guardrails, and which metric to actually optimize. Explains why open rate is unreliable post-Apple MPP and why denominators matter more than the headline number.
license: MIT
metadata:
  author: Chronos
  area: measurement
  related: "cold-email-writing, email-deliverability, multichannel-sequences, linkedin-outreach"
  frameworks: "outbound funnel, leading vs lagging, benchmark ranges"
---

# Outbound metrics & benchmarks

## Overview

Outbound is a funnel, and almost every argument about "good" numbers is really an
argument about **denominators.** Before trusting any benchmark, pin down two
things: *what it's divided by* and *whether auto-replies were stripped.* The same
"reply rate" is reported anywhere from ~0.45% to ~5% across reputable studies —
not because results differ that much, but because the math differs.

**Trust reply rate, positive-reply rate, and meetings booked. Treat open rate as
directional only** (see the Apple MPP note). Always state your denominator.

## The funnel

```
Sent
 └ (1 − bounce%) → Delivered
     └ reply rate → Replied
         └ positive share → Interested
             └ positive→meeting → Meetings booked
                 └ held & qualified → Opportunities
```

`Meetings ÷ Sent = (1 − bounce) × reply_rate × positive_share × meeting_conv`

## Benchmark ranges (as reported — directional, measure your own)

| Metric | Healthy | Great | Reported by |
|---|---|---|---|
| Bounce rate (ceiling) | < 2–3% | < 1.5% | Instantly 2026; Woodpecker 2026 |
| Spam complaint rate | < 0.10% | — (never hit 0.30%) | Google sender guidelines |
| Reply rate (replies ÷ sent, loose) | 3–5% | 10%+ (5.5%+ top quartile) | Instantly 2026 (3.43% avg); Hunter 2025 (4.1% avg) |
| Reply rate (unique **human** ÷ sent, strict) | 0.45–0.70% | — | Belkins / sales.co 2026 |
| Positive share of (human) replies | ~34% | 40–60% | sales.co 2026; Cleverly 2026 |
| Meetings booked ÷ sent | 0.5–1.5% (mid-market) | 1.0–2.5% (SMB) | Cleverly 2026 |
| Positive reply → meeting | 30–60% | 60%+ | Cleverly 2026 |
| LinkedIn connection acceptance | ~24–30% | 40%+ | Expandi/HeyReach 2026 |
| LinkedIn reply (per message sent) | ~10% | 15%+ | Expandi 2026 (10.4% avg) |
| LinkedIn reply (per accepted conn.) | ~22–25% | 33%+ | HeyReach 2026 |
| Multichannel lift (email+LinkedIn vs email) | ~2–4× reply | — | Pin 2026 (recruiting data) |
| Cold-call success (→ meeting) | ~2.3% | 6–11% (elite) | Cognism 2025 |

## Why open rate is broken (Apple MPP)

Apple's **Mail Privacy Protection** (iOS 15, 2021) pre-fetches the tracking pixel
at delivery, logging an "open" whether or not a human reads the mail. Apple Mail
is reported as **~65% of all tracked opens** (Litmus, 2026). So a high open rate
can hide a dead campaign. Use open rate **only** as a relative deliverability
tripwire against your own baseline — never as an A/B win condition or a KPI.

## What to optimize (and what not to)

1. **North star: meetings booked** (and opportunities) — the metric that maps to pipeline.
2. **Optimize: positive-reply rate, then reply rate** — the most trustworthy real-
   engagement signals post-MPP, and closest to meetings in the funnel.
3. **Do NOT optimize open rate** (inflated) or **raw volume** (burns the domain).
4. **Guardrails you drive *down*, not up:** bounce (< 2%) and spam complaints
   (< 0.10%). These are survival metrics — breach them and every downstream number
   silently zeroes.

**The leverage lesson:** fixing targeting + copy beats adding volume. A weak
campaign (3% reply, 30% positive, 30% book) needs ~9× more emails for the same
meetings as an optimized one (10%/50%/50%) — and the lower volume also protects
deliverability. Always tighten the list before scaling the send.

## Worked example — "how many emails for 10 meetings/month?"

Mid-of-road sourced inputs: delivered 97% × reply 5% × positive share 35% ×
positive→meeting 40% = **0.68% meetings ÷ sent** (consistent with Cleverly's
mid-market 0.5–1.5%). → `10 ÷ 0.0068 ≈ ~1,470 emails/month` (~70/business day).

## Leading vs lagging

- **Leading (daily/weekly):** bounce, spam-complaint, pacing, reply, **positive-
  reply**, LinkedIn acceptance, speed-to-first-reply.
- **Lagging (monthly/quarterly):** meetings booked/held, opportunities, pipeline,
  closed-won, cost per meeting.
- **Rule:** a leading metric rising without the lagging one following = a quality
  problem (replies that are all "not interested"). Watch *positive* reply, not raw.

## Per-campaign checklist (track with explicit denominators)

- [ ] Reply rate (÷ delivered) **with auto-replies stripped** (53% of replies are automated).
- [ ] Positive-reply rate and positive-share-of-replies.
- [ ] Bounce (alert ≥2%, halt ≥5%) and spam complaints (alert ≥0.10%).
- [ ] Meetings booked (÷ sent and ÷ positive reply); meetings held; opportunities.
- [ ] LinkedIn: acceptance rate; reply rate labeled per-sent vs per-accepted.
- [ ] Reply contribution by sequence step (~40% typically from follow-ups).
- [ ] Segment every metric by ICP segment and sending identity (no blended averages hiding a bad list).

## Do / Don't

- **Do** fix one internal definition of each metric and track the trend vs your baseline.
- **Do** judge campaigns on reply/positive-reply/meetings, not opens.
- **Don't** compare reply rates across vendors without normalizing denominators.
- **Don't** let bounce/complaints drift — pause sending before they poison the domain.

## Go live with Chronos (optional)

- `geo_get_campaign_benchmarks` — pull reply/positive/meeting health per campaign.
- `geo_list_campaigns` / `geo_get_account_state` — program-level rollup.
- `geo_get_credit_status` — usage and capacity.

Chronos measures send health **per campaign** (not a blended average that hides a
bad list) and guards bounce/complaint ceilings automatically.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

## Sources

Figures above are **as reported by** these public 2025–2026 studies — treat as
directional and measure your own funnel:

- Instantly 2026 Cold Email Benchmark Report (reply 3.43% avg; omits open rate).
- Hunter.io State of Cold Email 2025 (4.1% avg reply; 11M emails).
- lemlist 2026 (reply "where the truth lives"); Litmus 2026 via lemlist (Apple ~65% of opens).
- sales.co 2026 (1.29M emails; 53.7% of replies automated; 34% of human replies interested).
- Cleverly 2026 (meetings ÷ sent by segment; positive→meeting 30–60%).
- Expandi 2026 & HeyReach 2026 (LinkedIn acceptance/reply); Belkins 2025–26.
- Pin 2026 (multichannel lift, recruiting context); Cognism 2025 (cold calling).
- Google email sender guidelines (spam-rate thresholds).

**Honesty flags:** the popular "multichannel = +287%" and a hard "0.15–0.5%
opportunity rate" could not be traced to a credible primary — derive opportunity
rate from your own reply→meeting→opp chain instead.

See also: `email-deliverability`, `multichannel-sequences`, `linkedin-outreach`.
