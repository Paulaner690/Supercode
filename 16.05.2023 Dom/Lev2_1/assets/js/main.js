const button = document.querySelector("#navChange");
const home = document.querySelector("#navHome");

const reverse = (s) => {
  return s.split("").reverse().join("");
};

button.addEventListener("click", () => {
  let homeRevese = home.textContent;
  homeRevese = reverse(homeRevese);
  home.style.backgroundColor = "pink";
  home.style.fontSize = "1.5rem";
  home.style.margin = "3px";
  home.style.fontFamily = "Arial";
  home.innerHTML = homeRevese;
});
