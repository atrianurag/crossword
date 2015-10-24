function word(element) {
	this.id = element.id;
	this.text = element.text;
	this.answer = element.answer;
	this.length = element.length;
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

data.prototype.getUsedBoxes = function(x, y) {
	// I should be ashamed of myself.
	// This function is :(
	// Please rewrite this like any real programmer would.
	// :(

	var usedBoxes = [];
	config.values.forEach(function(value) {
		if (value.direction == 'HORIZONTAL') {
			for (var i = value.colId; i < value.colId + value.length; ++i) {
				usedBoxes.push([i, value.rowId]);
			}
		} else {
			for (var i = value.rowId; i < value.rowId + value.length; ++i) {
				usedBoxes.push([value.colId, i]);
			}
		}
	});

	function contains(a, b) {
		for (var i = 0; i < usedBoxes.length; ++i) {
			if (usedBoxes[i][0] == a && usedBoxes[i][1] == b) {
				return true;
			}
		}
		return false;
	}

	var notUsedBoxes = [];
	for (var x = 0; x < window.app.maxCols; ++x) {
		for (var y = 0; y < window.app.maxRows; ++y) {
			if (!contains(x, y)) {
				notUsedBoxes.push([x, y]);
			}
		}
	}
	return notUsedBoxes;
};