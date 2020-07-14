function Dashboard(carId, processor) {
  //PRIVAT Properties
  this._statusInfoes = carId.querySelectorAll('.status');

  //Public Properties
  this.btnStarts = carId.querySelectorAll('.btnStart');

  //PUBLIC methods
  //Show status
  this.showStatus = function(status) {
    return processor(this._statusInfoes, (elem) => elem.innerHTML = status);
  };
  //Show button
  this.showBtn = function() {
    processor(this.btnStarts, (elem) => elem.classList.remove('hide'));
  };
  //Hide button
  this.hideBtn = function() {
    processor(this.btnStarts, (elem) => elem.classList.add('hide'));
  };

}
