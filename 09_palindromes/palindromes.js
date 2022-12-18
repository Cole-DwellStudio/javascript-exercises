const palindromes = function (testString) {
  // strip out all non-letter characters
  // convert to all lower-case
  // make a reversed copy of the string
  // compare the reversed copy to the original
  // if they are identical, return true
  // else return false

  // convert to lowercase
  testString = testString.toLowerCase();

  // remove all special characters
  testString = testString.replaceAll("!", "");
  testString = testString.replaceAll(".", "");
  testString = testString.replaceAll(",", "");
  testString = testString.replaceAll(" ", "");

  let reversedStringArray = [];
  for (let i = 0; i <= testString.length; i++) {
    reversedStringArray.unshift(testString[i]);
  }

  reversedString = reversedStringArray.toString();
  reversedString = reversedString.replaceAll(",", "");

  return reversedString === testString;
};

// Do not edit below this line
module.exports = palindromes;
