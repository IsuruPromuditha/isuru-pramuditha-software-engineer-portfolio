// Evolving atmospheric progression: Fmaj9 -> Em7 -> Dm9 -> Cmaj9
const CHORD_PROGRESSION: number[][] = [
  [174.61, 220.0, 261.63, 329.63, 392.0], // Fmaj9
  [164.81, 196.0, 246.94, 293.66, 392.0], // Em7
  [146.83, 174.61, 220.0, 261.63, 329.63], // Dm9
  [130.81, 196.0, 246.94, 293.66, 329.63], // Cmaj9
];

const MELODY_POOL: number[] = [523.25, 587.33, 659.25, 783.99, 880.0, 987.77];

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private lfoOsc: OscillatorNode | null = null;
  private activeNodes: AudioNode[] = [];
  private activeOscs: OscillatorNode[] = [];
  private chordTimer: number | null = null;
  private melodyTimer: number | null = null;
  private chordIndex = 0;
  private melodyStep = 0;
  private isPlaying = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getState(): boolean {
    return this.isPlaying;
  }

  public start(): void {
    if (this.isPlaying || typeof window === 'undefined') return;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const master = this.ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.06, now + 1.2);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(680, now);
    filter.Q.setValueAtTime(0.8, now);

    // Subtle slow breathing LFO on filter cutoff
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.11, now);
    lfoGain.gain.setValueAtTime(240, now);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(now);

    // Atmospheric tape-style feedback delay
    const delay = this.ctx.createDelay(1.5);
    delay.delayTime.setValueAtTime(0.42, now);
    const delayFeedback = this.ctx.createGain();
    delayFeedback.gain.setValueAtTime(0.36, now);
    const delayFilter = this.ctx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.setValueAtTime(1400, now);

    filter.connect(master);
    filter.connect(delay);
    delay.connect(delayFilter);
    delayFilter.connect(delayFeedback);
    delayFeedback.connect(delay);
    delayFilter.connect(master);

    master.connect(this.ctx.destination);

    this.masterGain = master;
    this.filterNode = filter;
    this.lfoOsc = lfo;
    this.activeNodes = [master, filter, lfoGain, delay, delayFeedback, delayFilter];
    this.isPlaying = true;
    this.chordIndex = 0;
    this.melodyStep = 0;

    // Schedule first warm pad chord and melodic shimmer immediately
    this.triggerPadChord();
    this.triggerBellNote();

    this.chordTimer = window.setInterval(() => {
      if (this.isPlaying) {
        this.chordIndex = (this.chordIndex + 1) % CHORD_PROGRESSION.length;
        this.triggerPadChord();
      }
    }, 4800);

    this.melodyTimer = window.setInterval(() => {
      if (this.isPlaying) {
        this.melodyStep += 1;
        this.triggerBellNote();
      }
    }, 1600);
  }

  private triggerPadChord(): void {
    if (!this.ctx || !this.filterNode || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const chord = CHORD_PROGRESSION[this.chordIndex];

    chord.forEach((freq, idx) => {
      if (!this.ctx || !this.filterNode) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime((idx - 2) * 3.5, now);

      const peak = idx === 0 ? 0.24 : 0.14 / (idx * 0.6 + 1);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peak, now + 1.4);
      gain.gain.exponentialRampToValueAtTime(peak * 0.65, now + 3.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.1);

      osc.connect(gain);
      gain.connect(this.filterNode);
      osc.start(now);
      osc.stop(now + 5.2);

      this.activeOscs.push(osc);
      osc.onended = () => {
        this.activeOscs = this.activeOscs.filter((o) => o !== osc);
        try {
          osc.disconnect();
          gain.disconnect();
        } catch {
          // Ignore cleanup errors
        }
      };
    });
  }

  private triggerBellNote(): void {
    if (!this.ctx || !this.filterNode || !this.isPlaying) return;
    // Leave occasional rests for natural musical phrasing
    if (this.melodyStep % 4 === 3) return;

    const now = this.ctx.currentTime;
    const noteIdx = (this.chordIndex * 2 + this.melodyStep) % MELODY_POOL.length;
    const freq = MELODY_POOL[noteIdx];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

    osc.connect(gain);
    gain.connect(this.filterNode);
    osc.start(now);
    osc.stop(now + 2.3);

    this.activeOscs.push(osc);
    osc.onended = () => {
      this.activeOscs = this.activeOscs.filter((o) => o !== osc);
      try {
        osc.disconnect();
        gain.disconnect();
      } catch {
        // Ignore cleanup errors
      }
    };
  }

  public playSubtleCue(freq = 523.25): void {
    if (!this.isPlaying || !this.ctx || !this.filterNode) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.035, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.filterNode);
      osc.start(now);
      osc.stop(now + 0.36);
    } catch {
      // Ignore audio cue failures gracefully
    }
  }

  public stop(): void {
    if (this.chordTimer !== null) {
      window.clearInterval(this.chordTimer);
      this.chordTimer = null;
    }
    if (this.melodyTimer !== null) {
      window.clearInterval(this.melodyTimer);
      this.melodyTimer = null;
    }

    if (!this.isPlaying || !this.ctx || !this.masterGain) {
      this.isPlaying = false;
      return;
    }

    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(Math.max(this.masterGain.gain.value, 0.0001), now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    const oscs = [...this.activeOscs];
    const lfo = this.lfoOsc;
    const nodes = [...this.activeNodes];

    this.activeOscs = [];
    this.activeNodes = [];
    this.lfoOsc = null;
    this.filterNode = null;
    this.masterGain = null;
    this.isPlaying = false;

    window.setTimeout(() => {
      if (lfo) {
        try {
          lfo.stop();
          lfo.disconnect();
        } catch {
          // Already stopped
        }
      }
      oscs.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // Already stopped
        }
      });
      nodes.forEach((node) => {
        try {
          node.disconnect();
        } catch {
          // Already disconnected
        }
      });
    }, 500);
  }
}

export const ambientSound = new AmbientSoundEngine();
