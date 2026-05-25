import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Eye, Rocket, Award, ArrowRight } from 'lucide-react';

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
                src="https://lh3.googleusercontent.com/aida/ADBb0ugfbNml8ljVCIUuKgzC-fqi3eoL6EspAlf2zpuMlMQV4UjxJpeSfEBhNzqnGvnP-dMyj1dHTbD-LwMdjI74wNTiOsUZhDalz2nw0cbNibZTBscrV1GuV9QUnGGxQX5sselptp5KDdUneME83-jpa5vMFgk-1mkbTQS2jNzO1L4sDuj7nAaQkYZib9GRXHgljfmjrYGCG_kaZNVDjFTd3TK0gj3vqL64qzRCZiCEEM8M6XubEaQxRag-H9Y"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'; }}
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
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">Years of Excellence</p>
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
                Tentang Perusahaan Kami
              </span>
              <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight">
                Merancang Solusi Strategis untuk <span className="text-secondary">Pertumbuhan Masa Depan</span>
              </h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Secara filosofis, <span className="font-bold text-primary">&quot;Raka&quot;</span> berarti gigih, bijaksana, berpengaruh, dan kuat, <span className="font-bold text-primary">&quot;Pradipta&quot;</span> berarti cahaya terang, dan <span className="font-bold text-primary">&quot;Mahawira&quot;</span> berarti pahlawan besar.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                PT Raka Pradipta Mahawira (&quot;RPM Consult&quot;) didirikan oleh orang-orang yang berjiwa ksatria, memiliki pengaruh positif, kreatif, inovatif, serta memiliki visi dan misi yang mulia untuk memberikan dampak positif bagi seluruh pemangku kepentingan sebagai penyedia solusi Hukum, Pajak &amp; Bisnis tepercaya.
              </p>
            </div>

            {/* Vision & Mission Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Vision Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-primary/5 shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0 text-white shadow-md shadow-primary/10">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Visi Kami</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Menjadi mitra terbaik bagi para pemangku kepentingan dengan memberikan layanan profesional untuk solusi hukum, pajak, dan bisnis yang komprehensif, sekaligus menyediakan lingkungan kerja yang menyenangkan untuk memberdayakan kontribusi positif.
                  </p>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-primary/5 shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0 text-white shadow-md shadow-secondary/10">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Misi Kami</h4>
                  <ul className="text-xs text-gray-500 leading-relaxed list-decimal pl-4 space-y-1">
                    <li>Berkomitmen dalam memberikan upaya terbaik untuk hasil yang diinginkan.</li>
                    <li>Memperjuangkan keunggulan dalam pemikiran strategis serta layanan personal.</li>
                    <li>Meningkatkan upaya kolaboratif dan keunikan dalam layanan.</li>
                    <li>Menjaga sinergi dan kontribusi optimal kepada pemangku kepentingan.</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
              >
                Pelajari Lebih Lanjut Tentang Tim Kami
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
