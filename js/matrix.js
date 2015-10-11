function matrix() {
  // Array of row objects.
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

matrix.prototype.getBox = function(rowId, colId) {
  var row = this.rows[rowId];
  if (row) {
    var box = row[colId];
  }

  if (!box) {
    var errorMessage = 'Fatal error. Box pointed by rowId = ' + 
      rowId + ', colId = ' + colId + ' does not exist.';
    console.log(errorMessage);
  }

  return box;
};

matrix.prototype.log = function() {
  this.rows.forEach(function(row) {
    row.log();
    console.log('\n');
  });
};

matrix.prototype.setValues = function(values) {

};