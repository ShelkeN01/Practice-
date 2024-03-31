import { useState, useEffect } from "react"

export default function Form(){
    const [userData, setUserdata] = useState([]);

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("user"));

        if(item){

            setUserdata(item);
        }
    },[])

    return (
        <div>
            
            <h1>Welcome {userData.username} this is your dashboard explore it....</h1>
        </div>
    )
}