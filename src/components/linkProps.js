import { isRealLink } from '../config.js';
import { UI } from '../content.js';

/** Props for a company website link. While the URL is still the "#" placeholder the link does nothing. */
export function linkProps(url, lang) {
  if (isRealLink(url)) return { href: url, target: '_blank', rel: 'noopener noreferrer' };
  return {
    href: '#',
    onClick: (e) => e.preventDefault(),
    title: UI[lang].comingSoon,
    'aria-disabled': 'true',
    'data-placeholder': 'true',
  };
}
