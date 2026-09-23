import React, { useState, useEffect, useCallback } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Shield, ArrowUpRight, Flame, Target, Award, Zap, Activity, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const EngineeringProcess: React.FC = () => {
  const [trainingMode, setTrainingMode] = useState<'kata' | 'kumite' | 'focus'>('kata');
  const [isStriking, setIsStriking] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [autoTrain, setAutoTrain] = useState(true);
  const [strikeCount, setStrikeCount] = useState(14);
  const [stanceBreath, setStanceBreath] = useState<'inhale' | 'exhale'>('inhale');

  // Synthesize martial arts Kiai / whoosh sound
  const playMartialSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      // Wind whoosh
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  const executeStrike = useCallback(() => {
    if (isStriking) return;
    setIsStriking(true);
    setStrikeCount(prev => prev + 1);
    playMartialSound();
    setTimeout(() => {
      setIsStriking(false);
    }, 700);
  }, [isStriking, playMartialSound]);

  // Periodic automatic training pulse if autoTrain is active
  useEffect(() => {
    if (!autoTrain) return;
    const interval = setInterval(() => {
      setStanceBreath(prev => (prev === 'inhale' ? 'exhale' : 'inhale'));
    }, 2200);
    return () => clearInterval(interval);
  }, [autoTrain]);

  // Periodic strike in kumite mode
  useEffect(() => {
    if (!autoTrain) return;
    const interval = setInterval(() => {
      executeStrike();
    }, 6000);
    return () => clearInterval(interval);
  }, [autoTrain, executeStrike]);
  return (
    <section id="process" className="py-20 border-b border-white/10 tech-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono-tech text-xs tracking-widest uppercase mb-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>KARATE DISCIPLINE MEETS SYSTEM ENGINEERING</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight flex items-center gap-3">
              <span>ENGINEERING</span>
              <span className="text-blue-500">PROCESS</span>
            </h2>
          </div>
          <div className="font-mono-tech text-xs text-neutral-400 max-w-md">
            &ldquo;Karate taught me discipline, focus, and resilience. I channel that exact mental fortitude into building zero-failure software for offshore petroleum rigs.&rdquo;
          </div>
        </div>

        {/* 5-Step Process Layout matching reference poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Vertical Steps */}
          <div className="lg:col-span-7 space-y-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/10 bg-[#080a0f]/90 hover:border-blue-500/50 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Step Number & Title */}
                  <div className="flex items-start gap-4">
                    <span className="font-syne font-extrabold text-3xl sm:text-4xl text-blue-500 group-hover:text-blue-400 transition-colors">
                      {step.number}
                    </span>
                    <div>
                      <div className="text-[11px] font-mono-tech text-blue-400 uppercase tracking-wider mb-0.5">
                        {step.phase}
                      </div>
                      <h3 className="font-syne font-bold text-xl text-white group-hover:text-blue-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed mt-2 max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Karate Principle Badge */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono-tech text-xs text-neutral-300">
                      <Target className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[11px]">{step.karatePrinciple.split(':')[0]}</span>
                    </div>
                    <div className="text-[10px] font-mono-tech text-neutral-500 mt-1 max-w-[220px] sm:ml-auto">
                      {step.karatePrinciple.split(':')[1]}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Karate Action Visual & Black Belt Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Dynamic Karate Training Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 p-2 sm:p-2.5 shadow-2xl group">
              
              {/* Decorative Corner Bracket Markers */}
              <div className="absolute top-1 left-1 text-blue-400 font-mono-tech text-xs select-none z-20">+</div>
              <div className="absolute top-1 right-1 text-blue-400 font-mono-tech text-xs select-none z-20">+</div>
              <div className="absolute bottom-1 left-1 text-blue-400 font-mono-tech text-xs select-none z-20">+</div>
              <div className="absolute bottom-1 right-1 text-blue-400 font-mono-tech text-xs select-none z-20">+</div>

              {/* Main Animated Stage Container */}
              <div 
                className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 cursor-pointer select-none"
                onClick={executeStrike}
                title="Click or tap anywhere on the dojo to execute a Karate strike!"
              >
                {/* Simulated Camera Tremor on Strike */}
                <div 
                  className={`w-full h-full relative transition-transform ${isStriking ? 'animate-kiai-tremor' : ''}`}
                >
                  {/* Living Martial Arts Figure Motion: Breathing, Stance Weight Shift, and Explosive Strike */}
                  <div
                    className="w-full h-full relative origin-bottom transition-all"
                    style={{
                      transform: isStriking 
                        ? 'scale(1.15) translate(14px, -6px) rotate(1.2deg)' 
                        : trainingMode === 'kumite' 
                          ? (stanceBreath === 'inhale' ? 'scale(1.05) translate(-4px, -4px) rotate(-0.5deg)' : 'scale(1.02) translate(5px, 3px) rotate(0.4deg)')
                          : (stanceBreath === 'inhale' ? 'scale(1.03) translate(-3px, -4px) rotate(-0.4deg)' : 'scale(1.06) translate(6px, 4px) rotate(0.6deg)'),
                      filter: isStriking 
                        ? 'contrast(125%) brightness(120%) drop-shadow(0 0 20px rgba(59,130,246,0.6))' 
                        : 'contrast(105%) brightness(95%)',
                      transitionDuration: isStriking ? '300ms' : (trainingMode === 'kumite' ? '1800ms' : '2200ms'),
                      transitionTimingFunction: isStriking ? 'cubic-bezier(0.16, 1, 0.3, 1)' : 'ease-in-out'
                    }}
                  >
                    <img 
                      src="/karate-discipline.jpg" 
                      alt="Menna Sabah Karate Discipline - Live Training Kata"
                      className="w-full h-full object-cover object-center filter contrast-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Dynamic Ki / Energy Aura Ripple on Strike */}
                  {isStriking && (
                    <>
                      {/* Shockwave expanding from strike point */}
                      <div
                        className="absolute inset-0 m-auto w-24 h-24 rounded-full border-2 border-cyan-400 bg-blue-500/20 backdrop-blur-[1px] pointer-events-none animate-shockwave"
                      />
                      <div
                        className="absolute inset-0 m-auto w-32 h-32 rounded-full border border-blue-400/80 pointer-events-none animate-shockwave-secondary"
                      />

                      {/* Kinetic Strike Speed Lines */}
                      <div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent pointer-events-none animate-pulse"
                      />
                    </>
                  )}

                  {/* Atmospheric Floating Dojo Dust Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-blue-300/40 animate-dojo-particle"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${20 + (i % 3) * 25}%`,
                          animationDelay: `${i * 0.6}s`,
                          animationDuration: `${3 + i * 0.7}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Dark Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-85 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-blue-950/15 pointer-events-none"></div>
                </div>

                {/* Top Control & Telemetry Bar Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                  <div className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-blue-400 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>LIVE TRAINING · {trainingMode.toUpperCase()}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Sound Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSoundEnabled(prev => !prev);
                      }}
                      className="p-1 rounded bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      title={soundEnabled ? "Mute Kiai Strike Sound" : "Enable Kiai Strike Sound"}
                    >
                      {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-400" /> : <VolumeX className="w-3.5 h-3.5 text-neutral-500" />}
                    </button>

                    {/* Auto-Train Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setAutoTrain(prev => !prev);
                      }}
                      className="px-2 py-1 rounded bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                      title="Toggle Continuous Training Loop"
                    >
                      {autoTrain ? <Pause className="w-2.5 h-2.5 text-emerald-400" /> : <Play className="w-2.5 h-2.5 text-amber-400" />}
                      <span>{autoTrain ? 'ACTIVE' : 'PAUSED'}</span>
                    </button>
                  </div>
                </div>

                {/* Interactive Click-to-Strike Hint & Trigger */}
                <div className="absolute inset-x-3 top-12 flex justify-center pointer-events-none">
                  <div 
                    className="px-3 py-1 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/40 text-[10px] font-mono-tech text-blue-200 flex items-center gap-1.5 shadow-lg shadow-blue-500/20 animate-pulse"
                  >
                    <Zap className="w-3 h-3 text-cyan-300 animate-pulse" />
                    <span>Tap or click photo to execute Kiai Strike</span>
                  </div>
                </div>

                {/* Bottom Overlay Card with Live Metrics */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#080a0f]/90 backdrop-blur-md border border-white/10 shadow-xl pointer-events-auto">
                  <div className="flex items-center justify-between text-xs font-mono-tech">
                    <span className="font-syne font-bold text-white flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-blue-400" />
                      ZENKUTSU-DACHI KATA
                    </span>
                    <span className="text-blue-400 font-semibold flex items-center gap-1">
                      <Activity className="w-3 h-3 animate-spin" />
                      STRIKES: {strikeCount}
                    </span>
                  </div>

                  {/* Mode switcher pills */}
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setTrainingMode('kata');
                      }}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono-tech transition-all cursor-pointer ${
                        trainingMode === 'kata' 
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' 
                          : 'bg-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      Kata (Form & Breath)
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setTrainingMode('kumite');
                      }}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono-tech transition-all cursor-pointer ${
                        trainingMode === 'kumite' 
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' 
                          : 'bg-white/5 text-neutral-400 hover:text-white'
                      }`}
                    >
                      Kumite (Sparring)
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        executeStrike();
                      }}
                      className="ml-auto px-2.5 py-1 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-mono-tech font-bold text-[10px] hover:brightness-110 active:scale-95 transition-all shadow-md shadow-blue-500/20 flex items-center gap-1 cursor-pointer"
                    >
                      <Zap className="w-3 h-3" />
                      <span>KIAI!</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Sub-bar below photo with real-time breathing meter */}
              <div className="pt-2 px-1 flex items-center justify-between text-[10px] font-mono-tech text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${stanceBreath === 'inhale' ? 'bg-blue-400' : 'bg-emerald-400'} animate-ping`}></span>
                  <span className="text-neutral-300">
                    BREATH: <span className="text-blue-400 uppercase font-semibold">{stanceBreath} (IBUKI)</span>
                  </span>
                </span>
                <span className="text-neutral-500">STANCE STABILITY: 99.8%</span>
              </div>

            </div>

            {/* Karate Philosophy Card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0d14] to-[#07080d] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>

                <span className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest block mb-1">
                  THE BLACK BELT MINDSET
                </span>
                <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mb-3">
                  Disciplined Focus Under Extreme Pressure
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  <p>
                    In martial arts, a split-second loss of focus results in defeat. In deepwater offshore drilling operations, a missed anomaly can cause catastrophic blowouts costing billions of dollars and risking human lives.
                  </p>
                  <p>
                    I treat every line of code with the deliberate intentionality of a Karate kata: tested repeatedly, resilient to unexpected shocks, and executed with maximum efficiency.
                  </p>
                </div>

                {/* Core Pillars */}
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2.5 font-mono-tech text-xs">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>DISCIPLINE (Shugyo)</span>
                    <span className="text-blue-400">UNWAVERING</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>RESILIENCE (Fudoshin)</span>
                    <span className="text-blue-400">FAULT-TOLERANT</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>QUIET FOCUS (Zanshin)</span>
                    <span className="text-blue-400">ZERO NOISE</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10">
                <a
                  href="#about"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-syne font-bold text-xs text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Read Menna&apos;s Full Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
