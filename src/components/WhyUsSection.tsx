import { Sparkles } from 'lucide-react';
import { ELITE_MAALI_DATA } from '../data';

interface WhyUsSectionProps {
  isAr: boolean;
}

export default function WhyUsSection({ isAr }: WhyUsSectionProps) {
  const d = ELITE_MAALI_DATA;

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-36 bg-white text-gray-900 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] glow-orb glow-orb-teal opacity-5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left side visuals */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#095054]/5 rounded-3xl rotate-3 scale-105 pointer-events-none border border-[#095054]/15" />

            <div className="relative p-8 sm:p-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-150 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#095054]/5 rounded-full blur-3xl pointer-events-none" />
              <Sparkles className="w-12 h-12 text-[#095054] mb-8" />

              <h3 className="text-2xl font-bold text-[#095054] mb-4 tracking-tight">
                {isAr ? 'بماذا نتميز عن غيرنا؟' : 'Distinctive Factors'}
              </h3>

              <div className="space-y-6 pt-4 text-sm">
                {[
                  { ar: 'الالتزام الصارم بالمواعيد والجودة', en: 'Strict deadlines & premium quality outcomes' },
                  { ar: 'فريق عمل متخصص وشغوف بخدمة العملاء', en: 'Dedicated specialists passionate about client care' },
                  { ar: 'خطط توسع استراتيجي وشراكات ممتدة', en: 'Strategic local & regional expansion partnerships' }
                ].map((p, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#095054]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#095054]/25">
                      <span className="text-[#095054] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-650 font-light leading-relaxed">{isAr ? p.ar : p.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-right lg:text-inherit">
            <div>
              <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-3 font-semibold">
                {isAr ? 'عوامل التميز والريادة' : 'ADVANTAGE • COVENANT OF VALUE'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#095054] tracking-tight">
                {isAr ? 'لماذا شركة نخبة المعالي؟' : 'Why Choose Elite Al-Maali?'}
              </h2>
            </div>

            <div className="w-24 h-[1px] bg-[#095054] mt-4" />

            <p
              data-aos="fade-up"
              className="text-gray-700 leading-relaxed font-light text-base sm:text-lg whitespace-pre-line"
            >
              {isAr ? d.whyUs.ar : d.whyUs.en}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
