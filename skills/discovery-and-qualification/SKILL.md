---
name: discovery-and-qualification
description: Use when qualifying a lead or preparing for a discovery call - deciding whether a prospect is a real opportunity and what to ask. Covers qualification frameworks (BANT, MEDDIC / MEDDPICC), designing open discovery questions, the listening ratio, cost-of-inaction, multi-threading a buying committee, and disqualifying fast to protect your time.
license: MIT
metadata:
  author: Chronos
  area: conversation
  related: "reply-handling-and-objections, ideal-customer-profile, positioning-and-messaging"
  frameworks: "BANT, MEDDIC, MEDDPICC, cost-of-inaction"
---

# Discovery & qualification

## Overview

Not every reply is an opportunity. Qualification is how you decide where to spend
selling time, and discovery is how you learn enough to help (or walk away). The
best discovery feels like a useful conversation, not an interrogation - you're
diagnosing a problem, not reciting a checklist.

**Qualify early, disqualify fast.** A clean "no" now is worth more than a vague
"maybe" that eats three months.

## Frameworks (use as a lens, not a script)

**BANT** - quick first-pass qualifier:
- **Budget** - can they fund a solution (or create budget if the pain is big)?
- **Authority** - are they the decision-maker, or who is?
- **Need** - is there a real, felt problem you solve?
- **Timeline** - is there a reason to act in a defined window?

**MEDDIC / MEDDPICC** - for larger, multi-stakeholder deals:
- **Metrics** - the quantified impact they want.
- **Economic buyer** - who controls the money.
- **Decision criteria** - how they'll choose.
- **Decision process** - the actual steps/approvals to purchase.
- **Identify pain** - the real, costed problem.
- **Champion** - an internal advocate with influence.
- *(+ MEDDPICC adds **Paper process** - legal/procurement - and **Competition**.)*

Pick BANT for velocity/SMB, MEDDIC for complex/enterprise.

## Designing discovery questions

- **Open, not leading.** "Walk me through how you handle X today?" beats "You
  struggle with X, right?"
- **Pain-first, then impact.** Find the problem, then quantify its cost:
  "What does that cost you per month / in hours / in churn?" The cost of
  *inaction* is what justifies change.
- **Future-state.** "If this were solved, what changes for you?" - surfaces the
  metric that matters and the real motivation.
- **Process & people.** "Who else is affected / involved in a decision like this?"
  - uncovers the buying committee early.

## The listening ratio

In discovery, the prospect should talk far more than you - aim to listen most of
the call. Every minute you spend pitching is a minute you're not learning what
would make them buy. Ask, then shut up.

## Multi-thread

A single contact is a single point of failure. Map the committee (economic buyer,
users, blockers, champion) and build more than one relationship. Deals with one
thread stall when that person goes quiet or leaves.

## When to disqualify

- No real pain, or pain too small to fund a change.
- No path to the economic buyer and no willing champion.
- Timeline is "someday" with no trigger.
  → Exit gracefully to long-term nurture; don't force a dead deal forward.

## Do / Don't

- **Do** qualify early and disqualify fast to protect selling time.
- **Do** quantify the cost of the problem (and of inaction).
- **Don't** pitch during discovery - diagnose.
- **Don't** single-thread a committee deal.

## Common mistakes

- Treating the framework as a checklist to recite instead of a lens.
- Talking more than the prospect.
- Confirming a "need" you led them into (happy ears).
- Chasing an unqualified deal because the logo is exciting.

## Go live with Chronos (optional)

Chronos runs the *outreach* that creates these conversations; the discovery call
itself is yours. Where it helps:

- `geo_list_message_history` / `geo_get_message_thread` - read the full reply
  context and intent signals before the call, so you prep with real information.
- `geo_send_manual_message` - send the meeting confirmation / pre-call note.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `reply-handling-and-objections`, `ideal-customer-profile`, `positioning-and-messaging`.
