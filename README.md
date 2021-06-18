# 03-password-generator

# Password Generator

This website allows the user to see a series of prompts and confirms upon click of the generate password button. The program then stores their confirmed values into a large string and randomly chooses values within it. 

## Link to access website

https://mmurphy222.github.io/03-password-generator/

## Usage
This runs on three main functions within the javascript. They are generatePassword(), writePassword(), and forLoop().

generatePassword() is prompting the user with questions about password length and questions about if they want characters, numbers, or special characters included in their password. 

generatePassword() checks each of these values to log their input.

For password length an if else statement was written to confirm that the user entered an integer that was within the parameters. If not they were prompted again. 

For each of the other confirms the value of the string that was confirmed is added to an empty options variable. Here is an example checking the lowerConfirm prompt and adding the string of all lowercase letters to the empty string.  

```bash
 if (lowerConfirm) {
    options += lower;
 }
```

Within the next import function forLoop() the random password is being generated using the integer user input for password length.

```bash
function forLoop () {
  for (i = 0; i < length; i++) {
    finishedPassword = finishedPassword.concat(options[Math.floor(Math.random()*options.length)]);
   };
}
```
concat is added two strings together here, one empty string of finishedPassword and one that is randomly generated using Math.floor to round math.random() * options.length to a whole number value to allow for choices. It is multiplied by options.length to account for the length of the entire string that is being accessed. 

The third function is that of writePassword() sets a variable password equal to that finished password just decided in the forLoop. It then sets a variable of passwordText equal to all things with the id of password in the html. Lastly it sets passwordText = password so that it can be updated on the page through html. 

There is also an EventListener which on click of the generate button which runs generate, forLoop, and writePassword simultaneously, and clearPassword() along with it. The clear password function simply resets the finishedPassword variable to zero to allow for a new password to appear on an empty screen, not be added to the previous password.


## Contributing


## License
