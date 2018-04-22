/**
 * file : gameObjects/gameObject.js
 *
 * description : class GameObject
 *
 * author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

class GameObject {
  constructor(name) {
    this.name = name;
  }

  update() {
    // logic here
  }

  render(ctx) {
    // render herer
  }

}

module.exports = GameObject;