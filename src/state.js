/**
 * file : state.js
 *
 * description : class State
 *
 *  author : Arthur Correnson <jdrprod@gmail.com>
 *
 * this code is distibuted uneder the MIT licence
 */

class State {
  constructor(name) {
    this.name = name;
  }

  enter() {
    // state entered
  }

  update() {
    // game logic here
  }

  render() {
    // rendering here
  }

}

if (module !== undefined) {
  module.exports = State;
}
