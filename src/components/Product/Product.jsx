import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
  // console.log(props);
  const {img, name, price, ratings, seller} = props.product;

  const handleAddToCart = props.handleAddToCart;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className='product-name'>{name}</h6>
        <p className='price'>Price: ${price}</p>
        <p className='manufacturer'>Manufacturer: {seller}</p>
        <p className='ratings'>Rating: {ratings} star</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Products;