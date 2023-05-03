function intro2(paramName) {
  let varName = "SuperCoder";
  console.log("Hi " + varName + ". Mein Name ist " + paramName + ".");
}
intro2("Paula");

function intro3(name, stadt, alter) {
  console.log(
    "Hallo, mein Name ist " +
      name +
      " Ich bin " +
      alter +
      " Jahre alt. Ich komme aus " +
      stadt +
      "."
  );
}
intro3("Paula", "Hannover", 22);

function math(nbr1, nbr2) {
  console.log("Multiplikation: " + nbr1 * nbr2);
  console.log("Division: " + nbr1 / nbr2);
}
math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);
