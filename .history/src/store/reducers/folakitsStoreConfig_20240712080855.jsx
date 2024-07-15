import { configureStore } from "@reduxjs/toolkit"


const reduxStore = configureStore({
  reducer: {
    quote: quoteReduce,
  },
});

export default reduxStore