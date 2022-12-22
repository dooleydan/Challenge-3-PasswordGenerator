var password = document.getElementByID("password");
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSpecialCharacter;
        
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
