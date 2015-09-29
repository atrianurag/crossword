// START MATRIX OBJECT //
var matrix = function() {
  // Array of row objects.
  this.rows = [];
};

matrix.prototype.addRow = function(row) {
  this.rows.push(row);
};

matrix.prototype.getRowById = function(id) {
  if (id < this.rows.length) {
    return this.rows[id];
  }
};

matrix.prototype.log = function() {
  this.rows.forEach(function(row) {
    row.log();
    console.log('\n');
  });
}
// END MATRIX OBJECT //

// START ROW OBJECT //
var matrixRow = function(box) {
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
}
// END ROW OBJECT //

// START BOX OBJECT //
var matrixBox = function(box, id) {
  this.jQueryBox = box;
  this.id = id;
}

matrixBox.prototype.log = function() {
  console.log(this.jQueryBox);
  this.jQueryBox.html(this.id);      
}

matrixBox.prototype.highlight = function() {
  this.jQueryBox.addClass('highlight');
};
// END BOX OBJECT //

var hiddenBoxes = [];
function initHiddenBoxes() {
  hiddenBoxes.push([0, 1, 2]);
  hiddenBoxes.push([5, 6, 9]);
  hiddenBoxes.push([5, 8, 3]);
}

function init() {
  initHiddenBoxes();
  var grid = new matrix();
  var container = $('.container');
  for (var i = 0; i < 8; ++i) {
    addRow(container, i, grid);
  }
  grid.log();
}

function addRow(container, rowId, grid) {
  var row = $("<div></div>")
  row.attr('id', rowId);
  row.addClass("row");
  
  var mRow = new matrixRow();
  
  for (var i = 0; i < 10; ++i) {
    var box = $("<div contenteditable></div>");
    box.addClass("box");
    box.attr('id', i);
    if (typeof hiddenBoxes[rowId] == 'object' && hiddenBoxes[rowId].indexOf(i) != -1) {
      box.addClass('no-show');
    }
    row.append(box);
    container.append(row);
    
    // Update the matrix.
    var mBox = new matrixBox(box, i);
    mRow.addBox(mBox);    
  }
  grid.addRow(mRow);
}

init();
