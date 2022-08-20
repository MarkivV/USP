import React, {useState} from 'react';
import {createPost} from "../../redux/features/posts/postsSlice";
import {useDispatch} from "react-redux";
import FileBase from "react-file-base64";


const Suggest = () => {

    const dispatch = useDispatch()


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creator, setCreator] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const [tags, setTags] = useState(["tag1", "tag2"]);

    const onSavePostClicked = () =>{
        const newPost = {title, description, category, img}
        dispatch(createPost(newPost))
        setTitle('')
        setDescription('')
        setCreator('')
        setCategory('')
        setImg('')
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label htmlFor="postAuthor">Author:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={creator}
                    onChange={(e)=>setCreator(e.target.value)}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <label htmlFor="postContent">Category:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                />
                <label htmlFor="postContent">Img:</label>
                <div id="postContent"><FileBase type="file" multiple={false} onDone={({ base64 }) => setImg( base64 )} /></div>
                <button
                    type="button"
                    onClick={onSavePostClicked}
                >Save Post</button>
            </form>
        </section>
    );
};

export default Suggest;
