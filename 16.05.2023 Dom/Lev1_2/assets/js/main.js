const btn = document.getElementsByClassName("example");
let isChanged = false;

const myFunction = () => {
  let color1 = "white";
  let color2 = "pink";

  if (isChanged === false) {
    isChanged = true;
  } else {
    isChanged = false;
    color1 = "pink";
    color2 = "white";
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = color1;
    btn[i].style.color = color2;
  }
};
