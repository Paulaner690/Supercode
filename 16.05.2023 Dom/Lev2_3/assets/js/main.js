const elements = document.getElementsByTagName("li");
const a = document.getElementsByTagName("a");

a.addEventListener("click", () => {
  const colorArray = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362"];
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "#666";
    elements[i].style.backgroundColor = colorArray[i];
  }
});
