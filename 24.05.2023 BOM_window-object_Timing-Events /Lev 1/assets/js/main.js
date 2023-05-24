// ! Lev 1_1
console.log("Funktion taucht nach 3 sek auf");

const showText = () => {
  console.log("Suuuuper! 3 Sekunden gewartet");
};
setTimeout(showText, 3000);
// ============================================
let counter = 10;
let myInterval = setInterval(() => {
  counter--;
  console.log(counter);
  if (counter === 0) {
    clearTimeout(myInterval);
  }
}, 1000);

// ! Lev 1_2
console.log("%c ======= Lev 1_2 =======", "background: deeppink");

const outputTime = document.querySelector(".zeit");
let counterPercent = 100;

document.querySelector("#btn").addEventListener("click", () => {
  let startInterval = setInterval(() => {
    counterPercent--;
    outputTime.innerHTML = `${counterPercent}%`;
  }, 100);

  if (counterPercent === 0) {
    clearInterval(startInterval);
    counterPercent = 100;
  }
});
