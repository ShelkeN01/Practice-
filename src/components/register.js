import { useState, useContext } from "react"
import { Mycontext } from "../context";
import {  Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [Cpass, setCpass] = useState();
    const { RegistrationData, setRegistrationData } = useContext(Mycontext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === Cpass) {
            const formData = {
                username,
                email,
                password
            }

            setRegistrationData([...RegistrationData, formData])

            alert("updated successfully");
        } else {
            alert("password and confirm password does'nt match");
        }


        // if(password === Cpass){

        // }
        // if(username.length > 8){

        // }
        // if (email.includes("@gmail.com")) {

        // }
        // if (password > 8) {

        // }
    }
    return (
        <div className="container w-50 border border-2 border-primary rounded p-3">
            <h1>Register</h1>
            <form className="mb-3 row g-3" onSubmit={handleSubmit}>

                <div className="col-6 text-start">
                    <label className="form-label " for="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="username" required="true" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="col-6 text-start">
                    <label className="form-label " for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="email" required="true" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-6 text-start">
                    <label className="form-label " for="password">password</label>
                    <input type="password" className="form-control" id="password" placeholder="password" required="true" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-6 text-start">
                    <label className="form-label " for="Cpassword">Confirm password</label>
                    <input type="password" className="form-control" id="Cpassword" placeholder="Confirm password" required="true" value={Cpass} onChange={(e) => setCpass(e.target.value)} />
                </div>
                <div className="col-6 text-start p-3">
                    <button className="btn btn-primary me-2">Submit</button>
                    <Link className="text-decoration-none" to={"/"} >Login</Link>
                </div>
                {/* <div className="col-6">
                </div> */}
            </form>
        </div>
    )
}