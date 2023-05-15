const btn = document.querySelector("#button");
let colorSelection = document.querySelector("#farbeAuswahlen");

btn.addEventListener("click", () => {
  event.preventDefault();
  document.body.style.backgroundColor = colorSelection.value.replace(" ", "");
});
