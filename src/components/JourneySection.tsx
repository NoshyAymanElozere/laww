import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ELITE_MAALI_DATA } from '../data';
import { getJourneyIcon } from './icons';

interface JourneySectionProps {
  isAr: boolean;
}

export default function JourneySection({ isAr }: JourneySectionProps) {
  const d = ELITE_MAALI_DATA;
  const [activeStationIndex, setActiveStationIndex] = useState<number>(0);

  return (
    <section
      id="journey"
      className="relative py-24 sm:py-36 bg-white text-gray-900 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-orb glow-orb-teal opacity-5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20 text-right lg:text-inherit">
          <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-3 font-semibold">
            {isAr ? d.customerJourney.titleAr : d.customerJourney.titleEn}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#095054] tracking-tight">
            {isAr ? 'محطات رحلتك القانونية معنا' : 'Customer Journey Mapping & Steps'}
          </h2>
          <p className="text-gray-650 text-sm sm:text-base mt-4 font-light leading-relaxed">
            {isAr ? d.customerJourney.introAr : d.customerJourney.introEn}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Clickable Step Badges */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {d.customerJourney.stations.map((st, index) => {
              const isActive = activeStationIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStationIndex(index)}
                  className={`w-full p-5 rounded-xl text-right ${isAr ? 'text-right' : 'text-left'
                    } border transition-all duration-300 flex items-center gap-4 cursor-pointer relative ${isActive
                      ? 'bg-[#095054]/5 border-[#095054] text-[#095054] shadow-md translate-x-2'
                      : 'bg-gray-50 text-gray-500 border-gray-150 hover:bg-gray-100 hover:border-gray-200'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-[#095054] text-white' : 'bg-gray-200 text-[#095054]'
                    }`}>
                    <span className="text-sm font-bold font-mono">0{st.id}</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#095054]">
                      {isAr ? st.nameAr : st.nameEn}
                    </h4>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">
                      {isAr ? `المرحلة ${st.id}` : `Phase 0${st.id}`}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic description */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStationIndex}
                initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isAr ? -20 : 20 }}
                transition={{ duration: 0.4 }}
                className={`glass-panel-morphic-light p-8 sm:p-12 rounded-2xl ${isAr ? 'border-r-4 border-r-[#095054]' : 'border-l-4 border-l-[#095054]'} shadow-xl relative space-y-6 overflow-hidden text-right lg:text-inherit`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#095054]/5 rounded-bl-full pointer-events-none" />

                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#095054] bg-[#095054]/5 px-3 py-1 rounded">
                    {isAr ? `الخطوة ${activeStationIndex + 1} من 6` : `PHASE 0${activeStationIndex + 1} OF 6`}
                  </span>
                  <span className="text-5xl font-black text-gray-100">
                    0{d.customerJourney.stations[activeStationIndex].id}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Icon description */}
                  <div className="w-12 h-12 rounded-full bg-[#095054]/5 border border-[#095054]/20 flex items-center justify-center text-[#095054]">
                    {getJourneyIcon(d.customerJourney.stations[activeStationIndex].id)}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#095054] leading-tight">
                    {isAr
                      ? d.customerJourney.stations[activeStationIndex].nameAr
                      : d.customerJourney.stations[activeStationIndex].nameEn}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-light">
                    {isAr
                      ? d.customerJourney.stations[activeStationIndex].descriptionAr
                      : d.customerJourney.stations[activeStationIndex].descriptionEn}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between font-mono text-xs text-gray-500">
                  <span>INTEGRATED CLIENT SERVICES TIMELINE</span>
                  <a
                    href="#contact"
                    className="px-5 py-2.5 bg-[#095054] text-white font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#095054]/80 transition-colors"
                  >
                    {isAr ? 'حجز لقاء لمناقشة التفاصيل' : 'Request Briefing'}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
