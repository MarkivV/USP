import React from 'react';
import {Card, CardActionArea, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";

const SmallCard = ({post}) => {
    return (
        <Card style={{position: "relative", marginBottom: "15px"}}>
            <CardActionArea>
                <Link to={"/publication/"+post._id}>
                    <CardMedia
                        component={"img"}
                        image={post.img}
                        height={"200"}
                        alt="image"
                        style={{objectFit: "cover", filter: "brightness(60%)", objectPosition: "top"}}
                    />
                    <div  style={{position: "absolute", top: "0px", bottom: "0px", left: "0px", right: "0px",  display: "flex", flexDirection: "column"}}>
                        <h4 style={{marginTop:"auto", fontSize: "30px", marginLeft: "15px", marginRight: "15px", marginBottom: "15px"}}>{post.title}</h4>
                    </div>
                </Link>
            </CardActionArea>
        </Card>
    );
};

export default SmallCard;
