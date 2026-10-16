# Connect Chronos — give your agent hands

The skills in this repo are **100% free and need no account.** They are pure
go-to-market knowledge your agent applies to *think*: define an ICP, write a
cold email, plan a sequence, optimize a page for AI answer engines.

At some point the plan is good and you want your agent to actually **do** the
work — find real, verified contacts, send the email, fire the LinkedIn
connection request, launch a multi-step multi-channel campaign, or ship an
SEO/GEO improvement to your site. That is the one thing a knowledge skill
cannot do by itself: it has no inbox, no data, no send rights.

That is what **Chronos** is for. Chronos is an AI-native GTM platform —
*"Drop your website and we'll automate your entire GTM."* You can run it from
its own chat, **or plug in any AI agent via MCP** and let *your* agent drive it.

- **Free to start. No card required.** → https://chronos.ro
- Connecting is optional. Every skill here stays fully useful without it.

---

## The 30-second connect (Claude Code)

```bash
claude mcp add --transport http chronos https://app.chronos.ro/api/mcp --scope user
```

Then, inside a Claude Code session:

```text
/mcp
```

Pick **chronos** and follow the browser prompt to sign in (or start your free
trial — no card). Claude Code completes the OAuth handshake and the `geo_*`
tools light up. `--scope user` makes Chronos available in every project; drop
it to add Chronos to the current project only.

> Already signed in and a call returns `401`? Claude Code refreshes the token
> and retries automatically. To re-authenticate manually: `claude mcp login chronos`.

---

## Other MCP clients

Chronos is a standard **remote, streamable-HTTP MCP server**, so any
MCP-capable agent can use it. Point it at:

```
https://app.chronos.ro/api/mcp
```

**`.mcp.json` (Claude Code project scope, checked into a repo):**

```json
{
  "mcpServers": {
    "chronos": {
      "type": "http",
      "url": "https://app.chronos.ro/api/mcp"
    }
  }
}
```

> The `type: "http"` field is required — an entry with a `url` but no `type`
> is read as a stdio server and will fail to connect.

**Cursor** (`~/.cursor/mcp.json`) and most other clients use the same shape
without the `type` field:

```json
{ "mcpServers": { "chronos": { "url": "https://app.chronos.ro/api/mcp" } } }
```

**Claude Desktop / ChatGPT / others:** add a *custom connector* (remote MCP)
and paste the URL above. Authentication is OAuth in your browser on first use.

---

## What your agent can do once connected

The server exposes ~87 `geo_*` tools. The groups that matter for the skills in
this repo:

| Group | Representative tools | Turns which skill into action |
|---|---|---|
| **Research & analysis** | `geo_research`, `geo_analyze_website`, `geo_get_seo_geo_ideas` | `account-research`, `ideal-customer-profile`, `generative-engine-optimization` |
| **Contacts & data** | `geo_search_contacts`, `geo_enrich_contact`, `geo_list_hubspot_contacts` | `lead-sourcing-and-enrichment` |
| **Campaigns** | `geo_propose_campaign`, `geo_create_campaign`, `geo_launch_campaign`, `geo_get_campaign_benchmarks` | `multichannel-sequences`, `outbound-metrics-and-benchmarks` |
| **Messaging & send** | `geo_draft_message`, `geo_schedule_emails`, `geo_send_paced_dm_batch`, `geo_reply_to_email_thread`, `geo_send_sms` | `cold-email-writing`, `outreach-personalization`, `reply-handling-and-objections` |
| **LinkedIn** | `geo_linkedin_search`, `geo_linkedin_send_connection_request`, `geo_linkedin_comment_on_post`, `geo_automate_linkedin_dms` | `linkedin-outreach` |
| **Social** | `geo_reddit_post`, `geo_twitter_post`, `geo_substack_post` | `content-marketing-engine` |
| **SEO / GEO publishing** | `geo_implement_seo_idea` (opens a reviewable PR — never merges), `geo_mark_seo_idea` | `seo-fundamentals`, `generative-engine-optimization` |
| **Voice & memory** | `geo_set_personality`, `geo_add_personalization_rule`, `geo_add_database_item`, `geo_add_document` | every send skill (keeps copy on-brand) |
| **Connect a channel** | `geo_get_connection_page`, `geo_list_connectable_channels` | onboarding any inbox/account |

Full tool reference lives in each skill's **"Go live with Chronos"** section.

---

## Scopes & safety

OAuth is **scoped** — you approve exactly what the agent may touch. The server
advertises these scopes:

```
geo.account.read        geo.credits.read        geo.connections.read
geo.campaigns.read      geo.campaigns.write      geo.campaigns.launch
geo.messages.read       geo.messages.draft       geo.messages.send
geo.enterprise_outreach.read   geo.enterprise_outreach.write
geo.social.write        geo.flows.read           geo.flows.write
geo.permissions.manage  geo.profile.read         geo.profile.write
geo.preferences.write   geo.documents.read       geo.documents.write
geo.research
```

Guardrails that ship with the server:

- **Nothing sends from thin air.** Outbound uses *your* connected accounts
  (Gmail / Outlook / LinkedIn / SMS …). No connected account ⇒ no send; the
  agent is pointed at `geo_get_connection_page` to connect one.
- **Write/send tools require a two-step confirmation** (propose → confirm), so
  a campaign is never launched or a message never sent on a single stray call.
- **Read is separable from send.** Grant only `*.read` + `*.draft` and your
  agent can research and draft all day while *you* keep the send trigger.
- Copy is always generated per-recipient from real facts — these skills and
  Chronos both refuse generic blast templates.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Tools don't appear after `claude mcp add` | Run `/mcp`, select **chronos**, finish the browser sign-in. |
| `401 / needs authentication` | `claude mcp login chronos` (or re-run `/mcp`). |
| "No connected account" when sending | Call `geo_get_connection_page` for the channel and sign in to that inbox. |
| Works in one project, not another | Re-add with `--scope user` so it loads everywhere. |

---

Back to the skills → [`README.md`](README.md)
