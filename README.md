# BlogSite — Next.js Static Blog

A clean, scalable, GitHub Pages-compatible blog built with **Next.js (App Router)**, **Markdown**, **Tailwind CSS**, and **Fuse.js** for search.

## ✨ Features

- **Markdown-based** — Write blog posts in `.md` files with YAML frontmatter
- **Multi-author support** — Author profiles with bios, avatars, and social links
- **Client-side search** — Instant fuzzy search powered by Fuse.js
- **Static export** — Fully static output, no server required
- **GitHub Pages ready** — One-click deployment via GitHub Actions
- **Responsive design** — Mobile-first layout with Tailwind CSS

---

## 📂 Project Structure

```
blogs-site/
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (Navbar + Footer)
│   ├── page.js                 # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   ├── blog/
│   │   ├── page.js             # Blog feed (all posts)
│   │   └── [slug]/page.js      # Individual blog post
│   └── author/
│       └── [slug]/page.js      # Author profile page
├── components/                 # Reusable UI components
│   ├── Navbar.js
│   ├── SearchBar.js
│   ├── Footer.js
│   ├── BlogCard.js
│   ├── AuthorCard.js
│   └── HeroSection.js
├── content/                    # Content source files
│   ├── blogs/                  # Markdown blog posts
│   └── authors/                # Author JSON profiles
├── lib/                        # Utility functions
│   ├── markdown.js             # Markdown parsing (gray-matter + remark)
│   └── authors.js              # Author data reading
├── scripts/
│   └── generate-search-index.mjs   # Prebuild: generates search JSON
├── public/                     # Static assets
│   ├── images/
│   └── .nojekyll
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages deployment
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Deployment to GitHub Pages

### Automatic (Recommended)

1. **Push this repo to GitHub**

2. **Enable GitHub Pages**:
   - Go to **Settings → Pages**
   - Under **Source**, select **GitHub Actions**

3. **Push to `main`** — the workflow will build and deploy automatically

4. Your site will be live at:
   ```
   https://<username>.github.io/<repo-name>/
   ```

### Manual Build

```bash
npm install
npm run build
```

The static site is output to the `out/` directory. Upload it to any static hosting.

> **Note:** For GitHub Pages, set the `NEXT_PUBLIC_BASE_PATH` environment variable to your repo name:
> ```bash
> NEXT_PUBLIC_BASE_PATH=/my-repo npm run build
> ```

---

## 📝 How to Add a New Blog Post

### 1. Create a Markdown file

Add a new `.md` file to `content/blogs/`:

```
content/blogs/my-new-post.md
```

The filename becomes the URL slug: `/blog/my-new-post`

### 2. Add frontmatter

Every post **must** include this frontmatter at the top:

```yaml
---
title: "Your Post Title"
description: "A brief description for previews and SEO"
author: "author-slug"
date: "2026-04-01"
tags: ["tag1", "tag2", "tag3"]
coverImage: "/images/your-cover.jpg"
---
```

| Field         | Required | Description                                           |
|---------------|----------|-------------------------------------------------------|
| `title`       | ✅       | Post title displayed on the page                      |
| `description` | ✅       | Short description for cards and SEO                   |
| `author`      | ✅       | Must match an author slug in `content/authors/`       |
| `date`        | ✅       | Publication date in `YYYY-MM-DD` format               |
| `tags`        | Optional | Array of tag strings                                  |
| `coverImage`  | Optional | Path to cover image in `/public/images/`              |

### 3. Write your content

Use standard Markdown below the frontmatter:

```markdown
## My Section

Regular paragraph text.

### Code blocks
\```javascript
const hello = 'world';
\```

### Images
![Alt text](/images/my-image.jpg)

### Embedded YouTube videos
<iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

### HTML5 videos
<video width="100%" controls>
  <source src="/videos/demo.mp4" type="video/mp4">
</video>
```

### 4. Add images

Place images in `public/images/` and reference them with paths starting from `/images/`:

```
public/images/my-cover.jpg  →  coverImage: "/images/my-cover.jpg"
public/images/screenshot.png  →  ![Screenshot](/images/screenshot.png)
```

---

## 👤 How to Add a New Author

### 1. Create an author JSON file

Add a file to `content/authors/` named with the author slug:

```
content/authors/john-smith.json
```

### 2. Add author data

```json
{
  "name": "John Smith",
  "slug": "john-smith",
  "bio": "A short bio about this author.",
  "avatar": "/images/authors/john-smith.jpg",
  "social": {
    "twitter": "https://twitter.com/johnsmith",
    "github": "https://github.com/johnsmith",
    "website": "https://johnsmith.dev"
  }
}
```

### 3. Link blogs to authors

In your blog post frontmatter, set `author` to the author's slug:

```yaml
author: "john-smith"
```

### 4. Add the author's avatar

Place the avatar image in:
```
public/images/authors/john-smith.jpg
```

---

## 🛠 Tech Stack

| Technology   | Purpose                          |
|-------------|----------------------------------|
| Next.js 14  | Framework (App Router)           |
| React 18    | UI library                       |
| Tailwind CSS 3 | Styling                       |
| gray-matter | Frontmatter parsing              |
| remark      | Markdown → HTML conversion       |
| Fuse.js     | Client-side fuzzy search         |

---

## 📄 License

MIT
