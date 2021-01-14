// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


function largestPalindromeProduct(numberOfDigits) {
  let start = Math.pow(10, numberOfDigits - 1);
  let end = Math.pow(10, numberOfDigits) - 1
  let curr = end;
  let max = 0;
  while(start <= end) {
    let product = curr * end;
    let stringedNum = product.toString();
    if(stringedNum[0] === stringedNum[stringedNum.length - 1] && isPalindrome(stringedNum) ) {
      max = Math.max(max, product)
    }
    curr--;
    if(curr < start) {
      end--;
      curr = end;
    }
  }
  return max
}

function isPalindrome(stringed) {
  let reversed = stringed.split('').reverse().join('');
  return stringed === reversed
}

let sample = largestPalindromeProduct(3);
console.log(sample)