function greaterThen(){
    event.preventDefault();

    let age = Number(document.getElementById("input").value >= 18);
    const output = document.querySelector(".output");
    
    if (age){
        console.log(true);
        output.innerHTML = "Ja, Du kannst Shisha rauchen";
    }else{
        console.log(false);
        output.innerHTML = "Du darfst noch nicht Shisha rauchen";
    }
}

// function greaterThen(){

//     let age = Number(document.querySelector("#input").value);
//     const output = document.querySelector(".output");
    
//     if (age >= 18){
//         console.log(true);
//         output.innerHTML = "Ja, Du kannst Shisha rauchen";
//     }else{
//         console.log(false);
//         output.innerHTML = "Du darfst noch nicht Shisha rauchen";
//     }
// }