/**
 * Check permutation 1.2 Page 90
 * Question: Given two strings, write a method to decide if one is a permutation of the other
 */


/**
 O
 boolean - to check if string1 is a permutation of string2
 I
 two strings
 C
 spaces?
 E
 length of the string
 time and space complexity
 if the lenghts are equal return false

 First Approach
 permutate one of the strings until its equal to another string
 It would take too long to get exactly the same string. Naive solution

 Second Approach
 Count each letter in both strings
 for each new char, add the letter with the value as 0
 one string will increment the number
 the other string will decrement
 iterate through the object and if all the numbers are zero return false
 return true at the end

 Third Approach sorting both strings and comparing their values
 0(n log n ) time complexity
 0(1) space complexity?

n + n. iterate through the string and then the object. O(n) time complexity
space complexity is equal to O(n). it will store all unique values in the object

NOTES: Think of capitalization and white space every time
 */

let checkPermutationA2 = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let counter = {};
  for (let i = 0; i < s1.length; i++) {
    //for both letters add if the value does not exists
    if (!counter[s1[i]]) {
      counter[s1[i]] = 0;
    }
    if (!counter[s2[i]]) {
      counter[s2[i]] = 0;
    }
    //s1 values will be incremented
    //s2 values will be decremented
    counter[s1[i]]++;
    counter[s2[i]]--;
  }

  for (let char in counter) {
    if (counter[char] !== 0) {
      return false;
    };
  }
  return true;
}

let testA2 = checkPermutationA2('aaaab ', ' baaaa');
// console.log(testA2);


function checkPermutationA3(s1, s2) {
  if (s1.length !== s2.length) return false;
  let sortedS1 = s1.split('').sort().join('');
  let sortedS2 = s2.split('').sort().join('');
  return sortedS1 === sortedS2;
}

let testA3 = checkPermutationA3('aaaab ', ' baaaa');
console.log(testA3);
