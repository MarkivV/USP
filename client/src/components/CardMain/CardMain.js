import React from 'react';
import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const CardMain = () => {
    return (
            <Box p={1}>
                <CardMedia
                    component={"img"}
                    image={"https://thumbs.dreamstime.com/b/черный-программист-в-са-оне-запуска-ит-53863167.jpg"}
                    alt={"alt"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Box>
    );
};

export default CardMain;
