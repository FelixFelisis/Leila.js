/**
 * authors : Arthur Correnson / Benjamin Mandervelde
 * 
 * this code is distributed under the MIT licence
 *
 */

// define a new "namespace"
window.Leila = {};

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