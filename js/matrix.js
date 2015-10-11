function matrix() {
  // Array of row objects.
  // Blah.
  this.rows = [];
}

matrix.prototype.addRow = function(row) {
  this.rows.push(row);
};

matrix.prototype.getRowById = function(id) {
  if (id < this.rows.length) {
    return this.rows[id];
  }
};

matrix.prototype.getBox = function(colId, rowId) {
  var row = this.getRowById(rowId);
  var box;
  if (row) {
    box = row.getBox(colId);
  }
  if (!box) {
    console.log('FATAL ERROR. The box by ' + colId + ', ' + rowId + ' does not exist.');
  }

  return box;
};

matrix.prototype.getNextBox = function(box) {
  var id = box.getId();
  var rowId = Math.floor(id / 1000);
  var colId = id % 1000;

  var x;

  x = (colId == window.app.maxCols - 1 ? 0 : colId + 1);

  if (x) {
    return this.getBox(x, rowId);
  }

  return undefined;
};

matrix.prototype.getPreviousBox = function(box) {
  var id = box.getId();
  var rowId = Math.floor(id / 1000);
  var colId = id % 1000;

  if (colId) {
    return this.getBox(colId - 1, rowId);
  }

  return undefined;
};

matrix.prototype.setTextInWordContainer = function(text, rowId, colId, direction) {
  var x = colId;
  var y = rowId;
  var boxes = [];
  var error = null;

  for (var i = 0; i < text.length; ++i) {
    var box = this.getBox(x, y);
    if (!box) {
      error = 'FATAL ERROR. Could not locate all boxes for word.';
      break;
    }

    if (box.getIsHidden()) {
      error = 'FATAL ERROR. Box is hidden.';
      break; 
    }

    boxes.push(box);
    // Update x and y.
    if (direction == 'HORIZONTAL') {
      ++x;
    } else if (direction == 'VERTICAL') {
      ++y;
    } else {
      console.log('FATAL ERROR. Invalid direction.');
      return;
    }
  }

  if (error) {
    console.log(error);
    return;
  } 

  for (var i = 0; i < text.length; ++i) {
    boxes[i].setText(text[i]);
  }
};

matrix.prototype.log = function() {
  this.rows.forEach(function(row) {
    row.log();
    console.log('\n');
  });
};

matrix.prototype.setValues = function(values) {
  values.forEach(function(value) {
    this.setTextInWordContainer(value.answer, value.rowId, value.colId, value.direction);
  }, this);
};

matrix.prototype.setKeyHandlers = function() {
  var that = this;
  var helpSetCallback = function(box) {
    return function(event) {
      box.setText(box.getText().substr(box.getText.length));
      switch (event.which) {
        case 37:
          that.getPreviousBox(box).focus();
          break;
        case 8:
          box.setText('');
          break;
        default:
          that.getNextBox(box).focus();
      }
    }
  }
  this.rows.forEach(function(row) {
    for (var i = 0; i < window.app.maxCols; ++i) {
      var box = row.getBox(i);
      box.setKeyHandler(helpSetCallback(box));
    }
  });
};