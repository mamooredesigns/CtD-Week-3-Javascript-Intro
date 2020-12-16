// //------------------------ Question 1---------------------------
// //Write a function that ask the user for two numbers and return the product of them. 
// //But the challenge here is that you can't use the operator * (you can't make the product)
// //hint: multiplication is a sequence of sums

//  //@param {number} number1
//  //@param {number} number2
//  //@return {number} product

//  let number1 = parseInt(prompt("Please enter a positive, whole number:"))
//  let number2 = parseInt(prompt("Please enter another positive, whole number:"))
 
// //  let num1 = parseInt(number1)

//  const multiplication = (num1, num2) => {
//   // console.log(typeof num1)
//   // console.log(typeof num2)
//   let total = 0;

//   for (i = 0; i < num2 ; i++) {
//     // console.log("iteration counter: ", i)
//     // console.log("total before calculation:", total)
//     //console.log(typeof total)
//     total += num1
//     // console.log("total is:", total)
//   }

//   return total
// }

// const answer1 = multiplication(number1, number2)
// console.log('answer1', answer1)

// const htmlTarget = document.getElementById('a-1')
// htmlTarget.innerHTML = answer1



// //------------------------ Question 2 ---------------------------
// //Write a function that recieves a string as a parameter and evaluate each character 
// //of the string to determinate if the character is vowel or a consonant. You have to 
// //store each character on separate arrays, one for vowels and the other one for consonants.
// //After separating the characters concatenate both arrays. Ask the user if they want the 
// //vowels first or consonants first in the final array.

// //hint:
//  //@param {string}
//  //@return {character} => array of characters

// //PSEUDOCODE:
// //1) Get a string from the user
// //2) Split string into characters to evaluate each character if vowel or consonant
// //3) We'll need 2 arrays - vowels & cons - put each character into correct one
// //4) Concatenate both arrays to make one
// //5) Get user input on v/c first
// //6) Return array of character appropriate to what user wants (v/c)

// vowelOrConsonant = () => {
//   //1) Get a string from user
//   let userInput = prompt("Please enter a string:");
//   let array = [];
//   let answer;
  
//   //2) Split string into characters to evaluate each character if vowel or consonant
//   console.log("array length is:", array.length, "string legnth is:", userInput.length);
//   for (i = 0; i < userInput.length; i++) {
//     console.log("userinput is:", userInput)
//     let character = userInput.charAt(i);
//     console.log("character is: ", character)
//     array.push(character);
//     console.log("array is:", array)
//   }
  
//   //3) We'll need 2 arrays - vowels & cons - put each character into correct one
//   let vowels = [];
//   let consonants = [];
//   console.log("array length before v/c check: ", array.length);

//   for (i=0; i < array.length ;i++) {
//     // console.log("arrays at start: ", vowels, consonants)
//     let characterToAssess = array[i];
//     // console.log("character working with:", characterToAssess)  
//     //add character to apropriate array
//     if (characterToAssess == "a" || 
//         characterToAssess == "e" || 
//         characterToAssess == "i" || 
//         characterToAssess == "o" || 
//         characterToAssess == "u") {
//       vowels.push(characterToAssess);
//       // console.log("vowel array:", vowels)
//     } else {
//       consonants.push(characterToAssess)
//       // console.log("consonant array:", consonants)
//     }
//     // console.log("Our final vowel array is:", vowels)
//     // console.log("Our final consonant array is:", consonants)
//   }
    
//   //4) Concatenate both arrays to make one
//   let consFirst = consonants.concat(vowels);
//   let vowFirst = vowels.concat(consonants);

//   //5) Get user input on v/c first
//   let userRequest;

//   //6) Return array of character appropriate to what user wants (v/c)
//   vOrC = () => {
//     userRequest = prompt("Do you want your vowels or consonants first? Type 'vowels' for vowels first, or 'consonants' for consonants first.");
//     if (userRequest == "vowels") {
//       answer = vowFirst;
//       return answer;
//     } else if (userRequest == "consonants") {
//       answer = consFirst;
//       return answer;
//     } else {
//       alert("You have not made a valid request")
//       // userRequest = prompt("Do you want your vowels or consonants first? Type 'vowels' for vowels first, or 'consonants' for consonants first.")
//       console.log("new user request is", userRequest);
//       vOrC();
//     }
//   }
  
