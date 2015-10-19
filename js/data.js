function word(element) {
	this.id = element.id;
	this.text = element.text;
	this.answer = element.answer;
	this.length = element.answer.length;
	this.rowId = element.rowId;
	this.colId = element.colId;
	this.direction = element.direction;
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

data.prototype.getWordsWithPosition = function(x, y) {
	var results = [];
	config.values.forEach(function(value) {
		if (value.direction == 'HORIZONTAL') {
			if (x >= value.rowId && x <= value.rowId + value.answer.length) {
				results.push(value);
			}
		} else if (direction == 'VERTICAL') {
			if (y >= value.colId && y <= value.colId + value.answer.length) {
				results.push(value);
			}
		}
	});

	return results;
};
