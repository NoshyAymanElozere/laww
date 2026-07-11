import { ELITE_MAALI_DATA } from '../data';
import { getValueIcon } from './icons';

interface ValuesSectionProps {
  isAr: boolean;
}

export default function ValuesSection({ isAr }: ValuesSectionProps) {
  const d = ELITE_MAALI_DATA;

  return (
    <section
      id="values"
      className="relative py-24 sm:py-32 bg-[#095054] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="max-w-3xl mb-20 text-right lg:text-inherit">
          <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block mb-3 font-semibold">
            {isAr ? 'المبادئ والقيم الحاكمة' : 'CORE PRINCIPLES & VALUES'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {isAr ? 'القيم التي نرتكز عليها' : 'Our Governance Values'}
          </h2>
          <div className="w-24 h-[1px] bg-[#D9B95B] mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {d.values.map((v, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="glass-panel-morphic p-6 rounded-2xl relative shadow-lg hover:border-[#D9B95B] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#D9B95B]/5 rounded-bl-full pointer-events-none" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-[#D9B95B] transition-colors duration-500">
                  {getValueIcon(v.icon)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#D9B95B] transition-colors duration-300 leading-snug">
                  {isAr ? v.nameAr : v.nameEn}
                </h3>
              </div>
              <span className="text-[9px] font-mono text-gray-400 uppercase block mt-6 tracking-wider">
                {isAr ? 'مبدأ معتمد' : 'VERIFIED VALUE'}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
