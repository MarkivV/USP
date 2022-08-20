import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CardMain from "../../components/CardMain/CardMain";
import {createPost, postAdded, getPosts} from "../../redux/features/posts/postsSlice"
import FileBase from "react-file-base64";
import {Link, useLocation} from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch()
    const {posts, loading} = useSelector((state) => ({...state.posts}))
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(posts)
    useEffect(() => {
            dispatch(getPosts())

    }, []);



    return (
            <div>
                {
                posts.map(user=>(
                   <CardMain post={user} key={user._id}/>
                ))
                }
            </div>
    );
};

export default Main;
