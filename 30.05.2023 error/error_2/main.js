const submitBtn = document.getElementById("submit-btn");
// const inputAge = document.getElementById("input-age").value;
let age;

submitBtn.addEventListener("click", (event) => {
  const inputAge = Number(document.getElementById("input-age").value);
  event.preventDefault();
  age = inputAge;
  if (age >= 18) {
    console.log(true);
    document.getElementById("output").innerHTML = "over 18";
  } else {
    console.log(false);
    document.getElementById("output").innerHTML = "under 18";
  }
});
