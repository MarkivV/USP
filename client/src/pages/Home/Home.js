import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Box, Container, Stack} from "@mui/material";
import RightBar from "../../components/RightBar/RightBar";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
    return (
        <Box>
            <Navbar/>
            <Header/>
            <Container maxWidth={"xl"}>
            <Stack direction={"row"}>
                <Main/>
                <RightBar/>
            </Stack>
            <Footer/>
            </Container>
        </Box>
    );
};

export default Home;
