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
	return this.jQueryBox.text();
};

matrixBox.prototype.getIsHidden = function() {
	return this.isHidden;
};

matrixBox.prototype.getId  = function() {
	return this.id;
};

matrixBox.prototype.setKeyHandler = function(event, handler) {
  switch (event) {
    case 'keyup':
      this.jQueryBox.keyup(handler);
      break;
    case 'keydown':
      this.jQueryBox.keydown(handler);
    default:
      return;
  }
}

matrixBox.prototype.focus = function() {
	this.jQueryBox.focus();
}