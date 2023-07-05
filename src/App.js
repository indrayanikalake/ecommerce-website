import React from "react";
import { NavBar, Home, Cart, ContextProvider, Generics,  Contact, MenProduct, Women, Accessories, Mobile, ProductDetails, SingIn, AuthCOntextProvider, NavBarHead, } from "./component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./component/About/About";



const App = () => {

  return (
    <Router>

    <AuthCOntextProvider>
    <ContextProvider>
    <NavBarHead />
    <NavBar />
  
   
    <Routes>
        <Route exact path="/" element={  <Home /> }></Route>
        <Route exact path="/cart" element={ <Cart  /> }></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/music" element={<Generics />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/Men" element={<MenProduct />}></Route>
        <Route exact path="/Women" element={<Women />}></Route>
        <Route exact path="/Accessories" element={<Accessories />}></Route>
        <Route exact path="/Mobiles" element={<Mobile />}></Route>
        <Route exact path="/:id" element={<ProductDetails />}></Route>
        <Route exact path="/signIn" element={<SingIn />}></Route>
    </Routes>
   
   </ContextProvider>
   </AuthCOntextProvider>
   </Router>
  )
}

export default App
