import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Activity, Cpu, ShieldAlert, CheckCircle2, ChevronRight, X, ExternalLink } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProjectForSimulator?: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProjectForSimulator }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-white/10 relative tech-grid">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono-tech text-xs tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-sm bg-blue-500"></span>
              <span>INNOVATION & OPERATIONAL EXCELLENCE</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight flex items-center gap-3">
              <span>FEATURED</span>
              <span className="text-blue-500">PROJECTS</span>
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-neutral-400 max-w-md">
            Architected specifically for the harsh dynamics of Egypt&apos;s offshore Mediterranean and Gulf of Suez fields. Engineered for zero catastrophic downtime.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative rounded-2xl border border-white/10 bg-[#080a0f]/90 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10"
            >
              {/* Top Row: Number & Status */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-syne font-extrabold text-3xl sm:text-4xl text-blue-500 group-hover:text-blue-400 transition-colors">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-[11px] font-mono-tech text-blue-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-blue-200 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs font-mono-tech text-blue-400/90 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Target Company Badges */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-wider block mb-1.5">
                    Target Enterprise Deployments:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.targetIndustry.map((company) => (
                      <span
                        key={company}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono-tech text-[10px] text-neutral-300"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics Bento */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/50 border border-white/5 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-mono-tech font-bold text-xs sm:text-sm text-white">
                        {metric.value}
                      </div>
                      <div className="text-[9px] font-mono-tech text-neutral-500 uppercase">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Stack */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[10px] font-mono-tech border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-white/10 hover:border-blue-400/50 bg-white/5 hover:bg-blue-600/10 text-neutral-200 hover:text-white font-mono-tech text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Architecture Deep-Dive</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>

                  <a
                    href="#simulator"
                    onClick={() => onSelectProjectForSimulator && onSelectProjectForSimulator(project)}
                    title="Test in Rig Simulator"
                    className="p-2.5 rounded-xl border border-blue-500/30 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white transition-all cursor-pointer"
                  >
                    <Activity className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 4th Project Wide Banner: KATA-SHIN SAFEGUARD */}
        {FEATURED_PROJECTS[3] && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0a0d14] via-[#07090e] to-[#0d1017] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 hover:border-blue-500/40 transition-all">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-syne font-extrabold text-3xl text-blue-500">04</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono-tech text-xs">
                  HSE RIG SAFETY &amp; COMPUTER VISION &amp; MOBILE ROBOTICS
                </span>
              </div>
              <h3 className="font-syne font-bold text-2xl text-white">
                {FEATURED_PROJECTS[3].title}: {FEATURED_PROJECTS[3].subtitle}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {FEATURED_PROJECTS[3].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {FEATURED_PROJECTS[3].techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-center w-full sm:w-auto">
                <div className="font-mono-tech text-xl font-bold text-emerald-400">45 FPS</div>
                <div className="text-[10px] font-mono-tech text-neutral-500">EDGE JETSON SPEEDS</div>
              </div>
              <button
                onClick={() => setSelectedProject(FEATURED_PROJECTS[3])}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>INSPECT ROBOT SPECS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Architecture Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-2xl border border-white/20 bg-[#090b12] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2 font-mono-tech text-xs text-blue-400">
              <span>PROJECT // {selectedProject.number}</span>
              <span>·</span>
              <span>{selectedProject.category}</span>
            </div>

            <h3 className="font-syne font-extrabold text-3xl text-white mb-1">
              {selectedProject.title}
            </h3>
            <p className="font-mono-tech text-sm text-blue-400 mb-6">
              {selectedProject.subtitle}
            </p>

            {/* Description */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-6">
              <h4 className="text-xs font-mono-tech uppercase text-neutral-400 mb-2">Technical Overview</h4>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Target Operators */}
            <div className="mb-6">
              <h4 className="text-xs font-mono-tech uppercase text-neutral-400 mb-2">Enterprise Operator Alignment</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.targetIndustry.map((company) => (
                  <div key={company} className="px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-mono-tech text-blue-300 font-semibold">
                    {company} Field Specs
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="p-5 rounded-xl bg-black/70 border border-blue-500/30 mb-6">
              <h4 className="text-xs font-mono-tech uppercase text-blue-400 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Edge Ingestion & AI Pipeline Diagram</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono-tech">
                <div className="p-2.5 rounded bg-neutral-900 border border-white/10">
                  <div className="text-neutral-400 text-[10px]">1. SCADA INGEST</div>
                  <div className="text-white font-bold">1,000 Hz OPC-UA</div>
                </div>
                <div className="p-2.5 rounded bg-neutral-900 border border-white/10">
                  <div className="text-neutral-400 text-[10px]">2. EDGE BUFFER</div>
                  <div className="text-blue-300 font-bold">Kafka Ring Buffer</div>
                </div>
                <div className="p-2.5 rounded bg-neutral-900 border border-blue-500/40">
                  <div className="text-neutral-400 text-[10px]">3. NEURAL CORE</div>
                  <div className="text-blue-400 font-bold">TensorRT INT8</div>
                </div>
                <div className="p-2.5 rounded bg-neutral-900 border border-emerald-500/40">
                  <div className="text-neutral-400 text-[10px]">4. OPERATOR HUD</div>
                  <div className="text-emerald-400 font-bold">&lt; 14ms Alert</div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {selectedProject.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-neutral-900/80 border border-white/10 text-center">
                  <div className="font-syne font-bold text-lg text-white">{m.value}</div>
                  <div className="font-mono-tech text-[10px] text-neutral-400 uppercase">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-white/10 text-xs font-mono-tech text-neutral-300 hover:text-white"
              >
                Close Spec
              </button>
              <a
                href="#simulator"
                onClick={() => {
                  if (onSelectProjectForSimulator) onSelectProjectForSimulator(selectedProject);
                  setSelectedProject(null);
                }}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-syne font-bold flex items-center gap-1.5"
              >
                <span>Launch in Live Rig Simulator</span>
                <Activity className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
