import { useState } from "react";

const Input = () => {
    const [name, setName] = useState("")
    const [nachname, setNachname] = useState("")
    const [mail, setMail] = useState("")


    return ( 
        <>
        <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Name" />
        <input onChange={(e) => {setNachname(e.target.value)}} type="text" placeholder="Nachname"/>
        <input onChange={(e) => {setMail(e.target.value)}} type="email" placeholder="Email"/>

        <p>Name: {name}</p>
        <p>Nachname: {nachname}</p>
        <p>Email: {mail}</p>
        </>
     );
}
 
export default Input;