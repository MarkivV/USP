import React from 'react';
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Box style={{height: "375px", background: "#14110F"}}>
            <Grid container>
                <Grid xs={4}>
                    <Stack direction={"column"} spacing={1}  style={{ padding: "35px"}}>
                        <h6 >
                            Навігація
                        </h6>
                        <Divider orientation="horizontal" style={{background: "white"}} variant={"middle"}/>
                        <Stack direction={"column"} style={{marginTop: "10px"}}>
                            <Link to={"/main"} style={{textDecoration: 'none'}} ><h3>Головна</h3></Link>
                            <Link to={"/categories/politic"} style={{textDecoration: 'none'}}><h3>Політика</h3></Link>
                            <Link to={"/"} style={{textDecoration: 'none'}} ><h3>Наука</h3></Link>
                            <Link to={"/categories/society"} style={{textDecoration: 'none'}} ><h3>Суспільство</h3></Link>
                            <Link to={"/categories/society"} style={{textDecoration: 'none'}} ><h3>Блог</h3></Link>
                            <Link to={"/suggest"}  style={{textDecoration: 'none'}}><h3>Запропонувати новину</h3></Link>
                        </Stack>
                    </Stack>
                    </Grid>
                <Grid xs={4}>
                    <Stack direction={"column"} spacing={1} style={{ padding: "35px"}}>
                        <h6 >
                            Підтримка
                        </h6>
                        <Divider orientation="horizontal" style={{background: "white"}} variant={"middle"}/>
                        <Stack direction={"column"} style={{marginTop: "10px"}}>
                            <Link to={"/main"} style={{textDecoration: 'none'}} ><h3>Політика конфіденційності</h3></Link>
                            <Link to={"/categories/politic"} style={{textDecoration: 'none'}}><h3>Про ПУСВ</h3></Link>
                            <Link to={"/"} style={{textDecoration: 'none'}} ><h3 style={{fontWeight: 700}}>Важливо</h3></Link>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid xs={4}>
                    <Stack direction={"column"} spacing={1} style={{ padding: "35px"}}>
                        <h6>
                            Контакти
                        </h6>
                        <Divider orientation="horizontal" style={{background: "white"}} variant={"middle"}/>
                        <Stack direction={"column"} style={{marginTop: "10px"}}>
                            <Link to={"/main"} style={{textDecoration: 'none'}} ><h3>Instagram</h3></Link>
                            <Link to={"/categories/politic"} style={{textDecoration: 'none'}}><h3>Telegram</h3></Link>
                            <Link to={"/"} style={{textDecoration: 'none'}} ><h3>Facebook</h3></Link>
                            <Link to={"/categories/society"} style={{textDecoration: 'none'}} ><h3>Email</h3></Link>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <h3 style={{ padding: "35px"}}>
                © 2022 Bethesda Softworks LLC, a ZeniMax Media company. Trademarks belong to their respective owners. All Rights Reserved.
            </h3>
        </Box>
    );
};

export default Footer;
