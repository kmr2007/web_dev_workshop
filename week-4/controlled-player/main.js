// Canvas Set Up
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 600;
let playerX = 300;
let playerY = 200;
let playerImg = document.getElementById("player-img");
let directionX = 0;
let directionY = 0;
let playerWidth = 50;
let playerHeight = 70;

// Animation
function draw() {
  // Clear Frame
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.width);
  // Confine Player
  if (
    playerY + directionY < 0 ||
    playerY + directionY + playerHeight > cnv.height
  ) {
    directionY = 0;
  } else if (
    playerX + directionX < 0 ||
    playerX + directionX + playerWidth > cnv.width
  ) {
    directionX = 0;
  }
  // Move Player
  playerX += directionX;
  playerY += directionY;

  // Draw Player
  ctx.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);

  requestAnimationFrame(draw);
}
draw();

// Key Handlers
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    directionY = -3;
  } else if (event.code === "ArrowDown") {
    directionY = 3;
  } else if (event.code === "ArrowLeft") {
    directionX = -3;
  } else if (event.code === "ArrowRight") {
    directionX = 3;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp" || event.code === "ArrowDown") {
    directionY = 0;
  } else if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
    directionX = 0;
  }
});
