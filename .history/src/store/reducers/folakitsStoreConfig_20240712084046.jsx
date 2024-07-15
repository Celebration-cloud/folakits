import { configureStore } from "@reduxjs/toolkit"
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
        dispatch({ type: actionTypes, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}
export default reduxStore