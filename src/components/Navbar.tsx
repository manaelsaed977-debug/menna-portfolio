import React, { useState, useEffect } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Terminal, FileText, Activity, ShieldCheck, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050608]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-blue-500/50 group-hover:border-blue-400 transition-all shadow-md shadow-blue-500/20 shrink-0">
              <img 
                src="/menna-portrait.jpg" 
                alt="Menna Sabah" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050608] animate-pulse"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-syne font-bold text-white tracking-wider text-sm sm:text-base group-hover:text-blue-300 transition-colors">
                  MENNA SABAH
                </span>
                <span className="text-[10px] font-mono-tech uppercase px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 hidden sm:inline-block">
                  AI · Energy
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-mono-tech hidden md:block">
                FCI · Cairo, EG [{PORTFOLIO_INFO.coordinates}]
              </p>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 font-mono-tech text-xs tracking-wider text-neutral-400">
            <a 
              href="#projects" 
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
            >
              // 01.PROJECTS
            </a>
            <a 
              href="#simulator" 
              className="px-3 py-1.5 rounded-md hover:text-blue-400 hover:bg-blue-500/5 transition-colors flex items-center gap-1 text-blue-400/90 font-medium"
            >
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              02.RIG SIMULATOR
            </a>
            <a 
              href="#process" 
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
            >
              // 03.PROCESS
            </a>
            <a 
              href="#tools" 
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
            >
              // 04.STACK
            </a>
            <a 
              href="#about" 
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-colors"
            >
              // 05.ABOUT
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quiet Code Terminal Button */}
            <button
              id="nav-quiet-code-btn"
              onClick={onOpenTerminal}
              title="Open Quiet Code PyTorch Model"
              className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-blue-500/40 bg-white/5 hover:bg-blue-950/20 text-neutral-300 hover:text-blue-300 font-mono-tech text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Quiet Code</span>
            </button>

            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg border border-white/15 hover:border-white/40 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono-tech text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              <span>Resume</span>
            </button>

            {/* Direct Connect CTA */}
            <a
              id="nav-contact-btn"
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-syne font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-white/10 bg-[#08090d]/95 backdrop-blur-xl rounded-xl p-4 space-y-3">
            <div className="flex flex-col gap-2 font-mono-tech text-xs">
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 text-neutral-300"
              >
                01. PROJECTS
              </a>
              <a 
                href="#simulator" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded bg-blue-600/10 border border-blue-500/20 text-blue-400 font-medium"
              >
                02. RIG ANOMALY SIMULATOR
              </a>
              <a 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 text-neutral-300"
              >
                03. ENGINEERING PROCESS & KARATE
              </a>
              <a 
                href="#tools" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 text-neutral-300"
              >
                04. TECH STACK
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 text-neutral-300"
              >
                05. ABOUT MENNA
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/5 text-neutral-300"
              >
                06. CONTACT
              </a>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-300 font-mono-tech text-xs flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                Quiet Code
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2 rounded-lg border border-white/10 bg-white/5 text-white font-mono-tech text-xs flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                Resume CV
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
