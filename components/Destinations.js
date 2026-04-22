import { useEffect, useRef } from 'react';
import DestinationCard from './DestinationCard';

const DESTINATIONS = [
  {
    city: 'Seoul',
    tag: 'Capital City',
    description:
      "Korea's dynamic capital — a city where ancient palaces like Gyeongbokgung sit next to futuristic skyscrapers. Explore the trendy Hongdae district, shop in Myeongdong, and eat your way through endless street food alleys.",
    image:
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80&auto=format&fit=crop',
  },
  {
    city: 'Busan',
    tag: 'Coastal City',
    description:
      "Korea's second city delivers sun, sea, and spectacular seafood. Walk the rainbow-painted Gamcheon Culture Village, soak up the sun at Haeundae Beach, and experience the freshest sashimi at Jagalchi Fish Market.",
    image:
      'https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&q=80&auto=format&fit=crop',
  },
  {
    city: 'Jeju',
    tag: 'Island Paradise',
    description:
      "A UNESCO-designated volcanic island of extraordinary beauty. Hike the iconic Hallasan crater, discover lava-formed caves, chase waterfalls like Cheonjiyeon, and unwind on black-sand beaches under clear skies.",
    image:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80&auto=format&fit=crop',
  },
];

export default function Destinations() {
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
    <section id="destinations" ref={sectionRef} className="bg-stone/30 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal text-korea-red font-body text-sm font-medium tracking-[0.3em] uppercase">
            Top Destinations
          </span>
          <h2 className="reveal font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-5">
            Places to Explore
          </h2>
          <p className="reveal font-body text-charcoal/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
            From buzzing cities to tranquil islands — every corner of Korea has a story waiting for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.city} {...dest} index={i} />
          ))}
        </div>

        {/* Map teaser */}
        <div className="reveal mt-16 relative overflow-hidden rounded-3xl bg-charcoal text-white p-10 md:p-14">
          <div className="relative z-10 max-w-lg">
            <p className="font-accent text-korea-gold text-sm tracking-widest uppercase mb-3">Did you know?</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
              Korea has the world's fastest average internet speed
            </h3>
            <p className="font-body text-gray-700 font-light leading-relaxed">
              Staying connected is never a problem. Purchase a T-money card or rent a pocket Wi-Fi at Incheon Airport and enjoy seamless connectivity from day one.
            </p>
          </div>
          {/* Decorative */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 select-none flex items-center justify-center">
            <span className="font-accent text-[200px] text-white font-bold leading-none">
              K
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
