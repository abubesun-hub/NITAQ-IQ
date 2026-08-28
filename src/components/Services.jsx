import { Scale, FileSpreadsheet, BookOpen, Calculator } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    icon: Scale,
    title: 'ترصيد الحركات',
    desc: 'مطابقة وترصيد جميع الحركات المالية الواردة والصادرة بدقة متناهية لضمان سلامة الأرصدة.',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: FileSpreadsheet,
    title: 'تسجيل البيانات والقيود',
    desc: 'إدخال وتسجيل القيود اليومية وتنظيم البيانات المالية في نظام محاسبي متكامل.',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: BookOpen,
    title: 'إنشاء دفتر محاسبي',
    desc: 'تصميم وإنشاء دفاتر محاسبية منظمة وسهلة المتابعة لجميع أنواع المشاريع.',
    color: 'from-sky-400 to-sky-600',
  },
  {
    icon: Calculator,
    title: 'حسابات متكاملة',
    desc: 'إدارة شاملة للحسابات من الإيرادات والمصروفات إلى التقارير والموازنات الدورية.',
    color: 'from-violet-400 to-violet-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gold-600">خدماتنا</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            حلول محاسبية متكاملة لمشروعك
          </h2>
          <p className="mt-4 text-lg leading-8 text-navy-900/60">
            نوفر لك كل ما يحتاجه مشروعك من خدمات مالية ومحاسبية بمعايير دقيقة وتقنيات حديثة.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-navy-900/10">
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-l ${s.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-3 leading-7 text-navy-900/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
