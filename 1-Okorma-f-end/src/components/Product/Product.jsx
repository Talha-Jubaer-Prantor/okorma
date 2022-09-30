import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings,quantity } = product;
    
    const BtnText=()=>{
        if(quantity===0){
            return <span> Add to cart </span>
        }else{
            return <span> Added</span>
        }
    }

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            {/* handleAddToCart function is in shop.js */}
            <button onClick={() => {handleAddToCart(product)}} className='btn-cart' id='add'>
                <FontAwesomeIcon icon={faShoppingCart}/> <BtnText></BtnText>
            </button>
        </div>
    );
};

export default Product;