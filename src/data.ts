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
  descriptionEn: string;
  descriptionAr: string;
  pointsEn: string[];
  pointsAr: string[];
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
    "phone": ["+966 56 666 9815", "+966 55 055 7454", "+966 56 233 9116"],
    "addressAr": "جدة - مبنى شركة يوسف كانو 1 طريق المدينة المنورة الفرعي - حي الفيصلية",
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
        "categoryEn": "Corporate Law & Business Advisory",
        "categoryAr": "الاستشارات والمساندة القانونية",
        "itemsEn": ["Oral & written legal opinions", "Drafting & reviewing agreements", "Support in decision making"],
        "itemsAr": ["تقديم الاستشارات الشفوية والمكتوبة", "مراجعة العقود والاتفاقيات", "الدعم في القرارات الإدارية"],
        "descriptionAr": "يرتكز العمل لدينا في قطاع الاستشارات والمساندة القانونية بمكتب نخبة المعالي للمحاماة والاستشارات القانونية على تقديم الدعم القانوني والشرعي المتكامل والشامل لعملائنا في مختلف المجالات، بهدف حماية مصالحهم وضمان سلامة إجراءاتهم القانونية والتنظيمية.",
        "descriptionEn": "Our work in the Legal Advisory & Corporate Support sector at Elite Al-Maali Law Firm is based on providing integrated and comprehensive legal and Sharia support to our clients in various fields, to protect their interests and ensure the safety of their legal and regulatory procedures.",
        "pointsAr": [
          "تقديم الاستشارات القانونية والشرعية الشفوية والمكتوبة في شتى الأنظمة والقوانين.",
          "صياغة ومراجعة كافة أنواع العقود والاتفاقيات التجارية والمدنية ومذكرات التفاهم.",
          "إعداد المذكرات القانونية والآراء الفنية المتخصصة لدعم القرارات الاستراتيجية.",
          "تقييم المخاطر القانونية واقتراح الحلول الوقائية لتفادي النزاعات القضائية.",
          "صياغة لوائح العمل الداخلية والهياكل التنظيمية بما يتوافق مع البيئة التشريعية."
        ],
        "pointsEn": [
          "Providing oral and written legal and Sharia consultations in all regulations and laws.",
          "Drafting and reviewing all types of commercial and civil contracts, agreements, and MoUs.",
          "Preparing legal memos and specialized technical opinions to support strategic decisions.",
          "Assessing legal risks and proposing preventive solutions to avoid judicial disputes.",
          "Drafting internal work regulations and organizational structures in line with the legislative environment."
        ]
      },
      {
        "categoryEn": "Company Services",
        "categoryAr": "خدمات الشركات",
        "itemsEn": ["Corporate incorporation & liquidation", "Governance regulations", "Mergers & acquisitions"],
        "itemsAr": ["تأسيس وتصفية الشركات", "إعداد لوائح الحوكمة", "إجراء عمليات الدمج والاستحواذ"],
        "descriptionAr": "نقدم خدمات متكاملة وحلولاً مبتكرة للشركات والمنشآت التجارية، بدءاً من مرحلة ما قبل التأسيس وحتى إتمام أعمال الصفقات أو التصفية، بما يضمن الامتثال الكامل لكافة الأنظمة المعمول بها في المملكة العربية السعودية.",
        "descriptionEn": "We provide integrated services and innovative solutions for companies and commercial enterprises, starting from the pre-establishment phase to the completion of transactions or liquidation, ensuring full compliance with all applicable regulations in the Kingdom of Saudi Arabia.",
        "pointsAr": [
          "إجراءات تأسيس الشركات بكافة أشكالها القانونية (المحدودة، المساهمة، التضامنية وغيرها).",
          "تعديل عقود التأسيس وقرارات الشركاء، وزيادة أو تخفيض رأس المال.",
          "صياغة لوائح الحوكمة وتحديد صلاحيات مجلس الإدارة واللجان التابعة.",
          "إدارة عمليات الدمج والاستحواذ وإجراء الدراسات النافية للجهالة (Due Diligence).",
          "التمثيل القانوني وحضور الجمعيات العمومية وتوثيق محاضر الاجتماعات.",
          "القيام بكافة إجراءات التصفية الاختيارية أو القضائية وقسمة وحماية الأصول."
        ],
        "pointsEn": [
          "Procedures for establishing companies of all legal forms (limited liability, joint stock, partnership, etc.).",
          "Amending articles of association, partners' resolutions, and capital increases or reductions.",
          "Drafting governance regulations and defining the powers of the board of directors and its committees.",
          "Managing mergers and acquisitions and conducting due diligence studies.",
          "Legal representation, attending general assemblies, and documenting minutes of meetings.",
          "Carrying out all voluntary or judicial liquidation procedures, and the division and protection of assets."
        ]
      },
      {
        "categoryEn": "Employment & Labor Cases",
        "categoryAr": "القضايا العمالية",
        "itemsEn": ["Labor regulations & contracts", "Representation in labor courts", "Employee rights & benefits"],
        "itemsAr": ["عقود العمل ولوائح الجزاءات", "التمثيل أمام المحاكم العمالية", "حقوق ومستحقات الموظفين"],
        "descriptionAr": "نعمل على تنظيم العلاقة بين أصحاب العمل والعاملين لديهم، من خلال صياغة عقود ولوائح عمل متزنة تحمي حقوق الطرفين وتتطابق مع أنظمة وزارة الموارد البشرية ومكتب العمل بالمملكة.",
        "descriptionEn": "We work to regulate the relationship between employers and their employees by drafting balanced employment contracts and regulations that protect the rights of both parties and comply with the regulations of the Ministry of Human Resources and the Labor Office in the Kingdom.",
        "pointsAr": [
          "صياغة عقود العمل الفردية والجماعية وصياغة لوائح العمل الداخلية والموافقة عليها.",
          "تقديم الاستشارات القانونية حول مكافأة نهاية الخدمة، ساعات العمل، الإجازات، والتعويضات.",
          "تمثيل المنشآت والأفراد أمام المحاكم العمالية واللجان شبه القضائية في المنازعات.",
          "صياغة لوائح الجزاءات والمخالفات العمالية وتنظيم لجان التحقيق الداخلي.",
          "مراجعة السياسات الداخلية للمنشآت للتأكد من ملاءمتها لقانون العمل وتعديلاته."
        ],
        "pointsEn": [
          "Drafting individual and collective employment contracts, and drafting and approving internal work regulations.",
          "Providing legal consultations on end-of-service benefits, working hours, vacations, and compensations.",
          "Representing enterprises and individuals before labor courts and quasi-judicial committees in disputes.",
          "Drafting regulations for penalties and labor violations, and organizing internal investigation committees.",
          "Reviewing internal policies of establishments to ensure compliance with the Labor Law and its amendments."
        ]
      },
      {
        "categoryEn": "Litigation & Dispute Resolution",
        "categoryAr": "التقاضي وحل النزاعات",
        "itemsEn": ["Representation before all courts", "Drafting briefs & appeals", "Arbitration & mediation"],
        "itemsAr": ["الترافع والمدافعة أمام المحاكم", "صياغة اللوائح والاعتراضات", "التحكيم والوساطة والتسوية"],
        "descriptionAr": "نتميز بخبرة طويلة في الترافع والمدافعة أمام كافة المحاكم واللجان القضائية وشبه القضائية في المملكة، بجانب تقديم الحلول البديلة لفض النزاعات كالتحكيم والوساطة لتوفير الوقت والجهد على عملائنا.",
        "descriptionEn": "We are characterized by long experience in pleading and defending before all courts, judicial and quasi-judicial committees in the Kingdom, in addition to providing alternative solutions for dispute resolution such as arbitration and mediation to save time and effort for our clients.",
        "pointsAr": [
          "تمثيل العملاء أمام المحاكم العامة والتجارية والإدارية (ديوان المظالم) والمحاكم العمالية.",
          "صياغة صحف الدعاوى والمذكرات الجوابية ولوائح الاعتراض والاستئناف والتماس إعادة النظر.",
          "تمثيل الأطراف في قضايا التحكيم التجاري وصياغة مشارطات واتفاقيات التحكيم.",
          "تقديم خدمات التفاوض والوساطة والتسوية الودية للنزاعات التجارية والمدنية.",
          "متابعة إجراءات التنفيذ لدى قضاة التنفيذ وتحصيل المبالغ المحكوم بها وسندات الأمر."
        ],
        "pointsEn": [
          "Representing clients before General, Commercial, Administrative (Board of Grievances), and Labor Courts.",
          "Drafting statements of claim, reply briefs, objection statements, appeals, and petitions for reconsideration.",
          "Representing parties in commercial arbitration cases and drafting arbitration submissions and agreements.",
          "Providing negotiation, mediation, and amicable settlement services for commercial and civil disputes.",
          "Following up on enforcement procedures with enforcement judges and collecting awarded sums and promissory notes."
        ]
      },
      {
        "categoryEn": "Intellectual Property",
        "categoryAr": "الملكية الفكرية",
        "itemsEn": ["Trademark registration", "Filing patent applications", "Copyright protection"],
        "itemsAr": ["تسجيل العلامات التجارية", "إيداع براءات الاختراع", "حماية حقوق المؤلف والمصنفات"],
        "descriptionAr": "نحرص على حماية الابتكارات والعلامات التجارية والإنتاج الفكري لعملائنا في ظل النهضة الاقتصادية للمملكة، ونقدم خدمات متكاملة للتسجيل والحماية القانونية ومكافحة التعديات والتقليد.",
        "descriptionEn": "We are keen to protect the innovations, trademarks, and intellectual production of our clients in light of the Kingdom's economic renaissance, and we provide integrated services for registration, legal protection, and combating infringement and counterfeiting.",
        "pointsAr": [
          "تسجيل وحماية العلامات التجارية والأسماء التجارية والشعارات محلياً ودولياً.",
          "إيداع طلبات براءات الاختراع والنماذج الصناعية وحماية حقوق المؤلف والحقوق المجاورة.",
          "صياغة اتفاقيات الترخيص بالاستخدام ونقل التقنية (Franchise) والامتياز التجاري.",
          "الترافع في قضايا التعدي على حقوق الملكية الفكرية وملاحقة المعتدين ومكافحة التقليد والغش التجاري.",
          "تقديم المشورة القانونية حول الملكية الفكرية وحق المؤلف في البيئة الرقمية والتكنولوجية."
        ],
        "pointsEn": [
          "Registering and protecting trademarks, trade names, and logos locally and internationally.",
          "Filing patent applications, industrial designs, and protecting copyright and neighboring rights.",
          "Drafting licensing agreements, technology transfers, and commercial franchises.",
          "Pleading in intellectual property infringement cases, pursuing violators, and combating counterfeiting and commercial fraud.",
          "Providing legal advice on intellectual property and copyright in digital and technological environments."
        ]
      },
      {
        "categoryEn": "Estate & Inheritance",
        "categoryAr": "التركات",
        "itemsEn": ["Estate listing & valuation", "Amicable division contracts", "Representation in compulsory division"],
        "itemsAr": ["حصر التركات وتصنيف الأصول", "عقود القسمة الرضائية وتوزيع الأنصبة", "التمثيل في التركات الجبرية"],
        "descriptionAr": "نقدم حلولاً شرعية وقانونية دقيقة لقضايا التركات وتوزيع الأصول بما يضمن الحفاظ على صلة الرحم وتجنب الخلافات العائلية، فضلاً عن تقديم الدعم الكامل في التركات المعقدة التي تحتوي على أصول تجارية وعقارية.",
        "descriptionEn": "We provide accurate Sharia and legal solutions for estate issues and asset distribution, ensuring the preservation of family ties and avoiding family disputes, as well as providing full support in complex estates containing commercial and real estate assets.",
        "pointsAr": [
          "القيام بأعمال حصر الورثة وحصر تركة المتوفى وتحديد الأصول والخصوم وتقييمها.",
          "صياغة عقود القسمة الرضائية وتوزيع الأنصبة الشرعية على الورثة وتوثيقها.",
          "التمثيل القضائي في قضايا قسمة التركات الجبرية وتصفية الأصول العقارية والشركات التابعة للتركة.",
          "تأسيس الأوقاف والوصايا والشركات العائلية لضمان استدامة الأصول وحمايتها قانونياً.",
          "تقديم الاستشارات وتسييل الأصول وتوزيع العوائد المالية للتركات المعقدة."
        ],
        "pointsEn": [
          "Listing heirs, identifying and valuing the deceased's estate assets, liabilities, and holdings.",
          "Drafting and documenting amicable division contracts and distributing Sharia shares to heirs.",
          "Judicial representation in compulsory division cases, liquidation of real estate, and companies belonging to the estate.",
          "Establishing endowments, wills, and family companies to ensure asset sustainability and legal protection.",
          "Providing advice, liquidating assets, and distributing financial returns for complex estates."
        ]
      },
      {
        "categoryEn": "Zakat & Tax Services",
        "categoryAr": "الزكاة والضريبة",
        "itemsEn": ["Zakat & VAT consultation", "Appeals before tax committees", "Regulatory compliance audit"],
        "itemsAr": ["استشارات ضريبة الدخل والقيمة المضافة", "الاعتراض أمام اللجان المختصة", "الامتثال للأنظمة والتعليمات"],
        "descriptionAr": "نظراً لأهمية الجوانب الزكوية والضريبية في قطاع الأعمال، فإننا نقدم الدعم والتمثيل القانوني لضمان الامتثال للأنظمة والقرارات الصادرة وتخفيف الأعباء المترتبة على المنشآت بالطرق النظامية.",
        "descriptionEn": "Due to the importance of Zakat and tax aspects in the business sector, we provide support and legal representation to ensure compliance with issued regulations and decisions, and to legally ease the burden on establishments.",
        "pointsAr": [
          "تقديم الاستشارات حول ضريبة القيمة المضافة (VAT)، ضريبة الاستقطاع، ضريبة التصرفات العقارية، والزكاة الشرعية.",
          "صياغة وتقديم الاعتراضات والتظلمات أمام الأمانة العامة للجان الضريبية والزكوية.",
          "الترافع أمام لجان الفصل في المخالفات والمنازعات الضريبية والزكوية بمختلف درجاتها.",
          "مراجعة العقود والصفقات التجارية لتقييم الآثار الضريبية والزكوية المترتبة عليها.",
          "فحص الالتزام الزكوي والضريبي للمنشآت لتفادي الغرامات والعقوبات النظامية."
        ],
        "pointsEn": [
          "Providing consultations on Value Added Tax (VAT), withholding tax, real estate transaction tax, and Sharia Zakat.",
          "Drafting and submitting objections and grievances before the General Secretariat of Tax and Zakat Committees.",
          "Pleading before Tax and Zakat Dispute Resolution Committees of all levels.",
          "Reviewing contracts and commercial transactions to assess their tax and Zakat implications.",
          "Auditing Zakat and tax compliance of establishments to avoid fines and regulatory penalties."
        ]
      },
      {
        "categoryEn": "Foreign Investor Services",
        "categoryAr": "خدمات المستثمرين الأجانب",
        "itemsEn": ["Investment license (MISA)", "Foreign-owned incorporation", "Local regulatory consulting"],
        "itemsAr": ["تراخيص الاستثمار (MISA)", "تأسيس شركات رأس المال الأجنبي", "الاستشارات والامتثال المحلي"],
        "descriptionAr": "نواكب رؤية المملكة 2030 في جذب الاستثمارات الخارجية، ونقدم حزمة متكاملة من الخدمات للمستثمر الأجنبي لتسهيل دخوله السوق السعودي وبدء نشاطه بكل سلاسة وامتثال تام للأنظمة.",
        "descriptionEn": "We keep pace with Saudi Vision 2030 in attracting foreign investments, and we provide a comprehensive suite of services to foreign investors to facilitate their entry into the Saudi market and start their activities smoothly and in full compliance.",
        "pointsAr": [
          "استخراج وتجديد وتعديل تراخيص الاستثمار من وزارة الاستثمار (MISA).",
          "تأسيس الشركات الأجنبية بالكامل أو الشركات المختلطة وتوثيق عقودها لدى وزارة التجارة.",
          "تقديم الاستشارات القانونية حول الأنظمة والتشريعات المحلية، وحوافز الاستثمار، والقيود النوعية.",
          "مرافقة المستثمر في استكمال متطلبات التسجيل لدى الغرف التجارية، التأمينات، والجهات الحكومية الأخرى.",
          "صياغة عقود الشراكة الاستراتيجية بين المستثمرين الأجانب والمحليين وضمان حماية المصالح."
        ],
        "pointsEn": [
          "Obtaining, renewing, and amending investment licenses from the Ministry of Investment (MISA).",
          "Incorporating wholly foreign-owned or joint-venture companies and documenting their contracts with the Ministry of Commerce.",
          "Providing legal consultations on local laws, investment incentives, and sector-specific restrictions.",
          "Accompanying the investor in completing registration requirements with chambers of commerce, GOSI, and other government bodies.",
          "Drafting strategic partnership agreements between foreign and local investors and ensuring the protection of interests."
        ]
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
