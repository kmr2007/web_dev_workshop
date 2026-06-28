// Canvas Set Up
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 600;

// Animation
function draw() {
  // Clear Frame

  // Move Player

  // Draw Player

  requestAnimationFrame(draw);
}
draw();

// Key Handlers
document.addEventListener("keydown", (event) => {});
document.addEventListener("keyup", (event) => {});
