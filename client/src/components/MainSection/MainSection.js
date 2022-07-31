import React from 'react';
import {Box, Stack} from "@mui/material";
import CardMain from "../CardMain/CardMain";
import SmallCard from "../SmallCard/SmallCard";

const MainSection = () => {
    return (
        <Box>
            <h1>title</h1>
            <Stack direction={"row"}>
                <CardMain/>
                <CardMain/>
            </Stack>
            <Stack direction={"row"}>
                <Stack direction={"column"}>
                    <SmallCard/>
                    <SmallCard/>
                </Stack>
                <Stack direction={"column"}>
                    <SmallCard/>
                    <SmallCard/>
                </Stack>
            </Stack>
        </Box>
    );
};

export default MainSection;
