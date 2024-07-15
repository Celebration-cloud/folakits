import { configureStore } from "@reduxjs/toolkit"


const reduxStore = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default reduxStore