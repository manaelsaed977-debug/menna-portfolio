import React, { useState, useEffect } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowDown, Globe, Sparkles, Terminal, Activity, Crosshair, Shield, Eye, EyeOff, Music, Volume2, VolumeX } from 'lucide-react';
import { toggleCalmMusic, subscribeCalmMusic, isMusicPlaying } from '../utils/calmAudio';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [isTextMoved, setIsTextMoved] = useState(false);
  const [isMusicActive, setIsMusicActive] = useState(false);

  useEffect(() => {
    setIsMusicActive(isMusicPlaying());
    const unsubscribe = subscribeCalmMusic((playing) => {
      setIsMusicActive(playing);
    });
    return unsubscribe;
  }, []);

  const handlePortraitClick = () => {
    setIsTextMoved(prev => !prev);
    const nowPlaying = toggleCalmMusic();
    setIsMusicActive(nowPlaying);
  };
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-24 sm:pt-28 pb-12 flex flex-col justify-between border-b border-white/10 tech-grid overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Top Metadata Header Row (Matching uploaded poster) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center py-2.5 px-4 rounded-xl border border-white/10 bg-[#090b10]/70 backdrop-blur-md font-mono-tech text-xs text-neutral-400">
          
          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-200 font-medium tracking-wide">AI & ROBOTICS ENGINEER | ENERGY INTELLIGENCE</span>
          </div>

          {/* Location & Coordinates */}
          <div className="flex items-center md:justify-center gap-2 text-neutral-300">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-white">CAIRO, EGYPT</span>
            <span className="text-neutral-500 text-[11px]">[{PORTFOLIO_INFO.coordinates}]</span>
          </div>

          {/* Academic / Mission */}
          <div className="flex items-center md:justify-end gap-2 text-neutral-400">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-neutral-200">FCI · 20 YEARS OLD</span>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-neutral-400 hidden sm:inline">KARATE DISCIPLINE</span>
          </div>

        </div>
      </div>

      {/* Main Massive Editorial Title & Portrait Hero Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & Vision Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Sub-eyebrow with crosshair */}
            <div className="flex items-center gap-2 font-mono-tech text-xs tracking-widest text-blue-400 uppercase">
              <Crosshair className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '12s' }} />
              <span>FACULTY OF COMPUTERS AND INFORMATION // EGYPT</span>
            </div>

            {/* Clean Professional Name - One Line */}
<div className="space-y-0 tracking-tight">
  <h1 className="font-syne font-black text-5xl sm:text-7xl xl:text-[88px] leading-[0.85] text-white tracking-tighter whitespace-nowrap">
    MENNA SABAH
  </h1>
