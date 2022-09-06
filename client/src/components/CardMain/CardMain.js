import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePost, updatePost} from "../../redux/features/posts/postsSlice";
import {Link} from "react-router-dom";
import {selectAllUsers} from "../../redux/features/users/usersSlice";
import FileBase from "react-file-base64";
import {
    Button,
    Card, CardActionArea,
    CardMedia, MenuItem, Stack, TextField,
} from "@mui/material";


const CardMain = ({post, edit}) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(edit);
    const [title, setTitle] = useState(post?.title);
    const [description, setDescription] = useState(post?.description);
    const [category, setCategory] = useState(post?.category);
    const [img, setImg] = useState(post?.img);

    const handleSubmit = () =>{
        const newPost = {...post, title, description, category, img}
        dispatch(updatePost(newPost))
    }
    const users = useSelector(selectAllUsers)
    const author = users.users?.find(user => user?._id === post?.creator);

    const handleCategory = (category) =>{
        if(category === "politic"){
            return "Політика"
        }else{
            return "Суспільство"
        }
    }

    const categ = [
        {
            value: 'politic',
            label: 'Політика',
        },
        {
            value: 'society',
            label: 'Суспільство',
        }
    ];


    return (
        <>
            {
                editMode ? (
                    <div>
                        <Card style={{borderRadius: 10}}>
                            <CardMedia
                                component={"img"}
                                image={img}
                                height={"394"}
                                width={"415"}
                                alt="image"
                                style={{objectFit: "cover", filter: "brightness(60%)", objectPosition: "top"}}
                            />
                            <Stack direction={"column"} spacing={1} style={{padding: "20px"}}>
                                <FileBase type="file" multiple={false} onDone={({ base64 }) => setImg( base64 )} />
                                <TextField
                                    multiline
                                    rows={3}
                                    style={{ color: "#000000"}} value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                <h6 style={{marginBottom: "0px", fontSize: "14px", marginLeft: "15px", marginRight: "15px", color: "#000000"}} >Автор: {author?.username}</h6>
                                <TextField
                                    select
                                    value={category}
                                    onChange={(e)=>setCategory(e.target.value)}
                                    >
                                    {categ.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    multiline
                                    rows={8}
                                    style={{ color: "#000000"}} value={description} onChange={(e)=>setDescription(e.target.value)}
                                />
                            </Stack>
                            <Stack direction={"row"} spacing={1} padding={"20px"}>
                                <Button variant="contained"
                                        style={{width: "150px", backgroundColor: "#000000"}}
                                        onClick={()=>dispatch(deletePost(post))}>Видалити</Button>
                                <Button variant="contained"
                                        style={{width: "150px", backgroundColor: "#000000"}}
                                        onClick={()=>dispatch(updatePost({...post, published: true}))}>Опублікувати</Button>
                                <Button variant="contained"
                                        style={{width: "150px", backgroundColor: "#000000"}}
                                        onClick={handleSubmit}>Закінчити редагування</Button>
                            </Stack>
                        </Card>
                    </div>
                ) : (
                        <Card style={{position: "relative", borderRadius: 10}}>
                            <CardActionArea >
                                <Link to={"/publication/"+post._id}>
                                    <CardMedia
                                        component={"img"}
                                        image={post?.img}
                                        height={"394"}
                                        width={"415"}
                                        alt="image"
                                        style={{objectFit: "cover", filter: "brightness(60%)", objectPosition: "top"}}
                                    />
                                  <div style={{position: "absolute", top: "0px", bottom: "0px", left: "0px", right: "0px",  display: "flex", flexDirection: "column", padding: "1rem"}}>
                                      <h6 style={{marginTop: "auto",  marginBottom: "10px", fontWeight: 500, fontSize: "16px", marginLeft: "15px", marginRight: "15px"}}>{handleCategory(post?.category)}</h6>
                                      <h4 style={{marginTop:"0px", marginBottom: "0px",fontSize: "32px", marginLeft: "15px", marginRight: "15px"}}>{post?.title}</h4>
                                      <h6 style={{marginTop: "0px", marginBottom: "0px", fontSize: "14px", marginLeft: "15px", marginRight: "15px"}}>Автор: <Link to={`/author/${post?.creator}`} style={{textDecoration: "none", color: "#FFFFFF", fontWeight: 500, fontSize: "16px"}}>{author?.username}</Link></h6>
                                  </div>
                                </Link>
                            </CardActionArea>
                        </Card>
                )
            }

        </>
    );
};

export default CardMain;
