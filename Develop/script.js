// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//  Created arrays containing alphabet, numbers, and symbols.
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialcharactersArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
// Empty arrays for the outcome which will be applied to the selections.
  var resultArray = [];
  var userArray = [];
// Statement made "if" made to alert users that criteria does not meet. If invalid value was applied, it will return to generate the password.
  var passwordLength = prompt ("Choose a password length of at least 8 characters and no more than 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length MUST be at least 8 characters and no more than 128 characters.");
      return generatePassword();
    }
    if (isNaN(passwordLength)) {
      alert("Please enter numeric value into the field. Click 'Generate Password' and try again.")
      return null;
    }
// After cirteria is met, each selections will apply.
// Implemented concat to combine the string to restult array with the selections.
  var number = confirm ("Applying numbers.");
    if (number) {
      resultArray = resultArray.concat(numberArray);
    }
  var lowercase = confirm ("Applying lowercase letters.");
    if (lowercase) {
      resultArray = resultArray.concat(lowercaseArray);
    }
  var uppercase = confirm ("Applying uppercase letters.");
    if (uppercase) {
      resultArray = resultArray.concat(uppercaseArray);
    }
  var characters = confirm ("Applying special characters.");
    if (characters) {
      resultArray = resultArray.concat(specialcharactersArray);
    }
    // Applied for loop. It will generate random inputs from the inputted length. 
    for (var i = 0; i < passwordLength; i++) {
      userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
    }
    return userArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
