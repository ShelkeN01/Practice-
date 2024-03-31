import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Mycontext } from "../context"

export default function Navbar() {
    const {setLoggedIn, loggedIn} = useContext(Mycontext);

    const navigate = useNavigate();

    const handleLogout = () =>{
        if(loggedIn){
            localStorage.clear();
            setLoggedIn(!loggedIn);
            navigate("/")
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-between p-2 mb-2 bg-dark">

            <ul className="d-flex text-light mx-2">

                <Link className="text-decoration-none text-light mx-2" to="/register">Sign Up</Link>

            </ul>

            <div className="">
                {loggedIn ? <button className="btn btn-primary" onClick={handleLogout} >Logout</button> : ""}
                
            </div>
        </div>
    )
}