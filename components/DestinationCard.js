export default function DestinationCard({ city, description, image, tag, index }) {
  return (
    <article
      className="reveal group relative overflow-hidden rounded-3xl bg-white shadow-lg card-hover cursor-pointer"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-72 md:h-80">
        <img
          src={image}
          alt={`${city}, South Korea`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

        {/* Tag */}
        <span className="absolute top-4 left-4 bg-korea-red/90 text-white text-xs font-body font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
          {tag}
        </span>

        {/* City name on image */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="font-display text-3xl text-white font-bold">{city}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-body text-charcoal/70 text-sm leading-relaxed font-light">
          {description}
        </p>
        <div className="mt-4 flex items-center text-korea-red font-body text-sm font-semibold gap-2 group-hover:gap-3 transition-all duration-300">
          Explore
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
}
