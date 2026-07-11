import { Sparkles, Briefcase } from 'lucide-react';
import { ELITE_MAALI_DATA } from '../data';

interface AboutSectionProps {
  isAr: boolean;
}

export default function AboutSection({ isAr }: AboutSectionProps) {
  const d = ELITE_MAALI_DATA;

  return (
    <section
      id="about"
      className="relative py-24 sm:py-36 bg-white text-gray-900 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 glow-orb glow-orb-teal opacity-5" />

      {/* Giant decorative watermark */}
      <div className="absolute bottom-12 right-12 text-[180px] leading-none text-[#095054]/5 font-black select-none pointer-events-none uppercase">
        {isAr ? 'نخبة' : 'ABOUT'}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left side: Main narrative text */}
          <div className="lg:col-span-6 space-y-8 text-right lg:text-inherit">
            <div>
              <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-3 font-semibold">
                {isAr ? 'من نحن • الهوية والريادة' : 'WHO WE ARE • OUR STORY'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#095054] tracking-tight">
                {isAr ? 'عن شركة نخبة المعالي' : 'About Elite Al-Maali'}
              </h2>
            </div>

            {/* Asymmetric line decoration */}
            <div className="w-24 h-[1px] bg-[#095054]" />

            <div className="space-y-6 text-gray-750 leading-relaxed font-light text-base sm:text-lg whitespace-pre-line">
              <p data-aos="fade-up">
                {isAr ? d.aboutUs.ar : d.aboutUs.en}
              </p>
            </div>

            {/* Interactive blockquote */}
            <div
              data-aos="fade-right"
              className="p-6 border-l-2 border-[#095054] bg-[#095054]/5 rounded-r-lg space-y-2 mt-8"
            >
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                {isAr ? 'ميثاق الممارسة' : 'FIRM COVENANT'}
              </span>
              <p className="text-[#095054] text-base text-bold">
                {isAr
                  ? '«نعمل على أن نكون الشريك القانوني الموثوق لعملائنا، مع تركيزنا الدائم على مصالح العميل كأولوية مطلقة»'
                  : `"Our knowledge extends to understanding the practical and commercial environment in which our clients operate, with our constant focus on the client's interests as an absolute priority."`}
              </p>
            </div>
          </div>

          {/* Right side: Vision & Mission panels */}
          <div className="lg:col-span-6 space-y-8 lg:mt-12">

            {/* Vision Card */}
            <div
              data-aos="skew-up"
              className="glass-panel-morphic-light p-8 rounded-2xl relative shadow-xl overflow-hidden group hover:border-[#095054]/40 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#095054]/5 rounded-bl-full pointer-events-none" />
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#095054]/10 border border-[#095054]/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-[#095054]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#095054]">
                    {isAr ? 'رؤيتنا' : 'Our Vision'}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {isAr ? d.vision.ar : d.vision.en}
                  </p>
                </div>
              </div>
            </div>

            {/* Message (Mission) Card */}
            <div
              data-aos="skew-up"
              data-aos-delay="200"
              className="glass-panel-morphic-light p-8 rounded-2xl relative shadow-xl overflow-hidden group hover:border-[#095054]/40 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B95B]/10 rounded-bl-full pointer-events-none" />
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#095054]/10 border border-[#095054]/30 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-[#095054]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#095054]">
                    {isAr ? 'رسالتنا' : 'Our Message'}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light whitespace-pre-line">
                    {isAr ? d.message.ar : d.message.en}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
