/**
 * file : layer.js
 *
 * description : class Layer
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

class Layer {
  constructor(ctx) {
    this.context = ctx;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
  }

  fillStyle(c) {
    if (typeof c === 'string') {
      this.context.fillStyle = c;
    }
  }

  strokeStyle(c) {
    if (typeof c === 'string') {
      this.context.strokeStyle = c;
    }
  }

  fillRect(a, b, c, d) {
    this.context.fillRect(a, b, c, d);
  }

  strokeRect(a, b, c, d) {
    this.context.strokeRect(a, b, c, d);
  }

  clear(c) {
    this.fillStyle(c);
    this.fillRect(0, 0, this.width, this.height);
  }
}

if (module !== undefined) {
  module.exports = Layer;
}
