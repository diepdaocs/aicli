# aicli: Get Latest API Documentation

## Overview

Use the `aicli` CLI tool to fetch **current, up-to-date API documentation** for popular
open source tools and Java libraries. This prevents relying on outdated training data
for API references, reducing hallucinations and errors.

## Installation

```bash
npm install -g @diepdao/aicli
```

Verify it works:

```bash
aicli --version
aicli guide
```

---

## How to Use aicli

### Step 1 — Search for documentation

Run `aicli search <library> [class/topic]` to find relevant documentation entries.

**Examples:**

```bash
aicli search kafka                  # List all Kafka documentation entries
aicli search kafka producer         # Find Kafka Producer API
aicli search kafka consumer         # Find Kafka Consumer API
aicli search java ConcurrentMap     # Find Java ConcurrentMap docs
aicli search java CompletableFuture # Find Java async API
aicli search guava Service          # Find Guava Service lifecycle API
aicli search guava Cache            # Find Guava CacheBuilder / LoadingCache
aicli search redis                  # List all Redis documentation entries
aicli search redis streams          # Find Redis Streams docs
aicli search clickhouse sql         # Find ClickHouse SQL reference
aicli search elasticsearch query    # Find Elasticsearch Query DSL
```

**List all supported tools:**

```bash
aicli search
```

### Step 2 — Fetch full documentation

Add `--fetch` to retrieve the actual documentation content for the top result:

```bash
aicli search java ConcurrentMap --fetch
aicli search guava Service --fetch
aicli search kafka producer --fetch
```

### Step 3 — Get JSON output (for programmatic use)

```bash
aicli search redis --json
aicli search kafka producer --json
```

### Step 4 — Control number of results

```bash
aicli search java --limit 10
```

---

## Quick Reference

| Goal | Command |
|------|---------|
| List all supported tools | `aicli search` |
| Find Kafka documentation | `aicli search kafka` |
| Find Kafka Producer API | `aicli search kafka producer` |
| Find Java class docs | `aicli search java ConcurrentMap` |
| Find Guava API | `aicli search guava Service` |
| Find Redis commands | `aicli search redis commands` |
| Find ClickHouse SQL | `aicli search clickhouse sql` |
| Fetch actual doc content | `aicli search <lib> <topic> --fetch` |
| Get JSON output | `aicli search <lib> <topic> --json` |
| Show full guide | `aicli guide` |

---

## Supported Libraries (v1.0)

| ID | Library | Coverage |
|----|---------|---------|
| `kafka` | Apache Kafka | Producer, Consumer, Streams, Connect, Admin, Config |
| `redis` | Redis | Commands, Data Types, Pub/Sub, Streams, Transactions |
| `clickhouse` | ClickHouse | SQL, Table Engines, Functions, Aggregations, Data Types |
| `java` | Java SE 21 | ConcurrentMap, CompletableFuture, Stream, Optional, Collections |
| `guava` | Google Guava | Service, Cache, ImmutableList, EventBus, Preconditions |
| `cassandra` | Apache Cassandra | CQL, Data Types, Java Driver |
| `elasticsearch` | Elasticsearch | REST API, Query DSL, Aggregations, Java Client |
| `rabbitmq` | RabbitMQ | AMQP, Publishers, Consumers, Java Client |

---

## Instructions for AI Assistants

When a user asks about an API, class, or library method:

1. **Always run `aicli search` first** to find the relevant documentation URL
2. **If you need method signatures or detailed examples**, run with `--fetch`
3. **Prioritize the fetched documentation** over your training data — it reflects
   the current API, which may have changed since training
4. **Reference the source URL** in your answer so the user can verify

**Example workflow:**

User: "How do I create a Kafka producer in Java?"

```bash
aicli search kafka producer --fetch
```

→ Use the returned documentation to provide accurate, current code examples.

---

## Notes

- `aicli search` with no arguments lists all available libraries and their entries
- Search is fuzzy: `aicli search kafka prod` will match "Producer API"
- The `--fetch` flag performs a live HTTP request to the official documentation site
- Output is formatted as Markdown for easy consumption by AI assistants
- Add `--json` for structured output suitable for tool call responses
