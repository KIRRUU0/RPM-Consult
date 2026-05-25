import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function Values() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [
    <ShieldCheck className="w-8 h-8 text-secondary-container" />,
    <Handshake className="w-8 h-8 text-secondary-container" />,
    <Star className="w-8 h-8 text-secondary-container" />,
    <TrendingUp className="w-8 h-8 text-secondary-container" />
  ];

  const valuesList = t.values.list.map((val, idx) => ({
    ...val,
    icon: icons[idx],
    highlight: idx >= 2 // Excellence and Succeed have thick borders
  }));

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white" id="values">
      {/* Background SVG Grid Pattern - Ultra Lightweight & Zero network cost */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-white text-3xl md:text-4xl lg:text-5xl"
          >
            {t.values.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-secondary-container mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-layer">
          {valuesList.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-xl bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 ${
                val.highlight
                  ? 'border-2 border-secondary-container scale-[1.01]'
                  : 'border border-white/20'
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6 inline-block bg-white/10 p-3 rounded-lg">
                {val.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-extrabold text-lg mb-3 flex flex-wrap items-center gap-2">
                {val.title}
                {val.highlight && (
                  <span className="text-[10px] bg-secondary-container text-on-secondary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Core
                  </span>
                )}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-3xl italic font-semibold text-secondary-container tracking-wide leading-relaxed">
            &quot;{t.values.slogan}&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
