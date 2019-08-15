let fs = require("fs");
let inquirer = require("inquirer");
let Word = require("./Word");
var colors = require('colors');

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
let solution = "";
let previousGuesses = [];

console.log("Welcome to " +"Mystery Inventor".bold.blue + "! Guess letters to reveal the name of a famous inventor!");

startGame();

// ------------------------------------------------------------------------------ //

function startGame() {
    previousGuesses = [];
    guessesRemaining = 10;
    solution = wordBank[ Math.floor( Math.random() * (wordBank.length-1) ) ];
    mysteryInventor = new Word(solution);
    console.log(`\n${mysteryInventor}\n`);
    guessLetter();
}

function guessLetter() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter:",
            name: "guess",
            filter: function(val) {return val[0];} ,
            validate: function(char) { 
                let letters = /^[A-Za-z]+$/;
                if (char.match(letters)) {
                    if (!previousGuesses.includes(char)) {
                        return true;
                    } else {
                        return "You already guessed that!";
                    }
                } else {
                    return "Please enter a letter.";
                } 
            }
        }
    ]).then(function(response) {
        previousGuesses.push(response.guess);
        if (mysteryInventor.guess(response.guess)) {
            console.log("\nCORRECT!".green);
            console.log(`\n${mysteryInventor}\n`);

            if (mysteryInventor.solved()) {
                console.log("Neato!".bold.blue + " You solved the puzzle! Let's try another one.")
                startGame();
            } else {
                guessLetter();
            }
        } else {
            console.log("\nINCORRECT!".red);
            guessesRemaining--;
            console.log("\nGuesses remaining: " + guessesRemaining);
            if (guessesRemaining <= 0) { // game over
                console.log(`You're out of guesses!`.bold.red + ` The correct answer is ${solution.toUpperCase().green}.`);
                console.log("\nNext puzzle!");
                startGame();
            } else {
                console.log(`\n${mysteryInventor}\n`);
                guessLetter();
            }
        }
        
        
    });
}
