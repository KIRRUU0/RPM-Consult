import React, { useState } from 'react';
import { Linkedin, Globe, Shield, Send, Check } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const portalLinks = [
    { name: 'Control Panel (cPanel)', href: 'http://www.rakapradiptamahawira.com/cpanel' },
    { name: 'WebMail Portal (IP)', href: 'http://103.229.73.24/webmail/' },
    { name: 'WebMail Portal (Domain)', href: 'http://www.rakapradiptamahawira.com/webmail/' },
  ];

  return (
    <footer className="bg-on-background text-white pt-20 pb-8 px-4 md:px-margin-desktop border-t border-white/5 relative z-10">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Info & Brand */}
        <div className="space-y-6">
          <a href="#" className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg flex items-center justify-center h-10 w-10 shrink-0 shadow-sm">
              <img
                alt="RPM Logo"
                className="h-full w-full object-contain"
                src="https://lh3.googleusercontent.com/aida/ADBb0uiSwr79SyjRLAT_NZzZzXsMr9piRHeF_Z17e2qNHN5AXzLVNvBokxoZe1ojqf3C5LravN98jQ2xgTEoTFwnifCMOb4PRxDS0GtCDpKK0DExdQOQzLeZUx6wI81t4qqKY7gZa3sL2QsdUKRuVraVwWuu02vCcNAr527dy-gXEAdXEgcUDlS4fUYT23eYz8OgU_XnkkS9myUQXjyjvDTGMo2PmaPqfJtnLA7GOaSebcuVB7qamUnkQxXgjCY"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="font-extrabold text-xl uppercase tracking-wider text-white">RPM Consult</span>
          </a>
          <p className="text-white/60 text-sm leading-relaxed">
            {t.footer.desc}
          </p>
          <div className="text-white/70 text-sm space-y-2 pt-2">
            <p><strong>Email:</strong> <a href="mailto:raka_pm@rpm-consult.com" className="hover:text-white transition-colors">raka_pm@rpm-consult.com</a></p>
            <p><strong>Telepon:</strong> <a href="tel:+6281286866654" className="hover:text-white transition-colors">0812 8686 6654</a></p>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-105"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-105"
              aria-label="Certifications"
            >
              <Shield className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Kantor Kami (Our Offices) */}
        <div className="space-y-6">
          <h4 className="font-bold text-secondary-container uppercase tracking-widest text-xs">
            {t.footer.officesTitle}
          </h4>
          <div className="space-y-4 text-white/70 text-sm">
            <div className="space-y-1">
              <p className="font-bold text-white text-xs uppercase tracking-wider">{t.footer.office1}</p>
              <p className="text-xs leading-relaxed text-white/60">
                PIK 2 Soho Manhattan Hoek No. 5, Lt. 3, Salembaran Jati, Kosambi, Tangerang, Banten 15214
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-white text-xs uppercase tracking-wider">{t.footer.office2}</p>
              <p className="text-xs leading-relaxed text-white/60">
                Ruko The Prominence Blok 38D No. 49-50, Jl. Jalur Sutera Boulevard - Alam Sutera, Tangerang, Banten 15143
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Portals & cPanel */}
        <div className="space-y-6">
          <h4 className="font-bold text-secondary-container uppercase tracking-widest text-xs">
            {t.footer.portalsTitle}
          </h4>
          <ul className="space-y-3.5 text-white/70 text-sm">
            {portalLinks.map((portal) => (
              <li key={portal.name}>
                <a
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>{portal.name}</span>
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-white/5 mt-2">
              <a className="hover:text-white transition-colors" href="#about">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#leadership">
                {t.nav.leadership}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <h4 className="font-bold text-secondary-container uppercase tracking-widest text-xs">
            {t.footer.newsletterTitle}
          </h4>
          <div className="space-y-4">
            <p className="text-white/60 text-sm leading-relaxed">
              {t.footer.newsletterDesc}
            </p>
            
            <form onSubmit={handleSubscribe} className="flex relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors text-white disabled:opacity-50"
                placeholder={t.footer.newsletterPlaceholder}
              />
              <button
                type="submit"
                disabled={subscribed}
                className="bg-primary hover:bg-primary-container disabled:bg-primary/55 px-4 rounded-r-md transition-all flex items-center justify-center shrink-0 w-12 text-white cursor-pointer"
              >
                {subscribed ? <Check className="w-5 h-5 text-white" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-secondary-container font-semibold animate-pulse">
                {t.footer.newsletterSuccess}
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© 2026 PT Raka Pradipta Mahawira (RPM Consult). {t.footer.copyright}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
