import React from "react";
import "./Type.css"
import masala from "../asserts/masala.jpeg"
import Ginger from "../asserts/Ginger.jpg"
import cardamom from "../asserts/cardamom.jpg"
import tulsi from "../asserts/tulasi.jpg"
import mint from "../asserts/mint.jpg"
import herbal from "../asserts/herbal.jpg"
const Type =() =>{
    return(
        <div className="type">
              <h2>Types:</h2>
        <div className="flexcontainer">
        <div>
            <img src={masala}  alt="img"/>
            <h2>Masala Chai</h2>
        </div>
        <div>
           <img src={Ginger} alt="img"/>
            <h2>Ginger Chai</h2>
        </div>
        <div>
        <img src={cardamom} alt="img"/>
            <h2>Cardamom Chai</h2>
        </div>
        <div>
            <img src={tulsi} alt="img"/>
            <h2>Tulsi Chai</h2>
        </div>
        <div>
           <img src={mint} alt="img"/>
            <h2>Mint Chai</h2>
        </div>
        <div>
        <img src={herbal} alt="img"/>
            <h2>Herbal Chai</h2>
        </div>
        </div>
        </div>
    )
}
export default Type;