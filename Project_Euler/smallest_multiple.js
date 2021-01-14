// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
// find until 2 is good
// 1 2 3 4 5 6
//       ^
// common = 60
// start = 120



//NAIVE SOLUTION
// function smallestMultiple(low, high) {
//   let start = high;
//   while(true) {
//     if(isDivisibleBy(low, high, start)) {
//       return start
//     }
//     start++
//   }
//   return -1;
// };


// function isDivisibleBy(low, high, num) {
//   for (let i = low; i <= high; i++) {
//     if(num % i !== 0) {
//       return false;
//     }
//   }

//   return true;
// }
// //60
// let sample = smallestMultiple(1, 6);
// console.log(sample)


//find what they all have in common starting with the lowest
//common = lowest //6
//incrementor = //60
//curr = 60 //
//while common is not equal to high //common = 1 !== high = 5
//if curr is equally divisble by common and common + 1
  //incrementor = curr
  //common = common + 1
//else
  //curr += common

function smallestMultiple(low, high) {
  let incrementor = low;
  let curr = 0;
  while(low <= high) {
    if((curr % low) === 0 && (curr % (low + 1)) === 0 && curr >= low) {
      incrementor = curr;
      low++
    } else {
      curr += incrementor;
    }
  }
  return curr;
}

let sample = smallestMultiple(1, 5);
console.log(sample)