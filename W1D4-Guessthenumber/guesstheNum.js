// guess the number

let name = prompt("Hello there, what's your name?");


alert("Let's get started " + name);

let lowestNum = parseInt(prompt("What's the lowest number for the game?"));

let biggestNum = parseInt(prompt("What's the biggest number for the game?"));

let randomNum = Math.floor(Math.random() * (biggestNum - lowestNum) + lowestNum);
console.log(randomNum)

let guessInput;

let guessCounter = 1;

let guessCounter2 = 5;

while (guessInput !== randomNum) {

    if (guessCounter2 === 0) { break }

    guessInput = parseInt(prompt("Can you guess the number? Try here"));

    if (guessInput === randomNum) {
        alert("You guessed it right in " + guessCounter + " tries!!!!!");

        alert("Well done, see you later");

    }

    else if (guessInput > randomNum) {

        guessCounter++;
        guessCounter2--;
        alert("Not quite right yet! Try a lower number \nYou have " + guessCounter2 + " tries left")
    }

    else if (guessInput < randomNum) {

        guessCounter++;
        guessCounter2--;
        alert("Not quite right yet! Try a bigger number \nYou have " + guessCounter2 + " tries left")
    }

}

if (guessCounter2 === 0) { alert("You have used 5 tries. Start a new game or exit") }