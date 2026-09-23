import React, { useState } from 'react';
import { QUIET_CODE_SNIPPET } from '../data/portfolioData';
import { Terminal, Copy, Check, X, Play, ShieldAlert, Sparkles } from 'lucide-react';

interface QuietCodeTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuietCodeTerminal: React.FC<QuietCodeTerminalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(QUIET_CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunInference = () => {
    setIsExecuting(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setIsExecuting(false);
      setExecutionOutput(`[MENNA_SABAH_AI_CORE v2.4] INFERENCE EXECUTION
────────────────────────────────────────────────────────
Input Stream: Deepwater Offshore Rig Mediterranean [WITSML 2.0]
Standpipe Pressure: 3,140 PSI (Delta: +140 PSI)
Drillstring Axial Vibration: 1.42g (Normal Harmonic)
Mud Pump Flow: 652 GPM (Inflow/Outflow Balanced)
Rotary RPM: 122 | Surface Torque: 17.1 k ft-lbs

NEURAL LATENT EVALUATION:
- Anomaly Confidence: 2.4% [OPTIMAL_DRILLING]
- Early Blowout Lead Window: 38s Reserve Guaranteed
- Target Operator Protocol: Verified for ENPPI / BP / Eni Rig Fleets
STATUS: ZERO FLAGGED DEFECTS. DRILLING AT PEAK PENETRATION RATE.
────────────────────────────────────────────────────────`);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] rounded-2xl border border-blue-500/30 bg-[#050608] flex flex-col shadow-2xl shadow-blue-950/40 overflow-hidden">
        
        {/* Terminal Header */}
        <div className="p-4 px-6 border-b border-white/10 bg-[#07080d] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-neutral-300">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>quiet_code_rig_pulse.py</span>
              <span className="text-neutral-500">·</span>
              <span className="text-blue-400 text-[11px]">&ldquo;Discipline in Karate · Calm in Black&rdquo;</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunInference}
              disabled={isExecuting}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-mono-tech text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isExecuting ? 'Running...' : 'Run Test'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 text-neutral-300 hover:text-white font-mono-tech text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Philosophy Callout Banner */}
        <div className="px-6 py-2.5 bg-blue-950/20 border-b border-blue-500/20 flex items-center justify-between font-mono-tech text-xs text-blue-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Pure PyTorch Architecture · Zero Superfluous Overhead · Subsea Safety Verified</span>
          </div>
          <span className="text-neutral-500 hidden sm:inline">Author: Menna Sabah (FCI)</span>
        </div>

        {/* Code Content Area */}
        <div className="p-6 overflow-y-auto font-mono-tech text-xs sm:text-[13px] leading-relaxed bg-[#030406] text-neutral-300">
          
          {executionOutput && (
            <div className="mb-6 p-4 rounded-xl bg-black/90 border border-emerald-500/40 text-emerald-400 whitespace-pre-wrap font-mono-tech shadow-lg animate-fadeIn">
              {executionOutput}
            </div>
          )}

          <pre className="whitespace-pre overflow-x-auto text-neutral-300">
            <code>
              {QUIET_CODE_SNIPPET}
            </code>
          </pre>
        </div>

        {/* Footer */}
        <div className="p-3 px-6 border-t border-white/10 bg-[#06070a] flex items-center justify-between font-mono-tech text-[11px] text-neutral-500 shrink-0">
          <span>Target Platform: NVIDIA Jetson Orin / Industrial Edge Rack</span>
          <span>Latency: 14ms (FP16 Quantized)</span>
        </div>

      </div>
    </div>
  );
};
