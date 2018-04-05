(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

/**
* file : draw.js 
*
* 2D rendering module
* 
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

module.exports = {

  fillStyle : function(color) {
    this._context.fillStyle = color;
  },

  clear : function(color) {
    this.fillStyle(color);
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
  },

  fillRect : function(x, y, w, h) {
    this._context.fillRect(x, y, w, h);
  },

  strokeStyle : function(color) {
    this._context.strokeStyle = color;
  },

  strokeRect : function(x, y, w, h) {
    this._context.strokeRect(x, y, w, h);
  }
}
},{}],2:[function(require,module,exports){

/**
* file : Leila.js 
*
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

(function() {
  'use strict';

  var lib = {};

  // utils functions
  var Utils = {

  }

  // canvas functions
  var Canvas = require('./canvas');

  var Draw = require('./Draw');

  var math = require('./math');

  var mainLoop = require('./mainLoop');

  Object.assign(
    lib,
    Utils,
    Canvas,
    Draw,
    math,
    mainLoop
    );

  window.Leila = lib;

  window.onload = function() {
    Leila._innit();
  }

})();







},{"./Draw":1,"./canvas":3,"./mainLoop":4,"./math":5}],3:[function(require,module,exports){

/**
* file : canvas.js
*
* Canvas manager module
* 
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

module.exports = {

  createCanvas : function(width, height, option) {
    var canvas = document.createElement("canvas");
    document.querySelector("body").appendChild(canvas);

    canvas.width = width || 400;
    canvas.height = height || 400;

    if(option && (option === 'webgl' || option === '2d')) {
      this._context = canvas.getContext(option);
    } else {
      this._context = canvas.getContext('2d');
    }

    this._canvas = canvas;

  }
}
},{}],4:[function(require,module,exports){

/**
* file : canvas.js
*
* Main loop module
* 
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

module.exports = {

  _innit : function () {
    if(window.main && typeof window.main === 'function') {
      window.requestAnimationFrame(Leila._step);
    } else {
      console.log("nop");
    }
  },

  _step : function() {
    window.main();
    window.requestAnimationFrame(Leila._step);
  }
}
},{}],5:[function(require,module,exports){
module.exports = {
  sin : Math.sin,

  cos : Math.cos,

  tan : Math.tan,

  acos : Math.acos,

  asin : Math.asin,

  atan : Math.atan
}
},{}]},{},[2]);
