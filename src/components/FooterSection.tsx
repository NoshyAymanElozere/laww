import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { ELITE_MAALI_DATA } from '../data';

interface FooterSectionProps {
  isAr: boolean;
}

export default function FooterSection({ isAr }: FooterSectionProps) {
  const d = ELITE_MAALI_DATA;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formInput, setFormInput] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formInput.name || !formInput.email || !formInput.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormInput({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <footer
      id="contact"
      className="relative pt-24 pb-12 bg-[#095054]/80 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] glow-orb glow-orb-teal opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/10 pb-16">

          {/* Left side: Jeddah office details */}
          <div className="lg:col-span-5 space-y-8 text-right lg:text-inherit">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#D9B95B] tracking-widest uppercase block font-semibold">
                {isAr ? 'المقر والقنوات الرسمية' : 'OFFICIAL CONTACT CHANNEL'}
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {isAr ? 'قنوات تواصلنا المعتمدة' : 'Official Channels'}
              </h2>
              <p className="text-gray-300 text-sm font-light leading-relaxed max-w-sm">
                {isAr
                  ? 'نحن ملتزمون بتوفير الاستجابة الفورية والحلول المرنة والالتزام التام بالجودة والمعايير العالمية.'
                  : 'We are committed to providing speed of response, flexible solutions, and a commitment to quality and international standards.'}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
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
                  <div className={`flex flex-col gap-1 mt-1 font-mono text-sm ${isAr ? 'text-right' : 'text-left'}`} dir="ltr">
                    {d.contact.phone.map((ph, idx) => (
                      <a key={idx} href={`tel:${ph.replace(/\s+/g, '')}`} className="text-gray-200 hover:text-[#D9B95B] transition-colors">
                        {ph}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.799-4.393 9.802-9.799.002-2.618-1.01-5.078-2.852-6.92C16.38 2.045 13.924.974 11.3.974c-5.41 0-9.806 4.394-9.809 9.801-.001 1.83.479 3.619 1.391 5.174l-.971 3.546 3.637-.954zm11.386-5.4c-.3-.15-1.77-.874-2.046-.975-.276-.101-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.225-.65.075-1.205-.6-2.007-1.06-2.802-2.42-.19-.328-.05-.507.1-.657.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.244-.585-.491-.507-.676-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.076-.275 1.001-1.05 2.476-1.125 2.626-.075.15-.15.3-.025.525.125.225.875 1.35 1.876 2.226.75.658 1.388.975 1.95 1.175.563.2 1.075.175 1.475.113.449-.069 1.475-.603 1.675-1.188.2-.585.2-1.088.138-1.188-.062-.1-.238-.15-.538-.3z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {isAr ? 'التواصل المباشر عبر الواتساب' : 'WHATSAPP CHAT'}
                  </h4>
                  <a
                    href="https://wa.me/966566669815"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors leading-relaxed block mt-1 hover-underline-gold font-mono"
                  >
                    +966 56 666 9815
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Secure contact form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-morphic p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B95B]/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-6">
                {isAr ? 'أرسل لنا استفسارًا قانونيًا سريًا' : 'Send a Confidential Case Inquiry'}
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-6">
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-grow py-4 bg-[#D9B95B] hover:bg-[#f1cf72] text-black font-semibold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isAr ? 'إرسال الرسالة بسرية تامة' : 'Submit Secure Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/966566669815"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.799-4.393 9.802-9.799.002-2.618-1.01-5.078-2.852-6.92C16.38 2.045 13.924.974 11.3.974c-5.41 0-9.806 4.394-9.809 9.801-.001 1.83.479 3.619 1.391 5.174l-.971 3.546 3.637-.954zm11.386-5.4c-.3-.15-1.77-.874-2.046-.975-.276-.101-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.225-.65.075-1.205-.6-2.007-1.06-2.802-2.42-.19-.328-.05-.507.1-.657.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.244-.585-.491-.507-.676-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.076-.275 1.001-1.05 2.476-1.125 2.626-.075.15-.15.3-.025.525.125.225.875 1.35 1.876 2.226.75.658 1.388.975 1.95 1.175.563.2 1.075.175 1.475.113.449-.069 1.475-.603 1.675-1.188.2-.585.2-1.088.138-1.188-.062-.1-.238-.15-.538-.3z"/>
                    </svg>
                  </a>
                </div>

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
            <p className="text-gray-500">
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
  );
}
