class Tomorse {
  constructor(options = {}) {
    this.audioCtx = new AudioContext();
    this.oscillatorNode = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();
    this.oscillatorNode.type = "sine";
    this.oscillatorNode.frequency.value = 700;
    this.gainNode.gain.value = 0.3;
    this.oscillatorNode.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    this.time = this.audioCtx.currentTime;
    this.gainLevel = 0.3;
    this.ddPause = 0.15;
    this.ditLength = 0.04;
    this.dahLength = 0.12;
    this.note = this.gainNode.gain;
    this.oscillatorNode.type = options.type || "sine";
    this.oscillatorNode.frequency.value = options.frequency || 700;
    this.gainLevel = options.gain || 0.3;
  }

  play(str) {
    const morseLookup = {
      [" "]: "/",
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--..",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      0: "-----",
    };
    const encodedArr = str.split("").map((char) => {
      return morseLookup[char];
    });
    this.oscillatorNode.start(this.time);
    encodedArr.forEach((char) => {
      for (let i = 0; i < char.length; i++) {
        if (char[i] === ".") {
          this.dit();
        } else if (char[i] === "-") {
          this.dah();
        } else if (char[i] === "/") {
          this.letterPause();
        }
      }
      this.characterPause();
    });
  }

  dit() {
    this.note.setValueAtTime(this.gainLevel, this.time);
    this.time += this.ditLength;
    this.note.setValueAtTime(0, this.time);
    this.time += this.ddPause;
  }

  dah() {
    this.note.setValueAtTime(this.gainLevel, this.time);
    this.time += this.dahLength;
    this.note.setValueAtTime(0, this.time);
    this.time += this.ddPause;
  }

  characterPause() {
    this.note.setValueAtTime(0, this.time);
    this.time += this.ddPause + this.ditLength;
  }

  letterPause() {
    this.note.setValueAtTime(0, this.time);
    this.time += this.ddPause + 0.28;
  }
}

export default Tomorse;
