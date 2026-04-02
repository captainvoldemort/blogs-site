import Link from 'next/link';

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const columns = [
    {
      title: 'Project',
      links: [
        { label: 'About Aptitude', href: '/about' },
        { label: 'Scope & Status', href: '/scope' },
        { label: 'Posts', href: '/posts' },
      ],
    },
    {
      title: 'Pipeline',
      links: [
        { label: 'Capture', href: '/about' },
        { label: 'Reconstruct', href: '/about' },
        { label: 'Understand', href: '/about' },
        { label: 'Compile', href: '/about' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Common Lab Ventures', href: '/' },
        { label: 'Team', href: '/' },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img
                src={`${basePath}/images/cl-icon-dark.png`}
                alt="Common Labs"
                className="w-7 h-7"
              />
              <span className="text-sm font-bold text-white uppercase tracking-tight">
                Common Labs
              </span>
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
              Vision-first assembly learning by observation.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center
                        justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Common Lab Ventures Pte. Ltd.
          </p>
          <p className="text-xs text-zinc-600">
            Built in public — progress, failures, and learnings.
          </p>
        </div>
      </div>
    </footer>
  );
}
