import React from 'react';
import logoImg from '../assets/Logo RPM/Logo RPM Consult.png';

export default function Footer({ activeView, navigateTo }) {

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Info & Brand */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-white/60 text-sm leading-relaxed">
              PT Raka Pradipta Mahawira (RPM Consult) provides professional integrated Legal, Tax & Business Solutions.
            </p>
            <div className="text-white/70 text-sm space-y-2 pt-2">
              <p><strong>Email:</strong> <a href="mailto:raka_pm@rpm-consult.com" className="hover:text-white transition-colors">raka_pm@rpm-consult.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+6281286866654" className="hover:text-white transition-colors">0812 8686 6654</a></p>
            </div>
          </div>

          {/* Column 2: Kantor Kami (Our Offices) */}
          <div className="lg:col-span-4 space-y-6">
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

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-secondary-container uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-white/70 text-sm">
              <li>
                <a
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('home', 'hero');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
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
                    navigateTo('services', 'services');
                  }}
                >
                  Our Services
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
              <li>
                <a
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('home', 'contact');
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
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
