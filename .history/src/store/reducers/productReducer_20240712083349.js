import { ActionTypes } from "../actions"

const initialState = {
  products: [],
  loading: true,
  quote: null,
  error: null,
  cart: [],
  
}

// EXAMPLE OF A REDUCER
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {...state, products: action.payload, loading: false}
    default:
      return { ...initialState }
  }
}

export default productReducer
