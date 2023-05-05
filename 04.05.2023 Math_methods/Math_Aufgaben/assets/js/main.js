// lev1_1 Math.PI
console.log(Math.PI);
const PI = 3.141592653589793;
let roundedPI = PI.toFixed(2);
console.log(roundedPI);

// lev1_2 Math.round()
let array = [3.14, 193.4464, 0.8596433607, -2.940629089];
array.forEach(runden);

function runden(item) {
  let round = Math.round(item);
  console.log(round);
}

// lev1_3 Math.random(), Math.floor()
let randomNum = Math.random();
console.log(randomNum);

let randomNum1_10 = Math.random() * 10;
console.log(randomNum1_10);

let randomNum1_100 = Math.random() * 100;
console.log(randomNum1_100);

// lev2_1 Math.round(), toFixed()
function roundTo(Zahl, Genauigkeit) {
  console.log(Zahl.toFixed(Genauigkeit));
}
roundTo(3.1415926535, 5);

// lev2_2 Math.random() Math.floor() Game
const randomNumX = Math.floor(Math.random() * 10 + 1);
console.log(randomNum1_10);

check = prompt("Schätze eine Zahl zwischen 1 und 10", "");

if (check != randomNumX) {
  alert("Du hast verloren! Die Nummer lautet " + randomNumX);
} else {
  alert("Du hast richtig geraten!");
}
