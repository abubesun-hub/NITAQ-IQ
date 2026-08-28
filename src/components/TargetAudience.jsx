import { HardHat, Store, Pill, Warehouse, User, Building2 } from 'lucide-react';
import Reveal from './Reveal';

const audiences = [
  { icon: HardHat, title: 'شركات المقاولات', desc: 'ضبط تكاليف المشاريع ومتابعة المستخلصات والعقود.' },
  { icon: Store, title: 'المحلات التجارية', desc: 'تنظيم المبيعات والمشتريات وإدارة الأرباح اليومية.' },
  { icon: Pill, title: 'المذاخر', desc: 'إدارة مخزون الأدوية وتسجيل الحركات المالية بدقة.' },
  { icon: Warehouse, title: 'المخازن', desc: 'متابعة حركة البضاعة وترصيد الحسابات المخزنية.' },
  { icon: User, title: 'مقاولون شخصيون', desc: 'حلول محاسبية مبسطة للأفراد وأصحاب الأعمال الحرة.' },
  { icon: Building2, title: 'المشاريع الكبيرة والصغيرة', desc: 'من المشاريع الناشئة إلى الكبرى، نرافقك في كل مرحلة.' },
];

export default function TargetAudience() {
  return (
    <section id="audience" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-400">
            المستفيدون
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            نخدم جميع أنواع الأعمال والمشاريع
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/60">
            مهما كان نشاطك التجاري، نوفر لك نظاماً محاسبياً يناسب طبيعة عملك.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 80} className="h-full">
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-white/10">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-400/5 text-gold-300 ring-1 ring-gold-400/30 transition-transform duration-300 group-hover:scale-110">
                  <a.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{a.title}</h3>
                  <p className="mt-1.5 leading-6 text-white/60">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
