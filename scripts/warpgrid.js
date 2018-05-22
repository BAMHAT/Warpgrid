// warpgrid.js

// Populating table cells with relevant properties
var largeCellWidth = "16px";

var grid_cells = document.querySelectorAll("tbody.main-grid tr td:nth-child(n+5):nth-child(-n+10)");
for (let i = 0; i < grid_cells.length; i++) {
  grid_cells[i].rowSpan = 2;
  grid_cells[i].colSpan = 2;
  grid_cells[i].style.width = largeCellWidth;
  grid_cells[i].style.height = largeCellWidth;
}


var warp_cells = document.querySelectorAll("tbody.main-grid tr td:nth-child(11)");
for (let i = 0; i < warp_cells.length; i++) {
  warp_cells[i].rowSpan = 2;
  warp_cells[i].colSpan = 2;
  warp_cells[i].style.width = largeCellWidth;
  warp_cells[i].style.height = largeCellWidth;
  warp_cells[i].style.borderBottom = "3px solid black";
}

// Add grid level changes
var grids = document.querySelectorAll(".table-box tbody.main-grid");
console.log(grids.length);

for (let j = 0; j < grids.length; j++) {
  let grid = grids[j];

  var hidden_charge_cells = grid.querySelectorAll(`tr:nth-child(n+1):nth-child(-n+${10 - 2*j}) td:nth-child(n+1):nth-child(-n+2)`);
  console.log(hidden_charge_cells.length);
  for (let i = 0; i < hidden_charge_cells.length; i++) {
    if (i % 4 == 0 || i % 4 == 1) {
      hidden_charge_cells[i].style.border = "none";
    } else if (i % 4 == 2) {
      hidden_charge_cells[i].style.borderTop = "none";
      hidden_charge_cells[i].style.borderRight = "none";
    } else {
      hidden_charge_cells[i].style.borderTop = "none";
      hidden_charge_cells[i].style.borderLeft = "none";
    }
  }

  var filled_warp_cells = grid.querySelectorAll(`tr:nth-child(n+${6 - j}) td:nth-child(11)`);
  console.log(filled_warp_cells.length);
  for (let i = 0; i < filled_warp_cells.length; i++) {
    //filled_warp_cells[i].style.backgroundColor = "black";
  }
}

var grid_cells = document.querySelectorAll("tbody.main-grid tr:nth-child(6) td:nth-child(n+1):nth-child(-n+4)");
for (let i = 0; i < grid_cells.length; i++) {
  grid_cells[i].style.borderBottom = "3px solid black";
}
