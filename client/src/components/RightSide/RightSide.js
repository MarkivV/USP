import React from 'react';
import SmallCard from "./SmallCard";
import {useSelector} from "react-redux";
import CardMain from "../CardMain/CardMain";

const RightSide = ({posts}) => {

    return (
        <div>
            {
                posts.slice(0,4).map(user=>(
                    <SmallCard post={user} key={user._id}/>
                ))
            }
        </div>
    );
};

export default RightSide;
