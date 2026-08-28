import { useEffect, useRef, useState } from 'react';
import { Scale, ShieldCheck, X } from 'lucide-react';
import IntroSketch from './IntroSketch';

const LOGO_MS = 2700;
const SKETCH_MS = 4700;
const EXIT_MS = 850;

const particles = [
  { className: 'left-[12%] top-[22%] h-2 w-2', delay: '0s', slow: false },
  { className: 'left-[22%] top-[68%] h-1.5 w-1.5', delay: '0.8s', slow: true },
  { className: 'right-[14%] top-[26%] h-2.5 w-2.5', delay: '0.4s', slow: false },
  { className: 'right-[24%] top-[64%] h-1.5 w-1.5', delay: '1.2s', slow: true },
  { className: 'left-[46%] top-[12%] h-1.5 w-1.5', delay: '0.6s', slow: false },
  { className: 'right-[42%] top-[80%] h-2 w-2', delay: '1.5s', slow: true },
];

/**
 * شاشة الدخول (Splash):
 * 1) مرحلة الشعار مع اسم الموقع ونطاق التخصّص.
 * 2) مرحلة السكتش: شخص قلق وسط أوراق مبعثرة مع رسالة «اترك الدفاتر والسجلات».
 * تظهر عند كل تحميل للصفحة ثم تنزاح تلقائياً (مع زر تخطي).
 */
export default function IntroOverlay({ onExitStart, onFinished }) {
  const [phase, setPhase] = useState('logo');
  const [leaving, setLeaving] = useState(false);
  const leavingRef = useRef(false);

  const exit = () => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    setLeaving(true);
    onExitStart();
    window.setTimeout(onFinished, EXIT_MS);
  };

  // جدولة الانتقال بين المراحل ثم الخروج
  useEffect(() => {
    const t = window.setTimeout(
      () => {
        if (phase === 'logo') setPhase('sketch');
        else exit();
      },
      phase === 'logo' ? LOGO_MS : SKETCH_MS
    );
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // قفل تمرير الصفحة أثناء العرض
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const showLogo = phase === 'logo' && !leaving;
  const showSketch = phase === 'sketch' && !leaving;

  return (
    <div
      className={`hero-bg fixed inset-0 z-[100] select-none overflow-hidden transition-all duration-[850ms] ease-in-out ${
        leaving ? 'pointer-events-none scale-[1.04] opacity-0' : 'opacity-100'
      }`}
    >
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />

      {/* توهجات خلفية */}
      <div
        className="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />

      {/* جزيئات ذهبية عائمة */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute ${p.className} ${p.slow ? 'animate-float-slow' : 'animate-float'} rounded-full bg-gold-300/50 blur-[1px]`}
          style={{ animationDelay: p.delay }}
          aria-hidden="true"
        />
      ))}

      {/* ===== المرحلة الأولى: الشعار ===== */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ease-out ${
          showLogo ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
        }`}
      >
        <div className="relative">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gold-400/20 blur-2xl" aria-hidden="true" />
          <span className="intro-pop relative flex h-24 w-24 items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 text-navy-950 shadow-2xl shadow-gold-500/40 sm:h-28 sm:w-28">
            <Scale className="h-12 w-12 sm:h-14 sm:w-14" strokeWidth={1.7} />
          </span>
          <svg
            className="intro-spin absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)]"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="rgba(201,162,39,0.45)"
              strokeWidth="1.6"
              strokeDasharray="28 14"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="intro-rise mt-9 font-display text-4xl font-extrabold text-white sm:text-5xl">
          نِطاق <span className="text-gold-400">|</span>{' '}
          <span className="tracking-wide">NITAQ</span>
        </h1>

        <div className="intro-rise-2 mt-5 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/70" aria-hidden="true" />
          <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-1.5 text-sm font-bold text-gold-300 sm:text-base">
            للترصيد المالي
          </span>
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/70" aria-hidden="true" />
        </div>

        <p className="intro-rise-3 mt-7 text-sm text-white/50">مكتبك المحاسبي المتكامل أونلاين</p>

        <div className="intro-rise-4 mt-10 flex items-center gap-2" aria-hidden="true">
          <span className="dot-pulse h-2 w-2 rounded-full bg-gold-400" />
          <span className="dot-pulse-2 h-2 w-2 rounded-full bg-gold-400" />
          <span className="dot-pulse-3 h-2 w-2 rounded-full bg-gold-400" />
        </div>
      </div>

      {/* ===== المرحلة الثانية: السكتش ===== */}
      <div
        className={`absolute inset-0 flex items-center justify-center px-4 py-10 transition-all duration-700 ease-out sm:px-6 ${
          showSketch ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <div className="w-full max-w-4xl">
          <div className="grid items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-navy-950/50 backdrop-blur-xl sm:gap-10 sm:p-10 md:grid-cols-2">
            {/* الرسم التوضيحي */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gold-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-3xl border border-white/5 bg-navy-950/40 p-3 sm:p-4">
                <IntroSketch />
              </div>
            </div>

            {/* النص */}
            <div className="text-center md:text-right">
              <span className="intro-rise inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-bold text-gold-300 sm:text-sm">
                <ShieldCheck className="h-4 w-4" />
                نِطاق للترصيد المالي
              </span>
              <h2 className="intro-rise-2 mt-5 font-display text-2xl font-extrabold leading-[1.7] text-white sm:text-3xl lg:text-[2.05rem] lg:leading-[1.6]">
                اترك الدفاتر والسجلات
                <span className="mt-1 block bg-gradient-to-l from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                  واتصل بنِطاق
                </span>
                ليُنشئ لك الحسابات
              </h2>
              <p className="intro-rise-3 mx-auto mt-5 max-w-md text-sm leading-7 text-white/55 md:mx-0">
                نُحوّل فوضى الأوراق إلى أرقام دقيقة ودفاتر مرتبة.
              </p>
              <div className="intro-rise-4 mt-7 flex items-center justify-center gap-2 md:justify-start" aria-hidden="true">
                <span className="dot-pulse h-2 w-2 rounded-full bg-gold-400" />
                <span className="dot-pulse-2 h-2 w-2 rounded-full bg-gold-400" />
                <span className="dot-pulse-3 h-2 w-2 rounded-full bg-gold-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* زر التخطي */}
      <button
        type="button"
        onClick={exit}
        className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white/60 backdrop-blur transition-colors hover:bg-white/10 hover:text-white sm:left-6 sm:top-6"
      >
        تخطي المقدمة
        <X className="h-3.5 w-3.5" />
      </button>

      {/* شريط تقدّم رفيع */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/10" aria-hidden="true">
        <div className="intro-progress h-full bg-gradient-to-l from-gold-300 to-gold-500" />
      </div>
    </div>
  );
}
