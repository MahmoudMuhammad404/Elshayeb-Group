import { useEffect, useState } from 'react';
import { CONTACT_COPY, COMPANY_DETAILS } from '../content.js';
import { COMPANY_LINKS, CONTACT } from '../config.js';
import { Reveal } from '../hooks/useReveal.jsx';
import { linkProps } from './linkProps.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact({ lang, topic, setTopic }) {
  const s = CONTACT_COPY[lang];
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '', 'opening', 'notReady'

  useEffect(() => setStatus(''), [lang]);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
    setStatus('');
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = s.errName;
    if (!EMAIL_RE.test(form.email.trim())) er.email = s.errEmail;
    if (!form.message.trim()) er.message = s.errMessage;
    setErrors(er);
    if (Object.keys(er).length) return;
    if (!CONTACT.email) {
      setStatus('notReady');
      return;
    }
    const subject = `Website inquiry: ${CONTACT_COPY.en.topics[topic]}`;
    const body = `${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`;
    setStatus('opening');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const info = [
    CONTACT.email && { k: 'email', v: CONTACT.email, href: `mailto:${CONTACT.email}` },
    CONTACT.phone && { k: 'phone', v: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
    CONTACT.address[lang] && { k: 'address', v: CONTACT.address[lang] },
  ].filter(Boolean);

  return (
    <section id="contact" className="sec sec-alt">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>{s.title}</h2>
          <p className="lead">{s.sub}</p>
          {info.length > 0 && (
            <dl className="info">
              {info.map((x) => (
                <div key={x.k}>
                  <dt>{s.labels[x.k]}</dt>
                  <dd>{x.href ? <a href={x.href} dir="ltr">{x.v}</a> : x.v}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="co-mini">
            <div className="co-mini-t">{s.companiesTitle}</div>
            <ul>
              {COMPANY_DETAILS.map((d) => (
                <li key={d.id}>
                  <a {...linkProps(COMPANY_LINKS[d.id], lang)}>
                    <span className="dot" aria-hidden="true" />
                    {d.name[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <form className="form" onSubmit={submit} noValidate>
            <label>
              <span>{s.name}</span>
              <input type="text" name="name" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'e-name' : undefined} />
              {errors.name && <em id="e-name" className="err">{errors.name}</em>}
            </label>
            <label>
              <span>{s.email}</span>
              <input type="email" name="email" autoComplete="email" dir="ltr" value={form.email} onChange={set('email')} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'e-email' : undefined} />
              {errors.email && <em id="e-email" className="err">{errors.email}</em>}
            </label>
            <label>
              <span>{s.topic}</span>
              <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                {Object.entries(s.topics).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </label>
            <label>
              <span>{s.message}</span>
              <textarea name="message" rows="5" value={form.message} onChange={set('message')} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'e-msg' : undefined} />
              {errors.message && <em id="e-msg" className="err">{errors.message}</em>}
            </label>
            <button type="submit" className="send">{s.send}</button>
            <p className={`form-status${status ? ' show' : ''}`} role="status" aria-live="polite">
              {status === 'opening' ? s.opening : status === 'notReady' ? s.notReady : ''}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
