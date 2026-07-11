import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ELITE_MAALI_DATA } from '../data';
import { getServiceIcon } from './icons';

interface ServicesSectionProps {
  isAr: boolean;
}

export default function ServicesSection({ isAr }: ServicesSectionProps) {
  const d = ELITE_MAALI_DATA;
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="relative py-24 sm:py-36 bg-white overflow-hidden border-t border-gray-100"
    >
      {/* Subtle background decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 glow-orb glow-orb-teal opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 glow-orb glow-orb-gold opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20 text-right lg:text-inherit">
          <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block mb-3 font-semibold">
            {isAr ? 'قطاعات الممارسة والخدمات' : 'PRACTICE AREAS • SECTORAL SERVICES'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#095054] tracking-tight">
            {isAr ? 'حلول قانونية وشرعية متكاملة ومبتكرة' : 'Integrated Legal & Sharia Advisory'}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 font-light leading-relaxed">
            {isAr ? d.services.introAr : d.services.introEn}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.services.categories.map((cat, index) => {
            const isLarge = index === 0 || index === 5 || index === 8;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className={`bg-white p-8 rounded-2xl relative shadow-md border border-gray-100 hover:border-[#095054]/30 hover:shadow-lg transition-all duration-500 flex flex-col justify-between group overflow-hidden cursor-pointer ${isLarge ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                onClick={() => navigate(`/services?tab=${index}`)}
              >
                {/* Subtle index stamp */}
                <div className="absolute top-6 end-8 text-3xl font-black text-[#095054]/5 group-hover:text-[#095054]/10 transition-colors duration-500">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-[#095054]/5 border border-[#095054]/15 flex items-center justify-center group-hover:border-[#D9B95B]/60 group-hover:bg-[#D9B95B]/10 transition-colors duration-500">
                    {getServiceIcon(cat.categoryEn)}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#095054] group-hover:text-[#D9B95B] transition-colors duration-300">
                      {isAr ? cat.categoryAr : cat.categoryEn}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono tracking-widest uppercase">
                      {isAr ? 'قطاع ممارسة مفعل' : 'ACTIVE PRACTICE AREA'}
                    </p>
                  </div>

                  {/* Expandable detailed items list */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#D9B95B] block">
                      {isAr ? 'الخدمات المندرجة:' : 'SERVICES INCLUDE:'}
                    </span>
                    <ul className="space-y-2">
                      {(isAr ? cat.itemsAr : cat.itemsEn).map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-2 items-start text-xs text-gray-600">
                          <span className="text-[#D9B95B] shrink-0 mt-0.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] font-mono text-gray-400 group-hover:text-[#095054] transition-colors">
                  <span>{isAr ? 'طلب استشارة قانونية' : 'REQUEST ADVISORY'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
