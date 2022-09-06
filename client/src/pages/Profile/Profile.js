import React, {useEffect, useState} from 'react';
import CardMain from "../../components/CardMain/CardMain";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, CardMedia, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import profilePicture from "../../assets/profile.png"
import {updatePost} from "../../redux/features/posts/postsSlice";
import {selectAllUsers, updateUser} from "../../redux/features/users/usersSlice";
import FileBase from "react-file-base64";

const Profile = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const userId = JSON.parse(localStorage.getItem('profile'))
    const users = useSelector(selectAllUsers)
    const user = users.users?.filter(item => item._id === userId?.result?._id)
    console.log(user)
    const {posts} = useSelector((state) => ({...state.posts}))
    const post = posts.filter(post => post.creator === userId?.result?._id);
    const postPublished = posts.filter(post => post.published === true);
    const [username, setUsername] = useState(user[0]?.username);

    useEffect(() => {
        if(!userId){
            navigate("/login")
        }
    }, []);




    const handleSubmit = () =>{
        const userNew = {...user, username}
        console.log(userNew)
        dispatch(updateUser(userNew))
        // navigate("/")
    }

    return (

        <Container maxWidth={"xl"}>
        <div style={{padding: "29px"}}>

            <Grid container spacing={5} >
                <Grid item xs={12} sm={6} lg={4}>
                    <Card elevation={0}>
                            <Stack direction={"row"} height={394}>

                                <Stack direction={"column"} style={{padding: "25px"}} spacing={2}>
                                    {/*<TextField style={{marginBottom: "0px", fontSize: "32px", color: "#000000"}} value={username} onChange={(e)=>setUsername(e.target.value)}>Імʼя користувача: {username}</TextField>*/}
                                    <h6 style={{marginBottom: "0px", fontSize: "14px", color: "#000000"}}>Імʼя користувача: {user[0]?.username}</h6>
                                    <h6 style={{marginBottom: "0px", fontSize: "14px", color: "#000000"}}>Електронна пошта: {user[0]?.email}</h6>

                                    <h6 style={{marginBottom: "0px", fontSize: "14px", color: "#000000"}}>Кількість опублікованих постів: {postPublished.length}</h6>
                                    <h6 style={{marginBottom: "0px", fontSize: "14px", color: "#000000"}}>Кількість надісланих постів: {post.length}</h6>
                                    <h6 style={{marginBottom: "0px", fontSize: "14px", color: "#000000"}}>Кількіст лайків: 1621</h6>
                                    {/*<h6 style={{ marginBottom: "0px", fontSize: "14px", marginLeft: "15px", marginRight: "15px", color: "#000000"}}>: {user.result?.img}</h6>*/}
                                </Stack>
                            </Stack>
                        </Card>
                </Grid>

                {
                    post.map(user=>(
                        <Grid item xs={12} sm={6} lg={4}>
                            <CardMain post={user} key={user._id} edit={false}/>
                        </Grid>
                    ))
                }
            </Grid>

        </div>
        </Container>
    );
};

export default Profile;
