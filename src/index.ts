#!/usr/bin/env node

import { Command } from 'commander';
import { searchCommand } from './commands/search';
import { helpCommand } from './commands/help';

const program = new Command();

program
  .name('aicli')
  .description('AI Documentation CLI — fetch latest API docs for open source tools')
  .version('1.0.0');

program
  .command('search [query...]')
  .description(
    'Search for API documentation.\n' +
    'With no query, lists all supported tools.\n' +
    'Examples:\n' +
    '  aicli search kafka\n' +
    '  aicli search kafka producer\n' +
    '  aicli search java ConcurrentMap\n' +
    '  aicli search guava Service --fetch'
  )
  .option('--fetch', 'Fetch and display full documentation for the top result', false)
  .option('--json', 'Output results as JSON', false)
  .option('--limit <n>', 'Number of results to return', '5')
  .action((queryArgs: string[], options: { fetch: boolean; json: boolean; limit: string }) => {
    searchCommand(queryArgs, {
      fetch: options.fetch,
      json: options.json,
      limit: parseInt(options.limit, 10) || 5,
    }).catch((err: Error) => {
      process.stderr.write(`Error: ${err.message}\n`);
      process.exit(1);
    });
  });

program
  .command('guide')
  .description('Show detailed usage guide for AI assistants')
  .action(helpCommand);

// Default: if no command given, show help
program.addHelpText('afterAll', '\nRun "aicli guide" for detailed examples and supported tools.');

program.parse(process.argv);
