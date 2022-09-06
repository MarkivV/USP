import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import {Box, IconButton, Menu, MenuItem, Stack} from "@mui/material";
import "./style.css"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountBoxSvgIcon from '@mui/icons-material/AccountBox';
import {useDispatch} from "react-redux";
import {setLogout} from "../../redux/features/users/usersSlice";

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem('profile'))
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Exit = () => {
        localStorage.clear()
        setAnchorEl(null);
    };

    const navigateToProfilePage = () => {
        navigate("/profile")
        setAnchorEl(null);
    };


    return (
        <Box>
            <AppBar  position="sticky" elevation={0}  style={{background: "#FFFFFF", height: "61px"}}>
                <Toolbar >
                    <Link to={"/"}>
                    <Typography variant="h6" component="h2" style={{fontWeight: 900, fontSize: "32px", background: "#000000", color:"#FFFFFF", padding: "12px"}}>
                        ШКІЛА
                    </Typography>
                    </Link>
                    <Stack direction={"row"} spacing={3} style={{alignItems: "center", marginLeft: "54px", flexGrow: 2}}>
                        <Link to={"/main"}  >Головна</Link>
                        <Link to={"/categories/politic"} >Політика</Link>
                        <Link to={"/categories/society"}  >Суспільство</Link>
                        <Link to={"/categories/society"}  >Блог</Link>
                        <Link to={"/suggest"} >Запропонувати новину</Link>
                    </Stack>

                    {
                        user ? (
                            <div>

                                <Stack direction={"row"} >
                                    <IconButton
                                        disableRipple={true}
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountBoxSvgIcon style={{color:"#000000"}}/>
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={navigateToProfilePage}>Профіль</MenuItem>
                                        <MenuItem onClick={Exit}>Вийти</MenuItem>
                                    </Menu>
                                    <Typography variant={"h2"} style={{fontSize: "14px", fontWeight: 500, lineHeight: 16}}>{user?.result?.username}</Typography>
                                </Stack>
                            </div>
                        ) : (
                            <Link to={"/profile"} >
                                <Typography variant={"h2"} style={{fontSize: "14px", fontWeight: 500, lineHeight: 16}}>Ввійти</Typography>
                            </Link>
                        )
                    }


                </Toolbar>
            </AppBar>
        </Box>
        );
};

export default Navbar;
