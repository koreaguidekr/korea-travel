export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-accent text-korea-gold text-xl">한국</span>
              <span className="font-display text-xl font-semibold text-gray-900">Discover Korea</span>
            </div>
            <p className="font-body text-gray-700 text-white/40 text-sm max-w-xs font-light">
              Your guide to experiencing the beauty, culture, and cuisine of South Korea.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            {[
              { label: 'About Korea', href: '#about' },
              { label: 'Destinations', href: '#destinations' },
              { label: 'Food', href: '#food' },
              { label: 'Culture', href: '#culture' },
              { label: 'Travel Tips', href: '#tips' },
              { label: 'Plan Your Trip', href: '#cta' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-body text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-gray-700 text-white/30 text-xs">
            © {year} Discover Korea. Built with ❤️ for travelers.
          </p>
          <p className="font-body text-white/30 text-xs">
            Images courtesy of{' '}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
