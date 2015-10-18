function matrixRow(box) {
  this.boxes = [];
}

matrixRow.prototype.addBox = function(box) {
  this.boxes.push(box);
};

matrixRow.prototype.log = function() {
  this.boxes.forEach(function(box) {
    box.log();
    console.log('\n');    
  });
};

matrixRow.prototype.getBox = function(id) {
	return this.boxes[id];
};

matrixRow.prototype.getBoxes = function() {
	return this.boxes;
}