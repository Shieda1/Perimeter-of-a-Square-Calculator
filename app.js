// https://calculator.swiftutors.com/perimeter-of-a-square-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofaSquareRadio = document.getElementById('perimeterofaSquareRadio');
const sideLengthoftheSquareRadio = document.getElementById('sideLengthoftheSquareRadio');

let perimeterofaSquare;
let sideLengthoftheSquare = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

perimeterofaSquareRadio.addEventListener('click', function() {
  variable1.textContent = 'Side Length of the Square';
  sideLengthoftheSquare = v1;
  result.textContent = '';
});

sideLengthoftheSquareRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Square';
  perimeterofaSquare = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofaSquareRadio.checked)
    result.textContent = `Perimeter of a Square = ${computePerimeterofaSquare().toFixed(5)}`;

  else if(sideLengthoftheSquareRadio.checked)
    result.textContent = `Side Length of the Square = ${computeSideLengthoftheSquare().toFixed(5)}`;
})

// calculation

function computePerimeterofaSquare() {
  return 4 * Number(sideLengthoftheSquare.value);
}

function computeSideLengthoftheSquare() {
  return Number(perimeterofaSquare.value) / 4;
}