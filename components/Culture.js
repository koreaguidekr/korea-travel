import { useEffect, useRef } from 'react';

const CULTURE_ITEMS = [
  {
    title: 'K-Pop',
    subtitle: 'Global Music Phenomenon',
    description:
      'From BTS to BLACKPINK, Korean pop music has taken the world by storm. Visit entertainment districts in Seoul, attend a fan meeting, or catch a live performance to see why K-pop is a cultural force like no other.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop',
    accent: 'var(--korea-red)',
    tag: '음악',
  },
  {
    title: 'K-Drama',
    subtitle: 'Emotional Storytelling',
    description:
      "Korean dramas have conquered Netflix and streaming platforms worldwide. Visit iconic filming locations across Seoul — from Bukchon Hanok Village to the beaches of Jeju seen in beloved series.",
    image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80&auto=format&fit=crop',
    accent: 'var(--korea-blue)',
    tag: '드라마',
  },
  {
    title: 'Traditional Culture',
    subtitle: '5,000 Years of Heritage',
    description:
      "Witness the grandeur of Joseon-era palaces, attend a haenyeo (sea women) diving demonstration in Jeju, dress in hanbok traditional clothing, and experience the serenity of a Buddhist temple stay.",
    image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&q=80&auto=format&fit=crop',
    accent: 'var(--gold)',
    tag: '전통',
  },
];

export default function Culture() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 130);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="culture" ref={sectionRef} className="bg-charcoal py-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 select-none pointer-events-none flex items-center justify-center">
        <span className="font-accent text-white text-[400px] font-bold leading-none">문</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal text-korea-gold font-body text-sm font-medium tracking-[0.3em] uppercase">
            Korean Culture
          </span>
          <h2 className="reveal font-display text-5xl md:text-6xl font-bold text-korea-red mt-4 mb-5">
            Feel the <em className="text-korea-gold font-normal">Korean Wave</em>
          </h2>
          <p className="reveal font-body text-white/50 text-lg max-w-xl mx-auto font-light leading-relaxed">
            The Hallyu (Korean Wave) has swept the globe — but the real magic happens when you experience it in person.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="space-y-8">
          {CULTURE_ITEMS.map((item, i) => (
            <article
              key={item.title}
              className={`reveal group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="font-accent text-white/70 text-sm border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 md:p-12 flex flex-col justify-center">
                <p className="font-body text-gray/50 text-xs tracking-widest uppercase mb-3">{item.subtitle}</p>
                <h3 className="font-display text-4xl font-bold text-gray mb-4">{item.title}</h3>
                <p className="font-body text-gray/60 font-light leading-relaxed">{item.description}</p>
                <div className="mt-6 h-0.5 w-12 bg-korea-red rounded-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
