import { configureStore } from "@reduxjs/toolkit"


const reduxStore = configureStore({
  reducer: {
    product: pro
  },
});

export default reduxStore