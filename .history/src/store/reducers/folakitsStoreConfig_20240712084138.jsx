import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";
import { ActionTypes } from "../actions";


const reduxStore = configureStore({
  reducer: {
    product: productReducer
  },
  all
});
export default reduxStore