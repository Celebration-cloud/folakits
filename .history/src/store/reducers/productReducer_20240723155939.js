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
      return {...state, products: action.payload, loading: false}
    case ActionTypes.GET_PRODUCT_DETAILS:
      return {...state, productDetails: action.payload, loading: false}
    case ActionTypes.RECEIVE_PRODUCT:
      return {...state, products: [...state.products, action.payload], loading: false}
    case ActionTypes.GET_LOADING:
      return {...state, loading: act}
    case ActionTypes.GET_ADVERT:
      return {...state, products: [...state.products, action.payload], loading: false}
    default:
      return { ...initialState }
  }
}

export default productReducer
