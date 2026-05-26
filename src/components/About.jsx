import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
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

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden scroll-mt-20" id="about">
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
                className="rounded-xl shadow-2xl w-full h-[450px] md:h-[550px] object-cover border border-primary/10"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                onError={(e) => { 
                  e.target.src = 'https://lh3.googleusercontent.com/aida/ADBb0ugfbNml8ljVCIUuKgzC-fqi3eoL6EspAlf2zpuMlMQV4UjxJpeSfEBhNzqnGvnP-dMyj1dHTbD-LwMdjI74wNTiOsUZhDalz2nw0cbNibZTBscrV1GuV9QUnGGxQX5sselptp5KDdUneME83-jpa5vMFgk-1mkbTQS2jNzO1L4sDuj7nAaQkYZib9GRXHgljfmjrYGCG_kaZNVDjFTd3TK0gj3vqL64qzRCZiCEEM8M6XubEaQxRag-H9Y'; 
                }}
              />
              
              {/* Experience Badge */}
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
            
            {/* Background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 bg-secondary/15 w-24 h-24 rounded-lg -z-10" />
          </motion.div>

          {/* Right Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight">
                About Us
              </h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full" />
            </div>

            <div className="space-y-5 font-normal">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t.about.philosophy}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t.about.desc1}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t.about.desc2}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t.about.desc3}
              </p>
            </div>




            {/* Slogan Quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-xl px-5 py-3 border border-primary/15">
                <span className="text-3xl leading-none font-serif text-secondary select-none">&ldquo;</span>
                <p className="text-base md:text-lg font-bold text-on-background italic leading-snug">
                  {t.about.slogan}
                </p>
                <span className="text-3xl leading-none font-serif text-secondary select-none">&rdquo;</span>
              </div>
            </motion.div>

            <div className="pt-2">
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
