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

$(init);
