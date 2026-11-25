// All website text, English and Arabic. Arabic wording is a draft for the owner to review.
export const SECTIONS = ['companies', 'about', 'careers', 'contact'];

export const UI = {
  en: {
    nav: { companies: 'Companies', about: 'About', careers: 'Careers', contact: 'Contact' },
    langButton: 'EN / ع',
    langLabel: 'Switch language to Arabic',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    homeLabel: 'Elshayeb Group, back to top',
    title: 'Elshayeb Group | One group. Three companies.',
    visit: 'Visit website',
    comingSoon: 'Website link coming soon',
  },
  ar: {
    nav: { companies: 'الشركات', about: 'من نحن', careers: 'الوظائف', contact: 'تواصل معنا' },
    langButton: 'EN / ع',
    langLabel: 'تغيير اللغة إلى الإنجليزية',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    homeLabel: 'مجموعة الشايب، العودة للأعلى',
    title: 'مجموعة الشايب | مجموعة واحدة. ثلاث شركات.',
    visit: 'زيارة الموقع',
    comingSoon: 'رابط الموقع قريبًا',
  },
};

export const HERO = {
  en: {
    kicker: 'ELSHAYEB GROUP · PARENT COMPANY',
    title: ['One group.', 'Three companies.'],
    tagline: 'Elshayeb Group — Building businesses.. Creating opportunities.',
    cta: 'Explore Our Companies →',
  },
  ar: {
    kicker: 'مجموعة الشايب · الشركة الأم',
    title: ['مجموعة واحدة.', 'ثلاث شركات.'],
    tagline: 'مجموعة الشايب — نبني الأعمال.. ونصنع الفرص.',
    cta: 'اكتشف شركاتنا ←',
  },
};

// Order matches the hero: Go Ads Hub, Zeroo1, Elshayeb Media Production.
export const COMPANY_DETAILS = [
  {
    id: 'goads',
    logo: 'assets/goads.png',
    name: { en: 'Go Ads Hub', ar: 'Go Ads Hub' },
    tag: { en: 'STUDIO CONTENT PRODUCTION', ar: 'إنتاج محتوى استوديو' },
    slogan: { en: 'Your Studio Content Factory.', ar: 'مصنع محتوى الاستوديو الخاص بك.' },
    desc: {
      en: 'Social media content, product reels, UGC, model shoots and photography for Egypt and the Gulf.',
      ar: 'محتوى لوسائل التواصل الاجتماعي، وريلز للمنتجات، ومحتوى UGC، وجلسات تصوير للموديلز، وتصوير فوتوغرافي لمصر والخليج.',
    },
    services: {
      en: ['Social media content', 'Product reels', 'UGC', 'Model shoots', 'Photography'],
      ar: ['محتوى سوشيال ميديا', 'ريلز للمنتجات', 'UGC', 'جلسات الموديلز', 'تصوير فوتوغرافي'],
    },
  },
  {
    id: 'zeroo1',
    logo: 'assets/zeroo1.svg',
    name: { en: 'Zeroo1', ar: 'Zeroo1' },
    tag: { en: 'SOFTWARE & TECHNOLOGY', ar: 'البرمجة والتكنولوجيا' },
    slogan: { en: 'From Zero. We Build Everything.', ar: 'من الصفر. نبني كل شيء.' },
    desc: {
      en: 'Websites, mobile apps, custom systems, SaaS and CRM solutions.',
      ar: 'مواقع إلكترونية، وتطبيقات موبايل، وأنظمة مخصصة، وحلول SaaS  و CRM.',
    },
    services: {
      en: ['Websites', 'Mobile apps', 'Custom systems', 'SaaS', 'CRM solutions'],
      ar: ['مواقع إلكترونية', 'تطبيقات موبايل', 'أنظمة مخصصة', 'SaaS', 'حلول CRM'],
    },
  },
  {
    id: 'elmedia',
    logo: 'assets/el_word.png',
    name: { en: 'Elshayeb Media Production', ar: 'الشايب للإنتاج الإعلامي' },
    tag: { en: 'MEDIA PRODUCTION', ar: 'الإنتاج الإعلامي' },
    slogan: { en: 'We Produce Stories. We Create Impact.', ar: 'نصنع القصص. ونصنع الأثر.' },
    desc: {
      en: 'Commercial films, advertising, podcasts, outdoor filming and directing.',
      ar: 'أفلام تجارية، وإعلانات، وبودكاست، وتصوير خارجي، وإخراج.',
    },
    services: {
      en: ['Commercial films', 'Advertising', 'Podcasts', 'Outdoor filming', 'Directing'],
      ar: ['أفلام تجارية', 'إعلانات', 'بودكاست', 'تصوير خارجي', 'إخراج'],
    },
  },
];

export const COMPANIES_SECTION = {
  en: { eyebrow: 'OUR COMPANIES', title: 'Specialized companies.', title2: 'One shared vision.', sub: 'Each business keeps its own identity, expertise and services, under one parent group.' },
  ar: { eyebrow: 'شركاتنا', title: 'شركات متخصصة.', title2: 'رؤية واحدة مشتركة.', sub: 'كل شركة تحتفظ بهويتها وخبرتها وخدماتها، تحت مظلة مجموعة واحدة.' },
};

