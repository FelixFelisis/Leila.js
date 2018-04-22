/**
 * file : gameObjects/sprite.js
 *
 * description : class Sprite
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

const GameObject = require('./gameObject');

class Sprite extends GameObject {
	constructor(game, name, x, y, key) {
		super(name);
		this.game = game;
		this.x = x;
		this.y = y;
		this.key = key || name;
		
		this.w = this.game.images[this.key].width;
		this.h = this.game.images[this.key].height;

	}

	scale(sx, sy) {
		this.w *= sx;
		this.h *= sy;
	}

	render() {
		let img = this.game.images[this.key];
		this.game.layer.drawImage(img, this.x, this.y, this.w, this.h);
	}
}

module.exports = Sprite;