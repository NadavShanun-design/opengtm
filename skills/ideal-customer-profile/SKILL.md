---
name: ideal-customer-profile
description: Use when defining or sharpening an Ideal Customer Profile (ICP), buyer personas, account scoring and tiering, or trigger events before building a target list. Covers deriving the ICP from best existing customers, firmographic / technographic / behavioral / intent signals, a weighted scorecard, anti-ICP exclusions, and turning the ICP into concrete prospecting filters.
license: MIT
metadata:
  author: Chronos
  area: foundation
  related: "positioning-and-messaging, lead-sourcing-and-enrichment, account-research"
  frameworks: "ICP scorecard, A/B/C tiering, anti-ICP"
---

# Ideal Customer Profile (ICP)

## Overview

An **ICP describes the company** most likely to buy fast, succeed, and stay. A
**persona describes the people** inside it you talk to. TAM is the whole market;
the ICP is the sharp slice you actually go after. Get the ICP wrong and every
downstream dollar of sourcing, copy, and sending is aimed at the wrong target.

**Core move:** don't invent the ICP — *derive it from your best customers.*

## Derive it from reality

1. List your 10–20 best accounts (fast close, high retention, expansion, referrals).
2. Find what they share that your *worst* accounts don't.
3. Write the pattern as explicit, filterable criteria. If you can't filter on it,
   it's not yet an ICP attribute — make it concrete.

## Signal types

| Type | Examples |
|---|---|
| **Firmographic** | industry/vertical, employee count, revenue, geography, business model (B2B/B2C), funding stage |
| **Technographic** | tools in their stack, cloud provider, CMS, competitor product installed |
| **Behavioral** | hiring for a role, launched a product, opened an office, website activity |
| **Intent** | researching your category, visiting pricing pages, G2 category activity |

## Trigger events (why *now*)

The strongest outbound rides a recent change. Watch for: new funding, a new
executive in the buyer's seat, a relevant new hire wave, M&A, a product launch,
a public pain (outage, bad review, compliance deadline), or a competitor switch.
A trigger turns a cold email into a timely, relevant one.

## The weighted scorecard

Score each account so sourcing and sending go to the best first.

```
Score = Σ (signal_weight × signal_match)

Example weights (tune to your data):
  Employee count in 50–500 ....... 25
  Target industry ................ 20
  Uses complementary tool X ...... 15
  Hiring for relevant role ....... 15
  Intent signal in category ...... 15
  In target geography ............ 10

Tiers:  A = 80–100 (hit now)   B = 50–79 (nurture)   C = <50 (skip for now)
```

## Anti-ICP (who to exclude)

Just as important as who to target. Write exclusions explicitly: too small to
afford you, wrong region/regulatory regime, a segment that churns, students/
job-seekers, competitors, free-email-only domains, industries you can't serve.
Exclusions keep your list clean and your deliverability safe.

## Turn the ICP into prospecting filters

The deliverable isn't a paragraph — it's a **search spec**: title keywords +
seniority, headcount range, industry codes, geos, technologies, and the
trigger(s) to prioritize. That spec is what a sourcing tool (or Chronos) runs.

## Do / Don't

- **Do** base the ICP on retention and expansion, not just closed-won.
- **Do** keep it to 3–6 attributes you can actually filter on.
- **Don't** confuse "anyone who could use it" (TAM) with "who buys best" (ICP).
- **Don't** let the ICP go stale — re-derive it every quarter from new wins/churns.

## Common mistakes

- An ICP so broad it excludes no one (then every list is noise).
- Persona attributes (job title) with no company attributes, or vice versa.
- No anti-ICP, so junk and competitors flood the list.
- Scoring on vanity signals (brand you recognize) over predictive ones.

## Go live with Chronos (optional)

- `geo_analyze_website` — infer a first-draft ICP straight from the user's site.
- `geo_search_contacts` — run the ICP as live filters to pull real matching people.
- `geo_enrich_contact` — fill firmo/technographic fields to score accounts.
- `geo_get_database` / `geo_add_database_item` — store the ICP so every campaign reuses it.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `positioning-and-messaging`, `lead-sourcing-and-enrichment`, `account-research`.
