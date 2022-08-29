import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux/features/posts/postsSlice";
import CardMain from "../../components/CardMain/CardMain";

const CardDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {posts, loading} = useSelector((state) => ({...state.posts}))
    useEffect(() => {
      dispatch(getPost(id))
    }, []);
    console.log(posts)
    return (
        <div>
            {
                loading ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <div>
                        {
                            posts.map(user=>(
                                <CardMain post={user} key={user._id}/>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default CardDetails;
