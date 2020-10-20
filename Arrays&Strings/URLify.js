/**
 * URLify 1.3 Page 90
 * Write a method to replace all spaces ina string with "%20". You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
 */


/**
 * O
 * string => string with %20 in between the words
 * I
 *string and integer with the "true" length of the string
 * C
 * extra spaces
 * E
 * string is a space, return the origial string
 *
 *
 * First Approach
 * split the string into an array with spaces in between
 * possible to have extra space in the string which would be in the split array
 * filter out all the spaces out
 * join the split array with %20 in between
 *
 * time complexity => n + n + n = O(n)
 * space complexity => creating a new array but replacing it with the current value so no extra memory will be created?
 *
 * Second Approach?
 *iterate through the array. if there are values to he left and right add a %20
 this could be done too but the first approach uses native methods to get it done faster and looks cleaner
 */

let URLifyA1 = (string) => {
  string = string.split(' ').filter((char) => char !== '')
  return string.join('%20');
}

let testA1_1 = URLifyA1('abc cdb');
let testA1_2 = URLifyA1('Mr John Smith     ');
// console.log(testA1_2)

let URLifyA2 = (string) => {
  //create a result string
  //if the current value is a space and there are two chars next to each other that are not spaces, increment a %20,
  //if its not a space increment to result string
  //if its a space and it doesnt meet the guidelines continue
  // return result string
  if (!string.length) return string;
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      result += string[i];
    } else if (i !== 0 && i !== string.length - 1 && string[i] === ' ' && string[i + 1] !== ' ' && string[i - 1] === ' ') {
      result += '%20'
    }
  }

  return result

}
let testA2_1 = URLifyA1('Mr John Smith     ');
console.log(testA2_1)