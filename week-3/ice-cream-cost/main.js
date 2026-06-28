// Ice Cream Cost Calculator by Kaydence Riehl

document.getElementById("btn").addEventListener("click", () => {
  // INPUT
  let size = document.getElementById("size-in").value.toLowerCase();
  let scoops = +document.getElementById("scoops-in").value;
  let price = 0;

  // PROCESS
  if (size === "small") {
    price += 4;
  } else if (size === "medium") {
    price += 6;
  } else if (size === "large") {
    price += 8;
  }

  if (scoops <= 0) {
    document.getElementById("scoops-in").value = 1;
    scoops = 1;
    alert("You must select 1 or more scoops");
  }
  price += scoops - 1;

  // OUTPUT
  document.getElementById("output").innerHTML = `Price: $${price}`;
});
