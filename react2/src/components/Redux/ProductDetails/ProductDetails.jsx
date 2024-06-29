import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteProduct, getProductDetails } from '../../Store/Actions/ProductsAction';

export default function ProductDetails() {
    const productDetails = useSelector(state => state.products.productDetails);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(addToCart());
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
        navigate('/redux/products');
    };

    return (
        <div>
            <h1>Product Details</h1>
            {productDetails ? (
                <div>
                    <div>
                        <img src={productDetails.image} alt={productDetails.title} />
                    </div>
                    <div>
                        <h2>{productDetails.title}</h2>
                        <p>{productDetails.description}</p>
                        <p>${productDetails.price}</p>
                        <div>
                            <button onClick={handleAddToCart}>Add to Cart</button>
                            <Link to={`/redux/products/${productDetails.id}/edit`}>Edit</Link>
                            <button onClick={() => handleDelete(productDetails.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
