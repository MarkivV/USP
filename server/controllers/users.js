import User from "../models/User.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Post from "../models/Posts.js";

export const updateUser = async (req,res,next)=>{

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        const token = jwt.sign({email: updatedUser.email, id: updatedUser._id},process.env.JWT )
        res.status(200).json({result: updatedUser, token});
    } catch (err) {
        next(err);
    }
}

//
// const post = req.body
// const { id: _id } = req.params
//
// if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);
//
// const updatedPost = await Post.findByIdAndUpdate(_id, {...post, _id}, {new: true})
//
// res.json(updatedPost)


export const deleteUser = async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
}
export const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}
export const getUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json({data: users});
    } catch (err) {
        next(err);
    }
}