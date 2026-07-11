import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Phone, Send } from 'lucide-react';
import { ELITE_MAALI_DATA } from '../data';
import { getServiceIcon } from './icons';

interface ServicesPageProps {
  isAr: boolean;
}

export default function ServicesPage({ isAr }: ServicesPageProps) {
  const d = ELITE_MAALI_DATA;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get tab from URL query param, default to 0
  const tabParam = searchParams.get('tab');
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(
    tabParam ? parseInt(tabParam, 10) : 0
  );

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedServiceIndex]);

  // Update selected tab if URL param changes
  useEffect(() => {
    if (tabParam !== null) {
      const idx = parseInt(tabParam, 10);
      if (!isNaN(idx) && idx >= 0 && idx < d.services.categories.length) {
        setSelectedServiceIndex(idx);
      }
    }
  }, [tabParam, d.services.categories.length]);

  const selectedCat = d.services.categories[selectedServiceIndex];

  return (
    <section className="relative pt-36 pb-20 bg-white text-gray-900 min-h-[70vh] overflow-hidden">
      {/* Subtle background graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 glow-orb glow-orb-teal opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 glow-orb glow-orb-gold opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Breadcrumbs & Back Button Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#095054] transition-colors"
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronLeft className={`w-4 h-4 shrink-0 text-gray-400 ${isAr ? '' : 'rotate-180'}`} />
            <span className="text-gray-400">{isAr ? 'خدماتنا' : 'Our Services'}</span>
            <ChevronLeft className={`w-4 h-4 shrink-0 text-gray-400 ${isAr ? '' : 'rotate-180'}`} />
            <span className="text-[#095054] font-medium">
              {isAr ? selectedCat.categoryAr : selectedCat.categoryEn}
            </span>
          </div>

          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-sm font-semibold text-[#095054] hover:text-[#D9B95B] transition-colors"
          >
            <ArrowRight className={`w-4 h-4 transition-transform ${isAr ? 'group-hover:translate-x-1' : 'rotate-180 group-hover:-translate-x-1'}`} />
            <span>{isAr ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </button>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar (Tabs list of all services) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#095054]/5 rounded-2xl p-6 border border-[#095054]/10">
              <h3 className="text-lg font-bold text-[#095054] mb-4 pb-3 border-b border-[#095054]/10">
                {isAr ? 'جميع الخدمات' : 'All Services'}
              </h3>
              <div className="space-y-2">
                {d.services.categories.map((cat, idx) => {
                  const isActive = idx === selectedServiceIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedServiceIndex(idx)}
                      className={`w-full text-right ${isAr ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl text-sm transition-all duration-300 flex justify-between items-center group ${isActive
                        ? `bg-[#095054] text-white shadow-md font-semibold ${isAr ? 'border-r-4' : 'border-l-4'} border-[#D9B95B]`
                        : 'bg-white hover:bg-[#095054]/5 text-gray-700 border border-gray-200'
                        }`}
                    >
                      <span>{isAr ? cat.categoryAr : cat.categoryEn}</span>
                      <ChevronLeft
                        className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#D9B95B]' : 'text-gray-400 group-hover:text-[#095054]'
                          } ${isAr ? '' : 'rotate-180'}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              {/* Title & Icon */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#095054]/10 border border-[#095054]/20 flex items-center justify-center text-[#095054] shrink-0">
                    {getServiceIcon(selectedCat.categoryEn)}
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#095054]">
                      {isAr ? selectedCat.categoryAr : selectedCat.categoryEn}
                    </h2>
                    <span className="text-[10px] font-mono tracking-widest text-[#D9B95B] uppercase block">
                      {isAr ? 'مكتب نخبة المعالي للمحاماة والاستشارات' : 'Elite Al-Maali Law Firm'}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D9B95B]/10 border border-[#D9B95B]/30 text-[10px] font-mono text-[#095054] uppercase font-semibold">
                  {isAr ? 'قطاع ممارسة معتمد' : 'ACTIVE PRACTICE'}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-750 leading-relaxed text-base sm:text-lg whitespace-pre-line font-light">
                {isAr ? selectedCat.descriptionAr : selectedCat.descriptionEn}
              </p>

              {/* Bullet points */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-[#095054]">
                  {isAr ? 'الخدمات التي نقدمها في هذا القطاع تشمل:' : 'Services we provide in this sector include:'}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(isAr ? selectedCat.pointsAr : selectedCat.pointsEn).map((point, ptIdx) => (
                    <li
                      key={ptIdx}
                      className="flex gap-3 items-start bg-[#095054]/5 p-4 rounded-xl border border-[#095054]/5 hover:border-[#095054]/15 transition-all text-sm text-gray-700 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#095054]/10 border border-[#095054]/20 flex items-center justify-center text-[#095054] shrink-0 mt-0.5 font-bold">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact / Action Area */}
              <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
                <div className="bg-[#095054] text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-md">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B95B]/10 rounded-bl-full pointer-events-none" />
                  <p className="text-base sm:text-lg text-bold leading-relaxed text-gray-100 mb-6 relative z-10">
                    {isAr
                      ? '«سواء كنت بحاجة إلى استشارة قانونية أو تمثيل قانوني، فإن فريقنا هنا لمساعدتك. اتصل بنا اليوم لمناقشة احتياجاتك القانونية بسرية.»'
                      : '"Whether you need a legal consultation or legal representation, our team is here to help. Contact us today to discuss your legal needs confidentially."'}
                  </p>

                  <div className="flex flex-wrap gap-4 relative z-10">
                    <a
                      href="tel:+966562339116"
                      className="px-6 py-3 bg-[#D9B95B] hover:bg-[#f1cf72] text-black font-semibold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 shadow-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{isAr ? 'اتصل الآن' : 'Call Now'}</span>
                    </a>

                    <a
                      href={`https://api.whatsapp.com/send/?phone=966562339116&text=${encodeURIComponent(
                        isAr
                          ? `مرحبًا! أحتاج إلى مزيد من المعلومات حول خدمة: ${selectedCat.categoryAr}`
                          : `Hello! I need more info about: ${selectedCat.categoryEn}`
                      )}&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isAr ? 'واتساب الآن' : 'WhatsApp Now'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
