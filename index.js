let Word = require("./word.js");
let inquirer = require("inquirer");
let wordBank = ["hello", "hi", "good", "drive"];
let word = new Word(wordBank[Math.floor(Math.random() * 3) + 1]);

function displayWord() {
	word.showLetters();
	console.log(word.letters);
}
displayWord();
