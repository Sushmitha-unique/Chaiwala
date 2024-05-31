import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Main from "./components/Main";
import Type from "./components/Type";
import Footer from "./components/Footer";
import {Routes,Route} from "react-router-dom"
const App = () =>{
return(
    <div>
     <Navbar/>
     <Routes>
    <Route path="/" element={<div><Home/>
                                  <Main/>
                                  <Type/>
                                  <Footer/>
                                  </div>}/>
    <Route path="/about" element={<Main/>}/>
    <Route path="/type" element={<Type/>}/>
    <Route path="/footer" element={<Footer/>}/>
     </Routes>
    </div>
)
}
export default App;