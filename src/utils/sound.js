// 100% Silent Architecture Experience — Audio is completely disabled
class SilentAudioEngine {
  constructor() {
    this.isPlaying = false;
  }
  init() {}
  start() {}
  stop() {}
  toggle() {
    return false;
  }
}

export const ambientSound = new SilentAudioEngine();

// Completely silent export
export default ambientSound;
