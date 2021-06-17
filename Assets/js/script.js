// Assignment Code
var generateBtn = document.querySelector("#generate");


  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`","{", "|", "}", "~"];
  var digit = ["0","1","2","3","4","5","6","7","8","9"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordChar = "";
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

  // gives user a prompt for length of password and logs it as a string
  var lengthPrompt = prompt("How many characters do you want in your password? \r\nPlease enter a value between 8 and 128");

  // takes the string variable and changes it to an integer
  var length = parseInt(lengthPrompt);

  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    generatePassword();
  } else {
    alert("Please choose a number between 8 and 128");
    generatePassword();
  }

  // gives user yes or no for lower case letters and logs it as a boolean
  var lowerConfirm = confirm("Do you want lower case letters in your password?");
  
  // gives user yes or no for upper case letters and logs it as a boolean
  var upperConfirm = confirm("Do you want upper case letters in your password?");
  
  // gives user yes or no for digits and logs it as a boolean
  var digitConfirm = confirm("Do you want numbers in your password?");
 
  // gives user yes or no for special characters and logs it as a boolean
  var specialConfirm = confirm("Do you want special characters in your password?");
  

  if (lowerConfirm) {
    passwordChar + lower;
  } 


  if (upperConfirm) {
    passwordChar + upper;
  }

  if (digitConfirm) {
    passwordChar + digit;
  } 


  if (specialConfirm) {
    passwordChar + special;
  } 

  for (i > 0; i < length; i++) {

  }
 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




