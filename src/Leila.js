
/**
* file : Leila.js 
*
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT
*
*/

const CanvasManager = require('./canvas');

const Core = require('./core');

// define a new "namespace"
window.Leila = {};

Object.assign(Leila, Core, CanvasManager);

Leila.init = function(args) {
  this.create(args.width, args.height);
}

Leila.start = function() {
  this.loadImages();
  window.requestAnimationFrame(() => {
    this.gameLoop();
  });
}