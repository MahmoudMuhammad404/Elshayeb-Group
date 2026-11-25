// Chatbot knowledge. Every answer comes from the website content; nothing is invented.
// Each intent has keywords (English and Arabic), an answer per language, an optional
// "go to section" action, and the follow-up questions to suggest next.

export const INTENTS = {
  companies: {
    q: { en: 'What are your companies?', ar: 'ما هي شركاتكم؟' },
    kw: ['compan', 'subsidiar', 'business', 'شرك', 'شركات', 'شركه'],
    a: {
      en: 'Elshayeb Group has three companies: Go Ads Hub (studio content production), Zeroo1 (software and technology) and Elshayeb Media Production (media production).',
      ar: 'مجموعة الشايب فيها ثلاث شركات: Go Ads Hub (إنتاج محتوى استوديو)، و Zeroo1 (البرمجة والتكنولوجيا)، والشايب للإنتاج الإعلامي.',
    },
    go: 'companies',
    next: ['goads', 'zeroo1', 'elmedia'],
  },
  goads: {
    q: { en: 'What does Go Ads Hub do?', ar: 'ماذا تقدم Go Ads Hub؟' },
    kw: ['go ads', 'goads', 'ads hub', 'content', 'ugc', 'reel', 'social', 'marketing', 'photograph', 'model', 'محتوى', 'جو ادز', 'اعلان', 'تسويق', 'سوشيال', 'ريلز'],
    a: {
      en: 'Go Ads Hub is the studio content factory of the group: social media content, product reels, UGC, model shoots and photography for Egypt and the Gulf.',
      ar: 'Go Ads Hub هي مصنع محتوى الاستوديو في المجموعة: محتوى لوسائل التواصل الاجتماعي، وريلز للمنتجات، ومحتوى UGC، وجلسات تصوير للموديلز، وتصوير فوتوغرافي لمصر والخليج.',
    },
    go: 'companies',
    next: ['zeroo1', 'elmedia', 'contact'],
  },
  zeroo1: {
    q: { en: 'What does Zeroo1 do?', ar: 'ماذا تقدم Zeroo1؟' },
    kw: ['zeroo', 'zero', 'software', 'program', 'develop', 'website', 'app', 'saas', 'crm', 'system', 'tech', 'برمج', 'تطبيق', 'موقع', 'مواقع', 'زيرو', 'نظام', 'انظمه', 'تكنولوج'],
    a: {
      en: 'Zeroo1 is the software and technology company: websites, mobile apps, custom systems, SaaS and CRM solutions. Its line is "From Zero. We Build Everything."',
      ar: 'Zeroo1 هي شركة البرمجة والتكنولوجيا: مواقع إلكترونية، وتطبيقات موبايل، وأنظمة مخصصة، وحلول SaaS  و CRM. وشعارها "من الصفر. نبني كل شيء."',
    },
    go: 'companies',
    next: ['goads', 'elmedia', 'contact'],
  },
  elmedia: {
    q: { en: 'What does Elshayeb Media Production do?', ar: 'ماذا تقدم الشايب للإنتاج الإعلامي؟' },
    kw: ['media', 'production', 'produc', 'film', 'video', 'advertis', 'podcast', 'direct', 'shoot', 'إنتاج', 'انتاج', 'اعلامي', 'تصوير', 'فيلم', 'افلام', 'بودكاست', 'اخراج', 'فيديو'],
    a: {
      en: 'Elshayeb Media Production is the media production company: commercial films, advertising, podcasts, outdoor filming and directing. Its line is "We Produce Stories. We Create Impact."',
      ar: 'الشايب للإنتاج الإعلامي هي شركة الإنتاج الإعلامي: أفلام تجارية، وإعلانات، وبودكاست، وتصوير خارجي، وإخراج. وشعارها "نصنع القصص. ونصنع الأثر."',
    },
    go: 'companies',
    next: ['goads', 'zeroo1', 'contact'],
  },
  about: {
    q: { en: 'Who is Elshayeb Group?', ar: 'من هي مجموعة الشايب؟' },
    kw: ['who is', 'who are', 'about elshayeb', 'about the group', 'about you', 'about us', 'parent company', 'elshayeb group', 'من انتم', 'من نحن', 'من هي', 'مجموعه الشايب', 'عن المجموعه'],
    a: {
      en: 'Elshayeb Group is the parent company of Go Ads Hub, Zeroo1 and Elshayeb Media Production. Each business keeps its own identity, expertise and services, under one group.',
      ar: 'مجموعة الشايب هي الشركة الأم لـ Go Ads Hub و Zeroo1 والشايب للإنتاج الإعلامي. كل شركة تحتفظ بهويتها وخبرتها وخدماتها، تحت مظلة مجموعة واحدة.',
    },
    go: 'about',
    next: ['vision', 'mission', 'companies'],
  },
  vision: {
    q: { en: 'What is your vision?', ar: 'ما هي رؤيتكم؟' },
    kw: ['vision', 'رؤي', 'رؤيه', 'رؤية'],
    a: {
      en: 'Our vision is to build a strong and evolving business group of specialized companies capable of competing and growing in their markets, while expanding into new industries.',
      ar: 'رؤيتنا هي بناء مجموعة أعمال قوية ومتطورة من الشركات المتخصصة، قادرة على المنافسة والنمو في أسواقها، مع التوسع في صناعات جديدة.',
    },
    go: 'about',
    next: ['mission', 'companies', 'careers'],
  },
  mission: {
    q: { en: 'What is your mission?', ar: 'ما هي رسالتكم؟' },
    kw: ['mission', 'رسال', 'رساله', 'رسالة'],
    a: {
      en: 'Our mission is to establish and develop specialized companies that deliver meaningful value through talent, innovation and long-term trusted relationships.',
      ar: 'رسالتنا هي تأسيس وتطوير شركات متخصصة تقدم قيمة حقيقية من خلال الكفاءات والابتكار وعلاقات الثقة طويلة الأمد.',
    },
    go: 'about',
    next: ['vision', 'companies', 'careers'],
  },
  careers: {
    q: { en: 'Are there job opportunities?', ar: 'هل توجد فرص عمل؟' },
    kw: ['career', 'job', 'hire', 'hiring', 'work with', 'join', 'vacanc', 'cv', 'وظيف', 'وظائف', 'عمل', 'توظيف', 'فرص', 'انضم', 'سيرة'],
    a: {
      en: 'We welcome people who want to be part of our journey. You can explore opportunities across the group companies in the Careers section and send us your details.',
      ar: 'نرحب بكل من يريد أن يكون جزءًا من رحلتنا. يمكنك استكشاف الفرص في شركات المجموعة من قسم الوظائف وإرسال بياناتك لنا.',
    },
    go: 'careers',
    next: ['contact', 'companies', 'vision'],
  },
  contact: {
    q: { en: 'How can I contact you?', ar: 'كيف أتواصل معكم؟' },
    kw: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'talk', 'تواصل', 'اتصل', 'ايميل', 'بريد', 'رقم', 'هاتف', 'رسالة لكم'],
    a: {
      en: 'Use the contact form: tell us what you need and which company can help, and we will get back to you.',
      ar: 'استخدم نموذج التواصل: أخبرنا بما تحتاجه وأي شركة من شركاتنا تناسبك، وسنعاود التواصل معك.',
    },
    go: 'contact',
    next: ['companies', 'careers', 'about'],
  },
  language: {
    q: { en: 'Is the site available in Arabic?', ar: 'هل الموقع متاح بالإنجليزية؟' },
    kw: ['arabic', 'english', 'language', 'translate', 'عربي', 'عربى', 'انجليزي', 'إنجليزي', 'لغة', 'لغه', 'ترجم'],
    a: {
      en: 'Yes. Use the EN / ع button at the top of the page to switch the whole site between English and Arabic.',
      ar: 'نعم. استخدم زر EN / ع أعلى الصفحة لتبديل الموقع كله بين العربية والإنجليزية.',
    },
    next: ['companies', 'about', 'contact'],
  },
  hello: {
    q: { en: 'Hello', ar: 'مرحبًا' },
    kw: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'salam', 'مرحبا', 'اهلا', 'أهلا', 'سلام', 'صباح', 'مساء', 'هلا'],
    a: {
      en: 'Hello, and welcome to Elshayeb Group. What would you like to know?',
      ar: 'أهلًا بك في مجموعة الشايب. ماذا تحب أن تعرف؟',
    },
    next: ['companies', 'about', 'careers'],
  },
  thanks: {
    q: { en: 'Thank you', ar: 'شكرًا' },
    kw: ['thank', 'thanks', 'شكر', 'تسلم', 'ممتاز'],
    a: {
      en: 'You are welcome. Anything else you would like to know about the group?',
      ar: 'العفو. هل تحب أن تعرف شيئًا آخر عن المجموعة؟',
    },
    next: ['companies', 'careers', 'contact'],
  },
  fallback: {
    kw: [],
    a: {
      en: 'I can help with questions about the group, its three companies, our vision and mission, careers and contact. Pick one below.',
      ar: 'أستطيع مساعدتك في الأسئلة عن المجموعة وشركاتها الثلاث ورؤيتنا ورسالتنا والوظائف والتواصل. اختر من الأسئلة التالية.',
    },
    next: ['companies', 'careers', 'contact'],
  },
};

