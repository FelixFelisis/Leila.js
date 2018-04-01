/**
 * authors : Arthur Correnson / Benjamin Mandervelde
 * 
 * this code is distributed under the MIT licence
 *
 */

Leila.CanvasManager = {};

Leila.CanvasManager.create = function (width, height, parent) {
  this._canvas = document.createElement('canvas');
  this._canvas.width = width || 400;
  this._canvas.height = height || 400;
  if (parent) this.bindTo(parent);
};

Leila.CanvasManager.remove = function () {
  delete this._canvas;
};

Leila.CanvasManager.bindParams = function (params) {
  if(typeof params === 'object') {
    for(let index in params) {
      this._canvas.setAttribute(index, params[index]);
    }
  } else {
    console.error('[LeilaJs] Canvas.bindParam: params is not an object');
  }
};

Leila.CanvasManager.bindTo = function (parent) {
  document.querySelector(parent).appendChild(this._canvas);
};