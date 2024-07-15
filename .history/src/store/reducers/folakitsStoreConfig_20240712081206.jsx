import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";


const reduxStore = configureStore({
  reducer: {
    product: productReducer
  },
  re
});

export default reduxStore