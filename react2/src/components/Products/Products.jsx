import React, { useContext } from 'react';
import ProductContext from '../ContextAPI/ProductContext';
import { Link } from 'react-router-dom';

export default function Products() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products ? (
          products.map(product => (
            <div key={product.id}>
              <div>
                <img src={product.image} alt={product.title} />
                <div>
                  <h5>{product.title}</h5>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
                <div>
                  <Link to={`/products/${product.id}`}>View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
