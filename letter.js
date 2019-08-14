// Constructor function for creating Letter objects
let Letter = function(char) {
    this.char = char;
    // only alpha characters are hidden initially
    var letters = /^[A-Za-z]+$/;
    if (char.match(letters)) this.wasGuessed = false;
    else this.wasGuessed = true;
};

Letter.prototype.toString = function() {
    if (this.wasGuessed) return this.char;
    else return "_";
}

Letter.prototype.guess = function(charGuess) {
    if (charGuess.toUpperCase() === this.char ||
        charGuess.toLowerCase() === this.char) {
        this.wasGuessed = true;
        return true;
    } else return false;
}

module.exports = Letter;

/*
let newLetter = new Letter("g");
console.log(newLetter + "");
console.log(newLetter.guess("g"));
console.log(newLetter+ "");
*/