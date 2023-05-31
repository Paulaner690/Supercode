console.log("JS works");

let batContact = {
  user: "Batman",
  email: "batman@batCave.batmail",
  logIn: () => {
    // console.log(`${this.user} ist eingeloggt`)
    // this (bezieht sich eigentlich auf Objekt in dem es sich befindet) funktioniert nicht in einer Arrow-function, weil diese sich auf globales window object bezieht. (batContact ist global definiert) funktion bezieht sich nicht auf globales objekt, sondern lokal, daher funktioniert es in der funktion.
    console.log(`${batContact.user} ist eingeloggt`);
  },
};

batContact.logIn();
