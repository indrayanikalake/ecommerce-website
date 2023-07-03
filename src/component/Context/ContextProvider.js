import React, {useState, useEffect} from "react";
import { commerce } from "../../lib/commerce";
import { Context } from "./Context";


const ContextProvider = ({ children }) =>{
const [products, setProducts] = useState([]);
const [cart, setCart] = useState({ });
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const fetchProducts = async () =>{
    setIsLoading(true);
    try{
    const { data } = await commerce.products.list();
    setProducts(data);
    }catch (error) {
        setError(error);
    }
    setIsLoading(false);
}

const fetchCart = async () =>{
    setIsLoading(true);
    try{
    setCart(await commerce.cart.retrieve());
    setIsLoading(false);
    }catch (error){
        setError(error);
    }
}

const handleOnAddCart = async (productId, quantity) =>{
    setIsLoading(true);
    try{
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
    setIsLoading(false);
    }catch (error){
        setError(error);
    }
  }

  const handleUpdateCartQty = async (itemId,quantity) =>{
    const { cart } = await commerce.cart.update(itemId, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart =async (itemId) =>{
    const { cart } = await commerce.cart.remove(itemId);
    setCart(cart);
  }

  const handleEmptyCart = async () =>{
    const {cart } = await commerce.cart.empty();
    setCart(cart);
  }
  

useEffect(() =>{
    fetchProducts();
    fetchCart();
},[]);

if(isLoading )return <p>Loading...</p>
if(cart === undefined) return fetchCart();
 return (
    <Context.Provider value={{products, cart, handleOnAddCart, isLoading, error, handleUpdateCartQty, 
    handleRemoveFromCart, handleEmptyCart}}>
        {children}
    </Context.Provider>
 )
}

export default ContextProvider;