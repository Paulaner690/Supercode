// ! FETCH
fetch("https://picsum.photos/v2/list")
  .then((res) => res.json()) //   KONVERTIEREN IN JSON
  .then((data) => {
    console.log(typeof data);
    // ! LOOP
    data.forEach((element) => {
      // KONSTANTEN FÜR DIE ELEMENTE IM FIGURE TAG:
      const img = element.download_url;
      const author = element.author;

      // FIGURE TAG
      const figureTag = document.createElement("figure");

      // IMG IM FIGURE TAG
      let imgOfTag = document.createElement("img");
      imgOfTag.setAttribute("src", img);
      imgOfTag.setAttribute("alt", "random Pic");
      figureTag.appendChild(imgOfTag);

      // AUTOR FIGCAPTION IM FIGURE TAG
      let authorOfTag = document.createElement("figcaption");
      authorOfTag.textContent = author;
      figureTag.appendChild(authorOfTag);

      //   ! AUSGABE IM HTML
      document.querySelector("body").appendChild(figureTag);
    });
  })
  //   ! CATCH, FALLS FETCH NICHT FUNKTIONIERT
  .catch((err) => {
    console.log("fehler", err);
  });
