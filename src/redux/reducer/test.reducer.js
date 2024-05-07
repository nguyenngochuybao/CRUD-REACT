import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice( {
    name: "item",
    initialState: {
        userList:[]
    },
    reducers: {
        addUser: function ( state, action )
        {
            state.userList.push(action.payload)
        }
        
    }
} )

export const {addUser} = userSlice.actions

export default userSlice.reducer