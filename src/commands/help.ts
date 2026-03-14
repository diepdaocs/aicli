import chalk from 'chalk';
import { REGISTRY } from '../lib/registry';

export function helpCommand(): void {
  const lines: string[] = [];

  lines.push(chalk.bold.blue('aicli — AI Documentation CLI'));
  lines.push(chalk.dim('Fetch latest API documentation for open source tools.'));
  lines.push('');
  lines.push(chalk.bold('USAGE'));
  lines.push('  aicli search [query...]          Search for documentation entries');
  lines.push('  aicli search [query...] --fetch  Fetch and display full documentation');
  lines.push('  aicli search [query...] --json   Output results as JSON');
  lines.push('  aicli search [query...] --limit N  Show N results (default: 5)');
  lines.push('  aicli guide                      Show this help guide');
  lines.push('');
  lines.push(chalk.bold('EXAMPLES'));
  lines.push('  aicli search                     List all supported tools');
  lines.push('  aicli search kafka               Find all Kafka documentation entries');
  lines.push('  aicli search kafka producer      Find Kafka Producer API');
  lines.push('  aicli search java ConcurrentMap  Find Java ConcurrentMap docs');
  lines.push('  aicli search guava Service       Find Guava Service API');
  lines.push('  aicli search redis streams       Find Redis Streams documentation');
  lines.push('  aicli search kafka --fetch       Fetch and display top Kafka doc');
  lines.push('  aicli search clickhouse sql --json  Get results as JSON');
  lines.push('');
  lines.push(chalk.bold('SUPPORTED TOOLS'));
  lines.push('');

  const idWidth = Math.max(...REGISTRY.map((s) => s.id.length)) + 2;
  for (const source of REGISTRY) {
    const id = chalk.green(source.id.padEnd(idWidth));
    lines.push(`  ${id} ${source.name}`);
    lines.push(`  ${' '.repeat(idWidth)} ${chalk.dim(source.description)}`);
    lines.push('');
  }

  lines.push(chalk.bold('FOR AI ASSISTANTS (Claude, Copilot)'));
  lines.push('  The SKILL.md file at skills/get-api-docs/SKILL.md describes');
  lines.push('  how to use this tool. Place it at:');
  lines.push('    ~/.claude/skills/get-api-docs/SKILL.md');
  lines.push('  or reference it in your Copilot/Claude instructions.');
  lines.push('');
  lines.push(chalk.bold('INSTALL'));
  lines.push('  npm install -g @diepdao/aicli');
  lines.push('');
  lines.push(chalk.dim('GitHub: https://github.com/diepdaocs/aicli'));

  console.log(lines.join('\n'));
}
