// Bouncing Animation

// Canvas Set Up
let cnv = document.getElementById("my-cnv");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 600;

// Define Square
let squareX = 300;
let squareY = 200;
let squareW = 50;

function draw() {
  // Draw Square
  ctx.fillStyle = "red";
  ctx.fillRect(squareX, squareY, squareW, squareW);
}
draw();
