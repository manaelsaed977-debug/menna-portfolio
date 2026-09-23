import React, { useState, useEffect } from 'react';
import { PORTFOLIO_INFO, METRIC_STATS } from '../data/portfolioData';
import { Sparkles, FileText, Terminal, ArrowUpRight, ShieldCheck, MapPin, Award, BookOpen, Music } from 'lucide-react';
import { toggleCalmMusic, subscribeCalmMusic, isMusicPlaying } from '../utils/calmAudio';

interface AboutSectionProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [isMusicActive, setIsMusicActive] = useState(false);

  useEffect(() => {
    setIsMusicActive(isMusicPlaying());
    const unsubscribe = subscribeCalmMusic((playing) => {
      setIsMusicActive(playing);
    });
    return unsubscribe;
  }, []);

  const handleAvatarClick = () => {
    const active = toggleCalmMusic();
    setIsMusicActive(active);
  };
  return (
    <section id="about" className="py-20 border-b border-white/10 tech-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-blue-400 font-mono-tech text-xs tracking-widest uppercase mb-3">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>IDENTITY & MISSION ARCHITECTURE</span>
        </div>

        {/* Main Bento Layout matching reference poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Portrait & Biography */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#080a0f] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                
                {/* Thumbnail Avatar */}
                <div 
                  onClick={handleAvatarClick}
                  title="اضغط لتشغيل / إيقاف الموسيقى الهادئة / Click to play/pause calm ambient music"
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 shadow-lg cursor-pointer transition-all duration-300 select-none ${
                    isMusicActive 
                      ? 'border-emerald-400 scale-105 shadow-emerald-500/40 ring-2 ring-emerald-500/40' 
                      : 'border-blue-500/40 hover:border-emerald-400 shadow-blue-600/20 hover:scale-102'
                  }`}
                >
                  <img
                    src="/menna-portrait.jpg"
                    alt="Menna Sabah"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-blue-600/10"></div>
                  {isMusicActive && (
                    <div className="absolute inset-0 bg-emerald-950/40 flex items-center justify-center">
                      <Music className="w-5 h-5 text-emerald-300 animate-pulse" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
                      Menna Sabah
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  </div>
                  <p className="text-xs font-mono-tech text-blue-400">
                    Computer Science Student · Faculty of Computers and Information (FCI)
                  </p>
                  <p className="text-xs font-mono-tech text-neutral-400 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    <span>Cairo, Egypt</span>
                    <span>·</span>
                    <span>Age: 20</span>
                  </p>
                </div>
              </div>

              {/* Core Bio from User Persona */}
              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                <p>
                  I am a 20-year-old Computer Science student at the Faculty of Computers and Information. I am a passionate coder, robotics &amp; IoT developer, and I practice Karate which taught me discipline, focus, and resilience under pressure.
                </p>
                <div className="p-4 rounded-xl bg-blue-950/20 border-l-2 border-blue-500 text-blue-200 font-syne font-semibold text-base sm:text-lg">
                  &ldquo;I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI.&rdquo;
                </div>
                <p className="text-sm text-neutral-400">
                  My vision is to integrate Artificial Intelligence into the petroleum and energy sector in Egypt. I aspire to build intelligent systems for predictive maintenance, drilling optimization, and safety enhancement for industry giants like <strong className="text-white">ENPPI</strong>, <strong className="text-white">PETROJET</strong>, <strong className="text-white">BP</strong>, and <strong className="text-white">Eni</strong>.
                </p>
                <p className="text-sm text-neutral-400">
                  By leveraging machine learning, I aim to revolutionize operational efficiency across deepwater platforms: developing real-time anomaly detection for offshore drilling rigs and predictive analytics to minimize costly downtime for subsea operations.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
              <button
                id="about-resume-download-btn"
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>INSPECT & DOWNLOAD CV</span>
              </button>

              <button
                id="about-quiet-code-btn"
                onClick={onOpenTerminal}
                className="px-4 py-3 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-neutral-300 font-mono-tech text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>VIEW QUIET CODE</span>
              </button>
            </div>

          </div>

          {/* Right Column: Big High-Impact Statistics (matching reference poster numbers) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {METRIC_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-[#080a0f] hover:border-blue-500/40 flex flex-col justify-between transition-all"
                >
                  <div className="text-blue-500 font-syne font-extrabold text-4xl sm:text-5xl mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div>
                    <div className="font-syne font-bold text-sm text-white">
                      {stat.label}
                    </div>
                    <div className="font-mono-tech text-[11px] text-neutral-400 mt-0.5">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic & Sector Vision Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/90 to-[#080b12] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-blue-400 uppercase">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>FACULTY OF COMPUTERS & INFORMATION</span>
              </div>
              <h4 className="font-syne font-bold text-lg text-white">
                Preparing for Egypt&apos;s Next Energy Decade
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Egypt&apos;s role as a regional energy hub hinges on digitalizing deepwater assets. My academic research and independent models are engineered to integrate seamlessly into existing WITSML rig streams.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active Candidate for Energy Engineering Internships</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
