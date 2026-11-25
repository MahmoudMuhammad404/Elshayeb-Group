// Short text used inside the hero cards. Derived from COMPANY_DETAILS + COMPANY_LINKS as single source of truth.
import { COMPANY_LINKS } from './config.js';
import { COMPANY_DETAILS } from './content.js';

const HERO_META = {
  goads: {
    name: 'GO ADS HUB',
    logoStyle: { maxWidth: 122, maxHeight: 44 },
    desc: { en: 'Content · Marketing · Media Buying', ar: 'محتوى · تسويق · شراء إعلامي' },
  },
  zeroo1: {
    name: 'ZEROO1',
    logoStyle: { maxWidth: 116, maxHeight: 40 },
    desc: { en: 'Programming', ar: 'برمجة' },
  },
  elmedia: {
    name: 'ELSHAYEB MEDIA',
    logoStyle: { width: 118 },
    desc: { en: 'Filming · Media Production', ar: 'تصوير · إنتاج إعلامي' },
  },
};

export const COMPANIES = COMPANY_DETAILS.map((d) => ({
  id: d.id,
  url: COMPANY_LINKS[d.id],
  logo: d.logo,
  ...HERO_META[d.id],
}));
