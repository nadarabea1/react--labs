const INITIAL_STATE = {
    list: [],
    productDetails: {},
    countCart: 0
}

export default function ProductsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                list: action.payload
            }
        case "GET_PRODUCT_DETAILS":
            return {
                ...state,
                productDetails: action.payload
            }
        case "CREATE_PRODUCT":
            return {
                ...state,
                list: [...state.products, action.payload]
            }
        case "UPDATE_PRODUCT":
            return {
                ...state,
                list: state.products.map(product => product.id === action.payload.id ? action.payload : product)
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                list: state.products.filter(product => product.id !== action.payload)
            }
        case "ADD_TO_CART":
            return {
                ...state,
                countCart: state.countCart + 1

            }
        default:
            return state
    }
}