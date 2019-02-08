let Letter = function Letter(character) {
	this.character = character;
	this.guess = false;
	this.correct = function() {
		if (guess === true) {
			return this.character;
		}
		return "_";
	}
	this.check = function(q) {
		if (q === character) {
			this.guess = true;
		}
	}
};
module.exports = Letter
