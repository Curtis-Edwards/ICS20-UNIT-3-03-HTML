'use strict'
/**
 * This function calculates area of a circle.
 */
function calculate () {
  // input
  const radius = parseInt(document.getElementById('radius').value)

  // process
  
  const volume = 1.333 * Math.PI * radius * radius * radius * radius

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm²'
}
