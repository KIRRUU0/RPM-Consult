import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Monitor, Mail, MailQuestion, ExternalLink } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';
import logoImg from '../assets/Logo RPM/Logo RPM Consult.png';

export default function Header({ activeView, navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
    {
      name: language === 'id' ? 'Beranda' : 'Home',
      viewId: 'home',
      dropdownItems: [
        { name: language === 'id' ? 'Nilai Utama Kami' : 'Our Core Values', elementId: 'values' },
        { name: language === 'id' ? 'Klien Kredibel Kami' : 'Our Satisfied Clients', elementId: 'clients' },
        { name: language === 'id' ? 'Hubungi Kami' : 'Contact Us', elementId: 'contact' }
      ]
    },
    {
      name: language === 'id' ? 'Tentang Kami' : 'About',
      viewId: 'about',
      dropdownItems: [
        { name: language === 'id' ? 'Tentang Kami' : 'About Us', elementId: 'about' },
        { name: language === 'id' ? 'Visi & Misi' : 'Vision & Mission', elementId: 'vision-mission' },
      ]
    },
    {
      name: language === 'id' ? 'Layanan' : 'Services',
      viewId: 'services',
      dropdownItems: [
        { name: language === 'id' ? 'Solusi Khusus' : 'Special Solutions', elementId: 'special-solutions' },
        { name: language === 'id' ? 'Layanan Komprehensif' : 'Comprehensive Solutions', elementId: 'services' },
      ]
    },
    {
      name: language === 'id' ? 'Tim Kami' : 'Our Team',
      viewId: 'team',
      dropdownItems: [
        { name: language === 'id' ? 'Tim Utama Kami' : 'Our Key Person', elementId: 'leadership' },
      ]
    }
  ];

  const handleSubItemClick = (e, link, subItem) => {
    e.preventDefault();
    navigateTo(link.viewId, subItem.elementId);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const portalLinks = [
    { name: 'Control Panel', href: 'http://www.rakapradiptamahawira.com/cpanel', icon: <Monitor className="w-4 h-4 text-secondary" /> },
    { name: 'WebMail 1 (IP)', href: 'http://103.229.73.24/webmail/', icon: <Mail className="w-4 h-4 text-primary" /> },
    { name: 'WebMail 2 (Domain)', href: 'http://www.rakapradiptamahawira.com/webmail/', icon: <MailQuestion className="w-4 h-4 text-primary-container" /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5' : 'bg-white/80 backdrop-blur-sm py-4'} border-b border-primary/5`}>
      <nav className="flex justify-between items-center px-4 md:px-margin-desktop h-14 w-full max-w-container-max mx-auto">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('home', 'hero');
          }}
          className="flex items-center group"
        >
          <img
            alt="RPM Consult Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src={logoImg}
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-5 2xl:gap-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigateTo(link.viewId, null)}
                className={`flex items-center gap-1 font-bold text-[11px] xl:text-xs 2xl:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeView === link.viewId ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                <span>{link.name}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-gray-400 group-hover:text-primary ${activeDropdown === link.name ? 'rotate-180 text-primary' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-0 mt-1 w-64 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50"
                  >
                    {link.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={`#${subItem.elementId}`}
                        onClick={(e) => handleSubItemClick(e, link, subItem)}
                        className="block px-4 py-2.5 text-xs xl:text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors font-medium border-l-2 border-transparent hover:border-primary text-left cursor-pointer"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Buttons (Portal Dropdown, Language Switcher, Contact button) */}
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
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home', 'contact');
            }}
            className="bg-primary text-white px-4 xl:px-6 py-2 rounded-md font-semibold text-xs xl:text-sm hover:bg-primary-container hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-primary/10 whitespace-nowrap shrink-0"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
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
              {navLinks.map((link) => {
                const isDropdownOpen = mobileDropdownOpen === link.name;
                return (
                  <div key={link.name} className="w-full">
                    <button
                      onClick={() => setMobileDropdownOpen(isDropdownOpen ? null : link.name)}
                      className="w-full flex items-center justify-between font-semibold text-base text-gray-700 hover:text-primary hover:bg-primary/5 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer text-left"
                    >
                      <span className={activeView === link.viewId ? 'text-primary font-bold' : ''}>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50/50 rounded-lg mx-2 mb-2 pl-4 border-l border-gray-200"
                        >
                          <div className="py-2 space-y-1">
                            {link.dropdownItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={`#${subItem.elementId}`}
                                onClick={(e) => handleSubItemClick(e, link, subItem)}
                                className="block py-2.5 text-sm text-gray-600 hover:text-primary transition-colors text-left"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
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
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  navigateTo('home', 'contact');
                }}
                className="block text-center bg-primary text-white py-3 rounded-md font-semibold text-sm shadow-md hover:bg-primary-container transition-colors"
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
