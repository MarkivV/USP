import React from 'react';
import {Box, Stack, styled, Toolbar} from "@mui/material";
import MainSection from "../MainSection/MainSection";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

const Main = () => {

    return (
        <Box flex={6}>
            <Slider/>
            <Stack direction={"column"} spacing={5}>
                <MainSection/>
                <MainSection/>
                <MainSection/>
                <MainSection/>
            </Stack>
            <Footer/>
        </Box>
    );
};

export default Main;
