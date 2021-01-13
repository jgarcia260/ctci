// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function difference(val) {
  let sumOfSquaresTotal = 0;//square each value and add together
  let squareOfSumsTotal = 0;//add all values and then square
  while(val !== 0) {
    squareOfSumsTotal+= val;
    sumOfSquaresTotal+= Math.pow(val, 2);
    val--;
  }
  return Math.abs(sumOfSquaresTotal - (Math.pow(squareOfSumsTotal, 2)))
}

// function sumOfSquares(val) {
//   let total = 0;
//   while(val !== 0) {
//     total += Math.pow(val, 2);
//     val--;
//   }
//   return total;
// }

// //(1+2+x) square
// function squareOfSums(val) {
//   let total = 0;
//   while(val !== 0) {
//     total += val;
//     val--;
//   }

//   return Math.pow(total, 2);
// }

let sample = difference(100);
console.log(sample);