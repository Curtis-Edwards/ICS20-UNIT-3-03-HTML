'use strict'
/**
 * This function calculates area of a circle.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById('radius').value)

  // process

  const volume = Math.PI * 3 / 4 * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}
