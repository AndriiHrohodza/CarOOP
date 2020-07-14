function MovementsLogic(dashboardObj, gearsObj, loggerObj) {
  //PRIVAT Properties
  this._dashboardObj = dashboardObj;
  this._gearsObj = gearsObj;
  this._loggerObj = loggerObj;

  //PRIVATE Methods
  //Crashed the engine
  this._crashTheEngine = function() {
    let _this = this;
    setTimeout(function() {
      _this._dashboardObj.showStatus('Car has been stoped');
      _this._loggerObj.log('Car has been crashed');
      _this._dashboardObj.showBtn();
      _this._gearsObj.showNeutralGear();
      _this._gearsObj.stop();
    }, 5000)
  }

  //PUBLIC methods
  //Car started
  this.carStarted = function() {
    this._loggerObj.log('started');
    this._dashboardObj.showStatus('Car has be started');
    this._dashboardObj.hideBtn();
    this._gearsObj.start();
    this._crashTheEngine();
  };
  //Car not started
  this.carNotStarted = function() {
    this._gearsObj.showNeutralGear();
    this._loggerObj.log('Car can not be started');
    this._dashboardObj.showStatus('Car can`t be started');
    this._dashboardObj.showBtn();
  };

}
