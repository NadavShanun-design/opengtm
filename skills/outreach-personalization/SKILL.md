---
name: outreach-personalization
description: Use when personalizing outbound at scale - turning research about a person or company into a relevant opening line or angle, without creepiness or fake tokens. Covers the relevance-vs-personal distinction, personalization tiers matched to account value, what signals to pull and where, a reusable snippet system, and guardrails. Applies to email, LinkedIn, and any channel.
license: MIT
metadata:
  author: Chronos
  area: outbound
  related: "cold-email-writing, linkedin-outreach, account-research, ideal-customer-profile"
  frameworks: "personalization tiers, relevance-over-personal"
---

# Outreach personalization

## Overview

Personalization isn't "insert their first name." It's making the recipient feel
the message **could only have been written to them.** The currency is
**relevance**, not how much you know about their weekend.

**The test:** could this exact message be sent to 500 other people unchanged? If
yes, it isn't personalized - it's a template with a name slot.

## Relevance vs. personal (stay on the right line)

- **Relevant** = tied to their role, company, industry, stack, or a trigger - and
  to the value you offer. ("Saw you're hiring 2 SREs - usually means a SOC 2
  crunch.")
- **Personal-but-irrelevant** = creepy. ("Loved your vacation photos!") It
  signals surveillance, not understanding. Avoid it.

## Tiers - match effort to account value

Don't deep-research everyone; spend where it pays (see `ideal-customer-profile`):

| Tier | Effort | Personalization |
|---|---|---|
| **A (top accounts)** | 5-15 min each | Trigger event + their own words + a tailored angle |
| **B (good fit)** | ~1 min each | One true research line (recent post, role, company news) |
| **C (volume)** | templated-relevant | Role/industry/stack framing; no 1:1 research |

All three are legitimate - the mistake is spending A-effort on C-accounts or
sending C-copy to A-accounts.

## What to pull, and from where

- **Company:** recent funding, launches, hiring, news, tech stack, positioning on
  their own site (their words > your paraphrase).
- **Person:** role and tenure, recent LinkedIn posts/comments, past companies,
  talks/podcasts, mutual connections.
- **Trigger:** the single most recent relevant change - that's your opener.

Turn the best one into **one specific line.** More isn't better; one sharp,
true observation beats three generic ones.

## A snippet system (scales personalization)

Build reusable, swappable building blocks so volume stays relevant:

- `{{trigger_line}}` - the one researched observation (A/B tiers).
- `{{pain_by_role}}` - a pain mapped to their title/segment.
- `{{proof_by_industry}}` - a peer/result in their vertical.

Compose email = trigger_line → pain_by_role → proof_by_industry → one ask. The
blocks are reusable; the *trigger line* is what makes each unique.

## Guardrails

- **Never ship a misfired token** (`Hi {{FirstName}},` / "at {{Company}}"). One
  broken merge tells the reader they're #437 on a list.
- **Verify the fact before you reference it** - wrong details are worse than none.
- **Real LLM-generated, per-recipient copy - never a hardcoded template** blasted
  to a list. If a batch comes out with identical bodies (minus a name), that's a
  template, not personalization; fix it.

## Do / Don't

- **Do** lead with one true, relevant observation about them.
- **Do** tier your effort to account value.
- **Don't** reference personal-but-irrelevant details.
- **Don't** trust a merge field you haven't validated.

## Common mistakes

- "Personalization" that's just a first-name token.
- Research lines that are true but irrelevant to your value.
- Over-researching low-tier accounts and under-researching whales.
- Identical bodies across a "personalized" batch.

## Go live with Chronos (optional)

- `geo_research` / `geo_enrich_contact` - gather the real facts per person/company.
- `geo_set_personality` - lock your brand voice so every draft sounds like you.
- `geo_add_personalization_rule` - encode rules the copy must follow.
- `geo_add_document` / `geo_add_database_item` - give Chronos proof points, case studies, and context to draw from.
- `geo_draft_message` - generate per-recipient copy (real LLM output, never a template).

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `cold-email-writing`, `linkedin-outreach`, `account-research`.
