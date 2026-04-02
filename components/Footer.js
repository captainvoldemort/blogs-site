import Link from 'next/link';

/**
 * Site footer — Common Labs branding.
 */
export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <footer className="border-t border-surface-100 bg-surface-900 text-surface-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <img
                src={`${basePath}/images/cl-icon-light.png`}
                alt="Common Labs"
                className="w-7 h-7"
              />
              <span className="text-base font-bold text-white tracking-tight">
                Common Labs
              </span>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed">
              Building Aptitude — a vision-first system for learning assembly
              tasks from human demonstration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-surface-400 hover:text-lime-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-sm text-surface-400 hover:text-lime-400 transition-colors">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-surface-400 hover:text-lime-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/scope" className="text-sm text-surface-400 hover:text-lime-400 transition-colors">
                  Scope & Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Aptitude</h4>
            <p className="text-sm text-surface-400 leading-relaxed mb-3">
              watch → understand → reproduce
            </p>
            <p className="text-xs text-surface-500">
              Common Lab Ventures Pte. Ltd.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-surface-500">
            © {new Date().getFullYear()} Common Lab Ventures Pte. Ltd.
          </p>
          <p className="text-xs text-surface-500">
            Built in public — progress, failures, and learnings.
          </p>
        </div>
      </div>
    </footer>
  );
}
