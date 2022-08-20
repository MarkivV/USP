import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux/features/posts/postsSlice";

const CardDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {posts, loading} = useSelector((state) => ({...state.posts}))
    useEffect(() => {
        if(id){dispatch(getPost(id))}
    }, [id]);
    console.log(posts)
    return (
        <div>
            <img style={{maxWidth: "150px"}} src={posts.img} alt="image"/>
            <h3>{posts.title}</h3>
            <h3>{posts.published ? "Posted" : "Not published yet"}</h3>
            <h4>{posts.category}</h4>
            <p>{posts.description}</p>
            <p>{posts.creator}</p>
            <p>{posts._id}</p>
        </div>
    );
};

export default CardDetails;
