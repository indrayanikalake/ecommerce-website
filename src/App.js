import React from "react";
import { NavBar, Home, Cart, ContextProvider, Generics,  Contact, } from "./component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./component/About/About";


const App = () => {

  return (
    <Router>
    <ContextProvider>
  
    <NavBar />
    <Routes>
        <Route exact path="/" element={  <Home /> }></Route>
        <Route exact path="/cart" element={ <Cart  /> }></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/music" element={<Generics />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
    </Routes>
   
   </ContextProvider>
   </Router>
  )
}

export default App
