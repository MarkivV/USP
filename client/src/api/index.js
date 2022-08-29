import axios from "axios"
const API = axios.create({ baseURL: "http://localhost:3002/api"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('profile')).token
        }`
    }
    return req
})



export const fetchPosts = () => API.get(`/posts`)
export const fetchPost = (id) => API.get(`/posts/${id}`)
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`)
export const fetchPostsCategory = (category) => API.get(`/posts/category/${category}`)
export const createPost = (newPost) =>API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const getUsersList = () => API.get(`/users`)

export const signIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)
