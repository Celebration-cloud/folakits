import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";

const reduxStore = configureStore({
  reducer: {
    product: productReducer,
    user: us
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
  
});
export default reduxStore