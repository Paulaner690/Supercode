const output = document.querySelector(".doubleOutput");

function doubleCounter() {
  let userInput = Number(document.querySelector(".num").value);
  output.innerHTML = userInput * 2;
}
