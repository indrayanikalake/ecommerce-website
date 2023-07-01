import React, {useState, useEffect} from "react";
import { commerce } from "../../lib/commerce";
import { Context } from "./Context";

export const ContextProvider = ({ children }) =>{
const [products, setProducts] = useState([]);
const [cart, setCart] = useState({});

const fetchProducts = async () =>{
    const { data } = await commerce.products.list();
    setProducts(data);
}

const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve());
}

const handleOnAddCart = async (productId, quantity) =>{
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

useEffect(() =>{
    fetchProducts();
    fetchCart();
},[]);


 return (
    <Context.Provider value={{products, cart, handleOnAddCart}}>
        {children}
    </Context.Provider>
 )
}