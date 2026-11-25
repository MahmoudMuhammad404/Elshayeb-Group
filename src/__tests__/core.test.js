import { describe, it, expect } from 'vitest';
import { matchIntent, isArabicText } from '../chatbot/knowledge.js';
import { computeViewport, computeLayout, DESIGN_H } from '../geometry.js';
import { isRealLink } from '../config.js';

describe('chatbot knowledge', () => {
  it('matches English intents accurately', () => {
    expect(matchIntent('What companies are in the group?')).toBe('companies');
    expect(matchIntent('Tell me about Zeroo1 software and SaaS')).toBe('zeroo1');
    expect(matchIntent('I want to apply for a job')).toBe('careers');
  });

  it('matches Arabic intents with normalization', () => {
    expect(matchIntent('ما هي شركاتكم؟')).toBe('companies');
    expect(matchIntent('أريد التقديم على وظيفة')).toBe('careers');
    expect(matchIntent('أهلاً بكم')).toBe('hello');
  });

  it('falls back when no keywords match', () => {
    expect(matchIntent('xyzzy 12345')).toBe('fallback');
  });

  it('detects Arabic text', () => {
    expect(isArabicText('مرحبا')).toBe(true);
    expect(isArabicText('Hello')).toBe(false);
  });
});

describe('geometry', () => {
  it('computes viewport scale and caps offsetY on tall screens', () => {
    const desktop = computeViewport(1440, 900);
    expect(desktop.k).toBeCloseTo(900 / DESIGN_H);
    expect(desktop.offsetY).toBe(0);

    const tabletPortrait = computeViewport(1024, 1366);
    expect(tabletPortrait.offsetY).toBeLessThanOrEqual(120);
  });

  it('computes 3 valid SVG branches', () => {
    const layout = computeLayout(1440);
    expect(layout.branches).toHaveLength(3);
    layout.branches.forEach((b) => {
      expect(b.d).toMatch(/^M\d+ \d+ C /);
    });
  });
});

describe('config helpers', () => {
  it('identifies real links vs placeholder #', () => {
    expect(isRealLink('#')).toBe(false);
    expect(isRealLink('')).toBe(false);
    expect(isRealLink('https://zeroo1.com')).toBe(true);
  });
});
