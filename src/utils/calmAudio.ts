/**
 * Serene & Calm Ambient Music Engine via Web Audio API.
 * Generates tranquil, warm ambient soundscapes with soft pads and gentle melodic chimes.
 * Perfect for quiet focus, coding, and relaxed listening.
 */

let audioCtx: AudioContext | null = null;
let isPlaying = false;
let masterGain: GainNode | null = null;
let timerId: number | null = null;
let padOsc1: OscillatorNode | null = null;
let padOsc2: OscillatorNode | null = null;
let padGain: GainNode | null = null;
let delayNode: DelayNode | null = null;
let feedbackGain: GainNode | null = null;

// Peaceful, dreamlike pentatonic scale frequencies (F major / D minor ambient - warm and soothing)
const CALM_FREQUENCIES = [
  220.00, // A3
  261.63, // C4
  293.66, // D4
  329.63, // E4
  349.23, // F4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  698.46, // F5
];

type StateListener = (playing: boolean) => void;
const listeners: Set<StateListener> = new Set();

function notifyListeners() {
  listeners.forEach(fn => fn(isPlaying));
}

export function subscribeCalmMusic(listener: StateListener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function isMusicPlaying(): boolean {
  return isPlaying;
}

function initAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return null;

  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new AudioCtx();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Plays a single gentle, resonant ambient bell / chime with soft attack and lush decay
 */
function playGentleChime(ctx: AudioContext, destination: AudioNode, freq: number) {
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Pure warm sine wave
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Subtle gentle vibrato
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.setValueAtTime(3.5, now);
    lfoGain.gain.setValueAtTime(1.2, now);
    lfo.connect(osc.frequency);
    lfo.start(now);
    lfo.stop(now + 3.5);

    // Soft, soothing envelope (attack 0.08s, long 3.2s decay)
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    osc.connect(gain);
    gain.connect(destination);

    osc.start(now);
    osc.stop(now + 3.3);
  } catch {
    // Ignore audio glitches
  }
}

/**
 * Starts the continuous calm ambient music sequence
 */
export function startCalmMusic(): boolean {
  const ctx = initAudioContext();
  if (!ctx) return false;

  if (isPlaying) return true;
  isPlaying = true;
  notifyListeners();

  const now = ctx.currentTime;

  // Master Gain for smooth volume control
  masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.001, now);
  masterGain.gain.linearRampToValueAtTime(0.7, now + 1.2); // Gentle 1.2s fade-in
  masterGain.connect(ctx.destination);

  // Spacious Ambient Delay (Echo) effect
  delayNode = ctx.createDelay();
  delayNode.delayTime.setValueAtTime(0.42, now);

  feedbackGain = ctx.createGain();
  feedbackGain.gain.setValueAtTime(0.35, now);

  const delayFilter = ctx.createBiquadFilter();
  delayFilter.type = 'lowpass';
  delayFilter.frequency.setValueAtTime(1200, now);

  delayNode.connect(delayFilter);
  delayFilter.connect(feedbackGain);
  feedbackGain.connect(delayNode);
  delayFilter.connect(masterGain);

  // Warm Pad Drone in background (F2 / C3 fifth)
  padGain = ctx.createGain();
  padGain.gain.setValueAtTime(0.001, now);
  padGain.gain.linearRampToValueAtTime(0.06, now + 2.0);

  const padFilter = ctx.createBiquadFilter();
  padFilter.type = 'lowpass';
  padFilter.frequency.setValueAtTime(320, now);

  padOsc1 = ctx.createOscillator();
  padOsc1.type = 'triangle';
  padOsc1.frequency.setValueAtTime(130.81, now); // C3

  padOsc2 = ctx.createOscillator();
  padOsc2.type = 'sine';
  padOsc2.frequency.setValueAtTime(174.61, now); // F3

  padOsc1.connect(padFilter);
  padOsc2.connect(padFilter);
  padFilter.connect(padGain);
  padGain.connect(masterGain);

  padOsc1.start(now);
  padOsc2.start(now);

  // Melodic chime generator loop (plays peaceful random notes every 1.5 - 2.8 seconds)
  let lastIndex = -1;
  const scheduleNextNote = () => {
    if (!isPlaying || !ctx || !masterGain || !delayNode) return;

    // Pick a note different from last
    let idx = Math.floor(Math.random() * CALM_FREQUENCIES.length);
    if (idx === lastIndex) {
      idx = (idx + 1) % CALM_FREQUENCIES.length;
    }
    lastIndex = idx;

    const freq = CALM_FREQUENCIES[idx];
    playGentleChime(ctx, masterGain, freq);
    playGentleChime(ctx, delayNode, freq);

    // Random timing between 1.4s and 2.4s for natural organic meditation rhythm
    const nextInterval = 1400 + Math.random() * 1000;
    timerId = window.setTimeout(scheduleNextNote, nextInterval);
  };

  // Play initial gentle welcoming chord (F major 7th)
  playGentleChime(ctx, masterGain, 349.23); // F4
  playGentleChime(ctx, masterGain, 440.00); // A4
  playGentleChime(ctx, delayNode, 523.25); // C5
  timerId = window.setTimeout(scheduleNextNote, 1600);

  return true;
}

/**
 * Stops the calm ambient music with a smooth fade-out
 */
export function stopCalmMusic() {
  if (!isPlaying) return;
  isPlaying = false;
  notifyListeners();

  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }

  if (masterGain && audioCtx) {
    try {
      const now = audioCtx.currentTime;
      masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8); // 800ms gentle fade out
      setTimeout(() => {
        try {
          if (padOsc1) {
            padOsc1.stop();
            padOsc1.disconnect();
            padOsc1 = null;
          }
          if (padOsc2) {
            padOsc2.stop();
            padOsc2.disconnect();
            padOsc2 = null;
          }
          if (masterGain) {
            masterGain.disconnect();
            masterGain = null;
          }
        } catch {
          // Ignore cleanup errors
        }
      }, 900);
    } catch {
      // Ignore
    }
  }
}

/**
 * Toggles calm ambient music on/off
 */
export function toggleCalmMusic(): boolean {
  if (isPlaying) {
    stopCalmMusic();
    return false;
  } else {
    return startCalmMusic();
  }
}
