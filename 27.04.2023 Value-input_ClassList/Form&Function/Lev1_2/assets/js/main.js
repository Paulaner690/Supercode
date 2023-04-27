function ageCalculator(){
   const output = document.querySelector(".output");

   let age = Number(document.querySelector(".birthyear").value);

   output.innerHTML = 2023 - age;
}