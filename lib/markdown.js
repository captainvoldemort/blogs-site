import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directory where blog markdown files are stored
const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');

/**
 * Get all blog posts sorted by date (newest first).
 * Returns frontmatter data + slug for each post.
 */
export function getAllPosts() {
  const fileNames = fs.readdirSync(blogsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    });

  // Sort by date descending
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get a single blog post by slug.
 * Returns frontmatter data, slug, and rendered HTML content.
 */
export async function getPostBySlug(slug) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML, allowing raw HTML (for iframes, etc.)
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

/**
 * Get all post slugs for static path generation.
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}
