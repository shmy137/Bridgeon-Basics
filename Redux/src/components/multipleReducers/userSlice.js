import {createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "user",
    initialState : {
        name : "shaamir"
    },
    reducers : {
        changename : (state,action) =>{
            state.name = action.payload
        }
    }
});
export const {changename} = userSlice.actions;
export default userSlice.reducer;