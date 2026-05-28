import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, BarChart3, Gavel, Users2, Check, X, ShieldAlert, BadgeInfo, BookOpen } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Tax Service',
    shortDesc: 'Comprehensive tax compliance and litigation solutions covering domestic and international tax regulations.',
    highlights: [
      'Tax Compliance Support',
      'Transfer Pricing Setup',
      'Tax Audit & Litigation'
    ],
    details: 'Nowadays, business is not only dealing with domestic tax rules, but also international tax rules. Each business, either company or individual, must comply with increasingly complex tax rules. Many issues of taxation that should be dealt with, from tax compliance to tax disputes.\n\nOur tax consultants have the experience and knowledge of both local and international rules to ensure that you comply with ever-changing regulations.',
    scopes: [
      'Tax Compliance',
      'Tax Advisory',
      'Tax Diagnostic Review',
      'Tax Due Diligence',
      'Tax Facilities (i.e. tax holiday)',
      'Transfer Pricing',
      'Tax Audit assistance',
      'Tax Dispute and Litigation',
      'Merger & Acquisition',
      'Legal And Tax Consulting'
    ],
    specialSolutions: [
      {
        name: 'Tax Litigation',
        desc: 'Tax disputes often arise from tax audits. Taxpayers have rights to resolve disputes through objection and appeal processes, up to judicial review in the Supreme Court.\n\nAt RPM Consult, we assist clients in evaluating the best paths for objections and appeals. We represent clients during verification and hearings, defending their position with robust legal arguments and evidence. Maximizing the client\'s chances of winning is our ultimate goal.'
      },
      {
        name: 'Audit For Preliminary Evidence (Bukper)',
        desc: 'A higher-level tax audit involving potential tax criminal sanctions. When facing a preliminary evidence audit, our experienced team works collaboratively with clients to build strong legal defense arguments and protect stakeholders from severe penal risks.'
      }
    ]
  },
  {
    id: 2,
    title: 'Legal Service',
    shortDesc: 'Forward-looking legal solutions for compliance navigation, company set-up, and strategic risk management.',
    highlights: [
      'Legal Risk Assessment',
      'Company Set-Up Support',
      'Dispute Resolution Law'
    ],
    details: 'In today\'s fast-moving business environment, RPM Consult provides forward-thinking legal solutions that help you move with clarity, confidence, and speed. We understand your business, anticipate regulatory and market developments, and leverage technology to deliver practical legal strategies that support sustainable growth.\n\nWe work alongside you as a trusted advisor, combining legal expertise with strong commercial insight to address complex challenges across the full lifecycle of your business and transactions. Our approach is responsive, solutions-driven, and aligned with your strategic objectives.\n\nFrom structuring and managing transactions to navigating evolving legal and regulatory frameworks, RPM Consult delivers seamless, end-to-end legal support tailored to your business needs in Indonesia. Our commitment goes beyond technical excellence. We put our clients first, continuously enhance the quality of our services, and uphold the highest ethical standards in everything we do.',
    subSections: [
      {
        title: 'Legal Risk Assessment & Management',
        desc: 'RPM Consult helps businesses stay ahead of legal risks through a proactive and structured approach to risk identification and assessment. We embed legal risk awareness into your organization, establish clear accountability, and design practical systems that support smarter decisions, stronger governance, and sustainable business value.'
      },
      {
        title: 'Legal Advisory & Compliance',
        desc: 'RPM Consult helps businesses make confident decisions while remaining fully compliant with applicable laws and regulations. Our legal advisory services provide practical guidance on structuring transactions, drafting and reviewing contracts, and ensuring agreements are legally sound and commercially balanced. Complemented by strong compliance support, we translate legal requirements into clear policies, effective training, and ongoing monitoring to ensure day-to-day operations align with legal and ethical standards. By integrating advisory and compliance functions, we help clients reduce legal risk, prevent violations, and protect their reputation with regulators, business partners, and stakeholders.'
      }
    ],
    scopes: [
      'Legal Risk Assessment & Management',
      'Legal Advisory & Compliance',
      'Legal & Tax Law Bundling Consulting Service',
      'Legal Due Diligence & Diagnostic Review',
      'Human Resource Consulting',
      'Dispute Resolution',
      'Client Law & Regulations Compliance',
      'Advising Client of New Legislation',
      'Analytical Problem Solving',
      'Legislative Policy',
      'Company Establishment & Corporate Service',
      'Business License & Product Classification (HS)',
      'General Customs & Trade Advisory',
      'Certification Service',
      'Company Set-Up Consulting',
      'Customs Compliance Assessment'
    ]
  },
  {
    id: 3,
    title: 'Accounting Service',
    shortDesc: 'Reliable bookkeeping and financial compilation in strict compliance with the latest accounting standards.',
    highlights: [
      'Bookkeeping & Recording',
      'Financial Report Audit',
      'Year-End Closure Prep'
    ],
    details: 'Our reliable accounting services would help you manage your accounts. We would ensure that your books and records are following the latest local accounting regulations.',
    scopes: [
      'Bookkeeping and transaction processing',
      'Monthly financial reporting',
      'Quarterly financial reporting',
      'Year-end financial reporting & closing',
      'Accounts reconciliation & financial statement analysis'
    ]
  },
  {
    id: 4,
    title: 'Human Resource Consulting',
    shortDesc: 'Industrial relations support, employment policy compliance, labor dispute resolution, and workforce alignment.',
    highlights: [
      'Industrial Relations',
      'Employment Regulations',
      'Conflict Mediation Law'
    ],
    details: 'RPM Consult also provides Human Resource Consulting services focused on the effective management and resolution of industrial and employment disputes. We assist employers in navigating conflicts with employees through strategic, lawful, and practical approaches that prioritize business continuity and workforce harmony.',
    subSections: [
      {
        title: 'Law And Regulations Compliance',
        desc: 'RPM Consult helps organizations ensure full compliance with applicable laws, regulations, and internal governance standards through structured and practical compliance solutions. We support businesses in monitoring regulatory developments, conducting compliance reviews and risk assessments, and strengthening internal policies and controls. By promoting regulatory awareness, transparency, and accountability, we help clients mitigate legal exposure, protect their reputation, and sustain responsible business practices aligned with good corporate governance.'
      },
      {
        title: 'Dispute Resolution',
        desc: 'Our services include dispute resolution through mediation, negotiation, and conciliation, as well as support in developing compliant employment policies, drafting company regulations, and conducting internal investigations when disputes arise. With a strong emphasis on preventive measures and constructive dialogue, we help organizations minimize legal risk, ensure compliance with labor regulations, and foster a positive, productive work environment.'
      }
    ],
    scopes: [
      'Dispute resolution via mediation, negotiation, and conciliation',
      'Drafting legally compliant employment policies',
      'Formulating Company Regulations (PP) & Collective Labor Agreements (PKB)',
      'Conducting internal investigations for disciplinary issues',
      'Industrial relations risk assessment and legal compliance checks'
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  // Visual layout properties mapped by ID
  const servicesMeta = [
    { id: 1, icon: <Landmark className="w-8 h-8 text-primary" />, gradient: 'from-primary/10 to-primary/5', iconColor: 'bg-primary/15' },
    { id: 2, icon: <Gavel className="w-8 h-8 text-primary" />, gradient: 'from-primary/10 to-primary/5', iconColor: 'bg-primary/15' },
    { id: 3, icon: <BarChart3 className="w-8 h-8 text-secondary" />, gradient: 'from-secondary/15 to-secondary/5', iconColor: 'bg-secondary/15' },
    { id: 4, icon: <Users2 className="w-8 h-8 text-secondary" />, gradient: 'from-secondary/15 to-secondary/5', iconColor: 'bg-secondary/15' }
  ];

  const mergedServicesList = servicesData.map((service, index) => ({
    ...service,
    ...servicesMeta[index]
  }));

  return (
    <section className="py-24 bg-white overflow-hidden scroll-mt-20" id="services">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight">
            Our Comprehensive Solutions
          </h2>
          <div className="h-1.5 w-24 bg-secondary rounded-full mx-auto" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base pt-2">
            We provide integrated solutions in Law, Tax, Accounting, and Business to help you navigate the complex landscape of modern business regulations.
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
              <div className={`p-8 bg-gradient-to-br ${service.gradient} border-b border-primary/5 flex flex-col items-start justify-between h-[12.5rem]`}>
                <div className={`p-3 rounded-xl ${service.iconColor} flex items-center justify-center shadow-sm`}>
                  {service.icon}
                </div>
                <h3 className="font-extrabold text-lg text-primary group-hover:text-secondary transition-colors duration-300 min-h-[3.5rem] flex items-end">
                  {service.title.split(' (')[0]}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="flex-grow flex flex-col space-y-5 mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed font-normal text-left min-h-[6.5rem]">
                    {service.shortDesc}
                  </p>
                  
                  <ul className="space-y-3.5">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-500 font-medium">
                        <div className="mt-0.5 rounded-full bg-primary/10 p-0.5 flex items-center justify-center shrink-0 w-4 h-4">
                          <Check className="w-3 h-3 text-primary stroke-[3]" />
                        </div>
                        <span className="leading-tight text-left">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="text-primary font-bold text-xs inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 pt-4 border-t border-gray-50 cursor-pointer">
                  Learn More
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
              transition={{ duration: 0.2 }}
              data-lenis-prevent
              className="fixed inset-0 bg-black/70 backdrop-blur-none md:backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-primary/10 relative max-h-[90vh] flex flex-col transform-gpu"
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
                    <h4 className="font-bold text-primary text-base">Service Overview</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-normal whitespace-pre-line">
                      {selectedService.details}
                    </p>
                  </div>

                  {/* Sub Sections (for Legal & HR services) */}
                  {selectedService.subSections && (
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-primary text-base flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-secondary shrink-0" />
                        <span>Key Service Areas</span>
                      </h4>
                      <div className="space-y-4">
                        {selectedService.subSections.map((sub, idx) => (
                          <div key={idx} className="bg-primary/5 border border-primary/10 rounded-xl p-5 space-y-2">
                            <h5 className="font-extrabold text-sm text-primary">{sub.title}</h5>
                            <p className="text-xs text-gray-600 leading-relaxed font-normal">{sub.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special Solutions (for Tax litigation/Bukper) */}
                  {selectedService.specialSolutions && (
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-primary text-base flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-secondary shrink-0" />
                        <span>Special Tax Solutions</span>
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
                    <h4 className="font-bold text-primary text-base">Our Service Scopes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {selectedService.scopes.map((scope, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <div className="mt-0.5 rounded-full bg-primary/10 p-0.5 flex items-center justify-center shrink-0 w-5 h-5">
                            <Check className="w-3 h-3 text-primary stroke-[3]" />
                          </div>
                          <span className="font-normal text-xs md:text-sm leading-normal">{scope}</span>
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
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold bg-primary text-white hover:bg-primary-container shadow-sm transition-colors"
                  >
                    Consult Now
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
