// Assignment Code
var generateBtn = document.querySelector("#generate");

  var lower = "abcdefghijklmnopqrstuvwxyz"
  var special = "!#$%&()*+,-./:;<=>?@[]^{|}~';"
  var digit = "0123456789"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var options = "";
  var finishedPassword = "";
  var length = 0;
  var check = [];

function generatePassword() {

  // gives user a prompt for length of password and logs it as a string
  var lengthPrompt = prompt("How many characters do you want in your password? \r\nPlease enter a value between 8 and 128");

  // takes the string variable and changes it to an integer
  length = parseInt(lengthPrompt);

  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    generatePassword();
  } else if (isNaN(length)){
    alert("Please choose a NUMBER between 8 and 128");
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
    options += lower;
    console.log("Should add lower", options);
    check.push(lower);
  };
  
  if (upperConfirm) {
    options += upper;
    console.log("Should add upper", options);
    check.push(upper);
  };
  
  if (digitConfirm) {
    options += digit;
    console.log("Should add digits", options);
    check.push(digit);
  };
  
  if (specialConfirm) {
    options += special;
    console.log("Should add special", options);
    check.push(special);
  };

  console.log("These are my options" + options);
  
}

function forLoop () {
  console.log(length);
  for (i = 0; i < length; i++) {
    console.log("Does this work");
    finishedPassword = finishedPassword.concat(options[Math.floor(Math.random()*options.length)]);
   };
}

// function checkPassword() {
//   for()
// 3 for loops - loop over check array, for each index of check array look @ each character in the final password
// until you find something that is in the list - then return false out of check password function and in side write password which is where ill call check password --> check if true, if false then run write password again

// }




// Write password to the #password input
function writePassword() {
  var password = finishedPassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", function () {

  generatePassword();
  forLoop();
  writePassword();

});






