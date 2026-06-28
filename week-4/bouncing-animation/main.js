// Canvas Set Up
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 600;

// Initialize Square
let squareX = 300;
let squareY = 200;
let directionX = 2;
let directionY = 2;

// Animation Frame
function draw() {
  // Clear Screen
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Square
  ctx.fillStyle = "red";
  ctx.fillRect(squareX, squareY, 50, 50);

  // Move Square
  squareX += directionX;
  squareY += directionY;

  // Check for collision and bounce
  if (squareX <= 0 || squareX + 50 >= cnv.width) {
    directionX = directionX * -1;
  }

  if (squareY <= 0 || squareY + 50 >= cnv.height) {
    directionY = directionY * -1;
  }

  // Request next frame
  requestAnimationFrame(draw);
}
draw();
