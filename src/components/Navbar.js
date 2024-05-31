import React from "react";
import "./Navbar.css"
import { BsCupHotFill } from "react-icons/bs";
import{Link} from "react-router-dom"
const Navbar = () =>{
    return(
        <div className="Navbar flex color">
            <div  className="logo">
                 <BsCupHotFill className="cupimg flex"/>
                 <h1>Chaiwala</h1>
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/type">Types</Link>
                <Link to="/footer">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar; 