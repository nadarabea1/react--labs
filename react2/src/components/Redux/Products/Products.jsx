import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProducts } from '../../Store/Actions/ProductsAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Products() {
    const products = useSelector(state => state.products.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleAddToCart = () => {
        dispatch(addToCart());
    };

    return (
        <div>
            <h1>Products</h1>
            <div className="row">
                {products && products.length > 0 ? (
                    products.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card">
                                <img src={product.image} alt={product.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">${product.price}</p>
                                    <div className="add-to-cart">
                                        <Link to={`/redux/products/${product.id}`} className="btn btn-primary">View Details</Link>
                                        <button className="btn btn-outline-primary" onClick={handleAddToCart}>
                                            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
