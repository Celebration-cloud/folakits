import { ActionTypes } from "../actions";

const userState = {
  user: null,
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
      return {...state, user: payload};
    case ActionTypes.GET_SESSION:
      return {...state, user: payload};
    default:
      return state;
  }
};

export default userReducer