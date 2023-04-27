function compareCalculator(){
    const output = document.querySelector(".output");
    
    const age1 = Number(document.querySelector(".birthyear").value);
    const age2 = Number(document.querySelector(".birthyear2").value);

    output.innerHTML = age1 - age2 ;
}