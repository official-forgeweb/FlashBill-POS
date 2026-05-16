import Link from 'next/link';

const footerCols = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How to Buy', href: '/how-to-buy' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'ForgeWeb', href: 'https://forgeweb.in', ext: true },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-[18px] font-bold text-heading">
              Flash<span className="text-accent">Bill</span>
            </Link>
            <p className="text-[13px] text-muted mt-4 leading-relaxed max-w-[240px]">
              Offline-first POS &amp; billing software built for Indian businesses. By ForgeWeb.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerCols).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[13px] font-semibold text-heading uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {'ext' in item ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-body hover:text-accent transition-colors">
                        {item.label} ↗
                      </a>
                    ) : (
                      <Link href={item.href} className="text-[14px] text-body hover:text-accent transition-colors">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p className="text-[13px] text-muted">&copy; {new Date().getFullYear()} FlashBill by ForgeWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
