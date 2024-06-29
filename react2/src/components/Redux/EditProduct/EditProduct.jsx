import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../Store/Actions/ProductsAction';

export default function EditProduct() {
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        price: 0,
        image: ""
    });
    const productDetails = useSelector(state => state.products.productDetails);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (productDetails) {
            setData(productDetails);
        }
    }, [productDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.title === "" || data.description === "" || data.price === 0 || data.image === "") {
            setError("Please fill all the fields");
        } else {
            dispatch(updateProduct(id, data));
            navigate('/redux/products');
        }
    };

    return (
        <div>
            <h1>Edit Product</h1>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={data.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={data.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" value={data.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" value={data.image} onChange={handleChange} />
                </div>
                <button type="submit">Edit Product</button>
            </form>
        </div>
    );
}
