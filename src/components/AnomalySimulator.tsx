import React, { useState, useEffect, useRef } from 'react';
import { Activity, AlertTriangle, ShieldCheck, Play, RefreshCw, Cpu, Gauge, Zap, Flame } from 'lucide-react';

interface TelemetryState {
  rpm: number;
  pressure: number;
  torque: number;
  mudFlow: number;
  vibration: number;
}

export const AnomalySimulator: React.FC = () => {
  const [telemetry, setTelemetry] = useState<TelemetryState>({
    rpm: 120,
    pressure: 3100,
    torque: 16.5,
    mudFlow: 650,
    vibration: 0.94
  });

  const [activeScenario, setActiveScenario] = useState<'nominal' | 'gas_kick' | 'stick_slip' | 'choke_cavitation'>('nominal');
  const [history, setHistory] = useState<number[]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Calculate Anomaly Score using Menna's AI algorithm heuristics
  const calculateAnomalyMetrics = (t: TelemetryState) => {
    let score = 0;
    const anomalies: string[] = [];

    // Gas leak emergency
    if (t.pressure > 4200 || t.pressure < 2200) {
      score += 45;
      anomalies.push('Hazardous Gas Concentration Spike / Leak Detected');
    }

    // Navigation failure / obstacle stuck
    if (t.vibration > 3.5) {
      score += 35;
      anomalies.push('SLAM Odometry Loss & Drive Motor Stalling Hazard');
    }

    if (t.torque > 28.0) {
      score += 25;
      anomalies.push('High Obstacle Resistance: Rover Path Blocked');
    }

    if (t.mudFlow < 450 || t.mudFlow > 820) {
      score += 20;
      anomalies.push('Thermal Sensor Anomaly & Optical Lens Degradation');
    }

    const clampedScore = Math.min(100, Math.max(2, score));
    return {
      score: clampedScore,
      isCritical: clampedScore >= 65,
      isWarning: clampedScore >= 35 && clampedScore < 65,
      isNormal: clampedScore < 35,
      detectedAnomalies: anomalies
    };
  };

  const metrics = calculateAnomalyMetrics(telemetry);

  // Live telemetry pulse animation & history tracking
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setTelemetry((prev) => {
        // Natural sensor noise
        const noise = (Math.random() - 0.5);
        return {
          ...prev,
          pressure: Math.round(prev.pressure + noise * 12),
          vibration: Number((prev.vibration + noise * 0.05).toFixed(2)),
          torque: Number((prev.torque + noise * 0.1).toFixed(1))
        };
      });

      setHistory((prev) => {
        const next = [...prev, metrics.score];
        if (next.length > 28) next.shift();
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isSimulating, metrics.score]);

  // Scenario switchers
  const applyScenario = (scenario: 'nominal' | 'gas_kick' | 'stick_slip' | 'choke_cavitation') => {
    setActiveScenario(scenario);
    if (scenario === 'nominal') {
      setTelemetry({ rpm: 120, pressure: 3100, torque: 16.5, mudFlow: 650, vibration: 0.94 });
    } else if (scenario === 'gas_kick') {
      setTelemetry({ rpm: 135, pressure: 4680, torque: 24.2, mudFlow: 380, vibration: 2.8 });
    } else if (scenario === 'stick_slip') {
      setTelemetry({ rpm: 65, pressure: 3450, torque: 34.0, mudFlow: 620, vibration: 5.6 });
    } else if (scenario === 'choke_cavitation') {
      setTelemetry({ rpm: 110, pressure: 4400, torque: 19.0, mudFlow: 860, vibration: 4.2 });
    }
  };

  return (
    <section id="simulator" className="py-20 border-b border-white/10 bg-[#05070a] relative tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono-tech text-xs tracking-widest uppercase mb-2">
              <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>LIVE ROBOTICS DIGITAL TWIN &amp; FLEET MANAGEMENT</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white tracking-tight flex items-center gap-3">
              <span>ROBOT FLEET</span>
              <span className="text-blue-500">SIMULATOR</span>
            </h2>
          </div>
          <div className="font-mono-tech text-xs text-neutral-400 max-w-lg">
            Interactive demonstration of Menna&apos;s real-time autonomous robotics &amp; fleet telemetry model. Inject realistic robot mission conditions and observe sub-second neural classification.
          </div>
        </div>

        {/* Main Simulator Dashboard Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Industrial Rig Controls */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#080a0f] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="font-mono-tech font-bold text-xs uppercase text-neutral-200">
                    LIVE ROBOT FLEET TELEMETRY INPUT
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSimulating(!isSimulating)}
                    className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 font-mono-tech text-[10px] text-neutral-300 flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                    {isSimulating ? 'Stream Active' : 'Paused'}
                  </button>
                </div>
              </div>

              {/* Scenario Preset Buttons */}
              <div className="mb-6">
                <span className="text-[10px] font-mono-tech text-neutral-400 uppercase tracking-wider block mb-2">
                  INJECT REALISTIC ROBOT MISSION SCENARIOS:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => applyScenario('nominal')}
                    className={`py-2 px-3 rounded-xl border text-xs font-mono-tech font-medium text-left transition-all cursor-pointer ${
                      activeScenario === 'nominal'
                        ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-md shadow-blue-500/10'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-bold">✓ Nominal Patrol</div>
                    <div className="text-[10px] text-neutral-400">Baseline navigation</div>
                  </button>

                  <button
                    onClick={() => applyScenario('gas_kick')}
                    className={`py-2 px-3 rounded-xl border text-xs font-mono-tech font-medium text-left transition-all cursor-pointer ${
                      activeScenario === 'gas_kick'
                        ? 'bg-red-950/40 border-red-500 text-red-300 shadow-md shadow-red-500/20'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1 text-red-400">
                      <Flame className="w-3.5 h-3.5" />
                      Gas Leak Detection
                    </div>
                    <div className="text-[10px] text-neutral-400">Emergency response</div>
                  </button>

                  <button
                    onClick={() => applyScenario('stick_slip')}
                    className={`py-2 px-3 rounded-xl border text-xs font-mono-tech font-medium text-left transition-all cursor-pointer ${
                      activeScenario === 'stick_slip'
                        ? 'bg-amber-950/40 border-amber-500 text-amber-300 shadow-md shadow-amber-500/20'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-bold text-amber-400">⚡ Navigation Failure</div>
                    <div className="text-[10px] text-neutral-400">SLAM obstacle stuck</div>
                  </button>

                  <button
                    onClick={() => applyScenario('choke_cavitation')}
                    className={`py-2 px-3 rounded-xl border text-xs font-mono-tech font-medium text-left transition-all cursor-pointer ${
                      activeScenario === 'choke_cavitation'
                        ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/20'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-bold text-cyan-400">◈ Sensor Degradation</div>
                    <div className="text-[10px] text-neutral-400">Thermal camera failure</div>
                  </button>
                </div>
              </div>

              {/* Sliders for Direct Parameter Tuning */}
              <div className="space-y-4">
                {/* Robot Battery & Signal Strength (RSSI) */}
                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-1">
                    <span className="text-neutral-400">Robot Battery &amp; Signal Strength (RSSI)</span>
                    <span className="font-bold text-blue-400">{Math.round((telemetry.pressure / 5500) * 100)}% | -{Math.round(115 - (telemetry.pressure / 5500) * 55)} dBm</span>
                  </div>
                  <input
                    type="range"
                    min="1500"
                    max="5500"
                    step="50"
                    value={telemetry.pressure}
                    onChange={(e) => {
                      setTelemetry({ ...telemetry, pressure: Number(e.target.value) });
                      setActiveScenario('nominal');
                    }}
                    className="w-full accent-blue-500 bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono-tech text-neutral-600 mt-0.5">
                    <span>Low: 25% (-95 dBm)</span>
                    <span>Safe: 60%-90% (-65 dBm)</span>
                    <span>Full: 100% (-45 dBm)</span>
                  </div>
                </div>

                {/* Axial Vibration */}
                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-1">
                    <span className="text-neutral-400">Robot Chassis Vibration (IMU)</span>
                    <span className="font-bold text-amber-400">{telemetry.vibration} g</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="7.5"
                    step="0.01"
                    value={telemetry.vibration}
                    onChange={(e) => {
                      setTelemetry({ ...telemetry, vibration: Number(e.target.value) });
                      setActiveScenario('nominal');
                    }}
                    className="w-full accent-amber-500 bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono-tech text-neutral-600 mt-0.5">
                    <span>0.2g (Smooth)</span>
                    <span>Threshold: 3.0g</span>
                    <span>7.5g (Severe Hazard)</span>
                  </div>
                </div>

                {/* Torque */}
                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-1">
                    <span className="text-neutral-400">Drive Motor Torque</span>
                    <span className="font-bold text-cyan-400">{telemetry.torque} Nm</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="0.5"
                    value={telemetry.torque}
                    onChange={(e) => {
                      setTelemetry({ ...telemetry, torque: Number(e.target.value) });
                      setActiveScenario('nominal');
                    }}
                    className="w-full accent-cyan-500 bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Mud Flow Rate */}
                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-1">
                    <span className="text-neutral-400">Autonomous Nav Speed</span>
                    <span className="font-bold text-emerald-400">{((telemetry.mudFlow / 650) * 0.85).toFixed(2)} m/s</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="900"
                    step="10"
                    value={telemetry.mudFlow}
                    onChange={(e) => {
                      setTelemetry({ ...telemetry, mudFlow: Number(e.target.value) });
                      setActiveScenario('nominal');
                    }}
                    className="w-full accent-emerald-500 bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono-tech text-neutral-500 flex items-center justify-between">
              <span>Standard: ROS2 / MQTT Telemetry Ingest</span>
              <span>Target: Robot Fleet - Sector A</span>
            </div>

          </div>

          {/* Right Column: AI Inference & Anomaly Radar HUD */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#07090e] p-6 flex flex-col justify-between">
            
            {/* Top HUD Status Row */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-blue-400" />
                  <span className="font-mono-tech font-bold text-xs uppercase text-neutral-200">
                    MENNA SABAH AI &amp; ROBOTICS
                  </span>
                </div>

                {/* Status Indicator */}
                <div className={`px-3 py-1 rounded-full border text-xs font-mono-tech font-bold flex items-center gap-2 ${
                  metrics.isCritical 
                    ? 'bg-red-500/20 border-red-500 text-red-300 animate-pulse'
                    : metrics.isWarning 
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                    : 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    metrics.isCritical ? 'bg-red-500' : metrics.isWarning ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}></span>
                  <span>
                    {metrics.isCritical 
                      ? 'CRITICAL ROBOT FLEET HAZARD' 
                      : metrics.isWarning 
                      ? 'ELEVATED FLEET RISK' 
                      : 'ALL ROBOTIC FLEET SYSTEMS NOMINAL'}
                  </span>
                </div>
              </div>

              {/* Anomaly Gauge & Key Predictions Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                
                {/* Score */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center">
                  <div className="text-[10px] font-mono-tech text-neutral-400 uppercase mb-1">
                    Anomaly Confidence
                  </div>
                  <div className={`font-syne font-extrabold text-3xl sm:text-4xl ${
                    metrics.isCritical ? 'text-red-400' : metrics.isWarning ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {metrics.score.toFixed(1)}%
                  </div>
                  <div className="text-[10px] font-mono-tech text-neutral-500 mt-1">
                    Threshold: 65.0% - AI Detected Fault
                  </div>
                </div>

                {/* Early Warning Lead Time */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center">
                  <div className="text-[10px] font-mono-tech text-neutral-400 uppercase mb-1">
                    Early Lead Window
                  </div>
                  <div className="font-syne font-extrabold text-3xl sm:text-4xl text-blue-400">
                    38 sec
                  </div>
                  <div className="text-[10px] font-mono-tech text-neutral-500 mt-1">
                    Ahead of blowout limit (AI Early Warning)
                  </div>
                </div>

                {/* Estimated Loss Averted */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center">
                  <div className="text-[10px] font-mono-tech text-neutral-400 uppercase mb-1">
                    Averted Downtime
                  </div>
                  <div className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
                    $450K+
                  </div>
                  <div className="text-[10px] font-mono-tech text-neutral-500 mt-1">
                    Per avoided tripping cycle (Robotics Saved)
                  </div>
                </div>

              </div>

              {/* Real-Time Waveform / Time-Series Anomaly Trend */}
              <div className="p-4 rounded-xl bg-black/80 border border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    AI Neural Anomaly Trend - Drilling Rig (Last 30s)
                  </span>
                  <span className="text-[10px] text-neutral-500">AI Sensor Fusion - FFT Analysis (Robotics)</span>
                </div>

                <div className="h-28 w-full flex items-end gap-1 px-1 pt-2">
                  {history.map((val, idx) => {
                    const heightPercent = Math.max(6, val);
                    const isHigh = val >= 65;
                    const isMed = val >= 35 && val < 65;
                    return (
                      <div
                        key={idx}
                        className="flex-1 rounded-t transition-all duration-300"
                        style={{
                          height: `${heightPercent}%`,
                          backgroundColor: isHigh ? '#ef4444' : isMed ? '#f59e0b' : '#3b82f6',
                          opacity: 0.8 + (idx / 30) * 0.2
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>

              {/* Actionable Automated Recommendations */}
              <div className="p-4 rounded-xl bg-[#0b0e17] border border-white/10">
                <div className="text-xs font-mono-tech text-neutral-300 font-bold uppercase mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>AI Automated Advisory Protocol:</span>
                </div>
                
                {metrics.detectedAnomalies.length > 0 ? (
                  <ul className="space-y-1.5">
                    {metrics.detectedAnomalies.map((anomaly, i) => (
                      <li key={i} className="text-xs font-mono-tech text-red-300 flex items-start gap-2">
                        <span className="text-red-400 font-bold">›</span>
                        <span>{anomaly} — Triggering autonomous choke trim & mud weighting recommendation.</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs font-mono-tech text-neutral-400">
                    Well parameters within safe margin. Continuous temporal transformer scan operating at 1,000 Hz.
                  </p>
                )}
              </div>

            </div>

            {/* Verification Footer */}
            <div className="pt-4 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech text-neutral-400">
              <span className="text-neutral-500">
                Validated against North Alexandria & Zohr Field deepwater operational bounds.
              </span>
              <span className="text-blue-400">Model: PyTorch Temporal Autoencoder v2.4</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
