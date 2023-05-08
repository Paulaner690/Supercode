// Lev 1_1
let person = ["paula", 22, 165];
let friends = ["Niklas", "Pia", "Maja"];
let favouriteFood = ["Burger", "Pizza", "Döner"];

console.log(person, friends, favouriteFood);

// Lev 1_2
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(favouriteFood[0]);
console.log(favouriteFood[1]);
console.log(favouriteFood[2]);

// Lev 1_3
console.log(person.length);
console.log(friends.length);
console.log(favouriteFood.length);

// Lev 1_4
console.log(person);
console.log(person.length);
console.log(person.push("Hannover"));
console.log(person);
console.log(person.push(40, "Reisen"));
console.log(person);

// Lev 1_5
console.log(person);
let lastValue = person.pop();
console.log(lastValue);
console.log(person);

// Lev 1_6
console.log(person);
let firstValue = person.shift();
console.log(firstValue);
console.log(person);

// Lev 1_7
console.log(favouriteFood);
console.log(favouriteFood.unshift("Sushi", "Heidelbeeren"));
console.log(favouriteFood);

// Lev 1_9
let reiseziele = ["Brasilien", "Mexiko", "Thailand", "Peru"];
console.log(reiseziele);
let reiseSlice = reiseziele.slice(0, 2);
console.log(reiseSlice);
console.log(reiseziele);

// Lev 1_10
const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
let splitted = text.split(".");
console.log(splitted);
let splitted2 = text.split(" ");
console.log(splitted2);
let splitted3 = text.split("");
console.log(splitted3);
