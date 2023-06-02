import { useState } from "react";

const DayNight = () => {
    const[night, setNight] = useState(true)

    function change () {
        setNight(!night)
    }
    const body = document.body;
    body.style.backgroundColor = night ? '#fff' : '#000';
    body.style.color = night ? '#000' : '#fff';
    const btn = night ? "Nacht" : "Tag";


    return ( 
        <>
        <h2>{night ? "Es ist Tag☀️" : "Es ist Nacht🌚"}</h2>
        {/* <button onClick={() => {setNight(!night)}}>Wechsel zu Tag</button> */}
        <button onClick={change}>Wechsel zu {btn}</button>
        </>
     );
}
 
export default DayNight;