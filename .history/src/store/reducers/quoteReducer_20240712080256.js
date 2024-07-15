import { ActionTypes } from "../actions"

const initialState = {
  products: [],
  loading: T,
  quote: null
}

// EXAMPLE OF A REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {...state, products: action.payload, loading: false}
    case ActionTypes.GET_RANDOM_QUOTE:
      return { ...state, quote: null, loading: true }

    case ActionTypes.SET_RANDOM_QUOTE:
      return { ...state, quote: action.payload, loading: false }

    case ActionTypes.FAILED_RANDOM_QUOTE:
      return { ...state, quote: null, loading: false }

    default:
      return { ...initialState }
  }
}

export default reducer
