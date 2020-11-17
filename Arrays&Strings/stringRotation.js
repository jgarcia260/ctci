/**
 * String Rotation
 * Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using one call to isSubstring
 *
 * First approach
 * duplicate s1 and add it on itself
 *
 * NOTES
 * rotating arrays and strings typically have to concat both data values with one another. makes it easier to find and no reason to come up with an algorithm
 */

function isSubstring(s1, s2) {
  s1 = s1 + s1;
  return s1.indexOf(s2) > -1;
}


let str = 'waterbottle';
let test1 = 'erbottlewat';
console.log(isSubstring(str, test1));