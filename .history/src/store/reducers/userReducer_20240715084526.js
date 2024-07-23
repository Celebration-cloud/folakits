const userState = {
  user: null,
  cart: [],
  wishlist: null,
  loading: true,
  orders: null,
  error: null,
  address: null,
};
export const todoReducer = (state = userState, { type, payload }) => {
  switch (type) {
    case A:
      return {};
    default:
      return state;
  }
};
