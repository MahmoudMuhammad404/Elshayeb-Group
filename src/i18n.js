// Short text used inside the hero cards. Arabic strings are drafts, to be reviewed.
import { COMPANY_LINKS } from './config.js';

export const COMPANIES = [
  {
    id: 'goads',
    url: COMPANY_LINKS.goads,
    name: 'GO ADS HUB',
    logo: 'assets/goads.png',
    logoStyle: { maxWidth: 122, maxHeight: 44 },
    desc: { en: 'Content · Marketing · Media Buying', ar: 'محتوى · تسويق · شراء إعلامي' },
  },
  {
    id: 'zeroo1',
    url: COMPANY_LINKS.zeroo1,
    name: 'ZEROO1',
    logo: 'assets/zeroo1.svg',
    logoStyle: { maxWidth: 116, maxHeight: 40 },
    desc: { en: 'Programming', ar: 'برمجة' },
  },
  {
    id: 'elmedia',
    url: COMPANY_LINKS.elmedia,
    name: 'ELSHAYEB MEDIA',
    logo: 'assets/el_word.png',
    logoStyle: { width: 118 },
    desc: { en: 'Filming · Media Production', ar: 'تصوير · إنتاج إعلامي' },
  },
];
