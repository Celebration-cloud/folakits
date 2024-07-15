import { ActionTypes } from "../actions"

const initialState = {
  products: [],
  loading: true,
  quote: null,
  error: null,
  cart: [],
  cartTotal: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  cartTotalTax: 0,
  cartTotalShipping: 0,
  cartTotalWeight: 0,
  cartTotalWeightUnit: 'kg',
  cartTotalWeightUnitSymbol: 'kg',
  
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
