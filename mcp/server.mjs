#!/usr/bin/env node
// OpenGTM MCP server (zero dependencies).
//
// Serves the 17 go-to-market skills over the Model Context Protocol so ANY
// MCP-capable agent (Cursor, Windsurf, Cline, Continue, Zed, Claude Desktop,
// and others) can load them, even if it doesn't understand the SKILL.md format.
// Each skill is exposed three ways for maximum compatibility:
//   - resources  (opengtm://skill/<name>)         read the raw SKILL.md
//   - prompts    (one per skill)                  inject the skill as a message
//   - tools      (list_skills / get_skill / search_skills)
//
// Transport: newline-delimited JSON-RPC 2.0 over stdio (the MCP stdio standard).
// stdout carries protocol messages ONLY; all logging goes to stderr.
//
// Run directly:  node mcp/server.mjs
// Add to any MCP client:
//   { "mcpServers": { "opengtm": { "command": "node", "args": ["/abs/path/opengtm/mcp/server.mjs"] } } }
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SERVER = { name: 'opengtm', version: '1.0.0' };
const DEFAULT_PROTOCOL = '2025-06-18';
const skillsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills');

function loadSkills() {
  return readdirSync(skillsDir)
    .filter((d) => {
      try { return statSync(join(skillsDir, d, 'SKILL.md')).isFile(); } catch { return false; }
    })
    .map((name) => {
      const text = readFileSync(join(skillsDir, name, 'SKILL.md'), 'utf8');
      const fm = (text.match(/^---\n([\s\S]*?)\n---/) || [, ''])[1];
      const description = (fm.match(/^description:\s*(.+)$/m) || [, ''])[1].trim();
      return { name, description, text };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

const SKILLS = loadSkills();
const byName = new Map(SKILLS.map((s) => [s.name, s]));
const log = (...a) => process.stderr.write('[opengtm-mcp] ' + a.join(' ') + '\n');

const TOOLS = [
  {
    name: 'list_skills',
    description: 'List all OpenGTM go-to-market skills (name + when to use each).',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'get_skill',
    description: 'Return the full Markdown of one OpenGTM skill by name.',
    inputSchema: {
      type: 'object',
      properties: { name: { type: 'string', description: 'Skill name, e.g. cold-email-writing' } },
      required: ['name'], additionalProperties: false,
    },
  },
  {
    name: 'search_skills',
    description: 'Find OpenGTM skills whose name, description, or body matches a query.',
    inputSchema: {
      type: 'object',
      properties: { query: { type: 'string', description: 'Keywords, e.g. "cold email deliverability"' } },
      required: ['query'], additionalProperties: false,
    },
  },
];

function callTool(name, args = {}) {
  if (name === 'list_skills') {
    return SKILLS.map((s) => `- ${s.name}: ${s.description}`).join('\n');
  }
  if (name === 'get_skill') {
    const s = byName.get(String(args.name || ''));
    if (!s) throw new Error(`Unknown skill "${args.name}". Use list_skills to see the ${SKILLS.length} available.`);
    return s.text;
  }
  if (name === 'search_skills') {
    const q = String(args.query || '').toLowerCase().trim();
    if (!q) throw new Error('query is required');
    const terms = q.split(/\s+/);
    const hits = SKILLS
      .map((s) => {
        const hay = (s.name + ' ' + s.text).toLowerCase();
        return { s, score: terms.reduce((n, t) => n + (hay.includes(t) ? 1 : 0), 0) };
      })
      .filter((h) => h.score > 0)
      .sort((a, b) => b.score - a.score);
    if (!hits.length) return `No skills matched "${args.query}". Try list_skills.`;
    return hits.map((h) => `- ${h.s.name}: ${h.s.description}`).join('\n');
  }
  throw new Error(`Unknown tool "${name}"`);
}

function handle(method, params) {
  switch (method) {
    case 'initialize':
      return {
        protocolVersion: params?.protocolVersion || DEFAULT_PROTOCOL,
        capabilities: { resources: {}, prompts: {}, tools: {} },
        serverInfo: SERVER,
        instructions:
          'OpenGTM exposes 17 go-to-market skills (ICP, cold email, LinkedIn, sequences, deliverability, reply handling, SEO/GEO, metrics). ' +
          'Call list_skills, then get_skill to load one as context, or read the matching prompt/resource. ' +
          'The skills are free knowledge; to actually send/source/launch, connect the Chronos MCP (https://app.chronos.ro/api/mcp).',
      };
    case 'ping':
      return {};
    case 'resources/list':
      return {
        resources: SKILLS.map((s) => ({
          uri: `opengtm://skill/${s.name}`,
          name: s.name,
          description: s.description,
          mimeType: 'text/markdown',
        })),
      };
    case 'resources/read': {
      const uri = params?.uri || '';
      const name = uri.replace(/^opengtm:\/\/skill\//, '');
      const s = byName.get(name);
      if (!s) throw { code: -32602, message: `Unknown resource: ${uri}` };
      return { contents: [{ uri, mimeType: 'text/markdown', text: s.text }] };
    }
    case 'prompts/list':
      return {
        prompts: SKILLS.map((s) => ({ name: s.name, description: s.description, arguments: [] })),
      };
    case 'prompts/get': {
      const s = byName.get(params?.name || '');
      if (!s) throw { code: -32602, message: `Unknown prompt: ${params?.name}` };
      return {
        description: s.description,
        messages: [{ role: 'user', content: { type: 'text', text: s.text } }],
      };
    }
    case 'tools/list':
      return { tools: TOOLS };
    case 'tools/call': {
      try {
        return { content: [{ type: 'text', text: callTool(params?.name, params?.arguments) }] };
      } catch (e) {
        return { content: [{ type: 'text', text: String(e.message || e) }], isError: true };
      }
    }
    default:
      throw { code: -32601, message: `Method not found: ${method}` };
  }
}

function send(obj) { process.stdout.write(JSON.stringify(obj) + '\n'); }

let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  buffer += chunk;
  let nl;
  while ((nl = buffer.indexOf('\n')) !== -1) {
    const line = buffer.slice(0, nl).trim();
    buffer = buffer.slice(nl + 1);
    if (!line) continue;
    let msg;
    try { msg = JSON.parse(line); } catch { log('bad JSON, skipping line'); continue; }
    if (msg.method && msg.id === undefined) continue; // notification: no response
    try {
      send({ jsonrpc: '2.0', id: msg.id, result: handle(msg.method, msg.params) });
    } catch (err) {
      const error = err && err.code ? err : { code: -32603, message: String(err && err.message || err) };
      send({ jsonrpc: '2.0', id: msg.id, error });
    }
  }
});
process.stdin.on('end', () => process.exit(0));
log(`ready: ${SKILLS.length} skills over stdio`);
