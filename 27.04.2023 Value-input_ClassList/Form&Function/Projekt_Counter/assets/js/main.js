let count = 0;
const output = document.querySelector(".output");

function plusOne(){
    count += 1;
    output.innerHTML = count;
}
function minusOne(){
    count -= 1;
    output.innerHTML = count;
}
function plusTen(){
    count += 10;
    output.innerHTML = count;
}
function minusTen(){
    count -= 10;
    output.innerHTML = count;
}
function plusHundred(){
    count += 100;
    output.innerHTML = count;
}
function minusHundred(){
    count -= 100;
    output.innerHTML = count;
}
function remove(){
    count = 0;
    output.innerHTML = count;
}
function multiTwo(){
    count = count * 2;
    output.innerHTML = count;
}

// wäre auch in einer Funktion möglich, wenn ich Parameter vergebe. 
// in der HTML gebe ich die Zahl für den Parameter ein (+1, -1, +10 usw.) und gebe im js einen Platzhalter (hier operator).

// let count = 0;
// const output = document.querySelector(".output");

// function superFunc(operator){
//     count += operator;
//     output.innerHTML = count;
// }

// function superFunc(){
//     count = count * 2;
//     output.innerHTML = count;
// }

// function rest(){
//     count = 0;
//     output.innerHTML = count;
// }