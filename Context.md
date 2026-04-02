# Project Context — Aptitude Engineering Blog

> This file is a reference for any agent or contributor working on this project.

## Overview

This is the **engineering blog** for **Aptitude**, a vision-first assembly learning system built by **Common Lab Ventures Pte. Ltd.** It is a static site deployed on **GitHub Pages**.

- **Repo**: `captainvoldemort/blogs-site`
- **Live URL**: `https://captainvoldemort.github.io/blogs-site/`
- **Framework**: Next.js 14 (App Router) with static export (`output: 'export'`)
- **Styling**: Tailwind CSS 3
- **Search**: Fuse.js (client-side fuzzy search)
- **Content**: Markdown files parsed with gray-matter + remark

---

## Brand & Design Rules

### Brand Identity
- **Company**: Common Lab Ventures Pte. Ltd.
- **Project**: Aptitude
- **Tagline**: `watch → understand → reproduce`
- **Logo**: CL icon at `public/images/cl-icon-light.png`
- **Favicon**: `app/icon.png` (auto-detected by Next.js)

### Color Palette

The primary brand color is **`#e8ff47`** (lime/yellow-green). All interactive elements use this color and its variants.

| Token         | Hex       | Usage                                    |
|---------------|-----------|------------------------------------------|
| `lime-50`     | `#fefff0` | Subtle backgrounds                       |
| `lime-100`    | `#fcffd6` | Light backgrounds, focus rings            |
| `lime-200`    | `#f6ffab` | Hover backgrounds                        |
| `lime-300`    | `#f0ff80` | Borders on hover                         |
| **`lime-400`**| **`#e8ff47`** | **Primary brand color — tags, buttons, active states** |
| `lime-500`    | `#d4ed2f` | Slightly muted accents                   |
| `lime-600`    | `#b8cc1e` | Hover text on links                      |
| `lime-700`    | `#8a9a14` | Link text, hover states                  |
| `lime-800`    | `#5c670e` | Dark text on lime backgrounds            |
| `lime-900`    | `#2e3307` | Very dark text on lime backgrounds       |

The `primary` alias in Tailwind points to the same lime palette.

Neutral colors use the `surface` scale (`surface-50` to `surface-900`), which is a standard gray ramp.

### Design Conventions
- **Tags**: Use `backgroundColor: '#e8ff4733'` with `color: '#5c670e'` (semi-transparent lime)
- **Active tag chips / buttons**: Solid `#e8ff47` background with `surface-900` text
- **Hover borders**: `border-lime-300`
- **Hover shadows**: `shadow-lime-100/30`
- **Links in prose**: `color: #8a9a14`, hover: `#b8cc1e`
- **Code inline**: `background: #e8ff4722`, `color: #5c670e`
- **Blockquote border**: Solid `#e8ff47`
- **Dark sections**: Use `bg-surface-900` with `text-white` and lime accents
- **Navbar**: Sticky, glassmorphism (`bg-white/80 backdrop-blur-lg`), lime underline on hover
- **Footer**: Dark (`bg-surface-900`), lime hover on links
- **Hero**: Dark background with grid pattern, lime glow, lime CTA button

### Typography
- **Body font**: Inter (loaded via Google Fonts in `globals.css`)
- **Mono font**: JetBrains Mono (for code blocks)
- **Prose max-width**: `72ch`
- **Body text size**: `1.0625rem` (17px)
- **Line height**: `1.8` for paragraphs

### Animations
- `animate-fade-in` — fade in + slide up (0.5s)
- `animate-slide-down` — slide down from top (0.3s)
- `animate-slide-up` — slide up (0.6s)
- `animate-scale-in` — scale from 0.95 to 1 (0.5s)
- Use `style={{ animationDelay: '...' }}` for staggered animations

---

## Project Structure

