import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../Store/Actions/ProductsAction';

export default function CreateProduct() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        title: "",
        description: "",
        price: 0,
        image: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prevData => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.title === "" || data.description === "" || data.price === 0 || data.image === "") {
            setError("Please fill all the fields");
        } else {
            dispatch(createProduct(data));
            navigate('/redux/products');
        }
    };

    return (
        <div>
            <h1>Create Product</h1>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" onChange={handleChange} />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}
