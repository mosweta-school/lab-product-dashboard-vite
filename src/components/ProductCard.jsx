import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? 'outOfStockClass' : ''}`}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p style={{ color: product.inStock ? 'green' : 'red' }}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      
      {/* Required for the "Remove" test case */}
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
