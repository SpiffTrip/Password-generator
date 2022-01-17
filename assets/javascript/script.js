

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var smallLetterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitalLetterArr = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbolArr = ['#', '?', '&', '%'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



  // password variables
  function prompts() {
    var passwordLength = parseInt(
      prompt("how many digits long did you want to have your password? please select between 8 and 128.")
    );

    if (Number.isNaN(passwordLength)) {
      alert("this must be a number!");
      return null;
    }

    if (passwordLength < 8 || passwordLength > 128) {
      alert("choose a number between 8-128!")
      return null;
    }



    var hasLowercase = confirm("would you like to have lowercase letters?");
    var hasUppercase = confirm("would you like to have uppercase letters?");
    var hasSymbol = confirm("would you like to have special characters?");
    var hasNumbers = confirm("would you like to have numbers?");

    var passwordOptions = {
      lowercase: hasLowercase,
      symbol: hasSymbol,
      uppercase: hasUppercase,
      length: passwordLength,
      numbers: hasNumbers,

    };
   
    return passwordOptions;

  }

  function random(array){
    return array[Math.floor(Math.random()* array.length)]
  }
  

  function generatePassword() {
    var passwordOptions = prompts();
    console.log(passwordOptions)


    var finalPassword = [];
    var possibleChars = [];
    var chosenChars = [];



    //validate password
    if (passwordOptions.numbers) {
      possibleChars = possibleChars.concat(numberArr)
      chosenChars.push(random(numberArr))
    };


    if (passwordOptions.lowercase) {
      possibleChars = possibleChars.concat(smallLetterArr)
      chosenChars.push(random(smallLetterArr))

    };

    if (passwordOptions.uppercase) {
      possibleChars = possibleChars.concat(capitalLetterArr)
      chosenChars.push(random(capitalLetterArr))

    };

    if (passwordOptions.symbol) {
      possibleChars = possibleChars.concat(symbolArr)
      chosenChars.push(random(symbolArr))

    };

    if (passwordOptions.numbers, passwordOptions.uppercase) {
      possibleChars = possibleChars.concat(numberArr, capitalLetterArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.numbers, passwordOptions.lowercase) {
      possibleChars = possibleChars.concat(numberArr, smallLetterArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.numbers, passwordOptions.symbol) {
      possibleChars = possibleChars.concat(numberArr, symbolArr)
      chosenChars.push(random(possibleChars))
    };
    
    if (passwordOptions.symbol, passwordOptions.numbers) {
      possibleChars = possibleChars.concat(symbolArr, numberArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.symbol, passwordOptions.lowercase) {
      possibleChars = possibleChars.concat(symbolArr, smallLetterArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.symbol, passwordOptions.uppercase) {
      possibleChars = possibleChars.concat(symbolArr, capitalLetterArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.uppercase, passwordOptions.symbol) {
      possibleChars = possibleChars.concat(capitalLetterArr, symbolArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.uppercase, passwordOptions.lowercase){
      possibleChars = possibleChars.concat(capitalLetterArr,numberArr)
      chosenChars.push(random(possibleChars))
    };
    
    if (passwordOptions.uppercase, passwordOptions.numbers){
      possibleChars = possibleChars.concat(capitalLetterArr,numberArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.uppercase, passwordOptions.numbers, passwordOptions.symbol){
      possibleChars = possibleChars.concat(capitalLetterArr, numberArr, symbolArr)
      chosenChars.push(random(possibleChars))
    };
    
    if (passwordOptions.uppercase, passwordOptions.lowercase, passwordOptions.symbol){
      possibleChars = possibleChars.concat(capitalLetterArr, smallLetterArr, symbolArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.uppercase, passwordOptions.numbers, passwordOptions.lowercase){
      possibleChars = possibleChars.concat(capitalLetterArr, numberArr, smallLetterArr)
      chosenChars.push(random(possibleChars))
    };

    if (passwordOptions.uppercase, passwordOptions.numbers, passwordOptions.lowercase, passwordOptions.symbol){
      possibleChars = possibleChars.concat(capitalLetterArr,numberArr, smallLetterArr, symbolArr)
      chosenChars.push(random(possibleChars))
    }





    console.log(chosenChars)
     for (let i = 0; i < passwordOptions.length; i++) {
       var possibleChars = random(possibleChars)
       finalPassword.push(possibleChars)
     }

     for (let i = 0; i < chosenChars.length; i++){
       finalPassword[i] = chosenChars[i]
     }

    // display password
    return finalPassword.join('')
  }

 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }


// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
