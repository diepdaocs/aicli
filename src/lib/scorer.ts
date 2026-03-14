import { DocSource, SearchEntry, SearchResult } from '../types';
import { REGISTRY } from './registry';

/**
 * Score a single entry against the query terms.
 * Returns a numeric score (higher = better match).
 */
function scoreEntry(entry: SearchEntry, source: DocSource, queryTerms: string[]): number {
  let score = 0;
  const lowerTitle = entry.title.toLowerCase();
  const lowerDesc = (entry.description ?? '').toLowerCase();
  const lowerSourceName = source.name.toLowerCase();
  const lowerSourceId = source.id.toLowerCase();

  for (const term of queryTerms) {
    const t = term.toLowerCase();

    // Exact keyword match (highest value)
    if (entry.keywords.some((k) => k.toLowerCase() === t)) {
      score += 10;
    }
    // Keyword starts with term
    if (entry.keywords.some((k) => k.toLowerCase().startsWith(t))) {
      score += 7;
    }
    // Keyword contains term
    if (entry.keywords.some((k) => k.toLowerCase().includes(t))) {
      score += 4;
    }
    // Title exact match
    if (lowerTitle === t) {
      score += 8;
    }
    // Title contains term
    if (lowerTitle.includes(t)) {
      score += 5;
    }
    // Description contains term
    if (lowerDesc.includes(t)) {
      score += 2;
    }
    // Source ID / name match (identifies which tool)
    if (lowerSourceId === t || lowerSourceName.toLowerCase() === t) {
      score += 6;
    }
    if (lowerSourceId.includes(t) || lowerSourceName.includes(t)) {
      score += 3;
    }
    // Tag match
    if (source.tags.some((tag) => tag.toLowerCase() === t)) {
      score += 4;
    }
    if (source.tags.some((tag) => tag.toLowerCase().includes(t))) {
      score += 2;
    }
  }

  return score;
}

/**
 * Search the registry for entries matching the query.
 * Returns top results sorted by relevance.
 */
export function search(queryTerms: string[], limit = 5): SearchResult[] {
  if (queryTerms.length === 0) {
    return [];
  }

  const scored: SearchResult[] = [];

  for (const source of REGISTRY) {
    for (const entry of source.entries) {
      const score = scoreEntry(entry, source, queryTerms);
      if (score > 0) {
        scored.push({ score, source, entry });
      }
    }
  }

  // Sort by score descending, then by title alphabetically
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.entry.title.localeCompare(b.entry.title);
  });

  return scored.slice(0, limit);
}
