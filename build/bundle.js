(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

/**
 * file : Leila.js 
 *
 * authors : Arthur Correnson / Benjamin Mandervelde
 * 
 * this code is distributed under the MIT
 *
 */

const cm = require('./canvas');

// define a new "namespace"
window.Leila = {};

Leila.CanvasManager = cm;

// base class -> Game
Leila.Game = function() {
  this.hello = "hello world";
}

Leila.Game.prototype.test = function() {
  console.log(this.hello);
}

// setup a new game
function leila() {
  return new Leila.Game();
}
},{"./canvas":2}],2:[function(require,module,exports){

/**
 * file : canvas.js 
 *
 * authors : Arthur Correnson / Benjamin Mandervelde
 * 
 * this code is distributed under the MIT licence
 *
*/

let cm = (function() {
  CanvasManager = {};

  CanvasManager.plugin = true;

  CanvasManager.create = function (width, height, parent) {
    this._canvas = document.createElement('canvas');
    this._canvas.width = width || 400;
    this._canvas.height = height || 400;
    this.bindTo(parent || 'body');
  };

  CanvasManager.remove = function () {
    delete this._canvas;
  };

  CanvasManager.bindParams = function (params) {
    if(typeof params === 'object') {
      for(let index in params) {
        this._canvas.setAttribute(index, params[index]);
      }
    } else {
      console.error('[LeilaJs] Canvas.bindParam: params is not an object');
    }
  };

  CanvasManager.bindTo = function (parent) {
    document.querySelector(parent).appendChild(this._canvas);
  };

  CanvasManager.get2dContext = function () {
    if(this._canvas) {
      return this._canvas.getContext('2d');
    } else {
      console.error('[LeilaJs] Canvas.get2dContext: no canvas created');
    }
  };

  return CanvasManager;
})();

module.exports = cm;
},{}]},{},[1]);