```
blogs-site/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout (Navbar + Footer)
│   ├── page.js                   # Homepage
│   ├── globals.css               # Global styles + Tailwind
│   ├── icon.png                  # Favicon (auto-detected)
│   ├── about/page.js             # About Aptitude
│   ├── scope/page.js             # Scope & Status
│   ├── posts/
│   │   ├── page.js               # Posts feed (server component)
│   │   ├── PostsFeedClient.js    # Tag filter + posts grid (client)
│   │   └── [slug]/page.js        # Individual post
│   └── author/
│       └── [slug]/page.js        # Author profile
├── components/
│   ├── Navbar.js                 # Sticky nav with CL logo + search
│   ├── SearchBar.js              # Fuse.js client-side search
│   ├── Footer.js                 # Dark footer
│   ├── BlogCard.js               # Post card (cover, tags, meta)
│   ├── AuthorCard.js             # Author card (avatar, bio)
│   ├── HeroSection.js            # Dark hero with lime accents
│   └── TagFilter.js              # Tag filter chips
├── content/
│   ├── blogs/                    # Markdown posts (filename = slug)
│   └── authors/                  # Author JSON files (filename = slug)
├── lib/
│   ├── markdown.js               # gray-matter + remark, basePath rewrite
│   └── authors.js                # Author data reading
├── scripts/
│   └── generate-search-index.mjs # Prebuild: generates search JSON
├── public/
│   ├── images/                   # All static images
│   │   └── authors/              # Author avatars
│   ├── search-index.json         # Generated at build time
│   └── .nojekyll                 # Prevents Jekyll processing
├── .github/workflows/deploy.yml  # GitHub Pages CI/CD
├── next.config.js                # Static export + basePath
├── tailwind.config.js            # Lime palette + typography
├── postcss.config.js
├── package.json
└── Context.md                    # ← This file
```

---

## Content Authoring Rules

### Adding a Blog Post
1. Create `content/blogs/<slug>.md`
2. Required frontmatter:
   ```yaml
   ---
   title: "Post Title"
   description: "Short description for cards and SEO"
   author: "author-slug"          # Must match a file in content/authors/
   date: "YYYY-MM-DD"
   tags: ["tag1", "tag2"]
   coverImage: "/images/cover.jpg" # Path relative to public/
   ---
   ```
3. Images go in `public/images/`, referenced as `/images/filename.ext`
4. GIFs work the same way — `![alt](/images/demo.gif)`
5. YouTube embeds: use raw `<iframe>` in markdown (remark passes through raw HTML)
6. The basePath is automatically prepended to `src` attributes at build time

### Adding an Author
1. Create `content/authors/<slug>.json`
2. Format:
   ```json
   {
     "name": "Full Name",
     "slug": "slug",
     "bio": "Short bio",
     "avatar": "/images/authors/avatar.jpg",
     "social": {
       "github": "https://github.com/...",
       "website": "https://..."
     }
   }
   ```
3. Avatar goes in `public/images/authors/`
4. Link posts to authors via the `author` frontmatter field matching the slug

### Tags
- Tags are extracted dynamically from all posts at build time
- The posts page (`/posts`) has a client-side tag filter
- No tag registry needed — just add tags in frontmatter and they appear

---

## Build & Deploy

### Build Command
```bash
npm run build
```
This runs `prebuild` (generates search index) then `next build` (static export to `out/`).

### GitHub Pages Deployment
- Automatic via `.github/workflows/deploy.yml` on push to `main`
- The workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` automatically
- Requires GitHub Pages source set to **GitHub Actions** in repo settings

### basePath Handling
- `next.config.js` reads `NEXT_PUBLIC_BASE_PATH` from env
- `lib/markdown.js` rewrites relative `src` attributes in rendered HTML
- Components read `basePath` via `process.env.NEXT_PUBLIC_BASE_PATH`
- Cover images and avatars prepend basePath manually in JSX

---

## Key Conventions

1. **"Posts" not "Blog"** — the section is called Posts everywhere (nav, routes, text)
2. **Routes are under `/posts/`** not `/blog/`
3. **Lime for all interactive states** — never use the old blue primary
4. **Dark sections** use `bg-surface-900` — hero, "What Aptitude Is Not", footer
5. **No placeholder content** — all text references Aptitude / Common Labs
6. **GIF support** — prose CSS handles `.gif` images with proper sizing
7. **Tables in prose** — CSS styled for the Scope & Status page
8. **Server components by default** — only use `'use client'` when needed (search, tag filter, navbar)
