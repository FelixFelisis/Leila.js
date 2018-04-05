
/**
* file : draw.js 
*
* 2D rendering module
* 
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

module.exports = {

  fillStyle : function(color) {
    this._context.fillStyle = color;
  },

  clear : function(color) {
    this.fillStyle(color);
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
  },

  fillRect : function(x, y, w, h) {
    this._context.fillRect(x, y, w, h);
  },

  strokeStyle : function(color) {
    this._context.strokeStyle = color;
  },

  strokeRect : function(x, y, w, h) {
    this._context.strokeRect(x, y, w, h);
  }
}