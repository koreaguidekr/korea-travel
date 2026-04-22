import { useEffect, useRef } from 'react';

const TIPS = [
  {
    icon: '🚇',
    category: 'Getting Around',
    title: 'Transportation',
    points: [
      'T-money card works on all buses and subways nationwide — top it up at any convenience store',
      'KTX bullet trains connect Seoul to Busan in under 3 hours',
      'Seoul metro is color-coded, multilingual, and impeccably clean',
      'Kakao Taxi app is the easiest way to hail a cab',
    ],
  },
  {
    icon: '💴',
    category: 'Money',
    title: 'Currency',
    points: [
      'Currency: Korean Won (KRW). ₩1,000 ≈ $0.75 USD',
      'ATMs at GS25 and 7-Eleven convenience stores accept foreign cards',
      'Korea is still quite cash-friendly — carry some won for street food and markets',
      'Currency exchange: Best rates at Myeongdong or Dongdaemun money changers',
    ],
  },
  {
    icon: '🙏',
    category: 'Culture',
    title: 'Etiquette',
    points: [
      'Remove shoes before entering homes and many traditional restaurants',
      'Use two hands when giving or receiving items — it shows respect',
      'Bow slightly when greeting — a 15° nod is fine for tourists',
      'Speak softly in public transport; Koreans value quietness on the go',
    ],
  },
  {
    icon: '📱',
    category: 'Connectivity',
    title: 'Staying Connected',
    points: [
      "Rent a pocket Wi-Fi or buy a SIM card at Incheon Airport's arrival hall",
      'Naver Maps works better than Google Maps in Korea',
      'Papago app is excellent for Korean translation — download offline mode',
      'Most cafes, restaurants, and public spaces offer free Wi-Fi',
    ],
  },
  {
    icon: '🌸',
    category: 'Timing',
    title: 'Best Time to Visit',
    points: [
      'Spring (Mar–May): Cherry blossoms, mild weather, festivals — highly recommended',
      'Autumn (Sep–Nov): Fiery foliage, clear skies, ideal hiking conditions',
      'Summer (Jun–Aug): Hot and humid with monsoons — but beach season in Busan',
      'Winter (Dec–Feb): Cold but magical, with ski resorts and Lunar New Year',
    ],
  },
  {
    icon: '✈️',
    category: 'Arrival',
    title: 'Getting There',
    points: [
      "Incheon International Airport (ICN) — consistently rated world's best airport",
      'AREX Express Train connects Incheon to Seoul Station in 43 minutes',
      'Gimpo Airport (GMP) handles domestic routes and some regional flights',
      'Most Western nationalities enjoy 90-day visa-free entry to Korea',
    ],
  },
];

export default function TravelTips() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
    <section id="tips" ref={sectionRef} className="bg-stone/20 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal text-korea-red font-body text-sm font-medium tracking-[0.3em] uppercase">
            Practical Guide
          </span>
          <h2 className="reveal font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-5">
            Travel Tips
          </h2>
          <p className="reveal font-body text-charcoal/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know to navigate Korea like a pro — from subways to social customs.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIPS.map((tip, i) => (
            <div
              key={tip.title}
              className="reveal bg-white rounded-2xl p-7 shadow-sm border border-stone/40 hover:border-korea-red/20 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{tip.icon}</span>
                <div>
                  <p className="text-xs font-body text-korea-red font-medium tracking-widest uppercase">{tip.category}</p>
                  <h3 className="font-display text-xl font-bold text-charcoal">{tip.title}</h3>
                </div>
              </div>
              <ul className="space-y-2.5">
                {tip.points.map((point, j) => (
                  <li key={j} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-korea-red mt-2 flex-shrink-0" />
                    <span className="font-body text-sm text-charcoal/65 leading-relaxed font-light">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Info */}
        <div className="reveal mt-10 bg-white rounded-2xl p-6 border border-stone/40 flex flex-col md:flex-row items-center gap-5">
          <span className="text-3xl flex-shrink-0">🆘</span>
          <div>
            <h4 className="font-display font-bold text-charcoal mb-1">Emergency Numbers</h4>
            <p className="font-body text-sm text-charcoal/65">
              Police: <strong>112</strong> · Ambulance / Fire: <strong>119</strong> · Tourist Hotline (24/7 English): <strong>1330</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
