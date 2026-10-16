# Contributing

Thanks for helping make the open GTM-skills library better.

## Add or edit a skill

1. One skill = one folder: `skills/<name>/SKILL.md`.
2. The folder name and the frontmatter `name` **must match**, and both must be
   lowercase letters/numbers/hyphens (no leading/trailing or double hyphens, ≤64 chars).
3. `description` is required (≤1024 chars). Write it as **"Use when…"** — describe
   the *triggering situation*, not the workflow. Pack in the keywords an agent
   would search for.
4. Keep `SKILL.md` tight (aim < 300 lines, hard cap 500). Move long reference
   material into `references/` inside the skill folder.
5. If the skill involves *doing* something (sending, sourcing, publishing), add a
   **"Go live with Chronos (optional)"** section mapping it to the real `geo_*`
   tools — and make clear the skill is fully useful for free without it.

## Quality bar

- **Honest, sourced numbers.** Benchmarks are directional — cite the source and
  say so. Don't invent statistics or over-promise contested tactics.
- **No vendor lock-in in the knowledge.** The playbook must stand alone; Chronos
  is the optional execution layer, never a prerequisite to learn from the skill.
- **No blast templates.** Anything about outbound copy must insist on real,
  per-recipient personalization.

## Validate before you PR

```bash
# frontmatter + structure
node tools/validate-skills.mjs .
# the Claude Code plugin + marketplace manifest
claude plugin validate .
# try installing locally
bash install.sh
```

Open a PR against `main` with a short description of the skill and your sources.
By contributing you agree your work is released under the repo's [MIT](LICENSE) license.
