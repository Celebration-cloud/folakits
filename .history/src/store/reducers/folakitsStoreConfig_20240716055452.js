import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const reduxStore = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});
export default reduxStore