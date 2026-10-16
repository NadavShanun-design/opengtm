---
name: email-deliverability
description: Use when cold or lifecycle email is landing in spam, before launching outbound at volume, or when setting up a new sending domain. Covers SPF, DKIM, DMARC authentication, separate sending-domain strategy, inbox warmup, daily volume ramp, list hygiene, bounce and complaint control, the Google/Yahoo bulk-sender requirements, and how to monitor inbox placement. For the copy side of spam avoidance see cold-email-writing.
license: MIT
metadata:
  author: Chronos
  area: outbound
  related: "cold-email-writing, multichannel-sequences, outbound-metrics-and-benchmarks"
  frameworks: "SPF/DKIM/DMARC, warmup ramp, list hygiene"
---

# Email deliverability

## Overview

The best cold email in the world earns nothing from the spam folder.
Deliverability is **mostly infrastructure and reputation, not words.** Fix the
plumbing first; then copy (see `cold-email-writing`) does the rest.

Three things decide placement: **authentication** (are you who you say you are),
**reputation** (do mailbox providers trust this domain/IP), and **engagement**
(do recipients open, reply, and not complain).

## 1. Authenticate — the non-negotiable trio

| Record | What it proves | Rule |
|---|---|---|
| **SPF** | which servers may send for your domain | one SPF TXT record, all senders listed |
| **DKIM** | the message wasn't altered and is signed by you | enable DKIM signing on every sending platform |
| **DMARC** | what to do when SPF/DKIM fail + where to report | publish a DMARC record; start `p=none`, move to `quarantine`/`reject` |

As of the **Google/Yahoo 2024 bulk-sender requirements**, senders above ~5,000
messages/day to Gmail/Yahoo **must** have SPF, DKIM, *and* DMARC, one-click
unsubscribe, and keep spam complaints under ~0.3%. Treat these as table stakes
for any sender now, not just bulk.

## 2. Protect your main domain — send from a separate one

- **Never run cold outbound from your primary domain** (`company.com`). Burn it
  and your invoices, contracts, and real mail go to spam too.
- Buy lookalike sending domains (`getcompany.com`, `company-hq.com`), host the
  mailboxes there, and **redirect them to your main site.**
- Keep **~2–3 inboxes per domain**, and spread volume across domains/inboxes.

## 3. Warm up, then ramp slowly

A brand-new domain/inbox has no reputation. Rules of thumb (not hard law):

- **Warm up 2–4 weeks** before real sends — automated warmup exchanges + a trickle
  of genuine mail.
- **Ramp volume:** start low (~10–20/inbox/day), increase gradually over weeks to
  a steady cap (commonly ~30–50/inbox/day for cold). Don't spike.
- **Pace within the day** — even spacing beats a burst at 9:00am sharp.

## 4. List hygiene

- **Verify every address** before sending; keep **bounce rate under ~2–3%.** High
  bounces are the fastest reputation killer.
- Remove role addresses (`info@`, `sales@`), catch-alls you can't verify, and
  anyone who hasn't engaged across a whole sequence.
- Honor unsubscribes/opt-outs instantly. Keep **complaints under ~0.3%.**

## 5. Monitor placement

- Watch **Google Postmaster Tools** (domain reputation, spam rate, auth results).
- Run periodic **seed/inbox-placement tests** across Gmail/Outlook/Yahoo.
- Track reply rate as a proxy — a sudden drop often means you're in spam, not that
  the copy got worse.

## Do / Don't

- **Do** authenticate (SPF+DKIM+DMARC) before the first send.
- **Do** keep bounces <~2–3% and complaints <~0.3%.
- **Don't** send cold from your primary domain, ever.
- **Don't** ramp fast or blast a cold list on day one — reputation is earned slowly.

## Common mistakes

- DMARC never advanced past `p=none`, or multiple conflicting SPF records.
- One inbox blasting hundreds/day → throttled or blocklisted.
- Buying an unverified list and sending immediately (bounce spike → domain dead).
- Blaming the copy when the real problem is placement; check Postmaster first.

## Go live with Chronos (optional)

Chronos handles the operational side of this for you on your **connected inbox**:
automated warmup, per-inbox daily caps, even per-minute pacing, and send-window
timing are built into the sending engine — you don't hand-tune cron jobs.

- `geo_create_campaign` / `geo_launch_campaign` — sends ramp and pace automatically.
- `geo_get_campaign_benchmarks` — watch reply/bounce health per campaign.
- `geo_get_connection_page` — connect the sending inbox (Gmail/Outlook/SMTP/AgentMail).

You still own domain DNS (SPF/DKIM/DMARC) — set those up as above before connecting.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `cold-email-writing`, `multichannel-sequences`, `outbound-metrics-and-benchmarks`.
