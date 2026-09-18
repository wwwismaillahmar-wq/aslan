import { Product, Testimonial } from '../types';

export const AYN_HUB_PRODUCTS: Product[] = [
  {
    id: 'ayn-01',
    name: 'دهن عود كلمنتان مالينو معتق فاخر',
    nameEn: 'Aged Malinau Kalimantan Oud Oil',
    category: 'oud-oil',
    categoryNameAr: 'دهن العود',
    price: 680,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80',
    tag: 'الأكثر طلباً',
    description: 'تحفة عين هاب المعتّقة لأكثر من ١٢ عاماً في جرار زجاجية داكنة. نكهة بخورية سويتية غنية، ثبات فائق على البشرة والأشمغة لأكثر من يومين.',
    notes: {
      top: 'نكهة خشبية رطبة مع لمحة جلدية راقية',
      middle: 'بخور كلمنتان الطبيعي وبلسم الراتنج',
      base: 'خشب العود العتيق ونسمات مسكية دافئة'
    },
    volumeOptions: ['ربع تولة (3 مل)', 'نصف تولة (6 مل)', 'تولة كاملة (12 مل)'],
    inStock: true,
    origin: 'غابات مالينو - إندونيسيا',
    concentration: 'دهن بيور 100% طبيعي'
  },
  {
    id: 'ayn-02',
    name: 'عطر سرمدي الإمبراطوري',
    nameEn: 'Sarmadi Imperial Parfum',
    category: 'perfumes',
    categoryNameAr: 'العطور الفاخرة',
    price: 490,
    originalPrice: 590,
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80',
    tag: 'إصدار خاص',
    description: 'توليفة ساحرة تجمع بين الهيبة الشرقية والنفحات الملكية العصرية. يفتتح بالبرغموت الإيطالي والزعفران الإيراني، ويستقر على قاعدة من عنبر الحوت الأسود والعود الكمبودي.',
    notes: {
      top: 'زعفران سوبر، برغموت صقلي، فلفل وردي',
      middle: 'ورد دمشقي، خشب الأرز الأطلسي، بخور لبان حوجري',
      base: 'عنبر أشهب نقي، عود كمبودي، باتشولي فاخر'
    },
    volumeOptions: ['50 مل Extrait de Parfum', '100 مل Extrait de Parfum'],
    inStock: true,
    origin: 'تركيب وتعتيق خاص بدار عين هاب',
    concentration: 'Extrait de Parfum (35%)'
  },
  {
    id: 'ayn-03',
    name: 'بخور مروكي دبل سوبر آصلي',
    nameEn: 'Double Super Moroki Dokhoon Wood',
    category: 'incense',
    categoryNameAr: 'البخور والدخون',
    price: 380,
    originalPrice: 450,
    rating: 5.0,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    tag: 'ضمان الزبد والكثافة',
    description: 'كسر خشب المروكي الطبيعي المشبع بدهن العود الطبيعي. يزبد بغزارة على الجمر ولا يترك أي أثر احتراق أو رائحة غير مرغوبة، يملأ المجالس بهيبة وفخامة تدوم.',
    notes: {
      top: 'رائحة العود المروكي التقليدي المتبل',
      middle: 'زبد دهني غني برائحة التوابل الشرقية',
      base: 'نفحات خشبية صمغية دافئة'
    },
    volumeOptions: ['أوقية (30 جرام)', 'ثمن كيلو (125 جرام)', 'ربع كيلو (250 جرام)'],
    inStock: true,
    origin: 'إندونيسيا - جبال مروكي العريقة',
    concentration: 'خشب عود طبيعي محسن بريسين بيور'
  },
  {
    id: 'ayn-04',
    name: 'دهن عود تراد الحطب المعتق',
    nameEn: 'Vintage Trat Woodfire Oud',
    category: 'oud-oil',
    categoryNameAr: 'دهن العود',
    price: 540,
    rating: 4.85,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    tag: 'طبخ حطب تقليدي',
    description: 'مقطر على الحطب بالطريقة التراثية القديمة من أشجار منطقة تراد التايلاندية المشهورة. يتميز بنكهة سكرية عسلية فواحة وتدرج عطري فريد يأسر الحواس.',
    notes: {
      top: 'حلاوة فواكه مجففة مع لمسات عسلية',
      middle: 'عود تراد هادئ مع نفحات زهرية خافتة',
      base: 'رائحة الحطب الهادئة والعود الدافئ'
    },
    volumeOptions: ['ربع تولة (3 مل)', 'نصف تولة (6 مل)', 'تولة كاملة (12 مل)'],
    inStock: true,
    origin: 'غابات مقاطعة تراد - تايلاند',
    concentration: 'دهن نقي صافي غير مخلوط'
  },
  {
    id: 'ayn-05',
    name: 'عطر أرستقراطي - خشب الصندل والعنبر',
    nameEn: 'Aristocrat Sandalwood & Amber',
    category: 'perfumes',
    categoryNameAr: 'العطور الفاخرة',
    price: 430,
    originalPrice: 510,
    rating: 4.75,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
    tag: 'حضور دافئ وفاخر',
    description: 'مزيج هادئ وجذاب يجمع بين صندل ميسور الهندي الفاخر مع العنبر الذهبي والمسك الحريري، مصمم ليكون عطرك المفضل في المناسبات الرسمية والاجتماعات الراقية.',
    notes: {
      top: 'هيل أخضر، هليوتروب، لافندر فرنسي ناعم',
      middle: 'خشب الصندل الميسوري، جوزة الطيب، فانيليا مدغشقر',
      base: 'عنبر ذهبي سائل، خشب الغاياك، مسك ناصع'
    },
    volumeOptions: ['100 مل Eau de Parfum'],
    inStock: true,
    origin: 'تصنيع حصري لدار عين هاب',
    concentration: 'Eau de Parfum Intense (28%)'
  },
  {
    id: 'ayn-06',
    name: 'مبخرة عين هاب الكريستالية المذهبة',
    nameEn: 'Ayn Hub Gilded Crystal Censer',
    category: 'censers',
    categoryNameAr: 'المباخر والإكسسوارات',
    price: 290,
    originalPrice: 350,
    rating: 4.95,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',
    tag: 'صناعة يدوية',
    description: 'قطعة فنية مشغولة يدوياً من الكريستال البوهيمي المصقول مع تفاصيل نحاسية مطلية بذهب عيار ٢٤ قيراط. تضفي لمسة ارستقراطية على كل مجلس وضيافة.',
    notes: {
      top: 'صينية عزل حراري من التيتانيوم',
      middle: 'قاعدة كريستال ثقيلة مقاومة للاهتزاز',
      base: 'طلاء ذهبي معالج ضد الصدأ والحرارة'
    },
    volumeOptions: ['الحجم الملكي (ارتفاع 24 سم)', 'الحجم المكتبي (ارتفاع 18 سم)'],
    inStock: true,
    origin: 'تصميم يدوي حصري',
    concentration: 'نحاس مطلي بذهب 24k وكريستال'
  },
  {
    id: 'ayn-07',
    name: 'صندوق الإهداء الملكي المتكامل',
    nameEn: 'The Royal Ayn Hub Gift Vault',
    category: 'gifts',
    categoryNameAr: 'أطقم الهدايا',
    price: 1250,
    originalPrice: 1500,
    rating: 5.0,
    reviewsCount: 83,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
    tag: 'هدية الوجهاء',
    description: 'صندوق فاخر مبطن بالمخمل الملكي يحوي: ربع تولة دهن عود كلمنتان معتق، ثمن كيلو مروكي دبل سوبر، مرش عطر سرمدي 50 مل، ومبخرة مطلية بالذهب مع ملقط خاص.',
    volumeOptions: ['صندوق جلد فاخر بنقش عين هاب الذهبي'],
    inStock: true,
    origin: 'عين هاب للضيافة الرفيعة',
    concentration: 'مجموعة متكاملة للإهداء والمناسبات'
  },
  {
    id: 'ayn-08',
    name: 'مسك الختام والحرير الأبيض',
    nameEn: 'White Silk Musk Essence',
    category: 'oud-oil',
    categoryNameAr: 'دهن العود والمسك',
    price: 220,
    originalPrice: 280,
    rating: 4.8,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=80',
    tag: 'نقاء وانتعاش',
    description: 'قطرات من النقاء الخالص برائحة النظافة الفاخرة الممزوجة ببتلات الياسمين الأبيض وزهرة اللوتس مع قاعدة مسكية مخملية تدوم طويلاً.',
    notes: {
      top: 'زهور بيضاء نقية وعبير بودري هادئ',
      middle: 'ياسمين مائي ومسك الحرير السويسري',
      base: 'عنبر أبيض وخشب الصندل الممزوج بالحليب'
    },
    volumeOptions: ['ربع تولة (3 مل)', 'نصف تولة (6 مل)', 'تولة كاملة (12 مل)'],
    inStock: true,
    origin: 'سويسرا وفرنسا معبأ في عين هاب',
    concentration: 'زيت عطري مركّز خالي من الكحول'
  },
  {
    id: 'ayn-09',
    name: 'زعفران سوبر نقيل أصلي (درجة أولى)',
    nameEn: 'Grade A+ Super Negin Royal Saffron',
    category: 'gifts',
    categoryNameAr: 'المقتنيات والزعفران',
    price: 180,
    originalPrice: 230,
    rating: 4.9,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    tag: 'مقطوف يدوياً',
    description: 'خيوط زعفران نقيل حمراء داكنة طويلة خالية من أي شوائب أو صبغات. صبغة طبيعية ذهبية ونكهة عبقة مهدئة للقهوة العربية والشاي والحلويات الفاخرة.',
    volumeOptions: ['علبة كريستال 5 جرام', 'علبة كريستال 10 جرام', 'أوقية (30 جرام)'],
    inStock: true,
    origin: 'مزارع قائنات المختارة',
    concentration: 'زعفران نقي 100% بدون إضافات'
  }
];

