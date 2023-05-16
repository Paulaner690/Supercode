// event.which
const outputZahl = document.body.firstElementChild.firstElementChild;
// event.key
const outputKey = document.querySelector(".outputKey");
// event.which
const outputKeyCode = document.querySelector(".outputKeyCode");
// event.code
const outputCode = document.querySelector(".outputCode");

document.addEventListener("keydown", () => {
  event.preventDefault;

  outputZahl.innerHTML = event.which;

  outputKey.innerHTML = event.key;
  outputKeyCode.innerHTML = event.which;
  outputCode.innerHTML = event.code;
});
