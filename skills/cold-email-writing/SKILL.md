---
name: cold-email-writing
description: Use when writing or auditing a cold outbound email — subject line, opener, body, and a single call-to-action — or a short cold-email sequence. Covers the one-ask principle, proven copy frameworks (PAS, BAB, AIDA), relevance-based personalization that isn't creepy, length, spam-trigger avoidance, and CTA design. For inbox/domain setup see email-deliverability; for cadence architecture see multichannel-sequences.
license: MIT
metadata:
  author: Chronos
  area: outbound
  related: "email-deliverability, multichannel-sequences, outreach-personalization, reply-handling-and-objections"
  frameworks: "PAS, BAB, AIDA, one-ask"
---

# Cold email writing

## Overview

A cold email earns a reply in ~5 seconds of attention from a stranger. It wins
by being **short, relevant, about them, and asking for exactly one easy thing.**
Clever is optional; relevant and clear is mandatory.

**The one-ask rule:** every email drives to a single CTA. Two asks = zero replies.

## Anatomy of one that works

1. **Subject (1–4 words, lowercase ok):** curiosity or relevance, never hype.
   Good: `question about {{company}} onboarding`. Bad: `🚀 Boost Revenue 300% Now!!!`
2. **Opener (1 line, about them):** a specific, true observation — a trigger
   event, a role change, something from their site/post. Not "Hope you're well."
3. **Body (2–4 lines):** connect their situation to a problem you solve, with a
   concrete proof point (a number, a peer, a result). No feature dump.
4. **CTA (1 line, low-friction):** an interest-check beats a calendar demand.
   "Worth a quick look?" / "Open to a 10-min chat next week?"
5. **Signature:** real name, real company, plain. (Chronos appends this after
   generation — don't hand-bake it into the body.)

Target **50–125 words.** If it needs scrolling, it's a blog post, not a cold email.

## Copy frameworks (pick one per email)

| Framework | Shape | Best for |
|---|---|---|
| **PAS** | Problem → Agitate → Solution | A pain the buyer already feels |
| **BAB** | Before → After → Bridge | Selling an outcome / transformation |
| **AIDA** | Attention → Interest → Desire → Action | Longer, more persuasive touches |

## Personalization that isn't creepy

Three tiers — match effort to account tier (see `ideal-customer-profile`):

- **Relevance (always):** industry/role/stack framing. Scales to everyone.
- **Research line (A-tier):** one true, specific observation about *them*.
- **Deep (top accounts):** tied to a trigger event or their own words.

Creepy = personal-but-irrelevant ("saw you ran a 10k Saturday!"). Relevant =
tied to their work and your value. Stay on the right side of that line.

## Spam-trigger avoidance (copy side)

Deliverability is mostly infrastructure (see `email-deliverability`), but copy
matters too: avoid ALL CAPS, exclamation!!!, "free", "guarantee", "act now",
money emoji, link shorteners, heavy HTML/images, and more than one link. Plain-
text-feeling email in a known thread-style lands better than a designed template.

## Example — before / after

**Before (template, 0 replies):**
> Subject: Revolutionize Your Sales Today!
> Hi there, We are a leading platform that helps companies like yours boost
> revenue by 300%. Can I book 30 minutes to walk you through our full suite?

**After (one-ask, relevant):**
> Subject: {{company}} + SOC 2
> Hi Dana — saw {{company}} is hiring two SREs; usually means the SOC 2 audit
> is looming. We cut evidence collection from ~6 weeks to ~1 for teams your size
> (e.g. Acme). Worth a quick look, or is this already handled?

## Do / Don't

- **Do** write to one person about their situation; send at most one link.
- **Do** make the CTA something answerable in one line.
- **Don't** open with yourself ("We are…"). Open with them.
- **Don't** reuse an identical body across a list — personalize the real lines.

## Common mistakes

- Two or more asks; the reader picks "none."
- A paragraph of features before any relevance to the reader.
- Fake personalization tokens that misfire (`Hi {{FirstName}},`).
- Writing great copy on a cold domain that lands in spam (fix infra first).

## Go live with Chronos (optional)

- `geo_draft_message` — generate per-recipient copy from real facts (never a template).
- `geo_schedule_emails` — queue the email/sequence to send from your connected inbox.
- `geo_set_personality` / `geo_add_personalization_rule` — keep every draft on-brand.
- `geo_reply_to_email_thread` — continue the thread when they respond.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `email-deliverability`, `multichannel-sequences`, `outreach-personalization`.
