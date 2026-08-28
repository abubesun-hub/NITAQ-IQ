import { MapPin, Phone, Scale, Facebook, Instagram } from 'lucide-react';
import { SITE, waLink } from '../data/site';
import WhatsAppIcon from './WhatsAppIcon';

const quickLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'المستفيدون', href: '#audience' },
  { label: 'تواصل معنا', href: '#contact' },
];

const socials = [
  { label: 'واتساب', href: waLink('مرحباً، أرغب في التواصل معكم'), Icon: WhatsAppIcon },
  { label: 'فيسبوك', href: 'https://www.facebook.com/NitaqoS', Icon: Facebook },
  { label: 'انستغرام', href: 'https://instagram.com', Icon: Instagram },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/30">
                <Scale className="h-6 w-6" />
              </span>
              <span className="font-display text-xl font-extrabold">
                نِطاق <span className="text-gold-400">|</span>{' '}
                <span className="tracking-wide">NITAQ</span>
              </span>
            </a>
            <p className="mt-5 max-w-md leading-8 text-white/60">
              مكتبك المحاسبي المتكامل أونلاين. نقدم حلولاً برمجية ومحاسبية دقيقة لتسجيل القيود،
              إنشاء الدفاتر، وترصيد الحركات المالية لأي مشروع، بأمان وموثوقية كاملة.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-gold-400/10 hover:text-gold-300"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-bold text-gold-300">روابط سريعة</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 text-white/65 transition-colors hover:text-gold-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400/60" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-gold-300">معلومات التواصل</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-white/65">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                <span className="leading-7">{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href={`tel:${SITE.phone1Intl}`}
                  className="flex items-center gap-3 text-white/65 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                  <span dir="ltr">{SITE.phone1}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href={`tel:${SITE.phone2Intl}`}
                  className="flex items-center gap-3 text-white/65 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                  <span dir="ltr">{SITE.phone2}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © 2026 نِطاق للترصيد المالي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
