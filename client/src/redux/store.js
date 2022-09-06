import {configureStore} from "@reduxjs/toolkit";
import postsReducer from '../redux/features/posts/postsSlice'
import authReducer from '../redux/features/auth/authSlice'
import usersReducer from '../redux/features/users/usersSlice'
import statsReducer from '../redux/features/stats/statsSlice'


export const store = configureStore({
    reducer:{
        posts: postsReducer,
        auth: authReducer,
        users: usersReducer,
        stats: statsReducer
    }
})