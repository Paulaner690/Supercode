// ===VARIANTE 1===
// function highlight() {
//   // Variable um Input auszulesen
//   let searchInput = String(document.querySelector("#search-input").value);
//   console.log(searchInput);
//   // neuer Artikel um nach Suche den Artikel ohne Markierung zu überschreiben
//   let newArticle = String(document.querySelector("article").innerText);
//   console.log(newArticle);
//   // span um Input packen um diesen Bereich zu markieren
//   newArticle = newArticle.replaceAll(
//     searchInput,
//     "<span>" + searchInput + "</span>"
//   );
//   console.log(newArticle);
//   document.querySelector("article").innerHTML = newArticle;
//   // highlight gesuchten Input durch span und classList
//   let highlighted = document.querySelectorAll("span");
//   highlighted.forEach((span) => {
//     span.classList.add("highlight");
//   });
// }

// ===VARIANTE 2===
const article = document.querySelector("article");
const output = document.querySelector(".output");

function highlight() {
  //alles zurücksetzen, falls vorher schon eine Suche lief, dann alle <span>'s entfernen
  article.innerHTML = article.innerHTML.replaceAll("<span>", " ");

  // Variable um Input auszulesen
  let input = document.querySelector("#search-input").value;

  //wenn im article.innerText der input vorkommt, dann wird jeder input durch `<span>${input}</span>` ersetzt, d.h. jeder input bekommt ein <span>-Tag verpasst, durch css wird die bg-color des span tags gelb
  if (article.innerHTML.includes(input) == true) {
    article.innerHTML = article.innerHTML.replaceAll(
      input,
      `<span>${input}</span>`
    );

    //wenn der article.innerText den input nicht enthaelt (false), dann wird "Keine Ergebnisse gefunden." ausgegeben
  } else {
    output.innerHTML = "Keine Ergebnisse gefunden.";
  }
}
