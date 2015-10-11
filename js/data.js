function word(element) {
	this.id = element.id;
	this.text = element.text;
	this.answer = element.answer;
	this.length = element.answer.length;
	this.rowId = element.rowId;
	this.colId = element.colId;
}

function data() {
	this.words = [];
}

data.prototype.initialiseData = function(config) {
	if (!config.values.length) {
		console.log("FATAL ERROR. values not found in config.");
		return;
	}

	config.values.forEach(function(element) {
		this.words.push(new word(element));
	}, this);
};
