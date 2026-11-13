import {createAsyncThunk} from '@reduxjs/toolkit'  

export const fetchUsers = createAsyncThunk(
    "users/fetchusers",

    async () =>  {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data  = await response.json();
        console.log(data);

        return data
    }
)