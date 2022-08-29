import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost, deletePost, updatePost} from "../../redux/features/posts/postsSlice";
import {Link} from "react-router-dom";
import {selectAllUsers} from "../../redux/features/users/usersSlice";
import FileBase from "react-file-base64";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    ImageListItem,
    Paper,
    styled,
    Typography
} from "@mui/material";


const CardMain = ({post}) => {

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false);

    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [category, setCategory] = useState(post.category);
    const [img, setImg] = useState(post.img);

    const handleSubmit = () =>{
        const newPost = {...post, title, description, category, img}
        dispatch(updatePost(newPost))
        setEditMode(false)
    }
    const users = useSelector(selectAllUsers)
    console.log(users)
    const author = users.users.find(user => user._id === post.creator);
    console.log(author)

    return (
        <article >
            {
                editMode ? (
                    <div>
                        <img style={{maxWidth: "150px"}} src={img} alt="image"/>
                        <div id="postContent"><FileBase type="file" multiple={false} onDone={({ base64 }) => setImg( base64 )} /></div>
                        <input type="text"
                               value={title}
                               onChange={(e)=>setTitle(e.target.value)}
                        />
                        <h3>{post.published ? "Posted" : "Not published yet"}</h3>
                        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}
                        />
                        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                        <p>{author.username}</p>
                        <p>{post._id}</p>
                        <button onClick={()=>dispatch(deletePost(post))}>Delete</button>
                        <button onClick={()=>dispatch(updatePost(post))}>Publish</button>
                        <button onClick={()=>setEditMode(!editMode)}>Edit</button>
                        <button onClick={handleSubmit}>Finish Editing</button>
                    </div>
                ) : (
                        <div style={{position: "relative"}}>
                            <img
                                src={post.img}
                                alt="image"
                                style={{width: "415px", height: "394px", objectFit: "cover", filter: "brightness(50%)"}}
                            />

                            <p style={{position: "absolute", top: "47%"}}>{post.category}</p>
                            <h4 style={{position: "absolute", top: "55%"}}>{post.title}</h4>
                            <p style={{position: "absolute", top: "65%"}}>{post.description}</p>
                            <p style={{position: "absolute", top: "75%", fontSize: "16px"}}>Автор: {author.username}</p>
                            {/*<Button onClick={()=>dispatch(deletePost(post))}>Delete</Button>*/}
                            {/*<Button onClick={()=>dispatch(updatePost(post))}>Publish</Button>*/}
                            {/*<Button onClick={()=>setEditMode(!editMode)}>Edit</Button>*/}
                        </div>
                )
            }

        </article>
    );
};

export default CardMain;
