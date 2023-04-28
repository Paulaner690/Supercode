function checkAirQuality(){
    let airQuality = document.querySelector("#slider").value;
    const output = document.querySelector(".output");
    const body = document.querySelector("body");

    if(airQuality <= 50){
        output.innerHTML =
        "<p>Level of health concern: Good</p> <p>Level of health effect: Little or no risk</p>";
        body.classList.add("green");
        body.classList.remove("yellow", "red");
    } else if(airQuality <= 100 && airQuality >= 50){
        output.innerHTML = "<p>Level of health concern: Moderate</p> <p>Level of health effect: Acceptable quality</p>";
        body.classList.add("yellow");
        body.classList.remove("red");
    }else{
        output.innerHTML = "<p>Level of health concern: Unhealthy for sensitive groups</p> <p>Level of health effect: Generable publics not likely affected</p>";
        body.classList.add("red");
        console.log(airQuality);
    }
}