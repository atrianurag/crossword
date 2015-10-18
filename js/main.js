window.app = {
  maxRows: 13,
  maxCols: 14
};

var hiddenBoxes = [];
function initHiddenBoxes() {
  // hiddenBoxes.push([0, 1, 2]);
  // hiddenBoxes.push([5, 6, 9]);
  // hiddenBoxes.push([5, 8, 3]);
}

function init() {
  // Create the grid.
  initHiddenBoxes();
  var grid = new matrix();
  var container = $('.container');
  for (var i = 0; i < window.app.maxRows; ++i) {
    addRow(container, i, grid);
  }
  
  // Get the values.
  var values = new data();
  values.initialiseData(config);
  
  grid.setKeyHandlers();
  // Set the values in the gird.
  grid.setValues(values.words);

  // Set hidden boxes.
  grid.hideBoxes();
}

function addRow(container, rowId, grid) {
  var row = $("<div></div>")
  row.attr('id', rowId);
  row.addClass("row");
  
  var mRow = new matrixRow();
  
  for (var i = 0; i < window.app.maxCols; ++i) {
    var box = $("<div contenteditable></div>");
    var hidden = false;
    box.addClass("box");
    box.attr('id', rowId * 1000 + i);
    if (typeof hiddenBoxes[rowId] == 'object' && hiddenBoxes[rowId].indexOf(i) != -1) {
      box.addClass('no-show');
      hidden = true;
    }
    row.append(box);
    container.append(row);
    
    // Update the matrix.
    var mBox = new matrixBox(box, rowId * 1000 + i, hidden);
    mRow.addBox(mBox);    
  }
  grid.addRow(mRow);
}

$(init);
