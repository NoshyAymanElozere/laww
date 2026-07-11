import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logo.webp';
import bannerVideo from '../assets/images/banner.mp4';

interface HeroSectionProps {
  isAr: boolean;
}

export default function HeroSection({ isAr }: HeroSectionProps) {
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'services') {
      navigate('/services');
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#095054]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.03] filter brightness-[0.4] contrast-[1.05]"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#095054]/55 to-[#095054]/90 z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,91,0.06)_0%,transparent_65%)] z-1" />
      </div>

      {/* Centered Identity Dashboard */}
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center relative z-10 space-y-8 mt-16 pb-20">

        {/* Logo Icon */}
        <div
          data-aos="fade-down"
          className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center relative -mb-6"
        >
          <img src={logoImg} alt="Elite Al-Maali Logo" className="w-full h-full object-contain animate-float-slow" />
        </div>

        {/* Title & Divider Row */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl"
          dir="ltr"
        >
          {/* English Company Name */}
          <div className="flex-1 flex justify-center md:justify-end pr-0 md:pr-6 lg:pr-8 w-full md:w-auto pb-4 md:pb-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-[42px] font-bold text-white tracking-wide leading-none">
                Elite Al-Maali
              </h2>
              <p className="text-sm sm:text-base lg:text-[18px] text-white font-medium tracking-wide">
                Lawyers & Legal Consultants Co.
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[2px] h-20 lg:h-24 bg-white shrink-0 mx-2" />

          {/* Arabic Company Name */}
          <div className="flex-1 flex justify-center md:justify-start pl-0 md:pl-6 lg:pl-8 w-full md:w-auto pt-4 md:pt-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-1" dir="rtl">
              <h1 className="text-4xl sm:text-5xl lg:text-[42px] font-bold text-white tracking-wide leading-none">
                شركة نخبة المعالي
              </h1>
              <p className="text-sm sm:text-base lg:text-[24px]  text-white tracking-wide ">
                محامون ومستشارون قانونيون
              </p>
            </div>
          </div>
        </div>

        {/* Bilingual Tagline */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="space-y-3 pt-4 border-t border-white/5 w-full max-w-3xl"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-normal leading-relaxed">
            {isAr
              ? 'نخبة المعالي ... شريكك الموثوق للحلول القانونية'
              : 'Elite Al-Maali — Your Trusted Partner for Legal Solutions'}
          </p>
          <p className="text-[11px] sm:text-xs text-gray-300 tracking-wide">
            {isAr
              ? 'Elite Al-Maali — Your Trusted Partner for Legal Solutions'
              : 'نخبة المعالي ... شريكك الموثوق للحلول القانونية'}
          </p>
        </div>

        {/* CTAs */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Outline Button / خدماتنا */}
          <button
            onClick={() => handleNavClick('services')}
            className="px-6 sm:px-8 py-3 rounded-full border border-white/30 hover:border-white text-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${isAr ? '' : 'rotate-180'}`} />
            <span>{isAr ? 'خدماتنا' : 'Our Services'}</span>
          </button>

          {/* Solid Button / احصل على استشارة */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="px-6 sm:px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-black transition-all text-xs sm:text-sm font-medium flex items-center justify-center cursor-pointer shadow-lg"
          >
            <span>{isAr ? 'احصل على استشارة' : 'Get Consultation'}</span>
          </a>
        </div>

      </div>

      {/* Bottom Bar: Vision 2030 & Saudi Bar Association */}
      <div className="absolute bottom-0 inset-x-0 bg-[#e5e4e0] text-[#095054] py-3.5 px-6 lg:px-12 flex justify-between items-center text-[10px] sm:text-xs border-t border-[#095054]/10 font-semibold z-10">
        {/* Left: Saudi Vision 2030 */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
          <span>
            {isAr ? 'رؤية 2030 — المملكة العربية السعودية' : 'Saudi Vision 2030 — Kingdom of Saudi Arabia'}
          </span>
        </div>

        {/* Right: Saudi Bar Association */}
        <div className="flex items-center gap-2.5">
          <span>{isAr ? 'الهيئة السعودية للمحامين' : 'Saudi Bar Association'}</span>
          <span className="w-7 h-7 rounded-full border border-[#095054] flex items-center justify-center font-bold text-[8px] tracking-tighter shrink-0 select-none">
            SBA
          </span>
        </div>
      </div>
    </section>
  );
}
