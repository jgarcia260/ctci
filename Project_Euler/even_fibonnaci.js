/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

calculate fib of only even nums
starting with 1 and 2

*/
//using iteration
function even_fib(integer) {
  if(integer < 2) return 0;
  let first = 1; //8
  let second = 2; //13
  let total = 0; //10
  while(second <= integer) {
    if(second % 2 === 0) {
      total += second;
    }
    let p = first + second;
    first = second;
    second = p;
  }

  return total;
}

// let iterationSample = even_fib(4000000);
// console.log(iterationSample)

//10
function recursionEvenFib(num, total=0, first=1, second=2) { //10, 10, 8,
  if(second > num) return total;
  if(second % 2 === 0) total += second;
  total = recursionEvenFib(num, total, second, first + second);
  return total
}

let recurseSample = recursionEvenFib(4000000);
console.log(recurseSample)//4613732