import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";


const reduxStore = configureStore({
  reducer: {
    product: productReducer
  },
  
});

export const actionName= userData => async (dispatch, getState) => {
    try {
        dispatch({ type: actionTyp, })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}
export default reduxStore