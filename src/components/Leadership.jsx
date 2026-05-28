import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X, Briefcase, GraduationCap } from 'lucide-react';
import teamData from '../data/team.json';
import agusImg from '../assets/leadership/Agus Priyatna, S.E., M.M., CFRM.jpg';
import jasonImg from '../assets/leadership/Jason Lathianza S.H., M.Kn..jpg';

const localImages = {
  agusImg,
  jasonImg,
};

export default function Leadership() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [expanded, setExpanded] = useState(false);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPerson]);

  const categories = [
    { id: 'all', name: "All" },
    { id: 'directors', name: "Directors" },
    { id: 'advisors', name: "Advisors & Managers" },
    { id: 'seniors', name: "Senior Consultants" },
    { id: 'juniors', name: "Junior Consultants" },
    { id: 'support', name: "Support Team" },
  ];

  // Map image identifiers to imported local images, or use the Unsplash URLs
  const team = teamData.map(person => ({
    ...person,
    img: localImages[person.img] || person.img
  }));

  const filteredTeam = activeTab === 'all'
    ? team
    : team.filter(person => person.category === activeTab);

  const displayLimit = 8;
  const displayedTeam = (activeTab === 'all' && !expanded)
    ? filteredTeam.slice(0, displayLimit)
    : filteredTeam;

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden scroll-mt-20" id="leadership">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl">
            Our Key Person
          </h2>
          <div className="h-1.5 w-24 bg-secondary rounded-full mx-auto" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base pt-2">
            Supported by trusted experts with high integrity and extensive experience in law, taxation, accounting, and business consulting.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-5xl mx-auto px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setExpanded(false);
              }}
              className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                  : 'bg-white text-primary border border-primary/10 hover:bg-primary/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedTeam.map((person) => (
              <motion.div
                key={person.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.25, layout: { type: 'tween', ease: 'easeOut', duration: 0.25 } }}
                onClick={() => setSelectedPerson(person)}
                className="bg-white rounded-xl overflow-hidden border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full"
              >
                {/* Photo Area */}
                <div className="relative pt-[100%] w-full bg-gray-100 overflow-hidden border-b border-primary/5">
                  <img
                    alt={person.name}
                    src={person.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const male = [1, 2, 3, 5, 6, 9, 10, 12, 17];
                      if (male.includes(person.id)) {
                        e.target.src = `https://images.unsplash.com/photo-${person.id % 2 === 0 ? '1500648767791-00dcc994a43e' : '1506794778202-cad84cf45f1d'}?q=80&w=400&auto=format&fit=crop`;
                      } else {
                        e.target.src = `https://images.unsplash.com/photo-${person.id % 2 === 0 ? '1580489944761-15a19d654956' : '1544005313-94ddf0286df2'}?q=80&w=400&auto=format&fit=crop`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold bg-primary px-3 py-1 rounded-full shadow">View Bio</span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-base md:text-lg text-primary leading-tight group-hover:text-secondary transition-colors duration-300 min-h-[4.5rem] md:min-h-[5rem]">
                      {person.name.split(',')[0]}
                      {person.name.includes(',') && (
                        <span className="text-xs md:text-sm font-semibold text-gray-500 block sm:inline">
                          , {person.name.substring(person.name.indexOf(',') + 1)}
                        </span>
                      )}
                    </h3>
                    <p className="text-secondary font-bold text-xs uppercase tracking-wider">
                      {person.role}
                    </p>
                  </div>
                  
                  {/* Credentials Preview */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-gray-100">
                    {person.credentials.slice(0, 2).map((cred, i) => (
                      <span key={i} className="text-[10px] bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded font-medium">
                        {cred}
                      </span>
                    ))}
                    {person.credentials.length > 2 && (
                      <span className="text-[10px] bg-gray-50 text-gray-400 border border-gray-100 px-2 py-0.5 rounded font-medium">
                        +{person.credentials.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        {activeTab === 'all' && filteredTeam.length > displayLimit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-3 rounded-lg font-bold text-xs md:text-sm bg-primary hover:bg-primary-container text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {expanded ? 'Show Less' : 'View All Professionals'}
            </button>
          </div>
        )}

        {/* Detailed Biography Modal Popup */}
        <AnimatePresence>
          {selectedPerson && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              data-lenis-prevent
              className="fixed inset-0 bg-black/70 backdrop-blur-none md:backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPerson(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-primary/10 relative max-h-[90vh] flex flex-col md:flex-row transform-gpu"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPerson(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-primary transition-all duration-200 shadow border border-gray-100 cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Avatar/Photo */}
                <div className="w-full md:w-2/5 relative min-h-[260px] md:min-h-full bg-gray-100 shrink-0">
                  <img
                    alt={selectedPerson.name}
                    src={selectedPerson.img}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const male = [1, 2, 3, 5, 6, 9, 10, 12, 17];
                      if (male.includes(selectedPerson.id)) {
                        e.target.src = `https://images.unsplash.com/photo-${selectedPerson.id % 2 === 0 ? '1500648767791-00dcc994a43e' : '1506794778202-cad84cf45f1d'}?q=80&w=400&auto=format&fit=crop`;
                      } else {
                        e.target.src = `https://images.unsplash.com/photo-${selectedPerson.id % 2 === 0 ? '1580489944761-15a19d654956' : '1544005313-94ddf0286df2'}?q=80&w=400&auto=format&fit=crop`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                </div>

                {/* Right Side: Biodata Text */}
                <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-[85vh] space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-extrabold text-2xl text-primary leading-tight">
                        {selectedPerson.name}
                      </h3>
                      <p className="text-secondary font-bold text-sm uppercase tracking-wider mt-1">
                        {selectedPerson.role}
                      </p>
                    </div>

                    <div className="space-y-2 border-t border-b border-gray-100 py-4">
                      {selectedPerson.degree && (
                        <div className="flex items-start gap-2.5 text-xs text-gray-600">
                          <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span><strong>Education:</strong> {selectedPerson.degree}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-2.5 text-xs text-gray-600">
                        <Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Certifications &amp; Credentials:</strong>{' '}
                          {selectedPerson.credentials.join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line font-normal">
                      {selectedPerson.bio}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
