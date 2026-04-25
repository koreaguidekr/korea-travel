import { useEffect, useRef } from 'react';

const STATS = [
  { value: '51M', label: 'Population' },
  { value: '5,000+', label: 'Years of History' },
  { value: '12°C', label: 'spring temperature' },
  { value: '17M+', label: 'Visitors / Year' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-cream py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Side */}
          <div>
            <div className="reveal">
              <span className="text-korea-red font-body text-sm font-medium tracking-[0.3em] uppercase">
                About the Country
              </span>
            </div>
            <h2 className="reveal font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6 leading-tight">
              Where Ancient<br />
              <em className="text-korea-red font-normal">Meets Modern</em>
            </h2>
            <p className="reveal font-body text-charcoal/70 text-lg leading-relaxed mb-5 font-light">
              South Korea is a nation of breathtaking contrasts — where centuries-old palaces
              stand in the shadow of gleaming skyscrapers, and Buddhist temples nestle between
              neon-lit streets.
            </p>
            <p className="reveal font-body text-charcoal/70 text-lg leading-relaxed mb-8 font-light">
              From the vibrant capital Seoul to the volcanic island of Jeju, Korea offers
              an experience unlike any other — a blend of deep tradition, cutting-edge technology,
              and some of the world's most beloved cuisine.
            </p>
            <div className="reveal">
              <button
                onClick={() => document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 text-korea-red font-body font-semibold hover:gap-5 transition-all duration-300 group"
              >
                Explore destinations
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="reveal relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1546874177-9e664107314e?w=800&q=80&auto=format&fit=crop"
                alt="Gyeongbokgung Palace in Seoul with mountains"
                className="w-full h-full object-cover card-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-korea-red text-white rounded-2xl p-5 shadow-xl max-w-[180px]">
              <p className="font-accent text-2xl font-semibold">2,000+</p>
              <p className="font-body text-sm text-white/80 mt-1">UNESCO Heritage Sites & National Treasures</p>
            </div>

            
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`reveal text-center p-8 bg-white rounded-2xl shadow-sm border border-stone/50`}>
              <p className="font-display text-4xl font-bold text-korea-red mb-2">{stat.value}</p>
              <p className="font-body text-sm text-charcoal/60 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
