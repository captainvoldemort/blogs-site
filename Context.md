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
- **Logo**: CL icon at `public/images/cl-icon-dark.png` (dark variant for dark backgrounds)
- **Favicon**: `app/icon.png` (auto-detected by Next.js)

### Theme: Dark SaaS

The entire site uses a **#000 black background** with a dark, modern SaaS aesthetic.

### Design Tokens

| Token             | Value       | Usage                                       |
|-------------------|-------------|---------------------------------------------|
| `dark-bg`         | `#000000`   | Page background                             |
| `dark-card`       | `#111111`   | Card / raised surface background            |
| `dark-raised`     | `#191919`   | Slightly elevated surfaces                  |
| `dark-border`     | `#222222`   | Borders, dividers                           |
| `dark-subtle`     | `#0a0a0a`   | Alternating section backgrounds             |
| `accent`          | `#e8ff47`   | Primary brand color — buttons, tags, links  |
| `accent-dim`      | `#e8ff4733` | Semi-transparent accent backgrounds         |
| `accent-hover`    | `#f0ff80`   | Hover state for accent elements             |
| `accent-dark`     | `#5c670e`   | Dark variant for accent text                |
| `accent-text`     | `#2e3307`   | Text color on accent backgrounds            |
| `muted`           | `#a1a1aa`   | Secondary text (zinc-400)                   |
| Text primary      | `#FFFFFF`   | Headings, important text                    |
| Text secondary    | `#a1a1aa`   | Body text, descriptions                     |
| Text tertiary     | `#71717a`   | Subtle labels, metadata                     |

### Design Conventions
- **Background**: Always `#000` (black), never white
- **Cards**: `bg-dark-card` (#111) with `border-dark-border` (#222), rounded-2xl (16px)
- **Tags**: `bg-accent/10` with `text-accent` (subtle lime on black)
- **Active states** (buttons, filter chips): Solid `bg-accent` with `text-accent-text`
- **Hover borders**: `border-accent/20`
- **Links in prose**: `color: #e8ff47` with underline
- **Code inline**: `bg-accent/10` with `text-accent`
- **Blockquote border**: `#e8ff47` (3px left border)
- **Navbar**: Fixed, transparent bg with backdrop-blur, 70px height
- **Footer**: Black bg, 4-column grid, zinc text
- **Hero**: Full viewport, grid pattern, radial glow, oversized typography (64–80px)
- **Section spacing**: 120px vertical padding (`py-section`)
- **Max width**: 1280px (`max-w-site`)
- **Border radius**: 12–16px for cards (rounded-xl / rounded-2xl)
- **Icons**: SVG icons only — **NO emojis anywhere**. Use Heroicons-style inline SVGs.
- **Buttons**: Rounded-full (pill shape), accent bg with `hover:brightness-110`
- **Glow effect**: `animate-glow` class for CTA buttons
- **Badges**: Outlined pill with `border-accent/20`, accent text, uppercase tracking

### Typography
- **Body font**: Inter (loaded via Google Fonts)
- **Mono font**: JetBrains Mono (code blocks)
- **Headings**: Bold/extrabold, tight tracking (`tracking-tight`)
- **Hero heading**: 64–80px
- **Section heading**: 48–56px
- **Card heading**: 14–16px
- **Body text**: 17px (1.0625rem), line-height 1.85
- **Small text / labels**: 11px, uppercase, wide tracking

### Animations
- `animate-fade-in` — fade in + slide up (0.6s)
- `animate-slide-down` — slide down from top (0.3s)
- `animate-slide-up` — slide up 32px (0.7s)
- `animate-scale-in` — scale from 0.95 to 1 (0.5s)
- `animate-glow` — pulsing box-shadow glow for CTAs (3s infinite)
- Use `style={{ animationDelay: '...' }}` for staggered animations

---

## Project Structure

```
blogs-site/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout (dark body, Navbar + Footer)
│   ├── page.js                   # Homepage (SaaS landing page)
│   ├── globals.css               # Dark theme, prose, animations
│   ├── icon.png                  # Favicon (auto-detected)
│   ├── about/page.js             # About Aptitude
│   ├── scope/page.js             # Scope & Status (tables + SVG icons)
│   ├── posts/
│   │   ├── page.js               # Posts feed (server component)
│   │   ├── PostsFeedClient.js    # Tag filter + posts grid (client)
│   │   └── [slug]/page.js        # Individual post
│   └── author/
│       └── [slug]/page.js        # Author profile
├── components/
│   ├── Navbar.js                 # Fixed dark navbar, 70px, transparent
│   ├── SearchBar.js              # Dark Fuse.js search
│   ├── Footer.js                 # Dark multi-column footer
│   ├── BlogCard.js               # Dark post card (#111 bg)
│   ├── AuthorCard.js             # Dark author card
│   ├── HeroSection.js            # Full-viewport dark hero
│   └── TagFilter.js              # Dark tag filter chips
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
│   │   ├── cl-icon-dark.png      # Logo (dark variant)
│   │   └── authors/              # Author avatars
│   ├── search-index.json         # Generated at build time
│   └── .nojekyll
├── .github/workflows/deploy.yml  # GitHub Pages CI/CD
├── next.config.js                # Static export + basePath
├── tailwind.config.js            # Dark tokens, accent color, spacing
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
   description: "Short description"
   author: "author-slug"
   date: "YYYY-MM-DD"
   tags: ["tag1", "tag2"]
   coverImage: "/images/cover.jpg"
   ---
   ```
3. Images go in `public/images/`, referenced as `/images/filename.ext`
4. GIFs work the same way — `![alt](/images/demo.gif)`
5. YouTube embeds: raw `<iframe>` in markdown
6. basePath is automatically prepended to `src` attributes at build time

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

### Tags
- Tags are extracted dynamically from all posts at build time
- Client-side tag filter on `/posts`
- No tag registry — just add tags in frontmatter

---

## Build & Deploy

### Build Command
```bash
npm run build
```
Runs `prebuild` (search index) then `next build` (static export → `out/`).

### GitHub Pages
- Automatic via `.github/workflows/deploy.yml` on push to `main`
- Sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` automatically
- Requires GitHub Pages source = **GitHub Actions** in repo settings

### basePath Handling
- `next.config.js` reads `NEXT_PUBLIC_BASE_PATH`
- `lib/markdown.js` rewrites relative `src` in rendered HTML
- Components prepend basePath for cover images and avatars

---

## Key Conventions

1. **Dark theme everywhere** — #000 background, #111 cards, white text
2. **"Posts" not "Blog"** — routes under `/posts/`
3. **Accent #e8ff47 for all interactive states** — buttons, tags, hovers, focus rings
4. **NO emojis** — use inline SVG icons only (Heroicons style)
5. **Fixed navbar** — 70px height, transparent with backdrop-blur, offset page content with `pt-28`
6. **Pill buttons** — `rounded-full`, accent bg for primary, border for secondary
7. **Large section spacing** — `py-section` (120px)
8. **Max-width 1280px** — `max-w-site`
9. **Server components by default** — `'use client'` only for search, tag filter, navbar
10. **Consistent card styling** — `bg-dark-card border border-dark-border rounded-2xl`
