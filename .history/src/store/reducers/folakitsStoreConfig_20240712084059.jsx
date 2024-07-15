import { __DO_NOT_USE__ActionTypes, configureStore } from "@reduxjs/toolkit"
import productReducer from "./productReducer";
import { ActionTypes } from "../actions";


const reduxStore = configureStore({
  reducer: {
    product: productReducer
  },
  
});

export const actionName= userData => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: ActionTypes, payload: data })
    } catch (error) {
         dispatch({ type: __DO_NOT_USE__ActionTypes, payload: error.message })
    }
}
export default reduxStore