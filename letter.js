let Letter = function Letter(character) {
	this.character = character;
	this.guess = false;
	this.correct = function() {
		if (this.guess === false) {
			this.character = "_";
		}
	}
	this.check = function(g) {
		if (g === this.character) {
			this.guess = true;
		}
	}
};
module.exports = Letter;
