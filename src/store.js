import { configureStore } from "@reduxjs/toolkit";
import testListReducer from "./redux/reducer/test.reducer";


export const store = configureStore( {
    reducer: {
       users:testListReducer
    },
})