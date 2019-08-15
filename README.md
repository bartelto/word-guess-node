# Mystery Inventor 
A Node.js word guess game by Todd F. Bartelt

## Introduction

*Mystery Inventor* is a fun, easy word game in the tradition of *Hangman* and *Wheel of Fortune*. The game displays a series of blanks &mdash; one for each letter &mdash; and challenges you to complete the puzzle by guessing all the letters.

## Playing *Mystery Inventor*

*Mystery Inventor* is a **Node.js** game. Follow these steps to run it:
- Download the project from GitHub to your local machine.
- Use a command-line interface (CLI) to navigate inside the project directory.  
- Type ```node index.js```. 

*Mystery Inventor* will randomly choose the name of a famous inventor, display the name with the letters represented by blanks, and then prompt the user to guess a letter. If the name contains the chosen letter one or more times, the program will reveal it/them. If not, the number of remaining incorrect guesses will decrease by one. Be careful! If you make 10 incorrect guesses, you lose!

## Preview

![Preview 1](https://github.com/bartelto/word-guess-node/blob/master/documentation/word-guess-preview.gif "Preview 1")

## NPM packages used
- **```colors```** Allows some basic styling and coloring of text in the console.
- **```inquirer```** A collection of common, interactive command-line user interfaces.

## The author

This app was written from the ground up by **Todd F. Bartelt** as part of the Full-Stack Web Development program at University of Kansas Professional and Continuing Education. Learn more about Todd at [toddbartelt.com](http://toddbartelt.com).