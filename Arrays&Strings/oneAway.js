/**
 * One Away Pg 91 1.5
 *There are three types of edits that can be performed on strings: insert a character, remove a character or replace a character, Give two strings, write a function to check if they are one edit (or zero edits) away
 */

/**
 * O
 * boolean - check if the string manipulation follows exactly one rule
 * I
 * string1, string2 => compares both strings
 * C
 * only one method can/has to be used
 *
 * E
 *insert!!
length is one off

 remove!!!
 length is one off

 replace!!!
 lenght is equal

 First approach
 create a helper function for each remove and insert

REPLACE helper function
check if the strings are the same length
if not return false
create a counter to keep track of how many different chars it has
if its different decrement counter
if the counter is below 0, return false
return true

pale
ple
REMOVE/ INSERT helper function
loop through the largest string
if there is a mistake,
check the current string with + 1
check the same char. change the value of i - 1

if the incrementCounter is greater than 1 return false

NOTES: O(n) time complexity. Need to check every value and compare both strings
O(1) space complexity
 * */

function oneAway(s1, s2) {
  return (removeAndInsertHelper(s1, s2) + removeAndInsertHelper(s2, s1) + replaceHelper(s1, s2)) === 1
}
//remove when s1 is the longest
//insert is when s2 is the longest
function removeAndInsertHelper(s1, s2) {
  // if (s1.length + 1 !== s2.length || s1.length - 1 !== s2.length) return 0;
  console.log('helllo')
  let incrementor = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i + incrementor]) {
      console.log('not equal', s1[i + incrementor], s2[i])
      i = i - 1;
      incrementor++;
    }
    //if incrementor is greater than 1, return false
    if (incrementor > 1) return 0;
  }
  return 1;
}

function replaceHelper(s1, s2) {
  if (s1.length !== s2.length) return 0;
  let counter = 1;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      counter--;
    }
    if (counter < 0) return 0;
  }
  if (counter === 1) return 0
  return 1
}

let test1 = oneAway('aa', 'aa')
console.log(test1)