import React from "react";
import { NavBar, Home, Cart} from "./component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { ContextProvider } from '../../ecommerce-website/src/component/Context/ContextProvider'

const App = () => {
   

  return (
    <Router>
    <ContextProvider>
   <div>
    <NavBar />
    <Routes>
        <Route exact path="/" element={  <Home /> }></Route>
        <Route exact path="/cart" element={ <Cart  /> }></Route>
    </Routes>
   </div>
   </ContextProvider>
   </Router>
  )
}

export default App
