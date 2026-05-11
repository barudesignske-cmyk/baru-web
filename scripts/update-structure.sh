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

comment_for_dir() {
  case "$1" in
    apps) echo "applications workspace" ;;
    packages) echo "shared packages workspace" ;;
    scripts) echo "project automation scripts" ;;
    src) echo "source code" ;;
    app) echo "Next.js app router files" ;;
    public) echo "public static assets" ;;
    content) echo "static content definitions" ;;
    components) echo "UI components" ;;
    theme) echo "theme tokens and definitions" ;;
    home) echo "homepage section components" ;;
    *) echo "directory" ;;
  esac
}

comment_for_file() {
  base="$1"
  case "$base" in
    package.json) echo "package manifest and scripts" ;;
    pnpm-lock.yaml) echo "dependency lockfile" ;;
    pnpm-workspace.yaml) echo "pnpm workspace configuration" ;;
    turbo.json) echo "Turborepo pipeline configuration" ;;
    tsconfig.json) echo "TypeScript compiler configuration" ;;
    next.config.ts) echo "Next.js runtime/build configuration" ;;
    postcss.config.mjs) echo "PostCSS configuration" ;;
    eslint.config.mjs) echo "ESLint configuration" ;;
    globals.css) echo "global styles" ;;
    layout.tsx) echo "root layout and app-wide setup" ;;
    page.tsx) echo "route page component" ;;
    README.md) echo "project documentation" ;;
    rflTheme.ts) echo "RFL theme metadata and design tokens" ;;
    rflHomepageContent.ts) echo "structured static homepage content" ;;
    update-structure.sh) echo "regenerates this structure file" ;;
    favicon.ico) echo "site icon" ;;
    .gitignore) echo "git ignore rules" ;;
    *)
      case "$base" in
        *.ts) echo "TypeScript source file" ;;
        *.tsx) echo "React/Next component file" ;;
        *.css) echo "stylesheet" ;;
        *.md) echo "markdown documentation" ;;
        *.json) echo "JSON configuration/data" ;;
        *.yaml|*.yml) echo "YAML configuration" ;;
        *.sh) echo "shell script" ;;
        *.svg|*.png|*.jpg|*.jpeg|*.webp|*.ico) echo "static media asset" ;;
        *) echo "project file" ;;
      esac
      ;;
  esac
}

icon_for_dir() {
  echo "📁"
}

icon_for_file() {
  base="$1"
  case "$base" in
    package.json|pnpm-lock.yaml|pnpm-workspace.yaml|turbo.json|tsconfig.json|next.config.ts|postcss.config.mjs|eslint.config.mjs)
      echo "⚙️"
      ;;
    *.ts|*.tsx) echo "🧩" ;;
    *.css) echo "🎨" ;;
    *.md) echo "📝" ;;
    *.json|*.yaml|*.yml) echo "📄" ;;
    *.sh) echo "🔧" ;;
    *.svg|*.png|*.jpg|*.jpeg|*.webp|*.ico) echo "🖼️" ;;
    .gitignore) echo "🚫" ;;
    *) echo "📄" ;;
  esac
}

{
  echo "# Repository Structure"
  echo
  echo "Generated: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
  echo
  echo "Scope: Files returned by rg --files (respects ignore rules)"
  echo
  echo "Summary: ${dir_count} directories, ${file_count} files"
  echo
  echo "Legend: 📁 directory, 🧩 code, 🎨 style, ⚙️ config, 🖼️ media, 📝 docs"
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

    # Add breathing room between major folder blocks and subfolders.
    if [ "$depth" -le 1 ]; then
      echo
    fi

    if [ "$depth" -ge 2 ] && [ "${entry%/}" != "$entry" ]; then
      echo
    fi

    case "$entry" in
      */)
        icon="$(icon_for_dir "$name")"
        comment="$(comment_for_dir "$name")"
        echo "${prefix}|-- ${icon} ${name}/                         # ${comment}"
        ;;
      *)
        icon="$(icon_for_file "$name")"
        comment="$(comment_for_file "$name")"
        echo "${prefix}|-- ${icon} ${name}                         # ${comment}"
        ;;
    esac
  done < "$entries_file"

  echo '```'
} > "$TMP_OUT"

mv "$TMP_OUT" "$OUT_FILE"
echo "Updated $OUT_FILE"
