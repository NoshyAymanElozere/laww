import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.webp';

interface HeaderProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  scrollProgress: number;
}

export default function Header({ lang, setLang, scrollProgress }: HeaderProps) {
  const isAr = lang === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);

    // If we're on the services page, navigate home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    setMobileMenuOpen(false);
    navigate('/services');
  };

  return (
    <>
      {/* READING PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-[#D9B95B] to-[#f1cf72] z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* FIXED GLASS HEADER */}
      <div className="fixed top-6 inset-x-0 z-40 px-4 md:px-8 pointer-events-none">
        <header className="w-full max-w-7xl mx-auto h-20 bg-[#095054]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex justify-between items-center px-6 md:px-8 pointer-events-auto">
          {/* Logo brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="group flex items-center gap-2.5 shrink-0"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105 shrink-0">
              <img src={logoImg} alt="Elite Al-Maali Logo" className="w-full h-full object-contain mt-3 scale-150" />
            </div>
            {/* Logo text brand divider & signature */}
            <div className="flex flex-col border-s border-white/20 ps-2.5 text-right rtl:text-right ltr:text-left">
              <span className="text-xs sm:text-sm md:text-base font-extrabold text-white text-start leading-tight transition-colors duration-300">
                {isAr ? 'شركة نخبة المعالي' : 'Elite Al-Maali'}
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-xs text-white/95 font-medium tracking-wide mt-0.5">
                {isAr ? 'محامون ومستشارون قانونيون' : 'Lawyers & Legal Consultants'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-200">
            <button onClick={() => handleNavClick('hero')} className="hover:text-[#D9B95B] hover-underline-gold transition-colors bg-transparent border-none p-0 cursor-pointer">{isAr ? 'الرئيسية' : 'Home'}</button>
            <button onClick={() => handleNavClick('about')} className="hover:text-[#D9B95B] hover-underline-gold transition-colors bg-transparent border-none p-0 cursor-pointer">{isAr ? 'من نحن' : 'About'}</button>
            <button onClick={handleServicesClick} className="hover:text-[#D9B95B] hover-underline-gold transition-colors bg-transparent border-none p-0 cursor-pointer">{isAr ? 'الخدمات' : 'Services'}</button>
            <button onClick={() => handleNavClick('journey')} className="hover:text-[#D9B95B] hover-underline-gold transition-colors bg-transparent border-none p-0 cursor-pointer">{isAr ? 'رحلة العميل' : 'Journey'}</button>
            <button onClick={() => handleNavClick('values')} className="hover:text-[#D9B95B] hover-underline-gold transition-colors bg-transparent border-none p-0 cursor-pointer">{isAr ? 'القيم' : 'Values'}</button>
            <button onClick={() => handleNavClick('why-us')} className="hover:text-[#D9B95B] hover-underline-gold transition-colors bg-transparent border-none p-0 cursor-pointer">{isAr ? 'لماذا نحن' : 'Why Us'}</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-[#D9B95B] hover-underline-gold transition-colors bg-transparent border-none p-0 cursor-pointer">{isAr ? 'اتصل بنا' : 'Contact'}</button>
          </nav>

          {/* Languages Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
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
            <nav className="flex flex-col gap-6 text-[18px] font-medium text-gray-200">
              <button onClick={() => handleNavClick('hero')} className="text-right hover:text-[#D9B95B] bg-transparent border-none p-0 cursor-pointer">{isAr ? 'الرئيسية' : 'Home'}</button>
              <button onClick={() => handleNavClick('about')} className="text-right hover:text-[#D9B95B] bg-transparent border-none p-0 cursor-pointer">{isAr ? 'من نحن' : 'About Us'}</button>
              <button onClick={handleServicesClick} className="text-right hover:text-[#D9B95B] bg-transparent border-none p-0 cursor-pointer">{isAr ? 'الخدمات' : 'Services'}</button>
              <button onClick={() => handleNavClick('journey')} className="text-right hover:text-[#D9B95B] bg-transparent border-none p-0 cursor-pointer">{isAr ? 'رحلة العميل' : 'Journey'}</button>
              <button onClick={() => handleNavClick('values')} className="text-right hover:text-[#D9B95B] bg-transparent border-none p-0 cursor-pointer">{isAr ? 'القيم' : 'Values'}</button>
              <button onClick={() => handleNavClick('why-us')} className="text-right hover:text-[#D9B95B] bg-transparent border-none p-0 cursor-pointer">{isAr ? 'لماذا نحن' : 'Why Us'}</button>
              <button onClick={() => handleNavClick('contact')} className="text-right hover:text-[#D9B95B] bg-transparent border-none p-0 cursor-pointer">{isAr ? 'اتصل بنا' : 'Contact'}</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
