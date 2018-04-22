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

  drawImage(img, x, y, w, h) {
    if (w || h) {
      let wi = img.width;
      let he = img.height;
      this.context.drawImage(img, 0, 0, wi, he, x, y, w, h);
    } else {
      this.context.drawImage(img, x, y);
    }
  }

  font(f) {
    if (typeof f === 'string') {
      this.context.font = f;
    }
  }

  strokeText(string, x, y) {
    if (typeof string === 'string') {
      this.context.strokeText(string, x, y);
    }
  }

  fillText(string, x, y) {
    if (typeof string === 'string') {
      this.context.fillText(string, x, y);
    }
  }

  clear(c) {
    this.fillStyle(c);
    this.fillRect(0, 0, this.width, this.height);
  }
}

module.exports = Layer;
