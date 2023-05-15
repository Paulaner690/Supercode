const btn = document.querySelector("#button");
let colorSelection = document.querySelector("#farbeAuswahlen");

btn.addEventListener("click", () => {
  event.preventDefault();
  colorSelection.remove(colorSelection.selectedIndex);
});
