#!/usr/bin/env bash
# Install the OpenGTM skills into your agent's skills directory.
#
# Usage:
#   bash install.sh                 # install to ~/.claude/skills (Claude Code)
#   bash install.sh --codex         # install to ~/.agents/skills (Codex / cross-runtime)
#   DEST=/custom/path bash install.sh
#
# Every skill is a plain SKILL.md folder, so you can also just copy any
# skills/<name>/ directory wherever your agent reads skills from.
set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/skills"
DEST="${DEST:-$HOME/.claude/skills}"

case "${1:-}" in
  --codex|--agents) DEST="$HOME/.agents/skills" ;;
  -h|--help)
    grep '^#' "$0" | sed 's/^# \{0,1\}//'
    exit 0
    ;;
  "") ;;
  *)
    echo "unknown option: $1 (try --help)" >&2
    exit 2
    ;;
esac

if [ ! -d "$SRC_DIR" ]; then
  echo "error: skills/ not found next to install.sh" >&2
  exit 1
fi

mkdir -p "$DEST"

count=0
for skill in "$SRC_DIR"/*/; do
  [ -f "${skill}SKILL.md" ] || continue
  name="$(basename "$skill")"
  rm -rf "${DEST:?}/$name"
  cp -R "$skill" "$DEST/$name"
  echo "  installed  $name"
  count=$((count + 1))
done

echo ""
echo "Done - installed $count skills to $DEST"
echo "Give your agent hands next (optional): see CONNECT-CHRONOS.md"
