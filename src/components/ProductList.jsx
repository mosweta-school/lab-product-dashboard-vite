import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  // Check if the product list is empty
  if (products.length === 0) {
    return <p>No products match your criteria.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
