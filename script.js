// Assignment code here
// Get references to the #generate element
// added global variables
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// called the generate password function
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var password = generatePassword()
}
// created variable for password length and a while statement "multiple ifs" -Harmony Burke
  function generatePassword() {
    var userLength = prompt("How many characters would you like to include in your password. Choose a length between 8-128");
    while ((userLength < 8) || (userLength < 128) || (isNaN(userLength) === true)); {
      // added error message if incorrect value is entered
      alert("ERROR: please select a number between 8 and 128.")
      userLength = prompt ("How many characters would you like to include in your password. Choose a length between 8-128")
    }
  // created variable for user choices
  var userLowercase = confirm("Would you like your password to include lowercase characters?");
  var userUppercase = confirm("Would you like your password to include uppercase characters?");
  var userNumbers = confirm("Would you like your passord to include numbers?");
  var userSpecial = confirm("Would you like your password to include special characters?");

  // created bank of answers
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!@#$%^&*";
    var characterAnswers = "";
    var newPassword = "";
// Created if statements to choose answers
    if (userLowercase === true) {
      characterAnswers=characterAnswers.concat(lowercase)
    };
    if (userUppercase === true) {
      characterAnswers=characterAnswers.concat(uppercase)
    };
    if (userNumbers === true) {
      characterAnswers=characterAnswers.concat(numbers)
    };
    if (userSpecial === true) {
      characterAnswers=characterAnswers.concat(special)
    };
//  created function to randomize the generated password
    function randomAnswers (pwd) {
      return [Math.floor(Math.random()*pwd)]
    };

    for(var i = 1; i < userLength; i++) {
      newPassword = newPassword.concat(characterAnswers.charAt(randomAnswers(characterAnswers.length)))
    };
    return newPassword;
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
