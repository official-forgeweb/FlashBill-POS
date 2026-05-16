import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';

const cols = {
  Product: [{ label:'Features', href:'/features' },{ label:'Pricing', href:'/pricing' },{ label:'How to Buy', href:'/how-to-buy' }],
  Company: [{ label:'About', href:'/about' },{ label:'Contact', href:'/contact' },{ label:'ForgeWeb', href:'https://forgeweb.in', ext:true }],
  Legal: [{ label:'Privacy Policy', href:'#' },{ label:'Terms', href:'#' }],
};

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      {/* CTA */}
      <div className="site py-14">
        <div className="bg-gradient-to-r from-flame to-flame-light rounded-2xl px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[24px] font-bold text-white mb-2">Ready to transform your business?</h3>
            <p className="text-white/80 text-[15px]">Get started with FlashBill in under 24 hours.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-flame rounded-full text-[15px] font-bold hover:shadow-lg transition-all shrink-0">
            Book Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="site pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-flame to-flame-light flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[17px] font-bold text-heading">FlashBill</span>
            </Link>
            <p className="text-[13px] text-muted leading-relaxed max-w-[220px]">Offline-first POS &amp; billing software by ForgeWeb.</p>
          </div>
          {Object.entries(cols).map(([t, items]) => (
            <div key={t}>
              <h4 className="text-[12px] font-semibold text-heading uppercase tracking-wider mb-4">{t}</h4>
              <ul className="space-y-3">
                {items.map(i => (
                  <li key={i.label}>
                    {'ext' in i ? <a href={i.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-body hover:text-flame transition-colors">{i.label} ↗</a>
                      : <Link href={i.href} className="text-[14px] text-body hover:text-flame transition-colors">{i.label}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border"><div className="site py-6"><p className="text-[13px] text-muted">&copy; {new Date().getFullYear()} FlashBill by ForgeWeb.</p></div></div>
    </footer>
  );
}
