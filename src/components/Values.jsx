import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Star, TrendingUp } from 'lucide-react';

export default function Values() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25; // 25px max offset
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const valuesList = [
    {
      title: 'Integrity (Integritas)',
      icon: <ShieldCheck className="w-8 h-8 text-secondary-container" />,
      desc: 'Dapat diandalkan dan bertanggung jawab. Transparan dan tepercaya. Menerapkan etika bisnis tinggi dalam setiap tindakan.',
      highlight: false,
    },
    {
      title: 'Respect (Saling Menghormati)',
      icon: <Handshake className="w-8 h-8 text-secondary-container" />,
      desc: 'Membangun kepercayaan dan saling menghormati. Penuh pertimbangan terhadap perbedaan, keberagaman, serta keadilan.',
      highlight: false,
    },
    {
      title: 'Excellence (Keunggulan)',
      icon: <Star className="w-8 h-8 text-secondary-container" />,
      desc: 'Terus fokus pada kualitas terbaik. Tepat waktu, presisi, dan sangat efektif dalam penyampaian seluruh solusi layanan kami.',
      highlight: true, // Thicker accent border requested in DESIGN.md
    },
    {
      title: 'Succeed (Kesuksesan)',
      icon: <TrendingUp className="w-8 h-8 text-secondary-container" />,
      desc: 'Kolaborasi erat untuk membangun hubungan kerja yang kuat. Berkomitmen pada pencapaian profesional dan kesuksesan bersama.',
      highlight: true, // Thicker accent border requested in DESIGN.md
    },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white" id="values">
      {/* Background Image with parallax feeling */}
      <div 
        style={{ 
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        className="absolute inset-0 opacity-15 pointer-events-none"
      >
        <img
          alt="Abstract Business Pattern"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMqqlOF0GkHqE0foACEEVDm5_4VusI08upBjAta_U3J745ThFwtPygXQNAeKv76iMUI8VADOGHkJM_VIau_O1WZ80o5cmdVno7fOB6qXwQZhMPLICkNpcsasK-698DTS4Zj0LYOTkhVBXbMrkeGOQ4aD1Ve_zL8doMbyDtfKC4zMuimTDEq4CEB9_lcnpcbOvevPSddOARhbymIM3mCHtkzt-Z4AHndckqDdVs8IMSP2k3Uw0gIRAWE7oncABXfr6kQ4Uv2NvqDxs"
        />
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
            Nilai-Nilai Utama Kami
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  ? 'border-2 border-secondary-container'
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
            &quot;Proven result speaks louder than words.&quot;
          </p>
          <p className="text-xs text-white/50 uppercase tracking-widest mt-2">
            Hasil yang terbukti berbicara lebih keras daripada kata-kata
          </p>
        </motion.div>
      </div>
    </section>
  );
}
