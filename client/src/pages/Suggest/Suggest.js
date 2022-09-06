import React, {useEffect, useState} from 'react';
import {createPost} from "../../redux/features/posts/postsSlice";
import {useDispatch} from "react-redux";
import FileBase from "react-file-base64";
import {Button, Container, Grid, IconButton, MenuItem, Stack, TextField, Typography} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const Suggest = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creator, setCreator] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const [tags, setTags] = useState(["tag1", "tag2"]);
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if(!user){
            navigate("/login")
        }
    }, []);



    const onSavePostClicked = () =>{
        const newPost = {title, description, category, img}
        dispatch(createPost(newPost))
        setTitle('')
        setDescription('')
        setCreator('')
        setCategory('')
        setImg('')
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
        <Container maxWidth={"xl"}>
            <Grid container style={{padding: "29px"}} spacing={2}>
                <Grid item xs={12} md={6}>
                    <Stack direction={"column"} spacing={4}>
                        <TextField
                            type="text"
                            label={"Заголовок"}
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                        <TextField
                            disabled
                            label={"Автор"}
                            defaultValue={user?.result?.username}
                        />
                        <TextField
                            multiline
                            rows={8}
                            label={"Текст"}
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Категорія"
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            helperText="Виберіть категорію"
                        >
                            {categ.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/*<div id="postContent"><FileBase type="file" multiple={false} onDone={({ base64 }) => setImg( base64 )} /></div>*/}
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setImg( base64 )} />
                            {/*<input hidden type="file" multiple={false} onDone={({ base64 }) => setImg( base64 )}/>*/}
                        <Button
                            variant="contained"
                            onClick={onSavePostClicked}
                            style={{width: "150px", backgroundColor: "#000000"}}
                        >Відправити</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <h4 style={{fontSize: "32px", color: "#14110F", fontWeight: "900", textAlign: "justify"}}>Маєш новину яка підходить за форматом?</h4>
                        <h4 style={{fontSize: "20px", color: "#14110F", fontWeight: "400", lineHeight: "30px", textAlign: "justify"}}> Надсилай її до редакції, матеріал буде розглянений протягом декількох днів</h4>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Suggest;
