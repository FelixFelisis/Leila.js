
// define a new "namespace"
window.Leila = Leila | {};

// base class -> Game
Leila.Game = function() {
  this.hello = "hello world";
}

Leila.Game.prototype.test = function() {
  console.log(this.hello);
}

// setup a new game
function leila() {
  return new Game();
}
