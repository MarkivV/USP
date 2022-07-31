import React from 'react';
import {Box, CardMedia} from "@mui/material";

const Slider = () => {
    return (
        <Box p={1}>
            <CardMedia
                component={"img"}
                image={"https://thumbs.dreamstime.com/b/черный-программист-в-са-оне-запуска-ит-53863167.jpg"}
                alt={"al"}
                height={"450px"}
            />
        </Box>
    );
};

export default Slider;
