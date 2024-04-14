import { useState, useContext } from "react"
import { Mycontext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {RegistrationData,  setLoggedIn} = useContext(Mycontext);

    const navigate = useNavigate();

    const handleSubmit = () =>{
        const loginCheck = RegistrationData.find(user => user.username === username && user.password === password)

        if(loginCheck){
            localStorage.setItem("user", JSON.stringify(loginCheck))
            setLoggedIn(true);
            alert("updated successfully");
            navigate("/home");
        }else{
            alert("incorrect credenitials");
        }
    }

    return(
        <div className="container mt-5 p-4">
            
            <form className="row g-3 mb-3" onSubmit={handleSubmit}>
                <input className="col-8 form-control" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <input className="col-8 form-control" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="text-start">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}