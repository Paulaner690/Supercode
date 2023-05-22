// ! ====== Lev 1_6 ========
date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM

const amPm = (time) => {
  let ergebnis = time.getHours() < 12 ? console.log("AM") : console.log("PM");
};

amPm(date1);
amPm(date2);
amPm(date3);
amPm(date4);

// ! ====== Lev 2_1 ========
const datumOutput = document.querySelector("#datum");

const aktuellesDatum = () => {
  let today = new Date();
  let day = today.getDay();
  let month = today.getMonth();
  month++; // da Index gezählt wird muss 1 addiert werden
  let year = today.getFullYear();

  let dayZero = day < 10 ? `0${day}` : `${day}`;
  let monthZero = month < 10 ? `0${month}` : `${month}`;

  datumOutput.innerHTML = `${dayZero}-${monthZero}-${year}`;
};
aktuellesDatum();
