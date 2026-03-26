/**
 * Search index generation script.
 * Run before build: node scripts/generate-search-index.mjs
 *
 * Reads all blog markdown files and outputs a JSON index
 * to public/search-index.json for client-side Fuse.js search.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const blogsDir = path.join(rootDir, 'content', 'blogs');
const outputPath = path.join(rootDir, 'public', 'search-index.json');

// Ensure public directory exists
const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Read all blog posts and build search index
const fileNames = fs.readdirSync(blogsDir).filter((f) => f.endsWith('.md'));

const searchIndex = fileNames.map((fileName) => {
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(blogsDir, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  // Strip markdown syntax for plain-text search content
  const plainContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '')        // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1') // Links → text only
    .replace(/#{1,6}\s/g, '')       // Remove heading markers
    .replace(/[*_~]+/g, '')         // Remove bold/italic/strikethrough
    .replace(/\n{2,}/g, ' ')        // Collapse whitespace
    .trim()
    .substring(0, 1000);            // Limit content length

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    author: data.author || '',
    date: data.date || '',
    tags: data.tags || [],
    content: plainContent,
  };
});

fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));
console.log(`✅ Search index generated: ${outputPath} (${searchIndex.length} posts)`);
