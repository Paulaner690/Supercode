function weather(){
    let weather = document.querySelector("#weatherInput").value;
    const feedback = document.querySelector(".feedback");

    if (weather <= 10 && weather >= 8) {
        feedback.innerHTML = " super";
    } else if(weather <= 7 && weather >= 6){
        feedback.innerHTML = " gut";
    } else if(weather <= 5 && weather >= 3){
        feedback.innerHTML = " okay";
    } else if(weather <=2 && weather >= 0){
        feedback.innerHTML = " schlecht";
    }else{
        feedback.innerHTML = " out of range"; 
    }
}    