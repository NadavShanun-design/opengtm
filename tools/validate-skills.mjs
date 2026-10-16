#!/usr/bin/env node
// Validate Agent Skill frontmatter + structure for this repo.
// Usage: node tools/validate-skills.mjs [repo-root]
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || '.';
const skillsDir = join(root, 'skills');

if (!existsSync(skillsDir)) {
  console.error(`No skills/ directory at ${skillsDir}`);
  process.exit(1);
}

const nameRe = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const dirs = readdirSync(skillsDir)
  .filter((d) => statSync(join(skillsDir, d)).isDirectory())
  .sort();

console.log(`Found ${dirs.length} skill directories\n`);
const seen = new Set();
let fail = 0;

for (const dir of dirs) {
  const file = join(skillsDir, dir, 'SKILL.md');
  if (!existsSync(file)) { console.log(`FAIL ${dir}: no SKILL.md`); fail++; continue; }

  const txt = readFileSync(file, 'utf8');
  const fm = txt.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) { console.log(`FAIL ${dir}: no YAML frontmatter`); fail++; continue; }

  const name = (fm[1].match(/^name:\s*(.+)$/m) || [])[1]?.trim() || '';
  const desc = (fm[1].match(/^description:\s*(.+)$/m) || [])[1]?.trim() || '';
  const lines = txt.split('\n').length;

  const errs = [];
  if (!name) errs.push('missing name');
  if (name && name !== dir) errs.push(`name "${name}" != dir "${dir}"`);
  if (name && !nameRe.test(name)) errs.push('name not lowercase/hyphen');
  if (name.length > 64) errs.push('name > 64 chars');
  if (seen.has(name)) errs.push('duplicate name');
  seen.add(name);
  if (!desc) errs.push('missing description');
  if (desc.length > 1024) errs.push(`description ${desc.length} > 1024`);
  if (lines > 500) errs.push(`SKILL.md ${lines} lines > 500`);

  if (errs.length) { console.log(`FAIL ${dir}: ${errs.join('; ')}`); fail++; }
  else console.log(`ok   ${dir}  (desc ${desc.length} chars, ${lines} lines)`);
}

console.log(fail ? `\n${fail} FAILURE(S)` : `\nAll ${dirs.length} skills valid ✔`);
process.exit(fail ? 1 : 0);
