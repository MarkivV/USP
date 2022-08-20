import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../../../api/index"

export const login = createAsyncThunk('auth/login', async(formData, thunkAPI)=>{
    const {data} = await api.signIn(formData)
    return data
})


export const register = createAsyncThunk('auth/register', async(formData, thunkAPI)=>{
    const response = await api.signUp(formData)
    return response.data
})

const initialState = {
    user: [],
    loading: false,
    error:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer:{
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogout: (state, action) => {
            localStorage.clear();
            state.user = null;
        },
    },
    extraReducers:{
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            console.log({...action?.payload})
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})




export default authSlice.reducer