import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{display: "flex", height: "70px", margin: "25px", maxWidth: "100%"}}>
            <Link to={"/login"}><h2 style={{marginLeft: "25px", color: "white"}}>Login</h2></Link>
            <Link to={"/register"}><h2 style={{marginLeft: "25px", color: "white"}}>Register</h2></Link>
            <Link to={"/"}><h2 style={{marginLeft: "25px", color: "white"}}>Main</h2></Link>
            <Link to={"/categories/politic"}><h2 style={{marginLeft: "25px", color: "white"}}>Politic</h2></Link>
            <Link to={"/categories/society"}><h2 style={{marginLeft: "25px", color: "white"}}>Society</h2></Link>
            <Link to={"/suggest"}><h2 style={{marginLeft: "25px", color: "white"}}>Suggest</h2></Link>
        </div>
    );
};

export default Navbar;
