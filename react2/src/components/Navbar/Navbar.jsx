import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  const CountCartproducts = useSelector(state => state.products.countCart);

  useEffect(() => {
    setCartCount(CountCartproducts);
  }, [CountCartproducts]);

  return (
    <nav>
      <div>
        <Link to="/">Navbar</Link>
        <div>
          <ul>
            <li>
              <Link to="/products">Home</Link>
            </li>
            <li>
              <div>
                <span>ContextAPI</span>
                <ul>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/create">Create Product</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <span>Redux</span>
                <ul>
                  <li><Link to="/redux/products">Products</Link></li>
                  <li><Link to="/redux/create">Create Product</Link></li>
                </ul>
              </div>
            </li>
          </ul>
          <div>
            <button>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            {cartCount > 0 && (
              <div>{cartCount}</div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
