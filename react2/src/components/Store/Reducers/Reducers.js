import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer.js";

export default combineReducers({
    products:ProductsReducer
})