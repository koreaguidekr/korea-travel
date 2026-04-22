import { useEffect, useRef } from 'react';

const FOODS = [
  {
    name: 'Korean BBQ',
    korean: '고기구이',
    description: 'Grill marinated meats tableside — bulgogi (beef) and samgyeopsal (pork belly) are the classics. Always surrounded by banchan (side dishes).',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop',
    emoji: '🥩',
  },
  {
    name: 'Bibimbap',
    korean: '비빔밥',
    description: 'A vibrant bowl of warm rice topped with seasoned vegetables, a fried egg, gochujang sauce, and sesame oil. Mix everything together and enjoy.',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&q=80&auto=format&fit=crop',
    emoji: '🍚',
  },
  {
    name: 'Kimchi',
    korean: '김치',
    description: "Korea's iconic fermented cabbage — spicy, tangy, and packed with probiotics. It's served at every meal and comes in over 200 varieties.",
    image: 'https://images.unsplash.com/photo-1583224994559-1e75fa974e02?w=600&q=80&auto=format&fit=crop',
    emoji: '🌶️',
  },
  {
    name: 'Tteokbokki',
    korean: '떡볶이',
    description: "Chewy rice cakes cooked in a fiery sweet-spicy sauce. The ultimate Korean street food — found on every corner and irresistibly addictive.",
    image: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=600&q=80&auto=format&fit=crop',
    emoji: '🍢',
  },
  {
    name: 'Japchae',
    korean: '잡채',
    description: 'Stir-fried glass noodles tossed with colorful vegetables, beef, and a savory-sweet soy sauce. A festive dish served at celebrations.',
    image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=600&q=80&auto=format&fit=crop',
    emoji: '🍜',
  },
  {
    name: 'Samgyetang',
    korean: '삼계탕',
    description: 'A nourishing whole-chicken soup stuffed with ginseng, garlic, and rice. Traditionally eaten in summer as a health remedy.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80&auto=format&fit=crop',
    emoji: '🍲',
  },
];

export default function Food() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="food" ref={sectionRef} className="bg-cream py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal text-korea-red font-body text-sm font-medium tracking-[0.3em] uppercase">
            Korean Cuisine
          </span>
          <h2 className="reveal font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-5">
            Eat Your Way<br />
            <em className="text-korea-red font-normal">Through Korea</em>
          </h2>
          <p className="reveal font-body text-charcoal/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Korean food is an adventure for the senses — bold, complex flavors built on thousands of years of culinary tradition.
          </p>
        </div>

        {/* Food Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOODS.map((food, i) => (
            <article
              key={food.name}
              className="reveal group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone/30 card-hover"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={food.image}
                  alt={`${food.name} - Korean dish`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-accent text-white/90 text-sm">{food.korean}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{food.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-charcoal">{food.name}</h3>
                </div>
                <p className="font-body text-charcoal/65 text-sm leading-relaxed font-light">
                  {food.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-12 text-center">
          <p className="font-body text-charcoal/50 text-sm italic">
            🌶️ Tip: Tell your server "덜 맵게 해주세요" (deol maepge haejuseyo) for less spice.
          </p>
        </div>
      </div>
    </section>
  );
}
