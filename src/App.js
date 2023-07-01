import React, {useState, useEffect} from "react";
import { NavBar, Home, Cart} from "./component";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () =>{
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async () =>{
        setCart( await commerce.products.retrieve());
    };

    useEffect(()=>{
       fetchProducts();
      
    },[]);

  return (
    <Router>
   <div>
    <NavBar />
    <Routes>
        <Route exact path="/" element={  <Home products={products}/> }></Route>
        <Route exact path="/cart" element={ <Cart products={products} /> }></Route>
    </Routes>
   </div>
   </Router>
  )
}

export default App
