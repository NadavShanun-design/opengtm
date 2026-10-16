---
name: lead-sourcing-and-enrichment
description: Use when building a target list - finding the right people at ICP-fit companies, getting verified contact data (email, phone, LinkedIn), and keeping the list clean. Covers the waterfall enrichment concept (multiple data sources in sequence, cheapest first), email finding and verification, catch-all handling, intent and signal data, list hygiene and suppression, and consent/compliance (GDPR, CAN-SPAM) at a practical level.
license: MIT
metadata:
  author: Chronos
  area: prospecting
  related: "ideal-customer-profile, account-research, email-deliverability, multichannel-sequences"
  frameworks: "waterfall enrichment, email verification, list hygiene"
---

# Lead sourcing & enrichment

## Overview

A campaign is only as good as its list. Sourcing turns an ICP (see
`ideal-customer-profile`) into real people with verified, deliverable contact
data - and keeps that list clean so you don't torch your sending domain on
bounces. Bad data is the #1 silent killer of outbound: it inflates bounce rates,
poisons reputation, and wastes personalization effort on people who'll never see it.

## Where leads come from

- **ICP-driven search** - filter a data provider by your firmographic/technographic
  criteria + titles/seniority (the search spec from your ICP).
- **Signal/trigger lists** - companies hiring for X, using tool Y, recently funded.
- **Your own orbit** - site visitors, CRM contacts, event lists, community members.
- **Referrals & warm paths** - mutual connections, existing customers' networks.

## Waterfall enrichment (the core concept)

No single data vendor has everyone, and quality/cost vary. **Waterfall = try
sources in sequence, cheapest/most-likely first, stop when you get a verified
hit.** You pay less and get higher coverage than any one source alone.

A sensible order:

1. **Free / cheap first** (pattern-guess + verify, your own CRM).
2. **Primary paid provider** (e.g. a broad B2B database).
3. **A cross-user / pooled database** if your tool has one (data others already verified).
4. **Premium / specialist** sources only for the gaps that remain.

> Chronos runs exactly this waterfall - **Apollo → a large cross-user pool → your
> connected CRM** - so you don't stack and pay for multiple subscriptions.

## Find and verify emails

- Prefer provider-verified emails; otherwise find-then-verify (SMTP/validation).
- **Catch-all domains** accept anything - mark them "risky," don't treat as verified;
  send to them cautiously or route to a lower-risk inbox.
- **Never send to unverified addresses in bulk** - that's how bounce rates spike
  (keep bounces < ~2-3%, see `email-deliverability` and `outbound-metrics-and-benchmarks`).

## Intent & signals

Layer intent on top of fit to prioritize: category research, pricing-page visits,
G2/review activity, job-change, funding. Fit says *who*; intent says *now*.

## List hygiene

- **Deduplicate** across campaigns and by company (don't hit five people at one
  account with the same thing the same day).
- **Suppress**: existing customers, open opportunities, competitors, unsubscribes,
  and anyone a teammate is already working.
- **Refresh**: data decays ~2-3%/month (people change jobs). Re-verify stale lists.

## Consent & compliance (practical, not legal advice)

- **CAN-SPAM (US):** accurate headers/subject, a real physical address, and a
  working opt-out honored promptly.
- **GDPR/EU & similar:** have a lawful basis (often legitimate interest for B2B),
  honor objections, and don't process data you're told to stop processing.
- **Everywhere:** don't scrape sources that prohibit it, don't buy sketchy lists,
  and always make opt-out easy. Respecting this also *protects deliverability.*

## Do / Don't

- **Do** verify before you send and keep bounces under ~2-3%.
- **Do** suppress customers/opps/competitors and dedupe by account.
- **Don't** blast a freshly-bought, unverified list on day one.
- **Don't** treat catch-all addresses as confirmed.

## Common mistakes

- One data source → low coverage and over-spend (use the waterfall).
- No suppression list → emailing current customers and open deals.
- Never re-verifying → a list that's 20% stale and bouncing.
- Chasing volume over fit → lots of contacts, few replies.

## Go live with Chronos (optional)

- `geo_search_contacts` - run your ICP as live filters to find real people.
- `geo_enrich_contact` - waterfall-enrich (Apollo → pool → CRM) and verify.
- `geo_list_hubspot_contacts` - pull from a connected CRM into the mix.
- `geo_create_mini_campaign_from_contacts` - turn a sourced set straight into a campaign.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `ideal-customer-profile`, `account-research`, `email-deliverability`.
