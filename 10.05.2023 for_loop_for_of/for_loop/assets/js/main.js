// Lev1_1
console.log("%c =====Lev1_1======", "color: deeppink");
for (let i = 0; i <= 10; i++) {
  console.log(`Hello World ${i}`);
}

// Lev 1_2
console.log("%c =====Lev1_2======", "color: deeppink");
let numArray = [];

for (let i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);

// Lev 1_4
console.log("%c =====Lev 1_4=====", "color: deeppink");
let names = [
  "Freddy",
  "Steffen",
  "Finn",
  "Julia",
  "Farid",
  "Christian",
  "Sergio",
];

for (let i = 0; i <= names.length; i++) {
  console.log(names[i]);
}

// Lev 2_1
console.log("%c =====Lev2_1=====", "color: deeppink");

const imageArray = () => {
  let returnArray = [];
  for (let i = 001; i <= 100; i++) {
    returnArray.push(`image_${i}.jpg`);
  }
  console.log(returnArray);
};
imageArray();

// Lev 2_2
// const output = document.querySelector(".output");

// const loopInput = () => {
//   let input = document.querySelector("#numberInput").value;
//   let numberO = [];
//   for (let i = 1; i <= input; i++) {
//     numberO += "o";
//   }
//   numberO.toString();
//   output.innerHTML = "L" + numberO + "p";
// };

// Lev 3_2
console.log("%c =====Lev3_2=====", "color: deeppink");

const output2 = document.querySelector(".output3_2");

let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i <= numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      console.log(numArr[i], j, numArr[i] / j);
      document.write(
        `${numArr[i]} lässt sich durch ${j} teilen! Das Ergebnis ist ${
          numArr[i] / j
        } <br>`
      );
    }
  }
}

// Lev 3_3
const output = document.querySelector(".output");

const loopInput = () => {
  let input = document.querySelector("#numberInput").value;
  let numberO = [];

  if (input > 0) {
    if (input % 2 === 0) {
      for (let i = 1; i <= input; i++) {
        numberO += "o";
      }
      numberO.toString();
      output.innerHTML = "L" + numberO + "p";
    } else {
      for (let i = 1; i <= input; i++) {
        if (i % 2 === 0) {
          numberO += "o";
        } else {
          numberO += "0";
        }
      }
      numberO.toString();
      output.innerHTML = "L" + numberO + "p";
    }
  } else {
    output.innerHTML = "Error. Du brauchst mindestens 1!";
  }
};
