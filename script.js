// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charLenInput = prompt("Choose your character length (between 8 and 128)");
  var lengInp = Number(charLenInput);
  var totalList = [];
  var finalList = [];
  var sets = 0;
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var speChar = ["!", "@", "#", "$", "%", "&"];
  var randomLowercase = [];
  var randomUppercase = [];
  var randomNumber = [];
  var randomSpeChar = [];
  function setIncrease() {
    return sets++
  };

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
      var selectLowercase = Math.floor(Math.random() * lowercase.length);
      var randomLowercase = lowercase[selectLowercase];
      setIncrease();
    }

    if (upInp) {
      totalList = totalList.concat(uppercase);
      var selectUppercase = Math.floor(Math.random() * uppercase.length);
      var randomUppercase = uppercase[selectUppercase];
      setIncrease();
    }
    if (numInp) {
      totalList = totalList.concat(numbers);
      var selectNumber = Math.floor(Math.random() * numbers.length);
      var randomNumber = numbers[selectNumber];
      setIncrease();
    }
    if (charInp) {
      totalList = totalList.concat(speChar);
      var selectSpeChar = Math.floor(Math.random() * speChar.length);
      var randomSpeChar = speChar[selectSpeChar];
      setIncrease();
    }
  }


  if (sets === 0) {
    alert("Please select at least one category of characters for your password");
    return generatePassword();

  }


  function shuffle(array) {
    let index = totalList.length, randomIndex;


    while (index != 0) {


      randomIndex = Math.floor(Math.random() * index);
      index--;

      [totalList[index], totalList[randomIndex]] = [
        totalList[randomIndex], totalList[index]];
    }

    return totalList;
  }

  shuffle(totalList);

  var slots = (lengInp - sets);
  var lilSlice = totalList.slice(0, slots);
  var stringSlice = lilSlice.join("");

  return randomLowercase + randomUppercase + randomNumber + randomSpeChar + stringSlice;


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


