import React from "react";
import "./Footer.css";
import { TfiLinkedin, } from "react-icons/tfi";
import { TfiGithub } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () =>{
    return(
        <div className="footer">
        <div className="fooicons">
        <TfiLinkedin   className="icons"/>
        <TfiGithub   className="icons"/>
        <TfiTwitterAlt  className="icons" />
        <TfiYoutube  className="icons" />
        <div className="contact">
            <h3>Contact-info<span>:7084567890</span></h3>
            <h3>Email:sushmitha@gmail.com</h3>
            <p>&copy; Designed by <i>sushmitha Reddy</i></p>
        </div>
        </div>
       
        </div>
    )
}

export default Footer; 