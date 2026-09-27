/**
 * Pure Web Audio API Ambient Sound Synthesizer
 * Provides an atmospheric, calm reading hum without external audio files.
 */
class AmbientAudioController {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];
  private filterNode: BiquadFilterNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (!this.ctx) {
      this.init();
    }
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.stop(); // Clean any existing

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);

    // Warm Low-pass filter
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);

    // Subtle binaural harmonized drone (F# chord: 92.5Hz, 138.6Hz, 185Hz)
    const baseFreqs = [92.5, 92.8, 138.6, 185.0];
    this.oscillators = baseFreqs.map((freq) => {
      const osc = this.ctx!.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);
      
      const subGain = this.ctx!.createGain();
      subGain.gain.setValueAtTime(0.25, this.ctx!.currentTime);
      
      osc.connect(subGain);
      subGain.connect(this.filterNode!);
      osc.start();
      return osc;
    });

    this.filterNode.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);
    this.isPlaying = true;
  }

  public stop() {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch (_) { /* ignore */ }
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1250);
    } else {
      this.isPlaying = false;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientAudioController();
