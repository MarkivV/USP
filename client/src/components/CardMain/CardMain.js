import React from 'react';
import {useDispatch} from "react-redux";
import {deletePost, updatePost} from "../../redux/features/posts/postsSlice";
import {Link} from "react-router-dom";

const CardMain = ({post}) => {

    const dispatch = useDispatch()


    return (
        <article >
            <Link to={`/publication/${post._id}`}>
                <img style={{maxWidth: "150px"}} src={post.img} alt="image"/>
                <h3>{post.title}</h3>
            </Link>
            <h3>{post.published ? "Posted" : "Not published yet"}</h3>
            <h4>{post.category}</h4>
            <p>{post.description}</p>
            <p>{post.creator}</p>
            <p>{post._id}</p>
            <button onClick={()=>dispatch(deletePost(post))}>Delete</button>
            <button onClick={()=>dispatch(updatePost(post))}>Publish</button>
        </article>
    );
};

export default CardMain;
