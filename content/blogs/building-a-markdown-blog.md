---
title: "Building a Markdown Blog with Search"
description: "A deep dive into creating a powerful blog system using Markdown files, static generation, and client-side search with Fuse.js for lightning-fast results."
author: "alex-chen"
date: "2026-03-24"
tags: ["markdown", "blogging", "fuse-js", "search", "static-site"]
coverImage: "/images/markdown-blog-cover.jpg"
---

## The Power of Markdown Blogging

Markdown has become the de facto standard for writing content on the web. Its simplicity and readability make it perfect for blog posts, documentation, and technical writing.

In this post, we'll explore how to build a complete blogging system that uses Markdown files as the content source, with client-side search powered by Fuse.js.

## Setting Up the Content Pipeline

The key to a Markdown-based blog is a solid content pipeline. Here's how it works:

1. **Write** blog posts as `.md` files with frontmatter metadata
2. **Parse** the frontmatter using `gray-matter`
3. **Convert** Markdown to HTML using `remark`
4. **Render** the HTML in your pages

### Frontmatter Structure

Every blog post starts with YAML frontmatter that defines its metadata:

```yaml
---
title: "Your Blog Post Title"
description: "A brief description of the post"
author: "author-slug"
date: "2026-01-15"
tags: ["tag1", "tag2"]
coverImage: "/images/cover.jpg"
---
```

### Parsing with gray-matter

The `gray-matter` library makes it easy to extract frontmatter from Markdown files:

```javascript
import matter from 'gray-matter';
import fs from 'fs';

const fileContent = fs.readFileSync('post.md', 'utf-8');
const { data, content } = matter(fileContent);

console.log(data.title);   // "Your Blog Post Title"
console.log(content);       // The Markdown content
```

## Adding Client-Side Search

One of the most valuable features of any blog is search. With Fuse.js, we can implement fuzzy search entirely on the client side — no server required.

### How Fuse.js Works

Fuse.js is a lightweight fuzzy-search library that works by:

1. Creating an index from your data
2. Performing approximate string matching
3. Returning results ranked by relevance

```javascript
import Fuse from 'fuse.js';

const posts = [
  { title: "Getting Started with Next.js", content: "..." },
  { title: "Building a Markdown Blog", content: "..." },
];

const fuse = new Fuse(posts, {
  keys: ['title', 'content', 'description'],
  threshold: 0.3,
});

const results = fuse.search('nextjs');
```

### Generating the Search Index

For a static site, we generate the search index at build time:

```javascript
// scripts/generate-search-index.mjs
const posts = getAllPosts();
const searchIndex = posts.map(post => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  content: post.content.substring(0, 500),
}));

fs.writeFileSync('public/search-index.json', JSON.stringify(searchIndex));
```

## Embedding Media

A good blog supports more than just text. Here's how to embed different types of media.

### Embedding Videos

You can embed YouTube videos directly in your blog posts using iframes:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Sklc_fQBmcs" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Using Images

Images can be referenced from the `/public` directory:

```markdown
![Alt text](/images/my-image.jpg)
```

## Styling Your Blog

Good typography is essential for a readable blog. Here are some key principles:

- **Line length**: Keep content width between 60-80 characters
- **Line height**: Use 1.6-1.8 for body text
- **Font size**: 16-18px for body text on desktop
- **Contrast**: Ensure sufficient contrast between text and background

## Building for Production

When you're ready to deploy, build your site as a static export:

```bash
npm run build
```

This generates an `out/` directory with all your static files, ready to deploy to any hosting service.

## Conclusion

A Markdown-based blog with client-side search gives you the best of both worlds: the simplicity of writing in Markdown with the power of instant search. Combined with static generation, you get a blog that's fast, secure, and easy to maintain.

Happy blogging!
