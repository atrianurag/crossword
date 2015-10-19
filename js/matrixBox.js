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

matrixBox.prototype.highlightError = function() {
  this.jQueryBox.addClass('highlight-error');
};

matrixBox.prototype.unHighlightError = function() {
  this.jQueryBox.removeClass('highlight-error');
};

matrixBox.prototype.highlightSelection = function() {
  this.jQueryBox.addClass('highlight-selection');
};

matrixBox.prototype.unHighlightSelection = function() {
  this.jQueryBox.removeClass('highlight-selection');
};

matrixBox.prototype.hide = function() {
  this.jQueryBox.addClass('no-show');
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

matrixBox.prototype.getRowId = function() {
  return Math.floor(this.id / 1000);
};

matrixBox.prototype.getColId = function() {
  return this.id % 1000;
};

matrixBox.prototype.bindEvent = function(event, handler) {
  switch (event) {
    case 'keyup':
      this.jQueryBox.keyup(handler);
      break;
    case 'keydown':
      this.jQueryBox.keydown(handler);
    case 'hover':
      this.jQueryBox.hover(handler);
    case 'mouseout':
      this.jQueryBox.mouseout(handler);
    default:
      return;
  }
}

matrixBox.prototype.focus = function() {
	this.jQueryBox.focus();
}