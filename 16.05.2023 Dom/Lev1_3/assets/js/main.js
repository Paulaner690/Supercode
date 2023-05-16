const buttonArray = document.querySelectorAll("button");
const ul = document.body.firstElementChild;
const output = document.querySelector("output");

buttonArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    event.preventDefault();

    if (index == 0) {
      const liFirstEl = ul.firstElementChild.textContent;
      output.innerHTML = liFirstEl;
    } else if (index == 1) {
      const liLastElement = ul.lastElementChild.textContent;
      output.innerHTML = liLastElement;
    } else if (index == 2) {
      const liNextElement = ul.firstElementChild.nextElementSibling.textContent;
      output.innerHTML = liNextElement;
    } else {
      const liPreviousElement =
        ul.lastElementChild.previousElementSibling.textContent;
      output.innerHTML = liPreviousElement;
    }
  });
});
