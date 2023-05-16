let count = 0;
const body = document.querySelector("body");
const output = document.querySelector("#demo");

const changeBackground = (color) => {
  count++;
  body.style.backgroundColor = color;
  output.innerHTML = `Wir haben die Farbe ${count} mal geändert.`;
};

const changeHandle = () => {
  const colorRangeRot = Number(document.querySelector("#rot").value);
  const colorRangeGruen = Number(document.querySelector("#grun").value);
  const colorRangeBlau = Number(document.querySelector("#blau").value);

  let color =
    "rgb(" + colorRangeRot + "," + colorRangeGruen + "," + colorRangeBlau + ")";
  console.log(color);
  body.style.backgroundColor = color;
  let hexColor = rgbToHex(colorRangeRot, colorRangeGruen, colorRangeBlau);
  console.log(hexColor);
  output.innerHTML = `Farbcode : ${color} und Hex Code: ${hexColor}`;
};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(colorRangeRot, colorRangeGruen, colorRangeBlau) {
  return (
    "#" +
    componentToHex(colorRangeRot) +
    componentToHex(colorRangeGruen) +
    componentToHex(colorRangeBlau)
  );
}
