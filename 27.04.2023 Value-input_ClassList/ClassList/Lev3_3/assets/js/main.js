const body = document.querySelector("body");

const redRange = Number(document.getElementById("red").value);
const greenRange = Number(document.getElementById("green").value);
const blueRange = Number(document.getElementById("blue").value);

let red = 0;
let green = 0;
let blue = 0;

function changeBackground() {
  red = redRange;
  green = greenRange;
  blue = blueRange;

  body.style.backgroundColor =
    "rgba(rgba(" + red + "," + green + "," + blue + ",1)";
}
