import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../redux/features/pc-builderSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
