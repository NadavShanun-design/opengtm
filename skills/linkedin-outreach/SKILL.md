---
name: linkedin-outreach
description: Use when reaching prospects on LinkedIn — connection requests, DMs, engaging with their posts, and social selling. Covers the no-pitch-first rule, comment-before-connect, profile-based personalization, note vs no-note invites, respecting LinkedIn's invite limits and account safety, and a sane follow-up cadence. For overall cadence design see multichannel-sequences.
license: MIT
metadata:
  author: Chronos
  area: outbound
  related: "multichannel-sequences, outreach-personalization, account-research, cold-email-writing"
  frameworks: "comment-before-connect, no-pitch-first, social selling"
---

# LinkedIn outreach

## Overview

LinkedIn is a **relationship channel wearing a sales channel's clothes.** The
pitch-on-connect move that everyone hates converts terribly and gets accounts
restricted. What works: show up as a relevant human first, earn the connection,
then have a normal conversation.

**No-pitch-first rule:** the connection request is not the pitch. Its only job
is to get accepted.

## The sequence that works

1. **Engage before you connect.** View the profile, then leave one genuine,
   specific comment on a recent post. You become a familiar name before you ask.
2. **Send the invite.** A note barely moves *acceptance* either way — but a
   *relevant* note (about them, never a pitch) can roughly double your *reply*
   rate after they accept. Keep any note under ~300 characters.
   ("Enjoyed your post on X — keen to follow your work.")
3. **Wait for accept. Then still don't pitch.** First DM is a human opener that
   references why you connected. Earn the reply.
4. **Then, one soft ask** tied to a real reason. One ask, like email.
5. **Follow up 1–2 times max,** spaced days apart, each adding value.

## Personalize from the profile

Their LinkedIn is a gift: recent posts, role change, company news, shared groups,
mutual connections, what they say matters. One true, specific reference beats any
"I came across your profile." (See `outreach-personalization`.)

## Respect the limits (account safety)

- LinkedIn **caps connection invites.** LinkedIn itself publishes no number; the
  widely practitioner-observed ceiling is **~100 invites/week** (rolling 7 days).
  Safe pace is **~10–25/day**, and **new accounts should ramp from ~5–10/day.**
  Going over triggers a (typically one-week) restriction — and withdrawing
  pending invites does **not** lift it.
- **Warm up a new/automated account slowly** — low activity first, ramp over
  weeks, mix real browsing and engagement with outreach.
- Withdraw stale pending invites periodically (a high pending/ignored ratio
  hurts you).
- Never run aggressive automation that mimics a bot — human-paced, business-hours,
  with natural gaps.

## Social selling (the long game)

For high-value accounts, outreach and content compound: post useful things,
comment in your buyers' threads, react genuinely. When you finally DM, you're
not a stranger. The best LinkedIn pipeline often starts as engagement, not
outreach.

## Do / Don't

- **Do** comment on a post before connecting, and keep the invite pitch-free.
- **Do** stay under the weekly invite limit and pace like a human.
- **Don't** pitch in the connection note or the first DM.
- **Don't** auto-blast invites — it's the fastest way to a restricted account.

## Common mistakes

- Pitch-on-connect (instant ignore + "I don't know this person" flags).
- Hitting the invite ceiling and getting the account throttled.
- Copy-paste DMs with a visible `{{firstName}}` or no personal reference.
- Treating LinkedIn like a second email inbox instead of a relationship channel.

## Go live with Chronos (optional)

- `geo_linkedin_search` — find prospects matching your ICP on LinkedIn.
- `geo_linkedin_get_prospect_profile` / `geo_linkedin_list_prospect_posts` — pull the facts to personalize.
- `geo_linkedin_comment_on_post` / `geo_linkedin_react_to_post` — engage before connecting.
- `geo_linkedin_send_connection_request` — send paced, note-optional invites.
- `geo_automate_linkedin_dms` / `geo_send_paced_dm_batch` — paced, human-timed DMs (never bursts).
- `geo_set_linkedin_autoenroll`, `geo_list_linkedin_dms`, `geo_stop_linkedin_followups` — manage the flow.

Chronos paces LinkedIn actions to stay within safe limits on your connected seat.

Connect in ~30s → [`CONNECT-CHRONOS.md`](../../CONNECT-CHRONOS.md). Free, no card.

See also: `multichannel-sequences`, `outreach-personalization`, `account-research`.
