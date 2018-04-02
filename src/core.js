
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
  if (component instanceof this.GameObject)
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
    this.get2dContext();
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
}

Core.GameObject.prototype.update = function(dt) {};

Core.GameObject.prototype.render = function(dt) {};

module.exports = Core;