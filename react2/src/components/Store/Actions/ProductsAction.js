import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";

export const getProducts = () => (dispatch)=>{
    axios.get('http://localhost:3001/products')
    .then(res =>{
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } )
    .catch(err => {
        console.log("Get all product error",err)
    })
    
}

export const getProductDetails = (id) => (dispatch)=>{
    axios.get(`http://localhost:3001/products/${id}`)
    .then(res => {
        dispatch({
            type: GET_PRODUCT_DETAILS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log("Get product by id error",err)
    })
}

export const createProduct = (product) => (dispatch)=>{
    axios.post('http://localhost:3001/products', product)
    .then(res => {
        dispatch(getProducts())
    })
    .catch(err => {
        console.log("Create product error",err)
    })
}

export const updateProduct = (id, product) => (dispatch)=>{
    axios.put(`http://localhost:3001/products/${id}`, product)
    .then(res => {
        dispatch(getProducts())
    })
    .catch(err => {
        console.log("Update product error",err)
    })
}

export const deleteProduct = (id) => (dispatch)=>{
    axios.delete(`http://localhost:3001/products/${id}`)
    .then(res => {
        dispatch(getProducts())
    })
    .catch(err => {
        console.log("Delete product error",err)
    })
}

// when click on any product add ++ to cart number 
export const addToCart = (product) => (dispatch)=>{
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
}
