import { useCallback, useEffect, useRef, useState } from 'react';
import Robot from './Robot.jsx';
import { CHAT_UI, INTENTS, START_CHIPS, isArabicText, matchIntent } from '../chatbot/knowledge.js';

const REPLY_DELAY = 650;

export default function Chatbot({ lang }) {
  const ui = CHAT_UI[lang];
  const nextIdRef = useRef(1);
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [chatLang, setChatLang] = useState(lang);
  const [messages, setMessages] = useState(() => [{ id: 0, role: 'bot', greeting: true, lang }]);
  const [lastIntent, setLastIntent] = useState(null);
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState('');
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const timer = useRef(null);

  useEffect(() => setChatLang(lang), [lang]);
  useEffect(() => () => clearTimeout(timer.current), []);

  // Friendly nudge a few seconds after load, until the visitor opens or dismisses it.
  useEffect(() => {
    if (open || teaserDismissed) {
      setTeaser(false);
      return undefined;
    }
    const t = setTimeout(() => setTeaser(true), 3500);
    return () => clearTimeout(t);
  }, [open, teaserDismissed]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open, chatLang]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current && inputRef.current.focus({ preventScroll: true }), 220);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    if (launcherRef.current) launcherRef.current.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  const ask = useCallback(
    (intent, userText, replyLang) => {
      if (typing) return;
      clearTimeout(timer.current);
      setMessages((m) => [...m, { id: nextIdRef.current++, role: 'user', text: userText, lang: replyLang }]);
      setChatLang(replyLang);
      setTyping(true);
      timer.current = setTimeout(() => {
        setMessages((m) => [...m, { id: nextIdRef.current++, role: 'bot', intent, lang: replyLang }]);
        setLastIntent(intent);
        setTyping(false);
      }, REPLY_DELAY);
    },
    [typing],
  );

  const pick = (id) => ask(id, INTENTS[id].q[chatLang], chatLang);

  const submit = (e) => {
    e.preventDefault();
    const v = text.trim();
    if (!v || typing) return;
    const l = isArabicText(v) ? 'ar' : /[a-z]/i.test(v) ? 'en' : chatLang;
    setText('');
    ask(matchIntent(v), v, l);
  };

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth < 700) setOpen(false);
  };

  const chips = lastIntent ? INTENTS[lastIntent].next : START_CHIPS;
  const lastBotId = [...messages].reverse().find((m) => m.role === 'bot')?.id;

  return (
    <div className="bot" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {open && (
        <section className="bot-panel" role="dialog" aria-modal="false" aria-labelledby="bot-title">
          <header className="bot-hd">
            <span className="av" aria-hidden="true"><Robot head /></span>
            <div className="bot-who">
              <b id="bot-title">{ui.name}</b>
              <small><i aria-hidden="true" /> {ui.online}</small>
            </div>
            <button type="button" className="bot-x" onClick={close} aria-label={ui.close}>×</button>
          </header>
          <div className="bot-log" ref={logRef} role="log" aria-live="polite">
            {messages.map((m) => {
              const bubbleLang = m.lang;
              const body = m.role === 'user' ? m.text : m.greeting ? CHAT_UI[bubbleLang].greeting : INTENTS[m.intent].a[bubbleLang];
              const goId = m.role === 'bot' && m.id === lastBotId && m.intent ? INTENTS[m.intent].go : null;
              return (
                <div key={m.id} className={`msg from-${m.role}`}>
                  <div className="bub" dir={bubbleLang === 'ar' ? 'rtl' : 'ltr'}>{body}</div>
                  {goId && !typing && (
                    <button type="button" className="go" dir={chatLang === 'ar' ? 'rtl' : 'ltr'} onClick={() => go(goId)}>
                      {CHAT_UI[chatLang].goTo[goId]} <span aria-hidden="true">{chatLang === 'ar' ? '←' : '→'}</span>
                    </button>
                  )}
                </div>
              );
            })}
            {typing && (
              <div className="msg from-bot" aria-label="…">
                <div className="bub typing"><i /><i /><i /></div>
              </div>
            )}
            {!typing && (
              <div className="chips-q" aria-label={ui.suggested}>
                {chips.map((id) => (
                  <button key={id} type="button" onClick={() => pick(id)} dir={chatLang === 'ar' ? 'rtl' : 'ltr'}>
                    {INTENTS[id].q[chatLang]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form className="bot-in" onSubmit={submit}>
            <input
              ref={inputRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={ui.placeholder}
              aria-label={ui.placeholder}
              maxLength={200}
              autoComplete="off"
            />
            <button type="submit" disabled={!text.trim() || typing} aria-label={ui.send}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M3 11.5 20 4l-6 16-3-7z" fill="currentColor" /></svg>
            </button>
          </form>
        </section>
      )}
      {!open && teaser && (
        <div className="bot-tip">
          <button type="button" className="tip-main" onClick={() => setOpen(true)}>
            {CHAT_UI.en.teaser} · <span lang="ar" dir="rtl">اسألني</span>
          </button>
          <button type="button" className="tip-x" onClick={() => setTeaserDismissed(true)} aria-label={ui.dismiss}>×</button>
        </div>
      )}
      <button
        ref={launcherRef}
        type="button"
        className={`launcher${open ? ' is-open' : ''}`}
        onClick={() => (open ? close() : setOpen(true))}
        aria-label={open ? ui.close : ui.open}
        aria-expanded={open}
      >
        <Robot />
        <span className="ping" aria-hidden="true" />
      </button>
    </div>
  );
}
