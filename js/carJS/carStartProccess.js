//Car declaration
function carDeclaration(id) {
  //Variables
  let first_gear;
  let neutral_gear;
  let interval;
  let carId = document.getElementById(id);
  let btnStarts = carId.querySelectorAll('.btnStart');
  let statusInfoes = carId.querySelectorAll('.status');
  let gears = carId.querySelectorAll('.gear');

  //Processor elements
  function processElements(arr, processor) {
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      processor(elem);
    }
  }

  //Initial settings
  getStatus('Press the button');
  first_gear = 1;
  neutral_gear = 'N';

  //Move car
  function carStart() {
    let randomNubmer = Math.random();
    if (randomNubmer > 0.5) {
      carStarted();
    } else {
      carNotStarted();
    }
  }

  //Car started
  function carStarted() {
    processElements(gears, (elem) => elem.innerHTML = 'Gear:' + ' ' + neutral_gear);
    getStatus('Car has been started');
    consoleMessage('start');
    processElements(btnStarts, (elem) => elem.classList.add('hide'));
    let interval = setInterval(shiftUp, 1000);
    setTimeout(function() {
      getStatus('Car has been stoped');
      consoleMessage('Car has been crashed');
      processElements(btnStarts, (elem) => elem.classList.remove('hide'));
      processElements(gears, (elem) => elem.innerHTML = 'Gear:' + ' ' + neutral_gear);
      clearInterval(interval);
    }, 5000);
  }
  //Car not started
  function carNotStarted() {
    getStatus('Car can`t be started');
    consoleMessage('Error');
    processElements(btnStarts, (elem) => elem.classList.remove('hide'));
  }

  //Shift up
  function shiftUp() {
    processElements(gears, (elem) => elem.innerHTML = first_gear);
    if (first_gear != 5) {
      first_gear++;
    }
  }
  //Status
  function getStatus(status) {
    return processElements(statusInfoes, (elem) => elem.innerHTML = status);
  }
  //Log message
  function consoleMessage(message) {
    return console.log(message);
  }

  //Event listener
  processElements(btnStarts, (elem) => elem.addEventListener('click', carStart));
}
