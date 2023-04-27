function doubleCounter() {
    const output = document.querySelector(".doubleOutput");

    let userInput = Number(document.querySelector(".num").value);
    output.innerHTML = userInput * 2;
}