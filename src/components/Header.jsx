import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Monitor, Mail, MailQuestion, ExternalLink } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Special', href: '#special-solutions' },
    { name: 'Our Comprehensive', href: '#services' },
    { name: 'Our Satisfied', href: '#clients' },
    { name: 'Our Key', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll handler for mobile nav — closes menu then scrolls to section
  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 320);
  };

  const portalLinks = [
    { name: 'Control Panel', href: 'http://www.rakapradiptamahawira.com/cpanel', icon: <Monitor className="w-4 h-4 text-secondary" /> },
    { name: 'WebMail 1 (IP)', href: 'http://103.229.73.24/webmail/', icon: <Mail className="w-4 h-4 text-primary" /> },
    { name: 'WebMail 2 (Domain)', href: 'http://www.rakapradiptamahawira.com/webmail/', icon: <MailQuestion className="w-4 h-4 text-primary-container" /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5' : 'bg-white/80 backdrop-blur-sm py-4'} border-b border-primary/5`}>
      <nav className="flex justify-between items-center px-4 md:px-margin-desktop h-14 w-full max-w-container-max mx-auto">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            alt="RPM Consult Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/ADBb0uiSwr79SyjRLAT_NZzZzXsMr9piRHeF_Z17e2qNHN5AXzLVNvBokxoZe1ojqf3C5LravN98jQ2xgTEoTFwnifCMOb4PRxDS0GtCDpKK0DExdQOQzLeZUx6wI81t4qqKY7gZa3sL2QsdUKRuVraVwWuu02vCcNAr527dy-gXEAdXEgcUDlS4fUYT23eYz8OgU_XnkkS9myUQXjyjvDTGMo2PmaPqfJtnLA7GOaSebcuVB7qamUnkQxXgjCY"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div>
            <span className="block font-bold text-lg leading-none text-primary uppercase tracking-tight">RPM Consult</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold block mt-0.5">Raka Pradipta Mahawira</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-5 2xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="font-bold text-[11px] xl:text-xs 2xl:text-sm text-gray-600 hover:text-primary relative py-2 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full whitespace-nowrap"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons (Portal Dropdown, Language Switcher, Get Started) */}
        <div className="hidden xl:flex items-center gap-3 xl:gap-4 relative shrink-0">
          

          {/* Staff Portal Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPortalOpen(!portalOpen)}
              onBlur={() => setTimeout(() => setPortalOpen(false), 200)}
              className="flex items-center gap-1.5 px-3 py-2 border border-primary/20 rounded-md font-semibold text-xs xl:text-sm text-primary hover:bg-primary/5 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              {t.nav.portal}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${portalOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {portalOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50"
                >
                  <div className="px-4 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-1.5 mb-1.5">
                    Internal Resources
                  </div>
                  {portalLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="bg-primary text-white px-4 xl:px-6 py-2 rounded-md font-semibold text-xs xl:text-sm hover:bg-primary-container hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-primary/10 whitespace-nowrap shrink-0"
          >
            {t.nav.getStarted}
          </a>
        </div>

        {/* Mobile Navigation Toggle & Mobile Lang Switcher */}
        <div className="flex items-center gap-3 xl:hidden">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden w-full bg-white border-t border-gray-100 mt-2 px-6 py-4 space-y-4 shadow-inner"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="font-semibold text-base text-gray-700 hover:text-primary hover:bg-primary/5 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <hr className="border-gray-100" />

            <div className="space-y-3">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">{t.nav.portal}</span>
              <div className="grid grid-cols-1 gap-2">
                {portalLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 border border-gray-100 transition-all text-sm font-semibold text-gray-700"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleMobileNavClick(e, '#contact')}
                className="block text-center bg-primary text-white py-3 rounded-md font-semibold text-sm shadow-md hover:bg-primary-container transition-colors"
              >
                {t.nav.getStarted}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
