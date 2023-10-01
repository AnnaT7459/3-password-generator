// Assignment code here


// Get references to the #generate element
// added global variables
var generateBtn = document.querySelector("#generate");
var typeLength = 8 >= 128;
var fontCase = ["UPPERCASE", "Uppercase", "uppercase", "lowercase", "Both", "both"];
var typeNumber = true; 
var typeSpecial = ["!","@","#","$","%","^","&","*"]

// Write password to the #password input
function writePassword() {
  prompt("How many characters (8-128) do you want to use in your password?"); {
    var userInput = 8 >= 128;
    if (userInput === typeLength); {
      prompt ("Do you want to unclude uppercase, lowercase, or both"); 
    } else if (userInput !== typeLength) {
        prompt ("Please choose a number between 8 and 128 to continue");
    }
    var userInput = ["UPPERCASE", "Uppercase", "uppercase", "lowercase", "Both", "both"]
    if (userInput = fontCase)
  } 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
