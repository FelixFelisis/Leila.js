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

  onload() {
    
  }

  update() {
    // game logic here
  }

  render() {
    // rendering here
  }

  mousemove() {
    // mouse event here
  }

  keydown() {
    // keyboad inputs here
  }

}

module.exports = State;
