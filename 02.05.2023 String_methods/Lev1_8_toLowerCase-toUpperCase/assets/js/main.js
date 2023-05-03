const text = "Sam is going to codingschool";
let text2 = text.replace("codingschool", "school");

// SAM IS GOING TO SCHOOL
let upper = text2.toUpperCase();
document.write(upper + "<br>");

// sam is going at school
let at = text2.replace("to", "at");
let lower = at.toLowerCase();
document.write(lower + "<br>");

// SAM is going to SCHOOL
let sam = text.slice(0, 3);
let upperSam = sam.toUpperCase();
let school = text2.slice(16, 25);
let upperSchool = school.toUpperCase();
let text3 = text2.slice(3, 16);
document.write(upperSam + text3 + upperSchool + "<br>");

// sam IS GOING TO school
let lowerSam = sam.toLowerCase();
let upperGoing = text3.toUpperCase();
let lowerSchool = school.toLowerCase();
document.write(lowerSam + upperGoing + lowerSchool + "<br>");

// Sam Is Going To School (First letter)
const stringToArray = text2.split(" ");
const conversionOfAllFirstCharacterofEachWord = stringToArray.map(
  (word) => word[0].toUpperCase() + word.substring(1)
);
const newString = conversionOfAllFirstCharacterofEachWord.join(" ");
document.write(newString);
