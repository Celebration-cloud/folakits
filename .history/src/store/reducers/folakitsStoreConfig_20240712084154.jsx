import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";
import { ActionTypes } from "../actions";


const reduxStore = configureStore({
  reducer: {
    product: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
export default reduxStore