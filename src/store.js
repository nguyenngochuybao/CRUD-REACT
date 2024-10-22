import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./redux/addReducer"

const store = configureStore( {
    reducer: {
        users:addReducer
    }
} )

export default store;