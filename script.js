var password = document.getElementByID("password");
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSpecialCharacter;


// Prompt user to choose num between 8 and 128
        
// This function will generate the password
function genPassword(){
    // variables to create the 4 prompts asked for: Upper, Lower, Number, Special Character
   var confirmUppercase = confirm("Click OK to include uppercase letters.");
   var confirmLowercase = confirm("Click OK to include lowercase letters.");
   var confirmNumber = confirm("Click OK to include numbers")
   var confirmSpecialCharacter = confirm("Click OK to include special characters.");
    //loop if answer is outside the parameters
    while(confirmUppercase === false && confirmLowercase === false && confirmNumber === false && confirmSpecialCharacter === false){
        alert("You must choose at least one");
        var confirmUppercase = confirm("Click OK to include uppercase letters.");
        var confirmLowercase = confirm("Click OK to include lowercase letters.");
        var confirmNumber = confirm("Click OK to include numbers")
        var confirmSpecialCharacter = confirm("Click OK to include special characters.");
    }
    // var to create password character possibilities
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var to save length of password
    var passwordLength = 12;
    // var to reset password regen
    var password ="";
    // Create a for loop that will wipe out the old password and generate a new one
    for (var i = 0; i<= passwordLength; i++){
        //randomNumber variable needed to formulate new password
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    // Now apply it!
    document.getElementById("password").value = password;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}




function generatePassword(){
    // Git add commit and push repository often
    // Lots of fors and if thens
    // must return a string value that is at the password.
    
    // Confirm usser upper, lower ,number, special characters (4 confirm prompts)
        // 4 vars to save true/false to included characers
        // Validate that atleast one category was chosen
    // Vars that include all user options of each category. Array of string for each cat.
    // Vars upper = [" A", "B"]
    // If user says yes to include that category choose random elelments from the array
        // How to decide how many elements to choose from each array
        // Choose individually from each array or when the user says yes, place the entire array in one bucket
    // Validate that atleast one category was chosen
    // Join chosen elements into a string
    return passwordString
 
};