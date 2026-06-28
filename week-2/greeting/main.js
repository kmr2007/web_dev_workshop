let name = prompt("What's your name?");
let timeOfDay = prompt(
  "What times of day is it? (ex; morning, afternoon, evening"
);

document.getElementById("output").innerHTML =
  "Hello " + name + "! Have a good " + timeOfDay;
