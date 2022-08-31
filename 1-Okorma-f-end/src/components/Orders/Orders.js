import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        console.log(props)
    }
    
    return (
        <div className='shop-container'>
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
                        <button onClick={()=>handleCheakOut(cart)}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;