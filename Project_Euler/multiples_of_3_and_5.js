//iteration
function multiplesOf3And5(integer) {
  let total = 0;
  while(integer !== 2) {
    let curr = integer - 1;
    if(curr % 5 === 0 || curr  % 3 === 0) {
      total += curr;
    }
    integer--;
  }

  return total;
}

// let sample = multiplesOf3And5(10);
// console.log(sample);

//recursion
function multiplesOf3And5(integer, total=0) {
  if(integer === 2) return total;
  if((integer - 1) % 3 === 0 || (integer - 1) % 5 === 0) {
    total += integer - 1;
  }
  total = multiplesOf3And5(integer - 1, total);
  return total;
}

let recursionSample = multiplesOf3And5(1000);
console.log(recursionSample)