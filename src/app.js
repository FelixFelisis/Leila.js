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
    this.clearInput();
    this.actualState = stateName;
    this.states[stateName].enter();
    this.setInput();
    this.tryToStart();
  }

  getActualState() {
    return this.states[this.actualState];
  }

  clearInput() {
    if (this.actualState) {
      let state = this.states[this.actualState];
      document.removeEventListener('keydown', LEILA.inputs.keydown);
      document.removeEventListener('mousemove', LEILA.inputs.mousemove);
    }
  }

  setInput() {
    let state = this.states[this.actualState];
    
    LEILA.inputs = {
      keydown: function(e) {
        state.keydown(e);
      },
      mousemove: function(e) {
        state.mousemove(e);
      }
    }

    document.addEventListener("keydown", LEILA.inputs.keydown);
    document.addEventListener("mousemove", LEILA.inputs.mousemove);
  }

  loadImage(imgName) {
    if (!this.images) this.images = {};
    let img = new Image();
    this.toLoad += 1;
    img.src = "./images/" + imgName + ".jpg";

    img.onload = () => {
      this.loaded += 1;
      this.tryToStart();
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
    this.states[this.actualState].onload();
  }

  tryToStart() {
    // play only if all files
    // needed are loaded
    if (this.toLoad === this.loaded) {
      this.onload();
      this.loop();            
    }
  }
}

module.exports = App;
