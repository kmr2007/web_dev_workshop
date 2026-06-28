// Number Comparison by Kaydence Riehl

document.getElementById("btn").addEventListener("click", () => {
  // INPUT
  let firstNum = +document.getElementById("first-in").value;
  let secondNum = +document.getElementById("second-in").value;

  // PROCESS
  let output;
  if (firstNum === secondNum) {
    output = "The two numbers are the same";
  } else if (firstNum > secondNum) {
    output = `${firstNum} is bigger than ${secondNum}`;
  } else {
    output = `${secondNum} is bigger than ${firstNum}`;
  }

  // OUTPUT
  document.getElementById("output").innerHTML = output;
});