export const START_CHIPS = ['companies', 'about', 'careers', 'contact'];

export const CHAT_UI = {
  en: {
    name: 'Elshayeb Assistant',
    online: 'Online',
    teaser: 'Ask me about the group',
    open: 'Open the assistant',
    close: 'Close the assistant',
    placeholder: 'Type your question...',
    send: 'Send',
    greeting: 'Hello. I am the Elshayeb Group assistant. Choose a question, or type your own.',
    goTo: { companies: 'Show me the companies', about: 'Go to About', careers: 'Go to Careers', contact: 'Go to Contact' },
    suggested: 'Suggested questions',
    dismiss: 'Dismiss',
  },
  ar: {
    name: 'مساعد الشايب',
    online: 'متصل',
    teaser: 'اسألني عن المجموعة',
    open: 'فتح المساعد',
    close: 'إغلاق المساعد',
    placeholder: 'اكتب سؤالك...',
    send: 'إرسال',
    greeting: 'أهلًا بك، أنا مساعد مجموعة الشايب. اختر سؤالًا أو اكتب سؤالك.',
    goTo: { companies: 'أرني الشركات', about: 'اذهب إلى من نحن', careers: 'اذهب إلى الوظائف', contact: 'اذهب إلى التواصل' },
    suggested: 'أسئلة مقترحة',
    dismiss: 'إخفاء',
  },
};

const normalize = (s) =>
  ` ${s}`
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '') // Arabic diacritics
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N} ]/gu, ' ')
    .replace(/\s+/g, ' ') + ' ';

/** Returns the id of the best matching intent for free text. */
export function matchIntent(text) {
  const t = normalize(text);
  let best = 'fallback';
  let bestScore = 0;
  for (const [id, it] of Object.entries(INTENTS)) {
    let score = 0;
    for (const k of it.kw) {
      const nk = normalize(k).trim();
      if (!nk) continue;
      const hit = nk.length <= 3 ? t.includes(` ${nk} `) : t.includes(nk);
      if (hit) score += nk.length;
    }
    if (score > bestScore) {
      best = id;
      bestScore = score;
    }
  }
  return best;
}

export const isArabicText = (s) => /[\u0600-\u06FF]/.test(s);
