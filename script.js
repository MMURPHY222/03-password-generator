// Assignment Code
var generateBtn = document.querySelector("#generate");

// assigned needed variables, string of options for each of future confirms and blank variables to add to later
var lower = "abcdefghijklmnopqrstuvwxyz"
var special = "!#$%&()*+,-./:;<=>?@[]^{|}~';"
var digit = "01234567890123456789"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var options = "";
var finishedPassword = "";
var length = 0;
var check = [];

//this function generates the string of options that the password will be created from 
function generatePassword() {

  // gives user a prompt for length of password and logs it as a string
  var lengthPrompt = prompt("How many characters do you want in your password? \r\nPlease enter a value between 8 and 128");

  // takes the string variable and changes it to an integer
  length = parseInt(lengthPrompt);

  // checks to see if value entered for lengthPrompt falls within the desired value and if not runs the prompt again
  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    generatePassword();
    return;
  // checks to see if value entered for lengthPrompt is not a number (NaN) if "not a number" is true then it alerts
  // and runs again
  } else if (isNaN(length)){
    alert("Please choose a NUMBER between 8 and 128");
    generatePassword();
    return;
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
    check.push(lower);
  };
  
  if (upperConfirm) {
    options += upper;
    check.push(upper);
  };
  
  if (digitConfirm) {
    options += digit;
    check.push(digit);
  };
  
  if (specialConfirm) {
    options += special;
    check.push(special);
  };

  
}

//Uses the string set above (contains all things confirmed for password) and randomly chooses the password within it
function forLoop () {
  for (i = 0; i < length; i++) {
    finishedPassword = finishedPassword.concat(options[Math.floor(Math.random()*options.length)]);
   };
}

// function checkPassword() {
//   for()
// 3 for loops - loop over check array, for each index of check array look @ each character in the final password
// until you find something that is in the list - then return false out of check password function and in side write password which is where ill call check password --> check if true, if false then run write password again

// }


// Write password to the #password input and runs clear password 
function writePassword() {
  var password = finishedPassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  clearPassword();
}

// resets finishedPassword variable back to blank so that when another is generated it takes its space on the page
// and does not add on
function clearPassword(){
  finishedPassword = "";
}


// the eventListener now on click runs all three functions simultaneously 
generateBtn.addEventListener("click", function () {

  generatePassword();
  forLoop();
  writePassword();

});






