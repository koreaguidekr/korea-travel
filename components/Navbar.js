import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Food', href: '#food' },
  { label: 'Culture', href: '#culture' },
  { label: 'Travel Tips', href: '#tips' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <span className="text-korea-red font-accent text-xl font-semibold tracking-wide">한국</span>
          <span className="text-charcoal font-display text-lg font-semibold tracking-tight group-hover:text-korea-red transition-colors duration-300">
            Korea
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="hover-underline text-sm font-body font-medium text-charcoal/80 hover:text-charcoal transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#cta"
          onClick={(e) => handleNav(e, '#cta')}
          className="hidden md:block bg-korea-red text-white text-sm font-body font-medium px-5 py-2.5 rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-korea-red/30 hover:-translate-y-0.5"
        >
          Plan Your Trip
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-stone/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium text-charcoal/80 hover:text-korea-red transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => handleNav(e, '#cta')}
            className="mt-2 bg-korea-red text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-red-700 transition-colors"
          >
            Plan Your Trip
          </a>
        </div>
      </div>
    </nav>
  );
}
