import express from "express";
import {
    createPost,
    deletePost,
    getPost,
    getPosts,
    getPostsByCategory,
    getPostsByUserId,
    updatePost
} from "../controllers/posts.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";
const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/',  createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.get('/profile/:id', verifyUser, getPostsByUserId)
router.get('/category/:category', getPostsByCategory)


export default router