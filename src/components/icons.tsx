import {
  Briefcase, Building2, TrendingUp, Scale, Shield, Zap,
  Clock, Award, Globe, Search, Handshake, Users, Hand,
  FileText, BookOpen, Phone, Sparkles
} from 'lucide-react';

// Helper to map value icon names to Lucide Icons
export const getValueIcon = (iconName: string) => {
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
export const getServiceIcon = (categoryEn: string, className?: string) => {
  const cls = className || 'w-8 h-8 text-[#D9B95B]';
  switch (categoryEn.toLowerCase()) {
    case 'corporate law & business advisory':
      return <Briefcase className={cls} />;
    case 'company services':
      return <Building2 className={cls} />;
    case 'employment & labor cases':
      return <Users className={cls} />;
    case 'litigation & dispute resolution':
      return <Scale className={cls} />;
    case 'intellectual property':
      return <Shield className={cls} />;
    case 'estate & inheritance':
      return <Award className={cls} />;
    case 'zakat & tax services':
      return <TrendingUp className={cls} />;
    case 'foreign investor services':
      return <Globe className={cls} />;
    default:
      return <Scale className={cls} />;
  }
};

// Helper for customer journey icons
export const getJourneyIcon = (stepId: number) => {
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
