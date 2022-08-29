import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CardMain from "../../components/CardMain/CardMain";
import {createPost, postAdded, getPosts} from "../../redux/features/posts/postsSlice"
import FileBase from "react-file-base64";
import {Link, useLocation} from "react-router-dom";
import {Box, Container, Grid, ImageList, Stack, Typography} from "@mui/material";
import RightSide from "../../components/RightSide/RightSide";
import image from "../../assets/zelenskiy.jpeg"

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
            <div style={{ overflow: "hidden"}}>
                <img
                    src={image}
                    alt="image"
                    style={{position: "relative", width: "100%", height: "500px", objectFit: "cover", filter: "brightness(30%)"}}
                />
                    <h4 style={{position: "absolute", top: "25%", left: "50%"}} >ПУСВ - Перше Українське Сатиричне Видання</h4>
                    <p style={{position: "absolute", top: "29%", left: "50%"}} >З 1488 року підтримуємо звязок між Вами та актуальними новинами в світі</p>
            </div >
            <Container maxWidth="xl">
                <Typography align={"center"} style={{
                    marginTop: "28px",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#000000"
                }}>
                    Останні новини
                </Typography>
                    <Grid container >

                    {
                        posts.map(user=>(
                            <Grid xs={4}>
                                <CardMain post={user} key={user._id}/>
                            </Grid>
                        ))
                    }

                    </Grid>
                <Typography align={"center"} style={{
                    marginTop: "28px",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#000000"
                }}>
                    Найпопулярніше
                </Typography>
                <Grid container >

                    {
                        posts.map(user=>(
                            <Grid xs={4}>
                                <CardMain post={user} key={user._id}/>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Main;
