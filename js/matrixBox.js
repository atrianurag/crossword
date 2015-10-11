function matrixBox(box, id, isHidden) {
  this.jQueryBox = box;
  this.id = id;
  this.isHidden = isHidden;
}

matrixBox.prototype.log = function() {
  console.log(this.jQueryBox);
  this.jQueryBox.html(this.id);    
  this.highlight();  
}

matrixBox.prototype.highlight = function() {
  this.jQueryBox.addClass('highlight');
};

matrixBox.prototype.setText = function(text) {
	this.jQueryBox.html(text);
};

matrixBox.prototype.getText = function(text) {
	return this.jQueryBox.html();
};

matrixBox.prototype.getIsHidden = function() {
	return this.isHidden;
};

matrixBox.prototype.getId  = function() {
	return this.id;
};

matrixBox.prototype.setKeyHandler = function(handler) {
	this.jQueryBox.keyup(handler);
}

matrixBox.prototype.focus = function() {
	this.jQueryBox.focus();
}