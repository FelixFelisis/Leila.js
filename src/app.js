/**
 * file : app.js
 *
 * description : class App
 *
 * author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

const Layer = require('./layer');
const State = require('./state');

class App {
  constructor(w, h) {
    this.createCanvas(w, h);
    this.getContext();
    this.toLoad = 0;
    this.loaded = 0;
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
    this.setInput();
    this.play();
  }

  setInput() {
    let state = this.states[this.actualState];
    document.addEventListener("keydown", (e) => {
      state.keydown(e);
    });
    document.addEventListener("mousemove", (e) => {
      state.mousemove(e);
    });
  }

  loadImage(imgName) {
    if (!this.images) this.images = {};
    let img = new Image();
    this.toLoad += 1;
    img.src = "./images/" + imgName + ".jpg";

    img.onload = () => {
      this.loaded += 1;
      this.play();
    }

    this.images[imgName] = img;
  }

  loadImages(...imgs) {
    for (let img of imgs) {
      this.loadImage(img);
    }
  }

  loop() {
    this.states[this.actualState].update();
    this.states[this.actualState].render();
    window.requestAnimationFrame(() => {
      this.loop();
    });
  }

  onload() {
    console.log("loaded state 2");
    this.states[this.actualState].onload();
  }

  play() {
    // play only if all files
    // needed are loaded
    if (this.toLoad === this.loaded) {
      this.onload();
      this.loop();            
    }
  }
}

module.exports = App;
