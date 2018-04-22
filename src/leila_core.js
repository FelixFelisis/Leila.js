/**
 * file : leila_core.js
 *
 * description : main file of the lib (without plugins)
 *
 * author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

// namespace LEILA
window.LEILA = {
	App: require('./app')
}

// main function
window.Leila = function(w, h) {
  var app = new LEILA.App(w, h);
  return app;
}