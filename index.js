let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word");

let wordBank = [
    "Benjamin Franklin",
    "Thomas Alva Edison",
    "Alexander Graham Bell",
    "Leonardo da Vinci",
    "Nikola Tesla",
    "The Wright Brothers",
    "Samuel Morse",
    "Eli Whitney",
    "Steve Jobs",
    "Henry Ford",
    "James Watt",
    "George Washington Carver"
];
let guessesRemaining = 0;
let mysteryInventor;

startGame();

// ------------------------------------------------------------------------------ //

function startGame() {
    guessesRemaining = 10;
    mysteryInventor = new Word( 
        wordBank[ Math.floor( Math.random() * (wordBank.length-1) ) ]
    );
    console.log(mysteryInventor + "");
    guessLetter();
}

function guessLetter() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!:",
            name: "guess"
        }
    ]).then(function(response) {
        mysteryInventor.guess(response.guess)
        console.log(mysteryInventor + "");
        guessLetter();
    });
}
