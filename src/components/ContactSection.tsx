import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin, Globe, Sparkles, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState('Energy Sector Opportunity');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[${topic}] Inquiry from ${name || 'Energy Colleague'} (${organization || 'Sector Partner'})`);
    const mailtoBody = encodeURIComponent(`Hello Menna,

My name is ${name}${organization ? ` representing ${organization}` : ''}.
Topic: ${topic}

Message:
${message}

Looking forward to connecting regarding your work in energy AI and predictive systems.`);

    window.location.href = `mailto:${PORTFOLIO_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/10 tech-grid relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Headline matching the uploaded reference poster */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-blue-400 font-mono-tech text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>CONNECT WITH MENNA SABAH</span>
          </div>

          <div className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            <div className="text-white">LET&apos;S BUILD</div>
            <div className="text-blue-500 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]">
              THE FUTURE OF ENERGY
            </div>
            <div className="text-white">TOGETHER.</div>
          </div>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Message Composer */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#080a0f] p-6 sm:p-8 shadow-2xl">
            <h3 className="font-syne font-bold text-xl text-white mb-2">
              Send an Inquiry or Schedule a Meeting
            </h3>
            <p className="text-xs font-mono-tech text-neutral-400 mb-6">
              Inquiries regarding predictive maintenance, drilling optimization models, or opportunities at ENPPI, PETROJET, BP, and Eni will reach Menna directly.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              
              {/* Topic Selector Pills */}
              <div>
                <label className="text-[11px] font-mono-tech uppercase text-neutral-400 block mb-2">
                  Select Discussion Category:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Energy Sector Opportunity',
                    'ENPPI / PETROJET / BP / Eni Role',
                    'Drilling AI Research',
                    'Subsea Predictive Maintenance'
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setTopic(cat)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono-tech transition-all cursor-pointer ${
                        topic === cat
                          ? 'bg-blue-600/30 border-blue-500 text-blue-300 font-bold'
                          : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Org Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-neutral-400 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eng. Ahmed / Dr. Sarah"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-neutral-400 block mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    placeholder="ENPPI / PETROJET / BP / Eni / University"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] font-mono-tech uppercase text-neutral-400 block mb-1">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details regarding your operational telemetry, research collaboration, or engineering role..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT INQUIRY VIA EMAIL</span>
                </button>

                {sentSuccess && (
                  <span className="text-xs font-mono-tech text-emerald-400 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Email client launched!
                  </span>
                )}
              </div>

            </form>
          </div>

          {/* Right Column: Direct Info & Wireframe Radar Globe (Matching reference poster) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#080a0f] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-tech text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>LET&apos;S CONNECT // DIRECT ACCESS</span>
              </div>

              {/* Email Direct Box with Copy Button */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-6">
                <div className="text-[10px] font-mono-tech text-neutral-400 uppercase mb-1">
                  Direct Inquiries
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PORTFOLIO_INFO.email}`}
                    className="font-mono-tech text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors truncate"
                  >
                    {PORTFOLIO_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="p-2 rounded-lg border border-white/10 hover:border-blue-400 bg-white/5 text-neutral-300 hover:text-white cursor-pointer transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] font-mono-tech text-emerald-400 mt-1 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Location & Coordinates */}
              <div className="space-y-3 font-mono-tech text-xs text-neutral-300 mb-8">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Cairo, Egypt · Faculty of Computers & Information</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-400">
                  <span className="w-4 text-center text-blue-400">◎</span>
                  <span>Coordinates: {PORTFOLIO_INFO.coordinates}</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-400">
                  <span className="w-4 text-center text-blue-400">⌘</span>
                  <span>Discipline: 1st Dan Karate Practitioner</span>
                </div>
              </div>
            </div>

            {/* Wireframe 3D Globe Radar Visualizer (Inspired by bottom right of reference poster) */}
            <div className="relative w-full aspect-square max-w-[240px] mx-auto rounded-full border border-blue-500/20 bg-blue-950/10 flex items-center justify-center p-4">
              
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="absolute inset-4 rounded-full border border-blue-500/20"></div>
              
              {/* Grid Lines */}
              <svg className="w-full h-full text-blue-500/30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <ellipse cx="50" cy="50" rx="18" ry="45" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.8" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.8" />
                
                {/* Cairo Pulse Dot */}
                <circle cx="62" cy="42" r="3" fill="#3b82f6" className="animate-ping" />
                <circle cx="62" cy="42" r="2.5" fill="#60a5fa" />
              </svg>

              <div className="absolute text-[9px] font-mono-tech text-blue-400 text-center pointer-events-none">
                <div>CAIRO, EG</div>
                <div className="text-neutral-500">ACTIVE RADAR</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
