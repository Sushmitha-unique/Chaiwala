import React from "react";
import "./Home.css";
import Mvideo from "../asserts/mainVideo.mp4"
import Motion from "./Motion";
import { BsCupHotFill } from "react-icons/bs";
import { CgHello } from "react-icons/cg";
const Home = () =>{
    return(
        <div className="home">
            <div className="into">
                <h2>Hello ......<CgHello /></h2>
                <h3>Welcome to<span style={{color:"rgb(171, 171, 7)",fontSize:"40px"}}><i>ChaiWala</i></span></h3>
                <p>At Chaiwala, we believe that a cup of chai is more than just a beverage –
                    </p>
                    <p> it's a moment of warmth, a pause in the day, 
                    and a connection to tradition.</p>
                    <p>Our journey began with a simple love for the rich flavors and aromatic spices 
                        </p><p>that define
                     authentic chai. We set out to create a space where everyone 
                     </p><p>can experience the true essence of this beloved drink. <BsCupHotFill/></p>
                <i><Motion text="Life is like a cup of chai, it's all about how you make it"/></i>
            </div>
      <section>
        <video src={Mvideo} muted autoPlay loop type="vido/mp4" ></video>
      </section>
      
        </div>
    )
}

export default Home; 