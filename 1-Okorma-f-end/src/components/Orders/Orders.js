import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    const handleCheakOut=(props)=>{
        // THIS FUNCTION WILL POST DATA IN DATABASE AT FETCH METHOD

        const orders=props
console.log(orders)
        const user= JSON.parse(localStorage.getItem('loggedData'))

        if(user== null){
            window.location.replace("/login")
        }
        
        const userId=user.userId
        const orderData={"user":user,orders,userId}
        fetch('http://localhost:8080/order',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderData)
    }).then(console.log('posted'))
        
console.log(orderData)
    }
    
    return (
        <div className='shop-container'>
            <a href="/">Home</a>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product ={product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewItem>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button className='procced-btn' onClick={()=>handleCheakOut(cart)}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;