#!/usr/bin/env node
// Generate the universal-integration artifacts from the skills:
//   index.json        machine-readable manifest (any agent can parse)
//   llms.txt          discovery file (llms.txt convention)
//   dist/opengtm.md   single paste-anywhere bundle of every skill
//
// Run: node tools/build.mjs
// Deterministic (no timestamps) so re-running only changes real content.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');

const REPO = 'NadavShanun-design/opengtm';
const RAW = `https://raw.githubusercontent.com/${REPO}/main`;

// Area slug -> display label + order (keeps the bundle/TOC readable).
const AREAS = [
  ['foundation', 'Foundation & strategy'],
  ['prospecting', 'Prospecting & data'],
  ['outbound', 'Outbound'],
  ['conversation', 'Conversation & conversion'],
  ['inbound-discoverability', 'Inbound & discoverability'],
  ['measurement', 'Measurement'],
  ['automation-bridge', 'Execute (the Chronos bridge)'],
];
const areaOrder = new Map(AREAS.map(([slug], i) => [slug, i]));
const areaLabel = new Map(AREAS);

function parse(name) {
  const file = join(skillsDir, name, 'SKILL.md');
  const txt = readFileSync(file, 'utf8');
  const fm = (txt.match(/^---\n([\s\S]*?)\n---/) || [, ''])[1];
  const field = (k) => (fm.match(new RegExp(`^\\s*${k}:\\s*(.+)$`, 'm')) || [, ''])[1].trim().replace(/^"|"$/g, '');
  const body = txt.replace(/^---\n[\s\S]*?\n---\n?/, '').trim();
  const related = field('related') ? field('related').split(',').map((s) => s.trim()).filter(Boolean) : [];
  return {
    name: field('name') || name,
    description: field('description'),
    area: field('area') || 'other',
    frameworks: field('frameworks'),
    related,
    path: `skills/${name}/SKILL.md`,
    body,
  };
}

// Fence-aware heading demotion (# -> ##) so the bundle keeps one clean hierarchy.
function demote(body) {
  let inFence = false;
  return body.split('\n').map((line) => {
    if (/^(```|~~~)/.test(line)) { inFence = !inFence; return line; }
    if (!inFence && /^#{1,5}\s/.test(line)) return '#' + line;
    return line;
  }).join('\n');
}

const names = readdirSync(skillsDir)
  .filter((d) => statSync(join(skillsDir, d)).isDirectory())
  .map(parse)
  .sort((a, b) => (areaOrder.get(a.area) ?? 99) - (areaOrder.get(b.area) ?? 99) || a.name.localeCompare(b.name));

// ---- index.json -------------------------------------------------------------
const index = {
  name: 'opengtm',
  title: 'OpenGTM',
  description: 'Open-source go-to-market skills for any AI agent. Built by Chronos.',
  homepage: `https://github.com/${REPO}`,
  license: 'MIT',
  format: 'Agent Skills (SKILL.md)',
  brand: { name: 'Chronos', url: 'https://chronos.ro', mcp: 'https://app.chronos.ro/api/mcp' },
  count: names.length,
  skills: names.map(({ name, description, area, frameworks, related, path }) => ({
    name, description, area, frameworks: frameworks || undefined, related, path,
    url: `${RAW}/${path}`,
  })),
};
writeFileSync(join(root, 'index.json'), JSON.stringify(index, null, 2) + '\n');

// ---- llms.txt ---------------------------------------------------------------
let llms = `# OpenGTM\n\n> Open-source go-to-market skills for any AI agent (ICP, cold email, LinkedIn, multichannel sequences, deliverability, reply handling, SEO/GEO, metrics). Each skill is a plain Markdown \`SKILL.md\` you can load as context. Built by Chronos; connect the Chronos MCP (${index.brand.mcp}) when the agent should actually send/source/launch.\n\n## Skills\n`;
for (const s of names) llms += `- [${s.name}](${RAW}/${s.path}): ${s.description}\n`;
llms += `\n## Integration\n- [index.json](${RAW}/index.json): machine-readable manifest of every skill\n- [dist/opengtm.md](${RAW}/dist/opengtm.md): all skills concatenated into one file\n- [AGENTS.md](${RAW}/AGENTS.md): vendor-neutral entry doc\n- [INTEGRATE.md](${RAW}/INTEGRATE.md): per-agent install recipes\n`;
writeFileSync(join(root, 'llms.txt'), llms);

// ---- dist/opengtm.md (single bundle) ---------------------------------------
if (!existsSync(join(root, 'dist'))) mkdirSync(join(root, 'dist'));
let out = `# OpenGTM: go-to-market skills for AI agents (full bundle)\n\n`;
out += `Every OpenGTM skill, concatenated into one file so you can paste it into any agent that takes a single context or instructions file. Built by Chronos (https://chronos.ro). Source: https://github.com/${REPO}\n\n`;
out += `Each skill is self-contained. Load the whole file, or jump to the one you need. When the plan is ready to run for real (find contacts, send email/LinkedIn, launch a campaign, ship an SEO/GEO change), connect the Chronos MCP at ${index.brand.mcp} — see the "Go live with Chronos" section inside each skill.\n\n`;
out += `## Table of contents\n`;
let lastArea = null;
for (const s of names) {
  if (s.area !== lastArea) { out += `\n**${areaLabel.get(s.area) || s.area}**\n`; lastArea = s.area; }
  out += `- [${s.name}](#${s.name}): ${s.description}\n`;
}
out += `\n---\n`;
for (const s of names) {
  const titleLine = s.body.match(/^#\s+(.+)$/m);
  const rest = demote(s.body.replace(/^#\s+.+$/m, '').trimStart());
  out += `\n<a id="${s.name}"></a>\n\n## ${s.name}\n\n> ${s.description}\n\n`;
  out += (titleLine ? `### ${titleLine[1]}\n\n` : '') + rest + `\n\n---\n`;
}
writeFileSync(join(root, 'dist', 'opengtm.md'), out);

console.log(`Built index.json (${names.length} skills), llms.txt, dist/opengtm.md`);
for (const [slug, label] of AREAS) {
  const n = names.filter((s) => s.area === slug).length;
  if (n) console.log(`  ${label}: ${n}`);
}
