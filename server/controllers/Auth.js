import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {createError} from "../utils/error.js";

export const register = async (req, res, next) => {
    const { email, password, username } = req.body
    try{
        const existingUser = await User.findOne({ email })
        if(existingUser) return res.status(404).json({message: "User already exists"})
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({email, password: hashedPassword, username})
        const token = jwt.sign({email: result.email, id: result._id},process.env.JWT )
        console.log(result)
        res.status(200).json({result, token})
    }catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
};
export const login = async (req, res, next) => {
    const {username, password} = req.body
    try{
        const existingUser = await User.findOne({username})
        if(!existingUser) return res.status(404).json({message: "User doesn't exist"})
        const isPassword = await bcrypt.compare(password, existingUser.password)
        if(!isPassword) return res.status(400).json({message: "Invalid credentials"})
        const token = jwt.sign({email: existingUser.email, id: existingUser._id},process.env.JWT )
        res.status(200).json({result: existingUser, token})
    }catch(error){
        res.status(500).json({message: "Something went wrong"})
    }
};