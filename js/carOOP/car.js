function Car(id) {
  this.carHtml = new CarRender(id);
  this.carHtml.render();

  //Public Methods
  //processor logic
  this.processElements = function(arr, processor) {
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      processor(elem);
    }
  };

  //PRIVAT Properties
  this._carId = document.getElementById(id);

  //PRIVATE Methods
  this._dashboard = new Dashboard(this._carId, this.processElements);
  this._gear = new Gear(this._carId, this.processElements);
  this._logger = new Logger();
  this._movementsLogic = new MovementsLogic(this._dashboard, this._gear, this._logger);
  this._engine = new Engine();

}

// Car start
Car.prototype.start = function() {
  if (this._engine.start() != false) {
    this._movementsLogic.carStarted();
  } else {
    this._movementsLogic.carNotStarted();
  }
};

//Car stop
Car.prototype.stop = function() {
  console.log('Car stopped')
};
