import { PracticeArea, Partner, CaseStudy, Testimonial, RegulatoryUpdate } from './types';

export const SLIDER_DATA = [
  {
    id: 'slide-1',
    image: '/src/assets/images/modern_office_branding_1781123502162.png',
    titleAr: 'شركة نخبة المعالي "محامون ومستشارون قانونيون"',
    titleEn: 'Elite Al-Maali Company "Lawyers and Legal Consultants"',
    subtitleAr: 'نخبة المعالي ... شريكك الموثوق للحلول القانونية. مرخصة للعمل في المملكة والمنطقة.',
    subtitleEn: 'Elite Al-Maali ... Your trusted partner for legal solutions. Licensed to practice by the Ministry of Justice.',
  },
  {
    id: 'slide-2',
    image: '/src/assets/images/legal_meeting_hero_1781120375724.png',
    titleAr: 'حلول قانونية وشرعية متكاملة ومبتكرة',
    titleEn: 'Integrated & Innovative Legal Solutions',
    subtitleAr: 'تقديم خدمات قانونية دقيقة وعالية الاحترافية تضمن الحماية والامتثال للأنظمة المحلية والدولية.',
    subtitleEn: 'Delivering precise, high-level legal advisory that ensures absolute compliance and protects your interests.',
  },
  {
    id: 'slide-3',
    image: '/src/assets/images/contract_signing_hero_1781120389685.png',
    titleAr: 'المهنية المطلقة والالتزام والسرعة والدقة',
    titleEn: 'Absolute Professionalism, Speed & Precision',
    subtitleAr: 'نلتزم بالسرعة في الاستجابة وتوفير حلول مرنة تناسب احتياجات عملائنا مع الالتزام بالجودة والمعايير العالمية.',
    subtitleEn: 'We commit to swift responses, flexible custom solutions, and global standards of quality and integrity.',
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corp-gov',
    titleAr: 'خدمات الشركات والحوكمة',
    titleEn: 'Corporate Services & Governance',
    descriptionAr: 'تأسيس وهيكلة الشركات وحوكمة مجالس الإدارة للامتثال الكامل مع أنظمة وزارة التجارة وهيئة السوق المالية.',
    descriptionEn: 'Incorporating, structuring corporate systems, and aligning governance models with CMA and MCI frameworks.',
    detailedAr: 'نقدم استشارات متكاملة لتأسيس الشركات بكافة أنواعها، وصياغة قرارات الشركاء، وتصميم لوائح حوكمة داخلية تضمن النزاهة والشفافية وتوزيع الصلاحيات بكفاءة.',
    detailedEn: 'Comprehensive corporate formation advisory, drafting shareholder agreements, designing internal audit regulations, and configuring compliant corporate mechanisms.',
    iconName: 'Briefcase',
    stats: 'تأسيس وتحول كبرى الشركات',
    portfolioAr: ['حوكمة مجموعة عائلية قابضة بالرياض', 'تأسيس شركات مساهمة مقفلة', 'إعادة هيكلة وحيازة أصول استثمارية'],
    portfolioEn: ['Governance of major family holding company', 'Incorporating joint stock companies', 'Generational asset restructuring'],
    activePartnerId: 'partner-dr-saud'
  },
  {
    id: 'ip-trademark',
    titleAr: 'الملكية الفكرية والعلامات التجارية',
    titleEn: 'Intellectual Property & Trademarks',
    descriptionAr: 'تسجيل براءات الاختراع والابتكارات وحماية العلامات التجارية ومواجهة ممارسات التقليد والقرصنة.',
    descriptionEn: 'Registering patents, proprietary inventions, securing trademarks, and prosecuting counterfeits or copyright breaches.',
    detailedAr: 'نخبة المعالي توفر حماية ممتدة لأصولكم غير الملموسة. نقوم بتسجيل الأشكال المتنوعة للملكية العقلية محلياً ودولياً، وصياغة عقود السرية والترخيص، وحل النزاعات الفكرية.',
    detailedEn: 'Safeguarding intangible commercial properties globally. Handling registrations with SAIP, structuring licensing and non-disclosure models, and managing asset litigation.',
    iconName: 'Shield',
    stats: 'حماية الأصول المعرفية والعلامات',
    portfolioAr: ['تسجيل علامات تجارية عالمية في الخليج', 'توقيع اتفاقيات حماية نقل تكنولوجيا', 'تسوية نزاع تعدي على براءة اختراع'],
    portfolioEn: ['Global trademark registered in GCC', 'Technology transfer protection contracts', 'Successful patent infringement resolution'],
    activePartnerId: 'partner-maha'
  },
  {
    id: 'arbitration-dispute',
    titleAr: 'التحكيم والمنازعات',
    titleEn: 'Arbitration & Litigation Disputes',
    descriptionAr: 'الدفاع والترافع وصياغة شروط التحكيم وتمثيل الأطراف أمام لجان تسوية المنازعات ومجتمع التحكيم الدولي.',
    descriptionEn: 'Statutory advocacy, representations, and writing compliant arbitration contracts under regional and global tribunals.',
    detailedAr: 'نمتلك سجلاً حافلاً بالنجاحات في تمثيل الكيانات بمواجهة الدعاوى التجارية المعقدة. نوظف الدبلوماسية القانونية لحل الخلافات وتحقيق التسويات العادلة.',
    detailedEn: 'Masterful advocacy before local judicial courts and international arbitration hubs, with a strong focus on strategic dispute avoidance and robust claims drafting.',
    iconName: 'Scale',
    stats: 'نسب نجاح ممتازة وقضايا كبرى',
    portfolioAr: ['حسم نزاع تجاري ضخم لمجمع عقاري', 'تمثيل شركة لوجستية في تحكيم بحري', 'تسوية ودية بقيمة مالية كبرى'],
    portfolioEn: ['Settled prime commercial property dispute', 'Represented logistics firm in maritime arbitration', 'Major amicable multi-million settlement'],
    activePartnerId: 'partner-prof-vance'
  },
  {
    id: 'general-consult',
    titleAr: 'الاستشارات القانونية العامة',
    titleEn: 'General Legal Consultations',
    descriptionAr: 'تقديم حلول ورؤى استشارية شاملة للأفراد والمؤسسات لتجنب الثغرات التنظيمية.',
    descriptionEn: 'Daily ongoing corporate and private inquiries, advising on regulatory exposures and risk minimization.',
    detailedAr: 'نصاحب حياة عميلنا اليومية بإرشادات قانونية وقائية تمنع حدوث النزاعات وتضمن السير القانوني السليم لجميع ممارساته وعلاقاته.',
    detailedEn: 'Providing swift, professional feedback on contract wordings, private agreements, municipal rules, ensuring preventative measures keep business aligned.',
    iconName: 'BookOpen',
    stats: 'إرشاد قانوني دائم وموثوق',
    portfolioAr: ['صياغة وتدقيق العقود الدورية للشركاء', 'إعداد الرأي والبحث القضائي الموجه', 'لوائح الالتزام المؤسسي الوقائي'],
    portfolioEn: ['Drafting ongoing operational agreements', 'Bespoke legal research memos', 'Preventative institutional compliance frameworks'],
    activePartnerId: 'partner-dr-saud'
  },
  {
    id: 'labor-hr',
    titleAr: 'العمال والموارد البشرية',
    titleEn: 'Labor & Human Resources Law',
    descriptionAr: 'إعداد عقود العمل واللوائح التنظيمية الداخلية والامتثال التام لنظام العمل السعودي وقرارات التوطين.',
    descriptionEn: 'Designing employment contracts, internal HR rulebooks, and securing alignment with Saudi Labor Law.',
    detailedAr: 'نوجه إدارات الموارد البشرية بالشركات لصياغة سياسات عادلة تتماشى مع رؤية وزارة الموارد البشرية، وحسم الخلافات العمالية ودياً وقضائياً.',
    detailedEn: 'Drafting executive employment covenants, implementing statutory nationalization requirements, and managing complex labor arbitration disputes.',
    iconName: 'Briefcase',
    stats: 'تنظيم بيئة العمل وتجنب القضايا',
    portfolioAr: ['لوائح تنظيم العمل لشركة صناعية عملاقة', 'تسوية منازعات حقوق موظفين تنفيذيين', 'هيكلة سياسات التوطين والامتلاك الوطني'],
    portfolioEn: ['Comprehensive HR charter for manufacturing firm', 'Executive severance dispute resolution', 'Nationalization policy structural design'],
    activePartnerId: 'partner-tariq'
  },
  {
    id: 'finance-invest',
    titleAr: 'التمويل والاستثمار',
    titleEn: 'Finance & Capital Investment',
    descriptionAr: 'هيكلة القروض المصرفية، وصناديق الاستثمار المشترك، والامتثال لقوانين الاستثمار الأجنبي المباشر (MISA).',
    descriptionEn: 'Structuring credit facilities, investment funds, and navigating foreign direct investment guidelines.',
    detailedAr: 'ندير الجغرافيا التمويلية للاندفاعات الاستثمارية للأموال الأجنبية والشركاء المحليين، وضمان الدقة والامتثال للأنظمة المالية الصارمة.',
    detailedEn: 'Advising private equity networks, venture capital platforms, and international developers on financing mechanisms, currency controls, and MISA licenses.',
    iconName: 'TrendingUp',
    stats: 'هيكلات تمويلية واستثمار متقدم',
    portfolioAr: ['تسهيلات ائتمانية بنكية بقيمة مئات الملايين', 'ترخيص شركة استثمار أجنبي بالرياض', 'صندوق تمويل استثماري عقاري مغلق'],
    portfolioEn: ['Multi-million banking credit facility structuring', 'Secured MISA investment license for global firm', 'Closed-end real estate mutual investment fund'],
    activePartnerId: 'partner-tariq'
  },
  {
    id: 'realestate-const',
    titleAr: 'العقارات والمقاولات',
    titleEn: 'Real Estate & Construction',
    descriptionAr: 'عقود الانشاءات والبنية التحتية، شراء وبيع العقارات التجارية الكبرى ومراجعة الأنظمة الهندسية.',
    descriptionEn: 'Advising on engineering procurement contracts (EPC), large scale real estate developments, and land acquisitions.',
    detailedAr: 'صياغة ومراجعة عقود الفيديك الإنشائية، وتسجيل الصكوك العقارية التثبيتية، وشركات التطوير العقاري الكبرى بالمملكة.',
    detailedEn: 'Formulating complex engineering charters, processing verified land titles, and advising real estate syndicates on commercial developments.',
    iconName: 'Building2',
    stats: 'تسهيل المطورين والمقاولين الكبار',
    portfolioAr: ['صياغة عقد إنشاء مجمع سكني ذكي', 'مراجعة ملكية مخطط عقاري تبلغ قيمته مليار ريال', 'نزاعات المقاولات والمقاولين من الباطن'],
    portfolioEn: ['EPC contract drafting for smart residential complex', 'Due diligence on multi-million Riyal property project', 'Subcontractor dispute mitigations and claims'],
    activePartnerId: 'partner-dr-saud'
  },
  {
    id: 'personal-status',
    titleAr: 'الأحوال الشخصية',
    titleEn: 'Personal Status & Family Law',
    descriptionAr: 'معالجة قضايا الإرث والتركات الكبرى وهيكلة الشركات العائلية للحفاظ على استقرار الثروات.',
    descriptionEn: 'Strategic inheritance partitioning, estate planning, and restructuring family assets for continuity.',
    detailedAr: 'نوظف فهمنا العميق للشريعة والقوانين الحديثة لمساعدة الأسر في حصر التركات وتوزيعها رضاءً أو قضاءً، وإقامة الأوقاف والوصايا وتجنب التفكك الأسري.',
    detailedEn: 'Advising high-net-worth families on estate distribution, writing Islamic wills, drafting family constitution bylaws, and handling probate actions.',
    iconName: 'Scale',
    stats: 'تسوية الأوقاف والتركات العائلية',
    portfolioAr: ['قسمة تركة عائلية متعددة الأصول شائكة', 'صياغة ميثاق شركة عائلية لمنع النزاعات', 'تنظيم وقف خيري عقاري دائم'],
    portfolioEn: ['Partitioning highly complex multi-asset family estate', 'Drafting family corporate constitution charter', 'Structuring continuous charitable real estate trust'],
    activePartnerId: 'partner-prof-vance'
  },
  {
    id: 'zakat-tax',
    titleAr: 'الزكاة والضرائب',
    titleEn: 'Zakat & Corporate Taxation',
    descriptionAr: 'التخطيط الضريبي والامتثال للأنظمة، والتمثيل أمام لجان الاعتراض الضريبي والزكوي والجمكي.',
    descriptionEn: 'Corporate income tax optimization, VAT compliance audits, and advocacy in Zakat dispute settlement.',
    detailedAr: 'نساعد الشركات في تقييم التزاماتها الزكوية والضريبية بدقة متناهية، والترافع بالاعتراضات أمام هيئة الزكاة والضريبة والجمارك ولجانها الاستئنافية.',
    detailedEn: 'Assisting corporations with accurate filing procedures, transactional tax planning, and representing before ZATCA dispute adjudication committees.',
    iconName: 'BookOpen',
    stats: 'حماية الكيانات من غرامات ومخاوف الضرائب',
    portfolioAr: ['اعتراض ضريبي ناجح وفر مبالغ مالية كبرى', 'مراجعة الامتثال الضريبي لعملية دمج كبرى', 'الاستشارات الضريبية لبرنامج المقرات الإقليمية'],
    portfolioEn: ['Successful ZATCA tax appeal saving substantial capital', 'Pre-acquisition tax due diligence on mega buyout', 'Tax policy aligning with Riyadh Regional Headquarters'],
    activePartnerId: 'partner-tariq'
  },
  {
    id: 'insurance-law',
    titleAr: 'التأمين',
    titleEn: 'Insurance Law',
    descriptionAr: 'صياغة اتفاقيات إعادة التأمين ومراجعة تغطية بوالص التأمين والتقاضي قبل لجان المنازعات التأمينية.',
    descriptionEn: 'Formulating complex premium insurance coverage parameters and defending before insurance panels.',
    detailedAr: 'نقدم العون الفني لمؤسسات التأمين والعملاء التجاريين في مراجعة المطالبات المليونية المعقدة وحسم الخلافات الناتجة عن الكوارث أو حوادث الشحن والتوريد.',
    detailedEn: 'Detailed reviews of reinsurance contracts, risk allocations, and handling robust recovery advocacy before dedicated Saudi Central Bank insurance committees.',
    iconName: 'ShieldCheck',
    stats: 'تسويات مطالبات تأمينية ضخمة',
    portfolioAr: ['تضمين تغطية تأمينية لمشروع صناعي كبير', 'تحصيل مطالبة تعويض تأمينية بحرية', 'تمثيل شركة تأمين مساهمة رائدة'],
    portfolioEn: ['Drafted custom coverages for mega industrial development', 'Arbitrated marine transport cargo insurance recovery', 'Defense counsel for publicly traded insurance firm'],
    activePartnerId: 'partner-maha'
  },
  {
    id: 'criminal-comm',
    titleAr: 'الجنائي التجاري',
    titleEn: 'Commercial & Financial Crimes',
    descriptionAr: 'مواجهة قضايا غسيل الأموال، الاختلاس، الرشوة، وجرائم المعلومات وتقنية الاتصال بالشركات.',
    descriptionEn: 'Advising on compliance, money laundering defenses, institutional fraud, and cyber-related white collar crimes.',
    detailedAr: 'الوقاية والدفاع في قضايا الجرائم الاقتصادية. نقوم بتمثيل الكيانات التجارية ومدرائها لإثبات الامتثال والنزاهة وتلافي التبعات الكارثية.',
    detailedEn: 'Conducting internal forensic investigations, preventing insider trading risks, and defending executives indicted under cyber governance and banking violations.',
    iconName: 'Shield',
    stats: 'حماية النزاهة والامتياز الجنائي',
    portfolioAr: ['دفع تهم جنائية تجارية عن عضو مجلس إدارة', 'التحقيق الداخلي في قضية اختلاس بالشركة', 'حماية الحسابات من مخالفات تبييض أموال'],
    portfolioEn: ['Successful white-collar defense of board director', 'Internal corporate forensic audit on corporate fraud', 'Establishing strict anti-money laundering mechanisms'],
    activePartnerId: 'partner-maha'
  },
  {
    id: 'admin-compl',
    titleAr: 'الإداري والامتثال',
    titleEn: 'Administrative Law & Compliance',
    descriptionAr: 'مراقبة تراخيص الهيئات الرقابية، والامتثال للأنظمة الحكومية، والتظلم والتقاضي أمام ديوان المظالم.',
    descriptionEn: 'Managing statutory licensing compliance, regulatory audits, and proceedings before the Board of Grievances.',
    detailedAr: 'نضمن حماية مصالح الشركات تجاه القرارات الإدارية، ونقود عمليات الترافع المتقدمة لإلغاء القرارات أو طلب التعويض العادل أمام ديوان المظالم.',
    detailedEn: 'Ensuring correct compliance practices with ministerial decrees, licensing laws, and advocating when state decisions impact corporate ventures unfairly.',
    iconName: 'ShieldCheck',
    stats: 'دفاع إداري وامتثال مالي مثالي',
    portfolioAr: ['كسب حكم بإلغاء قرار إداري لشركة اتصالات', 'تحليل مخاطر الامتثال التنظيمي للرخص التجارية', 'تمثيل مطور عقاري ودياً ضد جهة عامة'],
    portfolioEn: ['Overturned unfair state agency decree for telecom firm', 'Extensive multi-category regulatory compliance risk audit', 'Pre-litigation arbitration against municipalities'],
    activePartnerId: 'partner-dr-saud'
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'partner-dr-saud',
    nameAr: 'خالد بن عبد الرحمن المعالي',
    nameEn: 'Khaled A. Al-Ma\'ali, LL.M.',
    roleAr: 'الشريك المؤسس والمدير العام - استشارات الشركات والاستثمار',
    roleEn: 'Founding Partner & General Manager - Corporate & Investment Counseling',
    bioAr: 'يحمل البكالوريوس والماجستير في القانون المقارن. يتمتع بخبرة تفوق الـ20 عاماً في تقديم الرؤى وصياغة الاستراتيجيات القانونية لكبرى الشركات والكيانات الاستثمارية والعائلية بالمملكة.',
    bioEn: 'Khaled holds his master\'s in Comparative Commercial Law. With over 20 years of premier counseling, he has guided some of Saudi Arabia\'s most prestigious corporate conversions, family groups, and inward foreign investments.',
    image: '/src/assets/images/legal_meeting_hero_1781120375724.png',
    specialtiesAr: ['حوكمة الشركات العائلية', 'الدمج والاندماج والاستحواذ', 'الاستثمار الأجنبي المباشر', 'قانون الشركات واللوائح'],
    specialtiesEn: ['Family Conglomerate Governance', 'Corporate M&A', 'Foreign Direct Investments (FISA)', 'Commercial Statutes'],
    email: 'k.maali@elite-heights.sa',
    publicationsAr: ['دراسة مقارنة: "تاريخ تنظيمات حوكمة الشركات في المملكة"', 'دليل "الوقاية القانونية في الاستثمارات العقارية التجارية"'],
    publicationsEn: ['"Evolution of Saudi Corporate Law Reforms" - Riyadh Legal Press', '"Risk Minimization Handbook for Real Estate Developers"']
  },
  {
    id: 'partner-prof-vance',
    nameAr: 'د. يوسف زاهد الجوهري',
    nameEn: 'Dr. Yousef Z. Al-Jouhari',
    roleAr: 'شريك أول - رئيس تسوية النزاعات والتحكيم التجاري',
    roleEn: 'Senior Partner - Chair of Litigation & Commercial Arbitration',
    bioAr: 'حاصل على الدكتوراه في الشريعة والقانون مع تخصص دقيق في فض منازعات البناء والعقارات التجارية. ترافع أمام كافة المحاكم الإدارية والتجارية بالمملكة ولديه حضور قضائي بارز وناجح.',
    bioEn: 'Dr. Yousef received his Ph.D. in Islamic Jurisprudence & modern laws. He is a premier litigator and arbitrator specializing in major building concession, fidic disputes, and high-worth real estate arbitrated closures.',
    image: '/src/assets/images/supreme_consulting_hero_1781120405885.png',
    specialtiesAr: ['التحكيم الدولي والإنشائي', 'قسمة التركات والأموال الكبرى', 'الدفاع التجاري أمام المحاكم العليا'],
    specialtiesEn: ['FIDIC Commercial Arbitration', 'Estate Liquidations & Trust Partitioning', 'Appeals before Supreme Court'],
    email: 'y.jouhari@elite-heights.sa',
    publicationsAr: ['رسالة الدكتوراه: "أحكام التحكيم في الشريعة الإسلامية والأنظمة المعاصرة"', 'بحث "هندسة عقود الفيدريك ومواجهة تأخير المقاولين"'],
    publicationsEn: ['"Arbitration Awards Jurisprudence under Shariah & Modern Systems"', '"Engineering FIDIC Contract Controls & Default Remedies"']
  },
  {
    id: 'partner-tariq',
    nameAr: 'أ. طارق بن عبد المحسن الماجد',
    nameEn: 'Tariq A. Al-Majed, LL.M.',
    roleAr: 'شريك - رئيس قطاع الامتثال والضرائب والتمويل المصرفي',
    roleEn: 'Partner - Head of Compliance, Taxation & Banking Finance',
    bioAr: 'متمرس في إدارة القضايا الزكوية والضريبية والاتصال بهيئة السوق المالية والبنك المركزي السعودي. يحمل الماجستير في التنظيم المالي والتشريعات المصرفية وله إسهامات تنظيمية واضحة.',
    bioEn: 'Tariq is an expert advisor on Zakat, Tax and regional SAMA regulatory protocols. He guides banks and corporations on structured finance and represents portfolios under ZATCA dispute committees.',
    image: '/src/assets/images/contract_signing_hero_1781120389685.png',
    specialtiesAr: ['قوانين الزكاة والضرائب والقضايا الجمركية', 'هيكلة القروض البنكية والائتمان', 'العمال والموارد البشرية الحساسة'],
    specialtiesEn: ['ZATCA Tax and Customs Dispute Appeals', 'Credit Facility Structuring', 'Executive HR & Labor Controls'],
    email: 't.majed@elite-heights.sa',
    publicationsAr: ['كتاب "قانون الضريبة والزكاة المنهجي بالمملكة"', 'مقال "حقوق والتزامات أصحاب العمل والعمال في اللوائح المحدثة"'],
    publicationsEn: ['"Systematic Tax & Zakat Codes in Saudi Arabia" - Financial Gazette', '"Rights & Duties: Navigating Recent Saudi Employment Code Overhauls"']
  },
  {
    id: 'partner-maha',
    nameAr: 'أ. مها بنت عبد اللطيف السديري',
    nameEn: 'Maha A. Al-Sudairy',
    roleAr: 'شريكة - قطاع الملكية الفكرية والجريمة المعلوماتية التجارية',
    roleEn: 'Partner - Intellectual Property & Commercial Cyber Crime division',
    bioAr: 'متخصصة ذكية في حماية الماركات الهامة وتسجيل حقوق الملكية ومواجهة الجرائم السيبرانية والقرصنة المالية. عملت بمكاتب دولية وحققت إنجازات تشريعية لشركات تكتولوجية ناهضة.',
    bioEn: 'Maha is highly credentialed in digital asset protection, corporate cyber compliance, and active IP litigation. Having trained in tier-one international environments, she defends corporations from infringement vulnerabilities.',
    image: '/src/assets/images/riyadh_skyline_hero_1781120361392.png',
    specialtiesAr: ['تسجيل العلامات وبراءات الاختراع', 'قوانين جرائم التقنية وأمن المعلومات لـ سدايا', 'عقود ترخيص البرمجيات والامتياز التجاري'],
    specialtiesEn: ['Trademark registration & IP Patents', 'SDAIA Personal Data Compliance & Information Security', 'Software License Licensing & Commercial Franchising'],
    email: 'm.sudairy@elite-heights.sa',
    publicationsAr: ['سر الشركاء: "مقدمة لحماية البيانات والسيادة السيبرانية للعلامات التجارية"', 'ورقة "الاحتيال المالي الإلكتروني وكيف تحمي الشركات أصولها"'],
    publicationsEn: ['"Legal Fundamentals of Personal Data Protection Act (PDPL)"', '"Mitigating Cyber Fraud Risks for Corporate Networks"']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    titleAr: 'تأسيس وحوكمة ثاني أكبر مجموعة مالية بالمنطقة الوسطى',
    titleEn: 'Foundate and Governance of Leading Central Financial Group',
    clientAr: 'مجموعة النخبة القابضة للاستثمار',
    clientEn: 'Al-Nokhba Private Investment Holding',
    sectorAr: 'خدمات الشركات والحوكمة',
    sectorEn: 'Corporate Services & Governance',
    challengeAr: 'خلافات وراثة طاحنة هددت بتفكك مجموعة تجارية وتوقف رخص الاستيراد والتوزيع التي تمتلكها بملايين الريالات.',
    challengeEn: 'Intense family delegation conflicts threatened to fragment major distribution franchises and void active import permits worth millions.',
    solutionAr: 'تدخل الشريك المؤسس خالد المعالي وصاغ ميثاق عائلي دستوري ممتد يوزع الملكية عن الإدارة بالتساوي ومصادق عليه من كافة فروع العائلة.',
    solutionEn: 'Founding Partner Khaled Al-Ma\'ali structured a detailed family corporate constitution separation charter, separating beneficial ownership from statutory management.',
    resultAr: 'استقرار تام للمجموعة مع نمو في المبيعات بنسبة ٢٨٪ وتوقيع عقود حصرية جديدة واستقرار العمليات.',
    resultEn: 'Unified family assent was safely recorded, generating absolute operation security and paving the path for subsequent market listing.',
    precedentAr: 'تم تعميمه كأشمل وأقوى نموذج لمواثيق حوكمة الشركات والكيانات العائلية بالمنطقة.',
    precedentEn: 'Adopted as the benchmark structural framework for large family commercial consolidations.'
  },
  {
    id: 'case-2',
    titleAr: 'حسم نزاع لشركة مقاولات واسترداد مستحقات بنظام عقود الفيدريك بقيمة ٤٠ مليون ريال',
    titleEn: 'Resolved Construction Conflict and Restoring 40M SAR',
    clientAr: 'شركة المقاولات الوطنية الكبرى',
    clientEn: 'Major Saudi Contracting Enterprise',
    sectorAr: 'العقارات والمقاولات والنزاعات',
    sectorEn: 'Real Estate & Construction',
    challengeAr: 'قيام جهة تطوير بإلغاء جائر لعقود التشغيل والتشطيب ورفض صرف المستخلصات الفنية الختامية وتسييل الضمانات المصرفية.',
    challengeEn: 'Developer initiated bad-faith cancellation, holding back certified technical payments and issuing a sudden bank guarantee performance freeze.',
    solutionAr: 'قيادة ملف التقاضي والتحكيم بمهارة فائقة دامت ٨ أشهر، وإثبات اكتمال الأعمال الفنية بالاستعانة بمكاتب الاستشاريين المعتمدين والمستندات الهندسية.',
    solutionEn: 'Conducted a strategic litigation maneuver, presenting unassailable mechanical surveys and architectural progress reports validating structural handover compliance.',
    resultAr: 'صدور قرار ملزم بصرف مستحقات عميلنا بقيمة ٤٠ مليون ريال كاملة وإلغاء تسييل الضمان وتجنيبه خسائر مروعة.',
    resultEn: 'Obtained a binding judicial order commanding full dispersal of the 40 Million Riyals and immediate release of the bank guarantee.',
    precedentAr: 'ترسيخ حظر التسييل التعسفي لخطابات الضمان عند إثبات الجاهزية الهندسية.',
    precedentEn: 'Established a strong precedent preventing arbitrary guarantee liquidations if technical compliance is officially certified.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    authorAr: 'الشيخ عبد الله بن محمد المانع',
    authorEn: 'Sheikh Abdullah M. Al-Mane',
    companyAr: 'مجموعة المانع للتطوير العقاري والاستيراد',
    companyEn: 'Al-Mane Property & Distribution Group',
    roleAr: 'رئيس مجلس الإدارة والمالك الرئيسي',
    roleEn: 'Chairman of the Board & Lead Owner',
    textAr: 'نخبة المعالي للمحاماة هم شركاؤنا القانونيون منذ التأسيس، وقد وفروا لنا دائما الأمان والسرعة والحلول العبقرية الصادقة لكل التحديات الإدارية والضريبية التي واجهناها.',
    textEn: 'Nokhbat Al-Ma\'ali has been our premier attorney partner since day one. They consistently offer ironclad security, incredibly swift response, and direct strategic genius in all our taxing corporate moments.'
  },
  {
    id: 'test-2',
    authorAr: 'المهندس فيصل بن تركي السديري',
    authorEn: 'Eng. Faisal T. Al-Sudairy',
    companyAr: 'شركة نسيج تك للبرمجيات والاتصالات',
    companyEn: 'NaseejTech Systems & Telecom',
    roleAr: 'الرئيس التنفيذي والشريك المؤسس',
    roleEn: 'CEO & Co-Founder',
    textAr: 'المستشارة مها السديري أدهشتنا بدرايتها الشاملة بالتعديلات الرقمية وجرائم المعلومات. حمت تطبيقنا من القرصنة وحلت أزمة علامة تجارية معقدة كنا لنهلك لولا توفيق الله ثم حذقها الفكري.',
    textEn: 'Maha Al-Sudairy exceeded our expectations with her comprehensive command of intellectual property and cyber data acts, safely securing our assets and winning key branding disputes.'
  }
];

