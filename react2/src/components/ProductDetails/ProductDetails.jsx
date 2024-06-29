import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductContext from '../ContextAPI/ProductContext';

export default function ProductDetails() {
    const { productDetails, getProductById, deleteProduct } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id);
    }, [id, getProductById]);

    const handleDelete = (id) => {
        navigate('/products');
        deleteProduct(id);
    };

    return (
        <div>
            <h1>Product Details</h1>
            {productDetails ? (
                <div>
                    <div>
                        <img src={productDetails.image} alt="" />
                    </div>
                    <div>
                        <h2>{productDetails.title}</h2>
                        <p>{productDetails.description}</p>
                        <p>${productDetails.price}</p>
                        <div>
                            <button>Add to Cart</button>
                            <Link to={`/products/${productDetails.id}/edit`}>Edit</Link>
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
