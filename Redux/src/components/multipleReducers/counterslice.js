import {createSlice} from '@reduxjs/toolkit'

const countersize = createSlice({
    name : "counter",
    initialState : {
        count : 0
    },
    reducers : {
        increment : (state)=> {
            state.count +=1 
        }
    }
});

export const {
    increment
} = countersize.actions;

export default countersize.reducer;