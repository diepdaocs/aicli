import chalk from 'chalk';
import { SearchResult } from '../types';

export function formatResultsText(query: string, results: SearchResult[], fetched: boolean): string {
  const lines: string[] = [];

  if (results.length === 0) {
    lines.push(chalk.yellow(`No results found for: "${query}"`));
    lines.push('');
    lines.push('Try: aicli search  (no args to list all supported tools)');
    return lines.join('\n');
  }

  lines.push(chalk.bold.blue(`# aicli: Results for "${query}"`));
  lines.push('');

  for (let i = 0; i < results.length; i++) {
    const { source, entry, content } = results[i];
    const num = chalk.bold(`${i + 1}.`);
    const title = chalk.bold.green(`${source.name} — ${entry.title}`);
    lines.push(`${num} ${title}`);
    if (entry.description) {
      lines.push(`   ${entry.description}`);
    }
    lines.push(`   ${chalk.cyan('URL:')} ${entry.url}`);
    lines.push(`   ${chalk.dim('Tags:')} ${source.tags.join(', ')}`);

    if (content) {
      lines.push('');
      lines.push(chalk.bold('   Documentation:'));
      lines.push('   ' + '─'.repeat(60));
      // Indent content for readability
      const indented = content
        .split('\n')
        .map((l) => '   ' + l)
        .join('\n');
      lines.push(indented);
      lines.push('   ' + '─'.repeat(60));
    }

    if (i < results.length - 1) {
      lines.push('');
    }
  }

  if (!fetched && results.length > 0) {
    lines.push('');
    lines.push(chalk.dim('Tip: add --fetch to retrieve full documentation for the top result.'));
    lines.push(chalk.dim(`     e.g. aicli search ${query.split(' ').slice(0, 2).join(' ')} --fetch`));
  }

  return lines.join('\n');
}

export function formatResultsJson(query: string, results: SearchResult[]): string {
  const output = {
    query,
    count: results.length,
    results: results.map(({ source, entry, content, score }) => ({
      score,
      id: source.id,
      source: source.name,
      title: entry.title,
      description: entry.description ?? null,
      url: entry.url,
      tags: source.tags,
      content: content ?? null,
    })),
  };
  return JSON.stringify(output, null, 2);
}

export function formatSourcesList(): string {
  const { REGISTRY } = require('./registry');
  const lines: string[] = [];
  lines.push(chalk.bold.blue('# aicli: Available Documentation Sources'));
  lines.push('');
  for (const source of REGISTRY) {
    lines.push(`${chalk.bold.green(source.id.padEnd(16))} ${source.name}`);
    lines.push(`${' '.repeat(16)} ${chalk.dim(source.description)}`);
    lines.push(`${' '.repeat(16)} Entries: ${source.entries.length}  Tags: ${source.tags.join(', ')}`);
    lines.push('');
  }
  lines.push(chalk.dim('Usage: aicli search <id> [topic]'));
  lines.push(chalk.dim('       aicli search kafka producer'));
  lines.push(chalk.dim('       aicli search java ConcurrentMap --fetch'));
  return lines.join('\n');
}
