import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Card, CardMedia, Container, Grid, Stack, Typography,} from "@mui/material";
import {selectAllUsers} from "../../redux/features/users/usersSlice";
import Divider from "@mui/material/Divider";
import SmallCard from "../../components/SmallCard/SmallCard";


const CardDetails = () => {
    const {id} = useParams()
    const {posts} = useSelector((state) =>  ({...state.posts}))
    const post = posts.filter(post => post._id === id);
    const postSmallCard = posts.filter(post => post.published === true);
    const users = useSelector(selectAllUsers)
    const author = users.users.find(user => user._id === post[0]?.creator);
    const location = useLocation()
    const handleCategory = (category) =>{
        if(category === "politic"){
            return "Політика"
        }else{
            return "Суспільство"
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <div>
            {
                (
                    <Card>
                        <Container maxWidth={"xl"}>
                        <CardMedia
                            component={"img"}
                            image={post[0]?.img}
                            height={"600"}
                            alt="image"
                            style={{objectFit: "cover", filter: "brightness(100%)", marginTop: "15px"}}
                        />
                            <Grid container style={{marginTop: "5px"}} spacing={4}>
                                <Grid item xs={12} sm={12} md={8} lg={8}>
                                    <Stack direction={"column"}>
                                        <h4 style={{fontSize: "32px", color: "#14110F", fontWeight: "900", textAlign: "justify"}}>{post[0]?.title}</h4>
                                        <Stack direction={"row"}>
                                            <h4 style={{fontSize: "12px", color: "#14110F", fontWeight: "400", fontStyle: "italic"}}>Категорія: {handleCategory(post[0]?.category)}</h4>
                                            <h4 style={{fontSize: "12px", color: "#14110F", fontWeight: "400", fontStyle: "italic", marginLeft: "10px"}}>Автор: {author?.username}</h4>
                                        </Stack>
                                        <Divider/>
                                        <div style={{marginTop: "15px"}}>
                                            <Typography style={{fontSize: "20px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>{post[0]?.description}</Typography>
                                        </div>
                                        <div>
                                            <Typography style={{fontSize: "14px", color: "#14110F", fontWeight: "500", fontStyle: "italic", lineHeight: "30px", marginTop: "15px", textDecoration: "underline"}}>Всі статті на цьому сайті є вигадані, можливі співпадіння є випадковими</Typography>
                                        </div>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    {
                                        postSmallCard.slice(0,6).map((item)=>(
                                            <SmallCard post={item}/>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                        </Container>
                    </Card>

                )
            }
        </div>
    );
};

export default CardDetails;
