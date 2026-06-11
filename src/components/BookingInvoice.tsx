import { motion } from 'motion/react';
import { ConsultBooking, Partner, PracticeArea } from '../types';
import { ShieldCheck, Calendar, Clock, User, Award, Mail, Phone, MapPin, Printer } from 'lucide-react';

interface BookingInvoiceProps {
  booking: ConsultBooking;
  partner?: Partner;
  practice?: PracticeArea;
  onReset: () => void;
  lang: 'ar' | 'en';
}

export default function BookingInvoice({ booking, partner, practice, onReset, lang }: BookingInvoiceProps) {
  const isAr = lang === 'ar';

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-lg border-2 border-[#D9B95B] relative overflow-hidden text-white"
      id="advisory-summons-voucher"
    >
      {/* Editorial Decorative Background Details */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9B95B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#095054]/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Watermark Crest */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg className="w-96 h-96 fill-[#D9B95B]" viewBox="0 0 24 24">
          <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" />
        </svg>
      </div>

      {/* Header border design */}
      <div className="border-b border-[#D9B95B]/30 pb-8 balance-header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className={isAr ? 'text-right' : 'text-left'}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#D9B95B] animate-pulse" />
            <span className="font-mono text-xs text-[#D9B95B] uppercase tracking-wider">
              {isAr ? 'وثيقة مراجعة قانونية معتمدة' : 'CONFIDENTIAL BOARD SUMMONS'}
            </span>
          </div>
          <h2 className="font-serif text-3xl font-semibold text-[#D9B95B]">
            Nokhbat Al-Ma'ali
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            {isAr ? 'نخبة المعالي للمحاماة والاستشارات القانونية' : 'Nokhbat Al-Ma\'ali Law Firm & Legal Consultations'}
          </p>
        </div>

        <div className={`text-right ${isAr ? 'sm:text-left' : 'sm:text-right'} font-mono text-xs text-gray-400`}>
          <div>CASE ID: <span className="text-white font-semibold font-mono tracking-wider">{booking.id}</span></div>
          <div className="mt-1">STATUS: <span className="text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">CONFIRMED</span></div>
          <div className="mt-1">LOCAL TIME: {new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US')}</div>
        </div>
      </div>

      {/* Summons Body */}
      <div className="mt-8 space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-950/50 border border-[#D9B95B]/40 text-[#D9B95B] mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-medium tracking-tight">
            {isAr ? 'تم حجز وإقرار جلسة الاستشارة السيادية بنجاح' : 'Sovereign Advisory Session Lodged & Docketed'}
          </h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto mt-2">
            {isAr 
              ? 'لقد تم تخصيص الشريك القانوني المناسب لحسابكم وتأمين تفرغه لبحث الملف الاستشاري بكل خصوصية تحت اتفاقية عدم الإفصاح الملقحة.' 
              : 'Our executive secretariat has reserved corporate calendar resources. NDA protocols are pre-enacted over your upcoming advisory agenda.'}
          </p>
        </div>

        {/* Invoice Grid Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/20 p-6 rounded-lg border border-white/5 font-sans relative">
          <div className="space-y-4">
            <div className="text-[#D9B95B] text-xs uppercase font-mono tracking-wider pb-2 border-b border-white/5">
              {isAr ? 'تفاصيل المراجع / المستشار' : 'COUNSEL & JURISDICTIONAL FOCUS'}
            </div>
            
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#D9B95B] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{isAr ? 'الشريك القانوني المختار' : 'Assigned Senior Partner'}</p>
                <p className="text-sm font-semibold text-white">{isAr ? partner?.nameAr : partner?.nameEn}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D9B95B] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{isAr ? 'قطاع الممارسة القانونية' : 'Sector Specialty Area'}</p>
                <p className="text-sm font-semibold text-white">{isAr ? practice?.titleAr : practice?.titleEn}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D9B95B] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{isAr ? 'مكان العقاد الجلسة' : 'Venues & Modality'}</p>
                <p className="text-sm font-semibold text-white">{isAr ? 'صالة الشركاء، مقر نخبة المعالي، الرياض / آمن رقمياً' : 'Partners Lobby, Nokhbat Al-Ma\'ali HQ, Riyadh / Secure Digital Bridge'}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-[#D9B95B] text-xs uppercase font-mono tracking-wider pb-2 border-b border-white/5">
              {isAr ? 'مستندات العقد والتواصل' : 'CLIENT PROFILE & TIMELINE'}
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#D9B95B] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{isAr ? 'اسم المستعلم والكيان' : 'Client Representative'}</p>
                <p className="text-sm font-semibold text-white">{booking.clientName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#D9B95B] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{isAr ? 'التاريخ المتفق عليه' : 'Scheduled Date'}</p>
                <p className="text-sm font-semibold text-white">{booking.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#D9B95B] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{isAr ? 'الفترة الزمنية المختارة' : 'Scheduled Window'}</p>
                <p className="text-sm font-semibold text-white">{booking.timeSlot} ({isAr ? 'توقيت الرياض' : 'Riyadh Local Time'})</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Brief preview */}
        {booking.notes && (
          <div className="p-4 rounded border border-white/5 bg-white/5 font-sans">
            <h4 className="text-[#D9B95B] text-xs font-mono uppercase tracking-wider mb-2">
              {isAr ? 'ملخص القضية السري' : 'CONFIDENTIAL SESSION BRIEF'}
            </h4>
            <p className="text-xs text-gray-300 italic">
              " {booking.notes} "
            </p>
          </div>
        )}

        {/* Copy guidelines disclosure */}
        <div className="text-[10px] text-gray-400 border-t border-white/5 pt-6 text-center leading-relaxed font-sans">
          {isAr 
            ? 'تنبيه السرية: تخضع البيانات والملخصات المتبادلة في هذا المستند للحماية الصارمة بموجب لائحة سدايا والملحق الداخلي لشركاء الميزان. يرجى إحضار معرف الهوية الوطنية أو السجل التجاري قبل الدخول للقاء.' 
            : 'NDA Statutory Clause: The details in this ticket are subject to strict legal privacy frameworks. Copied data is encrypted and bound under Riyadh Court of Commerce professional disclosure statutes.'}
        </div>
      </div>

      {/* Button options */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end no-print">
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#D9B95B] text-black font-semibold text-sm rounded hover:bg-[#c3a14b] active:scale-98 transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          {isAr ? 'طباعة مستند الاستدعاء' : 'Print Official summons'}
        </button>

        <button
          onClick={onReset}
          className="px-6 py-3 bg-white/10 text-white font-medium text-sm rounded hover:bg-white/20 active:scale-98 transition-all cursor-pointer"
        >
          {isAr ? 'حجز جلسة أخرى' : 'Schedule Another Session'}
        </button>
      </div>
    </motion.div>
  );
}
