let num1 = prompt("Enter your first number:");
let num2 = prompt("Enter your second number:");

let answer = num1 * num2;

document.getElementById(
  "output"
).innerHTML = `${num1} times ${num2} is ${answer}`;
