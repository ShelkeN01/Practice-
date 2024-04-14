import { useState, useContext } from "react"
import { Mycontext } from "../context";
import {  Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [Cpass, setCpass] = useState();
    const [error, setError] = useState({});
    const { RegistrationData, setRegistrationData } = useContext(Mycontext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if(!username){
            errors.username = "username is required";
        }
        if(!email){
            errors.email = "email is required";
        }else if(!/\S+@\S+\.\S{2,4}/.test(email)){
            errors.email = "write an valid email"
        }
        if(!password){
            errors.password = "password is required";
        }else if(password.length < 6){
            errors.password = "password should be greater then 6 digits"
        }
        if(!Cpass){
            errors.cpass = "confirm password is required";
        }else if(password !== Cpass){
            errors.cpass = "confirm password does not match";
        }

        setError(errors);


        if (Object.keys(errors).length  === 0) {
            const formData = {
                username,
                email,
                password
            }

            setRegistrationData([...RegistrationData, formData])

            alert("updated successfully");
        } 


        
    }
    return (
        <div className="container">
            
            <form className="mt-3 row g-3" onSubmit={handleSubmit}>

                <div className="col-12 text-start">
                    <label className="form-label " for="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="username"  value={username} onChange={(e) => setUsername(e.target.value)} />
                    {error ? <p className="text-end text-danger">{error.username}</p> : ""}
                </div>
                <div className="col-12 text-start">
                    <label className="form-label " for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error ? <p className="text-end text-danger">{error.email}</p> : ""}
                </div>
                <div className="col-12 text-start">
                    <label className="form-label " for="password">password</label>
                    <input type="password" className="form-control" id="password" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error ? <p className="text-end text-danger">{error.password}</p> : ""}
                </div>
                <div className="col-12 text-start">
                    <label className="form-label " for="Cpassword">Confirm password</label>
                    <input type="password" className="form-control" id="Cpassword" placeholder="Confirm password"  value={Cpass} onChange={(e) => setCpass(e.target.value)} />
                    {error ? <p className="text-end text-danger">{error.cpass}</p> : ""}
                </div>
                <div className="col-6 text-start p-3">
                    <button className="btn btn-primary me-2">Submit</button>
                </div>
                {/* <div className="col-6">
                </div> */}
            </form>
        </div>
    )
}