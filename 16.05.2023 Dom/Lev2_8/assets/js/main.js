const userInput = document.querySelector("#userinput");
const btn = document.querySelector("#enter");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  event.preventDefault;

  const element = document.createElement("li");
  const text = document.createTextNode(userInput.value);
  element.appendChild(text);
  ul.appendChild(element);
});
