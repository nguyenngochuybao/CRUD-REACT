import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./redux/addReducer";
import  updateUser  from "./redux/addReducer";


const store = configureStore( {
    reducer: {
        users:addReducer,updateUser
    }
} )

export default store;