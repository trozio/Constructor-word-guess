let Letter = require("./letter.js");
let letter = new Letter();
let Word = function Word(word) {
	this.word = word.split("");
	this.letters = [];
	this.joinLetters = function() {

		for (i = 0; i < this.word.length; i++) {
			letter = new Letter(this.word[i]);
			letter.correct();
			this.letters.push(letter.character);

		}



	}
	this.jWord = function() {

		let nWord = this.letters.join(" ");
		console.log(nWord);
	}






	this.cGuess = function(q) {

		for (i = 0; i < this.word.length; i++) {
			letter.check(q);
			letter.correct();
		}

	}
}
module.exports = Word;
