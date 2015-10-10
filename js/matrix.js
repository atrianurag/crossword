function matrix() {
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