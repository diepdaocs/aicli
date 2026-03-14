import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const MAX_CONTENT_LENGTH = 8000;

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

// Remove non-content elements before converting
const REMOVE_SELECTORS = [
  'nav',
  'header',
  'footer',
  '.sidebar',
  '.navigation',
  '.nav',
  '.menu',
  '.toc',
  '#toc',
  '#sidebar',
  '#navigation',
  '#header',
  '#footer',
  'script',
  'style',
  '.breadcrumb',
  '.breadcrumbs',
  '.ads',
  '.advertisement',
  '.cookie-banner',
  '[role="navigation"]',
  '[role="banner"]',
  '[role="contentinfo"]',
];

// Selectors to try for main content extraction (in order of preference)
const CONTENT_SELECTORS = [
  'article',
  'main',
  '[role="main"]',
  '.content',
  '#content',
  '.main-content',
  '#main-content',
  '.documentation',
  '.doc-content',
  '.page-content',
  '.container',
  'body',
];

export async function fetchDocContent(url: string): Promise<string> {
  let html: string;
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'aicli/1.0 (AI documentation fetcher; +https://github.com/diepdaocs/aicli)',
        'Accept': 'text/html,application/xhtml+xml',
      },
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    html = await response.text();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Failed to fetch ${url}: ${msg}`);
  }

  return parseHtmlToMarkdown(html, url);
}

function parseHtmlToMarkdown(html: string, url: string): string {
  const $ = cheerio.load(html);

  // Remove noise elements
  for (const sel of REMOVE_SELECTORS) {
    $(sel).remove();
  }

  // Find main content
  let contentHtml = '';
  for (const sel of CONTENT_SELECTORS) {
    const el = $(sel).first();
    if (el.length && el.text().trim().length > 100) {
      contentHtml = el.html() ?? '';
      break;
    }
  }

  if (!contentHtml) {
    contentHtml = $('body').html() ?? html;
  }

  // Convert to markdown
  let markdown = turndown.turndown(contentHtml);

  // Clean up excessive blank lines
  markdown = markdown.replace(/\n{4,}/g, '\n\n\n');

  // Trim to max length, ending at a newline
  if (markdown.length > MAX_CONTENT_LENGTH) {
    const truncated = markdown.slice(0, MAX_CONTENT_LENGTH);
    const lastNewline = truncated.lastIndexOf('\n');
    markdown = truncated.slice(0, lastNewline > 0 ? lastNewline : MAX_CONTENT_LENGTH);
    markdown += `\n\n> [truncated — full docs at ${url}]`;
  }

  return markdown.trim();
}
