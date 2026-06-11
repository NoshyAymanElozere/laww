import { useState, useEffect, MouseEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase, Building2, TrendingUp, Scale, Shield, Zap,
  ArrowRight, ArrowLeft, Mail, Phone, Clock,
  Award, Globe, Menu, X, MapPin,
  ChevronRight, ChevronLeft, FileText, BookOpen,
  ShieldCheck, Send, Sparkles, Search, Handshake, Users, Hand
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ELITE_MAALI_DATA } from './data';
import logoImg from './assets/images/logo.webp';
import slide1 from './assets/images/supreme_consulting_hero_1781120405885.png';
import slide2 from './assets/images/legal_meeting_hero_1781120375724.png';
import slide3 from './assets/images/riyadh_skyline_hero_1781120361392.png';
import slide4 from './assets/images/contract_signing_hero_1781120389685.png';
import slide5 from './assets/images/arbitration_hall_hero_1781120423740.png';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar'); // Default to Arabic as requested
  const isAr = lang === 'ar';

  // State for active customer journey station
  const [activeStationIndex, setActiveStationIndex] = useState<number>(0);

  // State for responsive mobile navigation menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for active service category filter or modal preview
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState<number | null>(null);

  // Mouse tracking spotlight state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Contact form submission feedback
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formInput, setFormInput] = useState({ name: '', email: '', message: '' });

  // Loading screen states
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Hero section slideshow configuration
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const heroSlides = [
    {
      img: slide1,
      titleAr: 'الريادة والتميز في الاستشارات القضائية والتمثيل الشرعي',
      titleEn: 'Leadership and Excellence in Judicial Consultations & Representation'
    },
    {
      img: slide2,
      titleAr: 'لقاءات وصياغة قانونية متكاملة لشركائنا',
      titleEn: 'Integrated Legal Meetings & Drafting For Our Partners'
    },
    {
      img: slide3,
      titleAr: 'رؤية تشريعية ممتدة تغطي كافة أرجاء المملكة',
      titleEn: 'Legislative Vision Covering the Entire Kingdom'
    },
    {
      img: slide4,
      titleAr: 'صياغة وتوثيق العقود التجارية المحلية والدولية',
      titleEn: 'Drafting & Executing Local & International Contracts'
    },
    {
      img: slide5,
      titleAr: 'تسوية النزاعات والتحكيم التجاري الفعال',
      titleEn: 'Dispute Resolution & Effective Commercial Arbitration'
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Loading progress calculation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  // Lock scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  // Initialize AOS scroll animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Update scroll reading progress
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

  // Track mouse coordinates for background spotlight glow
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  // Helper to map category/value names to Lucide Icons
  const getValueIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'magnifying-glass':
        return <Search className="w-6 h-6 text-[#D9B95B]" />;
      case 'handshake':
        return <Handshake className="w-6 h-6 text-[#D9B95B]" />;
      case 'team':
        return <Users className="w-6 h-6 text-[#D9B95B]" />;
      case 'hand':
        return <Hand className="w-6 h-6 text-[#D9B95B]" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-[#D9B95B]" />;
      default:
        return <Shield className="w-6 h-6 text-[#D9B95B]" />;
    }
  };

  // Helper for services icons
  const getServiceIcon = (categoryEn: string) => {
    switch (categoryEn.toLowerCase()) {
      case 'companies':
        return <Briefcase className="w-8 h-8 text-[#D9B95B]" />;
      case 'intellectual':
        return <Shield className="w-8 h-8 text-[#D9B95B]" />;
      case 'arbitration and disputes':
        return <Scale className="w-8 h-8 text-[#D9B95B]" />;
      case 'general consulting':
        return <BookOpen className="w-8 h-8 text-[#D9B95B]" />;
      case 'labor and human resources':
        return <Users className="w-8 h-8 text-[#D9B95B]" />;
      case 'finance & investment':
        return <TrendingUp className="w-8 h-8 text-[#D9B95B]" />;
      case 'real estate & contracting':
        return <Building2 className="w-8 h-8 text-[#D9B95B]" />;
      case 'personal status':
        return <Scale className="w-8 h-8 text-[#D9B95B]" />;
      case 'zakat and taxes':
        return <BookOpen className="w-8 h-8 text-[#D9B95B]" />;
      case 'insurance':
        return <Award className="w-8 h-8 text-[#D9B95B]" />;
      case 'commercial criminal court':
        return <ShieldCheck className="w-8 h-8 text-[#D9B95B]" />;
      case 'administrative and compliance':
        return <FileText className="w-8 h-8 text-[#D9B95B]" />;
      default:
        return <Scale className="w-8 h-8 text-[#D9B95B]" />;
    }
  };

  // Helper for customer journey icons
  const getJourneyIcon = (stepId: number) => {
    switch (stepId) {
      case 1:
        return <Users className="w-5 h-5 text-[#095054]" />;
      case 2:
        return <BookOpen className="w-5 h-5 text-[#095054]" />;
      case 3:
        return <FileText className="w-5 h-5 text-[#095054]" />;
      case 4:
        return <Handshake className="w-5 h-5 text-[#095054]" />;
      case 5:
        return <Zap className="w-5 h-5 text-[#095054]" />;
      case 6:
        return <Phone className="w-5 h-5 text-[#095054]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#095054]" />;
    }
  };

  // Form submission handler
  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formInput.name || !formInput.email || !formInput.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormInput({ name: '', email: '', message: '' });
    }, 5000);
  };

  const d = ELITE_MAALI_DATA;

  return (
    <div
      className={`min-h-screen font-sans bg-[#095054] text-[#f3f4f6] antialiased overflow-hidden selection:bg-[#D9B95B] selection:text-black ${isAr ? 'rtl' : 'ltr'
        }`}
      style={{ direction: isAr ? 'rtl' : 'ltr' }}
      onMouseMove={handleMouseMove}
    >
      {/* PRELOADER SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{
              y: '-100%',
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-12 bg-[#095054] text-white"
          >
            {/* Top row */}
            <div className="flex justify-between items-center font-mono text-[10px] sm:text-xs text-gray-300">
              <div>{isAr ? 'تأمين الامتثال والريادة' : 'SOVEREIGN LEGAL TRUST'}</div>
              <div>{isAr ? 'الترخيص الوطني المعتمد' : 'LICENSED ADVISORY'}</div>
            </div>

            {/* Center Content */}
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-28 h-28 mx-auto flex items-center justify-center"
              >
                <img src={logoImg} alt="Elite Al-Maali" className="w-full h-full object-contain" />
              </motion.div>

              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {isAr ? d.company.fullNameAr : d.company.fullNameEn}
              </h1>

              <div className="font-serif text-sm sm:text-lg text-[#D9B95B] italic max-w-md mx-auto">
                {isAr ? d.company.taglineAr : d.company.taglineEn}
              </div>
            </div>

            {/* Bottom Progress details */}
            <div className="space-y-4 max-w-lg mx-auto w-full">
              <div className="flex justify-between items-end">
                <span className="font-mono text-4xl sm:text-5xl font-black text-[#D9B95B] leading-none">
                  {Math.min(loadingProgress, 100)}%
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">
                  {isAr ? 'جاري تهيئة منصة نخبة المعالي...' : 'INITIALIZING PLATFORM STACKS...'}
                </span>
              </div>
              <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded">
                <div
                  className="h-full bg-[#D9B95B] transition-all duration-150 ease-out"
                  style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Orbs & Spotlight glow */}
      <div
        className="glow-orb glow-orb-gold w-[600px] h-[600px] transition-transform duration-300 pointer-events-none hidden md:block"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          top: 0,
          left: 0,
          position: 'fixed'
        }}
      />

      {/* Fixed Ambient Glow Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glow-orb glow-orb-teal w-[800px] h-[800px] -top-96 -left-96 animate-drift" />
        <div className="glow-orb glow-orb-gold w-[700px] h-[700px] bottom-[-200px] right-[-200px] animate-drift" style={{ animationDelay: '-5s' }} />
      </div>

      {/* READING PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-[#D9B95B] to-[#f1cf72] z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* FIXED GLASS HEADER (Floating modern pill shape inspired by second image) */}
      <div className="fixed top-6 inset-x-0 z-40 px-4 md:px-8 pointer-events-none">
        <header className="w-full max-w-7xl mx-auto h-20 bg-[#095054]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex justify-between items-center px-6 md:px-8 pointer-events-auto">
          {/* Logo brand */}
          <a href="#" className="group flex items-center justify-center shrink-0">
            <div className="w-16 h-16 flex items-center justify-center relative transition-colors duration-500">
              <img src={logoImg} alt="Elite Al-Maali Logo" className="w-full h-full object-contain" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-sans font-medium text-gray-200">
            <a href="#hero" className="hover:text-[#D9B95B] hover-underline-gold transition-colors">{isAr ? 'الرئيسية' : 'Home'}</a>
            <a href="#about" className="hover:text-[#D9B95B] hover-underline-gold transition-colors">{isAr ? 'من نحن' : 'About'}</a>
            <a href="#services" className="hover:text-[#D9B95B] hover-underline-gold transition-colors">{isAr ? 'الخدمات' : 'Services'}</a>
            <a href="#journey" className="hover:text-[#D9B95B] hover-underline-gold transition-colors">{isAr ? 'رحلة العميل' : 'Journey'}</a>
            <a href="#values" className="hover:text-[#D9B95B] hover-underline-gold transition-colors">{isAr ? 'القيم' : 'Values'}</a>
            <a href="#why-us" className="hover:text-[#D9B95B] hover-underline-gold transition-colors">{isAr ? 'لماذا نحن' : 'Why Us'}</a>
            <a href="#contact" className="hover:text-[#D9B95B] hover-underline-gold transition-colors">{isAr ? 'اتصل بنا' : 'Contact'}</a>
          </nav>

          {/* Languages Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(prev => prev === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 rounded-full border border-[#D9B95B]/30 hover:border-[#D9B95B] hover:text-white font-mono text-xs text-[#D9B95B] transition-all bg-black/20"
            >
              {isAr ? 'ENGLISH' : 'العربية'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 text-gray-200 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 md:inset-x-8 top-28 z-35 lg:hidden bg-[#095054]/95 border border-white/15 backdrop-blur-xl p-6 rounded-3xl shadow-2xl"
          >
            <nav className="flex flex-col gap-6 text-[18px] font-sans font-medium text-gray-200">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'الرئيسية' : 'Home'}</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'من نحن' : 'About Us'}</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'الخدمات' : 'Services'}</a>
              <a href="#journey" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'رحلة العميل' : 'Journey'}</a>
              <a href="#values" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'القيم' : 'Values'}</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'لماذا نحن' : 'Why Us'}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9B95B]">{isAr ? 'اتصل بنا' : 'Contact'}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: HERO (Deep Green Background, asymmetrical layout, floating license) */}
      <section
        id="hero"
        className="relative min-h-screen pt-44 pb-20 flex items-center justify-center overflow-hidden bg-[#095054]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text */}
          <div className="lg:col-span-7 z-10 space-y-8 text-right lg:text-inherit">
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D9B95B]/30 bg-[#D9B95B]/5 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#D9B95B] animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-[#D9B95B] uppercase">
                {isAr ? 'سبق وريادة تشريعية' : 'Sovereign Legal Stewardship'}
              </span>
            </div>

            <div className="space-y-4">
              <h1
                data-aos="skew-up"
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.15]"
              >
                {isAr ? d.company.fullNameAr : d.company.fullNameEn}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-lg sm:text-2xl text-[#D9B95B] font-light leading-relaxed font-sans"
              >
                {isAr ? d.company.taglineAr : d.company.taglineEn}
              </p>
            </div>

            {/* Overlapping Glass License Panel */}
            <div
              data-aos="blur-in"
              data-aos-delay="400"
              className="glass-panel-morphic p-6 rounded-xl relative max-w-xl shadow-2xl mt-8"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#D9B95B] text-black text-[9px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded">
                {isAr ? 'الترخيص والاعتماد' : 'ACCREDITATION'}
              </div>
              <p className="text-sm text-gray-200 leading-relaxed font-sans font-light">
                {isAr
                  ? 'مرخصة رسميًا لمزاولة مهنة المحاماة والاستشارات القانونية من قبل وزارة العدل في المملكة العربية السعودية.'
                  : d.company.license}
              </p>
              <div className="mt-4 flex items-center gap-3 text-[10px] font-mono text-[#D9B95B]">
                <Shield className="w-4 h-4" />
                <span>{isAr ? 'موثوق • معتمد • مستدام' : 'LICENSED • VALIDATED • COMPLIANT'}</span>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="600" className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="btn-liquid px-8 py-4 bg-[#D9B95B] text-black font-semibold text-xs tracking-widest uppercase rounded shadow-lg hover:shadow-[#D9B95B]/20 transition-all duration-300"
              >
                {isAr ? 'استكشاف قطاعات العمل' : 'Explore Sectors'}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-widest uppercase rounded border border-white/10 hover:border-[#D9B95B]/40 transition-all duration-300"
              >
                {isAr ? 'أطلب استشارة ' : 'Confidential Contact'}
              </a>
            </div>
          </div>

          {/* Hero visuals: Asymmetric overlapping images */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center">
            {/* Background outline text */}
            <div className="absolute -top-16 -left-12 font-serif text-8xl md:text-9xl text-white/5 font-extrabold select-none pointer-events-none uppercase tracking-widest vertical-text-right">
              MAALI
            </div>

            <div className="relative w-full max-w-[420px] h-[500px]">
              {/* Slideshow Card */}
              <div
                data-aos="skew-up"
                data-aos-delay="200"
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#095054] z-10"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroSlideIndex}
                    src={heroSlides[heroSlideIndex].img}
                    alt="Elite Al-Maali Slideshow"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.65, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />

                {/* Info Overlay inside Slide */}
                <div className="absolute bottom-10 inset-x-6 z-25 text-right font-sans">
                  <span className="text-[9px] uppercase tracking-widest text-[#D9B95B] font-mono block mb-1">
                    {isAr ? 'محطة تشريعية نشطة' : 'ACTIVE LEGISLATIVE DEPOT'}
                  </span>
                  <h4 className="text-sm font-medium text-white leading-tight">
                    {isAr ? heroSlides[heroSlideIndex].titleAr : heroSlides[heroSlideIndex].titleEn}
                  </h4>
                </div>
              </div>

              {/* Slider dot indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${heroSlideIndex === idx ? 'bg-[#D9B95B] w-6' : 'bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>

              {/* Slider arrows */}
              <button
                onClick={() => setHeroSlideIndex(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setHeroSlideIndex(prev => (prev + 1) % heroSlides.length)}
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Floating logo/icon descriptor */}
              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                className="absolute top-12 right-[-30px] glass-panel-morphic p-4 rounded-xl z-20 flex flex-col items-center gap-2 shadow-2xl border border-[#D9B95B]/20"
              >
                <div className="w-10 h-10 rounded-full bg-[#D9B95B] flex items-center justify-center text-black">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="font-serif text-[10px] font-bold text-white">Elite Scale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center pointer-events-none select-none z-10 animate-bounce">
          <span className="text-[9px] font-mono tracking-widest text-[#D9B95B] uppercase block mb-1">
            {isAr ? 'اسحب لأسفل' : 'SCROLL DOWN'}
          </span>
          <div className="w-[1px] h-8 bg-[#D9B95B] mx-auto" />
        </div>
      </section>

      {/* SECTION 2: ABOUT US (White Background, dark green text, Light Morphic Panels) */}
      <section
        id="about"
        className="relative py-24 sm:py-36 bg-white text-gray-900 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 glow-orb glow-orb-teal opacity-5" />

        {/* Giant decorative watermark */}
        <div className="absolute bottom-12 right-12 font-serif text-[180px] leading-none text-[#095054]/5 font-black select-none pointer-events-none uppercase">
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
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#095054] tracking-tight">
                  {isAr ? 'عن شركة نخبة المعالي' : 'About Elite Al-Maali'}
                </h2>
              </div>

              {/* Asymmetric line decoration */}
              <div className="w-24 h-[1px] bg-[#095054]" />

              <div className="space-y-6 text-gray-750 leading-relaxed font-sans font-light text-base sm:text-lg whitespace-pre-line">
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
                <p className="font-serif text-[#095054] text-base italic">
                  {isAr
                    ? '«نعمل على أن نكون الشريك القانوني الموثوق لعملائنا، مع تركيزنا الدائم على مصالح العميل كأولوية مطلقة»'
                    : '“Our knowledge extends to understanding the practical and commercial environment in which our clients operate, with our constant focus on the client’s interests as an absolute priority.”'}
                </p>
              </div>
            </div>

            {/* Right side: Interlocking Vision & Message (Mission) panels */}
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
                    <h3 className="font-serif text-xl font-bold text-[#095054]">
                      {isAr ? 'رؤيتنا' : 'Our Vision'}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans font-light">
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
                    <h3 className="font-serif text-xl font-bold text-[#095054]">
                      {isAr ? 'رسالتنا' : 'Our Message'}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans font-light whitespace-pre-line">
                      {isAr ? d.message.ar : d.message.en}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID (Deep Green Background, 12 Categories, Asymmetric cards) */}
      <section
        id="services"
        className="relative py-24 sm:py-36 bg-[#053234] overflow-hidden border-t border-white/5"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] glow-orb glow-orb-teal opacity-15" />

        {/* Background text outline */}
        <div className="absolute top-12 left-12 font-serif text-[150px] leading-none text-white/3 font-black select-none pointer-events-none uppercase tracking-wider">
          SECTORS
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mb-20 text-right lg:text-inherit">
            <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block mb-3 font-semibold">
              {isAr ? 'قطاعات الممارسة والخدمات' : 'PRACTICE AREAS • SECTORAL SERVICES'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {isAr ? 'حلول قانونية وشرعية متكاملة ومبتكرة' : 'Integrated Legal & Sharia Advisory'}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-4 font-sans font-light leading-relaxed">
              {isAr ? d.services.introAr : d.services.introEn}
            </p>
          </div>

          {/* Grid Layout: Staggered sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {d.services.categories.map((cat, index) => {
              // Create asymmetric styling where specific indices span 2 columns
              const isLarge = index === 0 || index === 5 || index === 8;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className={`glass-panel-morphic p-8 rounded-2xl relative shadow-lg hover:border-[#D9B95B] transition-all duration-500 flex flex-col justify-between group overflow-hidden cursor-pointer ${isLarge ? 'md:col-span-2' : 'md:col-span-1'
                    }`}
                  onMouseEnter={() => setHoveredCategoryIndex(index)}
                  onMouseLeave={() => setHoveredCategoryIndex(null)}
                >
                  {/* Subtle index stamp */}
                  <div className="absolute top-6 end-8 text-3xl font-serif font-black text-white/5 group-hover:text-[#D9B95B]/15 transition-colors duration-500">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>

                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-[#D9B95B]/60 transition-colors duration-500">
                      {getServiceIcon(cat.categoryEn)}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#D9B95B] transition-colors duration-300">
                        {isAr ? cat.categoryAr : cat.categoryEn}
                      </h3>
                      <p className="text-xs text-gray-400 font-mono tracking-widest uppercase">
                        {isAr ? 'قطاع ممارسة مفعل' : 'ACTIVE PRACTICE AREA'}
                      </p>
                    </div>

                    {/* Expandable detailed items list */}
                    <div className="pt-4 border-t border-white/5 space-y-3">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#D9B95B] block">
                        {isAr ? 'الخدمات المندرجة:' : 'SERVICES INCLUDE:'}
                      </span>
                      <ul className="space-y-2">
                        {(isAr ? cat.itemsAr : cat.itemsEn).map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-2 items-start text-xs text-gray-300">
                            <span className="text-[#D9B95B] shrink-0 mt-0.5">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-400 group-hover:text-white transition-colors">
                    <span>{isAr ? 'طلب استشارة قانونية' : 'REQUEST ADVISORY'}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isAr ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: STRATEGIC GOALS (White Background, dark green text) */}
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
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#095054] tracking-tight">
                {isAr ? 'الركائز الاستراتيجية لتميزنا العملي' : 'Key Milestones Supporting Our Mission'}
              </h2>
              <div className="w-16 h-[1px] bg-[#095054] mt-4" />
              <p className="text-gray-650 text-xs sm:text-sm font-sans font-light leading-relaxed">
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
                  <div className="absolute top-4 end-4 font-serif text-6xl font-black text-[#095054]/5 group-hover:text-[#095054]/10 transition-colors">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#095054] pr-8 group-hover:text-black transition-colors leading-relaxed">
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

      {/* SECTION 5: CUSTOMER JOURNEY (White Background, Dark Green text, interactive stations) */}
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
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#095054] tracking-tight">
              {isAr ? 'محطات رحلتك القانونية معنا' : 'Customer Journey Mapping & Steps'}
            </h2>
            <p className="text-gray-650 text-sm sm:text-base mt-4 font-sans font-light leading-relaxed">
              {isAr ? d.customerJourney.introAr : d.customerJourney.introEn}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Asymmetric Clickable Step Badges */}
            <div className="lg:col-span-5 flex flex-col gap-4 font-sans">
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
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#095054]">
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

            {/* Right Column: Displaying dynamic description with visual elements */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStationIndex}
                  initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isAr ? -20 : 20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel-morphic-light p-8 sm:p-12 rounded-2xl border-l-4 border-l-[#095054] shadow-xl relative space-y-6 overflow-hidden text-right lg:text-inherit"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#095054]/5 rounded-bl-full pointer-events-none" />

                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#095054] bg-[#095054]/5 px-3 py-1 rounded">
                      {isAr ? `الخطوة ${activeStationIndex + 1} من 6` : `PHASE 0${activeStationIndex + 1} OF 6`}
                    </span>
                    <span className="font-serif text-5xl font-black text-gray-100">
                      0{d.customerJourney.stations[activeStationIndex].id}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Icon description */}
                    <div className="w-12 h-12 rounded-full bg-[#095054]/5 border border-[#095054]/20 flex items-center justify-center text-[#095054]">
                      {getJourneyIcon(d.customerJourney.stations[activeStationIndex].id)}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#095054] leading-tight">
                      {isAr
                        ? d.customerJourney.stations[activeStationIndex].nameAr
                        : d.customerJourney.stations[activeStationIndex].nameEn}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-sans font-light">
                      {isAr
                        ? d.customerJourney.stations[activeStationIndex].descriptionAr
                        : d.customerJourney.stations[activeStationIndex].descriptionEn}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between font-mono text-xs text-gray-500">
                    <span>INTEGRATED CLIENT SERVICES TIMELINE</span>
                    <a
                      href="#contact"
                      className="px-5 py-2.5 bg-[#095054] text-white font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#053234] transition-colors"
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

      {/* SECTION 6: VALUES (Deep Green Background, White cards) */}
      <section
        id="values"
        className="relative py-24 sm:py-32 bg-[#095054] border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="max-w-3xl mb-20 text-right lg:text-inherit">
            <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block mb-3 font-semibold">
              {isAr ? 'المبادئ والقيم الحاكمة' : 'CORE PRINCIPLES & VALUES'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
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
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D9B95B] transition-colors duration-300 leading-snug">
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

      {/* SECTION 7: WHY US (White Background, dark green text) */}
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

                <h3 className="font-serif text-2xl font-bold text-[#095054] mb-4 tracking-tight">
                  {isAr ? 'بماذا نتميز عن غيرنا؟' : 'Distinctive Factors'}
                </h3>

                <div className="space-y-6 pt-4 font-sans text-sm">
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
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#095054] tracking-tight">
                  {isAr ? 'لماذا شركة نخبة المعالي؟' : 'Why Choose Elite Al-Maali?'}
                </h2>
              </div>

              <div className="w-24 h-[1px] bg-[#095054] mt-4" />

              <p
                data-aos="fade-up"
                className="text-gray-700 leading-relaxed font-sans font-light text-base sm:text-lg whitespace-pre-line"
              >
                {isAr ? d.whyUs.ar : d.whyUs.en}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT & FOOTER (Deep Green Background, Jeddah office details, secure contact form) */}
      <footer
        id="contact"
        className="relative pt-24 pb-12 bg-[#053234] border-t border-white/10 overflow-hidden"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] glow-orb glow-orb-teal opacity-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/10 pb-16">

            {/* Left side: Jeddah office details ONLY */}
            <div className="lg:col-span-5 space-y-8 text-right lg:text-inherit">
              <div className="space-y-4">
                <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block font-semibold">
                  {isAr ? 'المقر والقنوات الرسمية' : 'OFFICIAL CONTACT CHANNEL'}
                </span>
                <h2 className="font-serif text-3xl font-bold text-white tracking-tight">
                  {isAr ? 'قنوات تواصلنا المعتمدة' : 'Official Channels'}
                </h2>
                <p className="text-gray-300 text-sm font-sans font-light leading-relaxed max-w-sm">
                  {isAr
                    ? 'نحن ملتزمون بتوفير الاستجابة الفورية والحلول المرنة والالتزام التام بالجودة والمعايير العالمية.'
                    : 'We are committed to providing speed of response, flexible solutions, and a commitment to quality and international standards.'}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6 font-sans">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#D9B95B]/10 border border-[#D9B95B]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D9B95B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      {isAr ? 'العنوان الرئيسي - جدة' : 'HEADQUARTERS - JEDDAH'}
                    </h4>
                    <p className="text-sm text-gray-200 leading-relaxed mt-1">
                      {isAr ? d.contact.addressAr : d.contact.addressEn}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#D9B95B]/10 border border-[#D9B95B]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#D9B95B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      {isAr ? 'البريد الإلكتروني المباشر' : 'DIRECT EMAIL'}
                    </h4>
                    <a
                      href={`mailto:${d.contact.email}`}
                      className="text-sm text-white hover:text-[#D9B95B] transition-colors leading-relaxed block mt-1 hover-underline-gold"
                    >
                      {d.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#D9B95B]/10 border border-[#D9B95B]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#D9B95B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      {isAr ? 'الهاتف والاتصال الهاتفي' : 'PHONE CHANNELS'}
                    </h4>
                    <div className="flex flex-col gap-1 mt-1 font-mono text-sm">
                      {d.contact.phone.map((ph, idx) => (
                        <a key={idx} href={`tel:${ph.replace(/\s+/g, '')}`} className="text-gray-200 hover:text-[#D9B95B] transition-colors">
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Secure narrative message form */}
            <div className="lg:col-span-7">
              <div className="glass-panel-morphic p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B95B]/5 rounded-bl-full pointer-events-none" />

                <h3 className="font-serif text-xl font-bold text-white mb-6">
                  {isAr ? 'أرسل لنا استفسارًا قانونيًا سريًا' : 'Send a Confidential Case Inquiry'}
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase text-gray-400 mb-2 font-mono tracking-wider">
                        {isAr ? 'الاسم بالكامل' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formInput.name}
                        onChange={(e) => setFormInput(prev => ({ ...prev, name: e.target.value }))}
                        placeholder={isAr ? 'أ. أحمد الغامدي' : 'e.g. Abdullah Khan'}
                        className="w-full bg-black/40 border border-white/15 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-[#D9B95B] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-gray-400 mb-2 font-mono tracking-wider">
                        {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formInput.email}
                        onChange={(e) => setFormInput(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="rep@yourcompany.com"
                        className="w-full bg-black/40 border border-white/15 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-[#D9B95B] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-gray-400 mb-2 font-mono tracking-wider">
                      {isAr ? 'موجز الاستفسار / تفاصيل الملف' : 'Inquiry / Subject Matter Brief'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formInput.message}
                      onChange={(e) => setFormInput(prev => ({ ...prev, message: e.target.value }))}
                      placeholder={isAr ? 'اكتب تفاصيل الاستشارة القانونية هنا...' : 'Outline your legal needs, agreements, or dispute brief here...'}
                      className="w-full bg-black/40 border border-white/15 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-[#D9B95B] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D9B95B] hover:bg-[#f1cf72] text-black font-semibold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isAr ? 'إرسال الرسالة بسرية تامة' : 'Submit Secure Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {formSubmitted && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-emerald-400 text-center font-mono mt-4 animate-pulse"
                      >
                        {isAr
                          ? '✓ تم استلام رسالتك بسرية تامة. سيقوم المستشار المختص بمراجعة الملف والتواصل معك.'
                          : '✓ Inquiry received under containment. Lead counsel will review and respond shortly.'}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>

          </div>

          {/* Copyrights & licenses */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] text-gray-400 text-center">
            <div className="space-y-1 md:text-right">
              <div>
                &copy; {new Date().getFullYear()} {isAr ? d.company.fullNameAr : d.company.fullNameEn}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
              </div>
              <p className="text-gray-500 font-sans">
                {isAr ? 'مرخصة ومسجلة رسميًا من قبل وزارة العدل السعودية.' : 'Licensed and registered officially by the Saudi Ministry of Justice.'}
              </p>
            </div>

            <div className="flex gap-4">
              <span>{isAr ? 'شروط الخصوصية سدايا' : 'PDPL Compliant'}</span>
              <span>•</span>
              <span>{isAr ? 'إخلاء المسؤولية' : 'Disclaimers'}</span>
            </div>

            <div className="text-[#D9B95B] uppercase tracking-wider">
              {isAr ? 'شريكك القانوني الموثوق' : 'YOUR TRUSTED LEGAL PARTNER'}
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
