import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../../../api/index";
import {getRussiansLost} from "../../../api/index";
export const getStats = createAsyncThunk(
    'stats/getStats',
    async (thunkAPI)=> {
        const response = await api.getRussiansLost()
        return response
    })

const initialState = {
    stats: [],
    error:null
}


export const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers:{

    },
    extraReducers: {
        [getStats.pending]: (state) => {
            state.loading = true
        },
        [getStats.fulfilled]: (state, action) => {
            state.loading = false
            state.stats = action.payload
        },
        [getStats.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default statsSlice.reducer