/**
 * String Compression
 * Page 91 1.6
 *
 * Implement a method to perform basic string compression using the counts of repeated characters. Fore example, the string aabbcccccaaa would be come a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your method sohuld return the original string. You can assume the string has only uppercase and lowercase letters (a-z)
 *
 *
 * O
 * a string
 * I
 * a string with letters a-zA-Z
 * C
 *  if the compressed string is smaller than the original string, return the compressed
 * if not return the original string
 * not sorted by unicode. aabbaa is plausible
 * E
 * if the string is length 0 return the string
 *
 * first approach
 * if i sort the string
 * iterate through it
 * count each value
 * if the value is different add the counter of that char and the char itself to a results string
 *
 * Space complexity = constant because i would be reassigning the string
 * Time complexity = sorting and then iterating through all the chars in the string
 *
 *
 * second approach
 * count all the letters in the string and add to an object
 * iterate through the object and add to the string
 * space complexity would increase
 * time would be the same
 *
 * techinicall the first approach is quicker because the string size can be 10^4 and having to iterate
 twice can be long
 *
 */

function stringCompressionA2(string) {
  let counter = {};
  for (let char in string) {
    counter[string[char]] = counter[string[char]] ? counter[string[char]] + 1 : 1;
  }

  let resultString = '';
  for (let char in counter) {
    resultString += `${char}${counter[char]}`;
  }

  return string.length <= resultString.length ? string : resultString;
}

let testA2 = stringCompressionA2('aaaaabbbbbbbaaaaaa');
console.log(testA2);