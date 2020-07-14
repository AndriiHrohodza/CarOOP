function carsRenders(carNumbers) {
  for (let i = 1; i <= carNumbers; i++) {
    renderHtml('car' + i);
    carDeclaration('car' + i);
  }
}
