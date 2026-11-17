import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchuser",

    async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data =await response.json();
        return data
    }
)