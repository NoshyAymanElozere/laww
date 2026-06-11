import { useState, useEffect, MouseEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Building2, TrendingUp, Scale, Shield, Zap,
  ArrowRight, ArrowLeft, Calendar, Mail, Phone, Clock,
  Award, Globe, CheckCircle, Menu, X, MapPin, 
  ChevronRight, ChevronLeft, FileText, BookOpen, 
  ShieldCheck, Activity, Download, Send, Sparkles, MessageSquare
} from 'lucide-react';

import { 
  SLIDER_DATA, 
  PRACTICE_AREAS, 
  PARTNERS, 
  CASE_STUDIES, 
  TESTIMONIALS, 
  REGULATORY_TRACKER,
  ELITE_MAALI_INFO
} from './data';
import { ConsultBooking, Partner, PracticeArea } from './types';

import BookingInvoice from './components/BookingInvoice';
import StrategyBuilder from './components/StrategyBuilder';

export default function App() {
  // Localization States. Defaults to English ('en') with instant Arabic toggle ('ar')
  const [lang, setLang] = useState<'ar' | 'en'>('en');
  const isAr = lang === 'ar';

  // Reading progress scroll state
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating Interactive Modern AI Legal Advisor Bot
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user', textAr: string, textEn: string }>>([
    {
      sender: 'bot',
      textAr: 'مرحباً بك في المنصة الذكية لنخبة المعالي للمحاماة والاستشارات القانونية. أنا مستشارك الرقمي الفوري لمساعدتك في فهم البيئة الرقابية، أو تأسيس مقرك الإقليمي، أو تكييف نزاعاتك ريادياً. كيف يمكنني إرشادك اليوم؟',
      textEn: 'Welcome to Nokhbat Al-Ma\'ali Law Firm. I am your immediate digital legal advisor. I can assist you with Saudi regulatory changes, Regional Headquarters integration, or framing arbitration clauses. How may I assist you today?'
    }
  ]);

  const BOT_RESPONSES: { [key: string]: { textAr: string, textEn: string } } = {
    rhq: {
      textAr: 'برنامج المقرات الإقليمية (RHQ) بالرياض يمنح إعفاءً ضريبياً بالكامل (0٪) لمدة 30 عاماً شاملاً ضريبة الدخل والاستقطاع، بالإضافة لامتيازات توظيف سريعة وإلغاء متطلبات النسب الوطنية المبدئية. يستغرق التأسيس بالتعاون مع مستشارينا المعتمدين من وزارة الاستثمار (MISA) حوالي 4 إلى 8 أسابيع متتالية.',
      textEn: 'The Regional Headquarters program (RHQ) in Riyadh triggers a full 30-year 0% corporate tax shield (covering income and withholding taxes), direct access to accelerated executive visas, and grace periods regarding local nationalization metrics. Direct setup with our MISA-aligned partners takes approximately 4 to 8 weeks.'
    },
    arbitration: {
      textAr: 'لحماية عقود الإنشاءات الكبرى والمقاولات (FIDIC) أو صفقات الاستحواذ، ننصح بإدراج مشارطة تحكيم واضحة وصريحة تسند المنازعات لمركز التحكيم التجاري السعودي (SCCA) بمقره في الرياض أو مركز لندن الدولي للتحكيم (LCIA). يضمن ذلك سرية مطلقة، وسرعة في فض الخصومات خلال شهور معدودة مع أحكام نافذة كأحكام المحاكم العليا.',
      textEn: 'To bulletproof major EPC/construction charters or buyouts, we recommend inserting crisp SCCA (Saudi Center for Commercial Arbitration) or LCIA clauses referencing Riyadh or London seats. This secures absolute confidentiality, highly specialized expert tribunals, and final binding awards enforceable within months-circumventing long litigation loops.'
    },
    sdiaa: {
      textAr: 'نظام حماية البيانات الشخصية الصادر عن الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) يفرض التزامات صارمة على الكيانات لحماية خصوصية العملاء والتصنيف الدقيق للبيانات الحساسة العابرة للحدود. توفر مستشارتنا مها السديري فحصاً دورياً للتوافق لتجنب غرامات قد تصل لملايين الريالات مع حماية الهياكل السحابية.',
      textEn: 'The newest Personal Data Protection Law (PDPL) overseen by SDAIA mandates rigorous institutional workflows protecting client privacy and restricting unclassified cross-border data flows. Our partner Maha Al-Sudairy provides custom data-mapping audits to secure continuous alignment and eliminate compliance fines.'
    },
    partner: {
      textAr: 'يسعد شيوخ وشركاء نخبة المعالي بلقائكم! لقد قمت بفتح قناة تواصل سريعة ومباشرة لك. يمكنك الانتقال مباشرة لأسفل الصفحة لملء نموذج حجز الاستشارات وتأمين موعد اللقاء السري المبرمج مع المستشار المختص بملفك القانوني.',
      textEn: 'Our senior partners are ready to guide your strategy. I have loaded a secure booking tunnel for you; drag your cursor down to the "COMPREHENSIVE ADVISORY SCHEDULER" form to lock your reservation slot on our private calendars immediately.'
    }
  };

  const handleBotQuery = (queryKey: string, queryTextAr: string, queryTextEn: string) => {
    if (isTyping) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { sender: 'user', textAr: queryTextAr, textEn: queryTextEn }]);
    setIsTyping(true);

    // Simulate elite bot thinking
    setTimeout(() => {
      const response = BOT_RESPONSES[queryKey] || {
        textAr: 'نشكر تواصلكم النبيل. تم حفظ تفضيلاتك وجاهزون للإجابة على جميع الاستفسارات الإضافية عند حجز موعد استشارتك.',
        textEn: 'Thank you for your inquiry. Your custom preferences are catalogued and we will answer your additional questions during your consultation session.'
      };
      setChatMessages(prev => [...prev, { sender: 'bot', textAr: response.textAr, textEn: response.textEn }]);
      setIsTyping(false);
    }, 1200);
  };

  // State controls for Hero Slider
  const [slideIndex, setSlideIndex] = useState(0);

  // Auto transition for hero background slides
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % SLIDER_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation & mouse interaction states for Hero Parallax spotlight.
  const [mousePos, setMousePos] = useState({ x: 300, y: 300 });
  const handleHeroMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // State for active practice area details
  const [activePracticeId, setActivePracticeId] = useState<string>(PRACTICE_AREAS[0].id);
  const selectedPractice = PRACTICE_AREAS.find(x => x.id === activePracticeId) || PRACTICE_AREAS[0];

  // State for selected partner's bio/scholarly work modal
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // State for Case Study sector filter
  const [activeCaseFilter, setActiveCaseFilter] = useState<string>('all');

  // Filter case studies by sector group
  const filteredCases = CASE_STUDIES.filter(cs => {
    if (activeCaseFilter === 'all') return true;
    if (activeCaseFilter === 'infra') return cs.sectorEn.toLowerCase().includes('infra') || cs.sectorAr.includes('بنية');
    if (activeCaseFilter === 'arbitration') return cs.sectorEn.toLowerCase().includes('arbitration') || cs.sectorAr.includes('تحكيم');
    if (activeCaseFilter === 'corp') return cs.sectorEn.toLowerCase().includes('corp') || cs.sectorAr.includes('شركات') || cs.sectorEn.toLowerCase().includes('finance') || cs.sectorAr.includes('مال');
    return true;
  });

  // Booking system form inputs state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    practiceId: PRACTICE_AREAS[0].id,
    partnerId: PARTNERS[0].id,
    notes: '',
    date: '2026-06-15',
    timeSlot: '10:00 AM - 11:30 AM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<ConsultBooking | null>(null);
  const [bookingStatus, setBookingStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      setBookingStatus({
        type: 'error',
        msg: isAr ? 'يرجى إدخال الحقول المطلوبة لتوثيق التسجيل.' : 'Please enter all required fields.'
      });
      return;
    }

    setBookingStatus({
      type: 'success',
      msg: isAr ? 'جاري تأمين الاتصال وحجز الموعد الفوري...' : 'Establishing secure connection and processing slot request...'
    });
    setIsSubmitting(true);
    // Simulate premium regulatory lookup and server register
    setTimeout(() => {
      const generatedBooking: ConsultBooking = {
        id: `ALMZ-2026-X${Math.floor(1000 + Math.random() * 9000)}`,
        clientName: bookingForm.name,
        clientPhone: bookingForm.phone,
        clientEmail: bookingForm.email,
        practiceId: bookingForm.practiceId,
        partnerId: bookingForm.partnerId,
        notes: bookingForm.notes,
        prefLanguage: lang,
        date: bookingForm.date,
        timeSlot: bookingForm.timeSlot,
        status: 'confirmed'
      };
      setSuccessBooking(generatedBooking);
      setIsSubmitting(false);
      setBookingStatus(null);
    }, 1500);
  };

  const resetBookingForm = () => {
    setBookingForm({
      name: '',
      phone: '',
      email: '',
      practiceId: PRACTICE_AREAS[0].id,
      partnerId: PARTNERS[0].id,
      notes: '',
      date: '2026-06-15',
      timeSlot: '10:00 AM - 11:30 AM'
    });
    setSuccessBooking(null);
    setBookingStatus(null);
  };

  // Live clocks for international office hubs
  const [clocks, setClocks] = useState({
    riyadh: '',
    london: '',
    geneva: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false } as const;
      setClocks({
        riyadh: new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Asia/Riyadh' }),
        london: new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Europe/London' }),
        geneva: new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Europe/Paris' })
      });
    };
    updateTime();
    const inv = setInterval(updateTime, 1000);
    return () => clearInterval(inv);
  }, []);

  // Count up stats logic for premium look (تصاعدية)
  const [stats, setStats] = useState({ clients: 0, partners: 0, rate: 0, years: 0 });
  const [hasStartedCount, setHasStartedCount] = useState(false);

  useEffect(() => {
    // Only run count-up once
    if (hasStartedCount) return;
    setHasStartedCount(true);

    const clientsTarget = 1240;
    const partnersTarget = 28;
    const rateTarget = 98;
    const yearsTarget = 15;
    
    const duration = 2500; // 2.5 seconds
    const steps = 60;
    const intervalTime = duration / steps;
    let stepCount = 0;
    
    const timer = setInterval(() => {
      stepCount++;
      setStats({
        clients: Math.min(Math.floor((clientsTarget / steps) * stepCount), clientsTarget),
        partners: Math.min(Math.floor((partnersTarget / steps) * stepCount), partnersTarget),
        rate: Math.min(Math.floor((rateTarget / steps) * stepCount), rateTarget),
        years: Math.min(Math.floor((yearsTarget / steps) * stepCount), yearsTarget),
      });
      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, []);

  // State for interactive Client Journey timeline (رحلة العميل)
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // State for interactive About Us sub-tabs (من نحن)
  const [aboutTab, setAboutTab] = useState<'identity' | 'vision' | 'values' | 'goals'>('identity');

  // Newsletter states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubbed, setNewsletterSubbed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubbed(true);
    setTimeout(() => setNewsletterSubbed(false), 6000);
    setNewsletterEmail('');
  };

  // State for responsive mobile navigation drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic helper to render practice area icon beautifully
  const renderIconComponent = (name: string, cls: string = "w-6 h-6") => {
    const iconMap: { [key: string]: any } = {
      Briefcase,
      Building2,
      TrendingUp,
      Scale,
      Shield,
      Zap
    };
    const Component = iconMap[name] || Scale;
    return <Component className={cls} />;
  };

  return (
    <div className={`min-h-screen font-sans bg-[#095054] antialiased ${isAr ? 'rtl text-right' : 'ltr text-left'}`} style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      
      {/* GLOBAL LUXURY FLOATING NAVIGATION BAR */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[#095054]/85 backdrop-filter backdrop-blur-lg border-b border-white/5 no-print">
        {/* Dynamic Golden Reading Progress Line Indicator */}
        <div 
          className="absolute top-0 left-0 h-[3px] bg-[#D9B95B] transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo Brand Title */}
          <a href="#" className="flex items-center gap-3 active:scale-95 transition-transform group">
            <div className="w-10 h-10 rounded-full border border-[#D9B95B] flex items-center justify-center bg-[#095054] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D9B95B]/20 to-transparent group-hover:scale-110 transition-transform" />
              <span className="font-serif text-xs font-bold text-[#D9B95B] tracking-wider font-semibold">نخبة</span>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block">
                {isAr ? 'نخبة المعالي للمحاماة' : 'Nokhbat Al-Ma\'ali Law'}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D9B95B] block">
                {isAr ? 'والاستشارات القانونية' : 'Legal Consultations'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links parsed to the structured requested sections */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium uppercase tracking-wider text-gray-300">
            <a href="#hero-banner" className="hover:text-[#D9B95B] transition-colors">{isAr ? 'الرئيسية' : 'Home'}</a>
            <a href="#legacy" className="hover:text-[#D9B95B] transition-colors">{isAr ? 'من نحن' : 'About'}</a>
            <a href="#practices" className="hover:text-[#D9B95B] transition-colors">{isAr ? 'الخدمات' : 'Services'}</a>
            <a href="#client-journey" className="hover:text-[#D9B95B] transition-colors">{isAr ? 'رحلة العميل' : 'Client Journey'}</a>
            <a href="#consultation-suite-terminus" className="hover:text-[#D9B95B] transition-colors">{isAr ? 'تواصل معنا' : 'Contact Us'}</a>
          </nav>

          {/* Nav Right Utilities */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Live Riyadh clock micro-indicator. Agency stamp criteria. */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/30 border border-white/5 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-gray-400">RUH:</span>
              <span className="text-white font-semibold">{clocks.riyadh || '19:38'}</span>
            </div>

            {/* Language Switch Tag */}
            <button
              onClick={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-white/5 text-xs font-semibold text-gray-300 hover:text-[#D9B95B] transition-all cursor-pointer border border-white/5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'ENGLISH' : 'العربية'}</span>
            </button>
          </div>

          {/* Mobile menu controllers */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
              className="px-2.5 py-1.5 rounded border border-white/10 text-xs text-gray-300 hover:text-[#D9B95B]"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-300 hover:text-[#D9B95B] focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE RESPONSIVE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: isAr ? -300 : 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAr ? -300 : 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#095054] p-6 shadow-2xl flex flex-col justify-between border-l border-white/5 no-print"
          >
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-white/5">
                <span className="font-serif text-lg font-bold text-white">{isAr ? 'نخبة المعالي' : 'Nokhbat Al-Ma\'ali'}</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:text-[#D9B95B] text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-6 text-sm font-medium uppercase tracking-wider text-gray-300">
                <a href="#hero-banner" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'الرئيسية' : 'Home'}</a>
                <a href="#legacy" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'من نحن' : 'About'}</a>
                <a href="#practices" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'الخدمات' : 'Services'}</a>
                <a href="#client-journey" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'رحلة العميل' : 'Client Journey'}</a>
                <a href="#consultation-suite-terminus" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'تواصل معنا' : 'Contact Us'}</a>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4 font-mono text-xs text-gray-400">
              <div className="flex justify-between">
                <span>RIYADH TIME:</span>
                <span className="text-white">{clocks.riyadh || '19:38'}</span>
              </div>
              <div className="text-[10px] leading-relaxed">
                {isAr ? 'مستشار كبرى الكيانات ورجال الأعمال بالخليج.' : 'Serving enterprise priorities and sovereign initiatives in KSA.'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* SECTION 1: FULL SCREEN LUXURIOUS HERO BANNER SLIDER (Green Background: #095054) */}
      <section 
        className="relative h-screen flex items-center overflow-hidden bg-[#095054] select-none"
        onMouseMove={handleHeroMouseMove}
        id="hero-banner"
      >
        {/* Dynamic Interactive Cursor Spotlight Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 hidden sm:block z-10"
          style={{
            background: `radial-gradient(circle 450px at ${mousePos.x}px ${mousePos.y}px, rgba(217, 185, 91, 0.08), transparent)`
          }}
        />

        {/* Ambient Dark Gradient Overlays for Cinematic Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#095054] via-[#095054]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031c1d]/90 via-transparent to-[#031c1d]/80 z-10" />

        {/* Premium Image Slider with Motion Transition */}
        <AnimatePresence mode="popLayout">
          {SLIDER_DATA.map((slide, index) => {
            if (index !== slideIndex) return null;
            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1.08 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={slide.image}
                  alt={slide.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none opacity-50"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Floating Line Grids for Technical Elegance */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-radial-gradient from-transparent to-[#095054] pointer-events-none z-10 opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 flex flex-col justify-between h-auto py-12">
          
          {/* Main Hero content wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-20">
            
            {/* Left Big Text Pillar */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <Sparkles className="w-4 h-4 text-[#D9B95B]" />
                <span className="font-mono text-[10px] tracking-widest text-[#D9B95B] uppercase">
                  {isAr ? 'القيادة والسبق المعرفي القانوني' : 'LEGENDARY ADVOCACY & LAWMAKING'}
                </span>
              </div>

              {/* Bilingual Staggered Headlines */}
              <div className="space-y-4">
                <motion.h1 
                  key={`arr-${slideIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#D9B95B] leading-[1.15] tracking-tight"
                >
                  {isAr ? SLIDER_DATA[slideIndex].titleAr : SLIDER_DATA[slideIndex].titleEn}
                </motion.h1>
                <motion.p 
                  key={`str-${slideIndex}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="font-sans text-xl sm:text-2xl text-white font-light tracking-wide max-w-3xl"
                >
                  {isAr ? SLIDER_DATA[slideIndex].titleEn : SLIDER_DATA[slideIndex].titleAr}
                </motion.p>
              </div>

              <motion.p 
                key={`sub-${slideIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm text-gray-300 leading-relaxed max-w-2xl font-sans font-light"
              >
                {isAr ? SLIDER_DATA[slideIndex].subtitleAr : SLIDER_DATA[slideIndex].subtitleEn}
              </motion.p>

              {/* Call to action Buttons with light gold accent styling */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#consultation-suite-terminus"
                  className="px-8 py-4 bg-[#D9B95B] hover:bg-[#c3a14b] text-[#095054] hover:text-black font-semibold text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 active:scale-98 transition-all shadow-lg hover:shadow-[#D9B95B]/20"
                >
                  <span>{isAr ? 'حجز لقاء سري' : 'Book Strategic Consult'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#practices"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-widest uppercase rounded border border-white/15 hover:border-[#D9B95B]/40 flex items-center justify-center gap-2 active:scale-98 transition-all"
                >
                  {isAr ? 'استكشاف قطاعات العمل' : 'Explore Elite Practices'}
                </a>
              </div>

            </div>

            {/* Right floating Glass stats Card (Premium architectural asymmetry with dynamic counters) */}
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-panel p-8 rounded-lg border border-white/10 bg-white/5 relative shadow-2xl overflow-hidden"
              >
                {/* Visual Accent Corner Dot */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#D9B95B] rounded-bl-lg" />

                <div className="border-b border-white/10 pb-6 mb-6">
                  <span className="font-serif text-sm text-[#D9B95B] tracking-wide block font-semibold mb-1">
                    {isAr ? 'قسم إحصائيات متحرك لإبراز الخبرة' : 'DYNAMIC METRICS OF EXCELLENCE'}
                  </span>
                  <h3 className="font-mono text-xl text-white font-medium">{isAr ? 'نخبة المعالي' : 'Nokhbat Al-Ma\'ali'}</h3>
                </div>

                {/* Animated metrics highlights */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-mono tracking-widest block mb-1">
                      {isAr ? 'قصة نجاح وعملاء راضين' : 'Satisfied Clients & Success Stories'}
                    </span>
                    <span className="font-mono text-3xl font-bold tracking-tight text-[#D9B95B]">
                      {stats.clients}+
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-mono tracking-widest block mb-1">
                      {isAr ? 'معدل كسب وحل النزاعات' : 'Successful Resolution Rate'}
                    </span>
                    <span className="font-mono text-3xl font-bold tracking-tight text-white">
                      {stats.rate}.4%
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-mono tracking-widest block mb-1">
                      {isAr ? 'المحامون والمستشارون المرخصون' : 'Licensed Senior Advisors'}
                    </span>
                    <span className="font-mono text-3xl font-bold tracking-tight text-[#D9B95B]">
                      {stats.partners}+
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-mono tracking-widest block mb-1">
                      {isAr ? 'سنوات من الخبرة والريادة' : 'Years of Legal Integrity'}
                    </span>
                    <span className="font-mono text-3xl font-bold tracking-tight text-white">
                      {stats.years}+
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-[10px] text-gray-400 leading-relaxed font-sans font-light">
                  {isAr 
                    ? 'الأرقام والإحصائيات دقيقة ومحدثة تصاعدياً وفقاً لمعاملات العام المنصرم.' 
                    : 'Transaction metrics certified and verified in accordance with corporate advisory statements 2025-2026.'}
                </div>

              </motion.div>
            </div>

          </div>

          {/* Slider manual navigational arrows and progress markers */}
          <div className="flex items-center justify-between no-print mt-12 border-t border-white/5 pt-6">
            <div className="flex gap-2">
              {SLIDER_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    slideIndex === i ? 'w-8 bg-[#D9B95B]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSlideIndex(prev => (prev - 1 + SLIDER_DATA.length) % SLIDER_DATA.length)}
                className="w-10 h-10 border border-white/10 hover:border-[#D9B95B]/40 hover:text-[#D9B95B] text-white rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSlideIndex(prev => (prev + 1) % SLIDER_DATA.length)}
                className="w-10 h-10 border border-white/10 hover:border-[#D9B95B]/40 hover:text-[#D9B95B] text-white rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT THE FIRM: DYNAMIC TABBED ADVISORY SHOWCASE (White Background: #FFFFFF) */}
      <section className="relative py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden" id="legacy">
        {/* Decorative gold backdrop details */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D9B95B]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#095054]/2 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Visual branding block */}
            <motion.div 
              initial={{ opacity: 0, x: -40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#095054]/5 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src="/src/assets/images/supreme_consulting_hero_1781120405885.png"
                  alt="Elite Al-Maali Executive Boardroom"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Embedded luxury overlay */}
                <div className="absolute bottom-0 inset-x-0 p-8 z-20 text-white space-y-3">
                  <div className="w-12 h-1 pt-[1px] bg-[#D9B95B] rounded mb-2" />
                  <span className="font-mono text-[10px] tracking-widest text-[#D9B95B] uppercase block">
                    {isAr ? 'الترخيص العدلي الرسمي' : 'OFFICIAL MOJ LICENSE'}
                  </span>
                  <h3 className="font-serif text-lg font-bold tracking-tight text-white leading-snug">
                    {isAr 
                      ? ELITE_MAALI_INFO.company.licenseAr
                      : ELITE_MAALI_INFO.company.licenseEn}
                  </h3>
                </div>
              </div>

              {/* Decorative brand tagline block */}
              <div className="p-6 bg-neutral-50 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-[#095054] flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-[#D9B95B]" />
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-[#095054]">
                    {isAr ? ELITE_MAALI_INFO.company.taglineAr : ELITE_MAALI_INFO.company.taglineEn}
                  </p>
                  <span className="text-[10px] font-mono text-gray-400 block mt-1 uppercase">
                    ESTABLISHED IN SAUDI ARABIA • ROYAL LICENSURE
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Narrative switcher */}
            <motion.div 
              initial={{ opacity: 0, x: 40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-7 space-y-10"
            >
              
              {/* Heading */}
              <div>
                <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-3 font-semibold">
                  {isAr ? 'من نحن • شركة نخبة المعالي' : 'WHO WE ARE • ELITE AL-MAALI'}
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#095054] leading-tight tracking-tight">
                  {isAr 
                    ? ELITE_MAALI_INFO.company.fullNameAr 
                    : ELITE_MAALI_INFO.company.fullNameEn}
                </h2>
              </div>

              {/* Interactive Tabs Menu */}
              <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-2">
                {[
                  { key: 'identity', ar: 'الهوية والمسيرة', en: 'Our Identity' },
                  { key: 'vision', ar: 'الرؤية والرسالة', en: 'Vision & Mission' },
                  { key: 'values', ar: 'القيم والمبادئ', en: 'Core Values' },
                  { key: 'goals', ar: 'أهدافنا الاستراتيجية', en: 'Strategic Goals' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setAboutTab(tab.key as any)}
                    className={`px-5 py-3 text-xs sm:text-sm font-bold rounded-t-lg transition-all cursor-pointer relative ${
                      aboutTab === tab.key 
                        ? 'text-[#095054] border-b-2 border-[#D9B95B] bg-[#095054]/5 font-serif font-extrabold' 
                        : 'text-gray-500 hover:text-[#095054] hover:bg-neutral-50'
                    }`}
                  >
                    {isAr ? tab.ar : tab.en}
                    {aboutTab === tab.key && (
                      <motion.div 
                        className="absolute bottom-0 inset-x-0 h-[2px] bg-[#D9B95B]" 
                        layoutId="activeTabUnderline"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Cards */}
              <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                  {aboutTab === 'identity' && (
                    <motion.div
                      key="identity"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="font-serif text-2xl font-bold text-[#095054]">
                        {isAr ? 'عن الشركة والريادة الوطنية' : 'About Our Firm & Legal Stewardship'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-sans font-light text-base whitespace-pre-line">
                        {isAr ? ELITE_MAALI_INFO.aboutUs.ar : ELITE_MAALI_INFO.aboutUs.en}
                      </p>
                      
                      {/* Interactive certification banner */}
                      <div className="p-5 border-l-4 border-[#D9B95B] bg-[#095054]/5 rounded flex items-center justify-between gap-4 font-sans text-xs">
                        <div>
                          <span className="font-bold text-[#095054] block mb-1">
                            {isAr ? 'التصنيف والمصداقية' : 'Credential Validation'}
                          </span>
                          <p className="text-gray-500">
                            {isAr 
                              ? 'مسجلة ومرخصة رسمياً لتقديم الاستشارات وإدارة الدعاوى والاندماج وإجلاء النزاعات.' 
                              : 'Registered & officially licensed for commercial arbitration, cross-border M&A and regulatory advocacy.'}
                          </p>
                        </div>
                        <Award className="w-10 h-10 text-[#D9B95B] shrink-0" />
                      </div>
                    </motion.div>
                  )}

                  {aboutTab === 'vision' && (
                    <motion.div
                      key="vision"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div className="p-6 border-l-2 border-[#D9B95B] bg-neutral-50 rounded">
                        <span className="text-xs uppercase font-mono tracking-wider text-[#D9B95B] font-bold block mb-2">
                          {isAr ? 'الرؤية والهدف الاستراتيجي' : 'THE VISION STATEMENT'}
                        </span>
                        <p className="text-gray-850 font-serif text-lg leading-relaxed italic text-gray-800">
                          "{isAr ? ELITE_MAALI_INFO.vision.ar : ELITE_MAALI_INFO.vision.en}"
                        </p>
                      </div>

                      <div className="space-y-4">
                        <span className="text-xs uppercase font-mono tracking-wider text-[#095054] font-bold block mb-2 border-b pb-2">
                          {isAr ? 'الرسالة السامية وقيم التنفيذ' : 'THE CORE MISSION & MESSAGE'}
                        </span>
                        <p className="text-sm text-gray-650 mb-4">
                          {isAr 
                            ? 'نسعى لتقديم خدمات قانونية دقيقة وتنافسية تساهم بفاعلية في تمكين وازدهار عملائنا الاستثماريين من خلال أساليب مستدامة:'
                            : 'We strive to provide integrated legal services that fuel client growth and protect local assets with three pillars:'}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
                          {[
                            { titleAr: '• السرعة في الاستجابة', titleEn: '• Speed of response', bg: 'bg-[#095054]/5' },
                            { titleAr: '• توفير حلول مرنة', titleEn: '• Flexible custom solutions', bg: 'bg-neutral-50' },
                            { titleAr: '• الالتزام بالجودة العالمية', titleEn: '• Global quality controls', bg: 'bg-[#095054]/5' }
                          ].map((item, idx) => (
                            <div key={idx} className={`p-4 rounded-lg border border-gray-150 ${item.bg}`}>
                              <span className="font-bold text-[#095054] block">
                                {isAr ? item.titleAr : item.titleEn}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {aboutTab === 'values' && (
                    <motion.div
                      key="values"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="font-serif text-xl font-bold text-[#095054]">
                        {isAr ? 'القيم الأساسية الحاكمة لممارستنا' : 'Our Governance Values & Principles'}
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ELITE_MAALI_INFO.values.map((v, i) => {
                          const iconComponents: { [key: string]: any } = {
                            Shield: Shield,
                            Briefcase: Briefcase,
                            Users: Globe,
                            Zap: Zap,
                            Clock: Clock
                          };
                          const IconComp = iconComponents[v.icon] || Shield;
                          return (
                            <div key={i} className="flex gap-4 items-start p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg border border-gray-150 transition-all group">
                              <div className="w-10 h-10 rounded bg-[#095054] text-[#D9B95B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-serif text-sm font-bold text-gray-900">
                                  {isAr ? v.nameAr : v.nameEn}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                  {isAr ? v.descAr : v.descEn}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {aboutTab === 'goals' && (
                    <motion.div
                      key="goals"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="font-serif text-xl font-bold text-[#095054]">
                        {isAr ? 'أهدافنا الاستراتيجية والتنظيمية' : 'Our Long-Term Strategic Goals'}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                        {ELITE_MAALI_INFO.goals.map((g, idx) => (
                          <div key={idx} className="p-5 border border-gray-150 bg-neutral-50 rounded-lg hover:border-[#D9B95B] hover:shadow-sm transition-all duration-300 relative group">
                            <div className="absolute top-4 end-4 text-3xl font-serif font-black text-[#D9B95B]/20 group-hover:text-[#D9B95B]/40 transition-colors">
                              0{idx + 1}
                            </div>
                            <h4 className="font-serif text-sm font-bold text-[#095054] leading-relaxed max-w-[85%]">
                              {isAr ? g.nameAr : g.nameEn}
                            </h4>
                            <p className="text-xs text-[#095054]/60 mt-2 font-mono uppercase tracking-wider">
                              {isAr ? 'هدف مستدام نشط' : 'ACTIVE SUSTAINABILITY GOAL'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* SECTION 2.5: WHY ELITE AL-MAALI (Modern Why Us container with warm off-white/golden touches) */}
      <section className="relative py-24 bg-neutral-50 border-t border-b border-gray-150" id="why-us">
        {/* Fine gold lines decoration */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Highlight Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#D9B95B]/10 rounded-2xl rotate-2 scale-105 pointer-events-none" />
              <div className="relative p-10 bg-[#095054] text-white rounded-2xl shadow-2xl border border-[#D9B95B]/30 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#D9B95B]/10 rounded-full blur-2xl pointer-events-none" />
                <BookOpen className="w-10 h-10 text-[#D9B95B] mb-8" />
                <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight">
                  {isAr ? 'عوامل التميز والريادة' : 'Stewardship & Merit Factors'}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-sans font-light mb-8">
                  {isAr 
                    ? 'فريق نخبة المعالي يضم تخصصات دقيقة للمحاماة، مع دراسة أبعاد السوق ليكون الغطاء التشريعي لشركتكم صلباً وممتداً.' 
                    : 'Our team comprises dedicated commercial and sharia attorneys equipped with local domain knowledge to secure continuous growth.'}
                </p>
                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#D9B95B]" />
                    <span>{isAr ? '✓ التزام صارم بالنتائج والمواعيد' : '✓ Strict deadline & quality outcomes'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#D9B95B]" />
                    <span>{isAr ? '✓ فريق ممارس ثنائي اللغة بالكامل' : '✓ Fully bilingual legal specialists'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-2 font-semibold">
                  {isAr ? 'مزايا فريدة • لماذا نخبة المعالي' : 'DISTINCT ADVANTAGE • WHY ELITE AL-MAALI'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#095054] leading-tight tracking-tight">
                  {isAr ? 'لماذا نحن ركيزة شراكتكم الاستراتيجية؟' : 'Why We Are Your Pillar of Structural Protection'}
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed font-sans font-light text-base">
                {isAr ? ELITE_MAALI_INFO.whyUs.ar : ELITE_MAALI_INFO.whyUs.en}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {[
                  { 
                    id: '1',
                    titleAr: 'دقة الالتزام والمواعيد', 
                    titleEn: 'Strict Deadlines & Quality',
                    descAr: 'نلتزم بالمواعيد والجودة، ونسعى لتحقيق تطلعاتكم باحترافية مطلقة.',
                    descEn: 'We adhere to robust delivery targets ensuring structural peace.'
                  },
                  { 
                    id: '2',
                    titleAr: 'فريق عمل شغوف ومؤهل', 
                    titleEn: 'Dedicated Legal Force', 
                    descAr: 'طاقم عمل متكامل يهتم بأدق التفاصيل ويعمل بروح الفريق الواحد.',
                    descEn: 'Passionate specialists combining efforts for swift resolution.'
                  },
                  { 
                    id: '3',
                    titleAr: 'شراكات وتوسع استراتيجي', 
                    titleEn: 'Regional & Local Alliances', 
                    descAr: 'خطط للتوسع عبر شراكات استراتيجية محلية وإقليمية لتسهيل ممارستكم.',
                    descEn: 'Ongoing dynamic integrations powering legal protection across boundaries.'
                  },
                ].map((item) => (
                  <div key={item.id} className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#D9B95B] transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#095054]/5 flex items-center justify-center mb-3">
                      <span className="text-xs font-bold text-[#D9B95B]">✓</span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#095054] mb-1">
                      {isAr ? item.titleAr : item.titleEn}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3: PRACTICE AREAS EXPLORER (Green Background: #095054) */}
      <section className="relative py-24 sm:py-32 bg-[#095054] text-white overflow-hidden" id="practices">
        {/* Decorative Light Background Sphere */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D9B95B]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block mb-3 font-semibold">
              {isAr ? 'قطاعات الاستشارات المعمقة' : 'DOMAIN LEVEL EXPERTISE'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              {isAr ? 'الممارسة الذكية والحلول التنظيمية المعقدة' : 'Precision Legal Engineering & Dynamic Sectors'}
            </h2>
            <p className="text-gray-300 text-sm mt-4 font-sans font-light">
              {isAr 
                ? 'انقر على القطاع المعني لعرض الفحص التشريعي، الاستردادات، تفويضات الاكتتاب، وحواضن أعمال الشركاء القانونيين المسؤولين.' 
                : 'Interface with the cards below to trigger complete structural and capital profiles including portfolio lists.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
            
            {/* Interactive Grid Categories */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-5 grid grid-cols-1 gap-4"
            >
              {PRACTICE_AREAS.map((pt) => {
                const isActive = activePracticeId === pt.id;
                return (
                  <button
                    key={pt.id}
                    onClick={() => setActivePracticeId(pt.id)}
                    className={`p-6 rounded-lg border text-right ${isAr ? 'text-right' : 'text-left'} transition-all cursor-pointer flex justify-between items-center group relative overflow-hidden ${
                      isActive 
                        ? 'bg-white/10 border-[#D9B95B] text-white shadow-xl translate-x-1' 
                        : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded ${isActive ? 'bg-[#D9B95B] text-[#095054]' : 'bg-white/5 text-gray-400 group-hover:text-white transition-colors'}`}>
                        {renderIconComponent(pt.iconName, "w-6 h-6")}
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-semibold tracking-wide">
                          {isAr ? pt.titleAr : pt.titleEn}
                        </h4>
                        <span className="text-[10px] font-mono text-[#D9B95B] mt-1 block">
                          {pt.stats}
                        </span>
                      </div>
                    </div>
                    {isAr ? <ChevronLeft className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" /> : <ChevronRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />}
                  </button>
                );
              })}
            </motion.div>

            {/* Dynamic Active Showcase Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePracticeId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-8 sm:p-12 rounded-xl border border-white/10 bg-white/5 relative shadow-2xl space-y-8"
                >
                  {/* Absolute watermark ribbon */}
                  <div className="absolute top-0 right-12 px-4 py-1 bg-[#D9B95B] text-[#095054] text-[9px] font-mono font-bold uppercase rounded-b tracking-widest">
                    ACTIVE MAPPED SECTOR
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#D9B95B] mb-2">
                      {isAr ? selectedPractice.titleAr : selectedPractice.titleEn}
                    </h3>
                    <p className="text-sm font-sans tracking-wide text-gray-300">
                      {isAr ? selectedPractice.titleEn : selectedPractice.titleAr}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-[#D9B95B]">
                      {isAr ? 'البيان التنظيمي التفصيلي' : 'COMPREHENSIVE DIRECTIVE EXECUTIVE SUMMARY'}
                    </h4>
                    <p className="text-sm text-gray-200 leading-relaxed font-light">
                      {isAr ? selectedPractice.detailedAr : selectedPractice.detailedEn}
                    </p>
                  </div>

                  {/* Portfolio achievements highlights */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400">
                      {isAr ? 'حقيبة الصفقات والمعاملات البارزة' : 'LANDMARK COMMITTED TRANSACTIONS PORTFOLIO'}
                    </h4>

                    <div className="grid grid-cols-1 gap-3">
                      {(isAr ? selectedPractice.portfolioAr : selectedPractice.portfolioEn).map((item, index) => (
                        <div key={index} className="flex gap-3 items-center bg-black/15 p-3 rounded border border-white/5">
                          <CheckCircle className="w-4 h-4 text-[#D9B95B] shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Matching case director info */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                      <p className="text-[10px] text-gray-400 font-mono uppercase">
                        {isAr ? 'المحامي الرئيسي لهذه الممارسة' : 'PRACTICE AREA HEAD COUNSEL'}
                      </p>
                      <p className="text-base font-serif font-semibold text-white mt-1">
                        {isAr 
                          ? PARTNERS.find(x => x.id === selectedPractice.activePartnerId)?.nameAr 
                          : PARTNERS.find(x => x.id === selectedPractice.activePartnerId)?.nameEn
                        }
                      </p>
                    </div>

                    <a
                      href="#consultation-suite-terminus"
                      className="px-6 py-2.5 bg-[#D9B95B] hover:bg-[#c3a14b] text-[#095054] hover:text-black font-semibold text-xs tracking-wider uppercase rounded active:scale-95 transition-all text-center"
                    >
                      {isAr ? 'طلب مناقشة الملف مع الشريك' : 'Advisory Session with Lead'}
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: INTERACTIVE CLIENT JOURNEY TIMELINE (White Background: #FFFFFF) */}
      <section className="relative py-24 sm:py-32 bg-[#FFFFFF]" id="client-journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-3 font-semibold">
              {isAr ? ELITE_MAALI_INFO.customerJourney.titleAr : ELITE_MAALI_INFO.customerJourney.titleEn}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#095054] tracking-tight">
              {isAr ? 'رحلة العميل التفاعلية لضمان غطاء قانوني متكامل' : 'Interactive Client Journey Stations & Clear Paths'}
            </h2>
            <p className="text-gray-600 text-sm mt-4 font-sans font-light">
              {isAr 
                ? ELITE_MAALI_INFO.customerJourney.introAr
                : ELITE_MAALI_INFO.customerJourney.introEn}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
            {/* Step buttons layout */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-12 xl:col-span-5 space-y-4"
            >
              {ELITE_MAALI_INFO.customerJourney.stations.map((st, index) => {
                const isActive = activeJourneyStep === index;
                const iconsMap: { [key: number]: any } = {
                  1: Scale,
                  2: BookOpen,
                  3: FileText,
                  4: ShieldCheck,
                  5: Activity,
                  6: Zap
                };
                const IconComponent = iconsMap[st.id] || Scale;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveJourneyStep(index)}
                    className={`w-full p-5 rounded-lg text-right transition-all flex items-center gap-4 border cursor-pointer ${
                      isActive 
                        ? 'bg-[#095054] text-white border-[#D9B95B] shadow-lg translate-x-2' 
                        : 'bg-neutral-50 text-[#095054] border-gray-150 hover:bg-neutral-100'
                    }`}
                  >
                    <div className={`p-2 rounded ${isActive ? 'bg-[#D9B95B] text-[#095054]' : 'bg-[#095054]/5 text-[#095054]'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-sm sm:text-base font-semibold transition-colors">
                      {isAr ? `${st.id}. ${st.nameAr}` : `${st.id}. ${st.nameEn}`}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Dynamic visual/animative detail representation */}
            <div className="lg:col-span-12 xl:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJourneyStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 sm:p-12 border-l-4 border-[#D9B95B] bg-gradient-to-br from-[#095054]/5 to-transparent rounded-r space-y-6"
                >
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D9B95B] bg-[#095054]/10 px-3 py-1 rounded">
                      {isAr ? `المرحلة النشطة: الخطوة ${activeJourneyStep + 1}` : `ACTIVE PROCESS PHASE: STEP ${activeJourneyStep + 1}`}
                    </span>
                    <span className="text-4xl font-serif font-black text-gray-250">0{activeJourneyStep + 1}</span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-[#095054]">
                      {isAr 
                        ? ELITE_MAALI_INFO.customerJourney.stations[activeJourneyStep].nameAr 
                        : ELITE_MAALI_INFO.customerJourney.stations[activeJourneyStep].nameEn}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans font-light animate-fade-in">
                      {isAr 
                        ? ELITE_MAALI_INFO.customerJourney.stations[activeJourneyStep].descriptionAr 
                        : ELITE_MAALI_INFO.customerJourney.stations[activeJourneyStep].descriptionEn}
                    </p>
                  </div>

                  {/* Actions mapping inside journey */}
                  <div className="pt-6 border-t border-gray-150 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono">CONFIDENTIAL CLIENT SERVICE PROTOCOLS</span>
                    <a
                      href="#consultation-suite-terminus"
                      className="px-6 py-2.5 bg-[#095054] text-[#D9B95B] hover:text-white font-semibold text-xs tracking-wider rounded active:scale-95 transition-all text-center"
                    >
                      {isAr ? 'احجز استشارة لهذه الخطوة' : 'Consult for this Stage'}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: REGULATORY INTELLIGENCE, SAUDI SANCTION TICKERS, AND STRATEGY BUILDER (White Background: #FFFFFF) - NO CARDS! */}
      <section className="relative py-24 sm:py-32 bg-[#FFFFFF] text-gray-950 border-t border-b border-gray-100 overflow-hidden font-sans" id="strategy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mb-16"
          >
            <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-3 font-semibold">
              {isAr ? 'الذكاء والسبق التشريعي' : 'REGULATORY WATCHTOWER'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#095054] tracking-tight">
              {isAr ? 'تحليل مسار القوانين وحماية الاستثمارات' : 'Saudi Regulatory Tickers & Custom Compliance Planning'}
            </h2>
            <p className="text-gray-600 text-sm mt-4 font-light">
              {isAr 
                ? 'ابق على اطلاع مع مؤشرات سدايا، البنك المركزي، وقوانين حوكمة الكيانات بموجب الرؤية الشاملة للجنة.' 
                : 'Monitor incoming legislative changes in real-time. Fulfill your fiduciary requirements cleanly using our interactive planner below.'}
            </p>
          </motion.div>

          <div className="space-y-12">
            
            {/* Regulatory Tickers modern timeline rows - NO CARDS! */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8"
            >
              {REGULATORY_TRACKER.map((reg) => (
                <div key={reg.id} className="relative py-6 border-b border-gray-100 flex flex-col justify-between group hover:border-[#D9B95B] transition-colors duration-300">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2">
                       <span className="text-[10px] font-mono text-white bg-[#095054] px-2.5 py-1 rounded uppercase font-semibold">
                        {reg.date}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 tracking-wide font-bold">
                        {isAr ? reg.statusAr : reg.statusEn}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#095054] group-hover:text-[#D9B95B] transition-colors duration-300">
                      {isAr ? reg.titleAr : reg.titleEn}
                    </h4>

                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      {isAr ? reg.descriptionAr : reg.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 flex justify-between items-center text-[10px] font-mono text-gray-400">
                    <span>IMPACT CRITICALITY:</span>
                    <span className="text-[#D9B95B] tracking-wider font-bold">
                      {'★'.repeat(reg.impactScore)}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Strategic Wizard Tool */}
            <div className="pt-8">
              <StrategyBuilder lang={lang} />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: LANDMARK CASE STUDIES & LITIGATION HISTORY (Green Background: #095054) - NO CARDS! */}
      <section className="relative py-24 sm:py-32 bg-[#095054] text-white border-t border-b border-white/5" id="landmark-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16"
          >
            <div>
              <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block mb-3 font-semibold">
                {isAr ? 'عقود السجلات والنزاعات الكبرى' : 'THE HISTORIC DOCKET'}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                {isAr ? 'قضايا مرجعية وتسويات أرست سوابق قانونية' : 'Case Studies Favorable To SCCA & Global Interests'}
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {[
                { id: 'all', ar: 'الكل', en: 'All' },
                { id: 'infra', ar: 'المشروعات الكبرى', en: 'Infrastructure' },
                { id: 'arbitration', ar: 'التحكيم الدولي', en: 'Arbitration' },
                { id: 'corp', ar: 'حوكمة واستحواذ', en: 'Corporate M&A' },
              ].map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setActiveCaseFilter(btn.id)}
                  className={`px-4 py-2 rounded font-semibold transition-all cursor-pointer ${
                    activeCaseFilter === btn.id 
                      ? 'bg-[#D9B95B] text-black shadow-lg' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {isAr ? btn.ar : btn.en}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 font-sans">
            {filteredCases.map((cs) => (
              <motion.div 
                key={cs.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-white/10 group relative overflow-hidden transition-colors"
              >
                {/* Visual anchor line */}
                <div className="absolute top-0 right-0 w-2 h-full bg-[#D9B95B] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />

                {/* Left sector details */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[10px] font-mono text-black bg-[#D9B95B] px-2.5 py-1 rounded-sm uppercase tracking-wider inline-block font-semibold">
                    {isAr ? cs.sectorAr : cs.sectorEn}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#D9B95B] transition-colors leading-tight">
                    {isAr ? cs.titleAr : cs.titleEn}
                  </h3>

                  <div className="space-y-2 border-t border-white/15 pt-4 text-xs font-mono text-gray-300">
                    <div>
                      <span className="text-[#D9B95B] uppercase">{isAr ? 'الجهة الموكلة:' : 'CLIENT REPRESENTED:'}</span>
                      <p className="font-sans font-semibold text-white">{isAr ? cs.clientAr : cs.clientEn}</p>
                    </div>
                  </div>
                </div>

                {/* Challenge and Solution block */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-1">
                      {isAr ? 'التحدي القانوني الأولي' : 'THE CORE LEGAL IMPASSE'}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                      {isAr ? cs.challengeAr : cs.challengeEn}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-[#D9B95B] mb-1 font-semibold">
                      {isAr ? 'المنهجية والاستراتيجية العبقرية' : 'OUR RESOLUTIVE STRATAGEM'}
                    </h4>
                    <p className="text-xs sm:text-sm text-white leading-relaxed font-semibold">
                      {isAr ? cs.solutionAr : cs.solutionEn}
                    </p>
                  </div>
                </div>

                {/* Result and Precedent block style borderless list */}
                <div className="lg:col-span-3 space-y-4 border-l-2 border-[#D9B95B] pl-6 py-1">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#D9B95B] block mb-1">
                      {isAr ? 'الحكم والتسوية النهائية' : 'Restitution Outcome'}
                    </span>
                    <p className="text-sm font-bold text-white tracking-tight">
                      {isAr ? cs.resultAr : cs.resultEn}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">
                      {isAr ? 'التأسيس والمبدأ الثابت' : 'ESTABLISHED RECOURSE PRECEDENT'}
                    </span>
                    <p className="text-[11px] font-sans text-gray-300 italic leading-relaxed">
                      "{isAr ? cs.precedentAr : cs.precedentEn}"
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 8: LUXURIOUS SCHEDULING TERMINUS & BOOKING SYSTEM (White Background: #FFFFFF) */}
      <section className="relative py-24 sm:py-32 bg-[#FFFFFF] text-gray-900 overflow-hidden scroll-mt-20 border-t border-gray-100" id="consultation-suite-terminus">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#095054]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl text-center mx-auto mb-16">
            <span className="font-mono text-xs text-[#095054] tracking-widest uppercase block mb-3 font-semibold text-center">
              {isAr ? 'بوابة حجز الاستشارات الشرفية' : 'COMPREHENSIVE ADVISORY SCHEDULER'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#095054] tracking-tight">
              {isAr ? 'تأمين التفرغ الاستشاري مع المحامي الشريك' : 'Secure Reserved Council with Senior Partners'}
            </h2>
            <p className="text-gray-600 text-sm mt-4 font-light font-sans max-w-xl mx-auto">
              {isAr 
                ? 'لوجود ضرورة قصوى لمناقشة الصفقات، المنازعات الدولية، أو صياغة البنود، نسجل ملف بياناتكم تحت سرية متبادلة مع الشريك المعني بموجب النظام.' 
                : 'For high-worth transactions, dispute representations, or statutory revisions, lock your reservation cleanly. Direct integration ensures confidential docket routing.'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto font-sans">
            
            <AnimatePresence mode="wait">
              {successBooking ? (
                <BookingInvoice 
                  booking={successBooking}
                  partner={PARTNERS.find(x => x.id === successBooking.partnerId)}
                  practice={PRACTICE_AREAS.find(x => x.id === successBooking.practiceId)}
                  onReset={resetBookingForm}
                  lang={lang}
                />
              ) : (
                <motion.form
                  onSubmit={handleBookingSubmit}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-neutral-50 p-8 sm:p-12 rounded-xl border border-gray-150 relative space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div>
                      <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                        {isAr ? 'اسم المستعلم / ممثل الهيئة (مطلوب)' : 'Representative Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder={isAr ? 'سعادة المهندس / أ. خالد الشريف' : 'e.g. Charles Hodges'}
                        className="w-full bg-white border border-gray-300 hover:border-[#095054]/40 focus:border-[#095054] px-4 py-3 rounded text-sm text-gray-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                        {isAr ? 'الهاتف الفيدرالي المباشر (مطلوب)' : 'Representative Direct Line *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+966 50 000 0000"
                        className="w-full bg-white border border-gray-300 hover:border-[#095054]/40 focus:border-[#095054] px-4 py-3 rounded text-sm text-gray-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                        {isAr ? 'البريد المؤسسي لجهة الاتصال (مطلوب)' : 'Corporate Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="rep@hexa-investment.com"
                        className="w-full bg-white border border-gray-300 hover:border-[#095054]/40 focus:border-[#095054] px-4 py-3 rounded text-sm text-gray-900 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                        {isAr ? 'قطاع الممارسة المطلوب' : 'Target Practice Area'}
                      </label>
                      <select
                        value={bookingForm.practiceId}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, practiceId: e.target.value }))}
                        className="w-full bg-white border border-gray-300 hover:border-[#095054]/40 focus:border-[#095054] px-4 py-3 rounded text-sm text-gray-900 focus:outline-none cursor-pointer"
                      >
                        {PRACTICE_AREAS.map(pa => (
                          <option key={pa.id} value={pa.id} className="bg-white text-gray-900">
                            {isAr ? pa.titleAr : pa.titleEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                        {isAr ? 'تخصيص الشريك القانوني المفضل' : 'Preferred Senior Legal Director'}
                      </label>
                      <select
                        value={bookingForm.partnerId}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, partnerId: e.target.value }))}
                        className="w-full bg-white border border-gray-300 hover:border-[#095054]/40 focus:border-[#095054] px-4 py-3 rounded text-sm text-gray-900 focus:outline-none cursor-pointer"
                      >
                        {PARTNERS.map(pt => (
                          <option key={pt.id} value={pt.id} className="bg-white text-gray-900">
                            {isAr ? pt.nameAr : pt.nameEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                        {isAr ? 'تاريخ الحجز المفضل' : 'Preferred Session Date'}
                      </label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full bg-white border border-gray-300 hover:border-[#095054]/40 focus:border-[#095054] px-4 py-3 rounded text-sm text-gray-900 focus:outline-none cursor-pointer"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                      {isAr ? 'توقيت اللقاء المفضل' : 'Preferred Calendar Slot'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        '09:00 AM - 10:30 AM',
                        '10:30 AM - 12:00 PM',
                        '01:30 PM - 03:00 PM',
                        '03:00 PM - 04:30 PM'
                      ].map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setBookingForm(prev => ({ ...prev, timeSlot: slot }))}
                          className={`p-3 text-center rounded text-xs transition-all cursor-pointer ${
                            bookingForm.timeSlot === slot
                              ? 'bg-[#D9B95B] text-black font-semibold shadow-md'
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-gray-500 mb-2 font-mono tracking-wider">
                      {isAr ? 'ملخص مقتضب سري عن القضية / جدول الأعمال' : 'Confidential Advisory Brief / Subject'}
                    </label>
                    <textarea
                      rows={4}
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder={isAr 
                        ? 'طلب صياغة بنود امتياز لشركة طاقة شمسية وتجنب تضارب البيئة النظامية والضرائب...'
                        : 'Describe your case, transaction details or legal needs...'}
                      className="w-full bg-white border border-gray-300 hover:border-[#095054]/40 focus:border-[#095054] px-4 py-3 rounded text-sm text-gray-950 focus:outline-none transition-colors"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, backgroundColor: "#000000" }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-[#095054] text-[#D9B95B] hover:text-white font-semibold text-xs tracking-widest uppercase rounded cursor-pointer transition-all duration-300 shadow-md"
                  >
                    {isAr ? 'إرسال طلب الحجز المؤيد' : 'Submit Secured Consultation Request'}
                  </motion.button>

                  {bookingStatus && (
                    <p className={`text-center text-xs font-semibold mt-4 ${
                      bookingStatus.type === 'success' ? 'text-green-600' : 'text-red-500'
                    }`}>
                      {bookingStatus.msg}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 9: GEOGRAPHIC REACH & DIRECTORIES (Deep Green Background: #053234) */}
      <footer className="relative py-24 bg-[#053234] text-white overflow-hidden" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top row maps & dynamic indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-white/10 pb-12">
            
            {/* Jeddah HQ (ممثلة بالقيم الأساسية للمكتب) */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D9B95B]" />
                  <h4 className="font-serif text-lg font-semibold text-white">
                    {isAr ? 'المقر الرئيسي - جـدة' : 'Jeddah Headquarters'}
                  </h4>
                </div>
                <span className="font-mono text-xs text-[#D9B95B] bg-white/10 px-2 py-0.5 rounded font-bold">JEDDAH HQ</span>
              </div>
              
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {isAr 
                  ? ELITE_MAALI_INFO.contact.addressAr
                  : ELITE_MAALI_INFO.contact.addressEn}
              </p>
              
              <div className="text-xs space-y-1 text-gray-400 font-mono">
                <div>TEL 1: {ELITE_MAALI_INFO.contact.phone[0]}</div>
                <div>TEL 2: {ELITE_MAALI_INFO.contact.phone[1]}</div>
                <div>SECURE MAIL: <a href={`mailto:${ELITE_MAALI_INFO.contact.email}`} className="underline text-[#D9B95B]">{ELITE_MAALI_INFO.contact.email}</a></div>
              </div>
            </div>

            {/* Riyadh Regional Ally Hub */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-300" />
                  <h4 className="font-serif text-lg font-semibold text-white">
                    {isAr ? 'شريك الرياض الإقليمي' : 'Riyadh Alliance Hub'}
                  </h4>
                </div>
                <span className="font-mono text-xs text-gray-400 bg-white/15 px-2 py-0.5 rounded">{clocks.riyadh || '19:38'}</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {isAr
                  ? 'صالة الشركاء، مبنى الفيصلية الفاخر، طريق الملك فهد، العليا، الرياض، المملكة العربية السعودية.'
                  : 'Partners Room, Al Faisaliah Business Suites, King Fahd Road, Al Olaya District, Riyadh, Kingdom of Saudi Arabia.'}
              </p>

              <div className="text-xs space-y-1 text-gray-400 font-mono">
                <div>TEL: +966 11 400 9000</div>
                <div>SECURE MAIL: <a href={`mailto:${ELITE_MAALI_INFO.contact.email}`} className="underline">ruh@almaali-laws.com</a></div>
              </div>
            </div>

            {/* London & Geneva Arbitration Centers (Combined into the third column) */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-350" />
                  <h4 className="font-serif text-lg font-semibold text-white">
                    {isAr ? 'الارتباط والتحكيم الدولي' : 'Global Arbitration Hubs'}
                  </h4>
                </div>
                <span className="font-mono text-xs text-gray-400 bg-white/15 px-2 py-0.5 rounded">LONDON & GVA</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {isAr
                  ? 'مكاتب الوساطة الإقليمية وشركاء التحكيم في لندن وجنيف لمتابعة النزاعات العابرة للحدود.'
                  : 'Representative chambers in London and Geneva supporting cross-border disputes and SCCA/LCIA filings.'}
              </p>

              <div className="text-xs space-y-1 text-gray-400 font-mono">
                <div>LON: +44 20 7946 0958 • GVA: +41 22 555 0199</div>
                <div>SECURE MAIL: <a href={`mailto:${ELITE_MAALI_INFO.contact.email}`} className="underline">global@almaali-laws.com</a></div>
              </div>
            </div>

          </div>

          {/* Middle row logos, newsletter forms & certification disclosures */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start no-print">
            
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-serif text-xl font-bold tracking-tight text-[#D9B95B]">
                {isAr ? 'الالتزام بالنشرة التشريعية' : 'Sovereign Bulletin Enrollment'}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {isAr 
                  ? 'اشترك للحصول دورياً على الترجمة والأبحاث وصياغة لوائح الامتياز المحدثة الصادرة عن مركزنا الاستشاري بالرياض.' 
                  : 'Opt in to receive formal briefs on Saudi ministerial decrees, tax revisions, SCCA rulings, and legal planning.'}
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="executive@group.com"
                  className="bg-[#095054]/40 border border-white/15 px-3 py-2.5 rounded text-xs text-white focus:outline-none focus:border-[#D9B95B] w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#D9B95B] hover:bg-[#c3a14b] text-black font-semibold text-xs rounded transition-colors active:scale-95 cursor-pointer"
                >
                  {isAr ? 'انضمام' : 'Register'}
                </button>
              </form>

              {newsletterSubbed && (
                <p className="text-xs text-emerald-400 animate-pulse">
                  {isAr ? '✓ تم إضافتك لقائمة النشرة الاستراتيجية بنجاح.' : '✓ Address registered under corporate containment protocols.'}
                </p>
              )}
            </div>

            {/* Certifications and ministries accreditation */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-gray-400 font-mono">
              <div>
                <span className="text-[10px] text-[#D9B95B] uppercase block mb-1">KSA Ministry of Justice</span>
                <p className="font-sans leading-snug">Licensed Advocacy License No. 19/839/AL</p>
              </div>

              <div>
                <span className="text-[10px] text-gray-300 uppercase block mb-1">MISA ACCREDITED</span>
                <p className="font-sans leading-snug">Corporate Structuring Authorized Consultant</p>
              </div>

              <div>
                <span className="text-[10px] text-[#D9B95B] uppercase block mb-1">SCCA PARTNER</span>
                <p className="font-sans leading-snug">Accredited Dispute Mediator Board Chambers</p>
              </div>
            </div>

          </div>

          {/* Bottom row copyrights and design legal credit */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[10px] text-gray-400 text-center">
            
            <div>
              &copy; {new Date().getFullYear()} {isAr ? 'شركة نخبة المعالي للمحاماة والاستشارات القانونية' : 'Elite Al-Maali Company'}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'} {isAr ? 'رخصة وزارة العدل.' : 'Licensed by the Ministry of Justice.'}
            </div>

            <div className="space-x-4">
              <a href="#disclaimers" className="hover:text-white transition-colors">{isAr ? 'تنبه المسؤولية' : 'Full Disclaimers'}</a>
              <span>•</span>
              <a href="#containment" className="hover:text-white transition-colors">{isAr ? 'ضوابط السرية والخصوصية سدايا' : 'PDPL Compliance Policy'}</a>
            </div>

            <div className="text-[#D9B95B]">
              Designed with prestige by top international agencies.
            </div>

          </div>

        </div>
      </footer>

      {/* ADVISOR CHATBOT FLOATING ICON AND DRAWER */}
      <div className="fixed bottom-6 end-6 z-50 no-print font-sans">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsChatOpen(prev => !prev)}
          className="w-14 h-14 bg-[#D9B95B] text-black rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-[#c3a14b] active:scale-95 transition-all outline-none border-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>

        {/* Chat Drawer */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="absolute bottom-20 end-0 w-[330px] sm:w-[400px] h-[500px] bg-[#095054] text-white border-2 border-[#D9B95B] rounded-xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-4 bg-black/40 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#D9B95B]/15 border border-[#D9B95B] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#D9B95B]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">
                      {isAr ? 'مستشار نخبة المعالي الرقمي' : 'Nokhbat Advisor Bot'}
                    </h4>
                    <span className="text-[9px] font-mono text-emerald-400 block">
                      ● {isAr ? 'متصل ومؤمن بالكامل Elitist' : 'CONNECTED & SECURE ELITIST'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
                {chatMessages.map((msg, idx) => {
                  const isBot = msg.sender === 'bot';
                  return (
                    <div key={idx} className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[85%] p-3 rounded-lg leading-relaxed ${isBot ? 'bg-black/20 text-gray-100 border border-white/5 rounded-tl-none' : 'bg-[#D9B95B] text-black font-medium rounded-tr-none'}`}>
                        {isAr ? msg.textAr : msg.textEn}
                      </div>
                    </div>
                  );
                })}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-black/20 text-gray-400 p-3 rounded-lg flex items-center gap-1.5 rounded-tl-none border border-white/5">
                      <span className="w-1.5 h-1.5 bg-[#D9B95B] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-[#D9B95B] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-[#D9B95B] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Quick Prompts Selection */}
              <div className="p-3 bg-black/25 border-t border-white/5 space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-400 block font-mono">
                  {isAr ? 'اختر مسار ممارسة استشاري:' : 'SELECT LEGAL VECTOR FOR AUDIT:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { key: 'rhq', ar: 'تأسيس الـ RHQ بالرياض', en: 'Establish RHQ in Riyadh' },
                    { key: 'arbitration', ar: 'تكييف بنود التحكيم (SCCA)', en: 'Arbitration setup (SCCA)' },
                    { key: 'sdiaa', ar: 'حوكمة حماية سدايا', en: 'SDAIA Data Audit' },
                    { key: 'partner', ar: 'حجز لقاء مع شريك', en: 'Reserve Partner Calendar' },
                  ].map((p, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => handleBotQuery(p.key, p.ar, p.en)}
                      disabled={isTyping}
                      className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 hover:border-[#D9B95B]/45 text-gray-200 rounded text-[10px] font-medium transition-all text-right cursor-pointer"
                    >
                      {isAr ? p.ar : p.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Notice */}
              <div className="p-2 border-t border-white/10 bg-black/50 text-[8px] text-gray-400 text-center font-mono uppercase">
                {isAr ? '✓ تشفير ثنائي الاتجاه بموجب حوكمة سدايا المحدثة' : '✓ END-TO-END DATA ENCRYPTION UNDER KSA PDPL'}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </div>
  );
}
