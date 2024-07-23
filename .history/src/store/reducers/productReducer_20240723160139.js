import { ActionTypes } from "../actions"

const initialState = {
  productDetails: [],
  products: [],
  advert: [],
  loading: true,
  quote: null,
  error: null,
  cart: [],
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {...state, products: action.payload}
    case ActionTypes.GET_PRODUCT_DETAILS:
      return {...state, productDetails: action.payload}
    case ActionTypes.RECEIVE_PRODUCT:
      return {...state, products:  action.payload}
    case ActionTypes.GET_LOADING:
      return {...state, loading: action.payload}
    case ActionTypes.GET_ADVERT:
      return {...state, products: action.payload}
    default:
      return { ...initialState }
  }
}

export default productReducer
