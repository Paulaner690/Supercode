const btn = document.querySelector("button");
const box = document.querySelector(".umwickeln");

let counter = 0;

btn.addEventListener("click", () => {
  event.preventDefault();

  const divElement = document.createElement("div");
  divElement.textContent = counter;
  divElement.classList.add("rechteck");
  box.appendChild(divElement);
  if (counter % 10 === 0) {
    divElement.classList.add("weiss");
  }
  counter++;
});
