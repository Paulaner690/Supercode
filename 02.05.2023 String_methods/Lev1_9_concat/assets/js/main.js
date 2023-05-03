const text1 = "Sam is going to codingschool";
const text2 = "Susi ";
const text3 = " and ";
// new variables
const text4 = " to movie theater";
const text5 = " are going to ";

// Sam is going to school
let one = text1.slice(0, 16) + text1.slice(22, 28);
// Sam is going
let two = text1.slice(0, 13);
// Sam are going to school
let three = text1.slice(0, 3) + text5 + text1.slice(22, 28);
// Sam
let four = text1.slice(0, 3);
// is going to school
let five = text1.slice(4, 16) + text1.slice(22, 28);

// Sam is going to school and to the movie theater
document.write(one.concat(text3, text4) + "<br>");
// Sam is going to movie theater
document.write(two.concat(text4) + "<br>");
// Susi and Sam are going to school
document.write(text2.concat(text3, three) + "<br>");
// Susi and Sam are going to gym and to the movie theater
document.write(text2.concat(text3, four, text5, "gym", text3, text4) + "<br>");
// Susi is going to school and to the movie theater
document.write(text2.concat(five, text3, text4) + "<br>");
