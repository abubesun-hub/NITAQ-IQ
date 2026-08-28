import { useEffect, useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { waLink } from '../data/site';

const links = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'المستفيدون', href: '#audience' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 shadow-lg shadow-navy-950/40 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/30">
            <Scale className="h-6 w-6" />
          </span>
          <span className="font-display text-xl font-extrabold text-white">
            نِطاق <span className="text-gold-400">|</span>{' '}
            <span className="tracking-wide">NITAQ</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-white/85 transition-colors hover:text-gold-300"
              >
                {l.label}
                <span className="absolute -bottom-2 right-0 h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={waLink('أرغب في الحصول على استشارة مجانية')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold-400 to-gold-500 px-6 py-2.5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold-500/40"
          >
            اطلب استشارة مجانية
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="فتح القائمة"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 bg-navy-950/95 px-4 pb-6 pt-2 backdrop-blur">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink('أرغب في الحصول على استشارة مجانية')}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-gold-400 to-gold-500 px-6 py-3 text-base font-bold text-navy-950"
          >
            اطلب استشارة مجانية
          </a>
        </div>
      </div>
    </header>
  );
}
