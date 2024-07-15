import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";


const reduxStore = configureStore({
  reducer: {
    product: productReducer
  },
  
});

sr
export default reduxStore