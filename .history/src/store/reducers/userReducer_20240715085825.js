import { ActionTypes } from "../actions";

const userState = {
  user: null,
  cart: [],
  wishlist: null,
  loading: true,
  orders: null,
  error: null,
  address: null,
};
export const Reducer = (state = userState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USERS:
      return {...state, user: payload};
    default:
      return state;
  }
};