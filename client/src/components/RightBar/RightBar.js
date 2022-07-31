import React from 'react';
import {Box, Stack} from "@mui/material";
import SmallCard from "../SmallCard/SmallCard";

const RightBar = () => {
    return (
        <Box flex={2} sx={{display: {xs: "none", sm: "block"}}}>
            <h1>Недавні</h1>
            <Stack direction={"column"} spacing={2}>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
            </Stack>
        </Box>
    );
};

export default RightBar;
