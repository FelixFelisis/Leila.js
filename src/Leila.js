
window.Leila = Leila | {};

Leila.Game = function() {
  this.hello = "hello world";
}

Leila.Game.prototype.test = function() {
  console.log(this.hello);
}

function leila() {
  return new Game();
}

var app = leila();

app.test();
// test wh2





