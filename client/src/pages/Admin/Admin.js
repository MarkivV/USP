import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button, Container, Grid, Typography} from "@mui/material";
import CardMain from "../../components/CardMain/CardMain";

const Admin = () => {
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'))
    const {posts} = useSelector((state) => ({...state.posts}))
    const postNotPublished = posts.filter(post => post.published === false);
    const postPublished = posts.filter(post => post.published === true);
    const [published, setPublished] = useState(false);
    useEffect(() => {
        if (user?.result?.isAdmin !== true){
            navigate("/");
        }
    }, []);

    console.log(user)

    return (
        <>
            <Container maxWidth={"xl"} >
                <div style={{padding: "29px"}}>
                    <Button
                        variant="contained"
                        style={{width: "150px", backgroundColor: "#000000"}}
                        onClick={()=>setPublished(!published)}
                    >
                        {published ? "Опубліковані" : "Запропоновані"}
                    </Button>
                </div>
            </Container>
            {
                published ? (
                    <Container maxWidth={"xl"}>
                        <Typography align={"center"} style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#000000"
                        }}>
                            Опубліковані
                        </Typography>
                        <div style={{padding: "29px"}}>
                            <Grid container spacing={5} >

                                {
                                    postPublished.map(user=>(
                                        <Grid item xs={12} sm={6} md={4} lg={4}>
                                            <CardMain post={user} key={user._id} edit={true}/>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </div>

                    </Container>
                ) : (
                    <Container maxWidth={"xl"}>
                        <Typography align={"center"} style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#000000"
                        }}>
                            Запропоновані
                        </Typography>
                        <div style={{padding: "29px"}}>
                            <Grid container spacing={5} >

                                {
                                    postNotPublished.map(user=>(
                                        <Grid item xs={12} sm={6} md={4} lg={4}>
                                            <CardMain post={user} key={user._id} edit={true}/>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </div>

                    </Container>
                    )
            }
        </>
    );
};

export default Admin;
