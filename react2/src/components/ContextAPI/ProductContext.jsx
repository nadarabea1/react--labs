import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react'

const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    let [products, setProducts] = useState(null);
    const [productDetails , setProductDetails] = useState(null);
    let {children} = props;
    let [cart, setCart] = useState([]);


    let getALLProducts = () => {
        axios.get('http://localhost:3001/products')
            .then(res => setProducts(res.data))
            .catch(err => {
                console.log("Get all product error",err)
            })
    }

    let getProductById = (id) => {
        axios.get(`http://localhost:3001/products/${id}`)
            .then(res => setProductDetails(res.data))
            .catch(err => {
                console.log("Get product by id error",err)
            })
    }

    let CreateProduct = (product) => {
        axios.post('http://localhost:3001/products', product)
            .then(res => {
                getALLProducts()
            })
            .catch(err => {
                console.log("Create product error",err)
            })
    }

    // let addToCart = (product) => {
    //     setCart([...cart, product])
    // }


    let updateProduct = (id, product) => {
        axios.put(`http://localhost:3001/products/${id}`, product)
            .then(res => {
                getALLProducts()
            })
            .catch(err => {
                console.log("Update product error",err)
            })
    }


    let deleteProduct = (id) => {
        axios.delete(`http://localhost:3001/products/${id}`)
            .then(res => {
                getALLProducts()
            })
            .catch(err => {
                console.log("Delete product error",err)
            })
    }


    useEffect(() => {
        getALLProducts()
    }, [])

    const ContextValue =useMemo(() => ({products , getProductById, deleteProduct, productDetails , CreateProduct , updateProduct}), [products , productDetails]);
  return (
    <div>
        <ProductContext.Provider value={ContextValue}>
            {children}
        </ProductContext.Provider>

    </div>
  )
}



export default ProductContext;