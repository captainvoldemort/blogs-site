import fs from 'fs';
import path from 'path';

// Directory where author JSON files are stored
const authorsDirectory = path.join(process.cwd(), 'content', 'authors');

/**
 * Get all authors.
 */
export function getAllAuthors() {
  const fileNames = fs.readdirSync(authorsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => {
      const fullPath = path.join(authorsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      return JSON.parse(fileContents);
    });
}

/**
 * Get a single author by slug.
 */
export function getAuthorBySlug(slug) {
  const fullPath = path.join(authorsDirectory, `${slug}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(fileContents);
}

/**
 * Get all author slugs for static path generation.
 */
export function getAllAuthorSlugs() {
  const fileNames = fs.readdirSync(authorsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => fileName.replace(/\.json$/, ''));
}
