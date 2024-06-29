import React, { useContext, useState } from 'react';
import ProductContext from '../ContextAPI/ProductContext';
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {
    const [error, setError] = useState(null);
    let { CreateProduct } = useContext(ProductContext);
    let Navigator = useNavigate();

    const [data, setData] = useState({
        title: "",
        description: "",
        price: 0,
        image: ""
    });

    const handleChange = (e) => {
        let formData = { ...data };
        formData[e.target.id] = e.target.value;
        setData(formData);
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.title === "" || data.description === "" || data.price === 0 || data.image === "") {
            setError("Please fill all the fields");
        } else {
            Navigator('/products');
            CreateProduct(data);
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
