import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";

const reduxStore = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
  
});
export default reduxStore