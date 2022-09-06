import express from "express";
import {
    createPost,
    deletePost,
    getPosts,
    getPostsByCategory,
    getPostsByUserId,
    updatePost
} from "../controllers/posts.js";
import {auth, verifyAdmin, verifyUser} from "../utils/verifyToken.js";
const router = express.Router()

router.get('/', getPosts)
router.post('/', auth, createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.get('/profile/:id', auth, getPostsByUserId)
router.get('/category/:category', getPostsByCategory)


export default router