#!/usr/bin/env bash
set -eu

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT_FILE="$ROOT_DIR/structure.md"
TMP_OUT="$(mktemp)"
paths_file="$(mktemp)"
entries_file="$(mktemp)"

trap 'rm -f "$TMP_OUT" "$paths_file" "$entries_file"' EXIT

cd "$ROOT_DIR"

rg --files -g '!structure.md' | sort -u > "$paths_file"

{
  echo "."
  while IFS= read -r path; do
    [ -z "$path" ] && continue

    echo "$path"

    dir="$(dirname "$path")"
    while [ "$dir" != "." ] && [ -n "$dir" ]; do
      echo "$dir/"
      dir="$(dirname "$dir")"
    done
  done < "$paths_file"
} | sort -u > "$entries_file"

file_count=0
dir_count=0
while IFS= read -r entry; do
  [ "$entry" = "." ] && continue
  case "$entry" in
    */) dir_count=$((dir_count + 1)) ;;
    *) file_count=$((file_count + 1)) ;;
  esac
done < "$entries_file"

{
  echo "# Repository Structure"
  echo
  echo "Generated: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
  echo
  echo "Scope: Files returned by rg --files (respects ignore rules)"
  echo
  echo "Summary: ${dir_count} directories, ${file_count} files"
  echo
  echo '```text'
  echo '.'

  while IFS= read -r entry; do
    [ "$entry" = "." ] && continue

    clean="${entry%/}"
    depth=$(( $(awk -F'/' '{print NF-1}' <<<"$clean") ))
    name="${clean##*/}"

    prefix=""
    i=0
    while [ "$i" -lt "$depth" ]; do
      prefix="${prefix}|   "
      i=$((i + 1))
    done

    case "$entry" in
      */) echo "${prefix}|-- ${name}/" ;;
      *) echo "${prefix}|-- ${name}" ;;
    esac
  done < "$entries_file"

  echo '```'
} > "$TMP_OUT"

mv "$TMP_OUT" "$OUT_FILE"
echo "Updated $OUT_FILE"
