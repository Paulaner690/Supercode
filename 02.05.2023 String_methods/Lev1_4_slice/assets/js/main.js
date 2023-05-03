const A = "Susi is going to codingschool";

let susi = A.slice(0, 4);
let is = A.slice(5, 7);
let isGoing = A.slice(5, 17) + A.slice(23, 29);
let school = A.slice(23, 29);
let susiSchool = A.slice(0, 8) + A.slice(23, 29);

document.write(susi + "<br>");
document.write(is + "<br>");
document.write(isGoing + "<br>");
document.write(school + "<br>");
document.write(susiSchool + "<br>");
