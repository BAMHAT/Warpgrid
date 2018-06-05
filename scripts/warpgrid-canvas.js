// warpgrid-canvas.js
// Functional Code for Generating and Controlling Gameboard with canvas
// Table method proved to be too obnoxious and didn't allow flexible drawing


//=======//
// Setup //
//=======//

// Setup Canvas Context
var canvas = document.getElementById('warpgrid');
var context = canvas.getContext('2d');

// Grid Element Measurements
var chargeSize = 30;
var gridSize = 60;
var origin = [0, 0];
var chargeStart = [0, 0];
var gridStart = [2 * chargeSize, 0];
var chargeCellCount = [2, 12];
var gridCellCount = [6, 6];

// Game Element values


// Canvas Arc & Curve Variables
var toRadians = (Math.PI/180);
var circleAngles = [0, toRadians * 360];
var isAntiClockwise = true;
var isClockwise = false;



//===============//
// Outline Setup //
//===============//

// Print Grid Section Outlines
drawOutline(context, origin, canvas.width, canvas.height, 4);

var width = chargeSize * chargeCellCount[0];
var height = chargeSize * chargeCellCount[1];
drawOutline(context, chargeStart, width, height, 4);

var width = gridSize * gridCellCount[0];
var height = gridSize * gridCellCount[1];
drawOutline(context, gridStart, width, height, 4);


// Print Charge Cells onto Warpgrid
drawCells(context, chargeStart, chargeSize, chargeCellCount, 1);

// Print Grid Cells onto Warpgrid
drawCells(context, gridStart, gridSize, gridCellCount, 1);


//=====================//
// World Element Setup //
//=====================//

// Draw Level One Distortion
drawDistortion(context, 0, 0, gridSize, gridStart, 1);

// Draw Level Two Distortion
drawDistortion(context, 1, 0, gridSize, gridStart, 2);

// Draw Level Three Distortion
drawDistortion(context, 2, 0, gridSize, gridStart, 3);

// Draw Portal
drawPortal(context, 3, 0, gridSize, gridStart);

// Draw Player
drawPlayer(context, 4, 0, gridSize, gridStart);


// Draw Die Region
var diceCanvas = document.getElementById('dice-box');
var diceContext = diceCanvas.getContext('2d');
drawOutline(diceContext, origin, diceCanvas.width/2, diceCanvas.height, 2);
drawOutline(diceContext, [diceCanvas.width/2, 0], diceCanvas.width/2, diceCanvas.height, 2);

let xDice = Math.floor(Math.random() * 6) + 1;
let yDice = Math.floor(Math.random() * 6) + 1;

// Draw Dice
let dieCanvasMidX = diceCanvas.width / 2;
let dieWidth = gridSize * 1.5;
let dieHeight = gridSize * 1.5;
let dieMarginX = gridSize;
let dieMarginY = chargeSize * 1.5;
drawDie(diceContext, dieMarginX, dieMarginY, dieWidth, dieHeight, xDice);
drawDie(diceContext, dieCanvasMidX + dieMarginX, dieMarginY, dieWidth, dieHeight, yDice);






//==========================//
// Canvas Drawing Functions //
//==========================//

function drawOutline(ctx, start, width, height, lineWidth) {
  let x = start[0];
  let y = start[1];
  let w = width;
  let h = height;
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(x, y, w, h);
  ctx.lineWidth = 1;
}


function drawCells(ctx, start, size, cellCount, lineWidth) {
  let startX = start[0];
  let startY = start[1];
  let cellCountX = cellCount[0];
  let cellCountY = cellCount[1];
  let w = size;

  ctx.lineWidth = lineWidth;
  let i; let j;
  for (i = 0; i < cellCountX; i++) {
    for (j = 0; j < cellCountY; j++) {
      x = startX + i * w;
      y = startY + j * w;
      ctx.strokeRect(x, y, w, w);
    }
  }
  ctx.lineWidth = 1;
}


function drawDistortion(ctx, gridX, gridY, size, start, distType) {
    let x = start[0] + (gridX + 0.5) * size;
    let y = start[1] + (gridY + 0.5) * size;
    let radius = size * 0.25;

    let disc = new Path2D();
    disc.arc(x, y, radius, 0, 2*Math.PI, true);
    disc.moveTo(x, y - radius);
    disc.lineTo(x, y + radius);
    ctx.stroke(disc);

    if (distType > 1) {
      let semiLeft = new Path2D();
      semiLeft.arc(x, y, radius, 3*Math.PI / 2, Math.PI/2, true);
      ctx.fill(semiLeft);
    }
    if (distType > 2) {
      let semiRight = new Path2D();
      semiRight.arc(x, y, radius, 3*Math.PI / 2, Math.PI/2, false);
      ctx.fill(semiRight);
    }
}


