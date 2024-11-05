import { createSlice } from "@reduxjs/toolkit";
import usersData from '../db.json';

const addSlice = createSlice( {
    name: "add",
    initialState: usersData.users,
    reducers: {
        addUser: ( state, action ) =>
        {
            state.push( action.payload )
        }
        
    }
} )


export const { addUser } = addSlice.actions
export default addSlice.reducer 