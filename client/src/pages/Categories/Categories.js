import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import CardMain from "../../components/CardMain/CardMain";
import {
    Backdrop,
    Button,
    Card, CardMedia,
    CircularProgress,
    Container,
    Grid,
    ImageList,
    LinearProgress,
    Skeleton
} from "@mui/material";
import flag from "../../assets/flag.jpeg";

const Categories = () => {
    const {category} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {posts} = useSelector((state) => ({...state.posts}))
    const [open, setOpen] = React.useState(true);
    console.log(posts.loading)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    const post = posts.filter(post => post.category === category);



    return (
        <div>
            <Container maxWidth={"xl"}>
            {
                !post ? (
                    <div style={{padding: "29px"}}>
                    <Grid container spacing={5} >
                        <Grid xs={12} sm={12} md={8} lg={8} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={"415"} height={394} />
                        </Grid>
                    </Grid>
                    </div>
                ) : (
                    <div style={{padding: "29px"}}>
                        <Grid container spacing={5} >
                            <Grid item xs={12} sm={12} md={8} lg={8}>
                                <Card style={{position: "relative", borderRadius: 10}}>
                                    <CardMedia
                                        component={"img"}
                                        image={flag}
                                        height={"394"}
                                        alt="image"
                                        style={{position: "relative", objectFit: "cover", filter: "brightness(50%)"}}
                                    />
                                </Card >
                            </Grid>

                            {
                                post.map(user=>(
                                    <Grid item xs={12} sm={6} md={4} lg={4}>
                                        <CardMain post={user} key={user._id}/>
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </div>
                )
            }
            </Container>
        </div>
    );
};

export default Categories;
