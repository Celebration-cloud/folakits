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
    case ActionTypes.DELETE_PRODUCT:
      return {...state, products: state.products.filter(product => product.id !== action.payload)}
    case ActionTypes.RECEIVE_PRODUCT:
      return {...state, products: [...state.products, action.payload], loading: false}
    case
    default:
      return { ...initialState }
  }
}

export default productReducer
