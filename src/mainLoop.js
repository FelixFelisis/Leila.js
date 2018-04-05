
/**
* file : canvas.js
*
* Main loop module
* 
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

module.exports = {

  _innit : function () {
    if(window.main && typeof window.main === 'function') {
      window.requestAnimationFrame(() => {
        this._step();
      });
    } else {
      console.log("nop");
    }
  },

  _step : function() {
    window.main();
    window.requestAnimationFrame(() => {
      this._step();
    });
  }
}