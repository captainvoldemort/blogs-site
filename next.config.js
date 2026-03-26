/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set basePath to your GitHub repo name for GitHub Pages deployment.
  // Example: basePath: '/my-blog'
  // Leave empty string for custom domain or root deployment.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
