import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    testList: {}
}

const testListReducer = createReducer( initialState, builder =>
{
    builder
        .addCase( 'GET_TEST_LIST', ( state, action ) =>
        {

            return {
                ...state,
                testList: action.payload,
        };
} );
});

export default testListReducer;
