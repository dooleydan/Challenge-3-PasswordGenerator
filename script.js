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
    // Prompt user to choose num between 8 and 128
        // var to save length
        // validate user number
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