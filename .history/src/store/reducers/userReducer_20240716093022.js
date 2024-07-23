import { ActionTypes } from "../actions";

const userState = {
  userData: null,
  session: null,
  cart: [],
  wishlist: null,
  loading: true,
  orders: null,
  error: null,
  address: null,
};
const userReducer = (state = userState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return {...state, userData: payload};
    case ActionTypes.GET_SESSION:
      return {...state, session: payload};
    case ActionTypes.GET_CART:
      return {...state, cart: payload};
    case ActionTypes.GET_ORDERS:
      return {...state, : payload};
    case ActionTypes.GET_SESSION:
      return {...state, session: payload};
    default:
      return state;
  }
};

export default userReducer