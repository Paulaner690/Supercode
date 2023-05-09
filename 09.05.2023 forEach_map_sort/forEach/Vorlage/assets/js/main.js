// Lev 1_1
let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];
console.log(getraenke);

const myDrinks = () => {
  getraenke.sort();
  getraenke.forEach((elm) => {
    console.log(elm);
    document.write(elm + "<br>");
  });
};
myDrinks();

// Lev 1_5
console.log("%c ----- Level 1_5 -----", "color:red");

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
// console.log(checkNumber);

let checkNumber3 = checkNumber.map((nummi) => {
  if (nummi % 3 === 0) {
    console.log(nummi + 100);
  } else {
    console.log(nummi);
  }
});

// Lev 1_6

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let album2 = album.map((point) => {
  let dot = point.indexOf(".");

  if (dot > 0) {
    let albumSlice = point.slice(0, dot);
    console.log(albumSlice.toLowerCase());
  } else {
    let albumSlice = "invalid";
    console.log(albumSlice);
  }
});
