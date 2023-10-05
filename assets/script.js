// Assignment code here
// Get references to the #generate element
// added global variables
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// called the generate password function
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// created variable for password length and a while statement "multiple ifs" -H. Burke
// debugged while statement by removing ; 
  function generatePassword() {
    var userLength = parseInt (prompt("How many characters would you like to include in your password? Choose a length between 8-128"));
      while ((userLength < 8) || (userLength > 128) || (isNaN(userLength) === true)) {
      // added error message if incorrect value is entered
        alert("ERROR: please select a number between 8 and 128.");
        userLength = prompt ("How many characters would you like to include in your password? Choose a length between 8-128");
    };
  // created variable for user choices
  // added while statements for each variable
  // removed while statements
  var userLowercase = confirm ("Would you like your password to include lowercase characters? yes or no");
  var userUppercase = confirm ("Would you like your password to include uppercase characters? yes or no");
  var userNumbers = confirm ("Would you like your passord to include numbers? yes or no");
  var userSpecial = confirm ("Would you like your password to include special characters? yes or no");

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
