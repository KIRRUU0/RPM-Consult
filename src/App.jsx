import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SpecialSolutions from './components/SpecialSolutions';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Values from './components/Values';
import Clients from './components/Clients';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MainApp() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeView, setActiveView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to hash on mount for direct URL landings
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1);
      
      const hashToView = {
        'hero': 'home',
        'values': 'home',
        'clients': 'home',
        'about': 'about',
        'vision-mission': 'about',
        'special-solutions': 'services',
        'services': 'services',
        'leadership': 'team',
        'contact': 'home'
      };
      
      const mappedView = hashToView[elementId];
      if (mappedView) {
        setActiveView(mappedView);
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            if (window.lenis) {
              window.lenis.scrollTo(element, { offset: -80 });
            } else {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }, 400); // Wait slightly longer for initial render
      }
    }
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateTo = (view, elementId) => {
    if (view !== activeView) {
      setActiveView(view);
      
      setTimeout(() => {
        if (elementId) {
          const element = document.getElementById(elementId);
          if (element) {
            if (window.lenis) {
              window.lenis.scrollTo(element, { offset: -80 });
            } else {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            window.history.pushState(null, null, `#${elementId}`);
            return;
          }
        }
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0 });
        }
        window.history.pushState(null, null, ' ');
      }, 350); // Sync with Framer Motion fade-out duration
    } else {
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          window.history.pushState(null, null, `#${elementId}`);
          return;
        }
      }
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.history.pushState(null, null, ' ');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header activeView={activeView} navigateTo={navigateTo} />
      <main className="flex-grow pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Hero navigateTo={navigateTo} />
              <Values />
              <Clients />
              <Contact />
            </motion.div>
          )}
          {activeView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <About />
              <VisionMission />
            </motion.div>
          )}
          {activeView === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <SpecialSolutions />
              <Services />
            </motion.div>
          )}
          {activeView === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Leadership />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer activeView={activeView} navigateTo={navigateTo} />

      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-container text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/10 flex items-center justify-center cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <MainApp />
  );
}

export default App;
