// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charLenInput = prompt("Choose your character length (between 8 and 128)");
  var lengInp = Number(charLenInput);
  console.log(lengInp);
  var totalList = [];
  var finalList = [];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var speChar = ["!", "@", "#", "$", "%", "&"];

  if (lengInp < 8 || lengInp > 129) {
    prompt("Please choose a number from 8-128");
  }
  else {
  var lowInp = confirm("Would you like to use lowercase letters?");
  var upInp = confirm("Would you like to use uppercase letters?");
  var numInp = confirm("Would you like to use numbers?");
  var charInp = confirm("Would you like to use special characters?");

  if (lowInp) {
    totalList = totalList.concat(lowercase);
  }
  if (upInp) {
    totalList = totalList.concat(uppercase);
  }
  if (numInp) {
    totalList = totalList.concat(numbers);
  }
  if (charInp) {
    totalList = totalList.concat(speChar);
  }

console.log(totalList);

function shuffle(array) {
  let index = totalList.length,  randomIndex;


  while (index != 0) {


    randomIndex = Math.floor(Math.random() * index);
    index--;

    [totalList[index], totalList[randomIndex]] = [
      totalList[randomIndex], totalList[index]];
  }

  return totalList;
}

shuffle(totalList);


console.log(totalList);
  // for (let i = 0; i < totalList.length; i++) {
  //    finalList = Math.floor(Math.random() * totalList.length -1);
  // }

  // console.log(finalList);

  }



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// confirm("Do you want to inclue lowercase letters?");
// // if (confirm) {
// //   USE LOWERCASE VAR
// // }

// confirm("Do you want to include UPPERCASE LETTERS?")
// // if ()
// confirm(numeric values)
// confirm(special characters)
// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// 
// var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var speChar = ["!", "@", "#", "$", "%", "&"];
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// math.random is applied to all selected variable arrays to pull the selected number of characters randomly