</div>
            {/* Core Philosophy Quote from User Prompt */}
            <div className="relative pl-4 border-l-2 border-blue-500/80 space-y-2 py-1">
              <div className="flex items-center gap-2 text-blue-300 font-mono-tech text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>THE DISCIPLINE OF CODE & ENERGY</span>
              </div>
              <p className="text-xl sm:text-2xl text-neutral-100 font-syne font-bold leading-snug">
                &ldquo;I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI.&rdquo;
              </p>
              <div className="space-y-1 pt-1 max-w-2xl">
                <p className="text-sm sm:text-base text-blue-400 font-mono-tech font-semibold tracking-wide">
                  AI &amp; Robotics Engineer | IoT Developer | Karate Athlete.
                </p>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Building intelligent robots, IoT devices &amp; self-driving inspection systems for pipeline inspection, predictive maintenance, and safety automation &mdash; bridging FCI Cairo with Egypt&apos;s energy leaders: <span className="text-white font-medium">ENPPI</span>, <span className="text-white font-medium">PETROJET</span>, <span className="text-white font-medium">BP</span> &amp; <span className="text-white font-medium">Eni</span>.
                </p>
              </div>
            </div>

            {/* CTAs and Interactive Triggers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-bold text-sm tracking-wide flex items-center gap-2.5 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all cursor-pointer group"
              >
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                id="hero-rig-simulator-btn"
                href="#simulator"
                className="px-5 py-3.5 rounded-xl border border-blue-500/40 bg-blue-950/20 hover:bg-blue-900/40 text-blue-300 font-mono-tech text-xs tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                <span>LIVE RIG SIMULATOR</span>
              </a>

              <button
                id="hero-quiet-code-btn"
                onClick={onOpenTerminal}
                className="px-4 py-3.5 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-neutral-300 font-mono-tech text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-neutral-400" />
                <span>QUIET CODE [⌘]</span>
              </button>
            </div>

            {/* Target Industry Logos / Badges */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] font-mono-tech uppercase text-neutral-500 tracking-wider mb-2.5 flex items-center gap-2">
                <span>TARGET OIL & GAS INDUSTRY ECOSYSTEM:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {PORTFOLIO_INFO.targetCompanies.map((company) => (
                  <div 
                    key={company}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-neutral-900/60 font-mono-tech text-xs text-neutral-300 font-bold hover:border-blue-500/40 hover:text-blue-300 transition-colors"
                  >
                    {company}
                  </div>
                ))}
                <span className="text-xs font-mono-tech text-neutral-500 px-2">
                  + Mediterranean & Red Sea Offshore Fields
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Cinematic Portrait & Telemetry Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Decorative Corner Bracket Markers */}
              <div className="absolute -top-3 -left-3 text-blue-400 font-mono-tech text-sm select-none z-20">+</div>
              <div className="absolute -top-3 -right-3 text-blue-400 font-mono-tech text-sm select-none z-20">+</div>
              <div className="absolute -bottom-3 -left-3 text-blue-400 font-mono-tech text-sm select-none z-20">+</div>
              <div className="absolute -bottom-3 -right-3 text-blue-400 font-mono-tech text-sm select-none z-20">+</div>

              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-2xl -z-10"></div>

              {/* Portrait & Full Statement Container */}
              <div 
                className={`relative rounded-2xl overflow-hidden border bg-neutral-950 p-2 shadow-2xl group cursor-pointer select-none transition-all duration-500 ${
                  isMusicActive 
                    ? 'border-emerald-500/60 shadow-emerald-600/20 ring-1 ring-emerald-500/30' 
                    : 'border-white/15 hover:border-blue-500/40'
                }`}
                onMouseEnter={() => setIsTextMoved(true)}
                onMouseLeave={() => setIsTextMoved(false)}
                onClick={handlePortraitClick}
                title="اضغط لتشغيل / إيقاف الموسيقى الهادئة وعرض الصورة / Tap to play calm ambient music"
              >
                
                <div className="relative min-h-[540px] rounded-xl overflow-hidden bg-neutral-900 flex flex-col justify-between">
                  {/* Background Portrait Image */}
                  <img
                    src="/menna-portrait.jpg"
                    alt="Menna Sabah - AI & Robotics Engineer & Energy Intelligence"
                    className={`absolute inset-0 w-full h-full object-cover object-top filter transition-all duration-700 ease-out ${
                      isTextMoved 
                        ? 'brightness-105 contrast-110 scale-100' 
                        : 'brightness-75 contrast-105 scale-105'
                    }`}
                    loading="eager"
                  />

                  {/* Gentle Ambient Music Aura */}
                  {isMusicActive && (
                    <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none z-20 transition-opacity"></div>
                  )}

                  {/* Cinematic Dark Gradient & Scrim (Fades away when touched / hovered) */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/85 to-[#050608]/50 transition-opacity duration-500 ease-out ${
                      isTextMoved ? 'opacity-20 pointer-events-none' : 'opacity-100'
                    }`}
                  ></div>
                  <div 
                    className={`absolute inset-0 bg-blue-950/20 backdrop-blur-[0.5px] transition-opacity duration-500 ${
                      isTextMoved ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  ></div>

                  {/* Top Bar inside Picture: Calm Music Indicator Badge (Left) & Visibility Toggle (Right) */}
                  <div className="absolute top-3 inset-x-3 z-30 flex items-center justify-between pointer-events-none">
                    <div 
                      className={`pointer-events-auto px-2.5 py-1 rounded-full backdrop-blur-md border text-[10px] font-mono-tech transition-all flex items-center gap-1.5 shadow-lg ${
                        isMusicActive 
                          ? 'bg-emerald-950/85 border-emerald-500/60 text-emerald-300 shadow-emerald-500/30' 
                          : 'bg-black/70 hover:bg-black/90 border-white/20 text-neutral-300'
                      }`}
                    >
                      <Music className={`w-3.5 h-3.5 ${isMusicActive ? 'text-emerald-400 animate-pulse' : 'text-blue-400'}`} />
                      <span>{isMusicActive ? 'CALM MUSIC: ON ♫' : 'CLICK: CALM MUSIC'}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsTextMoved(prev => !prev);
                      }}
                      className="pointer-events-auto px-2.5 py-1 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-[10px] font-mono-tech text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 shadow-lg"
                    >
                      {isTextMoved ? (
                        <>
                          <Eye className="w-3 h-3 text-blue-400" />
                          <span>Show Bio Text</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3 text-blue-400" />
                          <span>Clear Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Content overlay taking the entire picture (Moves away when hovered/touched) */}
                  <div 
                    className={`relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full flex-1 transition-all duration-500 ease-out ${
                      isTextMoved 
                        ? 'opacity-0 translate-y-12 scale-95 pointer-events-none' 
                        : 'opacity-100 translate-y-0 scale-100'
                    }`}
                  >
                    
                    {/* Top Header Row of the Picture */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 pr-24">
                      <div>
                        <div className="font-syne font-bold text-white text-base tracking-wide flex items-center gap-2">
                          <span>MENNA SABAH</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        </div>
                        <div className="text-[10px] font-mono-tech text-blue-400 uppercase tracking-wider">
                          AI &amp; Robotics Architect - FCI Cairo
                        </div>
                      </div>
                    </div>

                    {/* Center Body: The Complete Persona Statement taking the picture */}
                    <div className="my-auto py-3 space-y-3 font-sans text-xs sm:text-[13px] leading-relaxed">
                      <p className="font-semibold text-white text-sm sm:text-[14px]">
                        I&apos;m Menna Sabah, a 20-year-old Computer Science student at the Faculty of Computers and Information.
                      </p>
                      
                      <p className="text-neutral-300">
                        I am a passionate coder, robotics &amp; IoT developer, and I practice Karate which taught me discipline, focus, and resilience.
                      </p>
                      
                      <p className="text-neutral-300">
                        My vision is to integrate Artificial Intelligence with Electronics &amp; Mechanics (Robotics) into the petroleum sector. I build intelligent robots, self-driving rovers and IoT devices for predictive maintenance and pipeline inspection for companies like <span className="text-blue-400 font-semibold">ENPPI</span>, <span className="text-blue-400 font-semibold">PETROJET</span>, <span className="text-blue-400 font-semibold">BP</span>, and <span className="text-blue-400 font-semibold">Eni</span>.
                      </p>

                      {/* Highlighted Quote in Blue */}
                      <div className="pt-2">
                        <div className="p-3.5 rounded-xl bg-blue-950/50 border border-blue-500/40 text-blue-300 font-syne font-bold text-xs sm:text-sm leading-snug drop-shadow-sm">
                          &ldquo;I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI.&rdquo;
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row inside the Picture */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs">
                      <div className="flex items-center gap-1.5 text-neutral-400 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>1ST DAN · KARATE DISCIPLINE</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenResume();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono-tech border border-white/20 transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>VIEW CV</span>
                        <span>↗</span>
                      </button>
                    </div>

                  </div>

                </div>

                {/* Sub-bar below portrait frame */}
                <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
                  <span className={`flex items-center gap-1.5 transition-colors ${isMusicActive ? 'text-emerald-400 font-medium' : 'text-blue-300'}`}>
                    <Music className={`w-3 h-3 ${isMusicActive ? 'text-emerald-400 animate-pulse' : 'text-blue-400'}`} />
                    <span>{isMusicActive ? 'SERENE AMBIENT: PLAYING' : 'CLICK PHOTO: CALM MUSIC'}</span>
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    {isTextMoved ? 'PORTRAIT CLEAR' : 'TOUCH TO TOGGLE'}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Technical Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs text-neutral-400">
        <div className="flex items-center gap-4">
          <span className="text-white font-medium">DISCIPLINE RATIO:</span>
          <span>100% RESILIENCE</span>
          <span className="text-neutral-600">//</span>
          <span>0% DOWNTIME TOLERANCE</span>
        </div>
        <div className="flex items-center gap-3 text-neutral-500">
          <span>REAL TIME ROBOTICS</span>
          <span>•</span>
          <span>IoT PIPELINE INSPECTION</span>
          <span>•</span>
          <span>AUTONOMOUS ROVER SYSTEMS</span>
        </div>
      </div>

    </section>
  );
};
