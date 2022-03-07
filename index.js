    
// random value generated
    let y = Math.floor(Math.random() * 10 + 1);
      
    // counting the number of guesses
    // made for correct Guess
    let guess = 1;
    let turns=0;
      
    document.getElementById("submitguess").onclick = function(){
      
   // number guessed by user     
   let x = document.getElementById("guessField").value;
  
   if(x == y)
   {    
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ");
   }
   else if(x > y) /* if guessed number is greater
                   than actual number*/ 
   {    
       guess++;
       alert("OOPS wrong!! Try again");
       turns = turns + 1;
   }
   else
   {
       guess++;
       alert("OOPS wrong!! Try again")
       turns = turns + 1;
   }
   if (turns >= 3)
 {
     window.alert("Sorry, you have run out of turns! The secret number was " + x);
again = window.prompt("Would you like to play another game? Enter Y or N.", "Y");
   if (again == "N" || again == "n")
   {
window.alert("Thanks for playing. Goodbye.");
window.close();
    }
   else
   {
alert("Please make sure you enter numbers 1 - 10!");
}
}
}

