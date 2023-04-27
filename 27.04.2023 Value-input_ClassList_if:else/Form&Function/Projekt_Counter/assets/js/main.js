let count = 0;
let output = document.querySelector(".output");

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