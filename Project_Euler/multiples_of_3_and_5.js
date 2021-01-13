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

let sample = multiplesOf3And5(10);
console.log(sample);