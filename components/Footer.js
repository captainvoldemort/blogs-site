import Link from 'next/link';

/**
 * Site footer with links and branding.
 */
export default function Footer() {
  return (
    <footer className="border-t border-surface-100 bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg 
                              flex items-center justify-center">
                <span className="text-white font-bold text-xs">B</span>
              </div>
              <span className="text-base font-bold text-surface-900 tracking-tight">
                Blog<span className="text-primary-600">Site</span>
              </span>
            </Link>
            <p className="text-sm text-surface-500 leading-relaxed">
              A clean, modern blog built with Next.js, Markdown, and Fuse.js.
              Deployed on GitHub Pages.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-surface-900 mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-surface-500 hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-surface-500 hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Built With */}
          <div>
            <h4 className="text-sm font-semibold text-surface-900 mb-3">Built With</h4>
            <ul className="space-y-2 text-sm text-surface-500">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Fuse.js</li>
              <li>Markdown</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-200 text-center">
          <p className="text-xs text-surface-400">
            © {new Date().getFullYear()} BlogSite. Built with ❤️ using Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
