// Assignment Code
var generateBtn = document.querySelector("#generate");


  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`","{", "|", "}", "~"];
  var digit = ["0","1","2","3","4","5","6","7","8","9"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  alert("Please answer the next few questions to help us make a password for you");

  var lowerConfirm = confirm("Do you want lower case letters in your password?");
  lowerConfirm;

  var upperConfirm = confirm("Do you want upper case letters in your password?");
  upperConfirm;

  var digitConfirm = confirm("Do you want numbers in your password?");
  digitConfirm;

  var specialConfirm = confirm("Do you want special characters in your password?");
  specialConfirm;

  var lengthPrompt = prompt("How many characters do you want in your password? \r\nPlease enter a value between 8 and 128");
  lengthPrompt;

  if (lowerConfirm) {
    var randLower = lower[Math.floor(Math.random() * lower.length)];
  } else {

  }


  if (upperConfirm) {

  } else {
    
  }


  if (digitConfirm) {

  } else {
    
  }


  if (specialConfirm) {

  } else {
    
  }



 function generatePassword() {
 
}

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




