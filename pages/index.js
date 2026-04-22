import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Destinations from '../components/Destinations';
import Food from '../components/Food';
import Culture from '../components/Culture';
import TravelTips from '../components/TravelTips';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta */}
        <title>Discover Korea — Travel Guide to South Korea</title>
        <meta
          name="description"
          content="Explore South Korea's vibrant culture, stunning destinations like Seoul, Busan & Jeju, mouthwatering cuisine, and essential travel tips for your perfect Korean adventure."
        />
        <meta name="keywords" content="South Korea travel, Visit Korea, Seoul tourism, Busan travel, Jeju Island, Korean food, K-pop travel, Korea travel guide" />
        <meta name="author" content="Discover Korea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Discover Korea — Your Ultimate Travel Guide" />
        <meta
          property="og:description"
          content="From ancient palaces to neon-lit streets — plan your dream trip to South Korea with our comprehensive travel guide."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1538485399081-7c8272727e42?w=1200&q=80"
        />
        <meta property="og:url" content="https://discoverkorea.travel" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Discover Korea" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover Korea — Travel Guide" />
        <meta
          name="twitter:description"
          content="Explore culture, food, and breathtaking destinations across South Korea."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1538485399081-7c8272727e42?w=1200&q=80"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://discoverkorea.travel" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelGuide',
              name: 'Discover Korea',
              description: 'Comprehensive travel guide to South Korea for international tourists.',
              url: 'https://discoverkorea.travel',
              about: {
                '@type': 'Country',
                name: 'South Korea',
                alternateName: 'Republic of Korea',
              },
            }),
          }}
        />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Destinations />
        <Food />
        <Culture />
        <TravelTips />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
