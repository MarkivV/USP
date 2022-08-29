import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../../../api/index"
import {login, register} from "../auth/authSlice";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (thunkAPI)=> {
        const response = await api.getUsersList()
        return response.data.data
    })


const initialState = {
    users: [],
    loading: false,
    error:null
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducer:{
        setLogout: (state, action) => {
            localStorage.clear();
            state.user = null;
        },
    },
    extraReducers:{
        [getUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer