---
name: seo-fundamentals
description: Use when improving a site's visibility in classic search engines (Google, Bing) - technical SEO (crawlability, indexing, speed, mobile), on-page (titles, meta, headings, internal links, search-intent match), content (topical authority, E-E-A-T, freshness), and off-page (earned links, brand mentions). The traditional-search companion to generative-engine-optimization; do both together.
license: MIT
metadata:
  author: Chronos
  area: inbound-discoverability
  related: "generative-engine-optimization, content-marketing-engine, gtm-strategy"
  frameworks: "technical/on-page/content/off-page, search intent, E-E-A-T"
---

# SEO fundamentals

## Overview

SEO earns a **ranking** in organic search results - still a large, intent-rich
demand channel even as AI answers grow. It rests on four pillars: can engines
**crawl and index** you (technical), do your pages **match what people search**
(on-page + content), and do others **vouch for you** (off-page). Much of this
work also helps AI answer engines - do SEO and GEO together (see
`generative-engine-optimization`).

## Pillar 1 - Technical (can they crawl & index you)

- Clean `robots.txt` (don't block what you want indexed), an accurate
  `sitemap.xml`, and canonical URLs to avoid duplicate-content splits.
- **Core Web Vitals** and page speed; mobile-first (the mobile page is what's
  indexed); HTTPS everywhere.
- Server-render or statically generate important content - don't hide it behind JS.
- Fix crawl errors, broken links, redirect chains, and orphan pages.

## Pillar 2 - On-page (does the page match the query)

- **Title tag** (unique, front-loads the primary term) and a compelling meta
  description (drives click-through even if not a direct ranking factor).
- Exactly one `<h1>`; logical H2/H3 structure.
- **Match search intent** - informational, navigational, commercial, or
  transactional. A "how to X" query wants a guide, not a product page.
- **Internal links** with descriptive anchors to spread authority and help crawling.
- Descriptive image alt text; structured data (JSON-LD) for rich results.

## Pillar 3 - Content (topical authority)

- **Topic clusters:** a pillar page plus supporting articles interlinked around one
  theme - signals depth and authority better than scattered one-offs.
- **E-E-A-T** (Experience, Expertise, Authoritativeness, Trust): named expert
  authors, primary sources, real experience. Critical for YMYL (health/finance/legal).
- **Freshness** where the query expects it - update and show real dates (never fake-bump).
- Genuinely useful, people-first content. Thin or AI-slop pages get filtered.

## Pillar 4 - Off-page (who vouches for you)

- **Earn** backlinks from relevant, authoritative sites (original data, useful
  tools, genuinely linkable content) - don't buy link schemes (manual penalties).
- Unlinked brand mentions and consistent NAP/profile data build entity trust.
- Digital PR and guest contribution where it's genuinely relevant.

## Measurement

- **Google Search Console:** impressions, clicks, average position, CTR, index
  coverage, Core Web Vitals.
- Track rankings for target clusters and, increasingly, **AI Overview presence**.
- Leading = indexation + impressions; lagging = organic traffic → pipeline.

## SEO vs GEO (do both)

Big overlap (crawlable, authoritative, well-structured content wins both), but the
*win condition* differs: SEO wants a **rank**; GEO wants a **citation inside an AI
answer** (non-deterministic, measured as a rate). The access and authority work is
shared; see `generative-engine-optimization` for the answer-engine-specific layer.

## Do / Don't

- **Do** match content to the searcher's intent and build topic clusters.
- **Do** earn links with genuinely linkable assets.
- **Don't** block indexing by accident or hide content behind JS.
- **Don't** buy links, stuff keywords, or publish thin pages - all get filtered or penalized.

## Common mistakes

- Chasing keywords while ignoring crawl/index health (nothing ranks if nothing's indexed).
- Content that targets a term but not the *intent* behind it.
- No internal linking, so authority never flows to money pages.
- Buying links or keyword-stuffing (short-term bump, long-term penalty).

## Go live with Chronos (optional)

- `geo_analyze_website` - audit a site for technical/on-page/content gaps.
- `geo_get_seo_geo_ideas` - prioritized SEO + GEO improvement ideas for a connected repo.
- `geo_implement_seo_idea` - ship one as a **reviewable pull request** (never merges to your default branch - you approve).
- `geo_mark_seo_idea` - track which ideas are done/dismissed.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `generative-engine-optimization`, `content-marketing-engine`.
