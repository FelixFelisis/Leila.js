/**
 * file : gameObjects/gameObject.js
 *
 * description : class GameObject
 *
 * author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

const areEquals = require('../utils/objectEqual');

class GameObject {
  constructor(name) {
    this.name = name;
    this.state = {};
  }

  setState(newState) {
    if (!areEquals(newState, this.state)) {
        for (let key in newState) {
        this.state[key] = newState[key];
      }
    }
  }

  update() {
    // logic here
  }

  render() {
    // render herer
  }

}

module.exports = GameObject;