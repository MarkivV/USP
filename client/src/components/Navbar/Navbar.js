import React from 'react';
import {AppBar, styled, Toolbar, Typography} from "@mui/material";

const Navbar = () => {
    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#ffff",
        padding: "20px"
    })

    return (
        <AppBar position={"static"}>
            <StyledToolBar>
                <Typography variant={"h6"} color={"black"}>
                    ПУСВ
                </Typography>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;
