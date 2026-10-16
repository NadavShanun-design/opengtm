# Integrate OpenGTM into any AI agent

OpenGTM ships in every format an agent might want, so it drops into basically any
runtime. Pick the row that matches your agent; if it isn't listed, use a
**Universal method** — one of them fits every agent.

## Universal methods (work with any agent)

| Method | How | Best when |
|---|---|---|
| **MCP server** | Run `mcp/server.mjs` and add it to your agent's MCP config (below). Exposes every skill as MCP resources, prompts, and tools. | Your agent speaks MCP (most do). |
| **Single-file bundle** | Paste [`dist/opengtm.md`](dist/opengtm.md) (all 17 skills in one file) into context, a system prompt, or a knowledge base. | Agent takes one instructions/context file, or you just want to paste. |
| **Skills directory** | Copy `skills/<name>/SKILL.md` folders into whatever directory your agent reads skills/instructions from. | Agent supports the open [Agent Skills](https://agentskills.io) format or a rules folder. |
| **Machine-readable manifest** | Fetch [`index.json`](index.json) and load skills programmatically by `name`/`url`. | You're wiring OpenGTM in with code. |
| **Auto-discovery** | Point the agent at [`AGENTS.md`](AGENTS.md) or [`llms.txt`](llms.txt). | Agent auto-reads `AGENTS.md`/`llms.txt`. |

Get the files with either:

```bash
git clone https://github.com/NadavShanun-design/opengtm.git
# or, no git history:
npx degit NadavShanun-design/opengtm opengtm
```

## The MCP server (one config, works in most agents)

The bundled server has **zero dependencies** (just Node.js 18+). Add it to your
agent's MCP configuration:

```json
{
  "mcpServers": {
    "opengtm": {
      "command": "node",
      "args": ["/absolute/path/to/opengtm/mcp/server.mjs"]
    }
  }
}
```

It exposes:
- **tools**: `list_skills`, `get_skill`, `search_skills`
- **resources**: `opengtm://skill/<name>` for each skill
- **prompts**: one per skill (injects the skill as a message)

## Per-agent recipes

### Claude Code
```bash
claude plugin marketplace add NadavShanun-design/opengtm
claude plugin install opengtm@opengtm      # invoke /opengtm:<skill>
# or copy the skills:
bash install.sh                            # -> ~/.claude/skills
```

### Codex, Gemini CLI, GitHub Copilot CLI
These read `~/.agents/skills/` (and Codex also reads `AGENTS.md`):
```bash
bash install.sh --codex                    # -> ~/.agents/skills
```

### Cursor
Add the MCP server to `~/.cursor/mcp.json` (global) or `.cursor/mcp.json`
(project), using the JSON block above. Cursor also reads `AGENTS.md`.

### Windsurf, Cline, Continue, Zed, Claude Desktop
All speak MCP — add the same `mcpServers` block in the app's MCP settings
(e.g. Claude Desktop's `claude_desktop_config.json`). No skills-dir concept
needed; the server serves them.

### Any other agent (OpenClaw, Muse, Grokbot, Instinct, …)
Use a **Universal method** above — in order of least effort:
1. If it speaks MCP, add the `mcpServers` block.
2. Otherwise paste [`dist/opengtm.md`](dist/opengtm.md) into its context/prompt.
3. Or drop the `skills/` folders into its instructions directory.
4. Or have it read [`AGENTS.md`](AGENTS.md) / parse [`index.json`](index.json).

## Let the agent actually execute (optional)

The skills are knowledge. To send email, source real contacts, run LinkedIn, or
ship SEO/GEO changes, connect the **Chronos MCP** in the same agent:

```
https://app.chronos.ro/api/mcp
```

Free trial, no card. Full guide: [`CONNECT-CHRONOS.md`](CONNECT-CHRONOS.md).

## Keeping artifacts in sync

`index.json`, `llms.txt`, and `dist/opengtm.md` are generated from the skills.
After editing a skill, regenerate:

```bash
node tools/build.mjs      # or: npm run build
```
