let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const dateSection = document.querySelector("#dateSection");

let today = new Date();
dateSection.innerHTML = today + "<br> <br>";

let year = today.getFullYear();
dateSection.innerHTML += year + "<br> <br>";

let month = today.getMonth();
dateSection.innerHTML += month + " Monat" + "<br> <br>";

let day = today.getDay();
dateSection.innerHTML += day + " Tag" + "<br> <br>";

let hour = today.getHours();
dateSection.innerHTML += hour + " Stunde" + "<br> <br>";

let minute = today.getMinutes();
dateSection.innerHTML += minute + " Minute" + "<br> <br>";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = days[today.getDay()];
dateSection.innerHTML += dayName + "<br> <br>";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthName = months[today.getMonth()];
dateSection.innerHTML += monthName;
