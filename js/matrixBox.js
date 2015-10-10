function matrixBox(box, id) {
  this.jQueryBox = box;
  this.id = id;
}

matrixBox.prototype.log = function() {
  console.log(this.jQueryBox);
  this.jQueryBox.html(this.id);    
  this.highlight();  
}

matrixBox.prototype.highlight = function() {
  this.jQueryBox.addClass('highlight');
};