import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function Hero({ navigateTo }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30; // max 15px shift
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-[920px] flex items-center overflow-hidden bg-on-background">
      {/* Background Image with Zoom animation - Optimized with Unsplash primary */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          alt="Modern Business District"
          className="w-full h-full object-cover"
          src="src/assets/hero/PHOTO-2026-02-20-13-20-03.jpg"
          onError={(e) => { 
            e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0HOISwjyTZd1P04JQYd9QVk2loYnDxxFt8Tdq6kwD7whbGYA5WVAWVt7udp9SasLkYFjQ6_gThJjk6H0vfJ5-rLrQurr035yEhY2De5zy6HF7saYjPjfw6KcUxVSlNKzqSPmZV-oeNHjZ3EPQy-Xli0-FVTWfdKWktqWzrZlsTVyBmMF29LHB8n_4cKLOv0CcA0eXgio2lx2B9RrdEx1MBOizYveSRkPbhRNeTR6RLYW2b-Wx9xXKPERTlGzEy1CUemm_LoZ7qrw'; 
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      </div>

      {/* Decorative overlapping background elements */}
      <div 
        style={{ 
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        className="absolute inset-0 z-10 hidden lg:block pointer-events-none"
      >
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '35%', opacity: 0.15 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          className="absolute top-0 right-0 w-1/3 h-full bg-primary -skew-x-12 transform"
        />
      </div>

      <div className="relative z-20 max-w-container-max mx-auto px-4 md:px-margin-desktop w-full text-center lg:text-left py-20 lg:py-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="max-w-3xl space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-on-secondary font-bold text-xs md:text-sm shadow-lg shadow-secondary/15 hover:bg-opacity-95"
          >
            <ShieldCheck className="w-4.5 h-4.5 text-white" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
          >
            {t.hero.title1} <br />
            <span className="text-primary-fixed block lg:inline-block mt-2 lg:mt-0">{t.hero.title2}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                if (navigateTo) {
                  navigateTo('services', 'services');
                }
              }}
              className="uiverse-btn"
            >
              {t.hero.btnSolutions}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (navigateTo) {
                  navigateTo('home', 'contact');
                }
              }}
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 hover:scale-[1.03] active:scale-98 transition-all duration-300"
            >
              <Phone className="w-4.5 h-4.5" />
              {t.hero.btnContact}
            </a>
          </motion.div>

          {/* Philosophy Slogan */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ delay: 1 }}
            className="pt-8 border-t border-white/10"
          >
            <p className="italic text-xl md:text-2xl text-secondary-container font-semibold tracking-wide">
              &quot;{t.hero.slogan}&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
