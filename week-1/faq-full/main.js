// Event Listeners
document.getElementById("q1-btn").addEventListener("click", function () {
  btnClicked("q1");
});
document.getElementById("q2-btn").addEventListener("click", function () {
  btnClicked("q2");
});
document.getElementById("q3-btn").addEventListener("click", function () {
  btnClicked("q3");
});
document.getElementById("q4-btn").addEventListener("click", function () {
  btnClicked("q4");
});

function btnClicked(question) {
  // Change + to - or vice versa and show or hide answer
  if (
    document.getElementById(`${question}-answer`).classList.contains("hidden")
  ) {
    document.getElementById(`${question}-btn`).innerHTML =
      '<img src="assets/images/icon-minus.svg" alt="Minus icon" />';
    document.getElementById(`${question}-answer`).classList.remove("hidden");
  } else {
    document.getElementById(`${question}-btn`).innerHTML =
      '<img src="assets/images/icon-plus.svg" alt="Plus icon" />';
    document.getElementById(`${question}-answer`).classList.add("hidden");
  }
}
