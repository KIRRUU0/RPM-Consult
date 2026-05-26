import React from 'react';
import { motion } from 'framer-motion';

// Full client list from the reference image
const clients = [
  { name: 'Abt Associates', abbr: 'Abt' },
  { name: 'Ascendia', abbr: 'Ascendia' },
  { name: "Bag's City", abbr: "BAG'S CITY" },
  { name: 'Reksa Honora Aditama', abbr: 'REKSA HONORA ADITAMA' },
  { name: 'BWI', abbr: 'BWI' },
  { name: 'Indonesia Mandiri Networks', abbr: 'IMN' },
  { name: 'MTS', abbr: 'MTS' },
  { name: 'DP', abbr: 'DP' },
  { name: 'EMR', abbr: 'EMR' },
  { name: 'HAS', abbr: 'HAS' },
  { name: 'Prambanan Kencana', abbr: 'PK' },
  { name: 'Barata Sentosa Kencana', abbr: 'BSK' },
  { name: 'Arista Pramudya Wardhana', abbr: 'APW' },
  { name: 'Royal Bahana Kalpena', abbr: 'ROYAL' },
  { name: 'PT Melah Karya Integrasi', abbr: 'MKI' },
  { name: 'Prolink', abbr: 'PROLINK' },
  { name: 'C.D.I', abbr: 'CDI' },
  { name: 'Angkasa Pura Airports', abbr: 'AP' },
  { name: 'Kepoo', abbr: 'Kepoo' },
  { name: 'KWB', abbr: 'KWB' },
  { name: 'KNP', abbr: 'KNP' },
  { name: 'PT Yallis Fortuna', abbr: 'YF' },
  { name: 'All Data', abbr: 'All Data' },
  { name: 'MPM Rent', abbr: 'MPM' },
  { name: 'Mata Emericity', abbr: 'mata' },
  { name: 'M.P Evans Group PLC', abbr: 'MPE' },
  { name: 'Paseban', abbr: 'PASEBAN' },
  { name: 'MNP', abbr: 'mnp' },
  { name: 'Multiply', abbr: 'MULTIPLY' },
  { name: 'PT RSUP', abbr: 'RSUP' },
  { name: 'Premindo', abbr: 'PREMINDO' },
  { name: 'Pronas', abbr: 'PRONAS' },
  { name: 'Telkominfra', abbr: 'Telkominfra' },
  { name: 'Leno Furniture', abbr: 'LENO' },
  { name: 'EZ Load Nusa Bangkit', abbr: 'EZ LOAD' },
  { name: 'Circle K', abbr: 'K' },
  { name: 'Transmarco', abbr: 'Transmarco' },
  { name: 'Radika', abbr: 'Radika' },
  { name: 'Royal Cemerlang', abbr: 'RC' },
  { name: 'ReConsult', abbr: 'reCOnsult' },
  { name: 'Apari Technologies', abbr: 'apiari' },
  { name: 'Seraphim', abbr: 'SERAPHIM' },
  { name: 'Chalidana Group', abbr: 'CHALIDANA' },
  { name: 'One Heart Honda', abbr: 'One HEART.' },
  { name: 'Tower International', abbr: 'TOWER' },
  { name: 'Terra Tota Makmur', abbr: 'RAW' },
  { name: 'Virgin Radio', abbr: 'RADIO' },
  { name: 'GG', abbr: 'GG' },
  { name: 'Esco', abbr: 'ESCO' },
  { name: 'CARS', abbr: 'CARS' },
  { name: 'Surya Cemerlang Royalindo', abbr: 'SCR' },
  { name: 'InJourney Airports', abbr: 'InJourney' },
  { name: 'Integra Adi Jaya', abbr: 'IAJ' },
  { name: 'Dwimitra', abbr: 'DWIMITRA' },
  { name: 'Fazza Royal Yantasir Simulasi', abbr: 'FAZZA' },
];

// Color palette for logo cards
const colorPalettes = [
  { bg: '#e8f5ee', text: '#006b2c', border: '#006b2c22' },
  { bg: '#fff8e8', text: '#835400', border: '#83540022' },
  { bg: '#eef4ff', text: '#1a56db', border: '#1a56db22' },
  { bg: '#fef3f2', text: '#c0392b', border: '#c0392b22' },
  { bg: '#f0f4ff', text: '#4338ca', border: '#4338ca22' },
  { bg: '#f0fdf4', text: '#15803d', border: '#15803d22' },
  { bg: '#fdf4ff', text: '#7e22ce', border: '#7e22ce22' },
  { bg: '#fff7ed', text: '#c2410c', border: '#c2410c22' },
];

function ClientCard({ client, index }) {
  const palette = colorPalettes[index % colorPalettes.length];
  return (
    <div
      className="flex-none mx-3 group"
      style={{ minWidth: '140px' }}
    >
      <div
        className="flex items-center justify-center rounded-xl px-4 py-3 h-16 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md cursor-default select-none"
        style={{
          background: palette.bg,
          border: `1.5px solid ${palette.border}`,
        }}
        title={client.name}
      >
        <span
          className="font-extrabold text-xs tracking-wide text-center leading-tight"
          style={{ color: palette.text, maxWidth: '110px' }}
        >
          {client.abbr}
        </span>
      </div>
    </div>
  );
}

export default function Clients() {
  // Split clients into 2 rows for staggered scrolling
  const row1 = clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = clients.slice(Math.ceil(clients.length / 2));

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
              <span className="font-extrabold text-3xl md:text-4xl text-primary">{stat.value}</span>
              <span className="text-sm text-outline font-medium leading-snug">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Infinite Marquee Rows — full bleed */}
      <div className="relative w-full overflow-hidden mt-4 mb-2">
        {/* Fade masks on left & right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        {/* Row 1 — scrolls LEFT */}
        <div className="flex mb-4 clients-marquee-left">
          {[...row1, ...row1, ...row1].map((client, idx) => (
            <ClientCard key={`r1-${idx}`} client={client} index={idx} />
          ))}
        </div>

        {/* Row 2 — scrolls RIGHT (reverse) */}
        <div className="flex clients-marquee-right">
          {[...row2, ...row2, ...row2].map((client, idx) => (
            <ClientCard key={`r2-${idx}`} client={client} index={idx + 4} />
          ))}
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10 mt-14">
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
