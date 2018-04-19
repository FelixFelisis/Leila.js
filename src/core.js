/**
 * file : core.js
 *
 * description : main file of the lib
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

const App = require('./app');

window.Leila = function(w, h) {
  var app = new App(w, h);
  return app;
}
