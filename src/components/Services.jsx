import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, BarChart3, Gavel, Users2, Check, X, ShieldAlert, BadgeInfo } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  // Visual layout properties mapped by ID
  const servicesMeta = [
    { id: 1, icon: <Landmark className="w-8 h-8 text-primary" />, gradient: 'from-primary/10 to-primary/5', iconColor: 'bg-primary/15' },
    { id: 2, icon: <Gavel className="w-8 h-8 text-primary" />, gradient: 'from-primary/10 to-primary/5', iconColor: 'bg-primary/15' },
    { id: 3, icon: <BarChart3 className="w-8 h-8 text-secondary" />, gradient: 'from-secondary/15 to-secondary/5', iconColor: 'bg-secondary/15' },
    { id: 4, icon: <Users2 className="w-8 h-8 text-secondary" />, gradient: 'from-secondary/15 to-secondary/5', iconColor: 'bg-secondary/15' }
  ];

  const mergedServicesList = t.services.list.map((service, index) => ({
    ...service,
    ...servicesMeta[index]
  }));

  return (
    <section className="py-24 bg-white overflow-hidden" id="services">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
            {t.services.badge}
          </span>
          <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
          <div className="h-1.5 w-24 bg-secondary rounded-full mx-auto" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base pt-2">
            {t.services.desc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mergedServicesList.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 45px -15px rgba(0, 107, 44, 0.12)',
              }}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl overflow-hidden border border-primary/5 hover:border-primary/20 shadow-sm flex flex-col justify-between h-full transition-all duration-500 cursor-pointer group"
            >
              {/* Card Header with Accent Gradient */}
              <div className={`p-8 bg-gradient-to-br ${service.gradient} border-b border-primary/5 flex flex-col items-start gap-4`}>
                <div className={`p-3 rounded-xl ${service.iconColor} flex items-center justify-center`}>
                  {service.icon}
                </div>
                <h3 className="font-extrabold text-lg text-primary mt-2 group-hover:text-secondary transition-colors duration-300">
                  {service.title.split(' (')[0]}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
                
                <ul className="space-y-3.5">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-500 font-medium">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-0.5 flex items-center justify-center shrink-0">
                        <Check className="w-3 text-primary stroke-[3]" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button className="text-primary font-bold text-xs inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 pt-4 border-t border-gray-50 mt-auto cursor-pointer">
                  {t.services.detailBtn}
                  <BadgeInfo className="w-4 h-4 text-secondary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-primary/10 relative max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-primary transition-all duration-200 shadow border border-gray-100 cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title & Icon Banner */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${selectedService.gradient} border-b border-primary/5 flex items-center gap-4`}>
                  <div className={`p-3 rounded-xl ${selectedService.iconColor} flex items-center justify-center shadow-sm`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl md:text-2xl text-primary leading-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-secondary font-bold text-xs uppercase tracking-wider mt-0.5">PT Raka Pradipta Mahawira</p>
                  </div>
                </div>

                {/* Modal Content Scroll Area */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-8 max-h-[65vh]">
                  
                  {/* General Description */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-primary text-base">{t.services.descTitle}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-normal whitespace-pre-line">
                      {selectedService.details}
                    </p>
                  </div>

                  {/* Special Solutions (for Tax litigation/Bukper) */}
                  {selectedService.specialSolutions && (
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-primary text-base flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-secondary shrink-0" />
                        <span>{t.services.specialTitle}</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedService.specialSolutions.map((sol, index) => (
                          <div key={index} className="bg-surface-container-low p-5 rounded-xl border border-secondary/10 space-y-2">
                            <h5 className="font-extrabold text-sm text-primary">{sol.name}</h5>
                            <p className="text-xs text-gray-500 leading-relaxed font-normal whitespace-pre-line">
                              {sol.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Scopes of services */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-primary text-base">{t.services.scopeTitle}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {selectedService.scopes.map((scope, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="mt-1 rounded-full bg-primary/10 p-0.5 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-primary stroke-[3]" />
                          </div>
                          <span className="font-normal text-xs md:text-sm">{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {t.services.closeBtn}
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold bg-primary text-white hover:bg-primary-container shadow-sm transition-colors"
                  >
                    {t.services.consultBtn}
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
