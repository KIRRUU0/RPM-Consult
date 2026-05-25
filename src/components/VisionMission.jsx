import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function VisionMission() {
  const { language } = useLanguage();
  const t = translations[language];

  // Menggunakan fallback jika key belum ada di file translations.js
  const visionText = t.about?.vision || "To be the best partner to stakeholders by rendering professional services for comprehensive legal, tax and business solutions, while providing enjoyable working environment to empower positive contribution";
  const missionText = t.about?.mission || [
    "Committed in giving best efforts for desired results.",
    "Strive excellence in our strategic thinking, qualified and personalized service.",
    "Enhance collaborative efforts and uniqueness in providing services.",
    "Maintain synergy, long term relationship and optimum contribution to the stakeholders.",
  ];

  return (
    <section className="py-20 bg-background overflow-hidden" id="vision-mission">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card Visi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-surface-container-low p-8 lg:p-10 rounded-2xl border border-primary/5 shadow-md flex flex-col space-y-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-extrabold text-primary text-2xl lg:text-3xl">
              {language === 'id' ? 'Visi Kami' : 'Our Vision'}
            </h3>
            <div className="h-1 w-16 bg-secondary rounded-full" />
            <p className="text-gray-600 leading-relaxed text-base pt-2">
              {visionText}
            </p>
          </motion.div>

          {/* Card Misi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container-low p-8 lg:p-10 rounded-2xl border border-primary/5 shadow-md flex flex-col space-y-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-extrabold text-primary text-2xl lg:text-3xl">
              {language === 'id' ? 'Misi Kami' : 'Our Mission'}
            </h3>
            <div className="h-1 w-16 bg-secondary rounded-full" />
            
            <ul className="space-y-3 text-gray-600 leading-relaxed text-base pt-2">
              {Array.isArray(missionText) ? (
                missionText.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <p>{missionText}</p>
              )}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}