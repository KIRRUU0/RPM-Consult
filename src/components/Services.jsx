import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, BarChart3, Gavel, Users2, Check } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Tax Services',
      icon: <Landmark className="w-8 h-8 text-primary" />,
      items: [
        'Tax Compliance & Returns',
        'Strategic Tax Advisory',
        'Tax Diagnostic Review',
        'Transfer Pricing Documentation',
        'Tax Litigation & Dispute Support',
      ],
      gradient: 'from-primary/10 to-primary/5',
      iconColor: 'bg-primary/15',
    },
    {
      title: 'Accounting',
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      items: [
        'Sleek Bookkeeping Services',
        'Financial Statements Reporting',
        'Accounts Consolidation',
        'Management Reporting & Analysis',
      ],
      gradient: 'from-secondary/15 to-secondary/5',
      iconColor: 'bg-secondary/15',
    },
    {
      title: 'Legal Services',
      icon: <Gavel className="w-8 h-8 text-primary" />,
      items: [
        'Legal Risk Assessment',
        'Advisory & Compliance Checks',
        'Corporate Dispute Resolution',
        'Company Establishment & Licensing',
      ],
      gradient: 'from-primary/10 to-primary/5',
      iconColor: 'bg-primary/15',
    },
    {
      title: 'HR Consulting',
      icon: <Users2 className="w-8 h-8 text-secondary" />,
      items: [
        'HR Strategic Planning',
        'Talent Management Systems',
        'Organizational Architecture Design',
        'Company Policy Development',
      ],
      gradient: 'from-secondary/15 to-secondary/5',
      iconColor: 'bg-secondary/15',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl"
          >
            Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            Comprehensive solutions tailored to navigate complex legal and financial landscapes.
          </motion.p>
        </div>

        {/* Bento/Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px -15px rgba(0, 107, 44, 0.15)',
              }}
              className="glass-card rounded-xl overflow-hidden shadow-sm flex flex-col h-full border border-primary/10 transition-all duration-300"
            >
              {/* Card Header with Light Accent Gradient */}
              <div className={`p-8 bg-gradient-to-br ${service.gradient} border-b border-primary/5 flex flex-col items-start gap-4`}>
                <div className={`p-3 rounded-lg ${service.iconColor} flex items-center justify-center`}>
                  {service.icon}
                </div>
                <h3 className="font-extrabold text-xl text-primary mt-2">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-8 bg-white flex-grow flex flex-col justify-between">
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-normal">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-0.5 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
