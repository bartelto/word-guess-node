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

startGame();

// ------------------------------------------------------------------------------ //

function startGame() {
    guessesRemaining = 10;
    mysteryInventor = new Word( 
        wordBank[ Math.floor( Math.random() * (wordBank.length-1) ) ]
    );
    console.log(mysteryInventor + "\n");
    guessLetter();
}

function guessLetter() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!:",
            name: "guess",
            validate: function(char) { 
                let letters = /^[A-Za-z]+$/;
                if (char.match(letters)) {
                    return true;
                } else {
                    return "Please enter a letter.";
                } 
            }
        }
    ]).then(function(response) {
        //if (mysteryInventor.validate) {
            if (mysteryInventor.guess(response.guess)) {
                console.log("\nCORRECT!".green);
            } else {
                console.log("\nINCORRECT!".red);

            }

            console.log("\n" + mysteryInventor + "\n");
            guessLetter();
        //} else {
        //    console.log("Please guess letters only, please!");
        //}
    });
}