function drawPortal(ctx, gridX, gridY, size, start) {
  let midX = start[0] + (gridX + 0.5) * size;
  let midY = start[1] + (gridY + 0.5) * size;
  let x = midX;
  let y = midY;
  let a = 0.1;
  let b = 0.5;

  let portal = new Path2D();
  portal.moveTo(midX, midY);
  for (i = 0; i < 1440; i++) {
      let angle = 0.025 * i
      let lastX = x;
      let lastY = y;
      x = midX + (a + b * angle) * Math.cos(angle);
      y = midY + (a + b * angle) * Math.sin(angle);

      //portal.quadraticCurveTo(lastX, lastY, x, y);
      portal.lineTo(x, y);
  }
  ctx.stroke(portal);
}


function drawPlayer(ctx, gridX, gridY, size, start) {
  let midX = start[0] + (gridX + 0.5) * size;
  let midY = start[1] + (gridY + 0.5) * size;
  var tri = new Path2D();
  tri.moveTo(midX, midY - 0.25 * size);
  tri.lineTo(midX - 0.25 * size, midY + 0.25 * size);
  tri.lineTo(midX + 0.25 * size, midY + 0.25 * size);
  ctx.fill(tri);
}


function drawDie(ctx, x, y, width, height, number) {
  ctx.clearRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);

  let hw = 0.5 * width;
  let hh = 0.5 * height;
  let rDot = 0.1 * width;

  switch (number) {
    case 1:
      ctx.moveTo(x + hw, y + hh);
      ctx.arc(x + hw, y + hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      break;
    case 2:
      ctx.moveTo(x + 0.5*hw, y + 0.5*hh);
      ctx.arc(x + 0.5*hw, y + 0.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.5*hw, y + 1.5*hh);
      ctx.arc(x + 1.5*hw, y + 1.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      break;
    case 3:
      ctx.moveTo(x + 0.5*hw, y + 0.5*hh);
      ctx.arc(x + 0.5*hw, y + 0.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + hw, y + hh);
      ctx.arc(x + hw, y + hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.5*hw, y + 1.5*hh);
      ctx.arc(x + 1.5*hw, y + 1.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      break;
    case 4:
      ctx.moveTo(x + 0.5*hw, y + 0.5*hh);
      ctx.arc(x + 0.5*hw, y + 0.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.5*hw, y + 0.5*hh);
      ctx.arc(x + 1.5*hw, y + 0.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 0.5*hw, y + 1.5*hh);
      ctx.arc(x + 0.5*hw, y + 1.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.5*hw, y + 1.5*hh);
      ctx.arc(x + 1.5*hw, y + 1.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      break;
    case 5:
      ctx.moveTo(x + 0.5*hw, y + 0.5*hh);
      ctx.arc(x + 0.5*hw, y + 0.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.5*hw, y + 0.5*hh);
      ctx.arc(x + 1.5*hw, y + 0.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 0.5*hw, y + 1.5*hh);
      ctx.arc(x + 0.5*hw, y + 1.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.5*hw, y + 1.5*hh);
      ctx.arc(x + 1.5*hw, y + 1.5*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + hw, y + hh);
      ctx.arc(x + hw, y + hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      break;
    case 6:
      ctx.moveTo(x + 0.4*hw, y + 0.4*hh);
      ctx.arc(x + 0.4*hw, y + 0.4*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 0.4*hw, y + hh);
      ctx.arc(x + 0.4*hw, y + hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 0.4*hw, y + 1.6*hh);
      ctx.arc(x + 0.4*hw, y + 1.6*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.6*hw, y + 0.4*hh);
      ctx.arc(x + 1.6*hw, y + 0.4*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.6*hw, y + hh);
      ctx.arc(x + 1.6*hw, y + hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      ctx.moveTo(x + 1.6*hw, y + 1.6*hh);
      ctx.arc(x + 1.6*hw, y + 1.6*hh, rDot, 0, 2*Math.PI, true);
      ctx.fill();
      break;
    default:
      console.log("Invalid die number!");
  }
}
