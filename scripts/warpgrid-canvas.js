// warpgrid-canvas.js
// Functional Code for Generating and Controlling Gameboard with canvas
// Table method proved to be too obnoxious and didn't allow flexible drawing

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var chargeSize = 30;
var gridSize = 60;
var chargeStart = [0, 0];
var gridStart = [2 * chargeSize, 0];
var chargeCellXCount = 2;
var chargeCellYCount = 12;
var gridCellXCount = 6;
var gridCellYCount = 6;


// Print Charge Cells onto Warpgrid
var startX = chargeStart[0];
var startY = chargeStart[1];
var w = chargeSize;
var h = chargeSize;

var i; var j;
for (i = 0; i < chargeCellXCount; i++) {
  for (j = 0; j < chargeCellYCount; j++) {
    let x = startX + i * w;
    let y = startY + j * h;
    ctx.strokeRect(x, y, w, h);
  }
}

// Print Grid Cells onto Warpgrid
startX = gridStart[0];
startY = gridStart[1];
w = gridSize;
h = gridSize;

for (i = 0; i < gridCellXCount; i++) {
  for (j = 0; j < chargeCellYCount; j++) {
    let x = startX + i * w;
    let y = startY + j * h;
    ctx.strokeRect(x, y, w, h);
  }
}
