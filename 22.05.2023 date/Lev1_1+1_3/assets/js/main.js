// ! ===== Lev 1_1 ========
const lev1 = document.querySelector("#lev1");

let date1 = new Date("September 2, 2019 09:00:00");
lev1.innerHTML = `${date1} = new Date("September 2, 2019 09:00:00") <br><br>`;

let date2 = new Date(0);
lev1.innerHTML += `${date2} = new Date(0) <br><br>`;

let date3 = new Date(31556908800);
lev1.innerHTML += `${date3} = new Date(31556908800) <br><br>`;

let date4 = new Date(86400000);
lev1.innerHTML += `${date4} = new Date(86400000)`;

// ! ===== Lev 1_3 ========
let date5 = new Date(2222, 9, 23, 13, 25, 11);
document.write(`<p>${date5}</p>`);

date5.setMonth(1);
date5.setFullYear(2123);
date5.setDate(24);
document.write(`<p>${date5}</p>`);

date5.setMonth(2);
document.write(`<p>${date5}</p>`);

date5.setDate(3);
document.write(`<p>${date5}</p>`);

date5.setDate(22);
date5.setMonth(10);
date5.setFullYear(2019);
document.write(`<p>${date5}</p>`);
