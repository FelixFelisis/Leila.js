/**
 * file : core.js
 *
 * description : main file of the lib
 *
 * author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

// LOCAL
const App = require('./app');

// GLOBAL
window.LEILA = {
	GameObject: require('./gameObjects/gameObject'),
	Group: require('./gameObjects/group')
}

window.Leila = function(w, h) {
  var app = new App(w, h);
  return app;
}
