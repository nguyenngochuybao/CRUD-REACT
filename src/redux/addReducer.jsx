import { createSlice } from "@reduxjs/toolkit";
import usersData from '../db.json';

const addSlice = createSlice( {
    name: "add",
    initialState: usersData.users,
    reducers: {
        addUser: ( state, action ) =>
        {
            state.push( action.payload )
        },

        updateUser: ( state, action ) =>
        {
            const { id, name, email } = action.payload
            const uu = state.find( user => user.id == id );
            if ( uu )
            {
                uu.name = name;
                uu.email = email
            }
        }

    }
} )


export const { addUser, updateUser } = addSlice.actions
export default addSlice.reducer 