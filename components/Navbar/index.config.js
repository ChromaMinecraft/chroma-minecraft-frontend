export const links = [
  { href: '', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'information', label: 'Information' },
  { href: 'blog', label: 'Blog' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
