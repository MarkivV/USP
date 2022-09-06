import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../../../api/index";
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI)=> {
        const response = await api.fetchPosts()
    return response.data.data
})
export const createPost = createAsyncThunk(
    'posts/createPosts',
    async (newPost,thunkAPI)=> {
        const response = await api.createPost(newPost)
        return response.data.data
})

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (post,thunkAPI)=> {
        const {_id} = post
        const response = await api.deletePost(_id)
        return response.data
    })

export const updatePost = createAsyncThunk(
    'posts/updatePost',
    async (post,thunkAPI)=> {
        const {_id} = post
        const postEdited = {...post}
        const response = await api.updatePost(_id, postEdited)
        return response.data
    })

const initialState = {
    posts: [],
    loading: false,
    error:null
}


export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, description, creator, category, img) {
                return {
                    payload: {
                        title,
                        description,
                        creator,
                        category,
                        img
                    }
                }
            }
        },
        },
    extraReducers: {
        [createPost.pending]: (state, action) => {
            state.loading = true;
        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts.push(action.payload);
        },
        [createPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getPosts.pending]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false
            // const posts = state.posts.filter(post => post.published !== true);
            // console.log(posts)
            // state.posts = [...posts, action.payload];
            state.posts = action.payload
        },
        [getPosts.rejected]: (state) => {
            state.loading = false
        },
        [deletePost.fulfilled]: (state, action)=>{

            if (!action.payload?._id) {
                console.log('Delete could not complete')
                console.log(action.payload)
                return;
            }
            const { _id } = action.payload;
            state.posts = state.posts.filter(post => post._id !== _id);
        },
        [updatePost.pending]: (state, action) => {
            state.loading = true;
        },
        [updatePost.fulfilled]: (state, action) => {
            const { _id } = action.payload;
            state.loading = false;
            const posts = state.posts.filter(post => post._id !== _id);
            state.posts = [...posts, action.payload];


        },
        [updatePost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    },
})


export const {postAdded} = postsSlice.actions
// export const selectAllPosts = (state) => state.posts;
export const selectPostById = (state, postId) =>
    state.posts.posts.find(post => post._id === postId);

export default postsSlice.reducer