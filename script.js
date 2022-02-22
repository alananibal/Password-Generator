// Global Variables
// Password Types 
var stringlowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var stringUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var stringSpecialCharacters =['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=']
var stringNumbers = ['0','1','2','3','4','5','6', '7', '8', '9', '0']

// Assignment Code (it's telling what is the button)
var generateBtn = document.querySelector("#generate");
// function to generate password
function generatePassword() {
  var allCharacters = [];
  var finalArray =[];
  // ask the user password lenght - include parseInt to make sure is a number not simply the prompt
  var passwordLenght = parseInt(prompt('how many characters would you like your password to have?  Please choose an number between 8 and 128'));
  // antecipate user missteps
  if (passwordLenght < 8 || passwordLenght > 128) {
    alert("Please choose an number between 8 and 128");
    return null;
  };
  if (isNaN(passwordLenght)) {
    alert("Please choose an number");
    return null;
  }
  // ask the user pasword types
  var lowerCaseChoice = confirm("Would you like lowercase characters in your password");

  var upperCaseChoice = confirm("Would you like uppercase characters in your password");

  var specialCharactersChoice = confirm("Would you like special characters in your password")

  var numbersChoice = confirm("Would you like numbers in your password");
  // atecipate user missteps - In case no option is selected
  if (lowerCaseChoice === false && upperCaseChoice === false && specialCharactersChoice === false && numbersChoice === false) {
    alert('please select atleast ONE option!')
    return null;
  }
  // send this information to an array named allCharacters
    if (lowerCaseChoice === true){
            allCharacters = allCharacters.concat(stringlowerCase);
          }
    
    if (upperCaseChoice === true){
            allCharacters = allCharacters.concat(stringUpperCase);
    }
    
    if (specialCharactersChoice === true){
      allCharacters = allCharacters.concat(stringSpecialCharacters);
    }
    if (numbersChoice === true){
      allCharacters = allCharacters.concat(stringNumbers);
    }  
    

    // loop for the passwrold lenght
    for (var i = 0; i < passwordLenght; i++ ){
      var finalPassword = random(allCharacters)
       finalArray.push(finalPassword)
    }
    // creat the passworld array
    return finalArray.join('')

};
// randomize all these charachters in the array
function random(array) {
  return array[Math.floor(Math.random() * array.length)]
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
