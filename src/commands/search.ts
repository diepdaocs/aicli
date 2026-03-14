import { search } from '../lib/scorer';
import { fetchDocContent } from '../lib/fetcher';
import { formatResultsText, formatResultsJson, formatSourcesList } from '../lib/formatter';
import { SearchOptions } from '../types';

export async function searchCommand(queryArgs: string[], options: Partial<SearchOptions>): Promise<void> {
  const fetchContent = options.fetch ?? false;
  const jsonOutput = options.json ?? false;
  const limit = options.limit ?? 5;

  // No query: list all available sources
  if (queryArgs.length === 0) {
    console.log(formatSourcesList());
    return;
  }

  const query = queryArgs.join(' ');
  const queryTerms = queryArgs.filter((t) => t.trim().length > 0);

  const results = search(queryTerms, limit);

  // Fetch content for the top result if --fetch is set
  if (fetchContent && results.length > 0) {
    const top = results[0];
    try {
      process.stderr.write(`Fetching: ${top.entry.url}\n`);
      top.content = await fetchDocContent(top.entry.url);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      process.stderr.write(`Warning: could not fetch content: ${msg}\n`);
    }
  }

  if (jsonOutput) {
    console.log(formatResultsJson(query, results));
  } else {
    console.log(formatResultsText(query, results, fetchContent));
  }
}
