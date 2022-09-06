import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CardMain from "../../components/CardMain/CardMain";
import {getPosts} from "../../redux/features/posts/postsSlice"
import {Button, Card, CardContent, CardMedia, Container, Grid, Paper, Skeleton, Stack, Typography} from "@mui/material";
import flag from "../../assets/flag.jpeg"
import Divider from "@mui/material/Divider";

const Main = () => {
    const {posts} = useSelector((state) => ({...state.posts}))
    const {stats} = useSelector((state) => ({...state.stats}))
    console.log(stats.data?.data.stats)
    const user = JSON.parse(localStorage.getItem('profile'))
    const post = posts.filter(post => post.published === true);
    const postPolitic = post.filter(post => post.category === "politic");
    const postSociety = post.filter(post => post.category === "society");
    console.log(post)

    console.log(posts)
    console.log(posts)




    return (
        <div>
            {
                posts.loading ? (
                    <Container maxWidth={"xl"}>
                        <Grid container spacing={2} >
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                            <Grid xs={4} style={{padding: "38px"}}>
                                <Skeleton animation="wave" variant="rectangular" width={415} height={394} />
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    <Container maxWidth="xl">
                        <div style={{paddingLeft: "29px", paddingRight: "29px", paddingTop: "29px"}}>
                                <h4 style={{color: "#000000"}}>АКТУАЛЬНІ ВТРАТИ КРАЇНИ ЗАГАРБНИКА РОСІЇ</h4>
                                <Grid container style={{marginTop: "15px"}}>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                            <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>~{stats.data?.data.stats?.personnel_units}</Typography>
                                            <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Особовий склад</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid xs={3} md={3} lg={1} item >
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.planes}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Літаки</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.helicopters}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Гелікоптери</Typography>
                                        </Stack>
                                        </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.tanks}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Танки</Typography>
                                        </Stack>
                                        </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.armoured_fighting_vehicles}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Броньові машини</Typography>
                                        </Stack>
                                        </Grid>

                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.artillery_systems}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Артилерія</Typography>
                                        </Stack>
                                        </Grid>

                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.aa_warfare_systems}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Засоби ППО</Typography>
                                        </Stack>
                                        </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.mlrs}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>РСЗВ</Typography>
                                        </Stack>
                                        </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.vehicles_fuel_tanks}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Автотехніка</Typography>
                                        </Stack>
                                        </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.special_military_equip}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Спецтехніка</Typography>
                                        </Stack>
                                        </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.uav_systems}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>БпЛА ОТР</Typography>
                                        </Stack>
                                        </Grid>
                                    <Grid xs={3} md={3} lg={1} item>
                                        <Stack direction={"column"} style={{alignItems: "center"}}>
                                        <Typography style={{fontSize: "16px", color: "#14110F", fontWeight: "500", lineHeight: "30px", whiteSpace: 'pre-line'}}>{stats.data?.data.stats?.warships_cutters}</Typography>
                                        <Typography style={{fontSize: "12px", color: "#14110F", fontWeight: "400", lineHeight: "30px", whiteSpace: 'pre-line'}}>Кораблі та катери</Typography>
                                        </Stack>
                                        </Grid>
                                </Grid>
                        </div>
                        <div style={{padding: "29px"}}>
                            <Card style={{position: "relative", borderRadius: 10}}>
                                <CardMedia
                                    component={"img"}
                                    image={flag}
                                    height={"500"}
                                    alt="image"
                                    style={{position: "relative", objectFit: "cover", filter: "brightness(60%)"}}
                                />
                                <div style={{position: "absolute", top: "0px", bottom: "0px", left: "0px", right: "0px",  display: "flex", flexDirection: "column", padding: "1rem", alignItems: "center"}}>
                                    <Typography style={{marginTop:"auto", fontSize: "32px", fontWeight:  700, marginBottom: "0px", marginLeft: "15px", marginRight: "15px"}} >Шкіла - Сатиричне видання Українською</Typography>
                                    <Typography style={{marginTop:"0", fontSize: "24px", marginBottom: "auto", fontWeight:  400, marginLeft: "15px", marginRight: "15px"}} >З 1488 року підтримуємо звязок між Вами та актуальними новинами в світі</Typography>
                                    <Typography style={{marginTop:"auto", fontSize: "24px", marginBottom: "0px", fontWeight:  400, marginLeft: "15px", marginRight: "15px"}} >Разом допомагаємо Україні</Typography>
                                    <Typography style={{marginTop:"0", fontSize: "30px", fontWeight:  700, marginBottom: "0px", marginLeft: "15px", marginRight: "15px"}} >ДEТАЛЬНІШЕ</Typography>
                                </div>
                            </Card >
                        </div>
                        <Typography align={"center"} style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#000000"
                        }}>
                            Останні новини
                        </Typography>
                        <div style={{padding: "29px"}}>
                            <Grid container spacing={5} >

                                {
                                    post.slice(0,6).map(user=>(
                                        <Grid item xs={12} sm={6} md={4} lg={4}>
                                            <CardMain post={user} key={user._id} edit={false}/>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </div>

                        <Typography align={"center"} style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#000000"
                        }}>
                            Політика
                        </Typography>
                        <div style={{padding: "29px"}}>
                            <Grid container spacing={5} >

                                {
                                    postPolitic.slice(0,6).map(user=>(
                                        <Grid item xs={12} sm={6} md={4} lg={4}>
                                            <CardMain post={user} key={user._id} edit={false}/>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </div>
                        <Typography align={"center"} style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#000000"
                        }}>
                            Суспільство
                        </Typography>
                        <div style={{padding: "29px"}}>
                            <Grid container spacing={5} >

                                {
                                    postSociety.slice(0,6).map(user=>(
                                        <Grid item xs={12} sm={6} md={4} lg={4}>
                                            <CardMain post={user} key={user._id} edit={false}/>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </div>
                    </Container>
                )
            }


        </div>
    );
};

export default Main;
