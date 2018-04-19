(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  constructor(w, h) {
    this.createCanvas(w, h);
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
    this.setInput();
  }

  setInput() {
    let state = this.states[this.actualState];
    document.addEventListener("keydown", state.keydown);
    document.addEventListener("mousemove", state.mousemove);
  }

  loadImage(imgName) {
    if (!this.images) this.images = {};
    let img = new Image();
    img.src = "./images/" + imgName + ".jpg";
    this.images[imgName] = img;
  }

  loadImages(...imgs) {
    for (img of imgs) {
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

  play() {
    this.loop();
  }
}

if (module !== undefined) {
  module.exports = App;
}

},{"./layer":3,"./state":4}],2:[function(require,module,exports){
/**
 * file : core.js
 *
 * description : main file of the lib
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

const App = require('./app');

window.Leila = function(w, h) {
  var app = new App(w, h);
  return app;
}

},{"./app":1}],3:[function(require,module,exports){
/**
 * file : layer.js
 *
 * description : class Layer
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

class Layer {
  constructor(ctx) {
    this.context = ctx;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
  }

  fillStyle(c) {
    if (typeof c === 'string') {
      this.context.fillStyle = c;
    }
  }

  strokeStyle(c) {
    if (typeof c === 'string') {
      this.context.strokeStyle = c;
    }
  }

  fillRect(a, b, c, d) {
    this.context.fillRect(a, b, c, d);
  }

  strokeRect(a, b, c, d) {
    this.context.strokeRect(a, b, c, d);
  }

  drawImage(img, x, y, w, h) {
    if (w || h) {
      let wi = img.width;
      let he = img.height;
      this.context.drawImage(img, 0, 0, wi, he, x, y, w, h);
    } else {
      this.context.drawImage(img, x, y);
    }
  }

  font(f) {
    if (typeof f === 'string') {
      this.context.font = f;
    }
  }

  strokeText(string, x, y) {
    if (typeof string === 'string') {
      this.context.strokeText(string, x, y);
    }
  }

  fillText(string, x, y) {
    if (typeof string === 'string') {
      this.context.fillText(string, x, y);
    }
  }

  clear(c) {
    this.fillStyle(c);
    this.fillRect(0, 0, this.width, this.height);
  }
}

if (module !== undefined) {
  module.exports = Layer;
}

},{}],4:[function(require,module,exports){
/**
 * file : state.js
 *
 * description : class State
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

class State {
  constructor(name) {
    this.name = name;
  }

  enter() {
    // state entered
  }

  update() {
    // game logic here
  }

  render() {
    // rendering here
  }

}

if (module !== undefined) {
  module.exports = State;
}

},{}]},{},[2]);
