const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;


while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
  console.log("");
  guess = prompt("Let's guess a number: ");
  

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
  if (numberInMind == guess)
  {
    console.log("");
    console.log("####################################################");
    console.log("#      CONGRATULATION! The right number is "  + numberInMind + "      #");
    console.log("####################################################");
    console.log("");
    console.log("           Do you want to play again?");
    guess = prompt("        Enter 'y' for yes, 'n' for no: ");

    if (guess == 'n' | guess == 'N')
    {
      console.log("");
      console.log("");
      console.log("                   ~ THE END ~");;
      console.log("");
      console.log("           ----- See You Again! -----");
      console.log("");
      break;
    } 
    
    else if (guess == 'y' | guess == 'Y')
    {
      console.log("");
      console.log("           ----- Let's Play Again! -----");
      console.log("");
    
    } 
    else
      break;
  
  } 
  else if (numberInMind > guess) 
  {

    console.log ("Oops! You've guessed too low! Keep guessing!");
  
  } 
  else
  console.log ("Oops! You've guessed too high! Keep guessing!");
  
}


// Bonus Point: prompt user and provide option for user to start a new game after winning