//   vOrC();
//   return answer
// }

// const answer2 = vowelOrConsonant();
// console.log("what is the answer?", answer2)

// const htmlTarget2 = document.getElementById('a-2')
// htmlTarget2.innerHTML = answer2



//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The 
//player has 3 opportunities to guess a number. The number is a random number between 10 - 50.
//If the player doesn't guess the number in three guesses, the program must display an alert and 
//stop the game. If the player finds the number, then the program must show a congratulations 
//message (alert) with the name of the player in upperCase letters and stop the game. 
//You must store the player information in a 'player' object. The Player object 
//contains the following Properties:
  //{string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player; lives, represents the remaining oportunities each 
//time the player fails; and fail_numbers, is an array of numbers that stores the fail numbers 
//the player had guessed.

//hint:
  //@return {string} win / gameOver => a string that says if the user wasted the three 
  //oportunities showing the failed numbers guessed or the name if the player won

function guessTheNumber() {
  let randomNumber = Math.floor(Math.random() * 40) + 10;
  console.log("number is:", randomNumber)
  let player = {
    playerName: "",
    lives: 3,
    numbersGuessed: []
  };

  player.playerName = prompt("Let's play a guessing a game.  But first, who am I playing?  (Please enter your name...");

  let guessing;
  
  if (player.lives <= 3 && player.lives > 0) {
    if (player.lives == 3) {
      guessing = prompt(`${player.playerName}, I'm thinking of a random number between 10 and 50.  You have ${player.lives} chances to guess the number, what would you like to guess?`)
      player.numbersGuessed.push(guessing)
    } else {
      player.lives--;
      guessing = prompt(`Sorry, ${player.playerName}, that wasn't it! \nYou've already guessed these numbers: ${player.numbersGuessed}. \n You have ${player.lives} chances left. \nGuess again...`);
      player.numbersGuessed.push(guessing);
    }
  }

  // if (guessing == randomNumber) {
  //   alert(`Congratulations, ${player.playerName.toUppercase()}, you guessed it!`)
  // }
  
  return player
}

let answer3 = guessTheNumber();

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



// //------------------------ Question 4 ---------------------------
// // In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// // The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
// //example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

// //1) Ask user how to sort
// //2) Sort highest to lowest/longest to shortest based on user input
// //3) Return string, items separated with ; in proper order

// sort = () => {

//   var library = [
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];

//   //1) Ask user how to sort...
//   let sortBy = prompt(
//     "We have a library of three books. Each book has title, author, and library ID information. We would like to know how you want this library sorted. \n Please type 'author' for sorting books by author's name (result will be longest name to shortest name) \n Please type 'title' for sorting books by title (result will be longest title to shortest title) \n Or please type 'id' for sorting books by id number (result will be highest id number to lowest) \n How do you want to sort?"
//   )

//   let resultArray = [];
//   let item;

//   function sortThat (sortBy) {
//     for (i = 0; i < library.length; i++) {
//     if (sortBy == "title") {
//       item = library[i].title;
//       resultArray.push(item);
//     } else if (sortBy == "author") {
//       item = library[i].author;
//       resultArray.push(item);
//     } else if (sortBy == "id") {
//       item = library[i].libraryID;
//       resultArray.push(item);
//     } else {
//       sortBy = prompt("You provided an invalid entry.  Please enter 'author' 'title' or 'id'");
//       sortThat(sortBy);
//     }    
//     }
//   }

//   sortThat(sortBy);

//   if (typeof resultArray[0] == "string") {
//     resultArray.sort(function(a, b){
//       return b.length - a.length
//     })
//   } else {
//     resultArray.sort()
//     resultArray.reverse()
//   }  
//   console.log("what's our result?", resultArray)
//   let resultString = "";
//   for (i = 0; i < resultArray.length; i++) {
//     resultString += resultArray[i] + "; "
//   }
//   return resultString
// }

// const answer4 = sort()
// console.log("answer is a ... ", typeof answer4)

// const htmlTarget4 = document.getElementById('a-4')
// htmlTarget4.innerHTML = answer4
