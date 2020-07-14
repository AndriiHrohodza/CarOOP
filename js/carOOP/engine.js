function Engine() {

  //PUBLIC methods
  //Start the engine
  this.start = function() {
    let randomNubmer = Math.random();
    if (randomNubmer > 0.5) {
      return true;
    } else {
      return false;
    }
  }
}
