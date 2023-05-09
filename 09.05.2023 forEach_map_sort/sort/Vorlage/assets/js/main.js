// Lev 1_1
let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

const sortierung = () => {
  languages.sort();
  console.log(languages);
};
sortierung();

// Lev 1_2
const sortierung2 = () => {
  languages.sort().reverse();
  console.log(languages);
};
sortierung2();

// Lev 1_3
let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
numArray1.sort((a, b) => a - b);
console.log(numArray1);

// Lev 2_2
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
numArray2.sort((a, b) => a - b);
console.log(numArray2);
