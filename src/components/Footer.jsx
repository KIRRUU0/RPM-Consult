import React, { useState } from 'react';
import { Linkedin, Globe, Shield, Send, Check } from 'lucide-react';
import logoImg from '../assets/Logo RPM/Logo RPM Consult.png';

export default function Footer({ activeView, navigateTo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      <div className="max-w-container-max mx-auto">
        {/* Logo row */}
        <div className="mb-8 border-b border-white/5 pb-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home', 'hero');
            }}
            className="inline-flex items-center group"
          >
            <img
              alt="RPM Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              src={logoImg}
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Info & Brand */}
          <div className="space-y-6">
            <p className="text-white/60 text-sm leading-relaxed">
              PT Raka Pradipta Mahawira (RPM Consult) provides professional integrated Legal, Tax & Business Solutions.
            </p>
            <div className="text-white/70 text-sm space-y-2 pt-2">
              <p><strong>Email:</strong> <a href="mailto:raka_pm@rpm-consult.com" className="hover:text-white transition-colors">raka_pm@rpm-consult.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+6281286866654" className="hover:text-white transition-colors">0812 8686 6654</a></p>
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
              Our Offices
            </h4>
            <div className="space-y-4 text-white/70 text-sm">
              <div className="space-y-1">
                <p className="font-bold text-white text-xs uppercase tracking-wider">PIK 2 Office (Headquarters)</p>
                <p className="text-xs leading-relaxed text-white/60">
                  PIK 2 Soho Manhattan Hoek No. 5, Lt. 3, Salembaran Jati, Kosambi, Tangerang, Banten 15214
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white text-xs uppercase tracking-wider">Alam Sutera Office</p>
                <p className="text-xs leading-relaxed text-white/60">
                  Ruko The Prominence Blok 38D No. 49-50, Jl. Jalur Sutera Boulevard - Alam Sutera, Tangerang, Banten 15143
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Portals & cPanel */}
          <div className="space-y-6">
            <h4 className="font-bold text-secondary-container uppercase tracking-widest text-xs">
              Staff Portals &amp; Domains
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
                <a
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('about', 'about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('team', 'leadership');
                  }}
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-secondary-container uppercase tracking-widest text-xs">
              Newsletter
            </h4>
            <div className="space-y-4">
              <p className="text-white/60 text-sm leading-relaxed">
                Subscribe to receive tax regulation updates and consulting news digests.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="bg-white/5 border border-white/10 rounded-l-md px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors text-white disabled:opacity-50"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="bg-primary hover:bg-primary-container disabled:bg-primary/55 px-4 rounded-r-md transition-all flex items-center justify-center shrink-0 w-12 text-white cursor-pointer"
                >
                  {subscribed ? <Check className="w-5 h-5 text-white" /> : <Send className="w-4.5 h-4.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-secondary-container font-semibold animate-pulse">
                  Subscribed successfully! Thank you.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© 2026 PT Raka Pradipta Mahawira (RPM Consult). All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
