import Navbar from "./components/navbar";
// import Login from "./components/login";
import {Mainpage} from './components/mainpage'
import Register from "./components/register";
import Home from "./components/home"
import { Routes, Route } from "react-router-dom"
import { Mycontext } from "./context";
import { useState } from "react";
import './App.css';

function App() {
  const [RegistrationData, setRegistrationData] = useState([
    {
      username: "nikhil",
      email: "nikhil@gmail.com",
      password: "pass"
    }
  ]);
  const [loggedIn, setLoggedIn] = useState(false)





  return (
    <div className="">

      <Mycontext.Provider value={{RegistrationData, loggedIn, setLoggedIn, setRegistrationData}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Mycontext.Provider>


    </div>
  );
}

export default App;
