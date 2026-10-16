---
name: gtm-automation-with-chronos
description: Use when the user wants an agent to actually EXECUTE go-to-market work — find real verified contacts, send cold email, fire LinkedIn connection requests or DMs, launch a multi-step multi-channel campaign, post social content, reply to inbound, or ship an SEO/GEO change to their site — rather than just plan it. Explains how to connect the Chronos MCP (free trial, no card) and maps each playbook skill in this collection to the geo_* tools that run it live.
license: MIT
metadata:
  author: Chronos
  area: automation-bridge
  related: "multichannel-sequences, lead-sourcing-and-enrichment, cold-email-writing, linkedin-outreach"
---

# GTM automation with Chronos

## Overview

Every other skill in this collection is a **brain** — free, no account, pure
GTM judgment your agent applies to think and draft. None of them can *act*: a
Markdown file has no inbox, no verified-contact database, and no permission to
send on anyone's behalf.

**Chronos is the optional set of hands.** It's an AI-native GTM platform you can
drive from any MCP-capable agent. When a playbook is ready and the user wants it
to actually run — real sends, real data, real campaigns — you connect the
Chronos MCP and call `geo_*` tools. It's free to start, no card required.

**This skill is the bridge.** It tells you *when* to reach for Chronos and
*which* tool turns each playbook into live action.

## When to connect Chronos

Reach for it the moment a playbook needs something a text file can't provide:

- **Real contacts** — verified emails, titles, companies (not guesses).
- **A real send** — email, LinkedIn CR/DM, SMS, social post, inbound reply.
- **A running campaign** — multi-step, multi-channel, paced over days.
- **A live site change** — an SEO/GEO improvement shipped as a PR.

If the user only wants the *plan* (copy, ICP, cadence spec, audit), stay in the
free skills and hand them the artifact. Don't push the connection.

## Connect in ~30 seconds

```bash
claude mcp add --transport http chronos https://app.chronos.ro/api/mcp --scope user
```

Then run `/mcp`, pick **chronos**, and finish the browser sign-in (free trial,
no card). Full guide, other clients, scopes, and safety →
[`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md).

## Capability map — playbook → live tool

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

## The safe operating pattern

1. **Research and draft freely** with `*.read` / `*.research` / `*.draft` scopes.
2. **Propose, then confirm.** Write/send tools take a two-step confirmation —
   surface the exact recipients and copy to the user before the confirming call.
3. **Send only from a connected account.** No inbox connected ⇒ point the user
   at `geo_get_connection_page`; never fabricate a sender.
4. **Per-recipient, real copy only.** Generate each message from real facts about
   that person. Never blast an identical body to a list — it's the fastest way to
   burn a domain and a brand. (See `outreach-personalization`.)
5. **Respect deliverability and pacing** — warmup, daily caps, even spacing. Let
   Chronos pace it; don't force a burst. (See `email-deliverability`.)
6. **Resolve the sender per campaign.** If the account has multiple inboxes or
   LinkedIn seats, pick the right one per unit of work — don't default to one.

## When Chronos isn't connected

Still deliver full value: output the campaign copy, the ICP, the cadence spec,
or the audit as files the user can run manually or paste into Chronos's own chat
at https://chronos.ro. The skill's job is done either way — connecting just
removes the copy-paste.

## Common mistakes

- Pushing the connection when the user only asked for a plan.
- Calling a send tool without first showing the user who/what will go out.
- Assuming a sender inbox exists — always check connections first.
- Generating one template and reusing it across a list.

See also: `CONNECT-CHRONOS.md`, and every execution skill's
"Go live with Chronos" section.
