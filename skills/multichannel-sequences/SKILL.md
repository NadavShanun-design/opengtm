---
name: multichannel-sequences
description: Use when designing or auditing an outbound cadence - how many touches, how far apart, which channels (email, LinkedIn, phone, SMS), what each touch says, branching on behavior, and when to stop. Covers sequence architecture, channel roles, spacing, reply/branch logic, and exit rules. For the email copy itself see cold-email-writing; for LinkedIn mechanics see linkedin-outreach.
license: MIT
metadata:
  author: Chronos
  area: outbound
  related: "cold-email-writing, linkedin-outreach, email-deliverability, reply-handling-and-objections"
  frameworks: "multi-touch cadence, channel-role model, branch logic"
---

# Multichannel sequences

## Overview

A single cold touch is a coin flip; a well-built **sequence** is a system. The
job of a cadence is to earn attention across several relevant touches without
becoming noise, and to **stop the instant it should** (reply, meeting, or
disinterest). Sequence = *architecture*; copy (`cold-email-writing`) and channel
mechanics (`linkedin-outreach`) hang off it.

## Design the architecture, not just the emails

A touch has four decisions: **channel, timing, angle, and ask.** Vary the angle
across touches (new value each time - a different pain, a proof point, a
resource) rather than "just following up." Every touch must stand on its own; a
prospect may only ever see touch #3.

## A solid default cadence (tune to your motion)

| # | Day | Channel | Angle |
|---|---|---|---|
| 1 | 0 | Email | Trigger/relevance + one ask |
| 2 | 1-2 | LinkedIn | View profile; connect (no pitch) or comment on a post |
| 3 | 3-4 | Email (reply to #1) | New angle + proof point |
| 4 | 6-8 | LinkedIn DM / call | Short, human, reference prior touch |
| 5 | 10-12 | Email | Different pain or a resource (no ask fatigue) |
| 6 | 14-18 | Email | Polite break-up ("should I close this out?") |

That's a blended ~6-8 touch starter. Scale the total by deal size (across **all**
channels): roughly **8-10 for SMB** over ~2 weeks, **10-14 for mid-market**, and
**12-16 for enterprise** over 3-4 weeks. The follow-ups do the heavy lifting - one
large study found **steps 2-6 drove ~59% of all replies** (step 3 alone a third of
email-sourced meetings), so the first touch is rarely where the reply comes from.
Diminishing returns are real, but they come from *email fatigue*, not touches per
se: cap each **email** wave at ~3 and switch channels rather than send a 4th
near-identical email (4+ emails in a row sharply raises spam/unsubscribe rates).

## Channel roles

- **Email** - the workhorse: carries the detail and the ask.
- **LinkedIn** - warms and humanizes: profile view, genuine comment, soft connect.
  (Respect LinkedIn's invite limits - see `linkedin-outreach`.)
- **Phone/voicemail** - highest intent, best after a prospect has seen your name.
- **SMS** - only with prior relationship/opt-in; powerful but easy to overuse.

Sequence the channels so each one **references the last** - a connected story,
not four strangers shouting the same thing.

## Branch and exit logic

- **Reply (any)** → pull them out of automation immediately; a human (or
  `reply-handling-and-objections`) takes over. Never let a sequence keep firing
  at someone who answered.
- **Opened repeatedly, no reply** → a lighter "is this a priority?" nudge.
- **Hard no / unsubscribe** → stop, suppress, honor it instantly.
- **No engagement by last touch** → exit to a long-term nurture, not the trash.

## Pace for deliverability

Spread sends evenly across the day and across inboxes; never burst a whole list
at once. Warmup and daily caps still apply (see `email-deliverability`). An
even, paced send protects the domain that the whole sequence depends on.

## Do / Don't

- **Do** give every touch a fresh angle and make each one self-contained.
- **Do** stop on reply and honor opt-outs instantly.
- **Don't** send "just following up" with no new value.
- **Don't** run 15 touches - diminishing returns become brand damage.

## Common mistakes

- Same message re-sent as the "follow-up."
- Four channels that don't reference each other (feels like four spammers).
- A sequence that keeps firing after someone replied.
- Bursting the whole list on day 0 and torching deliverability.

## Go live with Chronos (optional)

- `geo_propose_campaign` - draft a full multi-channel cadence from an ICP + goal.
- `geo_create_campaign` / `geo_launch_campaign` - build and run it, paced automatically.
- `geo_compile_flow_spec` / `geo_launch_flow_from_spec` - express a custom branch/exit flow and launch it.
- `geo_update_campaign`, `geo_pause_campaign`, `geo_resume_campaign` - adjust a live cadence.

Chronos enforces reply/exit guards, pacing, and per-inbox caps so touches stay
even and stop on reply.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `cold-email-writing`, `linkedin-outreach`, `reply-handling-and-objections`.
