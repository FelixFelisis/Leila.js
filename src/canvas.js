
/**
* file : canvas.js
*
* Canvas manager module
* 
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

module.exports = {

  createCanvas : function(width, height, option) {
    var canvas = document.createElement("canvas");
    document.querySelector("body").appendChild(canvas);

    canvas.width = width || 400;
    canvas.height = height || 400;

    if(option && (option === 'webgl' || option === '2d')) {
      this._context = canvas.getContext(option);
    } else {
      this._context = canvas.getContext('2d');
    }

    this._canvas = canvas;

  }
}