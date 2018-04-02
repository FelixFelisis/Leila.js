
/**
* file : Leila.js 
*
* authors : Arthur Correnson / Benjamin Mandervelde
* 
* this code is distributed under the MIT licence
*
*/

const CanvasManager = require('./canvas');

const Core = require('./core');

window.Leila = {};

// Core module
Object.assign(Leila, Core);

// CanvasManager module
Object.assign(Leila, CanvasManager);
