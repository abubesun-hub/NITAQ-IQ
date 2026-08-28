import { ArrowLeft, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import { waLink } from '../data/site';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';

const stats = [
  { value: '+500', label: 'عميل ومشروع' },
  { value: '100%', label: 'دقة وأمان' },
  { value: '24/7', label: 'دعم متواصل' },
];

const ledgerRows = [
  { label: 'دفعة مقاولات - عقد رقم 104', amount: '+2,500,000', type: 'credit' },
  { label: 'مشتريات مواد بناء', amount: '-850,000', type: 'debit' },
  { label: 'رواتب العاملين - الشهر الحالي', amount: '-1,200,000', type: 'debit' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-40">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="text-center lg:text-right">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm font-medium text-gold-300">
                <ShieldCheck className="h-4 w-4" />
                دقة وأمان في كل حركة مالية
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.35] text-white sm:text-4xl lg:text-5xl lg:leading-[1.3]">
                نِطاق للترصيد المالي
                <span className="mt-2 block bg-gradient-to-l from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                  مكتبك المحاسبي المتكامل أونلاين
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg lg:mx-0">
                نقدم حلولاً برمجية ومحاسبية لتسجيل القيود، إنشاء الدفاتر المحاسبية، وترصيد الحركات
                المالية بدقة وأمان لأي مشروع.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="#services" className="btn-gold group">
                  ابدأ الآن
                  <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                </a>
                <a
                  href={waLink('مرحباً، أرغب في التواصل مع فريق نِطاق للترصيد المالي')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  تواصل عبر واتساب
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 lg:justify-start">
                {stats.map((s) => (
                  <div key={s.label} className="text-center lg:text-right">
                    <div className="font-display text-2xl font-extrabold text-gold-400">{s.value}</div>
                    <div className="mt-1 text-sm text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={200} direction="left" className="hidden lg:block">
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-gold-400/20 via-transparent to-emerald-400/10 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-navy-950/50 backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/55">الرصيد الإجمالي</p>
                    <p className="mt-1 font-display text-3xl font-extrabold text-white">
                      <span dir="ltr">15,420,000</span>{' '}
                      <span className="text-base font-medium text-white/45">د.ع</span>
                    </p>
                  </div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                    <TrendingUp className="h-7 w-7" />
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {ledgerRows.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold ${
                            r.type === 'credit'
                              ? 'bg-emerald-400/10 text-emerald-300'
                              : 'bg-rose-400/10 text-rose-300'
                          }`}
                        >
                          {r.type === 'credit' ? 'دائن' : 'مدين'}
                        </span>
                        <span className="text-sm font-medium text-white/80">{r.label}</span>
                      </div>
                      <span
                        className={`font-display text-sm font-bold ${
                          r.type === 'credit' ? 'text-emerald-300' : 'text-rose-300'
                        }`}
                        dir="ltr"
                      >
                        {r.amount}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">تمت مطابقة جميع القيود بنجاح — دقة 100%</span>
                </div>
              </div>

              <div className="animate-float absolute -left-6 -top-6 hidden rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur lg:block">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-gold-300" />
                  <span className="text-sm font-bold text-white">أمان وحماية تامة</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
