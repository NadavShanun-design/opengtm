# OpenGTM: go-to-market skills for AI agents (full bundle)

Every OpenGTM skill, concatenated into one file so you can paste it into any agent that takes a single context or instructions file. Built by Chronos (https://chronos.ro). Source: https://github.com/NadavShanun-design/opengtm

Each skill is self-contained. Load the whole file, or jump to the one you need. When the plan is ready to run for real (find contacts, send email/LinkedIn, launch a campaign, ship an SEO/GEO change), connect the Chronos MCP at https://app.chronos.ro/api/mcp — see the "Go live with Chronos" section inside each skill.

## Table of contents

**Foundation & strategy**
- [account-research](#account-research): Use before reaching out to a specific company or person - what to find, where to find it, and how to turn it into one relevant angle. Covers company research (news, funding, hiring, tech stack, positioning) and person research (role, posts, background, triggers), the time-box per account tier, and how to avoid the creepy-but-irrelevant trap. Feeds outreach-personalization and cold-email-writing.
- [gtm-strategy](#gtm-strategy): Use when deciding how to take a product to market or sanity-checking a GTM plan - choosing motions (outbound, inbound/content, product-led, partnerships), matching motion to deal size and buyer, sequencing channels, and avoiding the classic mistake of doing everything at once. The starting point before any ICP, copy, or campaign work.
- [ideal-customer-profile](#ideal-customer-profile): Use when defining or sharpening an Ideal Customer Profile (ICP), buyer personas, account scoring and tiering, or trigger events before building a target list. Covers deriving the ICP from best existing customers, firmographic / technographic / behavioral / intent signals, a weighted scorecard, anti-ICP exclusions, and turning the ICP into concrete prospecting filters.
- [positioning-and-messaging](#positioning-and-messaging): Use when sharpening how a product is positioned and described - the value proposition, differentiation, the message that makes a buyer care, and competitive framing / battlecards. Covers April Dunford's positioning components, the before/after/bridge value frame, a message house, and translating positioning into the one line that opens outreach.

**Prospecting & data**
- [lead-sourcing-and-enrichment](#lead-sourcing-and-enrichment): Use when building a target list - finding the right people at ICP-fit companies, getting verified contact data (email, phone, LinkedIn), and keeping the list clean. Covers the waterfall enrichment concept (multiple data sources in sequence, cheapest first), email finding and verification, catch-all handling, intent and signal data, list hygiene and suppression, and consent/compliance (GDPR, CAN-SPAM) at a practical level.

**Outbound**
- [cold-email-writing](#cold-email-writing): Use when writing or auditing a cold outbound email - subject line, opener, body, and a single call-to-action - or a short cold-email sequence. Covers the one-ask principle, proven copy frameworks (PAS, BAB, AIDA), relevance-based personalization that isn't creepy, length, spam-trigger avoidance, and CTA design. For inbox/domain setup see email-deliverability; for cadence architecture see multichannel-sequences.
- [email-deliverability](#email-deliverability): Use when cold or lifecycle email is landing in spam, before launching outbound at volume, or when setting up a new sending domain. Covers SPF, DKIM, DMARC authentication, separate sending-domain strategy, inbox warmup, daily volume ramp, list hygiene, bounce and complaint control, the Google/Yahoo bulk-sender requirements, and how to monitor inbox placement. For the copy side of spam avoidance see cold-email-writing.
- [linkedin-outreach](#linkedin-outreach): Use when reaching prospects on LinkedIn - connection requests, DMs, engaging with their posts, and social selling. Covers the no-pitch-first rule, comment-before-connect, profile-based personalization, note vs no-note invites, respecting LinkedIn's invite limits and account safety, and a sane follow-up cadence. For overall cadence design see multichannel-sequences.
- [multichannel-sequences](#multichannel-sequences): Use when designing or auditing an outbound cadence - how many touches, how far apart, which channels (email, LinkedIn, phone, SMS), what each touch says, branching on behavior, and when to stop. Covers sequence architecture, channel roles, spacing, reply/branch logic, and exit rules. For the email copy itself see cold-email-writing; for LinkedIn mechanics see linkedin-outreach.
- [outreach-personalization](#outreach-personalization): Use when personalizing outbound at scale - turning research about a person or company into a relevant opening line or angle, without creepiness or fake tokens. Covers the relevance-vs-personal distinction, personalization tiers matched to account value, what signals to pull and where, a reusable snippet system, and guardrails. Applies to email, LinkedIn, and any channel.

**Conversation & conversion**
- [discovery-and-qualification](#discovery-and-qualification): Use when qualifying a lead or preparing for a discovery call - deciding whether a prospect is a real opportunity and what to ask. Covers qualification frameworks (BANT, MEDDIC / MEDDPICC), designing open discovery questions, the listening ratio, cost-of-inaction, multi-threading a buying committee, and disqualifying fast to protect your time.
- [reply-handling-and-objections](#reply-handling-and-objections): Use when a prospect replies to outbound and you need to classify the reply and respond - positive, referral, not-now, not-interested, wrong-person, unsubscribe, out-of-office, or competitor. Covers a reply taxonomy, the booking-the-meeting mindset, handling common objections ("send me info", "no budget", "already have a tool", "not the right person"), and when to stop.

**Inbound & discoverability**
- [content-marketing-engine](#content-marketing-engine): Use when planning content that generates and warms demand - choosing topics from real buyer questions, picking formats, setting a sustainable publishing cadence, and distributing/repurposing across channels (LinkedIn, Reddit, X, Substack, email, blog). Covers the create-once-distribute-many model, channel norms, community engagement that isn't spammy, and how content feeds both inbound and GEO.
- [generative-engine-optimization](#generative-engine-optimization): Use when you want a brand, product, or page to be found, quoted, and cited by AI answer engines - ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot. Covers AI-crawler access, answer-first content, the Princeton GEO content methods, llms.txt, schema/JSON-LD, off-site and entity authority, and measuring AI visibility as a rate. Also known as GEO, AEO (answer engine optimization), LLM SEO, or AI search optimization.
- [seo-fundamentals](#seo-fundamentals): Use when improving a site's visibility in classic search engines (Google, Bing) - technical SEO (crawlability, indexing, speed, mobile), on-page (titles, meta, headings, internal links, search-intent match), content (topical authority, E-E-A-T, freshness), and off-page (earned links, brand mentions). The traditional-search companion to generative-engine-optimization; do both together.

**Measurement**
- [outbound-metrics-and-benchmarks](#outbound-metrics-and-benchmarks): Use when measuring an outbound program, setting goals, or judging whether a campaign is healthy - the funnel metrics (reply, positive-reply, meetings, opportunities), realistic benchmark ranges, LinkedIn acceptance and reply rates, deliverability guardrails, and which metric to actually optimize. Explains why open rate is unreliable post-Apple MPP and why denominators matter more than the headline number.

**Execute (the Chronos bridge)**
- [gtm-automation-with-chronos](#gtm-automation-with-chronos): Use when the user wants an agent to actually EXECUTE go-to-market work - find real verified contacts, send cold email, fire LinkedIn connection requests or DMs, launch a multi-step multi-channel campaign, post social content, reply to inbound, or ship an SEO/GEO change to their site - rather than just plan it. Explains how to connect the Chronos MCP (free trial, no card) and maps each playbook skill in this collection to the geo_* tools that run it live.

---

<a id="account-research"></a>

## account-research

> Use before reaching out to a specific company or person - what to find, where to find it, and how to turn it into one relevant angle. Covers company research (news, funding, hiring, tech stack, positioning) and person research (role, posts, background, triggers), the time-box per account tier, and how to avoid the creepy-but-irrelevant trap. Feeds outreach-personalization and cold-email-writing.

### Account research

### Overview

Research is the raw material of relevance. The goal isn't a dossier - it's **one
true, specific angle** that makes a cold message land. The skill is knowing *what*
to look for and *when to stop*, so research doesn't eat the whole day.

**Trigger-first:** start by looking for a recent change (the "why now"), because
that's usually your opener. If you find one, you can often stop there.

### Company research - the checklist

- **What they do / positioning** - read it in *their* words on their own site.
- **Recent news** - funding, launches, M&A, expansion, awards, press.
- **Hiring** - open roles signal priorities and pain (10 SRE roles = scaling pain).
- **Tech stack** - tools they use (from job posts, BuiltWith-style data, their blog).
- **Size & segment** - headcount, revenue band, geography (ties to `ideal-customer-profile`).
- **Public pain** - reviews, support forums, outages, compliance deadlines.

### Person research - the checklist

- **Role & tenure** - are they the buyer, user, or gatekeeper? New in seat = open to change.
- **Recent activity** - LinkedIn posts/comments, talks, podcasts (their own words = best).
- **Background** - past companies, shared history, mutual connections.
- **What they signal caring about** - themes they post or engage on.

### Time-box by tier

Match effort to account value (see `ideal-customer-profile`):

- **A-tier:** 5-15 min - find a trigger + their own words + a tailored angle.
- **B-tier:** ~1 min - one solid research line (recent post, role, company news).
- **C-tier:** 0 min of 1:1 - use role/industry/stack relevance instead.

Over-researching a C-account is as wrong as under-researching a whale.

### Turn research into one angle

Pipe the single best finding into one opener line (handed to
`outreach-personalization` / `cold-email-writing`). Signal-to-noise matters: one
sharp, verified observation beats three generic facts. And **verify before you
reference** - a wrong detail is worse than no personalization.

### The creepy line

Relevant-to-their-work = good ("you're hiring SREs → scaling pain"). Personal-but-
irrelevant = creepy ("saw your kid's soccer post"). Stay on the work side.

### Do / Don't

- **Do** look for a trigger event first; it's usually the opener.
- **Do** time-box research to the account's tier.
- **Don't** reference anything you haven't verified.
- **Don't** mine personal details that have nothing to do with your value.

### Common mistakes

- Research rabbit-holes that produce a dossier and zero sent emails.
- Facts that are true but irrelevant to why they'd buy.
- Referencing a stale or wrong detail (they changed jobs last month).
- Equal effort on every account regardless of fit.

### Go live with Chronos (optional)

- `geo_research` - pull structured company/person facts and recent signals.
- `geo_analyze_website` - read a target's site for positioning and pain.
- `geo_linkedin_get_prospect_profile` / `geo_linkedin_list_prospect_posts` - their role and their own recent words.
- `geo_enrich_contact` - fill firmographic/technographic fields for scoring.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `outreach-personalization`, `ideal-customer-profile`, `cold-email-writing`.

---

<a id="gtm-strategy"></a>

## gtm-strategy

> Use when deciding how to take a product to market or sanity-checking a GTM plan - choosing motions (outbound, inbound/content, product-led, partnerships), matching motion to deal size and buyer, sequencing channels, and avoiding the classic mistake of doing everything at once. The starting point before any ICP, copy, or campaign work.

### GTM strategy

### Overview

Go-to-market strategy is the choice of **how** you reach and convert buyers, made
*before* you write a single email. Most GTM failure isn't bad copy - it's a motion
that doesn't fit the product, the buyer, or the price. Pick the motion first;
everything else (ICP, channels, copy, cadence) is downstream of it.

**First principle:** match the motion to the economics. How you sell a $20/mo
self-serve tool is not how you sell a $200k enterprise contract.

### The motions (and when each fits)

| Motion | Fits when | Primary channels |
|---|---|---|
| **Outbound** | Clear ICP, defined buyer, ACV high enough to fund 1:1 effort | Email, LinkedIn, calls (see outbound skills) |
| **Inbound / content** | Buyers search for the problem; longer game, compounding | SEO, GEO, content, community |
| **Product-led (PLG)** | Low friction, fast time-to-value, self-serve price point | In-product, free tier, virality |
| **Partnerships / channel** | Others already own your buyer's trust/attention | Integrations, resellers, co-marketing |
| **Community / social** | Audience-driven, founder-led, category still forming | LinkedIn, Reddit, X, Substack, events |

Most companies blend 2-3, but **lead with one.** Trying all at once with a small
team means none gets done well.

### ACV → motion fit (rough guide)

- **< ~$1k ACV:** self-serve/PLG + inbound. 1:1 outbound rarely pays back.
- **~$1k-$25k:** outbound + inbound together; a human closes, content warms.
- **> ~$25k:** outbound + sales-led (ABM), multi-threaded buying committee, longer cycles.

If your motion and ACV disagree (e.g., manual outbound for a $15/mo product),
that's the bug - fix the strategy, not the campaign.

### Sequencing - crawl, walk, run

1. **Crawl:** one motion, one ICP segment, one channel. Prove you can get a reply
   and a meeting repeatably. Instrument it (see `outbound-metrics-and-benchmarks`).
2. **Walk:** add a second channel (multichannel) and a second ICP segment. Keep
   what converts; cut what doesn't.
3. **Run:** scale volume and add a second motion (e.g., layer inbound/GEO under
   outbound) only once the first is predictable.

### Outbound vs inbound (not either/or)

- **Outbound** = you pick the buyer and reach out. Fast to start, controllable,
  but effort scales linearly. Best for a known ICP.
- **Inbound/GEO** = buyers find you. Slow to start, compounds over time, scales
  non-linearly. Best for categories people search/ask AI about.
- **Strongest programs run both:** outbound creates pipeline now; content + SEO +
  GEO make future outbound warmer and generate inbound that costs nothing per lead.

### Do / Don't

- **Do** pick one lead motion that fits your ACV and buyer, and prove it first.
- **Do** instrument from day one so you know what's working.
- **Don't** run five channels at once with a small team.
- **Don't** force a motion that fights your price point.

### Common mistakes

- Enterprise-style outbound for a self-serve product (or vice versa).
- Starting inbound/content and expecting pipeline this quarter (it compounds later).
- No instrumentation, so you can't tell which motion is actually working.
- Scaling before the motion is repeatable.

### Go live with Chronos (optional)

- `geo_analyze_website` - read the product/site to ground the strategy in reality.
- `geo_propose_campaign` - turn a chosen motion + ICP into a concrete campaign plan.
- `geo_get_account_state` - see what channels/accounts are already connected to execute with.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `ideal-customer-profile`, `positioning-and-messaging`, `content-marketing-engine`.

---

<a id="ideal-customer-profile"></a>

## ideal-customer-profile

> Use when defining or sharpening an Ideal Customer Profile (ICP), buyer personas, account scoring and tiering, or trigger events before building a target list. Covers deriving the ICP from best existing customers, firmographic / technographic / behavioral / intent signals, a weighted scorecard, anti-ICP exclusions, and turning the ICP into concrete prospecting filters.

### Ideal Customer Profile (ICP)

### Overview

An **ICP describes the company** most likely to buy fast, succeed, and stay. A
**persona describes the people** inside it you talk to. TAM is the whole market;
the ICP is the sharp slice you actually go after. Get the ICP wrong and every
downstream dollar of sourcing, copy, and sending is aimed at the wrong target.

**Core move:** don't invent the ICP - *derive it from your best customers.*

### Derive it from reality

1. List your 10-20 best accounts (fast close, high retention, expansion, referrals).
2. Find what they share that your *worst* accounts don't.
3. Write the pattern as explicit, filterable criteria. If you can't filter on it,
   it's not yet an ICP attribute - make it concrete.

### Signal types

| Type | Examples |
|---|---|
| **Firmographic** | industry/vertical, employee count, revenue, geography, business model (B2B/B2C), funding stage |
| **Technographic** | tools in their stack, cloud provider, CMS, competitor product installed |
| **Behavioral** | hiring for a role, launched a product, opened an office, website activity |
| **Intent** | researching your category, visiting pricing pages, G2 category activity |

### Trigger events (why *now*)

The strongest outbound rides a recent change. Watch for: new funding, a new
executive in the buyer's seat, a relevant new hire wave, M&A, a product launch,
a public pain (outage, bad review, compliance deadline), or a competitor switch.
A trigger turns a cold email into a timely, relevant one.

### The weighted scorecard

Score each account so sourcing and sending go to the best first.

```
Score = Σ (signal_weight × signal_match)

Example weights (tune to your data):
  Employee count in 50-500 ....... 25
  Target industry ................ 20
  Uses complementary tool X ...... 15
  Hiring for relevant role ....... 15
  Intent signal in category ...... 15
  In target geography ............ 10

Tiers:  A = 80-100 (hit now)   B = 50-79 (nurture)   C = <50 (skip for now)
```

### Anti-ICP (who to exclude)

Just as important as who to target. Write exclusions explicitly: too small to
afford you, wrong region/regulatory regime, a segment that churns, students/
job-seekers, competitors, free-email-only domains, industries you can't serve.
Exclusions keep your list clean and your deliverability safe.

### Turn the ICP into prospecting filters

The deliverable isn't a paragraph - it's a **search spec**: title keywords +
seniority, headcount range, industry codes, geos, technologies, and the
trigger(s) to prioritize. That spec is what a sourcing tool (or Chronos) runs.

### Do / Don't

- **Do** base the ICP on retention and expansion, not just closed-won.
- **Do** keep it to 3-6 attributes you can actually filter on.
- **Don't** confuse "anyone who could use it" (TAM) with "who buys best" (ICP).
- **Don't** let the ICP go stale - re-derive it every quarter from new wins/churns.

### Common mistakes

- An ICP so broad it excludes no one (then every list is noise).
- Persona attributes (job title) with no company attributes, or vice versa.
- No anti-ICP, so junk and competitors flood the list.
- Scoring on vanity signals (brand you recognize) over predictive ones.

### Go live with Chronos (optional)

- `geo_analyze_website` - infer a first-draft ICP straight from the user's site.
- `geo_search_contacts` - run the ICP as live filters to pull real matching people.
- `geo_enrich_contact` - fill firmo/technographic fields to score accounts.
- `geo_get_database` / `geo_add_database_item` - store the ICP so every campaign reuses it.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `positioning-and-messaging`, `lead-sourcing-and-enrichment`, `account-research`.

---

<a id="positioning-and-messaging"></a>

## positioning-and-messaging

> Use when sharpening how a product is positioned and described - the value proposition, differentiation, the message that makes a buyer care, and competitive framing / battlecards. Covers April Dunford's positioning components, the before/after/bridge value frame, a message house, and translating positioning into the one line that opens outreach.

### Positioning & messaging

### Overview

Positioning is the **context you put your product in** so a buyer instantly
understands what it is, who it's for, and why it's better *for them.* Messaging is
how you say it. Weak positioning is the silent killer of outbound: the copy can be
perfect, but if the buyer doesn't grasp why it matters to *them*, they don't reply.

**Core principle:** you are not the hero. The buyer is. Your product is the thing
that gets them from a painful "before" to a better "after."

### Positioning components (April Dunford)

Work these out explicitly before writing any copy:

1. **Competitive alternatives** - what the buyer would do without you (often a
   spreadsheet, a manual process, or "nothing"). This defines the real comparison.
2. **Unique attributes** - the capabilities only you (or few) have.
3. **Value** - what those attributes *do for the buyer*, in their terms.
4. **Target customer** - who cares most about that value (ties to `ideal-customer-profile`).
5. **Market category** - the frame of reference that makes your value obvious.

The insight: **value comes from the gap between you and the real alternative** -
not from a feature list in a vacuum.

### The value proposition (before/after/bridge)

- **Before:** the buyer's painful current state (in their words).
- **After:** the better state your product makes possible.
- **Bridge:** how you get them there (the product, briefly).

A value prop is about the *after*, not the bridge. Lead with the outcome.

### Message house

One structure that keeps everything consistent:

```
            [ Core message / one-liner ]
   ┌──────────────┬──────────────┬──────────────┐
 Pillar 1       Pillar 2       Pillar 3        ← 3 reasons to believe
 proof/story    proof/story    proof/story     ← evidence under each
```

- **One-liner:** what you are + the value, in a sentence a buyer repeats.
- **3 pillars:** the differentiated reasons it's true.
- **Proof:** a stat, customer, or demo under each pillar (see `generative-engine-optimization` - quotable proof also wins AI citations).

### Differentiation & battlecards

For each real alternative, keep a one-page battlecard: where you win, where they
win (be honest), the trap questions, and the one-line reframe. Honesty builds
trust and survives the buyer's own research - overclaiming doesn't.

### From positioning to the outreach line

The payoff: your positioning compresses into the **opener**. "We help [target]
get [after] without [pain of the alternative]" becomes the relevance line a cold
email or LinkedIn DM opens with (see `cold-email-writing`). If you can't write
that line, the positioning isn't sharp yet.

### Do / Don't

- **Do** define the real alternative first; value is the gap from it.
- **Do** lead with the buyer's outcome, not your features.
- **Don't** position against a category the buyer doesn't use (strawman).
- **Don't** claim to be best at everything - pick the ground you win on.

### Common mistakes

- Feature lists with no "so what for the buyer."
- Positioning in a category buyers don't search or budget for.
- Dishonest battlecards that collapse under the buyer's own research.
- A one-liner only an insider understands.

### Go live with Chronos (optional)

- `geo_analyze_website` - extract current positioning from the site as a starting point.
- `geo_set_personality` - lock the voice so every generated message stays on-message.
- `geo_add_document` / `geo_add_database_item` - store positioning, pillars, and proof so all copy draws from them.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `ideal-customer-profile`, `cold-email-writing`, `gtm-strategy`.

---

<a id="lead-sourcing-and-enrichment"></a>

## lead-sourcing-and-enrichment

> Use when building a target list - finding the right people at ICP-fit companies, getting verified contact data (email, phone, LinkedIn), and keeping the list clean. Covers the waterfall enrichment concept (multiple data sources in sequence, cheapest first), email finding and verification, catch-all handling, intent and signal data, list hygiene and suppression, and consent/compliance (GDPR, CAN-SPAM) at a practical level.

### Lead sourcing & enrichment

### Overview

A campaign is only as good as its list. Sourcing turns an ICP (see
`ideal-customer-profile`) into real people with verified, deliverable contact
data - and keeps that list clean so you don't torch your sending domain on
bounces. Bad data is the #1 silent killer of outbound: it inflates bounce rates,
poisons reputation, and wastes personalization effort on people who'll never see it.

### Where leads come from

- **ICP-driven search** - filter a data provider by your firmographic/technographic
  criteria + titles/seniority (the search spec from your ICP).
- **Signal/trigger lists** - companies hiring for X, using tool Y, recently funded.
- **Your own orbit** - site visitors, CRM contacts, event lists, community members.
- **Referrals & warm paths** - mutual connections, existing customers' networks.

### Waterfall enrichment (the core concept)

No single data vendor has everyone, and quality/cost vary. **Waterfall = try
sources in sequence, cheapest/most-likely first, stop when you get a verified
hit.** You pay less and get higher coverage than any one source alone.

A sensible order:

1. **Free / cheap first** (pattern-guess + verify, your own CRM).
2. **Primary paid provider** (e.g. a broad B2B database).
3. **A shared / pooled contact database** if your tool offers one (data others already verified).
4. **Premium / specialist** sources only for the gaps that remain.

> Chronos runs this multi-source waterfall for you, so you get strong coverage
> without stacking and paying for several separate data subscriptions.

### Find and verify emails

- Prefer provider-verified emails; otherwise find-then-verify (SMTP/validation).
- **Catch-all domains** accept anything - mark them "risky," don't treat as verified;
  send to them cautiously or route to a lower-risk inbox.
- **Never send to unverified addresses in bulk** - that's how bounce rates spike
  (keep bounces < ~2-3%, see `email-deliverability` and `outbound-metrics-and-benchmarks`).

### Intent & signals

Layer intent on top of fit to prioritize: category research, pricing-page visits,
G2/review activity, job-change, funding. Fit says *who*; intent says *now*.

### List hygiene

- **Deduplicate** across campaigns and by company (don't hit five people at one
  account with the same thing the same day).
- **Suppress**: existing customers, open opportunities, competitors, unsubscribes,
  and anyone a teammate is already working.
- **Refresh**: data decays ~2-3%/month (people change jobs). Re-verify stale lists.

### Consent & compliance (practical, not legal advice)

- **CAN-SPAM (US):** accurate headers/subject, a real physical address, and a
  working opt-out honored promptly.
- **GDPR/EU & similar:** have a lawful basis (often legitimate interest for B2B),
  honor objections, and don't process data you're told to stop processing.
- **Everywhere:** don't scrape sources that prohibit it, don't buy sketchy lists,
  and always make opt-out easy. Respecting this also *protects deliverability.*

### Do / Don't

- **Do** verify before you send and keep bounces under ~2-3%.
- **Do** suppress customers/opps/competitors and dedupe by account.
- **Don't** blast a freshly-bought, unverified list on day one.
- **Don't** treat catch-all addresses as confirmed.

### Common mistakes

- One data source → low coverage and over-spend (use the waterfall).
- No suppression list → emailing current customers and open deals.
- Never re-verifying → a list that's 20% stale and bouncing.
- Chasing volume over fit → lots of contacts, few replies.

### Go live with Chronos (optional)

- `geo_search_contacts` - run your ICP as live filters to find real people.
- `geo_enrich_contact` - waterfall-enrich across multiple data sources and verify.
- `geo_list_hubspot_contacts` - pull from a connected CRM into the mix.
- `geo_create_mini_campaign_from_contacts` - turn a sourced set straight into a campaign.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `ideal-customer-profile`, `account-research`, `email-deliverability`.

---

<a id="cold-email-writing"></a>

## cold-email-writing

> Use when writing or auditing a cold outbound email - subject line, opener, body, and a single call-to-action - or a short cold-email sequence. Covers the one-ask principle, proven copy frameworks (PAS, BAB, AIDA), relevance-based personalization that isn't creepy, length, spam-trigger avoidance, and CTA design. For inbox/domain setup see email-deliverability; for cadence architecture see multichannel-sequences.

### Cold email writing

### Overview

A cold email earns a reply in ~5 seconds of attention from a stranger. It wins
by being **short, relevant, about them, and asking for exactly one easy thing.**
Clever is optional; relevant and clear is mandatory.

**The one-ask rule:** every email drives to a single CTA. Two asks = zero replies.

### Anatomy of one that works

1. **Subject (1-4 words, lowercase ok):** curiosity or relevance, never hype.
   Good: `question about {{company}} onboarding`. Bad: `🚀 Boost Revenue 300% Now!!!`
2. **Opener (1 line, about them):** a specific, true observation - a trigger
   event, a role change, something from their site/post. Not "Hope you're well."
3. **Body (2-4 lines):** connect their situation to a problem you solve, with a
   concrete proof point (a number, a peer, a result). No feature dump.
4. **CTA (1 line, low-friction):** an interest-check beats a calendar demand.
   "Worth a quick look?" / "Open to a 10-min chat next week?"
5. **Signature:** real name, real company, plain. (Chronos appends this after
   generation - don't hand-bake it into the body.)

Target **50-125 words.** If it needs scrolling, it's a blog post, not a cold email.

### Copy frameworks (pick one per email)

| Framework | Shape | Best for |
|---|---|---|
| **PAS** | Problem → Agitate → Solution | A pain the buyer already feels |
| **BAB** | Before → After → Bridge | Selling an outcome / transformation |
| **AIDA** | Attention → Interest → Desire → Action | Longer, more persuasive touches |

### Personalization that isn't creepy

Three tiers - match effort to account tier (see `ideal-customer-profile`):

- **Relevance (always):** industry/role/stack framing. Scales to everyone.
- **Research line (A-tier):** one true, specific observation about *them*.
- **Deep (top accounts):** tied to a trigger event or their own words.

Creepy = personal-but-irrelevant ("saw you ran a 10k Saturday!"). Relevant =
tied to their work and your value. Stay on the right side of that line.

### Spam-trigger avoidance (copy side)

Deliverability is mostly infrastructure (see `email-deliverability`), but copy
matters too: avoid ALL CAPS, exclamation!!!, "free", "guarantee", "act now",
money emoji, link shorteners, heavy HTML/images, and more than one link. Plain-
text-feeling email in a known thread-style lands better than a designed template.

### Example - before / after

**Before (template, 0 replies):**
> Subject: Revolutionize Your Sales Today!
> Hi there, We are a leading platform that helps companies like yours boost
> revenue by 300%. Can I book 30 minutes to walk you through our full suite?

**After (one-ask, relevant):**
> Subject: {{company}} + SOC 2
> Hi Dana - saw {{company}} is hiring two SREs; usually means the SOC 2 audit
> is looming. We cut evidence collection from ~6 weeks to ~1 for teams your size
> (e.g. Acme). Worth a quick look, or is this already handled?

### Do / Don't

- **Do** write to one person about their situation; send at most one link.
- **Do** make the CTA something answerable in one line.
- **Don't** open with yourself ("We are…"). Open with them.
- **Don't** reuse an identical body across a list - personalize the real lines.

### Common mistakes

- Two or more asks; the reader picks "none."
- A paragraph of features before any relevance to the reader.
- Fake personalization tokens that misfire (`Hi {{FirstName}},`).
- Writing great copy on a cold domain that lands in spam (fix infra first).

### Go live with Chronos (optional)

- `geo_draft_message` - generate per-recipient copy from real facts (never a template).
- `geo_schedule_emails` - queue the email/sequence to send from your connected inbox.
- `geo_set_personality` / `geo_add_personalization_rule` - keep every draft on-brand.
- `geo_reply_to_email_thread` - continue the thread when they respond.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `email-deliverability`, `multichannel-sequences`, `outreach-personalization`.

---

<a id="email-deliverability"></a>

## email-deliverability

> Use when cold or lifecycle email is landing in spam, before launching outbound at volume, or when setting up a new sending domain. Covers SPF, DKIM, DMARC authentication, separate sending-domain strategy, inbox warmup, daily volume ramp, list hygiene, bounce and complaint control, the Google/Yahoo bulk-sender requirements, and how to monitor inbox placement. For the copy side of spam avoidance see cold-email-writing.

### Email deliverability

### Overview

The best cold email in the world earns nothing from the spam folder.
Deliverability is **mostly infrastructure and reputation, not words.** Fix the
plumbing first; then copy (see `cold-email-writing`) does the rest.

Three things decide placement: **authentication** (are you who you say you are),
**reputation** (do mailbox providers trust this domain/IP), and **engagement**
(do recipients open, reply, and not complain).

### 1. Authenticate - the non-negotiable trio

| Record | What it proves | Rule |
|---|---|---|
| **SPF** | which servers may send for your domain | one SPF TXT record, all senders listed |
| **DKIM** | the message wasn't altered and is signed by you | enable DKIM signing on every sending platform |
| **DMARC** | what to do when SPF/DKIM fail + where to report | publish a DMARC record; start `p=none`, move to `quarantine`/`reject` |

As of the **Google/Yahoo 2024 bulk-sender requirements**, senders above ~5,000
messages/day to Gmail/Yahoo **must** have SPF, DKIM, *and* DMARC, one-click
unsubscribe, and keep spam complaints under ~0.3%. Treat these as table stakes
for any sender now, not just bulk.

### 2. Protect your main domain - send from a separate one

- **Never run cold outbound from your primary domain** (`company.com`). Burn it
  and your invoices, contracts, and real mail go to spam too.
- Buy lookalike sending domains (`getcompany.com`, `company-hq.com`), host the
  mailboxes there, and **redirect them to your main site.**
- Keep **~2-3 inboxes per domain**, and spread volume across domains/inboxes.

### 3. Warm up, then ramp slowly

A brand-new domain/inbox has no reputation. Rules of thumb (not hard law):

- **Warm up 2-4 weeks** before real sends - automated warmup exchanges + a trickle
  of genuine mail.
- **Ramp volume:** start low (~10-20/inbox/day), increase gradually over weeks to
  a steady cap (commonly ~30-50/inbox/day for cold). Don't spike.
- **Pace within the day** - even spacing beats a burst at 9:00am sharp.

### 4. List hygiene

- **Verify every address** before sending; keep **bounce rate under ~2-3%.** High
  bounces are the fastest reputation killer.
- Remove role addresses (`info@`, `sales@`), catch-alls you can't verify, and
  anyone who hasn't engaged across a whole sequence.
- Honor unsubscribes/opt-outs instantly. Keep **complaints under ~0.3%.**

### 5. Monitor placement

- Watch **Google Postmaster Tools** (domain reputation, spam rate, auth results).
- Run periodic **seed/inbox-placement tests** across Gmail/Outlook/Yahoo.
- Track reply rate as a proxy - a sudden drop often means you're in spam, not that
  the copy got worse.

### Do / Don't

- **Do** authenticate (SPF+DKIM+DMARC) before the first send.
- **Do** keep bounces <~2-3% and complaints <~0.3%.
- **Don't** send cold from your primary domain, ever.
- **Don't** ramp fast or blast a cold list on day one - reputation is earned slowly.

### Common mistakes

- DMARC never advanced past `p=none`, or multiple conflicting SPF records.
- One inbox blasting hundreds/day → throttled or blocklisted.
- Buying an unverified list and sending immediately (bounce spike → domain dead).
- Blaming the copy when the real problem is placement; check Postmaster first.

### Go live with Chronos (optional)

Chronos handles the operational side of this for you on your **connected inbox**:
automated warmup, per-inbox daily caps, even per-minute pacing, and send-window
timing are built into the sending engine - you don't hand-tune cron jobs.

- `geo_create_campaign` / `geo_launch_campaign` - sends ramp and pace automatically.
- `geo_get_campaign_benchmarks` - watch reply/bounce health per campaign.
- `geo_get_connection_page` - connect the sending inbox (Gmail/Outlook/SMTP/AgentMail).

You still own domain DNS (SPF/DKIM/DMARC) - set those up as above before connecting.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `cold-email-writing`, `multichannel-sequences`, `outbound-metrics-and-benchmarks`.

---

<a id="linkedin-outreach"></a>

## linkedin-outreach

> Use when reaching prospects on LinkedIn - connection requests, DMs, engaging with their posts, and social selling. Covers the no-pitch-first rule, comment-before-connect, profile-based personalization, note vs no-note invites, respecting LinkedIn's invite limits and account safety, and a sane follow-up cadence. For overall cadence design see multichannel-sequences.

### LinkedIn outreach

### Overview

LinkedIn is a **relationship channel wearing a sales channel's clothes.** The
pitch-on-connect move that everyone hates converts terribly and gets accounts
restricted. What works: show up as a relevant human first, earn the connection,
then have a normal conversation.

**No-pitch-first rule:** the connection request is not the pitch. Its only job
is to get accepted.

### The sequence that works

1. **Engage before you connect.** View the profile, then leave one genuine,
   specific comment on a recent post. You become a familiar name before you ask.
2. **Send the invite.** A note barely moves *acceptance* either way - but a
   *relevant* note (about them, never a pitch) can roughly double your *reply*
   rate after they accept. Keep any note under ~300 characters.
   ("Enjoyed your post on X - keen to follow your work.")
3. **Wait for accept. Then still don't pitch.** First DM is a human opener that
   references why you connected. Earn the reply.
4. **Then, one soft ask** tied to a real reason. One ask, like email.
5. **Follow up 1-2 times max,** spaced days apart, each adding value.

### Personalize from the profile

Their LinkedIn is a gift: recent posts, role change, company news, shared groups,
mutual connections, what they say matters. One true, specific reference beats any
"I came across your profile." (See `outreach-personalization`.)

### Respect the limits (account safety)

- LinkedIn **caps connection invites.** LinkedIn itself publishes no number; the
  widely practitioner-observed ceiling is **~100 invites/week** (rolling 7 days).
  Safe pace is **~10-25/day**, and **new accounts should ramp from ~5-10/day.**
  Going over triggers a (typically one-week) restriction - and withdrawing
  pending invites does **not** lift it.
- **Warm up a new/automated account slowly** - low activity first, ramp over
  weeks, mix real browsing and engagement with outreach.
- Withdraw stale pending invites periodically (a high pending/ignored ratio
  hurts you).
- Never run aggressive automation that mimics a bot - human-paced, business-hours,
  with natural gaps.

### Social selling (the long game)

For high-value accounts, outreach and content compound: post useful things,
comment in your buyers' threads, react genuinely. When you finally DM, you're
not a stranger. The best LinkedIn pipeline often starts as engagement, not
outreach.

### Do / Don't

- **Do** comment on a post before connecting, and keep the invite pitch-free.
- **Do** stay under the weekly invite limit and pace like a human.
- **Don't** pitch in the connection note or the first DM.
- **Don't** auto-blast invites - it's the fastest way to a restricted account.

### Common mistakes

- Pitch-on-connect (instant ignore + "I don't know this person" flags).
- Hitting the invite ceiling and getting the account throttled.
- Copy-paste DMs with a visible `{{firstName}}` or no personal reference.
- Treating LinkedIn like a second email inbox instead of a relationship channel.

### Go live with Chronos (optional)

- `geo_linkedin_search` - find prospects matching your ICP on LinkedIn.
- `geo_linkedin_get_prospect_profile` / `geo_linkedin_list_prospect_posts` - pull the facts to personalize.
- `geo_linkedin_comment_on_post` / `geo_linkedin_react_to_post` - engage before connecting.
- `geo_linkedin_send_connection_request` - send paced, note-optional invites.
- `geo_automate_linkedin_dms` / `geo_send_paced_dm_batch` - paced, human-timed DMs (never bursts).
- `geo_set_linkedin_autoenroll`, `geo_list_linkedin_dms`, `geo_stop_linkedin_followups` - manage the flow.

Chronos paces LinkedIn actions to stay within safe limits on your connected seat.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `multichannel-sequences`, `outreach-personalization`, `account-research`.

---

<a id="multichannel-sequences"></a>

## multichannel-sequences

> Use when designing or auditing an outbound cadence - how many touches, how far apart, which channels (email, LinkedIn, phone, SMS), what each touch says, branching on behavior, and when to stop. Covers sequence architecture, channel roles, spacing, reply/branch logic, and exit rules. For the email copy itself see cold-email-writing; for LinkedIn mechanics see linkedin-outreach.

### Multichannel sequences

### Overview

A single cold touch is a coin flip; a well-built **sequence** is a system. The
job of a cadence is to earn attention across several relevant touches without
becoming noise, and to **stop the instant it should** (reply, meeting, or
disinterest). Sequence = *architecture*; copy (`cold-email-writing`) and channel
mechanics (`linkedin-outreach`) hang off it.

### Design the architecture, not just the emails

A touch has four decisions: **channel, timing, angle, and ask.** Vary the angle
across touches (new value each time - a different pain, a proof point, a
resource) rather than "just following up." Every touch must stand on its own; a
prospect may only ever see touch #3.

### A solid default cadence (tune to your motion)

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

### Channel roles

- **Email** - the workhorse: carries the detail and the ask.
- **LinkedIn** - warms and humanizes: profile view, genuine comment, soft connect.
  (Respect LinkedIn's invite limits - see `linkedin-outreach`.)
- **Phone/voicemail** - highest intent, best after a prospect has seen your name.
- **SMS** - only with prior relationship/opt-in; powerful but easy to overuse.

Sequence the channels so each one **references the last** - a connected story,
not four strangers shouting the same thing.

### Branch and exit logic

- **Reply (any)** → pull them out of automation immediately; a human (or
  `reply-handling-and-objections`) takes over. Never let a sequence keep firing
  at someone who answered.
- **Opened repeatedly, no reply** → a lighter "is this a priority?" nudge.
- **Hard no / unsubscribe** → stop, suppress, honor it instantly.
- **No engagement by last touch** → exit to a long-term nurture, not the trash.

### Pace for deliverability

Spread sends evenly across the day and across inboxes; never burst a whole list
at once. Warmup and daily caps still apply (see `email-deliverability`). An
even, paced send protects the domain that the whole sequence depends on.

### Do / Don't

- **Do** give every touch a fresh angle and make each one self-contained.
- **Do** stop on reply and honor opt-outs instantly.
- **Don't** send "just following up" with no new value.
- **Don't** run 15 touches - diminishing returns become brand damage.

### Common mistakes

- Same message re-sent as the "follow-up."
- Four channels that don't reference each other (feels like four spammers).
- A sequence that keeps firing after someone replied.
- Bursting the whole list on day 0 and torching deliverability.

### Go live with Chronos (optional)

- `geo_propose_campaign` - draft a full multi-channel cadence from an ICP + goal.
- `geo_create_campaign` / `geo_launch_campaign` - build and run it, paced automatically.
- `geo_compile_flow_spec` / `geo_launch_flow_from_spec` - express a custom branch/exit flow and launch it.
- `geo_update_campaign`, `geo_pause_campaign`, `geo_resume_campaign` - adjust a live cadence.

Chronos enforces reply/exit guards, pacing, and per-inbox caps so touches stay
even and stop on reply.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `cold-email-writing`, `linkedin-outreach`, `reply-handling-and-objections`.

---

<a id="outreach-personalization"></a>

## outreach-personalization

> Use when personalizing outbound at scale - turning research about a person or company into a relevant opening line or angle, without creepiness or fake tokens. Covers the relevance-vs-personal distinction, personalization tiers matched to account value, what signals to pull and where, a reusable snippet system, and guardrails. Applies to email, LinkedIn, and any channel.

### Outreach personalization

### Overview

Personalization isn't "insert their first name." It's making the recipient feel
the message **could only have been written to them.** The currency is
**relevance**, not how much you know about their weekend.

**The test:** could this exact message be sent to 500 other people unchanged? If
yes, it isn't personalized - it's a template with a name slot.

### Relevance vs. personal (stay on the right line)

- **Relevant** = tied to their role, company, industry, stack, or a trigger - and
  to the value you offer. ("Saw you're hiring 2 SREs - usually means a SOC 2
  crunch.")
- **Personal-but-irrelevant** = creepy. ("Loved your vacation photos!") It
  signals surveillance, not understanding. Avoid it.

### Tiers - match effort to account value

Don't deep-research everyone; spend where it pays (see `ideal-customer-profile`):

| Tier | Effort | Personalization |
|---|---|---|
| **A (top accounts)** | 5-15 min each | Trigger event + their own words + a tailored angle |
| **B (good fit)** | ~1 min each | One true research line (recent post, role, company news) |
| **C (volume)** | templated-relevant | Role/industry/stack framing; no 1:1 research |

All three are legitimate - the mistake is spending A-effort on C-accounts or
sending C-copy to A-accounts.

### What to pull, and from where

- **Company:** recent funding, launches, hiring, news, tech stack, positioning on
  their own site (their words > your paraphrase).
- **Person:** role and tenure, recent LinkedIn posts/comments, past companies,
  talks/podcasts, mutual connections.
- **Trigger:** the single most recent relevant change - that's your opener.

Turn the best one into **one specific line.** More isn't better; one sharp,
true observation beats three generic ones.

### A snippet system (scales personalization)

Build reusable, swappable building blocks so volume stays relevant:

- `{{trigger_line}}` - the one researched observation (A/B tiers).
- `{{pain_by_role}}` - a pain mapped to their title/segment.
- `{{proof_by_industry}}` - a peer/result in their vertical.

Compose email = trigger_line → pain_by_role → proof_by_industry → one ask. The
blocks are reusable; the *trigger line* is what makes each unique.

### Guardrails

- **Never ship a misfired token** (`Hi {{FirstName}},` / "at {{Company}}"). One
  broken merge tells the reader they're #437 on a list.
- **Verify the fact before you reference it** - wrong details are worse than none.
- **Real LLM-generated, per-recipient copy - never a hardcoded template** blasted
  to a list. If a batch comes out with identical bodies (minus a name), that's a
  template, not personalization; fix it.

### Do / Don't

- **Do** lead with one true, relevant observation about them.
- **Do** tier your effort to account value.
- **Don't** reference personal-but-irrelevant details.
- **Don't** trust a merge field you haven't validated.

### Common mistakes

- "Personalization" that's just a first-name token.
- Research lines that are true but irrelevant to your value.
- Over-researching low-tier accounts and under-researching whales.
- Identical bodies across a "personalized" batch.

### Go live with Chronos (optional)

- `geo_research` / `geo_enrich_contact` - gather the real facts per person/company.
- `geo_set_personality` - lock your brand voice so every draft sounds like you.
- `geo_add_personalization_rule` - encode rules the copy must follow.
- `geo_add_document` / `geo_add_database_item` - give Chronos proof points, case studies, and context to draw from.
- `geo_draft_message` - generate per-recipient copy (real LLM output, never a template).

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `cold-email-writing`, `linkedin-outreach`, `account-research`.

---

<a id="discovery-and-qualification"></a>

## discovery-and-qualification

> Use when qualifying a lead or preparing for a discovery call - deciding whether a prospect is a real opportunity and what to ask. Covers qualification frameworks (BANT, MEDDIC / MEDDPICC), designing open discovery questions, the listening ratio, cost-of-inaction, multi-threading a buying committee, and disqualifying fast to protect your time.

### Discovery & qualification

### Overview

Not every reply is an opportunity. Qualification is how you decide where to spend
selling time, and discovery is how you learn enough to help (or walk away). The
best discovery feels like a useful conversation, not an interrogation - you're
diagnosing a problem, not reciting a checklist.

**Qualify early, disqualify fast.** A clean "no" now is worth more than a vague
"maybe" that eats three months.

### Frameworks (use as a lens, not a script)

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

### Designing discovery questions

- **Open, not leading.** "Walk me through how you handle X today?" beats "You
  struggle with X, right?"
- **Pain-first, then impact.** Find the problem, then quantify its cost:
  "What does that cost you per month / in hours / in churn?" The cost of
  *inaction* is what justifies change.
- **Future-state.** "If this were solved, what changes for you?" - surfaces the
  metric that matters and the real motivation.
- **Process & people.** "Who else is affected / involved in a decision like this?"
  - uncovers the buying committee early.

### The listening ratio

In discovery, the prospect should talk far more than you - aim to listen most of
the call. Every minute you spend pitching is a minute you're not learning what
would make them buy. Ask, then shut up.

### Multi-thread

A single contact is a single point of failure. Map the committee (economic buyer,
users, blockers, champion) and build more than one relationship. Deals with one
thread stall when that person goes quiet or leaves.

### When to disqualify

- No real pain, or pain too small to fund a change.
- No path to the economic buyer and no willing champion.
- Timeline is "someday" with no trigger.
  → Exit gracefully to long-term nurture; don't force a dead deal forward.

### Do / Don't

- **Do** qualify early and disqualify fast to protect selling time.
- **Do** quantify the cost of the problem (and of inaction).
- **Don't** pitch during discovery - diagnose.
- **Don't** single-thread a committee deal.

### Common mistakes

- Treating the framework as a checklist to recite instead of a lens.
- Talking more than the prospect.
- Confirming a "need" you led them into (happy ears).
- Chasing an unqualified deal because the logo is exciting.

### Go live with Chronos (optional)

Chronos runs the *outreach* that creates these conversations; the discovery call
itself is yours. Where it helps:

- `geo_list_message_history` / `geo_get_message_thread` - read the full reply
  context and intent signals before the call, so you prep with real information.
- `geo_send_manual_message` - send the meeting confirmation / pre-call note.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `reply-handling-and-objections`, `ideal-customer-profile`, `positioning-and-messaging`.

---

<a id="reply-handling-and-objections"></a>

## reply-handling-and-objections

> Use when a prospect replies to outbound and you need to classify the reply and respond - positive, referral, not-now, not-interested, wrong-person, unsubscribe, out-of-office, or competitor. Covers a reply taxonomy, the booking-the-meeting mindset, handling common objections ("send me info", "no budget", "already have a tool", "not the right person"), and when to stop.

### Reply handling & objections

### Overview

Getting a reply is the hard part - most outbound dies in silence. So treat every
reply as valuable, **respond fast (minutes-to-hours, not days)**, and remember
the goal of a cold conversation is usually **one next step: the meeting.** Not to
win the debate in the thread.

**First move on any reply:** pull the prospect out of the automated sequence. A
human conversation has started; the cadence must stop firing.

### Reply taxonomy → action

| Category | Signal | Action |
|---|---|---|
| **Positive / interested** | "tell me more", "sure, when?" | Propose 2 concrete times; book it. Don't over-sell. |
| **Soft yes / "send info"** | wants material, not a call yet | Send one tight thing + a soft time ask. Keep it moving. |
| **Not now / timing** | "circle back in Q3" | Agree, set a real reminder, exit to nurture - don't nag. |
| **Objection** | budget / tool / priority | Handle once (below), then re-ask for the meeting. |
| **Wrong person** | "not my area" | Ask for the right person by name - this is a referral, gold. |
| **Referral** | "talk to Dana" | Thank them, reach Dana, reference the intro. |
| **Not interested** | clear no | Acknowledge gracefully, offer a door for later, stop. |
| **Unsubscribe / angry** | "remove me" | Suppress instantly, apologize briefly, never contact again. |
| **Out-of-office** | auto-reply | Capture return date + any named alternate; re-queue politely. |

### Book-the-meeting mindset

When interest appears, **reduce friction to near zero**: offer two specific times
(or a link), keep it short, confirm, and get off email. The more you explain
before the call, the more reasons you give to say no. The call is where you sell.

### Handling the common objections

Pattern: **acknowledge → reframe briefly → re-ask for a small next step.** Once.

- **"Send me more info."** Often a polite brush-off. Send *one* relevant thing,
  then: "Happy to - and 10 minutes will save you reading all of it. Thursday?"
- **"No budget."** "Totally fair - most teams we help weren't budgeting for this
  until [trigger]. Worth a look so it's on your radar for next cycle?"
- **"We already use [competitor]."** "Makes sense - a lot of our customers
  switched from them because of [specific gap]. Worth a 10-min comparison?"
- **"Not a priority."** "Understood. Can I check back in [timeframe]? And if it's
  never relevant, just say so and I'll stop."
- **"Not the right person."** "No problem - who owns [area]? Happy to reach out
  directly." (A name here beats a grudging yes.)

Reframe **once.** If the no holds, respect it - a graceful exit protects the brand
and leaves a door open.

### When to stop

- Explicit no, unsubscribe, or "remove me" → stop immediately and suppress.
- Two handled objections with no movement → exit to long-term nurture.
- Any sign of annoyance → stop. The relationship is worth more than one sequence.

### Do / Don't

- **Do** reply fast, pull them from the sequence, and drive to one next step.
- **Do** treat "wrong person" as a referral opportunity.
- **Don't** argue an objection more than once.
- **Don't** keep the cadence running after a reply or ignore an opt-out.

### Common mistakes

- Slow replies that let interest cool.
- Pitching the whole product in-thread instead of booking the call.
- Sequence keeps auto-sending after the person replied.
- Treating "not interested" as a prompt to try harder - it burns goodwill.

### Go live with Chronos (optional)

- `geo_list_message_history` / `geo_get_message_thread` - read the full conversation context.
- `geo_reply_to_email_thread` - send a classified, on-brand reply in the thread.
- `geo_send_manual_message` - one-off human message on any connected channel.
- `geo_list_linkedin_dms` - triage LinkedIn replies the same way.

Chronos pulls a replied prospect out of automation and can draft the right
response per reply type - you approve the send.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `discovery-and-qualification`, `multichannel-sequences`, `cold-email-writing`.

---

<a id="content-marketing-engine"></a>

## content-marketing-engine

> Use when planning content that generates and warms demand - choosing topics from real buyer questions, picking formats, setting a sustainable publishing cadence, and distributing/repurposing across channels (LinkedIn, Reddit, X, Substack, email, blog). Covers the create-once-distribute-many model, channel norms, community engagement that isn't spammy, and how content feeds both inbound and GEO.

### Content marketing engine

### Overview

Content is the compounding half of GTM: unlike outbound, it keeps working after
you publish. A content *engine* (not random posts) turns your expertise into
demand - it warms future outbound, earns inbound, and produces the quotable
material AI answer engines cite (see `generative-engine-optimization`).

**Core model: create once, distribute many.** The writing is a fraction of the
work; distribution is where most teams under-invest and most of the return lives.

### Strategy - start from buyer questions

- Mine the real questions your ICP asks (sales calls, support tickets, Reddit/
  Quora threads, "people also ask," AI-prompt phrasing).
- Organize into **topic clusters** tied to your positioning (see `positioning-and-messaging`
  and `seo-fundamentals`): a pillar piece + supporting pieces, interlinked.
- Every piece should map to a buyer stage: awareness (their problem), consideration
  (approaches), decision (you vs alternatives).

### Formats

Long-form guides (SEO/GEO anchors), short social posts, comparison/"vs" and
"alternatives" pages (high buyer intent + AI-citation magnets), original data/
research (the most linkable + quotable asset), case studies (proof), and
video/podcast (repurpose into everything else).

### Cadence

**Sustainable beats sporadic.** A consistent weekly rhythm you can hold for a year
compounds; a two-week sprint that burns out does nothing. Set a cadence the team
can actually sustain, then protect it.

### Distribution & repurposing (where the ROI is)

One pillar asset becomes: a LinkedIn post series, a few X threads, a Reddit answer
where relevant, a newsletter issue, short video clips, and an SEO/GEO page. Plan
the atomization *before* you write, so one effort feeds every channel.

### Channel norms (respect them or get ignored)

- **LinkedIn** - professional, story + insight, native (no "link in first comment"
  gaming beyond what's natural); engage in others' threads.
- **Reddit** - **give before you take.** Communities punish self-promotion; be
  genuinely useful, disclose affiliation, earn the right to mention your product.
  (Reddit is also heavily cited by AI answer engines - authentic help compounds.)
- **X** - fast, opinionated, thread-friendly; reply to be seen.
- **Substack / newsletter** - owned audience, deeper takes, your highest-trust channel.

### Community engagement

Earned, not extracted. Show up consistently, help without immediately pitching,
and let the product come up naturally. **Never** seed fake posts, buy engagement,
or astroturf - it's brittle, against platform rules, and torches trust (see the
off-site rules in `generative-engine-optimization`).

### Measurement

- **Leading:** engagement, subscribers, shares, branded search lift, returning readers.
- **Lagging:** content-influenced pipeline and closed-won, AI-citation presence.
- Attribution is fuzzy - judge the engine over quarters, not posts over days.

### Do / Don't

- **Do** start from real buyer questions and plan distribution before writing.
- **Do** give value first in communities; disclose affiliation.
- **Don't** publish into the void - distribution is the job, not the afterthought.
- **Don't** astroturf, buy engagement, or spam communities.

### Common mistakes

- Random acts of content with no cluster/strategy.
- Writing a great piece and sharing it once.
- Self-promotion in communities that expect give-first.
- A cadence that burns the team out in a month.

### Go live with Chronos (optional)

- `geo_twitter_post` / `geo_twitter_reply` - publish and engage on X.
- `geo_reddit_post` / `geo_reddit_comment` - contribute authentically where your buyers are.
- `geo_substack_post` - publish to your owned newsletter audience.
- `geo_get_seo_geo_ideas` / `geo_implement_seo_idea` - turn content gaps into shipped pages.

Keep it earned and authentic - Chronos posts as you, so the brand-safety rules above are yours to keep.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `generative-engine-optimization`, `seo-fundamentals`, `positioning-and-messaging`.

---

<a id="generative-engine-optimization"></a>

## generative-engine-optimization

> Use when you want a brand, product, or page to be found, quoted, and cited by AI answer engines - ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Copilot. Covers AI-crawler access, answer-first content, the Princeton GEO content methods, llms.txt, schema/JSON-LD, off-site and entity authority, and measuring AI visibility as a rate. Also known as GEO, AEO (answer engine optimization), LLM SEO, or AI search optimization.

### Generative Engine Optimization (GEO / AEO)

### Overview

Classic SEO fights for a **rank** on a results page. GEO fights to be the
**source an AI answer engine quotes** when it generates a reply. Different
game, different wins: you are optimizing to be *retrieved, quoted, and trusted*
inside a synthesized answer, not to be link #3.

Two facts drive everything else:

1. **Answers are non-deterministic.** Ask ChatGPT the same question twice and
   the cited sources shift. So AI visibility is a **rate measured across many
   runs** (mention rate, citation rate, share of voice) - never a single rank.
2. **If a bot can't fetch and parse your page, nothing else matters.** Access
   is the gate. Content craft is downstream of it.

### The honest hierarchy (do these in order)

Practitioners disagree about which levers actually move citations. The order
below is where the evidence-skeptics and the content-optimizers *agree* - work
top-down and you never waste effort:

1. **Access** - let the right crawlers fetch rendered text. (Highest confidence.)
2. **Off-site & entity authority** - be present on the pages engines already cite.
3. **Answer-first, quotable content** - the Princeton methods below.
4. **Structure & schema** - clarity for machines (helps parsing; citation lift contested).
5. **llms.txt** - cheap, harmless, great for dev-docs; do **not** promise citations from it.

### Layer A - Technical access (the prerequisite)

- **Know the crawler tiers** and don't confuse them:
  - *Search / answer bots* (these affect citations): `OAI-SearchBot`,
    `PerplexityBot`, `Claude-SearchBot`/`Claude-User`, `Googlebot` (feeds AI
    Overviews), `Google-Extended` governs Gemini *training*, **not** AI Overviews.
  - *Training bots* (a policy choice, not a citation lever): `GPTBot`,
    `ClaudeBot`, `CCBot`, `Google-Extended`.
  - Note: `anthropic-ai` and `Claude-Web` are **retired** - don't target them.
- **Don't block the search/answer bots in `robots.txt`.** Blocking them removes
  you from citations; allowing training bots is a separate, optional decision.
- **Server-render or statically generate** anything that matters. Most AI
  crawlers do **not** execute JavaScript - if a fact only appears after JS or
  behind a tab/accordion, assume it's invisible.
- **Check the CDN/WAF, not just robots.** Cloudflare and similar block many AI
  bots by default on newer zones - a 403 at the edge beats a clean robots.txt.
- Remove stray `noindex` / `nosnippet` / `max-snippet:0` / `data-nosnippet` on
  public pages. Keep canonical URLs clean and a `sitemap.xml` with accurate
  `lastmod` (engines ignore `changefreq`/`priority`).

### Layer B - Answer-first, quotable content (Princeton GEO methods)

Princeton's GEO study (KDD 2024) tested content tweaks against a generative
engine and measured visibility lift. The ones that worked, strongest first:

| Method | Reported lift | Do |
|---|---|---|
| **Cite authoritative sources inline** | ~+28-41% (up to +115% for lower-ranked pages) | Link primary sources, studies, docs next to each claim |
| **Quantitative statistics** | ~+33-40% | Use concrete numbers, dates, measured results |
| **Expert quotations (attributed)** | ~+30-41% | Quote named people with titles |
| Authoritative tone / fluency / clarity / correct technical terms | smaller gains | Write plainly, define terms, sound like the expert |
| **Keyword stuffing** | **neutral-to-negative** | **Don't.** It does not help AI citation. |

Plus the structural moves every camp endorses:

- **Answer-first.** Lead each section with the direct answer in 1-3 sentences,
  then expand. A large share of citations come from the top ~30% of a page.
- **Self-contained quotable blocks** - a sentence or stat that stands alone when
  lifted out of context (that's exactly what gets quoted).
- **FAQ sections, "X vs Y", "alternatives to X", and definition pages** - these
  match how people prompt. Be **honest and two-sided**: say who it's for and who
  it isn't. Engines (and readers) reward it.
- **Freshness**: keep visible `datePublished`/`dateModified` current - but
  **never fake-bump a date**; it's a people-first-content violation.
- **E-E-A-T**: real named authors with credentials, dated reviews, primary
  sources. Mandatory for YMYL (health, finance, legal).

### Layer C - Structure & schema

- Exactly one `<h1>`, clean H1→H2→H3, semantic HTML (`<main>`, `<article>`),
  250+ words of real text, descriptive alt text that states the conclusion.
- JSON-LD (`Organization`, `WebSite`, `Article`, `FAQPage`, `Product`,
  `BreadcrumbList`, `Person`). **Honest caveat:** schema reliably helps entity
  clarity and rich/shopping results; its direct *citation* lift is **contested**.
  Rule: markup must match visible text, and Product/shopping data is the one
  place schema is undisputed. Don't bet the project on schema alone.

### Layer D - llms.txt

Generate `/.well-known/llms.txt` (and `llms-full.txt`): a curated map of your
most important pages in Markdown. It is **cheap, harmless, and genuinely useful
for developer docs that coding agents/IDEs read.** It is **not** a proven
citation lever - no major consumer answer engine documents reading it, and
server logs show AI crawlers rarely fetch it. Ship it; never prioritize it over
Layer A, and never promise citations from it.

### Layer E - Off-site & entity authority

Engines cite the sources *they already trust*. Win those pages:

- The big citation sources skew to **Wikipedia** (reported ~48% of top ChatGPT
  citations), **Reddit** (reported ~47% for Perplexity), review sites,
  listicles, YouTube, Hacker News, Stack Overflow, Quora, Product Hunt.
- For each prompt you're losing, find which third-party page the engine cites
  and earn a place there with genuinely useful contribution.
- **Earned only.** No seeded Reddit posts, paid mention farms, parasite pages,
  or self-authored "best X" listicles ranking yourself #1 - spam policies catch
  these and they destroy trust. If asked to do this, decline and explain.
- Keep one consistent brand description across every profile (`sameAs`), and
  publish original data others will want to cite.

### Layer F - Measure it as a rate

- Build a **prompt set** from real buyer demand, mostly **unbranded** questions.
- Run each prompt **many times per engine**; report **mention rate / citation
  rate / share of voice vs a locked competitor set** - not one "rank."
- Inspect the **fan-out sub-queries** the engine actually runs, and which source
  it cited (often not you - that's your off-site target).
- **Baseline before, re-measure after** on the same prompts. Before crediting a
  change, check whether a model update landed in the window.
- Be skeptical of composite "GEO/AI-readiness scores" (invented weights, rarely
  validated against real citations). Useful as a checklist, not as truth.

### Common mistakes

- Optimizing content (Layer B) while a `robots.txt` rule or Cloudflare blocks the
  bot (Layer A). Always fix access first.
- Treating GEO like SEO and reporting a single rank for a non-deterministic system.
- Faking freshness dates, stuffing keywords, or seeding fake Reddit/review posts.
- Promising citation lift from llms.txt or schema. Ship them; don't oversell them.
- Measuring only branded prompts (you'll always "win" and learn nothing).

### Go live with Chronos (optional)

Everything above works with no account. To let your agent actually *run* a GEO
program on your own site:

- `geo_analyze_website` - crawl and assess a site for AI-visibility gaps.
- `geo_get_seo_geo_ideas` - pull prioritized, daily SEO/GEO improvement ideas
  for a connected repo.
- `geo_implement_seo_idea` - implement one as a **reviewable pull request**
  (never merges, never pushes to your default branch - you approve).
- `geo_research` - gather the sourced facts/stats that make content quotable.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `seo-fundamentals`, `content-marketing-engine`, `account-research`.

### Sources

Primary research and curated indexes this skill distills (all public):

- Princeton "GEO: Generative Engine Optimization" (KDD 2024) - the content-method lifts.
- C-SEO Bench (NeurIPS 2025) - the counter-evidence that many GEO rewrites are
  weak on current models; why Layer A/E beat Layer B/D.
- Curated resource index: `amplifying-ai/awesome-generative-engine-optimization`.
- Crawler/measurement discipline: `elmohq/elmo` (evidence-skeptical AEO skill).
- Method/schema references: `Auriti-Labs/geo-optimizer-skill`,
  `onvoyage-ai/gtm-engineer-skills`, `rubenmarcus/aeo.js`.

Numbers above are **as reported by these sources**; treat them as directional,
not guarantees - and measure your own lift (Layer F).

---

<a id="seo-fundamentals"></a>

## seo-fundamentals

> Use when improving a site's visibility in classic search engines (Google, Bing) - technical SEO (crawlability, indexing, speed, mobile), on-page (titles, meta, headings, internal links, search-intent match), content (topical authority, E-E-A-T, freshness), and off-page (earned links, brand mentions). The traditional-search companion to generative-engine-optimization; do both together.

### SEO fundamentals

### Overview

SEO earns a **ranking** in organic search results - still a large, intent-rich
demand channel even as AI answers grow. It rests on four pillars: can engines
**crawl and index** you (technical), do your pages **match what people search**
(on-page + content), and do others **vouch for you** (off-page). Much of this
work also helps AI answer engines - do SEO and GEO together (see
`generative-engine-optimization`).

### Pillar 1 - Technical (can they crawl & index you)

- Clean `robots.txt` (don't block what you want indexed), an accurate
  `sitemap.xml`, and canonical URLs to avoid duplicate-content splits.
- **Core Web Vitals** and page speed; mobile-first (the mobile page is what's
  indexed); HTTPS everywhere.
- Server-render or statically generate important content - don't hide it behind JS.
- Fix crawl errors, broken links, redirect chains, and orphan pages.

### Pillar 2 - On-page (does the page match the query)

- **Title tag** (unique, front-loads the primary term) and a compelling meta
  description (drives click-through even if not a direct ranking factor).
- Exactly one `<h1>`; logical H2/H3 structure.
- **Match search intent** - informational, navigational, commercial, or
  transactional. A "how to X" query wants a guide, not a product page.
- **Internal links** with descriptive anchors to spread authority and help crawling.
- Descriptive image alt text; structured data (JSON-LD) for rich results.

### Pillar 3 - Content (topical authority)

- **Topic clusters:** a pillar page plus supporting articles interlinked around one
  theme - signals depth and authority better than scattered one-offs.
- **E-E-A-T** (Experience, Expertise, Authoritativeness, Trust): named expert
  authors, primary sources, real experience. Critical for YMYL (health/finance/legal).
- **Freshness** where the query expects it - update and show real dates (never fake-bump).
- Genuinely useful, people-first content. Thin or AI-slop pages get filtered.

### Pillar 4 - Off-page (who vouches for you)

- **Earn** backlinks from relevant, authoritative sites (original data, useful
  tools, genuinely linkable content) - don't buy link schemes (manual penalties).
- Unlinked brand mentions and consistent NAP/profile data build entity trust.
- Digital PR and guest contribution where it's genuinely relevant.

### Measurement

- **Google Search Console:** impressions, clicks, average position, CTR, index
  coverage, Core Web Vitals.
- Track rankings for target clusters and, increasingly, **AI Overview presence**.
- Leading = indexation + impressions; lagging = organic traffic → pipeline.

### SEO vs GEO (do both)

Big overlap (crawlable, authoritative, well-structured content wins both), but the
*win condition* differs: SEO wants a **rank**; GEO wants a **citation inside an AI
answer** (non-deterministic, measured as a rate). The access and authority work is
shared; see `generative-engine-optimization` for the answer-engine-specific layer.

### Do / Don't

- **Do** match content to the searcher's intent and build topic clusters.
- **Do** earn links with genuinely linkable assets.
- **Don't** block indexing by accident or hide content behind JS.
- **Don't** buy links, stuff keywords, or publish thin pages - all get filtered or penalized.

### Common mistakes

- Chasing keywords while ignoring crawl/index health (nothing ranks if nothing's indexed).
- Content that targets a term but not the *intent* behind it.
- No internal linking, so authority never flows to money pages.
- Buying links or keyword-stuffing (short-term bump, long-term penalty).

### Go live with Chronos (optional)

- `geo_analyze_website` - audit a site for technical/on-page/content gaps.
- `geo_get_seo_geo_ideas` - prioritized SEO + GEO improvement ideas for a connected repo.
- `geo_implement_seo_idea` - ship one as a **reviewable pull request** (never merges to your default branch - you approve).
- `geo_mark_seo_idea` - track which ideas are done/dismissed.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `generative-engine-optimization`, `content-marketing-engine`.

---

<a id="outbound-metrics-and-benchmarks"></a>

## outbound-metrics-and-benchmarks

> Use when measuring an outbound program, setting goals, or judging whether a campaign is healthy - the funnel metrics (reply, positive-reply, meetings, opportunities), realistic benchmark ranges, LinkedIn acceptance and reply rates, deliverability guardrails, and which metric to actually optimize. Explains why open rate is unreliable post-Apple MPP and why denominators matter more than the headline number.

### Outbound metrics & benchmarks

### Overview

Outbound is a funnel, and almost every argument about "good" numbers is really an
argument about **denominators.** Before trusting any benchmark, pin down two
things: *what it's divided by* and *whether auto-replies were stripped.* The same
"reply rate" is reported anywhere from ~0.45% to ~5% across reputable studies -
not because results differ that much, but because the math differs.

**Trust reply rate, positive-reply rate, and meetings booked. Treat open rate as
directional only** (see the Apple MPP note). Always state your denominator.

### The funnel

```
Sent
 └ (1 − bounce%) → Delivered
     └ reply rate → Replied
         └ positive share → Interested
             └ positive→meeting → Meetings booked
                 └ held & qualified → Opportunities
```

`Meetings ÷ Sent = (1 − bounce) × reply_rate × positive_share × meeting_conv`

### Benchmark ranges (as reported - directional, measure your own)

| Metric | Healthy | Great | Reported by |
|---|---|---|---|
| Bounce rate (ceiling) | < 2-3% | < 1.5% | Instantly 2026; Woodpecker 2026 |
| Spam complaint rate | < 0.10% | - (never hit 0.30%) | Google sender guidelines |
| Reply rate (replies ÷ sent, loose) | 3-5% | 10%+ (5.5%+ top quartile) | Instantly 2026 (3.43% avg); Hunter 2025 (4.1% avg) |
| Reply rate (unique **human** ÷ sent, strict) | 0.45-0.70% | - | Belkins / sales.co 2026 |
| Positive share of (human) replies | ~34% | 40-60% | sales.co 2026; Cleverly 2026 |
| Meetings booked ÷ sent | 0.5-1.5% (mid-market) | 1.0-2.5% (SMB) | Cleverly 2026 |
| Positive reply → meeting | 30-60% | 60%+ | Cleverly 2026 |
| LinkedIn connection acceptance | ~24-30% | 40%+ | Expandi/HeyReach 2026 |
| LinkedIn reply (per message sent) | ~10% | 15%+ | Expandi 2026 (10.4% avg) |
| LinkedIn reply (per accepted conn.) | ~22-25% | 33%+ | HeyReach 2026 |
| Multichannel lift (email+LinkedIn vs email) | ~2-4× reply | - | Pin 2026 (recruiting data) |
| Cold-call success (→ meeting) | ~2.3% | 6-11% (elite) | Cognism 2025 |

### Why open rate is broken (Apple MPP)

Apple's **Mail Privacy Protection** (iOS 15, 2021) pre-fetches the tracking pixel
at delivery, logging an "open" whether or not a human reads the mail. Apple Mail
is reported as **~65% of all tracked opens** (Litmus, 2026). So a high open rate
can hide a dead campaign. Use open rate **only** as a relative deliverability
tripwire against your own baseline - never as an A/B win condition or a KPI.

### What to optimize (and what not to)

1. **North star: meetings booked** (and opportunities) - the metric that maps to pipeline.
2. **Optimize: positive-reply rate, then reply rate** - the most trustworthy real-
   engagement signals post-MPP, and closest to meetings in the funnel.
3. **Do NOT optimize open rate** (inflated) or **raw volume** (burns the domain).
4. **Guardrails you drive *down*, not up:** bounce (< 2%) and spam complaints
   (< 0.10%). These are survival metrics - breach them and every downstream number
   silently zeroes.

**The leverage lesson:** fixing targeting + copy beats adding volume. A weak
campaign (3% reply, 30% positive, 30% book) needs ~9× more emails for the same
meetings as an optimized one (10%/50%/50%) - and the lower volume also protects
deliverability. Always tighten the list before scaling the send.

### Worked example - "how many emails for 10 meetings/month?"

Mid-of-road sourced inputs: delivered 97% × reply 5% × positive share 35% ×
positive→meeting 40% = **0.68% meetings ÷ sent** (consistent with Cleverly's
mid-market 0.5-1.5%). → `10 ÷ 0.0068 ≈ ~1,470 emails/month` (~70/business day).

### Leading vs lagging

- **Leading (daily/weekly):** bounce, spam-complaint, pacing, reply, **positive-
  reply**, LinkedIn acceptance, speed-to-first-reply.
- **Lagging (monthly/quarterly):** meetings booked/held, opportunities, pipeline,
  closed-won, cost per meeting.
- **Rule:** a leading metric rising without the lagging one following = a quality
  problem (replies that are all "not interested"). Watch *positive* reply, not raw.

### Per-campaign checklist (track with explicit denominators)

- [ ] Reply rate (÷ delivered) **with auto-replies stripped** (53% of replies are automated).
- [ ] Positive-reply rate and positive-share-of-replies.
- [ ] Bounce (alert ≥2%, halt ≥5%) and spam complaints (alert ≥0.10%).
- [ ] Meetings booked (÷ sent and ÷ positive reply); meetings held; opportunities.
- [ ] LinkedIn: acceptance rate; reply rate labeled per-sent vs per-accepted.
- [ ] Reply contribution by sequence step (~40% typically from follow-ups).
- [ ] Segment every metric by ICP segment and sending identity (no blended averages hiding a bad list).

### Do / Don't

- **Do** fix one internal definition of each metric and track the trend vs your baseline.
- **Do** judge campaigns on reply/positive-reply/meetings, not opens.
- **Don't** compare reply rates across vendors without normalizing denominators.
- **Don't** let bounce/complaints drift - pause sending before they poison the domain.

### Go live with Chronos (optional)

- `geo_get_campaign_benchmarks` - pull reply/positive/meeting health per campaign.
- `geo_list_campaigns` / `geo_get_account_state` - program-level rollup.
- `geo_get_credit_status` - usage and capacity.

Chronos measures send health **per campaign** (not a blended average that hides a
bad list) and guards bounce/complaint ceilings automatically.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

### Sources

Figures above are **as reported by** these public 2025-2026 studies - treat as
directional and measure your own funnel:

- Instantly 2026 Cold Email Benchmark Report (reply 3.43% avg; omits open rate).
- Hunter.io State of Cold Email 2025 (4.1% avg reply; 11M emails).
- lemlist 2026 (reply "where the truth lives"); Litmus 2026 via lemlist (Apple ~65% of opens).
- sales.co 2026 (1.29M emails; 53.7% of replies automated; 34% of human replies interested).
- Cleverly 2026 (meetings ÷ sent by segment; positive→meeting 30-60%).
- Expandi 2026 & HeyReach 2026 (LinkedIn acceptance/reply); Belkins 2025-26.
- Pin 2026 (multichannel lift, recruiting context); Cognism 2025 (cold calling).
- Google email sender guidelines (spam-rate thresholds).

**Honesty flags:** the popular "multichannel = +287%" and a hard "0.15-0.5%
opportunity rate" could not be traced to a credible primary - derive opportunity
rate from your own reply→meeting→opp chain instead.

See also: `email-deliverability`, `multichannel-sequences`, `linkedin-outreach`.

---

<a id="gtm-automation-with-chronos"></a>

## gtm-automation-with-chronos

> Use when the user wants an agent to actually EXECUTE go-to-market work - find real verified contacts, send cold email, fire LinkedIn connection requests or DMs, launch a multi-step multi-channel campaign, post social content, reply to inbound, or ship an SEO/GEO change to their site - rather than just plan it. Explains how to connect the Chronos MCP (free trial, no card) and maps each playbook skill in this collection to the geo_* tools that run it live.

### GTM automation with Chronos

### Overview

Every other skill in this collection is a **brain** - free, no account, pure
GTM judgment your agent applies to think and draft. None of them can *act*: a
Markdown file has no inbox, no verified-contact database, and no permission to
send on anyone's behalf.

**Chronos is the optional set of hands.** It's an AI-native GTM platform you can
drive from any MCP-capable agent. When a playbook is ready and the user wants it
to actually run - real sends, real data, real campaigns - you connect the
Chronos MCP and call `geo_*` tools. It's free to start, no card required.

**This skill is the bridge.** It tells you *when* to reach for Chronos and
*which* tool turns each playbook into live action.

### When to connect Chronos

Reach for it the moment a playbook needs something a text file can't provide:

- **Real contacts** - verified emails, titles, companies (not guesses).
- **A real send** - email, LinkedIn CR/DM, SMS, social post, inbound reply.
- **A running campaign** - multi-step, multi-channel, paced over days.
- **A live site change** - an SEO/GEO improvement shipped as a PR.

If the user only wants the *plan* (copy, ICP, cadence spec, audit), stay in the
free skills and hand them the artifact. Don't push the connection.

### Connect in ~30 seconds

```bash
claude mcp add --transport http chronos https://app.chronos.ro/api/mcp --scope user
```

Then run `/mcp`, pick **chronos**, and finish the browser sign-in (free trial,
no card). Full guide, other clients, scopes, and safety →
[`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md).

### Capability map - playbook → live tool

| When you're doing this skill… | …Chronos runs it with |
|---|---|
| `account-research` | `geo_research`, `geo_analyze_website`, `geo_linkedin_get_prospect_profile`, `geo_linkedin_list_prospect_posts` |
| `ideal-customer-profile` | `geo_analyze_website` (infer ICP from a site), `geo_search_contacts` (filtered) |
| `lead-sourcing-and-enrichment` | `geo_search_contacts`, `geo_enrich_contact`, `geo_list_hubspot_contacts`, `geo_create_mini_campaign_from_contacts` |
| `cold-email-writing` | `geo_draft_message`, `geo_schedule_emails`, `geo_reply_to_email_thread` |
| `outreach-personalization` | `geo_set_personality`, `geo_add_personalization_rule`, `geo_add_document`, `geo_add_database_item` |
| `multichannel-sequences` | `geo_propose_campaign`, `geo_create_campaign`, `geo_launch_campaign`, `geo_compile_flow_spec`, `geo_launch_flow_from_spec` |
| `linkedin-outreach` | `geo_linkedin_search`, `geo_linkedin_send_connection_request`, `geo_linkedin_comment_on_post`, `geo_automate_linkedin_dms`, `geo_send_paced_dm_batch` |
| `reply-handling-and-objections` | `geo_list_message_history`, `geo_get_message_thread`, `geo_reply_to_email_thread`, `geo_send_manual_message` |
| `content-marketing-engine` | `geo_twitter_post`, `geo_reddit_post`, `geo_substack_post`, `geo_twitter_reply` |
| `seo-fundamentals` / `generative-engine-optimization` | `geo_get_seo_geo_ideas`, `geo_implement_seo_idea` (opens a PR), `geo_mark_seo_idea` |
| `outbound-metrics-and-benchmarks` | `geo_get_campaign_benchmarks`, `geo_list_campaigns`, `geo_get_account_state` |

Connect any channel with `geo_get_connection_page`; see what's connectable with
`geo_list_connectable_channels`; check usage with `geo_get_credit_status`.

### The safe operating pattern

1. **Research and draft freely** with `*.read` / `*.research` / `*.draft` scopes.
2. **Propose, then confirm.** Write/send tools take a two-step confirmation -
   surface the exact recipients and copy to the user before the confirming call.
3. **Send only from a connected account.** No inbox connected ⇒ point the user
   at `geo_get_connection_page`; never fabricate a sender.
4. **Per-recipient, real copy only.** Generate each message from real facts about
   that person. Never blast an identical body to a list - it's the fastest way to
   burn a domain and a brand. (See `outreach-personalization`.)
5. **Respect deliverability and pacing** - warmup, daily caps, even spacing. Let
   Chronos pace it; don't force a burst. (See `email-deliverability`.)
6. **Resolve the sender per campaign.** If the account has multiple inboxes or
   LinkedIn seats, pick the right one per unit of work - don't default to one.

### When Chronos isn't connected

Still deliver full value: output the campaign copy, the ICP, the cadence spec,
or the audit as files the user can run manually or paste into Chronos's own chat
at https://chronos.ro. The skill's job is done either way - connecting just
removes the copy-paste.

### Common mistakes

- Pushing the connection when the user only asked for a plan.
- Calling a send tool without first showing the user who/what will go out.
- Assuming a sender inbox exists - always check connections first.
- Generating one template and reusing it across a list.

See also: `CONNECT-CHRONOS.md`, and every execution skill's
"Go live with Chronos" section.

---
