import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: 'Agus Priyatna',
      role: 'Tax Director',
      desc: 'Over 25 years of specialized experience in corporate tax litigation, advisory, and compliance. Helper to hundreds of corporate entities navigating Indonesian tax codes.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDZ9v5w1mDVEL7xOAK7tSeFEV2zIc3GgahaqP5Nb5_SlMdGZ-R5eoHJstdsXqM7IaeMnP4MIwQlo5SXWIWltO67DkeoayhvcLR5-qH_tS0JvHeKkCXFMAIePjlRJSoT_ZTbq4ZPRZp1v9haE7B08OxDC_tl96Tj-428L00Ak8Vr-ohAJneIwQ4JUyngpfEocu8iV6AsoxqxeEfqzzz8J7W_xKaQJNb8pfSEW3drxrJRtQeAHbDOD0c0Bv4fNWsKbYtVyevphK4uqc',
      linkedin: '#',
      email: 'raka_pm@rpm-consult.com',
    },
    {
      name: 'Jason Lathianza',
      role: 'Legal Director',
      desc: 'Expert in corporate law frameworks, dispute resolution, and driving organizational growth through ethical governance and strategic compliance mechanisms.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjmKzoL-XjENRRAqHdTJ8TJQ3hGGi0_o0CWoNsVOWHsUvUj0i8wikCwX0TA2fuMYAuZRf4P32Y3GWQMVXyVya5kOUeuzlnaRgKkdM7mua8OwRXpdC79smZPjgy9YNh-zFxc_AkYAZyePgrAK7hpIvB_WCqVgjYg8MWOY3va0iHCD_rP6uoXYInzuEYSkWHHxlcCFVWRa0wU5Zkdd0AYg6GYojbx-DHSfpXdQL7WxtzlD_SFrR7Dy7B8DtnXS1dDW7Wp8BrY-yjCo8',
      linkedin: '#',
      email: 'raka_pm@rpm-consult.com',
    },
  ];

  return (
    <section className="py-24 bg-white" id="leadership">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest"
          >
            Our Experts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl"
          >
            Executive Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            Guided by decades of collective expertise and strategic vision.
          </motion.p>
        </div>

        {/* Leaders Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center space-y-6 p-8 rounded-xl bg-surface-container-low hover:bg-white border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-between"
            >
              {/* Photo Area */}
              <div className="space-y-4">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/10 shadow-lg relative group">
                  <img
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={leader.img}
                    onError={(e) => {
                      e.target.src = leader.name.includes('Agus')
                        ? 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div>
                  <h3 className="font-extrabold text-2xl text-primary">{leader.name}</h3>
                  <p className="text-secondary font-bold text-xs tracking-widest uppercase mt-1">
                    {leader.role}
                  </p>
                </div>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed max-w-sm">
                  {leader.desc}
                </p>
              </div>

              {/* Contact Icons */}
              <div className="flex gap-4 pt-6 mt-auto border-t border-gray-100 w-full justify-center">
                <a
                  href={leader.linkedin}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={`${leader.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${leader.email}`}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={`${leader.name} Email`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
