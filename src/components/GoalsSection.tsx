import { ELITE_MAALI_DATA } from '../data';

interface GoalsSectionProps {
  isAr: boolean;
}

export default function GoalsSection({ isAr }: GoalsSectionProps) {
  const d = ELITE_MAALI_DATA;

  return (
    <section
      id="goals"
      className="relative py-20 sm:py-28 bg-white text-gray-900 border-t border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Title / Description */}
          <div className="lg:col-span-4 space-y-4 text-right lg:text-inherit">
            <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block font-semibold">
              {isAr ? 'أهدافنا الاستراتيجية' : 'STRATEGIC OBJECTIVES'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#095054] tracking-tight">
              {isAr ? 'الركائز الاستراتيجية لتميزنا العملي' : 'Key Milestones Supporting Our Mission'}
            </h2>
            <div className="w-16 h-[1px] bg-[#095054] mt-4" />
            <p className="text-gray-650 text-xs sm:text-sm font-light leading-relaxed">
              {isAr
                ? 'رسم المنهجيات الاستباقية لتنمية أعمال شركائنا وضمان استمرارية العمل بأقصى سرية ونزاهة.'
                : 'Fostering methodologies to support our individual and corporate clients with direct accountability.'}
            </p>
          </div>

          {/* Staggered Goals Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {d.goals.map((g, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="glass-panel-morphic-light p-6 rounded-xl relative shadow-md overflow-hidden group hover:border-[#095054]/40 transition-all duration-300"
              >
                <div className="absolute top-4 end-4 text-6xl font-black text-[#095054]/5 group-hover:text-[#095054]/10 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-[#095054] pr-8 group-hover:text-black transition-colors leading-relaxed">
                  {isAr ? g.nameAr : g.nameEn}
                </h3>
                <span className="text-[9px] font-mono text-gray-500 uppercase block mt-4 tracking-wider">
                  {isAr ? 'هدف نشط معتمد' : 'ACTIVE ENDORSED TARGET'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