export const REGULATORY_TRACKER: RegulatoryUpdate[] = [
  {
    id: 'reg-1',
    titleAr: 'دليل تفعيل الإعفاءات الضريبية للشركات ذات المقرات الإقليمية (RHQ)',
    titleEn: 'Riyadh Regional HQ Program: Exclusive Tax Shield Guidelines',
    statusAr: 'نشط ومنشور',
    statusEn: 'Enacted & Active',
    date: 'مارس 2026',
    descriptionAr: 'منح إعفاء كامل بنسبة 0٪ لضريبة الدخل والامتيازات الجمركية للشركات التي تنقل مقرها الإقليمي للرياض لمدة 30 عاماً متصلة.',
    descriptionEn: 'Providing zero corporate and withholding tax grace limits for 30 years to incentivise active European and American companies migrating their headquarters to Riyadh.',
    impactScore: 5
  },
  {
    id: 'reg-2',
    titleAr: 'تعديلات نظام الشركات والمسؤولية الشخصية والمدنية لأعضاء مجالس الإدارات',
    titleEn: 'Saudi Corporate Mandate: Personal Liability and Fraud Rules',
    statusAr: 'يدخل حيز النفاذ قريباً',
    statusEn: 'Pending Implementation',
    date: 'يوليو 2026',
    descriptionAr: 'قواعد حاسمة تشدد الإفصاح المسبق وتفرض غرامات قاسية وتعويضات مدنية كاملة على الكسب الشخصي غير الشرعي لأعضاء مجالس الإدارات.',
    descriptionEn: 'Creating deep statutory changes holding directors personally liable for unauthorized transactions and unapproved conflict-of-interest channels.',
    impactScore: 4
  }
];

