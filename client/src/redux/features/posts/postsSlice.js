import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../../../api/index";
import {fetchPost, fetchPostsCategory} from "../../../api/index";
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI)=> {
        const response = await api.fetchPosts()
    return response.data.data
})
export const getPost = createAsyncThunk(
    'posts/getPost',
    async (id,thunkAPI)=> {
        const response = await api.fetchPost(id)
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
        const postEdited = {...post, published: true}
        const response = await api.updatePost(_id, postEdited)
        return response.data
    })
export const getCategory = createAsyncThunk(
    'posts/getCategory',
    async (category,thunkAPI)=> {
        const response = await api.fetchPostsCategory(category)
        return response.data.data
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
        },
        [getCategory.pending]: (state) => {
            state.loading = true
        },
        [getCategory.fulfilled]: (state, action) => {
            state.loading = false
            console.log()
            state.posts = action.payload
        },
        [getCategory.rejected]: (state) => {
            state.loading = false
        },
        [getPost.pending]: (state) => {
            state.loading = true
        },
        [getPost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [getPost.rejected]: (state) => {
            state.loading = false
        },
    },
})


export const {postAdded} = postsSlice.actions


export default postsSlice.reducer