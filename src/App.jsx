import React, { useState } from 'react';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: "Laptop", price: "$999", inStock: true },
  { id: 2, name: "Phone", price: "$699", inStock: false },
  { id: 3, name: "Tablet", price: "$499", inStock: true }
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all'); // 'all', 'inStock', 'outOfStock'

  // Logic to remove a product (for the test case)
  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      
      <div className="filter-buttons" style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      </div>

      <ProductList products={filteredProducts} onRemove={removeProduct} />
    </div>
  );
};

export default App;
