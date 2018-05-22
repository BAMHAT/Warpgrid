// warpgrid.js

// Populating table cells with relevant properties
var grid_cells = document.querySelectorAll("#main-grid tr td:nth-child(n+5):nth-child(-n+10)");
console.log(grid_cells.length);

for (let i = 0; i < grid_cells.length; i++) {
  grid_cells[i].rowSpan = 2;
  grid_cells[i].colSpan = 2;
}
//grid_cells.setAttribute("rowspan", "2");
//grid_cells.setAttribute("colspan", "2");

var warp_cells = document.querySelectorAll("#main-grid tr td:nth-child(11)");
for (let i = 0; i < warp_cells.length; i++) {
  warp_cells[i].rowSpan = 2;
  warp_cells[i].colSpan = 2;
}
//warp_cells.setAttribute("colspan", "2");
//warp_cells.setAttribute("rowspan", "2");
