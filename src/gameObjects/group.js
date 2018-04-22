/**
 * file : gameObjects/group.js
 *
 * description : class Group
 *
 * author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

class Group {
	constructor() {
		this.gameObjects = [];
	}

	render(context) {
		this.gameObjects.map(obj => {
			obj.render(context);
		});
	}

	update() {
		this.gameObjects.map(obj => {
			obj.update();
		});
	}

	append(...gameObjects) {
		for (let gObj of gameObjects) {
			this.gameObjects.push(gObj);
		}
	}
}

module.exports = Group;
