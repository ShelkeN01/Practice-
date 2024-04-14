import {useState} from "react";
import Login from "./login";
import Register from "./register";

export const Mainpage = () =>{
    const [toggle, setToggle] = useState('Login');

    const handleToggle = () =>{
        if(toggle === 'Login'){
            setToggle('Signup')
        }else{
            setToggle('Login')
        }
    }


    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-25 p-3 shadow">
            <h1 className="mb-3 text-center">{toggle}</h1>
                <div className="d-flex Smb-2 justify-content-center">
                    <button className={`btn ${toggle === 'Login' ? "btn-dark" : "btn-light"}`} onClick={handleToggle}>Login</button>
                    <button className={`btn ${toggle === 'Signup' ? "btn-dark" : "btn-light"}`} onClick={handleToggle}>SignUp</button>
                </div>
                <div>
                    {toggle === "Login" ?
                        <Login/> :
                        <Register/>

                    }
                </div>
            </div>
        </div>
    )
}