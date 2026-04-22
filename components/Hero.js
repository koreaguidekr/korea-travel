import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1538485399081-7c8272727e42?w=1920&q=85&auto=format&fit=crop"
          alt="Seoul cityscape at night with N Seoul Tower"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />
      </div>

      {/* Korean pattern decoration */}
      <div className="absolute top-24 right-8 md:right-16 opacity-10 select-none">
        <span className="text-white font-accent text-8xl md:text-[140px] leading-none font-light">한</span>
      </div>
      <div className="absolute bottom-24 left-8 md:left-16 opacity-10 select-none">
        <span className="text-white font-accent text-6xl md:text-[100px] leading-none font-light">국</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.1s' }}>
          <span className="inline-block font-accent text-sm tracking-[0.4em] text-korea-gold uppercase mb-6 border border-korea-gold/40 px-4 py-1.5 rounded-full">
            Welcome to South Korea
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.25s' }}
        >
          Discover
          <span className="block italic text-korea-gold font-normal">Korea</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-lg md:text-xl text-white/80 max-w-lg mx-auto mb-10 font-light leading-relaxed transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          Explore ancient culture, world-class cuisine, and breathtaking landscapes
          in the Land of the Morning Calm.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <button
            onClick={() => handleScroll('#destinations')}
            className="bg-korea-red hover:bg-red-700 text-white font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-korea-red/40 hover:-translate-y-1 min-w-[180px]"
          >
            Explore Now
          </button>
          <button
            onClick={() => handleScroll('#about')}
            className="border border-white/50 text-white hover:bg-white/10 font-body font-medium px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 min-w-[180px] backdrop-blur-sm"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