export const BRAND_VALUES = [
  {
    icon: 'ShieldCheck',
    title: 'أصالة مضمونة ١٠٠٪',
    description: 'نستورد أخشاب العود والأدهان من غاباتها الطبيعية ونرفض أي خلط أو تحسين صناعي.'
  },
  {
    icon: 'Sparkles',
    title: 'تعتيق بطرق تراثية',
    description: 'تعتيق مستمر لسنوات في بيئات محكمة تمنح الدهن العمق والثبات والانتشار الفارق.'
  },
  {
    icon: 'Truck',
    title: 'شحن فاخر ومحمي',
    description: 'توصيل مبرد وسريع لجميع مدن المملكة ودول الخليج العربي بتغليف هدايا ملكي.'
  },
  {
    icon: 'Award',
    title: 'استشارة عطرية خاصة',
    description: 'مستشارون متخصصون في العود لمساعدتك على انتقاء الروائح الملائمة لذوقك ومناسباتك.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    name: 'الشيخ عبدالمحسن السبيعي',
    location: 'الرياض، المملكة العربية السعودية',
    rating: 5,
    comment: 'دهن كلمنتان مالينو من عين هاب شيء استثنائي، جربت أدهان كثيرة في السوق ولكن هذا النقاء والفوحان البخوري السويتي لا يعلى عليه. بارك الله لكم في بضاعتكم.',
    productName: 'دهن عود كلمنتان مالينو',
    date: 'قبل 4 أيام'
  },
  {
    id: 't-02',
    name: 'د. نورة الهاشمي',
    location: 'أبوظبي، الإمارات العربية المتحدة',
    rating: 5,
    comment: 'عطر سرمدي الإمبراطوري أصبح توقيعي العطري في كل الاجتماعات والمؤتمرات. ثباته يتجاوز اليوم الكامل وكل من يقابلني يسألني عن سر هذا العبير.',
    productName: 'عطر سرمدي الإمبراطوري',
    date: 'قبل أسبوع'
  },
  {
    id: 't-03',
    name: 'أحمد بن طلال الكندري',
    location: 'الكويت العاصمة',
    rating: 5,
    comment: 'البخور المروكي دبل سوبر كميته وجودته تبيض الوجه أمام الضيوف في ديوانيتنا. الزبد كثيف والريحة تشرح الصدر وتستمر بالساعات.',
    productName: 'بخور مروكي دبل سوبر',
    date: 'قبل أسبوعين'
  }
];
