import React from "react";
import "./Main.css"
import plantimg from "../asserts/chaiplants.jpg"
import chai from "../asserts/chai.jpg"
import { BsCupHotFill } from "react-icons/bs";
const Main = () =>{
    return(
        <div className="main">
         <div className="img flex">
            <img src={plantimg} alt="img"/>
            <h1>About</h1>
            <p>Chaiwala was founded by a group of chai enthusiasts who wanted
                 to bring the magic of traditional chai to the modern world. 
                 Our founders spent years traveling through the diverse regions of India,
                  learning from local chaiwallahs and perfecting their craft. Inspired
                   by the vibrant chai culture, they decided to share their passion with the world.  <BsCupHotFill/></p>
         </div>
         <div className="disc flex">
            <h2>Our Chai</h2>
            <p>We take pride in offering a variety of chai blends that cater to 
                different tastes and preferences. From the classic masala chai to innovative
                 flavors like saffron cardamom, each cup is crafted with high-quality ingredients 
                 sourced from the finest tea gardens and spice markets. Our chai is brewed with care and served with love
                 , ensuring an authentic and unforgettable experience.  <BsCupHotFill/></p>
            <img style={{float:"right",marginBottom:"10px"}}  src={chai} alt="img"/>
         </div>
        </div>
    )
}

export default Main; 