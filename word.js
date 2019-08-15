// Constructor function for creating Word objects
Letter = require("./Letter");

let Word = function(word) {
    this.letters = [];
    for (let i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
    }
} 

Word.prototype.toString = function() {
    //console.log();
    let strOutput = "";
    this.letters.forEach( function(letter) {
        strOutput += (letter + " ");
    });
    return strOutput;
}

Word.prototype.guess = function(charGuess) {
    let letterFound = false;
    this.letters.forEach( function(letter) {
        letterFound = letter.guess(charGuess) || letterFound;
    });
    return letterFound;
}

Word.prototype.solved = function() {
    let allGuessed = true;
    this.letters.forEach( function(letter) {
        allGuessed = letter.wasGuessed && allGuessed;
    });
    return allGuessed;
}

module.exports = Word;