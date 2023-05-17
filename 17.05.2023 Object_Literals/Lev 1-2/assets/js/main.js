// ! Lev 1_2
console.log("%c ======Lev1_2======", "background: deeppink");
const person = {
  name: "Paula",
  alter: 22,
  sagNameAlter: () => {
    alert(person.name + " " + person.alter);
  },
};
console.log(person.name, person.alter);
// person.sagNameAlter();

// ! Lev1_4
console.log("%c ======Lev1_4======", "background: deeppink");
let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];
// Namen ausgeben:
const valuesTiere = Object.values(unsereHaustiere);
console.log(valuesTiere[0].names[1]);
console.log(valuesTiere[1].names[2]);
console.log(valuesTiere[1].names);
// einzelnen value ändern
valuesTiere[1].names[0] = "Hans";
console.log(valuesTiere[1].names);
// Oder:
console.log("%c ------------------", "color: deeppink");
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);
// Namen ändern
unsereHaustiere[1].names = ["Hans", "Jürgen", "Ullrich"];
console.log(unsereHaustiere[1].names);

// ! Lev 1_5
console.log("%c ======Lev1_5======", "background: deeppink");
let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);
// oder:
console.log("%c ------------------", "color: deeppink");
const valuesLager = Object.values(unserLager);
console.log(valuesLager[1]["Obere Schublade"].Ordner2);
console.log(valuesLager[1]["Untere Schublade"]);
console.log(valuesLager[0].schublade);

// ! Lev 1_7
console.log("%c ======Lev1_7======", "background: deeppink");
let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill 'Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];
myMusic.forEach((song) => {
  console.log(song.artist, song.title, song.medium);
  if (song.release_year < 1975) console.log(song.release_year);
});

// ! Lev 1_8
console.log("%c ======Lev1_8======", "background: deeppink");
let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];
studentData.forEach((infos) => {
  console.log(infos.name, infos.coop, infos.address.city, infos.emails);
});
// Oder:
console.log("%c -------map--------", "color: deeppink");
studentData.map((infos) => {
  console.log(infos.name, infos.coop, infos.address.city, infos.emails);
});
// ! Lev 2_2
console.log("%c ======Lev2_2======", "background: deeppink");

const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];
singers.sort((a, b) => a.name.localeCompare(b.name));
console.log(singers);

// ! Lev 2_1
console.log("%c ======Lev2_1======", "background: deeppink");
let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

// names
let namesArray = [];
edelMetallPreise.forEach((item) => {
  namesArray.push(item.name);
});
console.log(namesArray);

edelMetallPreise.map((item) => {
  return namesArray;
});
console.log(namesArray);

// preise
let preiseArray = [];
edelMetallPreise.forEach((item) => {
  preiseArray.push(item.preiseGramEuro);
});
console.log(preiseArray);

edelMetallPreise.map((item) => {
  return preiseArray;
});
console.log(preiseArray);

// veränderung
let veraenderungArray = [];
edelMetallPreise.forEach((item) => {
  veraenderungArray.push(item.veraenderung);
});
console.log(veraenderungArray);

edelMetallPreise.map((item) => {
  return veraenderungArray;
});
console.log(veraenderungArray);

// filter > 50
let preiseArrayFiltered = edelMetallPreise.filter(fifty);

function fifty(preise) {
  return preise.preiseGramEuro > 50;
}
console.log(preiseArrayFiltered);

// HTML
const tabelleAußen = `<table><tr>
    <th>Name</th>
    <th>PreiseGrammEuro</th>
    <th>Veränderung</th>
    </tr></table>`;
document.body.insertAdjacentHTML("afterbegin", tabelleAußen);

const außen = document.querySelector("table");

edelMetallPreise.forEach((metal) => {
  const tabellenabschnitt = `<tr>
        <td>${metal.name}</td>
        <td>${metal.preiseGramEuro}</td>
        <td>${metal.veraenderung}</td>
    </tr>`;
  außen.insertAdjacentHTML("beforeend", tabellenabschnitt);
});
