import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, FileText, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#040507] border-t border-white/10 font-mono-tech text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-blue-400">
              MS
            </div>
            <div>
              <div className="font-syne font-bold text-white text-sm">
                MENNA SABAH
              </div>
              <div className="text-[11px] text-neutral-500">
                AI Software Engineer · Energy Sector Intelligence
              </div>
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={onOpenTerminal}
              className="text-neutral-400 hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Quiet Code</span>
            </button>
            <button
              onClick={onOpenResume}
              className="text-neutral-400 hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#simulator" className="hover:text-white transition-colors">
              Rig Simulator
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Menna Sabah · Faculty of Computers and Information (FCI).
          </div>

          <div className="flex items-center gap-2 text-neutral-400">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>Targeting Operational Excellence: ENPPI · PETROJET · BP · Eni</span>
          </div>

          <div>
            Cairo, EG [{PORTFOLIO_INFO.coordinates}]
          </div>
        </div>

      </div>
    </footer>
  );
};
