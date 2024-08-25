import { configureStore } from "@reduxjs/toolkit"
import firstSlice from "./firstSlice";
import secondSlice from "./secondSlice";


export const store = configureStore({
    reducer: {
        data: firstSlice,
        products: secondSlice,

    },
});