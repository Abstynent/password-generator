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
function getPasswordLength() {
    pwdParameters.len = 0;
    while(pwdParameters.len < 8 || pwdParameters.len > 128) {
      pwdParameters.len = parseInt(prompt(promptText.pwdLen));
      if(isNaN(pwdParameters.len)) pwdParameters.len = 0; // If selected char is not a number, will continue while loop
      };
    return true;
  };

  // Ask user to select which type of characters to include in the password
// Validate if at least one type was choosen, if not run the function again
function getPasswordParameters() {
    if(confirm(promptText.lowecase)) pwdParameters.lowercase = true; else pwdParameters.lowercase = false; 
    if(confirm(promptText.uppercase)) pwdParameters.uppercase = true; else pwdParameters.uppercase = false;
    if(confirm(promptText.numeric)) pwdParameters.numeric = true; else pwdParameters.numeric = false;
    if(confirm(promptText.specialChar)) pwdParameters.specialChar = true; else pwdParameters.specialChar = false;
  
    if(!pwdParameters.lowercase && !pwdParameters.uppercase &&
       !pwdParameters.numeric && !pwdParameters.specialChar) {
        if(confirm(promptText.atLeastOneType)) {
          getPasswordParameters();
        } else return false;
      };
      return true;
  };

function generatePassword() {
  // If password length is selected correctly and at least one type of characters is being used, run the function.
  if(getPasswordLength()) if(!getPasswordParameters()) return "Passoword not generated. Try again."; 

  var pwd = "";
    // First characters of the string to be one from each character type
    // Personal note: password will be generated without this part, just to make sure random will not fail. 
  if(pwdParameters.lowercase) pwd += charactersBank.lowercase[Math.floor(Math.random() * charactersBank.lowercase.length)];
  if(pwdParameters.uppercase) pwd += charactersBank.uppercase[Math.floor(Math.random() * charactersBank.uppercase.length)];
  if(pwdParameters.numeric) pwd += charactersBank.numeric[Math.floor(Math.random() * charactersBank.numeric.length)];
  if(pwdParameters.specialChar) pwd += charactersBank.specialChar[Math.floor(Math.random() * charactersBank.specialChar.length)];
  
    // Randomly choose type of allowed characters and randomly choose one from the bank - add it to the password string until password length reach length selected by user
  while(pwd.length < pwdParameters.len) {
    switch(Math.floor(Math.random() * 4)) {
      case 0: if(pwdParameters.lowercase) pwd += charactersBank.lowercase[Math.floor(Math.random() * charactersBank.lowercase.length)]; break;
      case 1: if(pwdParameters.uppercase) pwd += charactersBank.uppercase[Math.floor(Math.random() * charactersBank.uppercase.length)]; break;
      case 2: if(pwdParameters.numeric) pwd += charactersBank.numeric[Math.floor(Math.random() * charactersBank.numeric.length)]; break;
      case 3: if(pwdParameters.specialChar) pwd += charactersBank.specialChar[Math.floor(Math.random() * charactersBank.specialChar.length)]; break;
   };
  };
  return pwd;
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