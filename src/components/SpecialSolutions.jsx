import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gavel, ShieldAlert, ChevronDown } from 'lucide-react';

const solutions = [
  {
    id: 1,
    icon: <Gavel className="w-6 h-6 text-primary" />,
    title: 'Tax Litigation',
    desc: `Tax disputes potentially occur in the recent era of business and varies model of transactions. Most of the disputes resulted in Tax Audit. Taxpayers are having rights in solving the cases through objection and tax appeal or even judicial review to supreme court. In RPM Consult, we will help Clients to review and conclude best chances to deal with objection and appeal. We will also assist Clients during verification process in objection and trial process in appeal, defending Client's position by providing best defending arguments and evidence. We believe that the very best way to settle a case is that our Clients, along with RPM Consult, is diligently and totally prepared for trials and closing. Combining proven experiences, insights and strong presentation as per the Laws will give advantage for most cases. Maximizing the chance for the Clients to win the case would be our ultimate goal.`,
  },
  {
    id: 2,
    icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
    title: 'Audit For Preliminary Evidence',
    desc: `This Audit is a higher level of tax audit with the highest risk of tax crime penalties for Taxpayer. Once we are in a condition to deal with this audit we will provide a good way and solution for the Clients. We believe that collaboration between our experienced team and Client to develop best arguments based on the Laws, key informations and defending evidence in the case, would result in good settlement of the audit and avoid the highest risk of tax crime penalty for the Clients. We would maximize best results for the stakeholders.`,
  },
];

function AccordionItem({ sol, idx, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-primary/30 shadow-lg' : 'border-primary/10 shadow-sm hover:shadow-md hover:border-primary/20'
      }`}
    >
      {/* Header — clickable */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
            isOpen ? 'bg-primary/12' : 'bg-primary/8 group-hover:bg-primary/12'
          }`}>
            {sol.icon}
          </div>
          <h3 className={`font-extrabold text-lg md:text-xl transition-colors duration-200 ${
            isOpen ? 'text-primary' : 'text-gray-800 group-hover:text-primary'
          }`}>
            {sol.title}
          </h3>
        </div>

        {/* Chevron */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-primary text-white rotate-180' : 'bg-primary/10 text-primary'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Divider when open */}
      {isOpen && <div className="h-px bg-primary/10 mx-6" />}

      {/* Dropdown Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${sol.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 py-5 text-gray-600 text-sm md:text-base leading-relaxed font-normal">
              {sol.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SpecialSolutions() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden scroll-mt-20" id="special-solutions">

      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-special" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#006b2c" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-special)" />
        </svg>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title + Accordions */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight uppercase mb-4">
                Our Special Solutions
              </h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full mb-6" />

              {/* Intro paragraph */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                As a Taxpayer, there might be a risk in fulfilling tax obligations, that is Tax Disputes. Tax dispute could be end up in Tax Court, District Court or even in Supreme Court. In RPM Consult, we will provide best efforts in defending Client's position in Tax Disputes and best results for the Stakeholders.
              </p>
            </motion.div>

            {/* Accordion List */}
            <div className="space-y-4">
              {solutions.map((sol, idx) => (
                <AccordionItem
                  key={sol.id}
                  sol={sol}
                  idx={idx}
                  isOpen={openId === sol.id}
                  onToggle={() => handleToggle(sol.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Minimalist Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <img 
              src="src\assets\special\Mikha.imageworks_41412.jpg"
              alt="Our Special Solutions Graphic" 
              className="rounded-2xl w-full h-[400px] md:h-[480px] object-cover shadow-xl border border-primary/10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
