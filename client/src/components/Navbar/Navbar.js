import React from 'react';
import {Link} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import {Box} from "@mui/material";



const Navbar = () => {

    return (
        <Box>
            <AppBar position="sticky" style={{background: "#14110F", height: "61px"}}>
                <Toolbar >
                    <Typography variant="h6" component="div" style={{fontWeight: 900, fontSize: "32px" }}>
                        ПУСВ
                    </Typography>
                        <Link to={"/main"} style={{textDecoration: 'none'}} ><h2>Головна</h2></Link>
                        <Link to={"/categories/politic"} style={{textDecoration: 'none'}}><h2>Політика</h2></Link>
                        <Link to={"/"} style={{textDecoration: 'none'}} ><h2>Наука</h2></Link>
                        <Link to={"/categories/society"} style={{textDecoration: 'none'}} ><h2>Суспільство</h2></Link>
                        <Link to={"/categories/society"} style={{textDecoration: 'none'}} ><h2>Блог</h2></Link>
                        <Link to={"/suggest"}  style={{textDecoration: 'none'}}><h2>Запропонувати новину</h2></Link>
                </Toolbar>
            </AppBar>
        </Box>
        );
};

export default Navbar;