export const ELITE_MAALI_INFO = {
  company: {
    name: "Elite Al-Maali",
    fullNameAr: "شركة نخبة المعالي",
    fullNameEn: "Elite Al-Maali Company \"Lawyers and Legal Consultants\"",
    taglineAr: "نخبة المعالي ... شريكك الموثوق للحلول القانونية",
    taglineEn: "Elite Al-Maali ... Your trusted partner for legal solutions",
    licenseAr: "شركة نخبة المعالي \"محامون ومستشارون قانونيون\"، مرخصة لمزاولة مهنة المحاماة من قبل وزارة العدل في المملكة العربية السعودية",
    licenseEn: "Elite Al-Maali is an elite company of lawyers and legal consultants, licensed to practice law by the Ministry of Justice in the Kingdom of Saudi Arabia",
    logoDescription: "White scales of justice icon inside a temple structure"
  },
  contact: {
    email: "contactus@almaali-laws.com",
    phone: ["+966 562 339 116", "+966 550 557 454"],
    addressAr: "جدة - مبنى شركة المعرفة الفرعي - كأنو 1 طريق المعرفة - حي الفرصانية - يوسف كانو كومباني بيلدنج 1 - شارع مدين - حي الفرصان",
    addressEn: "Jeddah - Yusuf Kanoo Company Building 1, Madinah Road Branch, Al-Faisaliah District"
  },
  aboutUs: {
    ar: "نحن شركة نخبة المعالي \"محامون ومستشارون قانونيون\"، مرخصة لمزاولة مهنة المحاماة من قبل وزارة العدل في المملكة العربية السعودية\n\nنعمل على أن تكون الشريك القانوني الموثوق لعملائنا من الأفراد والشركات في المملكة ودول الخليج ومختلف أنحاء العالم، حيث نقدم حلولا قانونية متكاملة تمكن شركاتنا من الانطلاق والنمو بأمان والامتثال للأنظمة المحلية والدولية\n\nلقد التزمنا بتقديم خدمات قانونية وشرعية بمستوى عالٍ من الجودة والقيمة والاحتراف، بما يضمن انطلاقة قانونية سليمة واستمرارية آمنة لأعمال عملائنا التجارية داخل المملكة وخارجها. ولا تقتصر معرفتنا على الجوانب القانونية فقط، بل تمتد لتشمل فهم البيئة العملية والتجارية التي يعمل فيها عملاؤنا، مع تركيزنا الدائم على مصالح العميل كأولوية مطلقة.",
    en: "We are an Elite Al-Maali company of lawyers and legal consultants, licensed to practice law by the Ministry of Justice in the Kingdom of Saudi Arabia\n\nWe work to be the trusted legal partner for our individual and corporate clients in the Kingdom, the Gulf countries, and around the world, providing integrated legal solutions that enable our partners to launch and grow safely and comply with local and international regulations\n\nWe are committed to providing legal and Sharia services with a high level of quality, value and professionalism, ensuring a sound legal start and safe continuity for our clients' commercial businesses inside and outside the Kingdom. Our knowledge is not limited to legal aspects only, but extends to understanding the practical and commercial environment in which our clients operate, with our constant focus on the client's interests as an absolute priority."
  },
  vision: {
    ar: "أن نصبح من بين الشركات الرائدة في قطاع الخدمات القانونية في المملكة العربية السعودية والمنطقة عبر تقديم حلول مبتكرة تدعم عملائنا وتضمن حماية مصالحهم وتحقيق أهدافهم",
    en: "To become one of the leading companies in the legal services sector in the Kingdom of Saudi Arabia and the region by providing innovative solutions that support our clients and ensure the protection of their interests and the achievement of their goals"
  },
  message: {
    ar: "تقديم خدمات قانونية متكاملة وموثوقة تساهم في نجاح عملائنا من خلال:\n• السرعة في الاستجابة\n• توفير حلول مرنة تناسب احتياجاتهم\n• الالتزام بالجودة والمعايير العالمية",
    en: "Providing integrated and reliable legal services that contribute to the success of our clients through:\n• Speed of response\n• Providing flexible solutions that suit their needs\n• Commitment to quality and international standards"
  },
  values: [
    {
      nameEn: "Transparency & Integrity",
      nameAr: "الشفافية والنزاهة",
      descAr: "وضوح تام مع الموكل وكشف نزيه لملابسات الموقف القانوني.",
      descEn: "Complete clarity with our clients and honest disclosure of legal status.",
      icon: "Shield"
    },
    {
      nameEn: "Professionalism",
      nameAr: "المهنية والاحترافية",
      descAr: "تقديم الخدمة بحلول استباقية تصوغ وتمنع الثغرات المترصدة وفق أفضل الأنظمة.",
      descEn: "Presenting active advisory that actively structures parameters and prevents exposure.",
      icon: "Briefcase"
    },
    {
      nameEn: "Working in A Team Spirit",
      nameAr: "العمل بروح الفريق الواحد",
      descAr: "تنسيق متكامل يجمع خبرات ومؤهلات شركائنا لخدمة ملف العميل بأكبر كفاءة.",
      descEn: "Highly integrated coordination bringing our partners' deep skills together to power every file.",
      icon: "Users"
    },
    {
      nameEn: "Speed and Accuracy",
      nameAr: "السرعة والدقة",
      descAr: "سرعة في الاستجابة مع دقة فنية بالغة في صياغة البنود والعقود القانونية.",
      descEn: "Sovereign speed of response balanced with extreme precision in all drafts.",
      icon: "Zap"
    },
    {
      nameEn: "Punctuality",
      nameAr: "الالتزام بالمواعيد",
      descAr: "احترام دقيق للمواعيد والالتزامات الزمنية المحددة مع عملائنا.",
      descEn: "Strict compliance with timeline milestones and private calendars.",
      icon: "Clock"
    }
  ],
  goals: [
    {
      nameEn: "Providing innovative legal solutions",
      nameAr: "تقديم حلول قانونية مبتكرة"
    },
    {
      nameEn: "Maintaining customers' privacy and the confidentiality of their statements",
      nameAr: "المحافظة على خصوصيات العملاء وسرية بياناتهم"
    },
    {
      nameEn: "Continuous development and continuous improvement of work methodologies",
      nameAr: "التطوير المستمر والتحسين الدائم لمنهجيات العمل"
    },
    {
      nameEn: "Building long-term partnerships with customers",
      nameAr: "بناء شراكات طويلة الأمد مع العملاء"
    }
  ],
  whyUs: {
    ar: "يضم فريق نخبة المعالي نخبة من المحامين والمستشارين القانونيين ذوي الخبرة والكفاءة في مجالات القانون التجاري القادرين على العمل بكل احترافية باللغات العربية والإنجليزية...\n\nوهنالك ما يميزنا أيضاً عن غيرنا:\n• الالتزام صارم بالمواعيد والجودة\n• فريق عمل متخصص وشغوف بخدمة العملاء\n• خطط للتوسع عبر شراكات استراتيجية محلية وإقليمية",
    en: "His Excellency's elite team includes an elite group of lawyers and legal advisors with experience and competence in the fields of commercial law who are able to work professionally in Arabic and English...\n\nThere is also something that distinguishes us from others:\n☑ Strict adherence to deadlines and quality\n☑ A specialized team passionate about customer service\n☑ Plans to expand through local and regional strategic partnerships"
  },
  customerJourney: {
    titleAr: "محطات رحلة العميل",
    titleEn: "Customer Journey Stations",
    introAr: "نرافق عملاءنا في رحلة قانونية متكاملة بإذن الله تعالى مرورًا بمحطات أساسية تضمن وضوح المسار وجودة الخدمة وصولًا إلى النتائج المرجوة",
    introEn: "We accompany our clients on an integrated legal journey, God willing, passing through basic stations that ensure clarity of path and quality of service, leading to the desired results",
    stations: [
      {
        id: 1,
        nameEn: "Conference / Meeting",
        nameAr: "الاجتماع",
        descriptionEn: "We hold an in-person meeting with the client... to understand his requests, needs, and goals",
        descriptionAr: "نعقد اجتماعًا مع العميل في مقر العميل أو مقرنا..."
      },
      {
        id: 2,
        nameEn: "Study",
        nameAr: "الدراسة",
        descriptionEn: "We prepare a comprehensive legal study of the client's issue...",
        descriptionAr: "نقوم بإعداد دراسة قانونية شاملة..."
      },
      {
        id: 3,
        nameEn: "Presentation",
        nameAr: "العرض",
        descriptionEn: "We provide a comprehensive technical and financial presentation...",
        descriptionAr: "نقدم عرضًا فنيًا وماليًا شاملاً..."
      },
      {
        id: 4,
        nameEn: "Contract",
        nameAr: "التعاقد",
        descriptionEn: "To organize the relationship between the office and the client...",
        descriptionAr: "تنظيم العلاقة بين المكتب والعميل..."
      },
      {
        id: 5,
        nameEn: "Implementation",
        nameAr: "التنفيذ",
        descriptionEn: "With clear steps and a specific agenda...",
        descriptionAr: "بخطوات واضحة وجدولة محددة..."
      },
      {
        id: 6,
        nameEn: "Contact / Follow-up",
        nameAr: "التواصل",
        descriptionEn: "We adopt a continuous communication policy...",
        descriptionAr: "نعتمد سياسة تواصل مستمرة..."
      }
    ]
  }
};
