/**
 * Page 90 #1.1
 * QUESTION
 * Implement an algorithm to determine if a string has all unqiue characters. What if you cannot use additional data structures.
 */

/**
 * O
 * boolean => check to see if all characters are unique
 * I
 * string
 * C
 * length of the string?
 * space complexity O(1)
 * E
 * what if the string is empty?
 * spaces in the string?
 *
 * Naive way is to have two loops, for each value at i check value at j to see if theyre equal. if so return false.
 *
 * Second approach., if the object is possible, add all the values inside and count them. if if it exists already return false. at the end return true because there were no repeats.
 * Space complexity is O(n) and time complexity is O(n)
 *
 *
 NOTES: think of how many unique chars are there, ASII is different than unicode
 */

function isUniqueA2(string) {
  if (!string.length) return true;
  let obj = {};
  for (let char of string) {
    if (char === ' ') continue;
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      return false
    }
  }
  return true
};