
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

  // drawing functions
  var Draw = require('./Draw');

  // math functions
  var math = require('./math');

  // main loop manager
  var mainLoop = require('./mainLoop');

  // set all properties
  Object.assign(
    lib,
    Utils,
    Canvas,
    Draw,
    math,
    mainLoop
    );

  // make Leila global
  window.Leila = lib;

  // onload try to start the main loop
  window.onload = function() {
    Leila._innit();
  }

})();






