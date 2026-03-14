export interface SearchEntry {
  title: string;
  url: string;
  keywords: string[];
  description?: string;
}

export interface DocSource {
  id: string;
  name: string;
  description: string;
  baseUrl: string;
  entries: SearchEntry[];
  tags: string[];
}

export interface SearchResult {
  score: number;
  source: DocSource;
  entry: SearchEntry;
  content?: string;
}

export interface SearchOptions {
  fetch: boolean;
  json: boolean;
  limit: number;
}
