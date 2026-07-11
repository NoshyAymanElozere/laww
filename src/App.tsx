import { useState, useEffect, MouseEvent } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GoalsSection from './components/GoalsSection';
import JourneySection from './components/JourneySection';
import ValuesSection from './components/ValuesSection';
import WhyUsSection from './components/WhyUsSection';
import FooterSection from './components/FooterSection';
import ServicesPage from './components/ServicesPage';

function HomePage({ isAr }: { isAr: boolean }) {
  return (
    <>
      <HeroSection isAr={isAr} />
      <AboutSection isAr={isAr} />
      <ServicesSection isAr={isAr} />
      <GoalsSection isAr={isAr} />
      <JourneySection isAr={isAr} />
      <ValuesSection isAr={isAr} />
      <WhyUsSection isAr={isAr} />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const isAr = lang === 'ar';

  // Mouse tracking spotlight state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    <div
      className={`min-h-screen bg-[#095054] text-[#f3f4f6] antialiased overflow-hidden selection:bg-[#D9B95B] selection:text-black ${isAr ? 'rtl' : 'ltr'
        }`}
      style={{ direction: isAr ? 'rtl' : 'ltr' }}
      onMouseMove={handleMouseMove}
    >

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

      {/* Header */}
      <Header lang={lang} setLang={setLang} scrollProgress={scrollProgress} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage isAr={isAr} />} />
        <Route path="/services" element={<ServicesPage isAr={isAr} />} />
      </Routes>

      {/* Footer is always visible */}
      <FooterSection isAr={isAr} />

    </div>
  );
}
