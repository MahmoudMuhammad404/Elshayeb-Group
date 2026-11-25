import { useState, useEffect } from 'react';
import { UI } from './content.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Companies from './components/Companies.jsx';
import About from './components/About.jsx';
import Careers from './components/Careers.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';

const initialLang = () => {
  const q = new URLSearchParams(window.location.search).get('lang');
  if (q === 'ar' || q === 'en') return q;
  return 'en';
};

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [topic, setTopic] = useState('general');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-ar', lang === 'ar');
    document.title = UI[lang].title;
  }, [lang]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {lang === 'ar' ? 'تخطي إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>
      <Header lang={lang} onToggleLang={() => setLang(lang === 'en' ? 'ar' : 'en')} />
      <main id="main-content">
        <Hero lang={lang} />
        <Companies lang={lang} />
        <About lang={lang} />
        <Careers lang={lang} onPickTopic={setTopic} />
        <Contact lang={lang} topic={topic} setTopic={setTopic} />
      </main>
      <Footer lang={lang} />
      <Chatbot lang={lang} />
    </>
  );
}
