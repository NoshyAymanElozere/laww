export interface ValueItem {
  nameEn: string;
  nameAr: string;
  icon: string;
}

export interface GoalItem {
  nameEn: string;
  nameAr: string;
}

export interface ServiceCategory {
  categoryEn: string;
  categoryAr: string;
  itemsEn: string[];
  itemsAr: string[];
}

export interface JourneyStation {
  id: number;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface EliteMaaliData {
  company: {
    name: string;
    fullNameAr: string;
    fullNameEn: string;
    taglineAr: string;
    taglineEn: string;
    license: string;
    logoDescription: string;
  };
  contact: {
    email: string;
    phone: string[];
    addressAr: string;
    addressEn: string;
  };
  aboutUs: {
    ar: string;
    en: string;
  };
  vision: {
    ar: string;
    en: string;
  };
  message: {
    ar: string;
    en: string;
  };
  values: ValueItem[];
  goals: GoalItem[];
  services: {
    introAr: string;
    introEn: string;
    categories: ServiceCategory[];
  };
  customerJourney: {
    titleAr: string;
    titleEn: string;
    introAr: string;
    introEn: string;
    stations: JourneyStation[];
  };
  whyUs: {
    ar: string;
    en: string;
  };
  websiteStructureSuggestion: {
    pages: string[];
    languages: string[];
    recommendedSections: string[];
  };
}

export const ELITE_MAALI_DATA: EliteMaaliData = {
  "company": {
    "name": "Elite Al-Maali",
    "fullNameAr": "شركة نخبة المعالي",
    "fullNameEn": "Elite Al-Maali Company \"Lawyers and Legal Consultants\"",
    "taglineAr": "نخبة المعالي ... شريكك الموثوق للحلول القانونية",
    "taglineEn": "Elite Al-Maali ... Your trusted partner for legal solutions",
    "license": "Licensed by the Ministry of Justice in the Kingdom of Saudi Arabia",
    "logoDescription": "White scales of justice icon inside a temple structure"
  },
  "contact": {
    "email": "contactus@almaali laws.com",
    "phone": ["+966 562 339 116", "+966 550 557 454"],
    "addressAr": "جدة - مبنى شركة المعرفة الفرعي - كأنو 1 طريق المعرفة - حي الفرصانية - يوسف كانو كومباني بيلدنج 1 - شارع مدين - حي الفرصان",
    "addressEn": "Jeddah - Yusuf Kanoo Company Building 1, Madinah Road Branch, Al-Faisaliah District"
  },
  "aboutUs": {
    "ar": "نحن شركة نخبة المعالي \"محامون ومستشارون قانونيون\"، مرخصة لمزاولة مهنة المحاماة من قبل وزارة العدل في المملكة العربية السعودية\n\nنعمل على أن تكون الشريك القانوني الموثوق لعملائنا من الأفراد والشركات في المملكة ودول الخليج ومختلف أنحاء العالم، حيث نقدم حلولا قانونية متكاملة تمكن شركاتنا من الانطلاق والنمو بأمان والامتثال للأنظمة المحلية الدولية\n\nلقد التزمنا بتقديم خدمات قانونية وشرعية بمستوى عالٍ من الجودة والقيمة والاحتراف، بما يضمن انطلاقة قانونية سليمة واستمرارية آمنة لأعمال عملائنا التجارية داخل المملكة وخارجها. ولا تقتصر معرفتنا على الجوانب القانونية فقط، بل تمتد لتشمل فهم البيئة العملية والتجارية التي يعمل فيها عملاؤنا، مع تركيزنا الدائم على مصالح العميل كأولوية مطلقة.",
    "en": "We are an Elite Al-Maali company of lawyers and legal consultants, licensed to practice law by the Ministry of Justice in the Kingdom of Saudi Arabia\n\nWe work to be the trusted legal partner for our individual and corporate clients in the Kingdom, the Gulf countries, and around the world, providing integrated legal solutions that enable our partners to launch and grow safely and comply with local and international regulations\n\nWe are committed to providing legal and Sharia services with a high level of quality, value and professionalism, ensuring a sound legal start and safe continuity for our clients' commercial businesses inside and outside the Kingdom. Our knowledge is not limited to legal aspects only, but extends to understanding the practical and commercial environment in which our clients operate, with our constant focus on the client's interests as an absolute priority."
  },
  "vision": {
    "ar": "أن نصبح من بين الشركات الرائدة في قطاع الخدمات القانونية في المملكة العربية السعودية والمنطقة عبر تقديم حلول مبتكرة تدعم عملائنا وتضمن حماية مصالحهم وتحقيق أهدافهم",
    "en": "To become one of the leading companies in the legal services sector in the Kingdom of Saudi Arabia and the region by providing innovative solutions that support our clients and ensure the protection of their interests and the achievement of their goals"
  },
  "message": {
    "ar": "تقديم خدمات قانونية متكاملة وموثوقة تساهم في نجاح عملائنا من خلال:\n• السرعة في الاستجابة\n• توفير حلول مرنة تناسب احتياجاتهم\n• الالتزام بالجودة والمعايير العالمية",
    "en": "Providing integrated and reliable legal services that contribute to the success of our clients through:\n• Speed of response\n• Providing flexible solutions that suit their needs\n• Commitment to quality and international standards"
  },
  "values": [
    {
      "nameEn": "Transparency & Integrity",
      "nameAr": "الشفافية والنزاهة",
      "icon": "magnifying-glass"
    },
    {
      "nameEn": "Professional",
      "nameAr": "المهنية والاحترافية",
      "icon": "handshake"
    },
    {
      "nameEn": "Working in A team Spirit",
      "nameAr": "العمل بروح الفريق الواحد",
      "icon": "team"
    },
    {
      "nameEn": "Speed and accuracy",
      "nameAr": "السرعة والدقة",
      "icon": "hand"
    },
    {
      "nameEn": "Punctuality",
      "nameAr": "الإلتزام بالمواعيد",
      "icon": "clock"
    }
  ],
  "goals": [
    {
      "nameEn": "Providing innovative legal solutions",
      "nameAr": "تقديم حلول قانونية مبتكرة"
    },
    {
      "nameEn": "Maintaining customers' privacy and the confidentiality of their statements",
      "nameAr": "المحافظة على خصوصيات العملاء وسيرية بياناتهم"
    },
    {
      "nameEn": "Continuous development and continuous improvement of work methodologies",
      "nameAr": "التطوير المستمر والتحسين الدائم لمنهجيات العمل"
    },
    {
      "nameEn": "Building long-term partnerships with customers",
      "nameAr": "بناء شراكات طويلة الأمد مع العملاء"
    }
  ],
  "services": {
    "introAr": "في شركة نخبة المعالي \"محامون ومستشارون قانونيون\" نقدم خدمات قانونية وشرعية بمستوى عال من الجودة والاحتراف",
    "introEn": "At Elite Al-Maali Company, \"Lawyers and Legal Consultants,\" we provide legal and Sharia services with a high level of quality, value, and professionalism",
    "categories": [
      {
        "categoryEn": "Companies",
        "categoryAr": "الشركات",
        "itemsEn": ["Establishment, contracts, transformation, governance"],
        "itemsAr": ["التأسيس، العقود، التحول، الحوكمة"]
      },
      {
        "categoryEn": "Intellectual",
        "categoryAr": "الملكية الفكرية",
        "itemsEn": ["Registration and protection of marks, patents, and copyright"],
        "itemsAr": ["التسجيل والحماية للعلامات، البراءات، وحقوق المؤلف"]
      },
      {
        "categoryEn": "Arbitration and Disputes",
        "categoryAr": "التحكيم والمنازعات",
        "itemsEn": ["Representation, agreements, alternative solutions"],
        "itemsAr": ["تمثيل، اتفاقيات، حلول بديلة"]
      },
      {
        "categoryEn": "General Consulting",
        "categoryAr": "الاستشارات العامة",
        "itemsEn": ["Legal opinions and support in decision making"],
        "itemsAr": ["آراء قانونية ودعم في اتخاذ القرار"]
      },
      {
        "categoryEn": "Labor and Human Resources",
        "categoryAr": "العمّالي والموارد البشرية",
        "itemsEn": ["Regulations, Contracts, Disputes, Compliance"],
        "itemsAr": ["اللوائح، العقود المنازعات، الامتثال"]
      },
      {
        "categoryEn": "Finance & Investment",
        "categoryAr": "التمويل والاستثمار",
        "itemsEn": ["Deals, Disclosure, Investor Protection"],
        "itemsAr": ["صفقات، إفصاح، حماية المستثمرين"]
      },
      {
        "categoryEn": "Real Estate & Contracting",
        "categoryAr": "العقارات والمقاولات",
        "itemsEn": ["Support in transactions, contracts and disputes"],
        "itemsAr": ["دعم في المعاملات والعقود والنزاعات"]
      },
      {
        "categoryEn": "Personal Status",
        "categoryAr": "الأحوال الشخصية",
        "itemsEn": ["Divorce, custody, inheritance, and alimony cases"],
        "itemsAr": ["قضايا الطلاق، الحضانة، الإرث، والنفقة"]
      },
      {
        "categoryEn": "Zakat and Taxes",
        "categoryAr": "الزكاة والضرائب",
        "itemsEn": ["Representation and consultation on compliance and burden relief"],
        "itemsAr": ["تمثيل واستشارات امتثال وتخفيف الأعباء"]
      },
      {
        "categoryEn": "Insurance",
        "categoryAr": "التأمين",
        "itemsEn": ["Contract disputes and claims"],
        "itemsAr": ["نزاعات العقود والمطالبات"]
      },
      {
        "categoryEn": "Commercial Criminal Court",
        "categoryAr": "الجنائي التجاري",
        "itemsEn": ["Fraud, money laundering, market irregularities"],
        "itemsAr": ["احتيال، غسل أموال، مخالفات السوق"]
      },
      {
        "categoryEn": "Administrative and Compliance",
        "categoryAr": "الإداري والامتثال",
        "itemsEn": ["Representation, internal policies, combating corruption"],
        "itemsAr": ["تمثيل، سياسات داخلية، مكافحة فساد"]
      }
    ]
  },
  "customerJourney": {
    "titleAr": "محطات رحلة العميل",
    "titleEn": "Customer Journey Stations",
    "introAr": "نرافق عملاءنا في رحلة قانونية متكاملة بإذن الله تعالى مرورًا بمحطات أساسية تضمن وضوح المسار وجودة الخدمة وصولًا إلى النتائج المرجوة",
    "introEn": "We accompany our clients on an integrated legal journey, God willing, passing through basic stations that ensure clarity of path and quality of service, leading to the desired results",
    "stations": [
      {
        "id": 1,
        "nameEn": "Conference / Meeting",
        "nameAr": "الاجتماع",
        "descriptionEn": "We hold an in-person meeting with the client... to understand his requests, needs, and goals",
        "descriptionAr": "نعقد اجتماعًا مع العميل في مقر العميل أو مقرنا..."
      },
      {
        "id": 2,
        "nameEn": "Study",
        "nameAr": "الدراسة",
        "descriptionEn": "We prepare a comprehensive legal study of the client's issue...",
        "descriptionAr": "نقوم بإعداد دراسة قانونية شاملة..."
      },
      {
        "id": 3,
        "nameEn": "Presentation",
        "nameAr": "العرض",
        "descriptionEn": "We provide a comprehensive technical and financial presentation...",
        "descriptionAr": "نقدم عرضًا فنيًا وماليًا شاملاً..."
      },
      {
        "id": 4,
        "nameEn": "Contract",
        "nameAr": "التعاقد",
        "descriptionEn": "To organize the relationship between the office and the client...",
        "descriptionAr": "تنظيم العلاقة بين المكتب والعميل..."
      },
      {
        "id": 5,
        "nameEn": "Implementation",
        "nameAr": "التنفيذ",
        "descriptionEn": "With clear steps and a specific agenda...",
        "descriptionAr": "بخطوات واضحة وجدولة محددة..."
      },
      {
        "id": 6,
        "nameEn": "Contact / Follow-up",
        "nameAr": "التواصل",
        "descriptionEn": "We adopt a continuous communication policy...",
        "descriptionAr": "نعتمد سياسة تواصل مستمرة..."
      }
    ]
  },
  "whyUs": {
    "ar": "يضم فريق نخبة المعالي نخبة من المحامين والمستشارين القانونيين ذوي الخبرة والكفاءة في مجالات القانون التجاري القادرين على العمل بكل احترافية باللغات العربية والإنجليزية...\n\nوهنالك ما يميزنا ايضاً عن غيرنا:\n• الالتزام صارم بالمواعيد والجودة\n• فريق عمل متخصص وشغوف بخدمة العملاء\n• خطط للتوسع عبر شراكات استراتيجية محلية وإقليمية",
    "en": "His Excellency's elite team includes an elite group of lawyers and legal advisors with experience and competence in the fields of commercial law who are able to work professionally in Arabic and English...\n\nThere is also something that distinguishes us from others:\n☑ Strict adherence to deadlines and quality\n☑ A specialized team passionate about customer service\n☑ Plans to expand through local and regional strategic partnerships"
  },
  "websiteStructureSuggestion": {
    "pages": ["Home", "About Us", "Services", "Vision & Values", "Customer Journey", "Why Us", "Contact"],
    "languages": ["ar", "en"],
    "recommendedSections": ["hero", "about", "services-grid", "journey-timeline", "values", "why-us", "footer"]
  }
};
