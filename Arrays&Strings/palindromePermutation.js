/**
 *Given a string , write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same fotwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.
*/

/**
 * O
 * boolean - if the given string is a palindrome
 * I
 * string
 * C
 * spaces.
 * ignore casing and non-letter characters
 * E
 * what if the string is empty, return true
 *can have a really long string. consider the time complexity

 Sample =
 input: Tact Coa
 output : true 'taco cat' || 'atco cta'

 First Approach
 create a permutation of the string until it matches.
 naive solution and could exceed call stack

 Second Approach
 can keep track of all the chars.
 each value needs to have a pair. divisible by 2
 the length could be odd,
  only one value can not have a partner. anymore than 1 it is not a palindrome

  do an iteration to keep count. add to an object
  if it doesnt exists, add to it
  if it does increment

  keep a counter for number of times there has neem an odd
  if it exceeds two return false
  iterate through the object


  return true because it passes all conditionals
 */

// console.log(','.toLowerCase())

let palindromePermutationA1 = (string) => {
  if (!string.length) return true;
  let counter = {};
  for (let char of string) {
    if (!counter[char]) {
      counter[char] = 1;
    } else {
      counter[char]++;
    }
  }

  let odds = 1;
  for (let char in counter) {
    if (counter[char] % 2 !== 0) {
      odds--;
    }

    if (odds < 0) return false;
  }
  return true
}

console.log(testA1)