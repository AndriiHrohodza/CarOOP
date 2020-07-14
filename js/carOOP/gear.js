function Gear(carId, processor) {
  //PRIVAT Properties
  this._gears = carId.querySelectorAll('.gear');
  this._neutral_gear = 'N';
  this._first_gear = 1;

  //PRIVATE Methods
  //Shift up
  this._shiftUp = function() {
    if (this._first_gear < 5) {
      processor(this._gears, (elem) => elem.innerHTML = this._first_gear);
      this._first_gear++;
    }
  };

  //PUBLIC methods
  //Show neutral gear
  this.showNeutralGear = function() {
    processor(this._gears, (elem) => elem.innerHTML = 'Gear:' + ' ' + this._neutral_gear);
  };
  // Start gears up
  this.start = function() {
    let _this = this;
    interval = window.setInterval(function() {
      _this._shiftUp();
    }, 1000)
  };
  // Start gears up
  this.stop = function() {
    let _this = this;
    clearInterval = window.clearInterval(_this.start());
  }
}
