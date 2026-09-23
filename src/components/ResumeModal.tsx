import React from 'react';
import { PORTFOLIO_INFO, FEATURED_PROJECTS } from '../data/portfolioData';
import { X, Download, Printer, Mail, MapPin, Award, CheckCircle, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate clean text CV for direct offline saving
    const cvText = `MENNA SABAH — CURRICULUM VITAE
AI Software Engineer & Energy Intelligence
Email: ${PORTFOLIO_INFO.email} | Location: Cairo, Egypt (${PORTFOLIO_INFO.coordinates})
Education: Faculty of Computers and Information (FCI) - Computer Science Student (Age 20)

CORE VISION & SUMMARY:
I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI.
Specializing in integrating Artificial Intelligence into Egypt's petroleum and energy sector. Designing intelligent systems for predictive maintenance, drilling optimization, and safety enhancement for ENPPI, PETROJET, BP, and Eni.

FEATURED PROJECTS:
1. PIPE-BOT INSPECTOR: Autonomous IoT Pipeline Inspection Robot
   - Intelligent self-driving robot with ultrasonic, LiDAR & thermal cameras for pipeline inspection.
   - Built with ESP32, ROS2 and Edge AI for real-time anomaly detection for ENPPI & PETROJET.
2. DESERT-ROVER X: Autonomous Rover for Oil Field Safety & Inspection
   - 4WD self-driving rover with AI vision, gas sensors, SLAM and IoT connectivity for autonomous patrolling.
   - Real-time hazard & leak detection for Eni Zohr Field & BP sites.
3. DRILL-BOT ARM: Robotic Arm for Autonomous Drilling Control
   - 6-axis robotic arm with Deep RL, ROS2 & computer vision for autonomous drilling & tool changing.
   - +26% ROP, -31% bit wear, and 100% autonomous control.
4. HSE PATROL-BOT: Mobile Safety Robot for Offshore Rigs
   - Autonomous mobile robot with 360-degree cameras, LiDAR, YOLOv10 on Jetson for active rig patrol.
   - Real-time PPE, fall detection, red-zone encroachment & gas exposure surveillance.

TECHNICAL PROFICIENCIES:
- Languages: Python, C++, TypeScript, SQL, Rust (Basics)
- Machine Learning: PyTorch, Temporal Transformers, LSTM Autoencoders, ONNX, TensorRT
- Industrial & IoT: WITSML, OPC-UA, SCADA Stream Ingestion, Apache Kafka, TimescaleDB
- Systems: Docker, Linux Edge, FastAPI, React

DISCIPLINE & MARTIAL ARTS:
- Karate Practitioner (Discipline, Focus, Resilience, Crisis Calmness)
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Menna_Sabah_Energy_AI_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] rounded-2xl border border-white/20 bg-[#090b11] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Action Bar */}
        <div className="p-4 sm:px-6 border-b border-white/10 bg-[#06070a] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="font-syne font-bold text-sm text-white">MENNA SABAH — CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-blue-500/40 bg-white/5 hover:bg-blue-600/10 text-xs font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Download Text</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 text-xs font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-400" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#07090e] text-neutral-200 font-sans text-sm">
          
          {/* CV Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
                MENNA SABAH
              </h1>
              <p className="font-mono-tech text-sm text-blue-400 font-medium mt-1">
                AI Software Engineer & Energy Intelligence
              </p>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                Faculty of Computers and Information (FCI) · Computer Science Student (Age 20)
              </p>
            </div>

            <div className="font-mono-tech text-xs text-neutral-400 space-y-1 sm:text-right shrink-0">
              <div className="flex sm:justify-end items-center gap-1.5 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PORTFOLIO_INFO.email}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>Cairo, Egypt [{PORTFOLIO_INFO.coordinates}]</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-medium">
                Active for Energy Sector Roles & Research
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono-tech uppercase text-blue-400 font-bold tracking-wider mb-2 flex items-center gap-1.5">
              <span>01 // EXECUTIVE SUMMARY & SECTOR VISION</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-neutral-300 leading-relaxed">
              <p>
                Passionate software engineering enthusiast and 20-year-old Computer Science student at the Faculty of Computers and Information with dedicated practice in Karate. Driven by a clear national vision: revolutionizing Egypt&apos;s petroleum and energy industry through artificial intelligence and real-time operational analytics.
              </p>
              <p className="text-blue-300 italic font-syne">
                &ldquo;I find my discipline in karate, my calm in black and quiet code, and my purpose in powering the future of energy with AI.&rdquo;
              </p>
              <p className="text-xs text-neutral-400">
                Primary engineering focus: Predictive maintenance, drilling optimization, and subsea downtime prevention tailored for <strong className="text-white">ENPPI</strong>, <strong className="text-white">PETROJET</strong>, <strong className="text-white">BP</strong>, and <strong className="text-white">Eni</strong>.
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono-tech uppercase text-blue-400 font-bold tracking-wider mb-2">
              02 // EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-syne font-bold text-white text-base">
                  Faculty of Computers and Information (FCI)
                </div>
                <div className="font-mono-tech text-xs text-blue-400">
                  Current Undergraduate (Age 20)
                </div>
              </div>
              <div className="text-xs text-neutral-300 font-mono-tech mt-0.5">
                Bachelor of Science in Computer Science
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Core Coursework: Algorithms & Data Structures, Operating Systems, Machine Learning & Neural Networks, Distributed Systems, Software Engineering, Database Systems.
              </p>
            </div>
          </div>

          {/* Key Energy Engineering Projects */}
          <div>
            <h2 className="text-xs font-mono-tech uppercase text-blue-400 font-bold tracking-wider mb-3">
              03 // KEY ENERGY PROJECTS & AI ARCHITECTURES
            </h2>
            <div className="space-y-3">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-neutral-900/40 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-syne font-bold text-white flex items-center gap-2">
                      <span className="text-blue-500 font-mono-tech text-xs">{proj.number}</span>
                      <span>{proj.title}</span>
                      <span className="text-xs font-mono-tech text-blue-300 font-normal">({proj.category})</span>
                    </div>
                    <div className="text-[11px] font-mono-tech text-neutral-400">
                      Target: {proj.targetIndustry.join(', ')}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-blue-500/10 text-[10px] font-mono-tech text-blue-300 border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Bento */}
          <div>
            <h2 className="text-xs font-mono-tech uppercase text-blue-400 font-bold tracking-wider mb-2">
              04 // TECHNICAL SKILLS & DOMAIN EXPERTISE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech">
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/5 space-y-1">
                <span className="text-white font-bold block">AI & Time-Series Modeling</span>
                <span className="text-neutral-400">PyTorch, Temporal Transformers, LSTM Autoencoders, ONNX Runtime, TensorRT, Signal Filtering (FFT, Wavelet)</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/5 space-y-1">
                <span className="text-white font-bold block">Systems & Industrial Ingestion</span>
                <span className="text-neutral-400">Python 3.12, C++, WITSML 2.0 Ingest, OPC-UA, Apache Kafka, TimescaleDB, Docker, Linux Edge</span>
              </div>
            </div>
          </div>

          {/* Karate & Leadership */}
          <div>
            <h2 className="text-xs font-mono-tech uppercase text-blue-400 font-bold tracking-wider mb-2">
              05 // MARTIAL ARTS & DISCIPLINARY STRENGTH
            </h2>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 flex items-start gap-3">
              <Award className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-syne font-bold text-white text-sm">
                  Karate Martial Artist (1st Dan Black Belt Mindset)
                </div>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Developed acute focus, resilience under physical and mental fatigue, and crisis calmness. These qualities directly translate into software reliability when building systems where human safety and multimillion-dollar assets are at stake.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-6 border-t border-white/10 bg-[#06070a] flex items-center justify-between shrink-0 font-mono-tech text-xs text-neutral-400">
          <span>Menna Sabah · Energy AI Specialist</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-bold transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
