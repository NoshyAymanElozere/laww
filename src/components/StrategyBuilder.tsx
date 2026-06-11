import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, AlertTriangle, CheckSquare, Award, ArrowRight, TrendingUp } from 'lucide-react';
import { PARTNERS, PRACTICE_AREAS } from '../data';

interface StrategyBuilderProps {
  lang: 'ar' | 'en';
}

export default function StrategyBuilder({ lang }: StrategyBuilderProps) {
  const isAr = lang === 'ar';
  const [step, setStep] = useState<1 | 2>(1);
  const [sector, setSector] = useState<string>('m_a');
  const [magnitude, setMagnitude] = useState<string>('mid');
  const [scopes, setScopes] = useState<string[]>(['due_dil', 'tax']);

  const toggleScope = (id: string) => {
    setScopes(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Logic to build a beautiful custom mock strategy
  const getStrategy = () => {
    let riskLevel = 3;
    let iconColor = 'text-green-400';
    let recommendationsAr: string[] = [];
    let recommendationsEn: string[] = [];
    let riskLabelAr = 'منخفض';
    let riskLabelEn = 'Low';
    let estimateDurationAr = '٤ إلى ٨ أسابيع';
    let estimateDurationEn = '4 to 8 Weeks';
    let customBriefAr = '';
    let customBriefEn = '';

    // Adjust parameters based on industry & volume
    if (sector === 'tech') {
      riskLevel = magnitude === 'mega' ? 9 : 6;
      recommendationsAr = [
        'إجراء فحص فوري على مستودعات البيانات الحساسة للتوافق مع شروط (سدايا) المحدثة لمكافحة تسريب واختراق الخصوصية.',
        'الحصول على رخص الرقابة وصندوق الرمل التنظيمي التجريبي لمنتجات الفينتك مع البنك المركزي السعودي (SAMA).',
        'توثيق حقوق الملكية الفكرية وبراءات خوارزميات الذكاء الاصطناعي لحظر النسخ والتطفل الإلكتروني.'
      ];
      recommendationsEn = [
        'Perform immediate structural data-mapping audits to avoid severe SDAIA penalties on cross-border data transfers.',
        'Negotiate secure sandbox approvals on modern digital payment solutions directly with SAMA and CMA officials.',
        'Secure IP patents and dynamic algorithmic copyrights across US, European, and GCC registration offices.'
      ];
      customBriefAr = 'القطاع التقني يتطلب توازناً دقيقاً بين الابتكار والامتثال السيبراني.';
      customBriefEn = 'The technological sector is bound by strict and fast-evolving cybersecurity governance thresholds.';
    } else if (sector === 'giga') {
      riskLevel = magnitude === 'mega' ? 10 : 8;
      recommendationsAr = [
        'صياغة عقود إنشاء وتشغيل (EPC) مدعومة بخطوط دفاع ممتدة ضد اضطرابات سلاسل الإمداد العالمية.',
        'التمسك بلوائح تسوية النزاعات المتطورة ومحكمة التحكيم الخاصة بمركز الملك عبد الله المالي ومقره الرياض لضمان السرية.',
        'التحوط الضريبي لمشاريع امتيازات المنشآت الاقتصادية ومواءمة تذاكر الإعفاء للشركاء الدوليين.'
      ];
      recommendationsEn = [
        'Structure customized, multi-party EPC and concession covenants mapping force majeure protocols to modern supply lines.',
        'Enact exclusive, streamlined fast-track dispute mechanisms under Riyadh SCCA or LCIA neutral frameworks.',
        'Ensure clean tax pass-through protocols mapping special customs incentives granted to gigaproject sub-contractors.'
      ];
      customBriefAr = 'المشروعات الكبرى تنطوي على مخاطر عقود إنشائية فائقة ويجب تخصيص رتبة تحكيم دولية حصينة لها.';
      customBriefEn = 'Giga-scale projects involve heavy multi-tier construction agreements; establishing custom arbitration parameters is vital.';
    } else if (sector === 'm_a') {
      riskLevel = magnitude === 'mega' ? 8 : 5;
      recommendationsAr = [
        'فحص حذر للمسؤوليات الضريبية المتوارثة للشركاء الفرعيين وتجنب الأعباء المخفية.',
        'مواءمة برنامج الإعفاء والمقرات الإقليمية المحدث بالرياض للاعتماد من الضريبة بشكل آمن.',
        'صياغة بنود حظر المنافسة وتأمين الملكيات الفكرية للكيانات الممتصة.'
      ];
      recommendationsEn = [
        'Conduct exhaustive forensic dual-language due diligence to pinpoint hidden tax liabilities and regulatory baggage.',
        'Incorporate structural RHQ parameters to secure newly expanded 30-year 0% corporate exemptions cleanly.',
        'Implement bulletproof post-merger integration covenants with robust, non-compete clauses for key executives.'
      ];
      customBriefAr = 'الاندماج يفتح آفاق النمو الاقتصادي، ولكن الإهمال في الفحص الأولي يفشل الصفقات الجريئة.';
      customBriefEn = 'Mergers drive unmatched leverage, yet thorough legal vetting remains the absolute anchor of value.';
    } else {
      riskLevel = magnitude === 'mega' ? 9 : 7;
      recommendationsAr = [
        'تأطير الصكوك بقنوات حماية واكتتاب خاضعة لمنصة تداول المعتمدة وشروط CMA.',
        'صياغة شروط ائتمان متقدمة تعزل محفظة الأصول التأسيسية عن الضمانات العابرة للحدود لتجاوز التضخم.',
        'مراجعة بنود الإدراج المشترك وتجنب التدخلات التنظيمية المتضاربة.'
      ];
      recommendationsEn = [
        'Ensure direct compliance benchmarks mapping both local CMA disclosures and UK/US listing thresholds.',
        'Pioneer structural lease-backed (Ijarah) asset insulation to satisfy demanding Islamic finance guidelines.',
        'Align debt/equity ratio standards with regional central banking limits to prevent liquidity locks.'
      ];
      customBriefAr = 'أسواق رأس المال تتطلب التزاماً صارماً بأدبيات الشفافية، مع بنية ائتمانية متينة لعقود الصكوك.';
      customBriefEn = 'Sovereign-grade debt requires meticulous credit structures and strict alignment with transparency guidelines.';
    }

    if (riskLevel >= 8) {
      iconColor = 'text-red-400';
      riskLabelAr = 'حرج / سيادي';
      riskLabelEn = 'Sovereign / Critical RISK';
      estimateDurationAr = '١٢ إلى ٢٠ أسبوعاً';
      estimateDurationEn = '12 to 20 Weeks';
    } else if (riskLevel >= 5) {
      iconColor = 'text-amber-400';
      riskLabelAr = 'متوسط / متنامي';
      riskLabelEn = 'Moderate / Evolving RISK';
      estimateDurationAr = '٨ إلى ١٢ أسبوعاً';
      estimateDurationEn = '8 to 12 Weeks';
    }

    // Assign match partner
    let partnerId = 'partner-dr-saud';
    if (sector === 'tech') partnerId = 'partner-maha';
    else if (sector === 'arbitration') partnerId = 'partner-prof-vance';
    else if (sector === 'capital' || sector === 'm_a') {
      partnerId = magnitude === 'mega' ? 'partner-dr-saud' : 'partner-tariq';
    }
    const matchedPartner = PARTNERS.find(x => x.id === partnerId) || PARTNERS[0];

    return {
      riskLevel,
      riskLabelAr,
      riskLabelEn,
      iconColor,
      recommendationsAr,
      recommendationsEn,
      estimateDurationAr,
      estimateDurationEn,
      customBriefAr,
      customBriefEn,
      matchedPartner
    };
  };

  const strategy = getStrategy();

  return (
    <div className="w-full relative py-6">
      <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden text-white font-sans">
        
        {/* Absolute Background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B95B]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D9B95B]" />
            <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold">
              {isAr ? 'مستشار حوكمة وإدارة المخاطر التفاعلي' : 'Interactive Advisory & Risk Advisor'}
            </h3>
          </div>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
            {isAr ? 'محاكاة قانونية ذكية' : 'Saudi Regulatory Sandbox v2.6'}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <p className="text-sm text-gray-300">
                {isAr 
                  ? 'قم بتحديد خصائص الكيان وحجم التبادل التجاري للحصول فوراً على خارطة طريق حوكمة مخصصة وتوصيات المستشارين المناسبين.' 
                  : 'Specify your corporate vector, transaction intensity, and key compliance mandates to instantly generate a strategic compliance roadmap.'}
              </p>

              {/* Sector selection */}
              <div>
                <label className="block text-xs uppercase text-gray-400 mb-2 font-mono tracking-wider">
                  {isAr ? 'قطاع النشاط الرئيسي' : 'Primary Corporate Sector'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'm_a', ar: 'الشركات والاستحواذ', en: 'Corporate / M&A' },
                    { id: 'giga', ar: 'المشروعات الكبرى', en: 'Giga-projects' },
                    { id: 'tech', ar: 'الذكاء الاصطناعي وتقنية', en: 'Deep Tech & AI' },
                    { id: 'capital', ar: 'أسواق رأس المال', en: 'Capital Markets' },
                  ].map(sec => (
                    <button
                      key={sec.id}
                      onClick={() => setSector(sec.id)}
                      className={`p-3 text-center rounded text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        sector === sec.id 
                          ? 'bg-[#095054] text-[#D9B95B] border border-[#D9B95B]' 
                          : 'bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10'
                      }`}
                    >
                      {isAr ? sec.ar : sec.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Magnitude Selection */}
              <div>
                <label className="block text-xs uppercase text-gray-400 mb-2 font-mono tracking-wider">
                  {isAr ? 'حجم الصفقة / التعامل المخطط' : 'Transaction Magnitude'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'boutique', ar: 'أقل من ١٠ مليون دولار (استراتيجي)', en: '< $10M USD (Boutique / VC)' },
                    { id: 'mid', ar: '١٠ - ١٠٠ مليون دولار (متنامي)', en: '$10M - $100M USD (Enterprise)' },
                    { id: 'mega', ar: 'أكثر من ١٠٠ مليون دولار (سيادي)', en: '> $100M USD (Sovereign / Giga)' },
                  ].map(vol => (
                    <button
                      key={vol.id}
                      onClick={() => setMagnitude(vol.id)}
                      className={`p-4 text-left rounded text-xs sm:text-sm font-medium transition-all flex flex-col justify-between h-20 cursor-pointer ${
                        magnitude === vol.id 
                          ? 'bg-[#095054] text-white border border-[#D9B95B] shadow-lg' 
                          : 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10'
                      }`}
                    >
                      <span className="font-semibold block text-white">{isAr ? vol.ar : vol.en}</span>
                      <span className="text-[10px] text-[#D9B95B] font-mono">
                        {vol.id === 'boutique' ? 'Level 1 Vetting' : vol.id === 'mid' ? 'C-Suite Protocol' : 'Crown Concession Audit'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Scopes */}
              <div>
                <label className="block text-xs uppercase text-gray-400 mb-2 font-mono tracking-wider">
                  {isAr ? 'أولويات الفحص القانوني' : 'Targeted Vetting Targets'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'due_dil', ar: 'الفحص النافي للجهالة والدرع الضريبي', en: 'Exhaustive Due Diligence' },
                    { id: 'tax', ar: 'هيكلة الإعفاء والترخيص الإقليمي RHQ', en: 'RHQ Tax Integration' },
                    { id: 'arbitration_cl', ar: 'صياغة بنود تسوية المنازعات ومكافحة الأزمات', en: 'Arbitration Shield Design' },
                  ].map(sc => {
                    const active = scopes.includes(sc.id);
                    return (
                      <button
                        key={sc.id}
                        onClick={() => toggleScope(sc.id)}
                        className={`p-3 text-right ${isAr ? 'text-right' : 'text-left'} rounded text-xs font-sans transition-all flex items-center gap-3 cursor-pointer ${
                          active 
                            ? 'bg-white/10 text-[#D9B95B] border border-[#D9B95B]/40' 
                            : 'bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10'
                        }`}
                      >
                        <CheckSquare className={`w-4 h-4 shrink-0 ${active ? 'text-[#D9B95B]' : 'text-gray-600'}`} />
                        <span>{isAr ? sc.ar : sc.en}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-[#D9B95B] text-black font-semibold text-sm rounded hover:bg-[#c3a14b] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>{isAr ? 'الحصول على خارطة الحوكمة واختيار المستشار' : 'Generate Governance Blueprint'}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Risk and metrics card */}
                <div className="bg-black/30 p-5 rounded border border-white/5 space-y-4">
                  <div>
                    <span className="text-xs uppercase text-gray-400 block mb-1 font-mono">
                      {isAr ? 'مؤشر الحاجز التشريعي' : 'REGULATORY ESCALATION RISK'}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-mono font-bold ${strategy.iconColor}`}>{strategy.riskLevel}</span>
                      <span className="text-xs text-gray-400">/ 10</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-gray-400 block mb-1 font-mono">
                      {isAr ? 'فئة التدخل الأمني والامتثال' : 'THREAT ASSIGNMENT CLASS'}
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${strategy.iconColor}`}>
                      {isAr ? strategy.riskLabelAr : strategy.riskLabelEn}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-xs uppercase text-gray-400 block mb-1 font-mono">
                      {isAr ? 'المدة التقديرية للتدقيق والحيازة' : 'ESTIMATED TIMEFRAME'}
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {isAr ? strategy.estimateDurationAr : strategy.estimateDurationEn}
                    </p>
                  </div>

                  <div className="bg-[#095054]/30 p-3 rounded border border-[#D9B95B]/20 text-[11px] text-[#D9B95B]">
                    <div className="flex gap-2 items-start">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <div>
                        <strong>{isAr ? 'تنظيمات الرياض المحدثة 2026:' : 'Enforcement Update 2026:'}</strong>
                        <p className="mt-1 leading-relaxed opacity-90">
                          {isAr 
                            ? 'تشهد تداول والمحاكم الإدارية تسارعاً في إصدار العقوبات المتعلقة بدمج الهياكل، ننصح بالبدء الفوري.' 
                            : 'Tadawul systems are escalating structural disclosure criteria; retroactive audits of prior fiscal states are highly recommended.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategy List */}
                <div className="md:col-span-2 space-y-4">
                  <div className="p-4 bg-white/5 rounded border border-[#D9B95B]/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B95B]/3 rounded-full blur-xl pointer-events-none" />
                    <span className="text-xs font-mono text-[#D9B95B] uppercase block mb-1">
                      {isAr ? 'تحليل الموقف العام' : 'MACRO CONTEXT ANALYTICS'}
                    </span>
                    <p className="text-sm text-gray-200 font-sans italic">
                      "{isAr ? strategy.customBriefAr : strategy.customBriefEn}"
                    </p>
                  </div>

                  <div className="space-y-3 font-sans">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                      {isAr ? 'خطوات التحصين القانوني الواجبة فوراً' : 'CRITICAL TRANSITION COUNTERMEASURES'}
                    </h4>
                    
                    {(isAr ? strategy.recommendationsAr : strategy.recommendationsEn).map((rec, i) => (
                      <div key={i} className="flex gap-3 items-start bg-black/15 p-3 rounded border border-white/5 hover:border-white/10 transition-all">
                        <span className="w-5 h-5 rounded-full bg-[#095054] text-[#D9B95B] shrink-0 text-xs flex items-center justify-center font-mono font-bold">
                          {i + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Matching Partner Suggestion */}
              <div className="p-5 rounded-lg bg-black/40 border border-[#D9B95B]/35 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-sans">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-[#D9B95B] overflow-hidden bg-gradient-to-tr from-[#095054] to-black shrink-0 relative flex items-center justify-center text-[#D9B95B] font-serif text-xl">
                    {strategy.matchedPartner.nameEn[0] || 'M'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#D9B95B]" />
                      <span className="text-xs uppercase text-[#D9B95B] font-mono tracking-wider">{isAr ? 'المستشار الشريك الموصى به' : 'SUGGESTED SENIOR CASE DIRECTOR'}</span>
                    </div>
                    <p className="text-base font-serif font-semibold text-white mt-0.5">
                      {isAr ? strategy.matchedPartner.nameAr : strategy.matchedPartner.nameEn}
                    </p>
                    <p className="text-xs text-gray-400">
                      {isAr ? strategy.matchedPartner.roleAr : strategy.matchedPartner.roleEn}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      // Trigger scroll to the consultation section
                      const el = document.getElementById('consultation-suite-terminus');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-5 py-2 bg-[#D9B95B] hover:bg-[#c3a14b] text-black font-semibold text-xs rounded transition-all flex items-center justify-center gap-2 cursor-pointer uppercase"
                  >
                    <span>{isAr ? 'حجز لقاء مع الشريك فوراً' : 'Enlist Executive Consultation'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setStep(1)}
                    className="w-full sm:w-auto px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-xs rounded transition-all border border-white/5 text-center cursor-pointer"
                  >
                    {isAr ? 'إعادة التهيئة' : 'Adjust Scope Parameters'}
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
