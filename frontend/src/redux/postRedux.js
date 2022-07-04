import {createSlice} from "@reduxjs/toolkit";

const userRedux = createSlice({
    name: "post",
    initialState: {
        text: [],
        isFetching: false,
        error: false,
        success: false
    },
    reducers: {
        getTextStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getTextSuccess: (state, action) => {
            state.isFetching = false;
            state.text = action.payload;
        },
        getTextFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        deleteTextStart: ( state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteTextSuccess: (state, action) => {
            state.isFetching = false;
            state.text.splice(
                state.text.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteTextFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updateTextStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateTextSuccess: (state, action) => {
            state.isFetching = false;
            state.text[
                state.text.findIndex((item) => item._id === action.payload.id)
                ] = action.payload.product;
        },
        updateTextFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        textCreateStart: (state) => {
            state.isFetching=true
        },
        textCreateSuccess: (state,action) => {
            state.isFetching = false;
            state.text.push(action.payload);
        },
        textCreateError: (state) => {
            state.isFetching=false
            state.error=true
        }

    }
})

export const {textCreateSuccess,textCreateStart,textCreateError,getTextSuccess,getTextFailure,getTextStart,deleteTextSuccess,deleteTextFailure,deleteTextStart,updateTextFailure,updateTextStartd,updateTextStart,updateTextSuccess} = userRedux.actions
export default userRedux.reducer;