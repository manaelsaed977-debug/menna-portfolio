import React, { useState } from 'react';
import { TOOLS_DATA } from '../data/portfolioData';
import { 
  Terminal, Cpu, Zap, Radio, Database, Container, Layers, Activity, Gauge, BrainCircuit, Bot, Scan, Box
} from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Machine Learning', 'Robotics & Autonomous Systems', 'Petroleum Industrial IoT', 'Data Infrastructure'];

  const filteredTools = activeCategory === 'All'
    ? TOOLS_DATA
    : TOOLS_DATA.filter((t) => t.category === activeCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-blue-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-blue-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Container': return <Container className="w-5 h-5 text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-400" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-blue-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-blue-400" />;
      case 'Box': return <Box className="w-5 h-5 text-blue-400" />;
      case 'Scan': return <Scan className="w-5 h-5 text-blue-400" />;
      default: return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="tools" className="py-20 border-b border-white/10 tech-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono-tech text-xs tracking-widest uppercase mb-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>PRODUCTION ARSENAL</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight flex items-center gap-2">
              <span>TOOLS I</span>
              <span className="text-sky-400">USE</span>
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono-tech text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 border-blue-500 text-white font-medium shadow-md shadow-blue-600/30'
                    : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid matching reference poster aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group p-5 rounded-2xl border border-white/10 bg-[#080a0f]/90 hover:border-blue-500/50 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-400 transition-all">
                    {renderIcon(tool.iconName)}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono-tech text-[10px] text-blue-300">
                    {tool.level}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-lg text-white group-hover:text-blue-200 transition-colors mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-neutral-500">
                <span>{tool.category}</span>
                <span className="text-blue-500">› Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Code Banner Callout */}
        <div className="mt-8 p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/30 via-neutral-950 to-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-mono-tech text-blue-400 font-bold shrink-0">
              ⌘
            </div>
            <div>
              <div className="font-syne font-bold text-white text-base">
                Clean, Deterministic Software Engineering
              </div>
              <div className="text-xs text-neutral-400 font-mono-tech">
                Industrial rigs do not permit runtime crashes or memory leaks. Code is crafted for resilience.
              </div>
            </div>
          </div>
          <a
            href="#simulator"
            className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 font-mono-tech text-xs tracking-wider transition-all whitespace-nowrap"
          >
            TEST IN SIMULATOR ↗
          </a>
        </div>

      </div>
    </section>
  );
};
