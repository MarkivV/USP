import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {getCategory} from "../../redux/features/posts/postsSlice";
import CardMain from "../../components/CardMain/CardMain";
import {Backdrop, Button, CircularProgress, Container, Grid, ImageList, LinearProgress, Skeleton} from "@mui/material";

const Categories = () => {
    const {category} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {posts, loading} = useSelector((state) => ({...state.posts}))
    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        dispatch(getCategory(category))
    }, [location]);
    console.log()


    return (
        <div>
            <Container maxWidth={"xl"}>
            {
                loading ? (
                    <Grid container spacing={2} >
                        <Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid><Grid xs={4} style={{padding: "38px"}}>
                            <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container >

                        {
                            posts.map(user=>(
                                <Grid xs={12} sm={6} md={4}>
                                    <CardMain post={user} key={user._id}/>
                                </Grid>
                            ))
                        }

                    </Grid>
                )
            }
            </Container>
        </div>
    );
};

export default Categories;
