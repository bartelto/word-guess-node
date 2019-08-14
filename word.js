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

module.exports = Word;

/*
let newWord = new Word("Silly Rabbit");
console.log(newWord + "");
newWord.guess("r");
console.log(newWord + "");
newWord.guess("b");
console.log(newWord + "");
newWord.guess("l");
console.log(newWord + "");
newWord.guess("i");
console.log(newWord + "");
*/