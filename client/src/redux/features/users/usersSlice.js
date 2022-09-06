import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../../../api/index"
import {login, register} from "../auth/authSlice";
import {postsSlice} from "../posts/postsSlice";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (thunkAPI)=> {
        const response = await api.getUsersList()
        return response.data.data
    })

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async ( user,thunkAPI)=> {
        const {_id} = user
        const response = await api.updateUserApi(_id, user)
        return response.data
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
            state.users = null;
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
        [updateUser.pending]: (state, action) => {
            state.loading = true;
            localStorage.clear();
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            // console.log({...action?.payload})
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            state.users = action.payload;
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const {setLogout} = usersSlice.actions

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer