(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

/**
* file : Leila.js 
*
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

const CanvasManager = require('./canvas');

const Core = require('./core');

window.Leila = {};

// Core module
Object.assign(Leila, Core);

// CanvasManager module
Object.assign(Leila, CanvasManager);

},{"./canvas":2,"./core":3}],2:[function(require,module,exports){

/**
* file : canvas.js
*
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

const CanvasManager = {};

CanvasManager.createCanvas = function (width, height, parent) {
  this._canvas = document.createElement('canvas');
  this._canvas.width = width || 400;
  this._canvas.height = height || 400;
  this.canvasParent(parent || 'body');
};

CanvasManager.canvasParams = function (params) {
  if(typeof params === 'object') {
    for(let index in params) {
      this._canvas.setAttribute(index, params[index]);
    }
  } else {
    console.error('[LeilaJs] Canvas.bindParam: params is not an object');
  }
};

CanvasManager.canvasParent = function (parent) {
  document.querySelector(parent).appendChild(this._canvas);
};

CanvasManager.get2dContext = function () {
  if(this._canvas) {
    this._context = this._canvas.getContext('2d');
  } else {
    console.error('[LeilaJs] Canvas.get2dContext: no canvas created');
  }
};

CanvasManager.clearCanvas = function(color) {
  let w = this._context.canvas.width;
  let h = this._context.canvas.height;
  this._context.fillStyle = color;
  this._context.fillRect(0, 0, w, h);
}

module.exports = CanvasManager;
},{}],3:[function(require,module,exports){

/**
* file : core.js 
*
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT
*
*/

const Core = {};

Core.components = [];

Core.componentsToRender = [];

Core.loadImages = function() {
  if (!this.images) this.images = {};
  // loop over components
}

Core.register = function(component) {
  // register a new component
  this.components.push(component);
}

Core.render = function(dt) {
  // loop over components and components.render();
  for(var component of this.components) {
    component.render(dt);
  }
}

Core.update = function(dt) {
  // loop over components and components.update();
  for(var component of this.components) {
    component.update(dt);
  }
}

Core.gameLoop = function() {
  // delta time
  let date = Date.now();
  let dt = date - this._lastUpdate;
  this._lastUpdate = date;
  // update
  this.update(dt / 1000);
  this.render(dt / 1000);
  window.requestAnimationFrame(() => {
    this.gameLoop();
  });
}

Core.init = function(args) {
  if(!args) args = {};
  if(this.createCanvas) {
    this.createCanvas(args.width, args.height);
  } else {
    console.error("[LeilaJs] Core.init -> no CanvasManager set");
  }
}

Core.start = function() {
  this.loadImages();
  this._lastUpdate = Date.now();
  window.requestAnimationFrame(() => {
    this.gameLoop();
  });
}

// class gameObject
Core.GameObject = function(name) {
  this.name = name;
  this.state = {};
}

Core.GameObject.prototype.setState = function(args) {
  for(var fields in args) {
    this[fields] = args[fields];
  }
  this.updated = true;
}

Core.GameObject.prototype.update = function(dt) {};

module.exports = Core;
},{}]},{},[1]);
