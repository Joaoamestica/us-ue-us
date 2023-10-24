import { configureStore } from "@reduxjs/toolkit";
import carroSlice from "./carroSlice";

export const store = configureStore({
    reducer: {
        carroReducers: carroSlice.reducer,
    }
});