# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build          # Compile TypeScript → dist/
npm run dev            # Run with ts-node (no build needed)
npm run clean          # Remove dist/
```

No test runner or linter is configured.

To run the CLI locally after building:
```bash
node dist/index.js search <query>
node dist/index.js guide
```

Or without building:
```bash
npx ts-node src/index.ts search <query>
```

## Architecture

This is a CLI tool (`@diepdao/aicli`) that fetches live API documentation for open-source libraries, intended for use by AI coding assistants to get up-to-date documentation instead of relying on training data.

**Entry point:** `src/index.ts` — sets up two `commander` commands: `search` and `guide`.

**Core pipeline for `search`:**
1. `src/lib/registry.ts` — hardcoded index of ~50 documentation entries across 8 tools (Kafka, Redis, ClickHouse, Java SE, Guava, Cassandra, Elasticsearch, RabbitMQ). Each `DocSource` has a `baseUrl` and a list of `SearchEntry` objects with keywords.
2. `src/lib/scorer.ts` — ranks entries by weighted keyword matching. Scoring: exact keyword match (10pts), starts-with (7pts), contains (4pts), with similar weights for title, description, source name, and tags.
3. `src/commands/search.ts` — orchestrates scorer → optional fetcher → formatter.
4. `src/lib/fetcher.ts` — optionally fetches live HTML (`--fetch` flag), strips noise elements (nav, footer, ads), extracts main content, converts to Markdown via `turndown`, truncates at 8KB.
5. `src/lib/formatter.ts` — outputs colored text (default) or JSON (`--json` flag).

**To add a new documentation source:** edit `src/lib/registry.ts` and add a new `DocSource` entry.

**Types:** `src/types.ts` defines `SearchEntry`, `DocSource`, `SearchResult`, `SearchOptions`.

**AI integration:** `skills/get-api-docs/SKILL.md` documents how Claude Code / GitHub Copilot should invoke this tool.

**TypeScript config:** ES2022 target, CommonJS modules, strict mode, outputs to `dist/`.
