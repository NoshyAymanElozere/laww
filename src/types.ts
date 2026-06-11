export interface PracticeArea {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  detailedAr: string;
  detailedEn: string;
  iconName: string;
  stats: string;
  portfolioAr: string[];
  portfolioEn: string[];
  activePartnerId: string;
}

export interface Partner {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  bioAr: string;
  bioEn: string;
  image: string;
  specialtiesAr: string[];
  specialtiesEn: string[];
  email: string;
  publicationsAr: string[];
  publicationsEn: string[];
}

export interface CaseStudy {
  id: string;
  titleAr: string;
  titleEn: string;
  clientAr: string;
  clientEn: string;
  sectorAr: string;
  sectorEn: string;
  challengeAr: string;
  challengeEn: string;
  solutionAr: string;
  solutionEn: string;
  resultAr: string;
  resultEn: string;
  precedentAr: string;
  precedentEn: string;
}

export interface Testimonial {
  id: string;
  authorAr: string;
  authorEn: string;
  companyAr: string;
  companyEn: string;
  roleAr: string;
  roleEn: string;
  textAr: string;
  textEn: string;
}

export interface RegulatoryUpdate {
  id: string;
  titleAr: string;
  titleEn: string;
  statusAr: string;
  statusEn: string;
  date: string;
  descriptionAr: string;
  descriptionEn: string;
  impactScore: number; // 1-5
}

export interface ConsultBooking {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  practiceId: string;
  partnerId: string;
  notes: string;
  prefLanguage: 'ar' | 'en';
  date: string;
  timeSlot: string;
  status: 'confirmed' | 'pending';
}
