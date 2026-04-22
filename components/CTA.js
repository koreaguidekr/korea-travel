import { useEffect, useRef } from 'react';

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1920&q=80&auto=format&fit=crop"
          alt="Korean lanterns at a festival"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative */}
        <div className="reveal flex justify-center mb-8">
          <div className="korean-divider w-48">
            <span className="font-accent text-korea-red text-xl">한국</span>
          </div>
        </div>

        <h2 className="reveal font-display text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
          Your Korean<br />
          <em className="text-korea-red font-normal">Adventure Awaits</em>
        </h2>

        <p className="reveal font-body text-charcoal/60 text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
          From the glittering skyline of Seoul to the serene shores of Jeju — Korea is ready to welcome you. Start planning the trip of a lifetime today.
        </p>

        {/* Action Buttons */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://visitkorea.or.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-korea-red hover:bg-red-700 text-white font-body font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-korea-red/40 hover:-translate-y-1 min-w-[220px] text-center"
          >
            Plan Your Trip →
          </a>
          <a
            href="https://www.visitseoul.net"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-charcoal/20 hover:border-korea-red text-charcoal hover:text-korea-red font-body font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 min-w-[220px] text-center"
          >
            Visit Seoul Guide
          </a>
        </div>

        {/* Social Proof */}
        <div className="reveal mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {[
            { val: '4.9★', label: 'Average visitor rating' },
            { val: '17M+', label: 'Tourists per year' },
            { val: '#1', label: 'Safest country to travel' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl font-bold text-charcoal">{item.val}</p>
              <p className="font-body text-xs text-charcoal/50 tracking-wide mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
