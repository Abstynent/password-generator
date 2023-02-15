// All characters that can be used in the password
var charactersBank = {
    lowercase: "qwertyuiopasdfghjklzxcvbnm",
    uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    numeric: "1234567890",
    specialChar: "!@#$%^&*()<>[]"
  };
// Store all prompt messages for cleaner code
var promptText = {
    lowecase: "Do you want to include lowercase characters in your password?\n\nYes = OK\nNo = CANCEL",
    uppercase: "Do you want to include upper characters in your password?\n\nYes = OK\nNo = CANCEL",
    numeric: "Do you want to include numeric characters in your password?\n\nYes = OK\nNo = CANCEL",
    specialChar: "Do you want to include special characters characters in your password?\n\nYes = OK\nNo = CANCEL",
    atLeastOneType: "You must select at least one character type.\n\nPress CANCEL to exit.",
    pwdLen: "Select length of the password, choose number between 8 and 128"
  };

  // Default values of pwd parameters
var pwdParameters = {
    len: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialChar: false
  };

// Run the function to select password lenght until number within range is given or canceled by user
function setPasswordLength() {
    pwdParameters.len = 0;
    while(pwdParameters.len < 8 || pwdParameters.len > 128) {
      pwdParameters.len = parseInt(prompt(promptText.pwdLen));
      if(isNaN(pwdParameters.len)) pwdParameters.len = 0; // If selected char is not a number, will continue while loop
      };
    return true;
  };
    
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);