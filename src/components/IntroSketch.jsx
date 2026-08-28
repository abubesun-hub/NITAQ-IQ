/**
 * رسم توضيحي (سكتش) لشخص قلق تحيط به أوراق مبعثرة
 * مع دفاتر وسجلات على المكتب — برسوم SVG خفيفة تناسب هوية الموقع.
 */
export default function IntroSketch() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="رسم توضيحي لشخص قلق تحيط به أوراق مبعثرة وعلامات استفهام"
    >
      <defs>
        <radialGradient id="sketchGlow" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sketchDesk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a63" />
          <stop offset="100%" stopColor="#0f2440" />
        </linearGradient>
        <linearGradient id="sketchShirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d8e2ef" />
        </linearGradient>
      </defs>

      {/* توهج خلفي */}
      <circle cx="240" cy="168" r="168" fill="url(#sketchGlow)" />
      <circle
        cx="240"
        cy="168"
        r="198"
        stroke="#c9a227"
        strokeOpacity="0.1"
        strokeWidth="1.5"
        strokeDasharray="2 9"
      />

      {/* خطوط توتر حول الرأس */}
      <g stroke="#e2e8f0" strokeOpacity="0.28" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M166 76 q-9 -9 -3 -18" />
        <path d="M192 60 q-8 -8 -1 -16" />
      </g>

      {/* علامات استفهام */}
      <g className="q-pulse">
        <circle cx="94" cy="126" r="25" stroke="#c9a227" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 6" />
        <text x="94" y="139" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="34" fontWeight="800" fill="#dcb33e">
          ؟
        </text>
      </g>
      <g className="q-pulse" style={{ animationDelay: '0.7s' }}>
        <circle cx="390" cy="102" r="21" stroke="#c9a227" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="4 6" />
        <text x="390" y="114" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="28" fontWeight="800" fill="#dcb33e">
          ؟
        </text>
      </g>
      <g className="q-pulse" style={{ animationDelay: '1.2s' }}>
        <text x="408" y="222" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="22" fontWeight="800" fill="#dcb33e" opacity="0.85">
          ؟
        </text>
      </g>

      {/* لمعات */}
      <g stroke="#dcb33e" strokeWidth="2.2" strokeLinecap="round" opacity="0.8">
        <path d="M148 26 v16 M140 34 h16" />
        <path d="M340 258 v12 M334 264 h12" opacity="0.6" />
        <path d="M64 82 v12 M58 88 h12" opacity="0.5" />
      </g>

      {/* عملات */}
      <g>
        <circle cx="400" cy="126" r="8" fill="#dcb33e" stroke="#ad7f20" strokeWidth="1.4" />
        <text x="400" y="130.5" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="9" fontWeight="800" fill="#62401f">
          د
        </text>
        <circle cx="70" cy="204" r="7" fill="#dcb33e" stroke="#ad7f20" strokeWidth="1.4" />
        <text x="70" y="208" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="8" fontWeight="800" fill="#62401f">
          د
        </text>
      </g>

      {/* أوراق متطايرة */}
      <g className="paper-float">
        <g transform="rotate(-16 118 96)">
          <rect x="98" y="70" width="40" height="54" rx="4" fill="#f8fafc" stroke="#dbe4ef" />
          <rect x="106" y="82" width="24" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="106" y="90" width="24" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="106" y="98" width="16" height="3" rx="1.5" fill="#cbd5e1" />
          <path d="M124 108 l7 7 M131 108 l-7 7" stroke="#ef4444" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      </g>
      <g className="paper-float-2">
        <g transform="rotate(14 354 92)">
          <rect x="332" y="62" width="44" height="60" rx="4" fill="#f8fafc" stroke="#dbe4ef" />
          <rect x="340" y="76" width="28" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="340" y="84" width="28" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="340" y="92" width="22" height="3" rx="1.5" fill="#cbd5e1" />
          <path d="M348 104 l5 5 9 -10" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <g className="paper-float" style={{ animationDelay: '0.5s' }}>
        <g transform="rotate(22 78 196)">
          <rect x="60" y="174" width="36" height="48" rx="4" fill="#f8fafc" stroke="#dbe4ef" />
          <rect x="67" y="186" width="22" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="67" y="194" width="22" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="67" y="202" width="14" height="3" rx="1.5" fill="#cbd5e1" />
        </g>
      </g>
      <g className="paper-float-2" style={{ animationDelay: '1.1s' }}>
        <g transform="rotate(-20 402 186)">
          <rect x="384" y="162" width="36" height="50" rx="4" fill="#f8fafc" stroke="#dbe4ef" />
          <rect x="391" y="174" width="22" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="391" y="182" width="22" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="391" y="190" width="15" height="3" rx="1.5" fill="#cbd5e1" />
        </g>
      </g>
      <g className="paper-float" style={{ animationDelay: '0.9s' }}>
        <g transform="rotate(7 197 60)">
          <rect x="182" y="40" width="30" height="42" rx="3" fill="#f8fafc" stroke="#dbe4ef" />
          <rect x="188" y="50" width="18" height="2.6" rx="1.3" fill="#cbd5e1" />
          <rect x="188" y="57" width="18" height="2.6" rx="1.3" fill="#cbd5e1" />
          <rect x="188" y="64" width="12" height="2.6" rx="1.3" fill="#cbd5e1" />
        </g>
      </g>

      {/* سطح المكتب */}
      <rect x="60" y="252" width="360" height="16" rx="7" fill="#1d3a62" />
      <rect x="60" y="252" width="360" height="3.5" rx="1.75" fill="#c9a227" opacity="0.45" />

      {/* جسم الشخص */}
      <rect x="176" y="150" width="128" height="106" rx="44" fill="url(#sketchShirt)" />
      <path d="M227 151 L240 166 L253 151" stroke="#a9bbd1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="240" cy="157" r="3.6" fill="#ad7f20" />
      <path d="M234 157 L240 184 L246 157 Z" fill="#c9a227" />
      <path d="M188 182 Q180 214 190 238" stroke="#f4c79b" strokeWidth="11" strokeLinecap="round" fill="none" />

      {/* رأس الشخص (يهتز قليلاً للتعبير عن القلق) */}
      <g className="head-wobble">
        <rect x="229" y="126" width="22" height="28" rx="9" fill="#eab68b" />
        <path d="M298 178 Q308 144 284 114" stroke="#f4c79b" strokeWidth="12" strokeLinecap="round" fill="none" />
        <circle cx="282" cy="110" r="8.5" fill="#f4c79b" />
        <path d="M277 104 q3 4 0 7 M284 105 q2 3 0 5" stroke="#d9a06b" strokeWidth="1.6" strokeLinecap="round" fill="none" />

        <circle cx="240" cy="112" r="28" fill="#f4c79b" />
        <path d="M212 104 Q240 94 268 104 L268 110 A28 28 0 0 0 212 110 Z" fill="#4a3222" />
        <path d="M221 92 Q232 85 249 89" stroke="#6b4c33" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.65" />

        {/* حاجبان قلقان */}
        <path d="M216 105 q7 -5 14 -2" stroke="#3a2a1c" strokeWidth="3.4" strokeLinecap="round" fill="none" />
        <path d="M264 105 q-7 -5 -14 -2" stroke="#3a2a1c" strokeWidth="3.4" strokeLinecap="round" fill="none" />

        {/* عينان */}
        <circle cx="224" cy="116" r="3.6" fill="#2b2118" />
        <circle cx="256" cy="116" r="3.6" fill="#2b2118" />
        <circle cx="225.4" cy="114.8" r="1.1" fill="#ffffff" opacity="0.9" />
        <circle cx="257.4" cy="114.8" r="1.1" fill="#ffffff" opacity="0.9" />

        {/* أنف */}
        <path d="M240 118 q-2 4 0 6" stroke="#d9a06b" strokeWidth="2.4" strokeLinecap="round" fill="none" />

        {/* فم مفتوح (دهشة وقلق) */}
        <ellipse cx="240" cy="130" rx="4.4" ry="5.6" fill="#6f4530" />

        {/* قطرات عرق */}
        <path
          d="M248 88 c3.2 4.6 3.2 8 0 10.4 c-3.2 -2.4 -3.2 -5.8 0 -10.4 Z"
          fill="#7dd3fc"
          opacity="0.95"
        />
        <path d="M248.8 91.5 q1.2 2 0 3.4" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.85" />
        <path
          d="M232 92 c2.6 3.8 2.6 6.6 0 8.6 c-2.6 -2 -2.6 -4.8 0 -8.6 Z"
          fill="#7dd3fc"
          opacity="0.8"
        />
      </g>

      {/* دفتر مفتوح على المكتب */}
      <g>
        <path d="M150 242 Q180 234 210 240 L210 257 Q180 263 150 259 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.6" />
        <path d="M210 240 Q240 234 270 242 L270 259 Q240 263 210 257 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.6" />
        <path d="M210 240 L210 257" stroke="#94a3b8" strokeWidth="2" opacity="0.55" />
        <rect x="158" y="246" width="26" height="2.6" rx="1.3" fill="#cbd5e1" />
        <rect x="158" y="251" width="20" height="2.6" rx="1.3" fill="#cbd5e1" />
        <rect x="224" y="246" width="26" height="2.6" rx="1.3" fill="#cbd5e1" />
        <path d="M230 250 l8 6 M238 250 l-8 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        <rect x="224" y="251" width="18" height="2.6" rx="1.3" fill="#cbd5e1" />
      </g>

      {/* يد الشخص على الدفتر */}
      <circle cx="192" cy="240" r="8.5" fill="#f4c79b" />

      {/* كومة أوراق */}
      <g>
        <rect x="98" y="246" width="46" height="9" rx="2" fill="#e2e8f0" transform="rotate(-3 121 250)" />
        <rect x="100" y="240" width="46" height="9" rx="2" fill="#f8fafc" stroke="#dbe4ef" strokeWidth="0.6" transform="rotate(2 123 244)" />
      </g>

      {/* فنجان قهوة */}
      <g>
        <ellipse cx="296" cy="237" rx="11" ry="3" fill="#b45309" />
        <rect x="285" y="237" width="22" height="19" rx="4" fill="#e5e7eb" />
        <path d="M307 241 q9 3 9 10 q0 7 -9 10" stroke="#e5e7eb" strokeWidth="3.4" fill="none" />
      </g>

      {/* سجلات (دفاتر) مرصوصة */}
      <g>
        <rect x="322" y="240" width="54" height="11" rx="2" fill="#8a5f1d" />
        <rect x="322" y="230" width="54" height="11" rx="2" fill="#c9a227" />
        <rect x="322" y="220" width="54" height="11" rx="2" fill="#2f5391" />
        <rect x="370" y="224" width="3" height="5" rx="1.2" fill="#ffffff" opacity="0.75" />
        <rect x="370" y="234" width="3" height="5" rx="1.2" fill="#0a172c" opacity="0.45" />
        <rect x="326" y="214" width="46" height="7" rx="1.6" fill="#f8fafc" stroke="#dbe4ef" strokeWidth="0.6" transform="rotate(-4 349 217)" />
      </g>

      {/* واجهة المكتب */}
      <rect x="60" y="264" width="360" height="96" fill="url(#sketchDesk)" />
      <path d="M60 288 H420" stroke="#0f2440" strokeOpacity="0.6" strokeWidth="1.5" />
    </svg>
  );
}
