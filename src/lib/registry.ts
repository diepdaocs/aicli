import { DocSource } from '../types';

export const REGISTRY: DocSource[] = [
  {
    id: 'kafka',
    name: 'Apache Kafka',
    description: 'Distributed event streaming platform',
    baseUrl: 'https://kafka.apache.org',
    tags: ['java', 'messaging', 'streaming', 'events'],
    entries: [
      {
        title: 'Producer API',
        url: 'https://kafka.apache.org/documentation/#producerapi',
        keywords: ['producer', 'KafkaProducer', 'send', 'publish', 'produce'],
        description: 'KafkaProducer API for sending records to Kafka topics',
      },
      {
        title: 'Consumer API',
        url: 'https://kafka.apache.org/documentation/#consumerapi',
        keywords: ['consumer', 'KafkaConsumer', 'poll', 'subscribe', 'consume'],
        description: 'KafkaConsumer API for reading records from Kafka topics',
      },
      {
        title: 'Streams API',
        url: 'https://kafka.apache.org/documentation/streams/',
        keywords: ['streams', 'KStream', 'KTable', 'topology', 'processor'],
        description: 'Kafka Streams DSL for stream processing',
      },
      {
        title: 'Connect API',
        url: 'https://kafka.apache.org/documentation/#connectapi',
        keywords: ['connect', 'connector', 'source', 'sink', 'integration'],
        description: 'Kafka Connect for integrating with external systems',
      },
      {
        title: 'Admin Client API',
        url: 'https://kafka.apache.org/documentation/#adminapi',
        keywords: ['admin', 'AdminClient', 'topic', 'partition', 'management'],
        description: 'AdminClient API for managing Kafka cluster resources',
      },
      {
        title: 'Configuration',
        url: 'https://kafka.apache.org/documentation/#configuration',
        keywords: ['config', 'configuration', 'properties', 'settings', 'bootstrap'],
        description: 'Kafka producer, consumer, and broker configuration properties',
      },
    ],
  },
  {
    id: 'redis',
    name: 'Redis',
    description: 'In-memory data structure store, cache, message broker',
    baseUrl: 'https://redis.io',
    tags: ['cache', 'database', 'pubsub', 'nosql'],
    entries: [
      {
        title: 'Commands Reference',
        url: 'https://redis.io/docs/latest/commands/',
        keywords: ['commands', 'GET', 'SET', 'HSET', 'LPUSH', 'ZADD', 'reference'],
        description: 'Complete Redis commands reference',
      },
      {
        title: 'Data Types',
        url: 'https://redis.io/docs/latest/develop/data-types/',
        keywords: ['types', 'string', 'hash', 'list', 'set', 'sorted set', 'stream'],
        description: 'Redis data types: strings, hashes, lists, sets, sorted sets, streams',
      },
      {
        title: 'Pub/Sub',
        url: 'https://redis.io/docs/latest/develop/interact/pubsub/',
        keywords: ['pubsub', 'publish', 'subscribe', 'channel', 'message'],
        description: 'Redis Pub/Sub messaging pattern',
      },
      {
        title: 'Lua Scripting',
        url: 'https://redis.io/docs/latest/develop/interact/programmability/',
        keywords: ['lua', 'scripting', 'EVAL', 'EVALSHA', 'script'],
        description: 'Redis Lua scripting and programmability',
      },
      {
        title: 'Streams',
        url: 'https://redis.io/docs/latest/develop/data-types/streams/',
        keywords: ['streams', 'XADD', 'XREAD', 'consumer group', 'XGROUP'],
        description: 'Redis Streams for event sourcing and messaging',
      },
      {
        title: 'Transactions',
        url: 'https://redis.io/docs/latest/develop/interact/transactions/',
        keywords: ['transaction', 'MULTI', 'EXEC', 'DISCARD', 'WATCH', 'atomic'],
        description: 'Redis transactions with MULTI/EXEC',
      },
    ],
  },
  {
    id: 'clickhouse',
    name: 'ClickHouse',
    description: 'Column-oriented OLAP database for real-time analytics',
    baseUrl: 'https://clickhouse.com',
    tags: ['database', 'analytics', 'olap', 'sql', 'columnar'],
    entries: [
      {
        title: 'SQL Reference',
        url: 'https://clickhouse.com/docs/en/sql-reference',
        keywords: ['sql', 'SELECT', 'INSERT', 'CREATE', 'query', 'syntax'],
        description: 'ClickHouse SQL syntax and statement reference',
      },
      {
        title: 'Table Engines',
        url: 'https://clickhouse.com/docs/en/engines/table-engines',
        keywords: ['engine', 'MergeTree', 'ReplicatedMergeTree', 'table', 'storage'],
        description: 'ClickHouse table engines (MergeTree family and others)',
      },
      {
        title: 'Functions',
        url: 'https://clickhouse.com/docs/en/sql-reference/functions',
        keywords: ['functions', 'aggregate', 'window', 'string', 'date', 'math'],
        description: 'ClickHouse built-in functions reference',
      },
      {
        title: 'Aggregate Functions',
        url: 'https://clickhouse.com/docs/en/sql-reference/aggregate-functions',
        keywords: ['aggregate', 'count', 'sum', 'avg', 'max', 'min', 'uniq'],
        description: 'ClickHouse aggregate functions',
      },
      {
        title: 'Data Types',
        url: 'https://clickhouse.com/docs/en/sql-reference/data-types',
        keywords: ['types', 'Int', 'Float', 'String', 'DateTime', 'Array', 'Map'],
        description: 'ClickHouse data types',
      },
      {
        title: 'Client Interfaces',
        url: 'https://clickhouse.com/docs/en/interfaces',
        keywords: ['client', 'HTTP', 'TCP', 'JDBC', 'python', 'java', 'driver'],
        description: 'ClickHouse client interfaces and drivers',
      },
    ],
  },
  {
    id: 'java',
    name: 'Java SE 21 API',
    description: 'Java Standard Edition 21 class library',
    baseUrl: 'https://docs.oracle.com/en/java/javase/21/docs/api',
    tags: ['java', 'stdlib', 'jdk', 'standard library'],
    entries: [
      {
        title: 'ConcurrentMap',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentMap.html',
        keywords: ['ConcurrentMap', 'concurrent', 'map', 'thread-safe', 'putIfAbsent'],
        description: 'A Map providing thread safety and atomicity guarantees',
      },
      {
        title: 'ConcurrentHashMap',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html',
        keywords: ['ConcurrentHashMap', 'concurrent', 'hash', 'map', 'thread-safe'],
        description: 'A hash table supporting full concurrency of retrievals',
      },
      {
        title: 'CompletableFuture',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html',
        keywords: ['CompletableFuture', 'async', 'future', 'promise', 'thenApply', 'thenCompose'],
        description: 'A Future that may be explicitly completed and supports dependent actions',
      },
      {
        title: 'Stream API',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html',
        keywords: ['Stream', 'filter', 'map', 'collect', 'reduce', 'lambda', 'functional'],
        description: 'Stream API for functional-style operations on sequences of elements',
      },
      {
        title: 'Optional',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html',
        keywords: ['Optional', 'nullable', 'orElse', 'ifPresent', 'map', 'null safety'],
        description: 'A container object which may or may not contain a non-null value',
      },
      {
        title: 'ExecutorService',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html',
        keywords: ['ExecutorService', 'thread pool', 'executor', 'submit', 'shutdown', 'Future'],
        description: 'An Executor that provides methods to manage termination and track async tasks',
      },
      {
        title: 'ArrayList',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html',
        keywords: ['ArrayList', 'list', 'array', 'add', 'remove', 'get', 'size'],
        description: 'Resizable-array implementation of the List interface',
      },
      {
        title: 'HashMap',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html',
        keywords: ['HashMap', 'map', 'hash', 'put', 'get', 'containsKey', 'keySet'],
        description: 'Hash table based implementation of the Map interface',
      },
      {
        title: 'Collections',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html',
        keywords: ['Collections', 'sort', 'shuffle', 'unmodifiable', 'synchronized', 'utility'],
        description: 'Utility class for operating on or returning collections',
      },
      {
        title: 'String',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html',
        keywords: ['String', 'charAt', 'substring', 'split', 'replace', 'format', 'trim'],
        description: 'The String class represents character strings',
      },
      {
        title: 'ReentrantLock',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html',
        keywords: ['ReentrantLock', 'lock', 'unlock', 'tryLock', 'condition', 'fair'],
        description: 'A reentrant mutual exclusion Lock with extended capabilities',
      },
      {
        title: 'Pattern (Regex)',
        url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html',
        keywords: ['Pattern', 'regex', 'regular expression', 'compile', 'matcher', 'match'],
        description: 'A compiled representation of a regular expression',
      },
    ],
  },
  {
    id: 'guava',
    name: 'Google Guava',
    description: 'Google core Java libraries: collections, caching, I/O, concurrency, strings',
    baseUrl: 'https://guava.dev/releases/snapshot/api/docs',
    tags: ['java', 'google', 'utilities', 'collections', 'cache'],
    entries: [
      {
        title: 'Service',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/util/concurrent/Service.html',
        keywords: ['Service', 'lifecycle', 'state', 'startAsync', 'stopAsync', 'running'],
        description: 'An object with operational state: start, run, stop lifecycle',
      },
      {
        title: 'ServiceManager',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/util/concurrent/ServiceManager.html',
        keywords: ['ServiceManager', 'services', 'manage', 'startAsync', 'awaitHealthy'],
        description: 'Manager for a collection of Services',
      },
      {
        title: 'CacheBuilder',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/cache/CacheBuilder.html',
        keywords: ['CacheBuilder', 'cache', 'expiry', 'maximumSize', 'weakKeys', 'build'],
        description: 'A builder for creating Guava Cache instances',
      },
      {
        title: 'LoadingCache',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/cache/LoadingCache.html',
        keywords: ['LoadingCache', 'cache', 'get', 'load', 'CacheLoader', 'refresh'],
        description: 'A semi-persistent mapping from keys to values with auto-loading',
      },
      {
        title: 'ImmutableList',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/collect/ImmutableList.html',
        keywords: ['ImmutableList', 'immutable', 'list', 'of', 'copyOf', 'builder'],
        description: 'A List whose contents will never change',
      },
      {
        title: 'ImmutableMap',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/collect/ImmutableMap.html',
        keywords: ['ImmutableMap', 'immutable', 'map', 'of', 'copyOf', 'builder'],
        description: 'A Map whose contents will never change',
      },
      {
        title: 'Multimap',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/collect/Multimap.html',
        keywords: ['Multimap', 'multi', 'map', 'values', 'keys', 'entries', 'multiple values'],
        description: 'A collection that maps keys to values, allowing multiple values per key',
      },
      {
        title: 'ListenableFuture',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/util/concurrent/ListenableFuture.html',
        keywords: ['ListenableFuture', 'future', 'listener', 'async', 'callback', 'Futures'],
        description: 'A Future that accepts completion listeners',
      },
      {
        title: 'Preconditions',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/base/Preconditions.html',
        keywords: ['Preconditions', 'checkNotNull', 'checkArgument', 'checkState', 'validate'],
        description: 'Static convenience methods for making precondition checks',
      },
      {
        title: 'Strings',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/base/Strings.html',
        keywords: ['Strings', 'isNullOrEmpty', 'nullToEmpty', 'padStart', 'padEnd', 'repeat'],
        description: 'Static utility methods for String and related types',
      },
      {
        title: 'EventBus',
        url: 'https://guava.dev/releases/snapshot/api/docs/com/google/common/eventbus/EventBus.html',
        keywords: ['EventBus', 'event', 'subscribe', 'post', 'bus', 'publish', '@Subscribe'],
        description: 'Dispatches events to listeners, and provides ways for listeners to register',
      },
    ],
  },
  {
    id: 'cassandra',
    name: 'Apache Cassandra',
    description: 'Distributed NoSQL wide-column database',
    baseUrl: 'https://cassandra.apache.org',
    tags: ['database', 'nosql', 'distributed', 'wide-column'],
    entries: [
      {
        title: 'CQL Reference',
        url: 'https://cassandra.apache.org/doc/latest/cassandra/cql/',
        keywords: ['CQL', 'query language', 'SELECT', 'INSERT', 'CREATE TABLE', 'syntax'],
        description: 'Cassandra Query Language (CQL) reference',
      },
      {
        title: 'Data Types',
        url: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html',
        keywords: ['types', 'text', 'uuid', 'timestamp', 'list', 'map', 'set'],
        description: 'CQL data types',
      },
      {
        title: 'Java Driver',
        url: 'https://docs.datastax.com/en/developer/java-driver/latest/',
        keywords: ['java', 'driver', 'CqlSession', 'statement', 'batch', 'async'],
        description: 'DataStax Java Driver for Apache Cassandra',
      },
    ],
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    description: 'Distributed search and analytics engine',
    baseUrl: 'https://www.elastic.co',
    tags: ['search', 'analytics', 'full-text', 'distributed', 'nosql'],
    entries: [
      {
        title: 'REST API',
        url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html',
        keywords: ['REST', 'API', 'index', 'search', 'document', 'HTTP'],
        description: 'Elasticsearch REST APIs',
      },
      {
        title: 'Query DSL',
        url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html',
        keywords: ['query', 'DSL', 'bool', 'match', 'term', 'range', 'filter', 'search'],
        description: 'Elasticsearch Query DSL for building queries',
      },
      {
        title: 'Aggregations',
        url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html',
        keywords: ['aggregations', 'terms', 'date histogram', 'avg', 'sum', 'bucket', 'metrics'],
        description: 'Elasticsearch aggregations for data summarization',
      },
      {
        title: 'Java Client',
        url: 'https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/current/index.html',
        keywords: ['java', 'client', 'ElasticsearchClient', 'transport', 'async'],
        description: 'Elasticsearch Java API Client',
      },
      {
        title: 'Mappings',
        url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html',
        keywords: ['mapping', 'field types', 'index', 'keyword', 'text', 'nested', 'dynamic'],
        description: 'Elasticsearch index mappings and field types',
      },
    ],
  },
  {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    description: 'Open source message broker',
    baseUrl: 'https://www.rabbitmq.com',
    tags: ['messaging', 'amqp', 'queue', 'broker'],
    entries: [
      {
        title: 'AMQP Concepts',
        url: 'https://www.rabbitmq.com/tutorials/amqp-concepts',
        keywords: ['AMQP', 'exchange', 'queue', 'binding', 'routing key', 'concept'],
        description: 'AMQP 0-9-1 model and RabbitMQ concepts',
      },
      {
        title: 'Publishers',
        url: 'https://www.rabbitmq.com/docs/publishers',
        keywords: ['publisher', 'publish', 'producer', 'exchange', 'routing', 'confirm'],
        description: 'Publishing messages to RabbitMQ',
      },
      {
        title: 'Consumers',
        url: 'https://www.rabbitmq.com/docs/consumers',
        keywords: ['consumer', 'subscribe', 'ack', 'acknowledgement', 'prefetch', 'queue'],
        description: 'Consuming messages from RabbitMQ',
      },
      {
        title: 'Java Client API',
        url: 'https://www.rabbitmq.com/client-libraries/java-api-guide',
        keywords: ['java', 'client', 'Channel', 'Connection', 'ConnectionFactory', 'basicPublish'],
        description: 'RabbitMQ Java Client Library API guide',
      },
    ],
  },
];

export function findById(id: string): DocSource | undefined {
  return REGISTRY.find((s) => s.id === id.toLowerCase());
}

export function listAll(): DocSource[] {
  return REGISTRY;
}
