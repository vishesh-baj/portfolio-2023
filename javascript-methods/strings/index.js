// string methods and their usecases

// SLICE____________________
// ? The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// * syntax
//  slice(indexStart)
// slice(indexStart, indexEnd)
// ! excludes the indexEnd value

const string = "vishesh-bajpayee";
console.log("slice:", string.slice(3, -2));

// use case
// render string without -

const convertString = (str) => {
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element === "-") {
      return [str.slice(0, index), str.slice(index + 1)];
    }
  }
};
console.log(convertString(string));

// SUBSTRING____________________
// ? The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// * syntax
// substring(indexStart)
// substring(indexStart, indexEnd)

console.log("substring: ", string.substring(1, 4));

// REPLACE____________________
//  ? The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// * syntax
// replace(pattern, replacement)
let fullName = "Vishesh Bajpayee";
const changeSurname = (str, changedSurnameVal) => {
  let strSplitted = str.split(" ");
  const surname = strSplitted[1];
  const replacesStr = str.replace(surname, changedSurnameVal);
  return replacesStr;
};
console.log("REPLACE SURNAME: ", changeSurname(fullName, "Awesome"));

// REPLACEALL____________________
// ? The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
// * syntax
// replaceAll(pattern, replacement)

const sentence =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it real";

const replacedVal = sentence.replaceAll("dog", "monkey");
console.log("replace all val: ", replacedVal);

// TOUPPERCASE____________________
// ? converts string to uppercase
const uppercaseWord = fullName.toUpperCase();
console.log("uppercase word: ", uppercaseWord);

// TOLOWERCASE____________________
// ? converts string to lowercase
const lowercaseWord = uppercaseWord.toLocaleLowerCase();
console.log("lowercase word: ", lowercaseWord);
