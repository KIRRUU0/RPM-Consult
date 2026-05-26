import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import clientsStripImg from '../assets/clients_strip.png';

function AnimatedCounter({ value }) {
  const [displayValue, setDisplayValue] = useState('0');
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numericMatch[0], 10);
    const suffix = value.replace(numericMatch[0], '');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;
          const duration = 1500; // 1.5 seconds

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            if (progress < 1) {
              const currentCount = Math.floor(progress * targetNum);
              const randomOffset = Math.floor((Math.random() - 0.5) * (targetNum * 0.15));
              const displayNum = Math.max(0, Math.min(targetNum - 1, currentCount + randomOffset));
              
              setDisplayValue(`${displayNum}${suffix}`);
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={containerRef}>{displayValue}</span>;
}

export default function Clients() {
  const stats = [
    { value: '60+', label: 'Clients Served' },
    { value: '10+', label: 'Years of Experience' },
    { value: '98%', label: 'Client Satisfaction Rate' },
  ];

  const title = 'OUR SATISFIED CLIENTS';
  const subtitle = 'Hard Facts. Clear Solutions.';
  const desc = 'The Clients need to know the fact to see the issues clearly. We provide best advice based on our comprehensive knowledge to help the client to manage their tax issues.';
  const tagline = 'Ready to join our growing list of trusted partners?';
  const cta = 'Start a Conversation';

  return (
    <section className="py-24 bg-white relative overflow-hidden scroll-mt-20" id="clients">

      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-clients" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#006b2c" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-clients)" />
        </svg>
      </div>

      {/* Top decorative dots (top-right) matching reference */}
      <div className="absolute top-8 right-10 opacity-30 pointer-events-none z-0 hidden md:block">
        <svg width="90" height="90" viewBox="0 0 90 90">
          {[0,1,2,3,4].map(row =>
            [0,1,2,3,4].map(col => (
              <circle
                key={`${row}-${col}`}
                cx={col * 18 + 9}
                cy={row * 18 + 9}
                r="4"
                fill="#006b2c"
              />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">

        {/* Section Header */}
        <div className="flex flex-col mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight tracking-tight mb-4">
                {title}
              </h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl font-normal"
          >
            <p className="text-xl md:text-2xl font-extrabold text-on-background mb-3">
              {subtitle}
            </p>
            <p className="text-sm md:text-base text-outline leading-relaxed">
              {desc}
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-14"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-1 bg-surface-container-low rounded-2xl px-6 py-5 border border-outline-variant/40"
            >
              <span className="font-extrabold text-3xl md:text-4xl text-primary">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-sm text-outline font-medium leading-snug">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Infinite Scrolling Logo Strip Marquee — full bleed */}
      <div className="relative w-full overflow-hidden mt-6 mb-16 py-6 border-y border-primary/5 bg-white flex items-center">
        {/* Fade masks on left & right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="clients-marquee-strip flex items-center">
          <img
            src={clientsStripImg}
            alt="Clients Logos Strip"
            className="h-[90px] md:h-[108px] w-auto object-contain shrink-0 crisp-image"
          />
          <img
            src={clientsStripImg}
            alt="Clients Logos Strip"
            className="h-[90px] md:h-[108px] w-auto object-contain shrink-0 crisp-image"
          />
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl px-8 py-6 border border-primary/10"
        >
          <p className="text-lg md:text-xl font-bold text-on-background text-center sm:text-left leading-snug">
            {tagline}
          </p>
          <a
            href="#contact"
            className="flex-none bg-primary text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary-container transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            {cta}
          </a>
        </motion.div>
      </div>

    </section>
  );
}
