import React, {useState, useEffect} from "react";
import { commerce } from "../../lib/commerce";
import { Context } from "./Context";

const ContextProvider = ({ children }) =>{
const [products, setProducts] = useState([]);
const [cart, setCart] = useState({});
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const fetchProducts = async () =>{
    try{
    const { data } = await commerce.products.list();
    setProducts(data);
    }catch (error) {
        setError(error);
    }
}

const fetchCart = async () =>{
    try{
    setIsLoading(true);
    setCart(await commerce.cart.retrieve());
    setIsLoading(false);
    }catch (error){
        setError(error);
    }
}

const handleOnAddCart = async (productId, quantity) =>{
    try{
    setIsLoading(true);
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
    setIsLoading(false);
    }catch (error){
        setError(error);
    }
  }

useEffect(() =>{
    fetchProducts();
    fetchCart();
},[]);


 return (
    <Context.Provider value={{products, cart, handleOnAddCart, isLoading, error}}>
        {children}
    </Context.Provider>
 )
}

export default ContextProvider