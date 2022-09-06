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
export const createPost = (newPost) =>API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const getUsersList = () => API.get(`/users`)
export const getRussiansLost = () => axios.get("https://russianwarship.rip/api/v1/statistics/latest")
export const updateUserApi = (id, userNew) => API.patch(`/users/${id}`, userNew);


export const signIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)
