# AI CLI

[![npm version](https://img.shields.io/npm/v/@diepdao/aicli)](https://www.npmjs.com/package/@diepdao/aicli)
[![license](https://img.shields.io/npm/l/@diepdao/aicli)](LICENSE)
[![node](https://img.shields.io/node/v/@diepdao/aicli)](https://nodejs.org)

**AI Documentation CLI** — fetch latest API documentation for open source tools.

Designed for AI coding assistants (Claude Code, GitHub Copilot) to get up-to-date
API references for libraries like Apache Kafka, Redis, ClickHouse, Java SE, Google Guava,
and more — instead of relying on potentially stale training data.

Inspired by [@aisuite/chub](https://github.com/andrewyng/context-hub).

---

## Install

```bash
npm install -g @diepdao/aicli
```

## Quick Start

```bash
# List all supported tools
aicli search

# Search for documentation
aicli search kafka
aicli search kafka producer
aicli search java ConcurrentMap
aicli search guava Service
aicli search redis streams
aicli search clickhouse sql

# Fetch actual documentation content
aicli search java ConcurrentMap --fetch
aicli search guava Service --fetch

# JSON output (useful for AI tool calls)
aicli search kafka producer --json

# Show guide
aicli guide
```

---

## Supported Libraries

| ID | Library | Description |
|----|---------|-------------|
| `kafka` | Apache Kafka | Distributed event streaming — Producer, Consumer, Streams, Admin |
| `redis` | Redis | In-memory store — Commands, Data Types, Pub/Sub, Streams |
| `clickhouse` | ClickHouse | OLAP database — SQL, Table Engines, Functions, Aggregations |
| `java` | Java SE 21 | Java stdlib — ConcurrentMap, CompletableFuture, Stream, Optional |
| `guava` | Google Guava | Core Java libs — Service, Cache, ImmutableList, EventBus |
| `cassandra` | Apache Cassandra | NoSQL database — CQL, Data Types, Java Driver |
| `elasticsearch` | Elasticsearch | Search engine — REST API, Query DSL, Aggregations |
| `rabbitmq` | RabbitMQ | Message broker — AMQP, Publishers, Consumers, Java Client |

---

## Commands

```
aicli search [query...] [options]
  Search for API documentation entries.
  With no query, lists all supported tools.

  Options:
    --fetch       Fetch and display full docs for top result
    --json        Output as JSON
    --limit <n>   Number of results (default: 5)

aicli guide
  Show detailed help and all examples.
```

---

## Example Output

```
$ aicli search kafka producer

# aicli: Results for "kafka producer"

1. Apache Kafka — Producer API
   KafkaProducer API for sending records to Kafka topics
   URL: https://kafka.apache.org/documentation/#producerapi
   Tags: java, messaging, streaming, events

Tip: add --fetch to retrieve full documentation for the top result.
     e.g. aicli search kafka producer --fetch
```

---

## For AI Assistants

Copy the skill definition to your Claude skills directory:

```bash
mkdir -p ~/.claude/skills/get-api-docs
cp $(npm root -g)/@diepdao/aicli/skills/get-api-docs/SKILL.md ~/.claude/skills/get-api-docs/SKILL.md
```

Or reference `skills/get-api-docs/SKILL.md` in your Copilot/Claude instructions.

The skill file teaches the AI assistant to use `aicli` to fetch current docs before answering API questions.

---

## Development

```bash
# Clone and install
git clone https://github.com/diepdaocs/aicli
cd aicli
npm install

# Build
npm run build

# Test locally
npm link
aicli search kafka

# Unlink when done
npm unlink -g @diepdao/aicli
```

## Adding New Libraries

Edit `src/lib/registry.ts` and add a new entry to the `REGISTRY` array:

```typescript
{
  id: 'mylib',
  name: 'My Library',
  description: 'What the library does',
  baseUrl: 'https://mylib.example.com',
  tags: ['java', 'relevant-tags'],
  entries: [
    {
      title: 'Core Class',
      url: 'https://mylib.example.com/docs/CoreClass.html',
      keywords: ['CoreClass', 'method1', 'method2'],
      description: 'Brief description of this page',
    },
  ],
}
```

Then rebuild: `npm run build`.

## Publishing

```bash
npm login          # log in to npm as diepdao
npm publish --access public
```

---

## License

MIT © Diep Dao
