// ---------------------------------------------------------------------------
// Things the owner needs to fill in. Nothing else in the code has to change.
// ---------------------------------------------------------------------------

// PLACEHOLDER_URL: replace each "#" with the company's real website, e.g. 'https://zeroo1.com'.
// While the value is "#", the links stay on the page and do nothing.
export const PLACEHOLDER_URL = '#';
export const COMPANY_LINKS = {
  goads: PLACEHOLDER_URL, // Go Ads Hub website
  zeroo1: PLACEHOLDER_URL, // Zeroo1 website
  elmedia: PLACEHOLDER_URL, // Elshayeb Media Production website
};

// Contact details shown in the Contact section. Leave a field empty to hide it.
// When `email` is set, the contact form opens the visitor's mail app addressed to it.
export const CONTACT = {
  email: '',
  phone: '',
  address: { en: '', ar: '' },
};

export const isRealLink = (url) => Boolean(url) && url !== '#';
