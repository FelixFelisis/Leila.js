
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
  console.log(this);
  // loop over components
}

Core.register = function(component) {
  // register a new component
  this.components.push(component);
}

Core.render = function() {
  // loop over components and components.render();
}

Core.update = function() {
  // loop over components and components.update();
  console.log("test");
}

Core.gameLoop = function() {
  this.update();
  this.render();
  window.requestAnimationFrame(() => {
    this.gameLoop();
  });
}

Core.init = function(args) {
  if(this.createCanvas) {
    this.createCanvas(args.width, args.height);
  } else {
    console.error("[LeilaJs] Core.init -> no CanvasManager set");
  }
}

Core.start = function() {
  this.loadImages();
    window.requestAnimationFrame(() => {
    this.gameLoop();
  });
}

module.exports = Core;