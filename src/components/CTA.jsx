import { ArrowLeft, Sparkles } from 'lucide-react';
import { waLink } from '../data/site';

import Reveal from './Reveal';

export default function CTA() {
  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-navy-950 via-navy-900 to-navy-800 px-6 py-14 text-center sm:px-12 lg:py-20">
            <div
              className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm font-medium text-gold-300">
                <Sparkles className="h-4 w-4" />
                ابدأ اليوم
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-snug text-white sm:text-4xl">
                نظّم أموالك اليوم بدقة وسهولة
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/70">
                دع فريق نِطاق يتولى ترصيد حساباتك وإنشاء دفاترك المحاسبية، لتتفرغ أنت لتطوير مشروعك
                بثقة وراحة بال.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={waLink('مرحباً، أرغب في البدء بتنظيم حسابات مشروعي')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold group"
                >
                  اطلب استشارة مجانية
                  <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                </a>
                <a
                  href="tel:+9647817823680"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  اتصل بنا الآن
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
