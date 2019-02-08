require("./letter.js");
let Word = function Word(word) {
	this.letters = [];
	this.showLetters = function() {
		word = word.split("");
		for (i = 0; i < word.length; i++) {
			word[i] = new Word(word[i]);
			this.letters.push("_");
			}
			this.letters.toString();
	}





	this.cGuess = function(q) {
		for (i = 0; i < letters.length; i++) {
			check(letters[i])
		}

	}
}
module.exports = Word;
