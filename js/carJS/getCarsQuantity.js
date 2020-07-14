let carsInput = document.querySelector('input');
let carsValue = carsInput.value;

carsInput.addEventListener('change', function(e) {
  garage.innerHTML = ''
  carsValue = e.target.value;
  carsRenders(carsValue);
});
