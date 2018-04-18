/**
 * file : app.js
 *
 * description : class App
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

const Layer = require('./layer');
const State = require('./state');

class App {
  constructor() {
    this.createCanvas();
    this.getContext();
  }

  createCanvas(w, h) {
    var cnv = document.createElement("canvas");
    cnv.width = w || 400;
    cnv.height = h || 400;
    document.querySelector("body").appendChild(cnv);
    this.canvas = cnv;
  }

  getContext() {
    var context = this.canvas.getContext('2d');
    this.layer = new Layer(context);
  }

  register(state) {
    if (!this.states) this.states = {};
    var newState = new State(state.name);
    Object.assign(newState, state);
    this.states[state.name] = newState;
  }

  enterState(stateName) {
    this.actualState = stateName;
    this.states[stateName].enter();
  }

  loop() {
    this.states[this.actualState].update();
    this.states[this.actualState].render();
    window.requestAnimationFrame(() => {
      this.loop();
    });
  }

  play() {
    this.loop();
  }
}

if (module !== undefined) {
  module.exports = App;
}
