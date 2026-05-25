import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { Eye, Rocket, Award, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

function Counter({ from = 0, to, duration = 2 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeAccordion, setActiveAccordion] = useState('vision');

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image with Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <img
                alt="Professional Office Environment"
                className="rounded-xl shadow-2xl w-full h-[450px] md:h-[600px] object-cover border border-primary/10"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                onError={(e) => { 
                  e.target.src = 'https://lh3.googleusercontent.com/aida/ADBb0ugfbNml8ljVCIUuKgzC-fqi3eoL6EspAlf2zpuMlMQV4UjxJpeSfEBhNzqnGvnP-dMyj1dHTbD-LwMdjI74wNTiOsUZhDalz2nw0cbNibZTBscrV1GuV9QUnGGxQX5sselptp5KDdUneME83-jpa5vMFgk-1mkbTQS2jNzO1L4sDuj7nAaQkYZib9GRXHgljfmjrYGCG_kaZNVDjFTd3TK0gj3vqL64qzRCZiCEEM8M6XubEaQxRag-H9Y'; 
                }}
              />
              
              {/* Badge overlaying the image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-primary/5 hidden md:block hover:translate-y-[-4px] transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/15 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary font-extrabold text-2xl leading-none">
                      <Counter from={0} to={28} />+
                    </p>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">{t.about.yearsBadge}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 bg-secondary/15 w-24 h-24 rounded-lg -z-10" />
          </motion.div>

          {/* Right Column: Description & Vision/Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
                {t.about.badge}
              </span>
              <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight">
                {t.about.titleText} <span className="text-secondary">{t.about.titleAccent}</span>
              </h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full" />
            </div>

            <div className="space-y-6 font-normal">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t.about.philosophy}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t.about.desc}
              </p>
            </div>

            {/* Accordion Dropdowns for Vision & Mission */}
            <div className="space-y-4 pt-2">
              
              {/* Vision Dropdown */}
              <div className="border border-primary/10 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'vision' ? null : 'vision')}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Eye className="w-5 h-5" />
                    </div>
                    <span className="text-base font-extrabold">{t.about.visionTitle}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${activeAccordion === 'vision' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {activeAccordion === 'vision' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-50/50">
                        {t.about.visionDesc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mission Dropdown */}
              <div className="border border-primary/10 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'mission' ? null : 'mission')}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <span className="text-base font-extrabold">{t.about.missionTitle}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${activeAccordion === 'mission' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {activeAccordion === 'mission' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-gray-50/50">
                        <ul className="space-y-3 text-sm text-gray-600 font-normal">
                          {t.about.missionItems.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            <div className="pt-4">
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
              >
                {t.about.learnMore}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
