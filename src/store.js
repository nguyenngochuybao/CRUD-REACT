import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/reducer/test.reducer";


export const store = configureStore( {
    reducer: {
       users:userSlice
    },
})