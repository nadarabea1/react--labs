import { createStore ,applyMiddleware} from "redux";
import Reducers from "./Reducers/Reducers.js";
import { thunk } from "redux-thunk";

const store = createStore(Reducers,applyMiddleware(thunk));
export default store;