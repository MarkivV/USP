import Post from "../models/Posts.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) =>{
    // const {page} = req.query
    try{
        // const limit = 8
        // const startIndex = (Number(page) - 1) * limit
        // const total = await Post.countDocuments({})
        // const posts = await Post.find().sort({_id: -1}).limit(limit).skip(startIndex)
        const posts = await Post.find()
        // res.status(200).json({data: posts, currentPage: Number(page), totalNumberOfPages: Math.ceil(total / limit)})
        res.status(200).json({data: posts})
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getPost = async (req, res) =>{
    const { id: _id } = req.params
    try{
        const post = await Post.findById(_id)
        res.status(200).json({data: post})
    }catch(error){
        res.status(404).json({message: error.message})
    }
}


export const createPost = async (req, res) =>{
    const post = req.body

    const newPost = new Post({...post, creator: req.userId, createdAt: new Date().toISOString()})
    try{
        await newPost.save()
        res.status(201).json(newPost)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

    // , creator: req.userId,

export const updatePost = async (req, res) =>{
    const post = req.body
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const updatedPost = await Post.findByIdAndUpdate(_id, {...post, _id}, {new: true})

    res.json(updatedPost)
}


export const deletePost = async (req, res) =>{
    const post = req.body
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const deletedPost = await Post.findByIdAndRemove(_id)

    res.json(deletedPost)
}


export const getPostsByUserId = async (req,res) =>{
    const id = req.params.id
    try{
        const Posts = await Post.find({creator: id})
        res.status(201).json(Posts)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const getPostsByCategory = async (req,res) =>{
    const {category: category} = req.params
    try{
        const posts = await Post.find({category: category})
        res.status(201).json({data: posts})
    }catch(error){
        res.status(409).json({message: error.message})
    }
}


