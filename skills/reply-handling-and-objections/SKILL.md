---
name: reply-handling-and-objections
description: Use when a prospect replies to outbound and you need to classify the reply and respond — positive, referral, not-now, not-interested, wrong-person, unsubscribe, out-of-office, or competitor. Covers a reply taxonomy, the booking-the-meeting mindset, handling common objections ("send me info", "no budget", "already have a tool", "not the right person"), and when to stop.
license: MIT
metadata:
  author: Chronos
  area: conversation
  related: "cold-email-writing, multichannel-sequences, discovery-and-qualification"
  frameworks: "reply taxonomy, objection handling, book-the-meeting"
---

# Reply handling & objections

## Overview

Getting a reply is the hard part — most outbound dies in silence. So treat every
reply as valuable, **respond fast (minutes-to-hours, not days)**, and remember
the goal of a cold conversation is usually **one next step: the meeting.** Not to
win the debate in the thread.

**First move on any reply:** pull the prospect out of the automated sequence. A
human conversation has started; the cadence must stop firing.

## Reply taxonomy → action

| Category | Signal | Action |
|---|---|---|
| **Positive / interested** | "tell me more", "sure, when?" | Propose 2 concrete times; book it. Don't over-sell. |
| **Soft yes / "send info"** | wants material, not a call yet | Send one tight thing + a soft time ask. Keep it moving. |
| **Not now / timing** | "circle back in Q3" | Agree, set a real reminder, exit to nurture — don't nag. |
| **Objection** | budget / tool / priority | Handle once (below), then re-ask for the meeting. |
| **Wrong person** | "not my area" | Ask for the right person by name — this is a referral, gold. |
| **Referral** | "talk to Dana" | Thank them, reach Dana, reference the intro. |
| **Not interested** | clear no | Acknowledge gracefully, offer a door for later, stop. |
| **Unsubscribe / angry** | "remove me" | Suppress instantly, apologize briefly, never contact again. |
| **Out-of-office** | auto-reply | Capture return date + any named alternate; re-queue politely. |

## Book-the-meeting mindset

When interest appears, **reduce friction to near zero**: offer two specific times
(or a link), keep it short, confirm, and get off email. The more you explain
before the call, the more reasons you give to say no. The call is where you sell.

## Handling the common objections

Pattern: **acknowledge → reframe briefly → re-ask for a small next step.** Once.

- **"Send me more info."** Often a polite brush-off. Send *one* relevant thing,
  then: "Happy to — and 10 minutes will save you reading all of it. Thursday?"
- **"No budget."** "Totally fair — most teams we help weren't budgeting for this
  until [trigger]. Worth a look so it's on your radar for next cycle?"
- **"We already use [competitor]."** "Makes sense — a lot of our customers
  switched from them because of [specific gap]. Worth a 10-min comparison?"
- **"Not a priority."** "Understood. Can I check back in [timeframe]? And if it's
  never relevant, just say so and I'll stop."
- **"Not the right person."** "No problem — who owns [area]? Happy to reach out
  directly." (A name here beats a grudging yes.)

Reframe **once.** If the no holds, respect it — a graceful exit protects the brand
and leaves a door open.

## When to stop

- Explicit no, unsubscribe, or "remove me" → stop immediately and suppress.
- Two handled objections with no movement → exit to long-term nurture.
- Any sign of annoyance → stop. The relationship is worth more than one sequence.

## Do / Don't

- **Do** reply fast, pull them from the sequence, and drive to one next step.
- **Do** treat "wrong person" as a referral opportunity.
- **Don't** argue an objection more than once.
- **Don't** keep the cadence running after a reply or ignore an opt-out.

## Common mistakes

- Slow replies that let interest cool.
- Pitching the whole product in-thread instead of booking the call.
- Sequence keeps auto-sending after the person replied.
- Treating "not interested" as a prompt to try harder — it burns goodwill.

## Go live with Chronos (optional)

- `geo_list_message_history` / `geo_get_message_thread` — read the full conversation context.
- `geo_reply_to_email_thread` — send a classified, on-brand reply in the thread.
- `geo_send_manual_message` — one-off human message on any connected channel.
- `geo_list_linkedin_dms` — triage LinkedIn replies the same way.

Chronos pulls a replied prospect out of automation and can draft the right
response per reply type — you approve the send.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `discovery-and-qualification`, `multichannel-sequences`, `cold-email-writing`.
