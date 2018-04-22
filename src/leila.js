/**
 * file : leila.js
 *
 * description : main file of the lib
 *
 * author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

// namespace LEILA
window.LEILA = {
	GameObject: require('./gameObjects/gameObject'),
	Group: require('./gameObjects/group'),
	Sprite: require('./gameObjects/sprite'),
	App: require('./app')
}

// main function
window.Leila = function(w, h) {
  var app = new LEILA.App(w, h);
  return app;
}
