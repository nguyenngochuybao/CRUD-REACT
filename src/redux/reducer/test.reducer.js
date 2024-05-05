import { createReducer } from "@reduxjs/toolkit";
import { userList } from "../../data";

const initialState = userList

const testListReducer = createReducer( initialState, builder =>
{
    builder
        .addCase( 'GET_TEST_LIST', ( state, action ) =>
        {

            return {
                ...state,
                userList: action.payload,
        };
} );
});

export default testListReducer;
