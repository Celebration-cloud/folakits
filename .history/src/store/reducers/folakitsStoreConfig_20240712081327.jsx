import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";


const reduxStore = configureStore({
  reducer: {
    product: productReducer
  },
  
});

const { loading, error, reducerKey} = useSelector(state => state.storeKey)
export default reduxStore