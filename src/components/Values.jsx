import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function Values() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [
    <ShieldCheck className="w-7 h-7 text-primary" />,
    <Handshake className="w-7 h-7 text-primary" />,
    <Star className="w-7 h-7 text-primary" />,
    <TrendingUp className="w-7 h-7 text-primary" />,
  ];

  const valuesList = t.values.list.map((val, idx) => ({
    ...val,
    icon: icons[idx],
  }));

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white" id="values">
      {/* Background SVG Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
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
            className="h-1 bg-secondary-container mx-auto mt-5 rounded-full"
          />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesList.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col bg-white border border-white/20 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/15 rounded-xl">
                {val.icon}
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-base text-primary mb-3 leading-snug">
                {val.title}
              </h3>

              {/* Thin accent line */}
              <div className="w-8 h-0.5 bg-secondary rounded-full mb-4" />

              {/* Bullet Points with checkmark */}
              <ul className="space-y-2 flex-grow">
                {(val.points || []).map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug font-normal">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <p className="text-xl md:text-2xl italic font-semibold text-secondary-container tracking-wide leading-relaxed text-center max-w-3xl">
            &quot;{t.values.slogan}&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
