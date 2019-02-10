let Word = require("./word.js");
let inquirer = require("inquirer");
let wordBank = ["hello", "hi", "good", "drive"];
let word = new Word(wordBank[Math.floor(Math.random() * 3) + 1]);


function inquire() {
	inquirer.prompt([{
			name: "Letter",
			message: "Guess a letter!",
			type: "input"
		}

	]).then(results => {
		word.cGuess(results.Letter);
		word.jWord();
		inquire();

	})
}
word.joinLetters();
word.jWord();
inquire();
