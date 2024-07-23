export const todoReducer = (state = userState, { type, payload }) => {
  switch (type) {
    case initialState:
      return {};
    default:
      return state;
  }
};
