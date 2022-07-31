import React from 'react';
import {Box, Stack} from "@mui/material";

const SmallCard = () => {
    return (
        <Box p={1}>
            <Stack direction={"row"} spacing={1}>
                <img style={{maxWidth: "150px"}} src={"https://thumbs.dreamstime.com/b/черный-программист-в-са-оне-запуска-ит-53863167.jpg"} alt={"alt"}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ipsa!</p>
            </Stack>
        </Box>
    );
};

export default SmallCard;