export const ABOUT = {
  en: {
    eyebrow: 'ABOUT',
    title: 'Specialization builds strength.',
    intro: 'Elshayeb Group is the parent company of Go Ads Hub, Zeroo1 and Elshayeb Media Production. Each company is focused on what it does best, and together they form one group.',
    tagline: 'Elshayeb Group — Building businesses.. Creating opportunities.',
    visionTitle: 'Our Vision',
    vision: 'To build a strong and evolving business group of specialized companies capable of competing and growing in their markets, while expanding into new industries.',
    missionTitle: 'Our Mission',
    mission: 'To establish and develop specialized companies that deliver meaningful value through talent, innovation and long-term trusted relationships.',
    parent: 'Parent company',
  },
  ar: {
    eyebrow: 'من نحن',
    title: 'التخصص يبني القوة.',
    intro: 'مجموعة الشايب هي الشركة الأم لـ Go Ads Hub و Zeroo1 والشايب للإنتاج الإعلامي. كل شركة تركز على ما تتقنه، وتجتمع معًا في مجموعة واحدة.',
    tagline: 'مجموعة الشايب — نبني الأعمال.. ونصنع الفرص.',
    visionTitle: 'رؤيتنا',
    vision: 'بناء مجموعة أعمال قوية ومتطورة من الشركات المتخصصة، قادرة على المنافسة والنمو في أسواقها، مع التوسع في صناعات جديدة.',
    missionTitle: 'رسالتنا',
    mission: 'تأسيس وتطوير شركات متخصصة تقدم قيمة حقيقية من خلال الكفاءات والابتكار وعلاقات الثقة طويلة الأمد.',
    parent: 'الشركة الأم',
  },
};

export const CAREERS = {
  en: {
    eyebrow: 'CAREERS',
    title: 'Be part of our journey.',
    sub: 'Explore career opportunities across our group companies.',
    hint: 'Tell us about yourself and where you would like to work.',
    cta: 'Send your details',
    areas: ['Content and media buying', 'Software and technology', 'Media production'],
  },
  ar: {
    eyebrow: 'الوظائف',
    title: 'كن جزءًا من رحلتنا.',
    sub: 'اكتشف فرص العمل في شركات المجموعة.',
    hint: 'عرّفنا بنفسك والمكان الذي تحب أن تعمل فيه.',
    cta: 'أرسل بياناتك',
    areas: ['المحتوى وشراء الإعلانات', 'البرمجة والتكنولوجيا', 'الإنتاج الإعلامي'],
  },
};

export const CONTACT_COPY = {
  en: {
    eyebrow: 'CONTACT',
    title: "Let's talk.",
    sub: 'Tell us what you need and which company can help. We will get back to you.',
    name: 'Your name',
    email: 'Email address',
    topic: 'What is this about?',
    message: 'Your message',
    send: 'Send message',
    topics: { general: 'General inquiry', goads: 'Go Ads Hub', zeroo1: 'Zeroo1', elmedia: 'Elshayeb Media Production', careers: 'Careers' },
    errName: 'Please enter your name.',
    errEmail: 'Please enter a valid email address.',
    errMessage: 'Please write a short message.',
    opening: 'Opening your email app with your message ready to send.',
    notReady: 'Our contact details are not published here yet. Your message was not sent.',
    labels: { email: 'Email', phone: 'Phone', address: 'Address' },
    companiesTitle: 'Our companies',
  },
  ar: {
    eyebrow: 'تواصل معنا',
    title: 'خلّينا نتكلم.',
    sub: 'أخبرنا بما تحتاجه وأي شركة من شركاتنا تناسبك، وسنعاود التواصل معك.',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    topic: 'موضوع الرسالة',
    message: 'رسالتك',
    send: 'إرسال الرسالة',
    topics: { general: 'استفسار عام', goads: 'Go Ads Hub', zeroo1: 'Zeroo1', elmedia: 'الشايب للإنتاج الإعلامي', careers: 'الوظائف' },
    errName: 'من فضلك اكتب اسمك.',
    errEmail: 'من فضلك اكتب بريدًا إلكترونيًا صحيحًا.',
    errMessage: 'من فضلك اكتب رسالة قصيرة.',
    opening: 'جارٍ فتح تطبيق البريد مع رسالتك جاهزة للإرسال.',
    notReady: 'بيانات التواصل لم تُنشر هنا بعد. لم يتم إرسال رسالتك.',
    labels: { email: 'البريد الإلكتروني', phone: 'الهاتف', address: 'العنوان' },
    companiesTitle: 'شركاتنا',
  },
};

export const FOOTER = {
  en: { rights: 'All Rights Reserved.', top: 'Back to top', tagline: 'Elshayeb Group — Building businesses.. Creating opportunities.' },
  ar: { rights: 'جميع الحقوق محفوظة.', top: 'العودة للأعلى', tagline: 'مجموعة الشايب — نبني الأعمال.. ونصنع الفرص.' },
};
